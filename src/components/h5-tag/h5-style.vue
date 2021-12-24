<template>
	<el-card>
		<h4>HTML &lt;style&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;style&gt; 元素：</p>
		<code-card :mytextarea='style_text1' uniquename='style1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持&lt;style&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;style&gt; 标签用于为 HTML 文档定义样式信息。</p>
		<p>在 style 中，您可以规定在浏览器中如何呈现 HTML 文档。</p>
		<p>type 属性是必需的，定义 style 元素的内容。唯一可能的值是 "text/css"</p>
		<p>style 元素位于 head 部分中。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>提示：如需链接外部样式表，请使用 &lt;link&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<el-divider></el-divider>
		<h4>必需的属性</h4>
		<el-table :data="style_text2" style="width: 100%" :stripe="true" :border="true">
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
		<h4>可选的属性</h4>
		<el-table :data="style_text3" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;style&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;style&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示如何&lt;link&gt;标签链接到一个外部样式表。</p>
		<code-card :mytextarea='style_text4' uniquename='style1'></code-card>
		<p>本例演示如何使用样式属性做一个没有下划线的链接。</p>
		<code-card :mytextarea='style_text5' uniquename='style1'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				style_text1:'<html>\n\n<head>\n<style type="text/css">\nh1 {color: red}\np {color: blue}\n</style>\n</head>\n\n<body>\n<h1>header 1</h1>\n<p>A paragraph.</p>\n</body>\n\n</html>\n',
				style_text2:[
					{'attr':'type','value':'text/css','desc':'规定样式表的 MIME 类型。'}
				],
				style_text3:[
					{'attr':'media','value':'screen tty tv projection handheld print braille aural all','desc':'为样式表规定不同的媒介类型。'}
				],
				style_text4:'<html>\n\n<head>\n<link rel="stylesheet" type="text/css" href="static/csstest1.css" >\n</head>\n\n<body>\n<h1>我通过外部样式表进行格式化。</h1>\n<p>我也一样！</p>\n</body>\n\n</html>\n',
				style_text5:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />\n<meta http-equiv="Content-Language" content="zh-cn" />\n</head>\n\n<body>\n\n<a href="" style="text-decoration:none">\n这是一个链接！\n</a>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


