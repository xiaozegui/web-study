<template>
	<el-card>
		<h4>HTML &lt;label&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;label&gt; 元素：</p>
		<code-card :mytextarea='label_text1' uniquename='label1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;label&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;label&gt;标签为 input 元素定义标注（标记）</p>
		<p>label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。</p>
		<p>&lt;label&gt; 标签的 for 属性应当与相关元素的 id 属性相同</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>None</p>
		<h4>提示和注释：</h4>
		<p><mark>注释："for" 属性可把 label 绑定到另外一个元素。请把 "for" 属性的值设置为相关元素的 id 属性的值</mark></p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="label_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;label&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;label&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				label_text1:'<html> \n<body> \n \n<p>请点击文本标记之一，就可以触发相关控件：</p> \n \n<form> \n<label for="male">Male</label> \n<input type="radio" name="sex" id="male" /> \n<br /> \n<label for="female">Female</label> \n<input type="radio" name="sex" id="female" /> \n</form> \n \n</body> \n</html> \n',
				label_text2:[
					{'attr':'for','value':'id','desc':'规定 label 绑定到哪个表单元素。','isshow':true},
					{'attr':'form','value':'formid','desc':'规定 label 字段所属的一个或多个表单。','isshow':false}
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


