<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>在 HTML 文档中使用 title 属性：</p>
		<code-card :mytextarea="titletext1" uniquename='title1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>title 属性规定关于元素的额外信息。</p>
		<p>这些信息通常会在鼠标移到元素上时显示一段工具提示文本（tooltip text）。</p>
		<p style="color: #409EFF;">提示：title 属性常与 form 以及 a 元素一同使用，以提供关于输入格式和链接目标的信息。同时它也是 abbr 和 acronym 元素的必需属性。</p>
		<el-divider></el-divider>
		<h4>支持</h4>
		<p>W3C: "W3C" 列指示 W3C 的 HTML/XHTML 推荐标准中是否定义了该属性。</p>
		<el-table :data="titletext2" style="width: 100%" :border="istrue" :stripe="istrue">
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
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="titletext3"></el-input>
		<h4>属性值</h4>
		<el-table :data="titletext4" style="width: 100%" :border="istrue" :stripe="istrue">
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
				titletext1:'<html>\n<body>\n\n<abbr title="People Republic of China">PRC</abbr> was founded in 1949.\n<p title="Free Web tutorials">HTML5 Study </p>\n\n</body>\n',
				titletext2:[
					{'IE':'YES','Firefox':'YES','Opera':'YES','Safari':'YES','W3C':'YES'}
				],
				titletext3:'<element title="value">',
				titletext4:[
					{'value':'text','desc':'规定元素的工具提示文本（tooltip text）。'}
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
