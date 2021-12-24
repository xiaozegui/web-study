<template>
	<el-card>
		<h4>HTML &lt;noframes&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;noframes&gt; 元素：</p>
		<code-card :mytextarea='noframes_text1' uniquename='noframes1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持&lt;noframes&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>noframes 元素可为那些不支持框架的浏览器显示文本。noframes 元素位于 frameset 元素内部。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<h4>提示和注释：</h4>
		<p>注释：如果浏览器有能力处理框架，就不会显示出 frameset 元素中的文本。</p>
		<p>重要事项：如果您希望 frameset 添加 &lt;noframes&gt; 标签，就必须把其中的文本包装在 &lt;body&gt;&lt;/body&gt; 标签中！</p>
		<p>注释：如果您希望验证包含框架的页面，请确保 DTD 被设置为 "Frameset DTD"。</p>
		<p>注释：在XHTML 1.0 Strict DTD 中，&lt;noframes&gt; 标签是不被允许的。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="noframes_text2"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				noframes_text1:'<html>\n\n<frameset cols="25%,50%,25%">\n\n  <frame src="../../../static/codeview.html">\n  <frame src="../../../static/codeview.html">\n  <frame src="../../../static/codeview.html">\n\n</frameset>\n\n</html>\n',
				noframes_text2:'id, class, title, style, dir, lang, xml:lang'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


