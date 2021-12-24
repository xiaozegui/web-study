<template>
	<el-card>
		<h4>HTML onbeforeprint 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>在设置页面打印之后但是在打印对话框出现之前执行 JavaScript：</p>
		<code-card :mytextarea='onbeforeprint_text1' uniquename='onbeforeprint1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>只有 Internet Explorer 和 Firefox 支持 onafterprint 事件属性</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onbeforeprint 属性在用户已设置页面打印之后立即触发，但是在打印对话框出现之前。</p>
		<p>提示：onbeforeprint 属性常与 onbeforeprint 属性一同使用。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>onbeforeprint 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onbeforeprint_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onbeforeprint_text2" style="width: 100%" :stripe="true" :border="true">
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
				onbeforeprint_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction printmsg()\n{\nalert("即将打印该文档！");\n}\n\<\/script\>\n</head>\n\n<body onbeforeprint="printmsg()">\n\n<h1>请试着打印此文档。</h1>\n<p><b>提示：</b>键盘快捷键，比如 Ctrl+P 设置页面打印。</p>\n<p><b>注释：</b>Internet Explorer 和 Firefox 支持 onbeforeprint 属性。</p>\n\n</body>\n</html>\n',
				onbeforeprint_text2:[
					{'value':'script','desc':'onbeforeprint 发生时运行的脚本。'}
				],
				onbeforeprint_text3:'<element onbeforeprint="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


