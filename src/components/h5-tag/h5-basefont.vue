<template>
	<el-card>
		<h4>HTML &lt;basefont&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>规定页面上的默认字体颜色和字号：</p>
		<code-card :mytextarea='basefont_text1' uniquename='basefont1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>只有 Internet Explorer 支持 &lt;basefont&gt; 标签。应该避免使用该标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;basefont&gt; 标签定义基准字体。该标签可以为文档中的所有文本定义默认字体颜色、字体大小和字体系列。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，不赞成使用 basefont 元素；在 XHTML 1.0 Strict DTD 中，不支持 basefont 元素。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="basefont_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;</el-link>
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
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="istrue" v-model="basefont_text3"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href='/attribute'>标准属性</el-link></p>
		<el-divider></el-divider>
		<p><mark>&lt;basefont&gt;没有事件属性</mark></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				basefont_text1:'<html>\n<head>\n<basefont color="red" size="5" />\n</head>\n\n<body>\n<h1>This is a header</h1>\n<p>This is a paragraph</p>\n\n<p>\n在 HTML 4.01 中，不赞成使用 basefont 元素；在 XHTML 1.0 Strict DTD 中，不支持 basefont 元素。\n</p>\n\n</body>\n</html>\n',
				basefont_text2:[
					{'attr':'color','value':'rgb(x,x,x) #xxxxxx colorname','desc':'不赞成使用。请使用样式取代它。规定文档中的默认文本颜色。'},
					{'attr':'face','value':'font_family','desc':'不赞成使用。请使用样式取代它。规定文档中的默认字体'},
					{'attr':'size','value':'number','desc':'不赞成使用。请使用样式取代它。规定文档中的默认字体大小'}
				],
				basefont_text3:'id, class, title, style, dir, lang, xml:lang'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


