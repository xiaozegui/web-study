<template>
	<el-card>
		<h4>HTML &lt;dd&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='dd_text1' uniquename='dd1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;dd&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;dd&gt; 在定义列表中定义条目的定义部分。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;dd&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;dd&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				dd_text1:'<html>\n\n<body>\n\n<h2>一个定义列表：</h2>\n\n<dl>\n   <dt>计算机</dt>\n   <dd>用来计算的仪器 ... ...</dd>\n   <dt>显示器</dt>\n   <dd>以视觉方式显示信息的装置 ... ...</dd>\n</dl>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


