<template>
	<el-card>
		<h4>HTML &lt;datalist&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>下面是一个 input 元素，datalist 中描述了其可能的值：</p>
		<code-card :mytextarea='datalist_text1' uniquename='datalist1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;datalist&gt; 标签，除了 Internet Explorer 和 Safari。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;datalist&gt;标签定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。</p>
		<p>datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表。</p>
		<p>请使用 input 元素的 list 属性来绑定 datalist。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;datalist&gt; 标签是 HTML 5 中的新标签。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;datalist&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;datalist&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				datalist_text1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<input list="cars" />\n<datalist id="cars">\n	<option value="BMW">\n	<option value="Ford">\n	<option value="Volvo">\n</datalist>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


