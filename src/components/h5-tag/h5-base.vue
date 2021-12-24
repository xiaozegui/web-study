<template>
	<el-card>
		<h4>HTML &lt;base&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>Example.com 的联系信息：</p>
		<code-card :mytextarea='base_text1' uniquename='base1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;base&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;base&gt; 标签为页面上的所有链接规定默认地址或默认目标。</p>
		<p>通常情况下，浏览器会从当前文档的 URL 中提取相应的元素来填写相对 URL 中的空白。</p>
		<p>使用 &lt;base&gt; 标签可以改变这一点。浏览器随后将不再使用当前文档的 URL，而使用指定的基本 URL 来解析所有的相对 URL。</p>
		<p>这其中包括 &lt;a&gt;、&lt;img&gt;、&lt;link&gt;、&lt;form&gt; 标签中的 URL。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;base&gt; 标签没有结束标签；在 XHTML 中，&lt;base&gt; 标签必须被正确地关闭。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p><mark>注释：&lt;base&gt; 标签必须位于 head 元素内部。</mark></p>
		<el-divider></el-divider>
		<h4>必需的属性</h4>
		<el-table :data="base_text2" style="width: 100%" :stripe="true" :border="true">
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
		<el-table :data="base_text3" style="width: 100%" :stripe="true" :border="true">
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
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				base_text1:'<html>\n<head>\n<base href="http://127.0.0.1:8080/static/img/" />\n<base target="_blank" />\n</head>\n\n<body>\n<img src="eg_smile.gif" /><br />\n<p>请注意，我们已经为图像规定了一个相对地址。由于我们已经在 head 部分规定了一个基准 URL，浏览器将在如下地址寻找图片：</p>\n<p>"http://www.w3school.com.cn/i/eg_smile.gif"</p>\n\n<br /><br />\n<p><a href="http://www.w3school.com.cn">W3School</a></p>\n<p>请注意，链接会在新窗口中打开，即使链接中没有 target="_blank" 属性。这是因为 base 元素的 target 属性已经被设置为 "_blank" 了。</p>\n\n</body>\n</html>\n',
				base_text2:[{'attr':'href','value':'URL','desc':'规定页面中所有相对链接的基准 URL。'}],
				base_text3:[{'attr':'target','value':'_blank _parent _self _top  framename','desc':'在何处打开页面中所有的链接。'}]
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


