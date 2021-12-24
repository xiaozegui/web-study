<template>
	<el-card>
		<h4>HTML onload 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>页面加载之后立即执行一段 JavaScript：</p>
		<code-card :mytextarea='onload_text1' uniquename='onload1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onload 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onload 属性在对象已加载时触发。</p>
		<p>onload 常用在 &lt;body&gt; 中，一旦完全加载所有内容（包括图像、脚本文件、CSS 文件等），就执行一段脚本。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onload_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onload_text2" style="width: 100%" :stripe="true" :border="true">
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
				onload_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction load()\n{\nalert("页面已加载！");\n}\n\<\/script\>\n</head>\n\n<body onload="load()">\n<h1>Hello World!</h1>\n</body>\n\n</html>\n',
				onload_text2:[
					{'value':'script','desc':'onload 发生时运行的脚本。'}
				],
				onload_text3:'<element onload="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


