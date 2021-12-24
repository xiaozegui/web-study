<template>
	<el-card>
		<h4>HTML &lt;small&gt; 标签</h4>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;small&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;small&gt; 标签呈现小号字体效果。</p>
		<p>&lt;small&gt; 标签和它所对应的 &lt;big&gt; 标签一样，但它是缩小字体而不是放大。如果被包围的字体已经是字体模型所支持的最小字号，那么 &lt;small&gt; 标签将不起任何作用。</p>
		<p>与 &lt;big&gt; 标签类似，&lt;small&gt; 标签也可以嵌套，从而连续地把文字缩小。每个 &lt;small&gt; 标签都把文本的字体变小一号，直到达到下限的一号字。</p>
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



