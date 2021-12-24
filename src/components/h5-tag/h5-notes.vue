<template>
	<el-card>
		<h4>HTML &lt;!--...--&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>HTML 注释：</p>
		<code-card :mytextarea='notestext1' uniquename='notes1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持注释标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>注释标签用于在源代码中插入注释。注释不会显示在浏览器中。</p>
		<p>您可使用注释对您的代码进行解释，这样做有助于您在以后的时间对代码的编辑。当您编写了大量代码时尤其有用。</p>
		<p>使用注释标签来隐藏浏览器不支持的脚本也是一个好习惯（这样就不会把脚本显示为纯文本）：</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="notestext2"></el-input>
		<p>注释：注释行结尾处的两条斜杠 (//) 是 JavaScript 注释符号。这可以避免 JavaScript 执行 --> 标签。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>&lt;-- --&gt;属性和HTML 4.01相同</p>
		<el-divider></el-divider>
		<h4>标准属性</h4>
		<p>注释标签不支持任何标准属性。</p>
		<p>如需更多有关 HTML 标准属性的信息，请访问 <el-link type='primary' href="/attribute">HTML5 属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>注释标签不支持任何事件属性。</p>
		<p>如需更多有关 HTML 事件属性的信息，请访问<el-link type='primary' href='/event'>事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				notestext1:'<!DOCTYPE html>\n<html>\n\n<body>\n\n<!--这是一段注释。注释不会在浏览器中显示。-->\n\n<p>这是一段普通的段落。</p>\n\n</body>\n</html>\n',
				notestext2:'<script type="text/javascript">\n<!--\nfunction displayMsg()\n{\nalert("Hello World!")\n}\n//-->\n\<\/script\>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
