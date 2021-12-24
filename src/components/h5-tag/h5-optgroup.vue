<template>
	<el-card>
		<h4>HTML &lt;optgroup&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>通过 &lt;optgroup&gt; 标签把相关的选项组合在一起：</p>
		<code-card :mytextarea='optgroup_text1' uniquename='optgroup1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;optgroup&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;optgroup&gt; 标签定义选项组</p>
		<p>optgroup 元素用于组合选项。当您使用一个长的选项列表时，对相关的选项进行组合会使处理更加容易</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<el-divider></el-divider>
		<h4>必需的属性</h4>
		<el-table :data="optgroup_text2" style="width: 100%" :stripe="true" :border="true">
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
		<h4>可选的属性</h4>
		<el-table :data="optgroup_text3" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;optgroup&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;optgroup&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				optgroup_text1:'<html> \n<body> \n \n<select> \n  <optgroup label="Swedish Cars"> \n    <option value="volvo">Volvo</option> \n    <option value="saab">Saab</option> \n  </optgroup> \n  <optgroup label="German Cars"> \n    <option value="mercedes">Mercedes</option> \n    <option value="audi">Audi</option> \n  </optgroup> \n</select> \n  \n</body> \n</html> \n',
				optgroup_text2:[
					{'attr':'label','value':'text','desc':'为选项组规定描述'}
				],
				optgroup_text3:[
					{'attr':'disabled','value':'disabled','desc':'规定禁用该选项组'}
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


