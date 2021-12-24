<template>
	<el-card>
		<h4>HTML &lt;sub&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;sub&gt; 元素：</p>
		<code-card :mytextarea='sub_text1' uniquename='sub1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;sub&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;sub&gt; 标签可定义下标文本。</p>
		<p>包含在 &lt;sub&gt; 标签和其结束标签 &lt;/sub&gt; 中的内容将会以当前文本流中字符高度的一半来显示，但是与当前文本流中文字的字体和字号都是一样的。</p>
		<p>提示：无论是 &lt;sub&gt; 标签还是和它对应的 &lt;sup&gt; 标签，在数学等式、科学符号和化学公式中都非常有用。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;sub&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;sub&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				sub_text1:'<html>\n<body>\n\n<p>\nThis text contains <sub>subscript</sub>\n</p>\n\n<p>\nThis text contains <sup>superscript</sup>\n</p>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>



