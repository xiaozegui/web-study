<template>
	<el-card>
		<h4>HTML &lt;type&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>下面的表单拥有两个输入字段以及一个提交按钮</p>
		<code-card :mytextarea="type_text1" uniquename='type1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>type 属性规定 input 元素的类型。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="type_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<el-table :data="type_text3" style="width: 100%" :stripe="true" :border="true">
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
		<el-divider></el-divider>
		<h4>File</h4>
		<p>&lt;input type="file" /&gt; 用于文件上传。</p>
		<code-card :mytextarea="type_text4" uniquename='type4'></code-card>
		<br><br>
		<el-link type='primary' href="/input">HTML &lt;input&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				type_text1: '<html>\n<body>\n\n<form action="static/codeview.html" method="get">\n  <p>First name: <input type="text" name="fname" /></p>\n  <p>Last name: <input type="text" name="lname" /></p>\n  <input type="submit" value="Submit" />\n</form>\n\n<p>请单击确认按钮，输入会发送到服务器上名为 "form_action.asp" 的页面。</p>\n\n</body>\n</html>\n',
				type_text2: '<input type="value">',
				type_text3:[
					{'attr':'button','desc':'定义可点击按钮（多数情况下，用于通过 JavaScript 启动脚本）'},
					{'attr':'checkbox','desc':'定义复选框。'},
					{'attr':'file','desc':'定义输入字段和 "浏览"按钮，供文件上传'},
					{'attr':'hidden','desc':'定义隐藏的输入字段。'},
					{'attr':'image','desc':'定义图像形式的提交按钮。'},
					{'attr':'password','desc':'定义密码字段。该字段中的字符被掩码。'},
					{'attr':'radio','desc':'定义单选按钮。'},
					{'attr':'reset','desc':'定义重置按钮。重置按钮会清除表单中的所有数据'},
					{'attr':'submit','desc':'定义提交按钮。提交按钮会把表单数据发送到服务器。'},
					{'attr':'text','desc':'定义单行的输入字段，用户可在其中输入文本。默认宽度为 20 个字符。'}
				],
				type_text4:'<html>\n<body>\n\n<form>\n<input type="file" name="pic" accept="image/gif" />\n</form>\n\n<p><b>注释：</b>出于安全方面的考虑，本例不允许用户上传文件。</p>\n\n</body>\n</html>\n'
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
