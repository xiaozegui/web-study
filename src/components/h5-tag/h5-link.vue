<template>
	<el-card>
		<h4>HTML &lt;link&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;link&gt; 元素：</p>
		<code-card :mytextarea='link_text1' uniquename='link1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>在用于样式表时，&lt;link&gt; 标签得到了几乎所有浏览器的支持。但是几乎没有浏览器支持其他方面的用途。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;link&gt; 标签定义文档与外部资源的关系</p>
		<p>&lt;link&gt; 标签最常见的用途是链接样式表</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;link&gt; 标签没有结束标签。</p>
		<p>在 XHTML 中，&lt;link&gt; 标签必须被正确地关闭</p>
		<h4>提示和注释：</h4>
		<p>注释：link 元素是空元素，它仅包含属性。</p>
		<p><mark>注释：此元素只能存在于 head 部分，不过它可出现任何次数。</mark></p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="link_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;link&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;link&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				link_text1:'<html> \n \n<head> \n<link rel="stylesheet" type="text/css" href="static/csstest1.css" > \n</head> \n \n<body> \n<h1>我通过外部样式表进行格式化。</h1> \n<p>我也一样！</p> \n</body> \n \n</html> \n',
				link_text2:[
					{'attr':'charset','value':'char_encoding','desc':'HTML5 中不支持。','isshow':false},
					{'attr':'href','value':'URL','desc':'规定被链接文档的位置','isshow':false},
					{'attr':'hreflang','value':'language_code','desc':'规定被链接文档中文本的语言。','isshow':false},
					{'attr':'media','value':'media_query','desc':'规定被链接文档将被显示在什么设备上','isshow':false},
					{'attr':'rel','value':'alternate author help icon licence next pingback prefetch prev search sidebar stylesheet tag','desc':'规定当前文档与被链接文档之间的关系','isshow':false},
					{'attr':'rev','value':'reversed relationship','desc':'HTML5 中不支持。','isshow':false},
					{'attr':'sizes','value':'heightxwidth any','desc':'规定被链接资源的尺寸。仅适用于 rel="icon"','isshow':true},
					{'attr':'target','value':'_blank _self _top _parent frame_name','desc':'HTML5 中不支持','isshow':false},
					{'attr':'type','value':'MIME_type','desc':'规定被链接文档的 MIME 类型。','isshow':false}
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


