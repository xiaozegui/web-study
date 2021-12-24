<template>
	<el-card>
		<h4>HTML ontoggle 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当 &lt;details&gt; 元素在打开或关闭时执行 JavaScript:</p>
		<code-card :mytextarea='ontoggle_text1' uniquename='ontoggle1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>大部分主流浏览器都支持 ontoggle 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>ontoggle 属性在用户打开或关闭 &lt;details&gt; 元素时触发。</p>
		<p>&lt;details&gt; 元素描述了额外的信息，用户可以根据需求查看或隐藏它。</p>
		<p>ontoggle 在用户从页面导航离开时发生（通过点击链接、提交表单或者关闭浏览器窗口等等）。</p>
		<p>注释：如果您重载页面，也会触发 unload 事件（以及 onload 事件）。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>ontoggle 属性是 HTML5 新增的。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="ontoggle_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="ontoggle_text2" style="width: 100%" :stripe="true" :border="true">
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
				ontoggle_text1:'<!DOCTYPE html>\n<html>\n<head> \n<meta charset="utf-8"> \n<title>菜鸟教程(runoob.com)</title> \n</head>\n<body>\n\n<p>Open the details.</p>\n\n<details ontoggle="myFunction()">\n<summary>Copyright 1999-2014.</summary>\n<p> - by Refsnes Data. All Rights Reserved.</p>\n<p>All content and graphics on this web site are the property of the company Refsnes Data.</p>\n</details>\n\n<p><strong>注意:</strong> 目前只有 Chrome, Safari 6+, 和 Opera 15+ 浏览器支持 details 元素和 ontoggle 属性。</p>\n\n\<\script\>\nfunction myFunction() \n{\n    alert(" ontoggle 事件触发");\n}\n\<\/script\>\n\n</body>\n</html>\n',
				ontoggle_text2:[
					{'value':'script','desc':'ontoggle 发生时运行的脚本。'}
				],
				ontoggle_text3:'<element ontoggle="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


