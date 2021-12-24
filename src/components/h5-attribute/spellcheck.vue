<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>进行拼写检查的可编辑段落：</p>
		<code-card :mytextarea="spellchecktext1" uniquename='spellcheck1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 10, Firefox, Opera, Chrome 以及 Safari 支持 spellcheck 属性。</p>\
		<p>注释：Internet Explorer 9 以及更早的版本不支持 spellcheck 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>spellcheck 属性规定是否对元素进行拼写和语法检查。</p>
		<p>可以对以下内容进行拼写检查：</p>
		<ul>
			<li v-for="item in spellchecktext2" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>spellcheck 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="spellchecktext3"></el-input>
		<h4>属性值</h4>
		<el-table :data="spellchecktext4" style="width: 100%" :border="istrue" :stripe="istrue">
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
				spellchecktext1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<p contenteditable="true" spellcheck="true">这是可编辑的段落。请试着编辑文本。</p>\n\n</body>\n</html>\n',
				spellchecktext2:[
					'input 元素中的文本值（非密码）',
					'<textarea> 元素中的文本',
					'可编辑元素中的文本'
				],
				spellchecktext3:'<element spellcheck="true|false">',
				spellchecktext4:[
					{'value':'true','desc':'对元素进行拼写和语法检查'},
					{'value':'false','desc':'不检查元素。'}
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
