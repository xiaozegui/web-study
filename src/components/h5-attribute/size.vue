<template>
	<el-card>
		<h4>HTML &lt;size&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>下面这个 HTML 表单分别有两个输入字段，宽度分别是 35 个字符和 18 个字符：</p>
		<code-card :mytextarea="size_text1" uniquename='size1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>size 属性规定输入字段的宽度。</p>
		<p>对于 &lt;input type="text"&gt; 和 &lt;input type="password"&gt;，size 属性定义的是可见的字符数。而对于其他类型，size 属性定义的是以像素为单位的输入字段宽度。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="size_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<el-table :data="size_text3" style="width: 100%" :stripe="true" :border="true">
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
		<el-link type='primary' href="/input">HTML &lt;input&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				size_text1: '<html>\n<body>\n\n<form action="static/codeview.html" method="get">\n  <p>Email: <input type="text" name="email" size="35" /></p>\n  <p>PIN: <input type="text" name="pin" maxlength="18" size="18" /></p>\n  <input type="submit" value="Submit" />\n</form>\n\n\n<p>请在提交按钮上单击，输入会发送到服务器上名为 "form_action.asp" 的页面。</p>\n\n</body>\n</html>\n',
				size_text2: '<input size="value">',
				size_text3:[
					{'attr':'characters/pixels','desc':'input 元素的宽度。'}
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
