<template>
	<el-card>
		<h4>HTML &lt;p&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>以下代码标记了一个段落：</p>
		<code-card :mytextarea='p_text1' uniquename='p1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;p&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;p&gt;  标签定义段落。</p>
		<p>p 元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，所有 p 元素的呈现属性均不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，所有 p 元素的呈现属性均不被支持。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="p_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;p&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;p&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示段落元素的某些缺省的行为。</p>
		<code-card :mytextarea='p_text3' uniquename='p3'></code-card>
		<p>本例演示 HTML 格式化的某些问题。</p>
		<code-card :mytextarea='p_text4' uniquename='p4'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				p_text1:'<html> \n<body> \n \n<p>这是段落。</p> \n<p>这是段落。</p> \n<p>这是段落。</p> \n \n<p>段落元素由 p 标签定义。</p>  \n \n</body> \n</html> \n',
				p_text2:[
					{'attr':'align','value':'left right center justify','desc':'规定段落中文本的对齐方式'}
				],
				p_text3:'<html> \n \n<body> \n \n<p> \n这个段落 \n在源代码中 \n包含许多行 \n但是浏览器 \n忽略了它们。 \n</p> \n \n<p> \n这个段落 \n在源代码       中 \n包含   许多行 \n但是      浏览器 \n忽略了  它们。 \n</p> \n \n<p> \n段落的行数依赖于浏览器窗口的大小。如果调节浏览器窗口的大小，将改变段落中的行数。 \n</p> \n \n</body> \n</html> \n',
				p_text4:'<html> \n \n<body> \n \n<h1>春晓</h1> \n \n<p> \n    春眠不觉晓， \n      处处闻啼鸟。 \n        夜来风雨声， \n          花落知多少。 \n</p> \n \n<p>注意，浏览器忽略了源代码中的排版（省略了多余的空格和换行）。</p> \n \n</body> \n \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


