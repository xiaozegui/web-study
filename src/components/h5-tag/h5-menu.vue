<template>
	<el-card>
		<h4>HTML &lt;menu&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>带有两个菜单按钮 （"File" 和 "Edit"） 的工具栏，每个按钮都包含带有一系列选项的下拉列表：</p>
		<code-card :mytextarea='menu_text1' uniquename='menu1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>目前所有主流浏览器都不支持 &lt;menu&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;menu&gt; 标签定义命令的列表或菜单。</p>
		<p>&lt;menu&gt; 标签用于上下文菜单、工具栏以及用于列出表单控件和命令。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>在 HTML 4.01 中已弃用 &lt;menu&gt; 元素。</p>
		<p>在 HTML5 中重新定义了 &lt;menu&gt; 元素。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="menu_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link><i class="el-icon-time" v-show="scope.row.isshow"></i>
				</template>
			</el-table-column>
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
		<h4>全局属性</h4>
		<p>&lt;menu&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;menu&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				menu_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<menu type="toolbar"> \n <li> \n  <menu label="File"> \n   <button type="button" onclick="file_new()">新建</button> \n   <button type="button" onclick="file_open()">打开</button> \n   <button type="button" onclick="file_save()">保存</button> \n  </menu> \n </li> \n <li> \n  <menu label="Edit"> \n   <button type="button" onclick="edit_cut()">剪切</button> \n   <button type="button" onclick="edit_copy()">复制</button> \n   <button type="button" onclick="edit_paste()">粘贴</button> \n  </menu> \n </li> \n</menu> \n \n<p><b>注释：</b>所有主流浏览器均不支持 menu 元素。</p> \n \n</body> \n</html> \n',
				menu_text2:[
					{'attr':'label','value':'text','desc':'规定菜单的可见标签。','isshow':true},
					{'attr':'type','value':'popup toolbar','desc':'规定要显示哪种菜单类型。','isshow':true}
				]
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


