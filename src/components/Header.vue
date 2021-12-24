<template>
	<div id="header" class="myheader">
		<div id="mylogo">
			<img src="../assets/img/logo.jpg" @click="backtoindex()" />
		</div>
		<div id="myrightsector">
			<div id="mysearch">
				<el-autocomplete popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch" placeholder="搜索文档"
				 @select="handleSelect">
					<i class="el-icon-search el-input__icon" slot="prefix">
					</i>
					<template slot-scope="{ item }" class="abcde">
						<div class="name">{{ item.name }}</div>
						<span class="addr">{{ item.path }}</span>
					</template>
				</el-autocomplete>
			</div>
			<div id="mynavmenu">
				<el-menu mode="horizontal" text-color="#409EFF" active-text-color="#409EFF" @select="myselect" :default-active="$route.path">
					<el-menu-item index="/comment" v-on:click="showcomment()">
						<el-badge :value="commentnumber" :max="99" class="item">
							<i class="el-icon-s-comment"></i>
						</el-badge>
						<el-drawer :show-close="isfalse" :visible.sync="isshowcomment" direction="btt" size="50%" :append-to-body="istrue">
							<el-card style="margin:0px 0px 5px 113px; width: 260px;float: left;">
								<el-input type="textarea" v-model="mycomtent" :autosize="istrue"></el-input>
								<p></p>
								<p></p>
								<el-button @click="insertchart()">发表评论</el-button>
							</el-card>
							<el-card style="margin:0px 113px 5px 0px;">
								<el-table :data="charts" style="width: 100%">
									<el-table-column label="用户">
										<template slot-scope="scope">
											<span style="margin-left: 10px">{{ scope.row.username }}</span>
										</template>
									</el-table-column>
									<el-table-column label="评论">
										<template slot-scope="scope">
											<el-input type='textarea' :autosize='true' v-model="scope.row.content" :readonly='scope.row.username != currentuser'></el-input>
										</template>
									</el-table-column>
									<el-table-column label="时间">
										<template slot-scope="scope">
											<span style="margin-left: 10px">{{ scope.row.time }}</span>
										</template>
									</el-table-column>
									<el-table-column label="操作">
										<template slot-scope="scope">
											<el-button size="mini" @click="updatechart(scope.row)" v-show="scope.row.username == currentuser">更新</el-button>
											<el-button size="mini" type="danger" @click="deletechart(scope.row)" v-show="scope.row.username == currentuser">删除</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-card>
						</el-drawer>
					</el-menu-item>
					<el-menu-item index="/user" v-on:click="showuser()">
						<i class="el-icon-user-solid" v-if="islogin"></i>
						<i class="el-icon-user" v-else></i>
						<el-drawer :show-close="isfalse" :visible.sync="isshow" direction="rtl" size="40%" :append-to-body="istrue">
							<div v-if="!islogin" style="margin:250px 100px; text-align: center;">
								<el-link type='primary' href='/login'><span style="font-size: 14px;">未登录？去登陆</span></el-link>
							</div>
							<el-card style="margin:10px 5px;" v-else>
								<el-form ref="form" :model="form" label-width="70px">
									<el-avatar icon="el-icon-user-solid" style="float: left;"></el-avatar>
									<el-form-item>
										<div>
											<el-input v-model="form.username" :readonly="istrue" style="width: 30%;"></el-input>
											<el-button size="mini" style="height: 32px;float: right;" v-on:click="userexit()">退出</el-button>
										</div>
									</el-form-item>
									<el-form-item label="性别">
										<el-select v-model="form.gender" placeholder="请选择性别">
											<el-option label="男" value="男"></el-option>
											<el-option label="女" value="女"></el-option>
										</el-select>
									</el-form-item>
									<el-form-item label="生日">
										<el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
									</el-form-item>
									<el-form-item label="地区">
										<el-input v-model="form.location"></el-input>
									</el-form-item>
									<el-form-item label="个性签名">
										<el-input v-model="form.specialsign"></el-input>
									</el-form-item>
									<el-form-item label="role">
										<el-input v-model="form.role" :readonly="istrue"></el-input>
									</el-form-item>
									<el-form-item>
										<el-button type="primary" @click="onSubmit">更新资料</el-button>
										<el-button type="warning" @click="tochangepassword()">修改密码</el-button>
										<el-button type="warning" @click="chartcharge()">评论管理</el-button>
										<el-button type="warning" @click="usercharge()" style="float: right;" v-if='form.username == "admin"'>用户管理</el-button>
									</el-form-item>
								</el-form>
							</el-card>
						</el-drawer>
					</el-menu-item>
					<el-menu-item index="/login" v-if="!islogin">login</el-menu-item>
					<el-menu-item index="/chartcharge" v-else>
						<router-link to="/chartcharge"><i class="el-icon-s-data"></i></router-link>
					</el-menu-item>
					<el-menu-item index="/register" v-if="!islogin">reg</el-menu-item>
					<el-menu-item index="/tohome" v-else>
						<router-link to="/"><i class="el-icon-s-home"></i></router-link>
					</el-menu-item>
					<el-menu-item index="/myseparate" class="myseparate">
						<div id="separate">
						</div>
					</el-menu-item>
					<el-submenu index="/theme">
						<template slot="title">theme</template>
						<el-menu-item index="/default">default</el-menu-item>
						<el-menu-item index="/night">night</el-menu-item>
					</el-submenu>
					<el-submenu index="/link" class="mysubmenu">
						<template slot="title">links</template>
						<el-menu-item index="/w3cschool">w3c china</el-menu-item>
						<el-menu-item index="/runoob">菜鸟教程</el-menu-item>
					</el-submenu>
				</el-menu>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import sidentify from './identify.vue'
	export default {
		data() {
			return {
				currentuser: 'tourist',
				mycomtent: '',
				charts: [],
				commentnumber: 0,
				form: {
					username: '',
					gender: '',
					birthday: '',
					location: '',
					specialsign: '',
					role: ''
				},
				searchwarn: [],
				state: '',
				isshow: false,
				istrue: true,
				isfalse: false,
				islogin: false,
				isshowcomment: false
			}
		},
		methods: {
			deletechart(chart){
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
			},
			insertchart(){
				if(!this.currentuser){
					this.currentuser = 'tourist';
				}
				this.$axios.post('/api/insertchart', {
					'username': this.currentuser,
					'page':this.$route.path,
					'content':this.mycomtent,
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
			},
			usercharge() {
				this.$router.push('/usercharge');
				this.$router.go(0);
			},
			tochangepassword() {
				sessionStorage.setItem('username', this.form.username);
				this.$router.push('/changepassword');
				this.$router.go(0);
			},
			chartcharge() {
				sessionStorage.setItem('username', this.form.username);
				this.$router.push('/chartcharge');
				this.$router.go(0);
			},
			onSubmit() {
				this.$axios.post('/api/updateuser', {
					'username': this.form.username,
					'gender': this.form.gender,
					'birthday': this.form.birthday,
					'location': this.form.location,
					'specialsign': this.form.specialsign
				}).then((res) => {
					console.log(res);
					if (res.data.status == 200) {
						this.$message({
							message: res.data.message,
							type: 'success'
						});
						this.showuser();
					}
				}).catch((err) => {
					console.log(err);
				})
			},
			myselect(key, keypath) {
				if (key == '/login' || key == '/register') {
					this.$router.push(key);
				}else if(key == '/w3cschool' || key=='/runoob'){
					if(key == '/w3cschool'){
						window.location.href='https://www.w3school.com.cn';
					}else{
						window.location.href='https://www.runoob.com';
					}
				}else if(key == '/default' || key=='/night'){
					if(key=='/night'){
						$("head").append("<link>");
						var css = $("head").children(":last");
						css.attr({
						rel: "stylesheet",
						type: "text/css",
						href: "../static/js/night.css"
						});
					}else{
						this.$router.go(0);
					}
				}
			},
			backtoindex() {
				this.$router.push('/index');
			},
			querySearch(queryString, cb) {
				var searchwarn = this.searchwarn;
				var results = queryString ? searchwarn.filter(this.createFilter(queryString)) : searchwarn;
				// console.log(queryString,results);
				// if(sessionStorage.getItem('history1')!='null'&& sessionStorage.getItem('history2')!='null'){
				// 	results.splice(0,2);
				// }
				if(sessionStorage.getItem('history1')!='null'){
					console.log(sessionStorage.getItem('history1'));
					results.unshift({'path':sessionStorage.getItem('history1'),'name':'历史记录1'});
				}
				if(sessionStorage.getItem('history2')!= 'null'){
					console.log(sessionStorage.getItem('history2'));
					results.unshift({'path':sessionStorage.getItem('history2'),'name':'历史记录2'});
				}
				// console.log(results);
				cb(results);
			},
			createFilter(queryString) {
				return (current) => {
					// console.log(current.path);
					var text = current.path.toLowerCase().concat(current.name);
					// console.log(text);
					return (text.indexOf(queryString.toLowerCase()) > -1);
				};
			},
			handleSelect(item) {
				var history1 = sessionStorage.getItem('history2');
				sessionStorage.setItem('history1',history1);
				sessionStorage.setItem('history2',item.path);
				this.$router.push(item.path);
			},
			showuser() {
				this.isshow = true;
				if (!this.islogin) {
					return
				}
				this.$axios.post('/api/tokenuser', {
					'token': sessionStorage.getItem('token')
				}).then((res) => {
					console.log(res);
					if (res.data.status == 200) {
						this.$message({
							message: res.data.message,
							type: 'success'
						});
						this.form.username = res.data.user.username;
						this.form.gender = res.data.user.gender;
						this.form.location = res.data.user.location;
						this.form.birthday = res.data.user.birthday;
						this.form.specialsign = res.data.user.specialsign;
						this.form.role = res.data.user.role;
					}
				}).catch((err) => {
					console.log(err);
				})
			},
			showcomment() {
				this.isshowcomment = true;

			},
			userexit() {
				this.$message({
					message: '你已退出，3s后跳转',
					type: 'waning'
				});
				setTimeout(() => {
					sessionStorage.clear();
					this.$router.go(0);
					this.$router.push('/');
				}, 3000);
			}
		},
		mounted() {
			sessionStorage.setItem('history1','null');
			sessionStorage.setItem('history2','null');
			this.searchwarn = this.$router.options.routes;
			// console.log(this.searchwarn);
			this.currentuser = sessionStorage.getItem('username');
			if (sessionStorage.getItem('token')) {
				this.islogin = true;
			}
			this.$axios.post('/api/pagechart', {
				'page': this.$route.path
			}).then((res) => {
				console.log(res);
				if (res.data.status == 200) {
					this.commentnumber = res.data.charts.length;
					this.charts = res.data.charts;
					console.log(this.charts);
					// this.$message({
					// 	message: res.data.message,
					// 	type: 'success'
					// });
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		watch: {
			'$route.path': function() {
				console.log('sessionStorage.getItem=' + sessionStorage.getItem('token'), this.islogin);
				if (sessionStorage.getItem('token')) {
					this.islogin = true;
				}
				this.currentuser = sessionStorage.getItem('username');
				this.$axios.post('/api/pagechart', {
					'page': this.$route.path
				}).then((res) => {
					console.log(res);
					if (res.data.status == 200) {
						this.commentnumber = res.data.charts.length;
						this.charts = res.data.charts;
						console.log(this.charts);
					}
				}).catch((err) => {
					console.log(err);
				})
			},
			deep: true,
			immediate: true
		}
	}
</script>
<style scoped="scoped">
	#header {
		display: flex;
		justify-content: space-between;
		border-bottom: #DCDFE6 solid 1px;
		align-items: center;
		margin: 0px 113px;
		padding: 0px;
	}

	#mysearch {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		height: 81px;
		width: 200px;
		border-bottom: 0px;
	}

	#mylogo {
		display: flex;
		align-items: center;
		width: 146px;
		height: 80px;
	}

	#myrightsector {
		display: flex;
		flex-flow: row nowrap;
		height: 80px;
	}

	.el-menu {
		display: flex;
		height: 80px;
		align-items: center;
		border-bottom-width: 0px;
	}

	.el-menu-item {
		display: flex;
		height: 80px;
		align-items: center;
		opacity: 0.5;
		width: 76px;
		align-items: center;
		padding: 0px 22px;
		border-bottom-width: 1px;
	}

	.el-submenu {
		display: flex;
		height: 80px;
		align-items: center;
		opacity: 0.5;
	}

	/deep/.el-submenu .el-submenu__title {
		display: flex;
		height: 80px;
		align-items: center;
		border-bottom-width: 1px !important;
		padding: 0px;
	}

	/deep/.mysubmenu {
		display: flex;
		height: 80px;
		align-items: center;
		border-bottom-width: 1px !important;
		padding: 0px 0px 0px 40px;
	}


	.el-menu-item.is-active {
		opacity: 1;
		align-items: center;
		border-bottom-width: 1px;
	}

	.el-submenu.is-active {
		display: flex;
		opacity: 1;
		align-items: center;
		border-bottom-width: 1px;
		height: 80px;
	}

	.el-menu-item:hover,
	.el-submenu:hover {
		opacity: 1;
	}


	#separate {
		width: 1px;
		height: 80px;
		display: flex;
		align-items: center;
	}

	#separate::before {
		content: "";
		width: 1px;
		height: 16px;
		background: #ebebeb;
	}

	.myseparate {
		width: auto;
	}

	.my-autocomplete {
		width: 200px;
		height: 32px;
	}

	/deep/ .el-input__inner {
		height: 32px !important;
	}

	.el-popper {
		margin-top: 25px;
	}

	.addr {
		font-size: 12px;
		color: #b4b4b4;
	}

	.name {
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.el-icon-search {
		line-height: 35px;
	}

	.my-autocomplete {
		padding-bottom: 7px !important;
	}

	/deep/ #el-drawer__title {
		display: none;
	}
</style>
