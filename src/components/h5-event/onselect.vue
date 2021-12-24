<template>
	<el-card>
		<h4>HTML onselect 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当 &lt;input&gt; 元素内的文本被选中后执行一段 JavaScript：</p>
		<code-card :mytextarea='onselect_text1' uniquename='onselect1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onselect 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onselect 属性在元素中的文本被选中时触发。</p>
		<p>onselect 属性可用于以下元素内：&lt;input type="file"&gt;、&lt;input type="password"&gt;、&lt;input type="text"&gt;、&lt;keygen&gt; 以及 &lt;textarea&gt;.</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onselect_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onselect_text2" style="width: 100%" :stripe="true" :border="true">
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
				onselect_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction showMsg()\n{\nalert("您选中了一些文本！");\n}\n\<\/script\>\n</head>\n<body>\n\n一些文本：<input type="text" value="请选中我！" onselect="showMsg()">\n\n<p>函数 showMsg() 在输入字段中的文本被选中时触发。此函数显示一段消息。</p>\n\n</body>\n</html>\n',
				onselect_text2:[
					{'value':'script','desc':'onselect 发生时运行的脚本。'}
				],
				onselect_text3:'<element onselect="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


