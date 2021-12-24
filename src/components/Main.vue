<template>
	<el-scrollbar style="height: 100%;"class="my-scrollbar" ref="scrollbar2">
		<div class="main-scrollbar">
			<main-header></main-header>
			<router-view style="text-align: left;justify-content: center;"></router-view>
			<my-footer></my-footer>
		</div>
	</el-scrollbar>
</template>

<script>
	import mainfooter from './footer.vue'
	import mainheader from './page-main-header.vue';
	export default{
		components:{
			'my-footer':mainfooter,
			'main-header': mainheader
		},
		watch: {
			'$route.path': function() {
				var scrollbar2  = localStorage.getItem(this.$route.path);
				// console.log(scrollbar2);
				if(scrollbar2==null){
					this.$refs.scrollbar2.wrap.scrollTop = 0;
				}else{
					this.$refs.scrollbar2.wrap.scrollTop = parseInt(scrollbar2);
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.main-scrollbar{
		border: 0px;
		background-color: white;
		padding: 50px 113px 100px 0px;
	}
</style>
