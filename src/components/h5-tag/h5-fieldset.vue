<template>
	<el-card>
		<h4>HTML &lt;fieldset&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;fieldset&gt; 元素：</p>
		<code-card :mytextarea='fieldset_text1' uniquename='fieldset1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;fieldset&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>fieldset 元素可将表单内的相关元素分组。</p>
		<p>&lt;fieldset&gt; 标签将表单内容的一部分打包，生成一组相关表单的字段。</p>
		<p>当一组表单元素放到 &lt;fieldset&gt; 标签内时，浏览器会以特殊方式来显示它们，它们可能有特殊的边界、3D 效果，或者甚至可创建一个子表单来处理这些元素。</p>
		<p>&lt;fieldset&gt; 标签没有必需的或唯一的属性。</p>
		<p>&lt;legend&gt; 标签为 fieldset 元素定义标题。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>HTML5 拥有如下属性：disabled、form、name，HTML 4.01 中不支持这些属性</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<el-table :data="fieldset_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;fieldset&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;fieldset&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				fieldset_text1:'<!DOCTYPE HTML>\n<html>\n\n<body>\n\n<form>\n  <fieldset>\n    <legend>健康信息</legend>\n    身高：<input type="text" />\n    体重：<input type="text" />\n  </fieldset>\n</form>\n\n<p>如果表单周围没有边框，说明您的浏览器太老了。</p>\n\n</body>\n</html>\n',
				fieldset_text2:[
					{'attr':'disabled','value':'disabled','desc':'规定应该禁用 fieldset。'},
					{'attr':'form','value':'form_id','desc':'规定 fieldset 所属的一个或多个表单。'},
					{'attr':'name','value':'value','desc':'规定 fieldset 的名称'}
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


