<template>
	<el-card>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username" required>
				<el-input v-model="ruleForm.username" placeholder="请输入用户名" autocomplete="on"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password" required>
				<el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码" show-password></el-input>
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
				<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import sidentify from './identify.vue'
	export default {
		data() {
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
			var validusername=(rule,value,callback)=>{
			       let reg= /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){2,19}$/
			      if(!reg.test(value)){callback(new Error('只能输入3-20个以字母开头、可带数字、“_”、“.”的字串'))
			      }else{
			          callback()
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
				islogin:false,
				identifyCodes: "1234567890",
				identifyCode: "5489",
				ruleForm: {
					username: '',
					password: '',
					identify: ''
				},
				rules: {
					username: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							validator:validusername,
							trigger: 'blur'
						}
					],
					password: [
						{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
						},
						{
							validator:validpassword,
							trigger: 'blur'
						}],
					identify: [{
						validator: validateidentify,
						trigger: 'blur'
					}]
				}
			};
		},
		mounted() {
			// this.identifyCode = "";
			// this.makeCode(this.identifyCodes, 4);
			if (sessionStorage.getItem('token')){
				this.islogin = true;
			}
			this.ruleForm.username = sessionStorage.getItem('username');
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$axios.post('/api/login', {
							'username': this.ruleForm.username,
							'password': this.ruleForm.password
						}).then((res) => {
							console.log(res);
							if (res.data.status == 200) {
								this.$message({
									message: res.data.message,
									type: 'success'
								});
								sessionStorage.setItem('token', res.data.token);
								sessionStorage.setItem('username',res.data.user.username);
								this.$router.push('/index');
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
			if (this.$route.path == '/login') {
				if (sessionStorage.getItem('token')) {
					this.$message({
						message: '您已登录，无需重复登录,3s后跳转',
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
