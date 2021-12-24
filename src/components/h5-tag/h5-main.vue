<template>
	<el-card>
		<h4>HTML &lt;main&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='main_text1' uniquename='main1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;main&gt; 标签，除了 Internet Explorer。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;main&gt; 标签规定文档的主要内容。</p>
		<p>&lt;main&gt; 元素中的内容对于文档来说应当是唯一的。它不应包含在文档中重复出现的内容，比如侧栏、导航栏、版权信息、站点标志或搜索表单。</p>
		<p class="note"><span>注释：</span>在一个文档中，不能出现一个以上的 &lt;main&gt; 元素。&lt;main&gt; 元素不能是以下元素的后代：&lt;article&gt;、&lt;aside&gt;、&lt;footer&gt;、&lt;header&gt; 或 &lt;nav&gt;。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;main&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;main&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;main&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				main_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<main> \n  <h1>Web Browsers</h1> \n  <p>Google Chrome、Firefox 以及 Internet Explorer 是目前最流行的浏览器。</p> \n \n  <article> \n    <h1>Google Chrome</h1> \n    <p>Google Chrome 是由 Google 开发的一款免费的开源 web 浏览器，于 2008 年发布。</p> \n  </article> \n \n  <article> \n    <h1>Internet Explorer</h1> \n    <p>Internet Explorer 由微软开发的一款免费的 web 浏览器，发布于 1995 年。</p> \n  </article> \n \n  <article> \n    <h1>Mozilla Firefox</h1> \n    <p>Firefox 是一款来自 Mozilla 的免费开源 web 浏览器，发布于 2004 年。</p> \n  </article> \n</main>  \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


