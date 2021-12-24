<template>
	<el-card>
		<h4>HTML &lt;body&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一个简单的 HTML 文档，带有最基本的必需的元素：</p>
		<code-card :mytextarea='body_text1' uniquename='body1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;body&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>body 元素定义文档的主体。</p>
		<p>body 元素包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。）</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>在 HTML 4.01 中，所有 body 元素的“呈现属性”均不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，所有 body 元素的“呈现属性”均不被支持。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="body_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<p>&lt;body&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;body&gt;标签支持<el-link type='primary' href='/event'>事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>这个例子是一个很简单的 HTML 文件，使用了尽量少的 HTML 标签。它向您演示了 body 元素中的内容是如何被浏览器显示的。</p>
		<code-card :mytextarea='body_text3' uniquename='body3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				body_text1:'<html>\n\n<head>\n<title>我的第一个 HTML 页面</title>\n</head>\n\n<body>\n<p>body 元素的内容会显示在浏览器中。</p>\n<p>title 元素的内容会显示在浏览器的标题栏中。</p>\n</body>\n\n</html>\n',
				body_text2:[
					{'attr':'alink','value':'rgb(x,x,x) #xxxxxx colorname','desc':'不赞成使用。请使用样式取代它。规定文档中活动链接（active link）的的颜色。'},
					{'attr':'background','value':'URL','desc':'不赞成使用。请使用样式取代它。规定文档的背景图像。'},
					{'attr':'bgcolor','value':'rgb(x,x,x) #xxxxxx colorname','desc':'不赞成使用。请使用样式取代它。规定文档的背景颜色。'},
					{'attr':'link','value':'rgb(x,x,x) #xxxxxx colorname','desc':'不赞成使用。请使用样式取代它。规定文档中未访链接的默认颜色。'},
					{'attr':'text','value':'rgb(x,x,x) #xxxxxx colorname','desc':'不赞成使用。请使用样式取代它。规定文档中所有文本的颜色。'},
					{'attr':'vlink','value':'rgb(x,x,x) #xxxxxx colorname','desc':'不赞成使用。请使用样式取代它。规定文档中已被访问链接的颜色。'}
				],
				body_text3:'<html>\n\n<head>\n<title>good good study</title>\n</head>\n\n<body>\n<p>body day day up</p>\n<p>title 元素的内容会显示在浏览器的标题栏中。</p>\n</body>\n\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>

