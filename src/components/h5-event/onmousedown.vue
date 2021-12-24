<template>
	<el-card>
		<h4>HTML onmousedown 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当在段落上按下鼠标按钮时执行一段 JavaScript：</p>
		<code-card :mytextarea='onmousedown_text1' uniquename='onmousedown1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onmousedown 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onmousedown 属性在鼠标按钮在元素上按下时触发。</p>
		<p>提示：相对于 onmousedown 事件的事件次序（限于鼠标左/中键）：onmousedown onmouseup onclick</p>
		<p>相对于 onmousedown 事件的事件次序（限于鼠标右键）：onmousedown onmouseup oncontextmenu</p>
		<p class="note"><span>注释：</span>onmousedown 属性不适用以下元素：&lt;base&gt;、&lt;bdo&gt;、&lt;br&gt;、&lt;head&gt;、&lt;html&gt;、&lt;iframe&gt;、&lt;meta&gt;、&lt;param&gt;、&lt;script&gt;、&lt;style&gt; 或 &lt;title&gt;。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onmousedown_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onmousedown_text2" style="width: 100%" :stripe="true" :border="true">
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
				onmousedown_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction mouseDown()\n{\ndocument.getElementById("p1").style.color="red";\n}\n\nfunction mouseUp()\n{\ndocument.getElementById("p1").style.color="green";\n}\n\<\/script>\n</head>\n<body>\n\n<p id="p1" onmousedown="mouseDown()" onmouseup="mouseUp()">\n请点击文本！mouseDown() 函数当鼠标按钮在段落上被按下时触发。此函数把文本颜色设置为红色。mouseUp() 函数在鼠标按钮被释放时触发。mouseUp() 函数把文本的颜色设置为绿色。\n</p>\n\n</body>\n</html>\n',
				onmousedown_text2:[
					{'value':'script','desc':'onmousedown 发生时运行的脚本。'}
				],
				onmousedown_text3:'<element onmousedown="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


