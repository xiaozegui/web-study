<template>
	<el-card>
		<el-input
		  placeholder="评论查找"
		  v-model="searchinput"
		  clearable v-on:change='searchfilter(searchinput)' v-on:clear='clearinput()' style="width: 200px" size='medium' prefix-icon='el-icon-search'>
		</el-input>
		<el-table :data="charts" style="width: 100%">
			<el-table-column label="用户" width="100px">
				<template slot-scope="scope">
					<span style="margin-left: 2px">{{ scope.row.username }}</span>
				</template>
			</el-table-column  width="80px">
			<el-table-column label="Page">
				<template slot-scope="scope">
					<span style="margin-left: 2px">{{ scope.row.page}}</span>
				</template>
			</el-table-column>
			<el-table-column label="评论" width="240px">
				<template slot-scope="scope">
					<el-input type='textarea' :autosize='true' v-model="scope.row.content"></el-input>
				</template>
			</el-table-column>
			<el-table-column label="时间">
				<template slot-scope="scope">
					<span style="margin-left: 2px">{{ scope.row.time }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="updatechart(scope.row)" >更新</el-button>
					<el-button size="mini" type="danger" @click="deletechart(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
				currentuser:'',
				charts:[],
				searchinput:''
			}
		},
		methods:{
			searchfilter(searchinput){
				this.charts = this.charts.filter((currentitem)=>{
					var text = currentitem.content+currentitem.page+currentitem.username;
					return (text.indexOf(searchinput.toLowerCase()) > -1);
				})
			},
			clearinput(){
				this.currentuser = sessionStorage.getItem('username');
				if(sessionStorage.getItem('username')=='admin'){
					this.$axios.get('/api/charts').then(res=>{
						if(res.data.status == 200){
							this.$message({
								message:res.data.message,
								type:'success'
							})
							this.charts = res.data.charts;
							console.log(this.charts);
						}
					});
				}
				else{
					this.$axios.post('/api/usernamecharts',{
						"username":this.currentuser
					}).then(res=>{
						if(res.data.status == 200){
							this.$message({
								message:res.data.message,
								type:'success'
							})
							this.charts = res.data.charts;
							console.log(this.charts);
						}
					});
				}
			},
			deletechart(chart){
				if(!confirm('确定删除')){
					this.$message({
						message: '取消删除',
						type: 'success'
					});
					return;
				}
				this.$axios.post('/api/deletechart', {
					'_id':chart._id
				}).then((res) => {
					console.log(res);
					if (res.data.status == 200) {
						this.$message({
							message: res.data.message,
							type: 'success'
						});
						setTimeout(()=>{
							this.$router.go(0);
						},1000);
					}
				}).catch((err) => {
					console.log(err);
				})
			},
			updatechart(chart){
				this.$axios.post('/api/updatechart', {
					'_id':chart._id,
					'content':chart.content,
					'time':new Date().getMonth()+"-"+new Date().getDate()+' '+new Date().getHours()+":"+new Date().getMinutes()
				}).then((res) => {
					console.log(res);
					if (res.data.status == 200) {
						this.$message({
							message: res.data.message,
							type: 'success'
						});
						setTimeout(()=>{
							this.$router.go(0);
						},1000);
					}
				}).catch((err) => {
					console.log(err);
				})
			}
		},
		mounted() {
			this.currentuser = sessionStorage.getItem('username');
			if (!sessionStorage.getItem('token')) {
				this.$message({
					message: '您未登录！3s后跳转',
					type: 'waning'
				});
				setTimeout(()=>{
					this.$router.push('/');
				},3000)
			}else{
				if(sessionStorage.getItem('username')=='admin'){
					this.$axios.get('/api/charts').then(res=>{
						if(res.data.status == 200){
							this.$message({
								message:res.data.message,
								type:'success'
							})
							this.charts = res.data.charts;
							console.log(this.charts);
						}
					});
				}
				else{
					this.$axios.post('/api/usernamecharts',{
						"username":this.currentuser
					}).then(res=>{
						if(res.data.status == 200){
							this.$message({
								message:res.data.message,
								type:'success'
							})
							this.charts = res.data.charts;
							console.log(this.charts);
						}
					});
				}
			}
		}
	}
</script>

<style>
</style>
