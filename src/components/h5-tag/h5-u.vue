<template>
	<el-card>
		<h4>HTML &lt;u&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;u&gt; 标签为文本添加下划线：</p>
		<code-card :mytextarea='u_text1' uniquename='u1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;u&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;u&gt; 标签可定义下划线文本。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，u 元素是不被推荐使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，u 元素是不被支持的</p>
		<p>注释：请尽量避免为文本加下划线 - 用户会把它混淆为一个超链接！</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;u&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;u&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				u_text1:'<html>\n<body>\n\n<p>如果文本不是超链接，就不要<u>对其使用下划线</u>。</p>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


