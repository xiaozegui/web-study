<template>
	<el-card>
		<h4>HTML &lt;header&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>对主页的介绍：</p>
		<code-card :mytextarea='header_text1' uniquename='header1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 &lt;header&gt;标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;header&gt;标签定义文档的页眉（介绍信息）</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;header&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;header&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;header&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				header_text1:'<!DOCTYPE html>\n<html>\n<body>\n\n<article>\n<header>\n<h1>What Does WWF Do?</h1>\n<p>WWF s mission:</p>\n</header>\n<p>WWF s mission is to stop the degradation of our planet s natural environment, and build a future in which humans live in harmony with nature.</p>\n</article>\n\n</body>\n</html>\n',
				header_text2:[
					{'attr':'profile','value':'URL','desc':'一个由空格分隔的 URL 列表，这些 URL 包含着有关页面的元数据信息'}
				],
				header_text3:'<!DOCTYPE html>\n<html>\n<header>\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />\n<meta http-equiv="Content-Language" content="zh-cn" />\n\n<base target="_blank" />\n</header>\n\n<body>\n\n<p>\n<a href="http://www.w3school.com.cn" target="_blank">这个连接</a> 将在新窗口中加载，因为 target 属性被设置为 "_blank"。\n</p>\n\n<p>\n<a href="http://www.w3school.com.cn">这个连接</a> 也将在新窗口中加载，即使没有 target 属性。\n</p>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


