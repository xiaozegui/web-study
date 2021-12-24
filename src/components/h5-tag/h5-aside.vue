<template>
	<el-card>
		<h4>HTML &lt;aside&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='asidetext1' uniquename='aside1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 &lt;aside&gt; 标签。</p>
		<p>注释：Internet Explorer 8 以及更早的版本不支持 &lt;aside&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;aside&gt; 标签定义其所处内容之外的内容。</p>
		<p>aside 的内容应该与附近的内容相关。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>&lt;aside&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p style="color:#409EFF;">提示：&lt;aside&gt; 的内容可用作文章的侧栏。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;aside&gt; 标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;aside&gt; 标签支持<el-link type='primary' href='/event'>事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				asidetext1:'<!DOCTYPE html>\n<html>\n<body>\n\n<p>My family and I visited The Epcot center this summer.</p>\n\n<aside>\n<h4>Epcot Center</h4>\n<p>The Epcot Center is a theme park in Disney World, Florida.</p>\n</aside>\n\n</body>\n</html>\n',
				asidetext2:''
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


