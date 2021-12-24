<template>
	<el-card>
		<h4>HTML &lt;ruby&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一个 ruby 注释：</p>
		<code-card :mytextarea='ruby_text1' uniquename='ruby1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持&lt;ruby&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;ruby&gt; 标签在 ruby 注释中使用，以定义不支持 ruby 元素的浏览器所显示的内容。</p>
		<p>ruby 注释是中文注音或字符。</p>
		<p>在东亚使用，显示的是东亚字符的发音。</p>
		<p>与 &lt;ruby&gt; 以及 &lt;rt&gt; 标签一同使用：</p>
		<p>ruby 元素由一个或多个字符（需要一个解释/发音）和一个提供该信息的 rt 元素组成，还包括可选的 ruby 元素，定义当浏览器不支持 "ruby" 元素时显示的内容。</p>
		<h4>提示和注释</h4>
		<p>提示：支持 "ruby" 元素的浏览器不会显示 "ruby" 元素的内容。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;ruby&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;ruby&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;ruby&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				ruby_text1:'<!DOCTYPE HTML> \n<html> \n<body> \n \n<ruby> \n漢 <rt><ruby>(</ruby>ㄏㄢˋ<ruby>)</ruby></rt> \n</ruby> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


