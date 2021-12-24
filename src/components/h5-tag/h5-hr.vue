<template>
	<el-card>
		<h4>HTML &lt;hr&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>被水平线分隔的标题和段落：p>
		<code-card :mytextarea='hr_text1' uniquename='hr1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;hr&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;hr&gt; 标签在 HTML 页面中创建一条水平线。</p>
		<p>水平分隔线（horizontal rule）可以在视觉上将文档分隔成各个部分。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>在 HTML 中，&lt;hr&gt; 标签没有结束标签。</p>
		<p>在 XHTML 中，&lt;hr&gt; 必须被正确地关闭，比如 &lt;hr /&gt;。</p>
		<p>在 HTML 4.01 中，hr 元素的所有呈现属性均不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，hr 元素的所有呈现属性均不被支持。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="hr_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;hr&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;hr&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				hr_text1:'<html>\n\n<body>\n<p>hr 标签定义水平线：</p>\n<hr />\n<p>这是段落。</p>\n<hr />\n<p>这是段落。</p>\n<hr />\n<p>这是段落。</p>\n</body>\n</html>\n',
				hr_text2:[
					{'attr':'align','value':'center left right','desc':'规定 hr 元素的对齐方式。'},
					{'attr':'noshade','value':'noshade','desc':'规定 hr 元素的颜色呈现为纯色'},
					{'attr':'size','value':'pixels','desc':'规定 hr 元素的高度（厚度）'},
					{'attr':'width','value':'pixels %','desc':'规定 hr 元素的宽度'}
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


