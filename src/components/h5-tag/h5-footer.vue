<template>
	<el-card>
		<h4>HTML &lt;footer&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>文档中的页脚部分：</p>
		<code-card :mytextarea='footer_text1' uniquename='footer1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9, Firefox, Opera, Chrome, and Safari 支持 &lt;footer&lt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;footer&gt; 标签定义文档或节的页脚。</p>
		<p>&lt;footer&gt;元素应当含有其包含元素的信息。</p>
		<p>页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。</p>
		<p>您可以在一个文档中使用多个 &lt;footer&gt; 元素。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;footer&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p><mark>提示：&lt;footer&gt; 元素内的联系信息应该位于 &lt;address&gt; 标签中。</mark></p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;footer&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;footer&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				footer_text1:'<!DOCTYPE html>\n<html>\n<body>\n\n<footer>\n  <p>Posted by: W3School</p>\n  <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>\n</footer>\n\n</body>\n</html>\n',
				footer_text2:[
					{'attr':'open','value':'open','desc':'规定 footer 元素是活动的，用户可与之交互。','isshow':true}
				]
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>



