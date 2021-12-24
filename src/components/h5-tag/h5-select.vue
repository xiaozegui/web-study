<template>
	<el-card>
		<h4>HTML &lt;select&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>创建带有 4 个选项的选择列表：</p>
		<code-card :mytextarea='select_text1' uniquename='select1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;select&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>select 元素可创建单选或多选菜单。</p>
		<p>&lt;select&gt;  元素中的 &lt;option&gt; 标签用于定义列表中的可用选项。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>HTML5 添加了一些新属性。</p>
		<h4>提示和注释：</h4>
		<p><mark>提示：select 元素是一种表单控件，可用于在表单中接受用户输入。</mark></p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="select_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;select&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;select&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示如何创建一个简单的带有预选值的下拉列表。</p>
		<code-card :mytextarea='select_text3' uniquename='select3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				select_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<select> \n  <option value="volvo">Volvo</option> \n  <option value="saab">Saab</option> \n  <option value="opel">Opel</option> \n  <option value="audi">Audi</option> \n</select> \n   \n</body> \n</html> \n',
				select_text2:[
					{'attr':'autofocus','value':'autofocus','desc':'规定在页面加载后文本区域自动获得焦点','isshow':true},
					{'attr':'disabled','value':'disabled','desc':'规定禁用该下拉列表。','isshow':false},
					{'attr':'form','value':'form_id','desc':'规定文本区域所属的一个或多个表单','isshow':true},
					{'attr':'multiple','value':'multiple','desc':'规定可选择多个选项','isshow':false},
					{'attr':'name','value':'name','desc':'	规定下拉列表的名称。','isshow':false},
					{'attr':'required','value':'required','desc':'规定文本区域是必填的','isshow':true},
					{'attr':'size','value':'number','desc':'规定下拉列表中可见选项的数目','isshow':false}
				],
				select_text3:'<html> \n \n<body> \n \n<form> \n<select name="cars"> \n<option value="volvo">Volvo</option> \n<option value="saab">Saab</option> \n<option value="fiat" selected="selected">Fiat</option> \n<option value="audi">Audi</option> \n</select> \n</form> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>



