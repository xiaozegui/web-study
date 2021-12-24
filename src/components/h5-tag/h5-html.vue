<template>
	<el-card>
		<h4>HTML &lt;html&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='html_text1' uniquename='html1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;html&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>此元素可告知浏览器其自身是一个 HTML 文档。</p>
		<p>&lt;html&gt; 与 &lt;/html&gt; 标签限定了文档的开始点和结束点，在它们之间是文档的头部和主体。正如您所了解的那样，文档的头部由 &lt;head&gt; 标签定义，而主体由 &lt;body&gt; 标签定义。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>xmlns 属性在 XHTML 中是必需的，但在 HTML 中不是。不过，即使 XHTML 文档中的 &lt;html&gt; 没有使用此属性，W3C 的验证器也不会报错。这是因为 "xmlns=http://www.w3.org/1999/xhtml" 是一个固定值，即使您没有包含它，此值也会被添加到 &lt;html&gt; 标签中。</p>
		<el-divider>提示和注释</el-divider>
		<p><mark>注释：即使 html 元素是文档的根元素，它也不包含 doctype 元素。doctype 元素必须位于 html 元素之前。</mark></p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="html_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link><i class="el-icon-time" v-show="scope.row.isshow"></i>
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
		<p>&lt;html&gt;标签支持<el-link type='primary' htmlef="/attribute">HTML5全局属性</el-link></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				html_text1:'<html>\n\n<head>\n<title>我的第一个 HTML 页面</title>\n</head>\n\n<body>\n<p>body 元素的内容会显示在浏览器中。</p>\n<p>title 元素的内容会显示在浏览器的标题栏中。</p>\n</body>\n\n</html>\n',
				html_text2:[
					{'attr':'manifest','value':'url','desc':'定义一个 URL，在这个 URL 上描述了文档的缓存信息','isshow':true},
					{'attr':'xmlns','value':'http://www.w3.org/1999/xhtml','desc':'定义 XML namespace 属性','isshow':false}
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


