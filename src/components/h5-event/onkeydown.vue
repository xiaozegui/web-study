<template>
	<el-card>
		<h4>HTML onkeydown 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当用户按键时执行一段 JavaScript：</p>
		<code-card :mytextarea='onkeydown_text1' uniquename='onkeydown1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onkeydown 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onkeydown 属性在用户（在键盘上）按键时触发。</p>
		<p>提示：相对于 onkeydown 事件的事件次序：onkeydown onkeypress onkeyup</p>
		<p class="note"><span>注释：</span>onkeydown 属性不适用以下元素：&lt;base&gt;、&lt;bdo&gt;、&lt;br&gt;、&lt;head&gt;、&lt;html&gt;、&lt;iframe&gt;、&lt;meta&gt;、&lt;param&gt;、&lt;script&gt;、&lt;style&gt; 或 &lt;title&gt;。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onkeydown_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onkeydown_text2" style="width: 100%" :stripe="true" :border="true">
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
				onkeydown_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction displayResult()\n{\nvar x;\nif(window.event) // IE8 以及更早版本\n	{\n	x=event.keyCode;\n	}\nelse if(event.which) // IE9/Firefox/Chrome/Opera/Safari\n	{\n	x=event.which;\n	}\nvar keychar=String.fromCharCode(x);\nalert("按键 " + keychar + " 被按下");\n}\n\<\/script\>\n</head>\n<body>\n\n<p>当用户在输入字段中按下按键时触发函数。此函数提示用户已按按键。</p>\n\n<input type="text" onkeydown="displayResult()">\n',
				onkeydown_text2:[
					{'value':'script','desc':'onkeydown 发生时运行的脚本。'}
				],
				onkeydown_text3:'<element onkeydown="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


