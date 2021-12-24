<template>
	<el-card>
		<h4>HTML &lt;nav&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='nav_text1' uniquename='nav1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9, Firefox, Opera, Chrome 以及 Safari 支持&lt;nav&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;nav&gt; 标签定义导航链接的部分。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;nav&gt; 标签是 HTML 5 的新标签。</p>
		<h4>提示和注释</h4>
		<p><mark>提示：如果文档中有“前后”按钮，则应该把它放到 &lt;nav&gt; 元素中</mark></p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;nav&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;nav&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				nav_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<nav> \n<a href="/html/">HTML</a> | \n<a href="/css/">CSS</a> | \n<a href="/js/">JavaScript</a> | \n<a href="/jquery/">jQuery</a> \n</nav> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


