<template>
	<div>
	<el-page-header :content="$route.name" @back = 'goBack()'></el-page-header>
	</div>
</template>

<script>
	export default{
		methods:{
			goBack(){
				 window.history.back(-1);
			}
		}
	}
</script>

<style scoped="scoped">
	.el-page-header{
		height: 56px;
		align-items: center;
	}
	/deep/ .el-page-header__left{
		opacity: 0.5;
	}
	/deep/ .el-page-header__left:hover{
		opacity: 1;
	}
	.el-divider{
		margin: 0px 0px;
	}
</style>
