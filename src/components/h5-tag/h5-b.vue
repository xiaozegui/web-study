<template>
	<el-card>
		<h4>HTML &lt;b&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='b_text1' uniquename='b1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;b&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;b&gt; 标签规定粗体文本。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p><mark>注释：</mark>根据 HTML5 规范，在没有其他合适标签更合适时，才应该把 &lt;b&gt; 标签作为最后的选项。HTML5 规范声明：应该使用 &lt;h1&gt; - &lth6&gt; 来表示标题，使用 &lt;em&gt; 标签来表示强调的文本，应该使用 &lt;strong&gt; 标签来表示重要文本，应该使用 &lt;mark&gt; 标签来表示标注的/突出显示的文本。</p>
		<p>提示：您也能够使用 CSS "font-weight" 属性来设置粗体文本。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;b&gt; 标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;b&gt; 标签支持<el-link type='primary' href='/event'>事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				b_text1:'<!DOCTYPE html>\n<html>\n<body>\n\n<p>这是普通文本 - <b>这是粗体文本</b>。</p>\n\n</body>\n</html>\n',
				b_text2:''
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


