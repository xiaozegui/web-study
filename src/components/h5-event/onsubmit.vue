<template>
	<el-card>
		<h4>HTML onsubmit 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当提交表单时执行一段 JavaScript：</p>
		<code-card :mytextarea='onsubmit_text1' uniquename='onsubmit1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onsubmit 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onsubmit 属性在提交表单时触发。</p>
		<p>onsubmit 属性只在 &lt;form&gt; 中使用。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onsubmit_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onsubmit_text2" style="width: 100%" :stripe="true" :border="true">
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
		<h4>事件属性</h4>
		<p><el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				onsubmit_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction checkForm()\n{\nalert("表单已提交！");\n}\n\<\/script\>\n</head>\n<body>\n\n<form action="static/codeview.html" onsubmit="checkForm()">\n姓：<input type="text" name="lname"><br>\n名：<input type="text" name="fname"><br>\n<input type="submit" value="提交">\n\n<p>函数 checkForm() 在提交按钮被点击时触发。此函数向用户显示一段消息。</p>\n\n</body>\n</html>\n',
				onsubmit_text2:[
					{'value':'script','desc':'onsubmit 发生时运行的脚本。'}
				],
				onsubmit_text3:'<element onsubmit="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


