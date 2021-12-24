<template>
	<el-card>
		<h4>HTML &lt;figcaption&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;figcaption&gt; 元素：</p>
		<code-card :mytextarea='figcaption_text1' uniquename='figcaption1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9, Firefox, Opera, Chrome 以及 Safari 支持 &lt;figcaption&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;figcaption&gt;标签定义 figure 元素的标题（caption）。</p>
		<p>"figcaption" 元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;figcaption&gt; 标签是 HTML 5 中的新标签。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;figcaption&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;figcaption&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				figcaption_text1:'<!DOCTYPE html>\n<html>\n<body>\n\n<p>The Pulpit Rock is a massive cliff 604 metres (1982 feet) above Lysefjorden, opposite the Kjerag plateau, in Forsand, Ryfylke, Norway. The top of the cliff is approximately 25 by 25 metres (82 by 82 feet) square and almost flat, and is a famous tourist attraction in Norway.</p>\n\n<figure>\n  <img src="../../../static/img/eg_venus.gif" alt="The Pulpit Rock" width="304" height="228">\n  <figcaption>Fig.1 - The Pulpit Rock, Norway.</figcaption>\n</figure>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


