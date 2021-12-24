<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>在 HTML 文档中使用 style 属性：</p>
		<code-card :mytextarea="styletext1" uniquename='style1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>style 属性规定元素的行内样式（inline style）</p>
		<p>style 属性将覆盖任何全局的样式设定，例如在 &lt;style&gt; 标签或在外部样式表中规定的样式。</p>
		<el-divider></el-divider>
		<h4>支持</h4>
		<p>W3C: "W3C" 列指示 W3C 的 HTML/XHTML 推荐标准中是否定义了该属性。</p>
		<el-table :data="styletext2" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="IE" label="IE" >
			</el-table-column>
			<el-table-column prop="Firefox" label="Firefox" >
			</el-table-column>
			<el-table-column prop="Opera" label="Opera" >
			</el-table-column>
			<el-table-column prop="Safari" label="Safari" >
			</el-table-column>
			<el-table-column prop="W3C" label="W3C" >
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="styletext3"></el-input>
		<h4>属性值</h4>
		<el-table :data="styletext4" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="value" label="值" >
			</el-table-column>
			<el-table-column prop="desc" label="描述" >
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				styletext1:'<html>\n<body>\n\n<h1 style="color:blue;text-align:center">This is a header</h1>\n<p style="color:red">This is a paragraph.</p>\n\n</body>\n</html>\n',
				styletext2:[
					{'IE':'YES','Firefox':'YES','Opera':'YES','Safari':'YES','W3C':'YES'}
				],
				styletext3:'<element style="value">',
				styletext4:[
					{'value':'style_definition','desc':'一个或多个由分号分隔的 CSS 属性和值。'}
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
