<template>
	<el-card>
		<h4>HTML &lt;wbr&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一段带有 Word Break Opportunity 的文本：</p>
		<code-card :mytextarea='wbr_text1' uniquename='wbr1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持  &lt;wbr&gt; 标签。除了 Internet Explorer。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>Word Break Opportunity  &lt;wbr&gt; 规定在文本中的何处适合添加换行符。</p>
		<p>提示：如果单词太长，或者您担心浏览器会在错误的位置换行，那么您可以使用 &lt;wbr&gt; 元素来添加 Word Break Opportunity（单词换行时机）。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;wbr&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;wbr&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;wbr&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				wbr_text1:'<!DOCTYPE html>\n<html>\n<body>\n\n<p>\n如果想学习 AJAX，那么您必须熟悉 XML<wbr>Http<wbr>Request 对象。\n</p>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


