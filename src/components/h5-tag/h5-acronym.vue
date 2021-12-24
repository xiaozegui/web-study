<template>
	<el-card>
		<h4>HTML &lt;acronym&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>标记一个首字母缩写：</p>
		<code-card :mytextarea='acronymtext1' uniquename='acronym1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流的浏览器均支持 &lt;acronym&gt; 标签。</p>
		<p>注释：IE 5.5 或更早版本的 IE 浏览器不支持 &lt;acronym&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>HTML5 中不支持 &lt;acronym&gt; 标签。请使用 &lt;abbr&gt; 标签代替。</p>
		<p>&lt;acronym&gt; 标签定义首字母缩写。</p>
		<p>缩写能够作为单词来朗读，例如 NATO, NASA, ASAP, GUI。</p>
		<p>通过对缩写进行标记，您能够为浏览器、拼写检查和搜索引擎提供有用的信息。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>提示：title 属性可用于在鼠标指针移动到元素上时显示出缩写的完整版本。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>HTML5 中不支持 &lt;acronym&gt; 标签，但是在 HTML 4.01 中支持。</p>
		<el-divider></el-divider>
		<h4>标准属性</h4>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="acronymtext2"></el-input>
		<p>如需完整的描述，请访问<el-link type = 'primary' href='/attribute'>标准属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="acronymtext3"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href='/event'>事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>此例演示如何实现缩写或首字母缩写。</p>
		<code-card :mytextarea='acronymtext4' uniquename='acronym4'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				acronymtext1:'<html>\n<body>\n\n<acronym title="World Wide Web">WWW</acronym>\n\n</body>\n</html>\n',
				acronymtext2:'id, class, title, style, dir, lang, xml:lang',
				acronymtext3:'onclick, ondblclick, onmousedown, onmouseup, onmouseover, onmousemove, onmouseout, onkeypress, onkeydown, onkeyup ',
				acronymtext4:'<html>\n\n<body>\n\n<abbr title="etcetera">etc.</abbr>\n<br />\n<acronym title="World Wide Web">WWW</acronym>\n\n<p>在某些浏览器中，当您把鼠标移至缩略词语上时，title 可用于展示表达的完整版本。</p>\n\n<p>仅对于 IE 5 中的 acronym 元素有效。</p>\n\n<p>对于 Netscape 6.2 中的 abbr 和 acronym 元素都有效。</p>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
