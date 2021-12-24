<template>
	<el-card>
		<h4>HTML &lt;abbr&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>标记一个缩写：</p>
		<code-card :mytextarea='abbrtext1' uniquename='abbr1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;abbr&gt; 标签。</p>
		<p>注释：IE 6 或更早版本的 IE 浏览器不支持 &lt;abbr&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;abbr&gt; 标签指示简称或缩写，比如 "WWW" 或 "NATO"。</p>
		<p>通过对缩写进行标记，您能够为浏览器、拼写检查和搜索引擎提供有用的信息。</p>
		<p>&lt;abbr&gt; 标签最初是在 HTML 4.0 中引入的，表示它所包含的文本是一个更长的单词或短语的缩写形式。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>提示：可以在 &lt;abbr&gt; 标签中使用全局的 title 属性，这样就能够在鼠标指针移动到 &lt;abbr&gt; 元素上时显示出简称/缩写的完整版本。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;abbr&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;abbr&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				abbrtext1:'<!DOCTYPE HTML>\n<html>\n<body>\n\nThe <abbr title="People Republic of China">PRC</abbr> was founded in 1949.\n\n</body>\n</html>\n',
				abbrtext2:''
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
