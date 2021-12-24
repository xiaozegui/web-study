<template>
	<el-card>
		<h4>HTML &lt;output&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>执行计算然后在 &lt;output&gt; 元素中显示结果：</p>
		<code-card :mytextarea='output_text1' uniquename='output1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Firefox, Chrome, Safari 以及 Opera 支持  &lt;output&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;output&gt; 标签定义不同类型的输出，比如脚本的输出。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;output&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="output_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;output&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;output&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				output_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0 \n<input type="range" id="a" value="50">100 \n+<input type="number" id="b" value="50"> \n=<output name="x" for="a b"></output> \n</form> \n \n<p><b>注释：</b>Internet Explorer 不支持 <output> 标签。</p> \n \n</body> \n</html> \n \n',
				output_text2:[
					{'attr':'for','value':'element_id','desc':'定义输出域相关的一个或多个元素','isshow':true},
					{'attr':'form','value':'form_id','desc':'定义输入字段所属的一个或多个表单','isshow':true},
					{'attr':'name','value':'name','desc':'定义对象的唯一名称','isshow':true}
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


