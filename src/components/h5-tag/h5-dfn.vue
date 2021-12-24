<template>
	<el-card>
		<h4>HTML &lt;dfn&gt; 标签</h4>
		<h4>定义和用法</h4>
		<p>&lt;dfn&gt; 标签可标记那些对特殊术语或短语的定义。</p>
		<p>现在流行的浏览器通常用斜体来显示 &lt;dfn&gt; 中的文本。将来，&lt;dfn&gt; 还可能有助于创建文档的索引或术语表。</p>
		<p>与其他许多基于内容的样式和物理样式标签一样，&lt;dfn&gt; 标签尽量少用为妙。作为一种通用样式，尤其在技术文档中，当第一次新的术语时，应该将它们与普通文本分开，这样读者可以更好地理解文章当前的主题，而从那以后就不要再对这个术语进行任何标记了。</p>
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


