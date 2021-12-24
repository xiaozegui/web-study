<template>
	<el-card>
		<h4>HTML &lt;s&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>可以像这样标记删除线文本：</p>
		<code-card :mytextarea='s_text1' uniquename='s1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持&lt;s&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;s&gt; 标签可定义加删除线文本定义。</p>
		<p>&lt;s&gt; 标签是 &lt;strike&gt; 标签的缩写版本，Netscape 和 Internet Explorer 都支持它。但在 HTML 4 和 XHTML 中已经不再赞成使用它了，意思就是不再使用了；它早晚有一天将会消失。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>在 HTML 4.01 中，&lt;s&gt; 标签不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，&lt;s&gt; 标签不被支持。</p>
		<h4>提示和注释：</h4>
		<p>注释：请使用 &lt;del&gt; 替代它！</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;s&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;s&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				s_text1:'<html> \n \n<body> \n \n<p>在 HTML 5 中，<s>仍然支持</s>已经不支持这个标签了。</p> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


