<template>
	<el-card>
		<h4>HTML onfocus 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>Execute a JavaScript when an input field gets focus:</p>
		<code-card :mytextarea='onfocus_text1' uniquename='onfocus1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onfocus 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onfocus 属性在元素获得焦点时触发。</p>
		<p>onfocus 常用于 &lt;input&gt;、&lt;select&gt; 以及 &lt;a&gt;.</p>
		<p>提示：onfocus 属性与 onblur 属性相反。</p>
		<p class="note"><span>注释：</span>onfocus 属性不适用于以下元素：&lt;base&gt;、&lt;bdo&gt;、&lt;br&gt;、&lt;head&gt;、&lt;html&gt;、&lt;iframe&gt;、&lt;meta&gt;、&lt;param&gt;、&lt;script&gt;、&lt;style&gt; 或 &lt;title&gt;。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onfocus_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onfocus_text2" style="width: 100%" :stripe="true" :border="true">
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
				onfocus_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction setStyle(x)\n{\ndocument.getElementById(x).style.background="yellow";\n}\n\<\/script\>\n</head>\n<body>\n\n<p>当输入字段获得焦点时触发函数。此函数改变输入字段的背景色。</p>\n\nFirst name: <input type="text" id="fname" onfocus="setStyle(this.id)"><br>\nLast name: <input type="text" id="lname" onfocus="setStyle(this.id)">\n\n</body>\n</html>\n',
				onfocus_text2:[
					{'value':'script','desc':'onfocus 发生时运行的脚本。'}
				],
				onfocus_text3:'<element onfocus="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


