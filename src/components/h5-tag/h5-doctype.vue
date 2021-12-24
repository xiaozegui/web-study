<template>
	<el-card>
		<h4>HTML &lt;DOCTYPE&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='doctypetext1' uniquename='doctype1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;!DOCTYPE&gt; 声明。。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;!DOCTYPE&gt; 声明必须是 HTML 文档的第一行，位于 &lt;html&gt; 标签之前。</p>
		<p>&lt;!DOCTYPE&gt; 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。</p>
		<p>在 HTML 4.01 中，&lt;!DOCTYPE&gt; 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。</p>
		<p>HTML5 不基于 SGML，所以不需要引用 DTD。</p>
		<p style="color: #409EFF;">提示：请始终向 HTML 文档添加 &lt;!DOCTYPE&gt; 声明，这样浏览器才能获知文档类型。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>在 HTML 4.01 中有三种 &lt;!DOCTYPE&gt; 声明。在 HTML5 中只有一种：</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext2"></el-input>
		<el-divider></el-divider>
		<h4>HTML 元素和文档类型（Doctype）</h4>
		<p>请参阅这个<el-link type='primary' href='/manual_dtd'>HTML 元素表</el-link>，其中列出了每种元素会出现在哪个文档类型中。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p style="color: #409EFF;">注释：&lt;!DOCTYPE&gt; 声明没有结束标签。</p>
		<p style="color: #409EFF;">提示：&lt;!DOCTYPE&gt; 声明对大小写不敏感。</p>
		<p style="color: #409EFF;">提示：请使用 W3C 的验证器来检查您是否编写了有效的 HTML / XHTML 文档！</p>
		<el-divider></el-divider>
		<h4>常用的 DOCTYPE 声明</h4>
		<p><strong>HTML 5</strong></p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext2"></el-input>
		<p><strong>HTML 4.01 Strict</strong></p>
		<p>该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext3"></el-input>
		<p><strong>HTML 4.01 Transitional</strong></p>
		<p>该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext4"></el-input>
		<p><strong>HTML 4.01 Frameset</strong></p>
		<p>该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext5"></el-input>
		<p><strong>XHTML 1.0 Strict</strong></p>
		<p>该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext6"></el-input>
		<p><strong>XHTML 1.0 Transitional</strong></p>
		<p>该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext7"></el-input>
		<p><strong>XHTML 1.0 Frameset</strong></p>
		<p>该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext8"></el-input>
		<p><strong>XHTML 1.1</strong></p>
		<p>该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）。</p>
		<el-input type="textarea" :autosize="true" :readonly="true" style="width: 60%" v-model="doctypetext9"></el-input>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				doctypetext1:'<!DOCTYPE html>\n<html>\n<head>\n<title>文档的标题</title>\n</head>\n\n<body>\n文档的内容......\n</body>\n\n</html>\n',
				doctypetext2:'<!DOCTYPE html>',
				doctypetext3:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">',
				doctypetext4:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" \n"http://www.w3.org/TR/html4/loose.dtd">\n',
				doctypetext5:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">',
				doctypetext6:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
				doctypetext7:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
				doctypetext8:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">',
				doctypetext9:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
