<template>
	<el-card>
		<template>
			<el-input
			  placeholder="用户查找"
			  v-model="searchinput"
			  clearable v-on:change='searchfilter(searchinput)' v-on:clear='clearinput()' style="width: 200px" size='medium' prefix-icon='el-icon-search'>
			</el-input>
			<el-divider></el-divider>
			<el-form :inline="true" :model="form" v-for="form in users" :key="form.username" v-if="form.username!='admin'">
				<el-form-item label="用户名">	
					<el-input v-model="form.username" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.password" :readonly="true"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-input v-model="form.gender"></el-input>
				</el-form-item>
				<el-form-item label="生日">
					<el-input v-model="form.birthday" ></el-input>
				</el-form-item>
				<el-form-item label="地区">
					<el-input v-model="form.location"></el-input>
				</el-form-item>
				<el-form-item label="个性签名">
					<el-input v-model="form.specialsign"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="updateuser(form)">更新用户资料</el-button>
					<el-pop<el-button type="warning" @click="deleteuser(form)">删除用户(包含评论)</el-button>
				</el-form-item>
				<el-divider></el-divider>
			</el-form>
		</template>
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
				users:[],
				searchinput:''
			}
		},
		methods:{
			searchfilter(searchinput){
				this.users = this.users.filter((currentitem)=>{
					var text = currentitem.username+currentitem.gender+currentitem.location+currentitem.birthday+currentitem.specialsign;
					return (text.indexOf(searchinput.toLowerCase()) > -1);
				})
			},
			clearinput(){
				this.$axios.get('/api/users').then(res=>{
					if(res.data.status == 200){
						this.$message({
							message:res.data.message,
							type:'success'
						})
						this.users = res.data.users;
						console.log(this.users);
					}
				});
			},
			updateuser(form){
				// console.log(user);
				this.$axios.post('/api/updateuser', {
					'username':form.username,
					'gender':form.gender,
					'birthday':form.birthday,
					'location':form.location,
					'specialsign':form.specialsign
				}).then((res) => {
					console.log(res);
					if (res.data.status == 200) {
						this.$message({
							message: res.data.message,
							type: 'success'
						});
						setTimeout(()=>{
							this.$router.go(0);
						},3000);
					}
				}).catch((err) => {
					console.log(err);
				})
			},
			deleteuser(form){
				if(!confirm('确定删除')){
					this.$message({
						message: '取消删除',
						type: 'success'
					});
					return;
				}
				this.$axios.post('/api/deleteuser', {
					'username':form.username
				}).then((res) => {
					console.log(res);
					if (res.data.status == 200) {
						this.$message({
							message: res.data.message,
							type: 'success'
						});
						setTimeout(()=>{
							this.$router.go(0);
						},2000);
					}
				}).catch((err) => {
					console.log(err);
				})
			}
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
			}else{
				this.$axios.get('/api/users').then(res=>{
					if(res.data.status == 200){
						this.$message({
							message:res.data.message,
							type:'success'
						})
						this.users = res.data.users;
						console.log(this.users);
					}
				})
			}
		}
	}
</script>

<style>
</style>
