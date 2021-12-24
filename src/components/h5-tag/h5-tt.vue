<template>
	<el-card>
		<h4>HTML &lt;tt&gt; 标签</h4>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;tt&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;tt&gt; 标签呈现类似打字机或者等宽的文本效果。</p>
		<p>&lt;tt&gt; 标签与 &lt;code&gt; 和 &lt;kbd&gt; 标签一样，&lt;tt&gt; 标签和必需的 &lt;/tt&gt; 结束标签告诉浏览器，要把其中包含的文本显示为等宽字体。对于那些已经使用了等宽字体的浏览器来说，这个标签在文本的显示上就没有什么特殊效果了。</p>
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


