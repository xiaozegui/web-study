<template>
	<el-card>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username" required>
				<el-input v-model="ruleForm.username" placeholder="请输入用户名" autocomplete="on"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password" required>
				<el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码" show-password></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkpassword" required>
				<el-input type="password" v-model="ruleForm.checkpassword" autocomplete="off" placeholder="请再次输入密码" show-password></el-input>
			</el-form-item>
			<el-form-item label="性别">
				<el-select v-model="ruleForm.gender" placeholder="请选择性别">
					<el-option label="男" value="男"></el-option>
					<el-option label="女" value="女"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="生日">
				<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;"></el-date-picker>
			</el-form-item>
			<el-form-item label="地区">
				<el-input v-model="ruleForm.location"></el-input>
			</el-form-item>
			<el-form-item label="个性签名">
				<el-input v-model="ruleForm.specialsign"></el-input>
			</el-form-item>
			<el-form-item label="验证码" prop="identify" required>
				<el-input v-model="ruleForm.identify" placeholder="请输入验证码"></el-input>
				<p></p>
				<p></p>
				<div class="code" @click="refreshCode">
					<s-identify :identifyCode="identifyCode"></s-identify>
				</div>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import sidentify from './identify.vue'
	export default {
		data() {
			var validateusername = (rule, value, callback) => {
				// console.log(value in this.mycheckusername);
				let reg= /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){2,19}$/
				if(!reg.test(value)){callback(new Error('只能输入3-20个以字母开头、可带数字、“_”、“.”的字串'))
				}else if (this.mycheckusername.indexOf(value)!=-1) {
					callback(new Error('username is exists'));
				} else {
					callback();
				}
		};
		var validateidentify = (rule, value, callback) => {
			if (value == '') {
				callback(new Error('请输入验证码'));
			} else if (value.length != 4) {
				callback(new Error('请输入4位验证码'));
			} else if (value != this.identifyCode) {
				callback(new Error('验证码输入错误'));
			} else {
				callback();
			}
		};
		var validatecheckpassword = (rule, value, callback) => {
			if (value == '') {
				callback(new Error('请再次输入密码'));
			} else if (value.length > 20 || value.length < 3) {
				callback(new Error('密码长度3-20个字符'));
			} else if (value != this.ruleForm.password) {
				callback(new Error('两次密码输入不一致'));
			} else {
				callback();
			}
		};
		var validpassword=(rule,value,callback)=>{
		      let reg= /^(\w){3,20}$/
		      if(!reg.test(value)){callback(new Error('只能输入3-20个字母、数字、下划线'))
		      }else{
		          callback()
		      }
		  };
		return {
			identifyCodes: "1234567890",
			identifyCode: "",
			mycheckusername: [],
			ruleForm: {
				username: '',
				password: '',
				checkpassword: '',
				identify: '',
				gender: '男',
				birthday: '1990-01-01',
				location: '汕头',
				specialsign: 'you are unique',
				role: 2
			},
			rules: {
				username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					},
					{
						validator:validateusername,
						trigger: 'blur'
					}
				],
				password: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'
				}, {
					validator:validpassword,
					trigger: 'blur'
				}],
				identify: [{
					validator: validateidentify,
					trigger: 'blur'
				}],
				checkpassword: [{
					validator: validatecheckpassword,
					trigger: 'blur'
				}]
			}
		};
	},
	mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
			this.$axios.get('/api/users').then(res => {
				res.data.users.forEach(item=>{
					this.mycheckusername.push(item.username);
				})
				console.log(this.mycheckusername);
			});
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$axios.post('/api/register', {
							'username': this.ruleForm.username,
							'password': this.ruleForm.password,
							'gender': this.ruleForm.gender,
							'birthday': this.ruleForm.birthday,
							'location': this.ruleForm.location,
							'specialsign': this.ruleForm.specialsign,
							'role': this.ruleForm.role
						}).then((res) => {
							console.log(res);
							if (res.data.status == 200) {
								this.$message({
									message: res.data.message,
									type: 'success'
								});
								setTimeout(()=>{
									sessionStorage.setItem('username',this.ruleForm.username);
									this.$router.push('/login');
								},1000)
								
							} else {
								this.$message({
									message: res.data.status + ': ' + res.data.message,
									type: 'warning'
								})
							}
						}).catch((err) => {
							console.log(err);
						})
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					];
				}
				console.log(this.identifyCode);
			}
		},
		components: {
			's-identify': sidentify
		},
		beforeMount() {
			if (this.$route.path == '/register') {
				if (sessionStorage.getItem('token')) {
					this.$message({
						message: '您已登录，无需注册，3后跳转',
						type: 'waning'
					});
					setTimeout(()=>{
						this.$router.push('/');
					},3000)
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.el-form {
		width: 460px;
	}

	.code {
		width: 114px;
		height: 40px;
	}
</style>
