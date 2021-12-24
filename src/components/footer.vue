<template>
	<div class="myfooter">
		<div class="mylink">
			<div class="foot-link-left">
				<el-link :underline="false" :href="lastpath">
					<i class="el-icon-arrow-left"></i>
					{{this.lastname}}
				</el-link>
			</div>
			<div class="foot-link-right">
				<el-link :underline="false" :href="nextpath">
					{{this.nextname}}
					<i class="el-icon-arrow-right"></i>
				</el-link>
			</div>
		</div>
		<div class="scrolltotop">
			<el-backtop target=".my-scrollbar .el-scrollbar__wrap" :bottom="100">
				<div style="{
			        position: fixed;
			            background-color: #fff;
			            width: 40px;
			            height: 40px;
			            border-radius: 50%;
			            color: #409eff;
			            display: flex;
			            align-items: center;
			            justify-content: center;
			            font-size: 20px;
			            box-shadow: 0 0 6px rgb(0 0 0 / 12%);
			            cursor: pointer;
			            z-index: 5;
			      }">
					<i class="el-icon-caret-top"></i>
				</div>
			</el-backtop>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				myroutes:[],
				lastpath:'',
				nextpath:'',
				lastname:'',
				nextname:''
			}
		},
		methods:{
			updatefooter(){
				// console.log(this.$router.options.routes);
				console.log("更新页脚");
				this.myroutes = this.$router.options.routes;
				// console.log(this.$route.path);
				var mypath = this.$route.path;
				var mylength = mypath.length;
				if(mypath[mylength-1]=='/'){
					mypath = mypath.substring(0,mylength-1);
				}
				this.myroutes.forEach((item,index)=>{
					// console.log(item["path"]);
					if(item["path"]==mypath){
						// console.log(this.myroutes[index+1]);
						if(index>0){
							// console.log(this.myroutes[index+1]["name"]);
							this.lastpath = this.myroutes[index-1]["path"];
							this.lastname = this.myroutes[index-1]["name"];
						}else{
							this.lastpath = this.myroutes[0]["path"];
							this.lastname = this.myroutes[0]["name"];
						}
						if(index<this.myroutes.length-1){
							this.nextpath =  this.myroutes[index+1]["path"];
							this.nextname =  this.myroutes[index+1]["name"];
						}else{
							this.nextpath =  this.myroutes[this.myroutes.length-1]["path"];
							this.nextname =  this.myroutes[this.myroutes.length-1]["name"];
						}
					}
				});
				console.log(this.lastpath);
				console.log(this.nextpath);
			}
		},
		mounted() {
			this.updatefooter();
		},
		watch:{
			'$route.path':function(){
				this.updatefooter();
			}
		}
	}
</script>

<style scoped="scoped">
	.mylink {
		margin: 40px 0px;
		height: 100%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}

	.foot-link-left:hover,
	.foot-link-right:hover {
		color: #409EFF;
	}
</style>
