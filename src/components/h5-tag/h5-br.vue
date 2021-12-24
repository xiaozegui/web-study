<template>
	<el-card>
		<h4>HTML &lt;br&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>本例演示如何在文档中插入换行符。</p>
		<code-card :mytextarea='brtext1' uniquename='br1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;br&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;br&gt; 可插入一个简单的换行符。</p>
		<p>&lt;br&gt; 标签是空标签（意味着它没有结束标签，因此这是错误的：&lt;br&gt;&lt;/br&gt;）。在 XHTML 中，把结束标签放在开始标签中，也就是 &lt;br /&gt;。</p>
		<p><mark>请注意，&lt;br&gt; 标签只是简单地开始新的一行，而当浏览器遇到 &lt;p&gt; 标签时，通常会在相邻的段落之间插入一些垂直的间距。</mark></p>
		<el-divider></el-divider>
		<h4>clear 属性</h4>
		<p>如果您希望文本流在内联表格或图像的下一行继续输出，请使用 clear 属性，该属性有三个可选的值：left、right 或者 all，每个值都代表一个边界或两边的边界。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;br&gt; 标签没有结束标签。</p>
		<p>在 XHTML 中，&lt;br&gt; 标签必须被正确地关闭，比如这样：&lt;br /&gt;。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>注释：请使用 &lt;br&gt; 来输入空行，而不是分割段落。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;br&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;br&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				brtext1:'<html>\n\n<body>\n\n<p>\nTo break<br />lines<br />in a<br />paragraph,<br />use the br tag.\n</p>\n\n</body>\n</html>\n',
				brtext2:''
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
