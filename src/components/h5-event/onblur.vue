<template>
	<el-card>
		<h4>HTML onblur 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当用户离开输入字段时对其进行验证：</p>
		<code-card :mytextarea='onblur_text1' uniquename='onblur1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onblur 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onblur 属性在元素失去焦点时触发。</p>
		<p>onblur 常用于表单验证代码（例如用户离开表单字段）。</p>
		<p>提示：onblur 属性与 onfocus 属性相反。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onblur_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onblur_text2" style="width: 100%" :stripe="true" :border="true">
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
				onblur_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction upperCase()\n{\nvar x=document.getElementById("fname").value\ndocument.getElementById("fname").value=x.toUpperCase()\n}\n\<\/script\>\n</head>\n<body>\n\n<p>请输入您的姓名，然后把焦点移动到字段外：</p>\n请输入您的姓名（英文字符）：<input type="text" name="fname" id="fname" onblur="upperCase()">\n\n</body>\n</html>\n',
				onblur_text2:[
					{'value':'script','desc':'onblur 发生时运行的脚本。'}
				],
				onblur_text3:'<element onblur="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


