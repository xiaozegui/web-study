<template>
	<el-card>
		<h4>HTML onunload 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当用户卸载文档时执行一段 JavaScript：</p>
		<code-card :mytextarea='onunload_text1' uniquename='onunload1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onunload 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onunload 属性会在页面卸载时触发（或者浏览器窗口已关闭）。</p>
		<p>onunload 在用户从页面导航离开时发生（通过点击链接、提交表单或者关闭浏览器窗口等等）。</p>
		<p>注释：如果您重载页面，也会触发 unload 事件（以及 onload 事件）。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onunload_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onunload_text2" style="width: 100%" :stripe="true" :border="true">
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
				onunload_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction goodbye()\n{\nalert("感谢您访问 W3School!");\n}\n\<\/script\>\n</head>\n\n<body onunload="goodbye()">\n\n<h1>欢迎访问我的首页</h1>\n<p>请关闭窗口，或按 F5 刷新页面。</p>\n\n</body>\n</html>\n',
				onunload_text2:[
					{'value':'script','desc':'onunload 发生时运行的脚本。'}
				],
				onunload_text3:'<element onunload="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


