<template>
	<el-container>
		<el-header height=81px>
			<my-header></my-header>
		</el-header>
		<el-container class="mymedium">
			<el-aside width="20%">
				<my-aside ></my-aside>
			</el-aside>
			<el-main>
				<my-main></my-main>
			</el-main>
		</el-container>
	</el-container>
	</el-container>
</template>
<script>
	import myheader from './components/Header.vue'
	import myaside from './components/Aside.vue'
	import mymain from './components/Main.vue'
	export default {
		components: {
			'my-header': myheader,
			'my-aside': myaside,
			'my-main': mymain
		}
	}
</script>

<style scoped="scoped">
	.el-header {
		background-color: white;
		color: white;
		align-items: center;
		padding: 0px;
		z-index: 1500;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: white;
		text-align: center;
		border: 0px !important;
		background-color: white;
	}

	.el-main {
		background-color: white;
		text-align: center;
		padding: 0px;
		padding-left: 17px;
	}

	.el-container {
		height: 100%;
	}

	.mymedium {
		margin: 0px 0px 0px 113px;
	}

	.mymedium-scrollbar {
		height: 100%;
	}
</style>
