<template>
	<el-card>
		<h4>HTML &lt;summary&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;summary&gt; 元素：</p>
		<code-card :mytextarea='summary_text1' uniquename='summary1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>只有 Chrome 以及 Safari 6 支持 &lt;summary&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;summary&gt; 标签包含 details 元素的标题，"details" 元素用于描述有关文档或文档片段的详细信息。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;summary&gt; 标签是 HTML 5 的新标签。</p>
		<h4>提示和注释</h4>
		<p>提示：请与 &lt;details&gt; 标签一起使用。标题是可见的，当用户点击标题时会显示出详细信息</p>
		<p><mark>注释："summary" 元素应该是 "details" 元素的第一个子元素。</mark></p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;summary&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;summary&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				summary_text1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<details>\n<summary>HTML 5</summary>\nThis document teaches you everything you have to learn about HTML 5.\n</details>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


