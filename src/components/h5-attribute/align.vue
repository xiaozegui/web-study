<template>
	<el-card>
		<h4>HTML &lt;align&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>文档中的一个部分居中对齐：</p>
		<code-card :mytextarea="align_text1" uniquename='align1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>align 属性规定 div 元素中的内容的水平对齐方式。</p>
		<p>提示：每当画布的高度或宽度被重设时，画布内容就会被清空（请看页面底部的例子）。</p>
		<p>所有浏览器都支持 align 属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="align_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<el-table :data="align_text3" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					{{ scope.row.attr }}
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<br><br>
		<el-link type='primary' href="/div">HTML &lt;div&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				align_text1: '<html>\n<body>\n\n<p>这是一个段落。没有规定对齐方式。</p>\n\n<div align="center" style="border:1px solid red">\n这是 div 元素中的文本！\n</div>\n\n<p>这是一个段落。没有规定对齐方式。</p>\n\n</body>\n</html>\n',
				align_text2: '<div align="value">',
				align_text3:[
					{'attr':'left','desc':'左对齐内容'},
					{'attr':'right','desc':'右对齐内容。'},
					{'attr':'center','desc':'居中对齐内容'},
					{'attr':'justify','desc':'对行进行伸展，这样每行都可以有相等的长度（就像在报纸和杂志中）。'},
				]
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	th,td{
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
		border-left: 1px #EBEEF5 solid;
	}
</style>
