<template>
	<el-card>
		<h4>HTML &lt;strike&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>此例演示如何为文本标记添加删除线。</p>
		<code-card :mytextarea='strike_text1' uniquename='strike1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;strike&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;strike&gt; 标签可定义加删除线文本定义</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，&lt;strike&gt; 标签不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，&lt;strike&gt; 标签不被支持。</p>
		<p><mark>注释：请使用 &lt;del&gt; 替代它！</mark></p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<el-input type="textarea" :autosize="istrue" style="width: 60%;" :readonly="istrue" v-model="strike_text2"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<el-input type="textarea" :autosize="istrue" style="width: 60%;" :readonly="istrue" v-model="strike_text3"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				strike_text1:'<html>\n\n<body>\n\n<p>在 HTML 5 中，<strike>仍然支持</strike>已经不支持这个标签了。</p>\n\n</body>\n</html>\n',
				strike_text2:'id, class, title, style, dir, lang, xml:lang',
				strike_text3:'onclick, ondblclick, onmousedown, onmouseup, onmouseover, onmousemove, onmouseout, onkeypress, onkeydown, onkeyup'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


