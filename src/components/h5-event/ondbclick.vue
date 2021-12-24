<template>
	<el-card>
		<h4>HTML ondbclick 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当双击鼠标按钮时执行一段 JavaScript：</p>
		<code-card :mytextarea='ondbclick_text1' uniquename='ondbclick1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 ondbclick 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>ondblclick 属性在鼠标双击元素时触发。</p>
		<p class="note"><span>注释：</span>ondbclick 属性不适用以下元素：&lt;base&gt;、&lt;bdo&gt;、&lt;br&gt;、&lt;head&gt;、&lt;html&gt;、&lt;iframe&gt;、&lt;meta&gt;、&lt;param&gt;、&lt;script&gt;、&lt;style&gt; 或 &lt;title&gt;。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="ondbclick_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="ondbclick_text2" style="width: 100%" :stripe="true" :border="true">
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
				ondbclick_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction copyText()\n{\ndocument.getElementById("field2").value=document.getElementById("field1").value;\n}\n\<\/script\>\n</head>\n<body>\n\nField1: <input type="text" id="field1" value="Hello World!"><br>\nField2: <input type="text" id="field2"><br><br>\n\n<button ondblclick="copyText()">复制文本</button>\n\n<p>当按钮被双击时触发函数。此函数把文本从 Field1 复制到 Field2 中。</p>\n\n</body>\n</html>\n',
				ondbclick_text2:[
					{'value':'script','desc':'ondbclick 发生时运行的脚本。'}
				],
				ondbclick_text3:'<element ondbclick="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


