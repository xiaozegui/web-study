<template>
	<el-card>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username" required>
				<el-input v-model="ruleForm.username" placeholder="请输入用户名" autocomplete="on" :readonly="true"></el-input>
			</el-form-item>
			<el-form-item label="旧密码" prop="oldpassword" required>
				<el-input type="password" v-model="ruleForm.oldpassword" autocomplete="off" placeholder="请输入旧密码" show-password></el-input>
			</el-form-item>
			<el-form-item label="新密码" prop="password" required>
				<el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入新密码" show-password></el-input>
			</el-form-item>
			<el-form-item label="确认新密码" prop="checkpassword" required>
				<el-input type="password" v-model="ruleForm.checkpassword" autocomplete="off" placeholder="请再次输入新密码" show-password></el-input>
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
				<el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
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
		return {
			identifyCodes: "1234567890",
			identifyCode: "",
			ruleForm: {
				username: '',
				oldpassword:'',
				password: '',
				checkpassword: '',
				identify: ''
			},
			rules: {
				username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					},
					{
						min: 3,
						max: 20,
						message: '长度在 3 到 20 个字符',
						trigger: 'blur'
					}
				],
				password: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'
				}, {
					min: 3,
					max: 20,
					message: '长度在 3 到 20 个字符',
					trigger: 'blur'
				}],
				oldpassword: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'
				}, {
					min: 3,
					max: 20,
					message: '长度在 3 到 20 个字符',
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
			if (!sessionStorage.getItem('token')) {
				this.$message({
					message: '您未登录！3s后跳转',
					type: 'waning'
				});
				setTimeout(()=>{
					this.$router.push('/');
				},3000)
			}
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
			this.ruleForm.username = sessionStorage.getItem('username');
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$axios.post('/api/updatepassword', {
							'username': this.ruleForm.username,
							'oldpassword':this.ruleForm.oldpassword,
							'password': this.ruleForm.password
						}).then((res) => {
							console.log(res);
							if (res.data.status == 200) {
								this.$message({
									message: res.data.message+'  3s后跳转',
									type: 'success'
								});
								setTimeout(()=>{
									sessionStorage.clear();
									this.$router.push('/login');
									this.$router.go(0);
								},3000)
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
