<template>
	<el-card>
		<h4>HTML onkeyup 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当用户放松按键时执行一段 JavaScript：</p>
		<code-card :mytextarea='onkeyup_text1' uniquename='onkeyup1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onkeyup 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onkeyup 属性在用户（在键盘上）释放按键时触发。</p>
		<p>提示：相对于 onkeyup 事件的事件次序：onkeydown onkeypress onkeyup</p>
		<p class="note"><span>注释：</span>onkeyup 属性不适用以下元素：&lt;base&gt;、&lt;bdo&gt;、&lt;br&gt;、&lt;head&gt;、&lt;html&gt;、&lt;iframe&gt;、&lt;meta&gt;、&lt;param&gt;、&lt;script&gt;、&lt;style&gt; 或 &lt;title&gt;。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onkeyup_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onkeyup_text2" style="width: 100%" :stripe="true" :border="true">
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
				onkeyup_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction upperCase()\n{\nvar x=document.getElementById("fname").value\ndocument.getElementById("fname").value=x.toUpperCase()\n}\n\<\/script\>\n</head>\n<body>\n\n<p>请输入您的姓名，然后把焦点移动到字段外：</p>\n请输入您的姓名（英文字符）：<input type="text" name="fname" id="fname" onkeyup="upperCase()">\n\n</body>\n</html>\n',
				onkeyup_text2:[
					{'value':'script','desc':'onkeyup 发生时运行的脚本。'}
				],
				onkeyup_text3:'<element onkeyup="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


