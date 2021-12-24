<template>
	<el-card>
		<h4>HTML &lt;dialog&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;dialog&gt; 元素：</p>
		<code-card :mytextarea='dialog_text1' uniquename='dialog1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>目前只有 Chrome 和 Safari 6 支持 &lt;dialog&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;dialog&gt; 标签定义对话框或窗口。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;dialog&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="dialog_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;dialog&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;dialog&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				dialog_text1:'<!DOCTYPE html>\n<html>\n<body>\n\n<p><b>注释：</b>只有 Chrome 和 Safari 6 和支持 dialog 标签。</p>\n\n\n<table border="1">\n<tr>\n<th>一月 <dialog open>这是打开的对话窗口</dialog></th>\n<th>二月</th>\n<th>三月</th>\n</tr>\n<tr>\n<td>31</td>\n<td>28</td>\n<td>31</td>\n</tr>\n</table>\n\n</body>\n</html>\n',
				dialog_text2:[
					{'attr':'open','value':'open','desc':'规定 dialog 元素是活动的，用户可与之交互。','isshow':true}
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


