<template>
	<el-card>
		<h4>HTML &lt;title&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一个简单的 HTML 文档，带有尽可能少的必需的标签：</p>
		<code-card :mytextarea='title_text1' uniquename='title1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;title&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;title&gt; 元素可定义文档的标题。</p>
		<p>浏览器会以特殊的方式来使用标题，并且通常把它放置在浏览器窗口的标题栏或状态栏上。同样，当把文档加入用户的链接列表或者收藏夹或书签列表时，标题将成为该文档链接的默认名称。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之前的差异</h4>
		<p>NONE</p>
		<h4>提示和注释</h4>
		<p><mark>提示：&lt;title&gt; 标签是 &lt;head&gt; 标签中唯一要求包含的东西。</mark></p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p>&lt;title&gt; 标签支持以下标准属性：</p>
		<el-table :data="title_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>DTD：指示在哪种 XHTML 1.0 DTD 中允许该标签。S=Strict, T=Transitional, F=Frameset.</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;title&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>延伸阅读：标题里是什么？</h4>
		<p>一定要选择一个正确的标题，这对于定义文档并确保它能够在 Web 上有效利用来说是十分重要的。</p>
		<p>请记住，用户可以用任何顺序、独立地访问文档集中的每一个文档。所以，文档的标题不仅应当根据其他文档的上下文定义，而且还要显示其自身的特点。</p>
		<p>含有文档引用排序的标题通常不是什么好标题。举个例子，像“第十六章”或“第五部分”这样的标题，对读者理解其内容方面毫无用处。描述性更强的标题，像“第十六章：HTML 标题”，或者“第五部分：如何使用标题”，这样的标题不仅表达了它在一个大型文档集中的位置，还说明了文档的具体内容，吸引读者更有兴趣读下去。</p>
		<p>自我引用的标题也没有什么用处。像“主页”这样的标题和内容毫无关系，类似的还有“反馈页”或“常用链接”等。你应该设计一个能够传达一定内容和目的的标题，令读者凭这个标题就可以判断是否由必要访问这个页面。</p>
		<p>人们常常会花费大量时间去创建 Web 文档，但却经常只是因为一个不吸引人或无意义的标题，而把这些努力全都浪费掉了。当自动为用户搜集链接的特殊软件在 Web 上越来越流行时，只有网页的标题才会作为与页面相关的描述性词语，被插入到庞大的链接数据库中。因此，我们怎么强调这一点都不过分：请为自己的每个文档都认真地选择一个描述性的、实用的并与上下文独立的标题。</p>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				title_text1:'<html>\n\n<head>\n<title>我的第一个 HTML 页面</title>\n</head>\n\n<body>\n<p>body 元素的内容会显示在浏览器中。</p>\n<p>title 元素的内容会显示在浏览器的标题栏中。</p>\n</body>\n\n</html>\n',
				title_text2:[
					{'attr':'dir','value':'rtl ltr','desc':'规定元素中内容的文本方向。'},
					{'attr':'lang','value':'language_code','desc':'规定元素中内容的语言代码。'},
					{'attr':'xml:lang','value':'language_code','desc':'规定 XHTML 文档中元素内容的语言代码。'}
				]
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


