<template>
	<el-card>
		<h4>i &lt;i&gt; 标签</h4>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;i&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;i&gt;标签显示斜体文本效果。</p>
		<p>&lt;i&gt; 标签和基于内容的样式标签 &lt;em&gt; 类似。它告诉浏览器将包含其中的文本以斜体字（italic）或者倾斜（oblique）字体显示。如果这种斜体字对该浏览器不可用的话，可以使用高亮、反白或加下划线等样式。</p>
		<p><mark>提示：&lt;i&gt; 标签一定要和结束标签 &lt;/i&gt; 结合起来使用。</mark></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


