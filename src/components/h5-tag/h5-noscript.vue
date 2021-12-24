<template>
	<el-card>
		<h4>HTML &lt;noscript&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='noscript_text1' uniquename='noscript1'></code-card>
		<el-divider></el-divider>
		<h4>例子</h4>
		<p><strong>JavaScript</strong></p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="noscript_text2"></el-input>
		<p><strong>VBScript</strong></p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="noscript_text3"></el-input>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;noscript&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>noscript 元素用来定义在脚本未被执行时的替代内容（文本）。</p>
		<p>此标签可被用于可识别 &lt;script&gt; 标签但无法支持其中的脚本的浏览器。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<h4>提示和注释：</h4>
		<p>注释：如果浏览器支持脚本，那么它不会显示出 noscript 元素中的文本。</p>
		<p>注释：无法识别 &lt;script&gt; 标签的浏览器会把标签的内容显示到页面上。为了避免浏览器这样做，您应当在注释标签中隐藏脚本。老式的（无法识别 &lt;script&gt; 标签的）浏览器会忽略注释，这样就不会把标签的内容写到页面上，而新式的浏览器则懂得执行这些脚本，即使它们被包围在注释标签中！</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;noscript&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				noscript_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<script type="text/javascript"> \ndocument.write("Hello World!") \n\\<\/script\> \n<noscript>Sorry, your browser does not support JavaScript!\<\/noscript\> \n \n<p>不支持 JavaScript 的浏览器将显示 noscript 元素中的文本。</p> \n  \n</body> \n</html> \n',
				noscript_text2:'<body> \n  ... \n  ... \n \n  <script type="text/javascript"> \n    <!-- \n    document.write("Hello World!") \n    //--> \n  \<\/script\> \n   \n  <noscript>Your browser does not support JavaScript!\<\/noscript\> \n  ... \n  ... \n</body> \n',
				noscript_text3:'<body> \n  ... \n  ... \n  <script type="text/vbscript"> \n   <!-- \n   document.write("Hello World!") \n   --> \n  \<\/script\> \n   \n  <noscript>Your browser does not support VBScript!\<\/noscript\> \n  ... \n  ... \n</body> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


