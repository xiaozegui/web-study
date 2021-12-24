<template>
	<el-card>
		<h4>HTML &lt;pre&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;pre&gt; 元素：</p>
		<code-card :mytextarea='pre_text1' uniquename='pre1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;pre&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>pre 元素可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。</p>
		<p>&lt;pre&gt;标签的一个常见应用就是用来表示计算机的源代码。</p>
		<p>可以导致段落断开的标签（例如标题、&lt;p&gt; 和 &lt;address&gt; 标签）绝不能包含在 &lt;pre&gt; 所定义的块里。尽管有些浏览器会把段落结束标签解释为简单地换行，但是这种行为在所有浏览器上并不都是一样的。</p>
		<p>pre 元素中允许的文本可以包括物理样式和基于内容的样式变化，还有链接、图像和水平分隔线。当把其他标签（比如 &lt;a&gt; 标签）放到 &lt;pre&gt; 块中时，就像放在 HTML/XHTML 文档的其他部分中一样即可。请看下面的例子：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="pre_text3"></el-input>
		<p>在上面的代码中，&lt;pre&gt; 标签中的特殊符号被转换为符号实体，比如 "&lt;" 代表 "<"，"&gt;" 代表 ">"。另外，请注意蓝色的代码，我们在 &lt;pre&gt; 标签中使用了链接，也就是 &lt;a&gt; 标签。上面这段代码的显示效果如下：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="pre_text4"></el-input>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>在 HTML 4.01 中，pre 元素的 "width" 属性是不被赞成使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，pre 元素的 "width" 属性是不被支持的。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="pre_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="值">
				<template slot-scope="scope">
					<span>{{scope.row.value}}</span>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;pre&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;pre&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				pre_text1:'<html> \n \n<body> \n \n<pre> \n这是 \n预格式文本。 \n它保留了      空格 \n和换行。 \n</pre> \n \n<p>pre 标签很适合显示计算机代码：</p> \n \n<pre> \nfor i = 1 to 10 \n     print i \nnext i \n</pre> \n \n</body> \n</html> \n',
				pre_text2:[
					{'attr':'width','value':'number','desc':'定义每行的最大字符数（通常是 40、80 或 132）'}
				],
				pre_text3:'<pre> \n&lt;html&gt; \n \n&lt;head&gt; \n  &lt;script type=&quot;text/javascript&quot; src=&quot;loadxmldoc.js&quot;&gt; \n&lt;/script&gt; \n&lt;/head&gt; \n \n&lt;body&gt; \n \n  &lt;script type=&quot;text/javascript&quot;&gt; \n    xmlDoc=<a href="dom_loadxmldoc.asp">loadXMLDoc</a>(&quot;books.xml&quot;); \n    document.write(&quot;xmlDoc is loaded, ready for use&quot;); \n  &lt;/script&gt; \n \n&lt;/body&gt; \n \n&lt;/html&gt; \n</pre> \n',
				pre_text4:'<html> \n \n<head> \n  <script type="text/javascript" src="loadxmldoc.js"> \n\<\/script\> \n</head> \n \n<body> \n \n  \<script type="text/javascript"> \n    xmlDoc=loadXMLDoc("books.xml"); \n    document.write("xmlDoc is loaded, ready for use"); \n  \<\/script\> \n \n</body> \n \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


