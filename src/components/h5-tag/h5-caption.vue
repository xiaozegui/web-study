<template>
	<el-card>
		<h4>HTML &lt;caption&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='cpation_text1' uniquename='cpation1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;cpation&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;cpation&gt;元素定义表格标题。</p>
		<p>&lt;cpation&gt;标签必须紧随 table 标签之后。您只能对每个表格定义一个标题。通常这个标题会被居中于表格之上。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，caption 元素的 align 属性是不被赞成使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，caption 元素的 align 属性是不被支持的。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="cpation_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link>
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
		<p>&lt;caption&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;caption&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				cpation_text1:'<html>\n\n<body>\n\n<h4>这个表格有一个标题，以及粗边框：</h4>\n\n<table border="6">\n<caption>我的标题</caption>\n<tr>\n  <td>100</td>\n  <td>200</td>\n  <td>300</td>\n</tr>\n<tr>\n  <td>400</td>\n  <td>500</td>\n  <td>600</td>\n</tr>\n</table>\n\n</body>\n',
				cpation_text2:[{'attr':'align','value':'left right top bottom','desc':'规定标题的对齐方式。'}]
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


