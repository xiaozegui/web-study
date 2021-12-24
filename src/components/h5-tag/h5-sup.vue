<template>
	<el-card>
		<h4>HTML &lt;sup&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='sup_text1' uniquename='sup1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;sup&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;sup&gt; 标签可定义上标文本。</p>
		<p>包含在 &lt;sup&gt; 标签和其结束标签 &lt;/sup&gt; 中的内容将会以当前文本流中字符高度的一半来显示，但是与当前文本流中文字的字体和字号都是一样的。</p>
		<p>提示：这个标签在向文档添加脚注以及表示方程式中的指数值时非常有用。如果和 &lt;a&gt; 标签结合起来使用，就可以创建出很好的超链接脚注。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<el-divider></el-divider>
		<h4>例子</h4>
		<el-input type="textarea" :autosize="istrue" style="width: 60%;" :readonly="istrue" v-model="sup_text2"></el-input>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;sup&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;sup&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				sup_text1:'<html>\n<body>\n\n<p>\nThis text contains <sub>subscript</sub>\n</p>\n\n<p>\nThis text contains <sup>superscript</sup>\n</p>\n\n</body>\n</html>\n',
				sup_text2:'这段文本包含 <sup>上标</sup>'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


