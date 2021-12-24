<template>
	<el-card>
		<h4>HTML &lt;head&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一个简单的 HTML 文档，带有最基本的必需的元素：</p>
		<code-card :mytextarea='head_text1' uniquename='head1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;head&gt; 标签</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;head&gt; 标签用于定义文档的头部，它是所有头部元素的容器。&lt;head&gt; 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。</p>
		<p>文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。</p>
		<p>下面这些标签可用在 head 部分：&lt;base&gt;, &lt;link&gt;, &lt;meta&gt;, &lt;script&gt;, &lt;style&gt;, 以及 &lt;title&gt;。</p>
		<p>&lt;title&gt; 定义文档的标题，它是 head 部分中唯一必需的元素。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p><mark>提示：应该把 &lt;head&gt; 标签放在文档的开始处，紧跟在 &lt;html&gt; 后面，并处于 &lt;body&gt; 标签或&lt;frameset&gt; 标签之前。</mark></p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="head_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p><strong>profile 属性的更多信息</strong></p>
		<p>文档的头部经常会包含一些 &lt;meta&gt; 标签，用来告诉浏览器关于文档的附加信息。在将来，创作者可能会利用预先定义好的标准文档的元数据配置文件（metadata profile），以便更好地描述它们的文档。profile 属性提供了与当前文档相关联的配置文件的 URL。</p>
		<p>配置文件的格式以及浏览器使用它们的方式都还没有进行定义，这个属性主要是为将来的开发而保留的占位符。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;head&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例显示如何使用 base 标签使页面中的所有标签在新窗口中打开。</p>
		<code-card :mytextarea='head_text3' uniquename='head3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				head_text1:'<html>\n\n<head>\n<title>我的第一个 HTML 页面</title>\n</head>\n\n<body>\n<p>body 元素的内容会显示在浏览器中。</p>\n<p>title 元素的内容会显示在浏览器的标题栏中。</p>\n</body>\n\n</html>\n',
				head_text2:[
					{'attr':'profile','value':'URL','desc':'一个由空格分隔的 URL 列表，这些 URL 包含着有关页面的元数据信息'}
				],
				head_text3:'<!DOCTYPE html>\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />\n<meta http-equiv="Content-Language" content="zh-cn" />\n\n<base target="_blank" />\n</head>\n\n<body>\n\n<p>\n<a href="http://www.w3school.com.cn" target="_blank">这个连接</a> 将在新窗口中加载，因为 target 属性被设置为 "_blank"。\n</p>\n\n<p>\n<a href="http://www.w3school.com.cn">这个连接</a> 也将在新窗口中加载，即使没有 target 属性。\n</p>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


