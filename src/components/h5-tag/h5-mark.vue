<template>
	<el-card>
		<h4>HTML &lt;mark&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>突出显示部分文本：</p>
		<code-card :mytextarea='mark_text1' uniquename='mark1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 &lt;mark&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;mark&gt;标签定义带有记号的文本。请在需要突出显示文本时使用 &lt;m&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;mark&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;mark&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;mark&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				mark_text1:'<!DOCTYPE HTML> \n<html> \n<body> \n \n<p>Do not forget to buy <mark>milk</mark> today.</p> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>



