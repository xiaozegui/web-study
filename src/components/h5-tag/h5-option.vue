<template>
	<el-card>
		<h4>HTML &lt;option&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>创建带有 4 个选项的选择列表：</p>
		<code-card :mytextarea='option_text1' uniquename='option1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持&lt;option&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>option 元素定义下拉列表中的一个选项（一个条目）。</p>
		<p>浏览器将 &lt;option&gt; 标签中的内容作为 &lt;select&gt; 标签的菜单或是滚动列表中的一个元素显示。</p>
		<p>option 元素位于 select 元素内部。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;option&gt; 没有结束标签。</p>
		<p>在 XHTML 中，&lt;option&gt; 必须被正确关闭。</p>
		<h4>提示和注释：</h4>
		<p>注释：&lt;option&gt; 标签可以在不带有任何属性的情况下使用，但是您通常需要使用 value 属性，此属性会指示出被送往服务器的内容。</p>
		<p>注释：请与 select 元素配合使用此标签，否则这个标签是没有意义的。</p>
		<p>提示：如果列表选项很多，可以使用 &lt;optgroup&gt; 标签对相关选项进行组合。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="option_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;option&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;option&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p><strong>本例演示如何创建一个简单的带有预选值的下拉列表。</strong></p>
		<code-card :mytextarea='option_text3' uniquename='option3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				option_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<select> \n  <option>Volvo</option> \n  <option>Saab</option> \n  <option>Mercedes</option> \n  <option>Audi</option> \n</select> \n  \n</body> \n</html> \n',
				option_text2:[
					{'attr':'disabled','value':'disabled','desc':'规定此选项应在首次加载时被禁用。'},
					{'attr':'label','value':'text','desc':'定义当使用 <optgroup> 时所使用的标注'},
					{'attr':'selected','value':'selected','desc':'规定选项（在首次显示在列表中时）表现为选中状态'},
					{'attr':'value','value':'text','desc':'定义送往服务器的选项值'}
				],
				option_text3:'<html> \n \n<body> \n \n<form> \n<select name="cars"> \n<option value="volvo">Volvo</option> \n<option value="saab">Saab</option> \n<option value="fiat" selected="selected">Fiat</option> \n<option value="audi">Audi</option> \n</select> \n</form> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


