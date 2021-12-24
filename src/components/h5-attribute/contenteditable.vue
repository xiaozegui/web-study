<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>一段可编辑的段落：</p>
		<code-card :mytextarea="contenteditabletext1" uniquename='contenteditable1'></code-card>
		<p>浏览器支持:所有主流浏览器都支持 contenteditable 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>contenteditable 属性规定元素内容是否可编辑。</p>
		<p>注释：如果元素未设置 contenteditable 属性，那么元素会从其父元素继承该属性。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>contenteditable 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="contenteditabletext2"></el-input>
		<h4>属性值</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th style="width:30%;">值</th>
					<th>描述</th>
				</tr>
				<tr>
					<td>true</td>
					<td>规定元素可编辑。</td>
				</tr>
				<tr>
					<td>false</td>
					<td>规定元素不可编辑。</td>
				</tr>
			</tbody>
		</table>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				contenteditabletext1: '<!DOCTYPE HTML>\n<html>\n<body>\n\n<p contenteditable="true">这是一段可编辑的段落。请试着编辑该文本。</p>\n\n</body>\n</html>\n',
				contenteditabletext2: '<element contenteditable="true|false">'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	th {
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
		border-left: 1px #EBEEF5 solid;
	}

	td {
		border-left: 1px #EBEEF5 solid;
	}
</style>
