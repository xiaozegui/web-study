<template>
	<el-card>
		<h4>HTML &lt;center&gt; 标签</h4>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;center&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>对其所包括的文本进行水平居中。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，center 元素的 align 属性是不被赞成使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，center 元素不被支持。</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p>注释：提示：请使用 CSS 样式来居中文本！</p>
		<el-divider></el-divider>
		<h4>标准属性</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="center_text2"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href="/attribute">HTML5全局属性</el-link>。</p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="center_text3"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				center_text1:'<html>\n\n<body>\n\n<h4>这个表格有一个标题，以及粗边框：</h4>\n\n<table border="6">\n<center>我的标题</center>\n<tr>\n  <td>100</td>\n  <td>200</td>\n  <td>300</td>\n</tr>\n<tr>\n  <td>400</td>\n  <td>500</td>\n  <td>600</td>\n</tr>\n</table>\n\n</body>\n',
				center_text2:'id, class, title, style, dir, lang, xml:lang',
				center_text3:'onclick, ondblclick, onmousedown, onmouseup, onmouseover, onmousemove, onmouseout, onkeypress, onkeydown, onkeyup'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


