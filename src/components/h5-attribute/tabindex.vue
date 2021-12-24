<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>带有指定 tab 键顺序的链接：</p>
		<code-card :mytextarea="tabindextext1" uniquename='tabindex1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>几乎所有浏览器均 tabindex 属性，除了 Safari。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>tabindex 属性规定元素的 tab 键控制次序（当 tab 键用于导航时）。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>注释：以下元素支持 tabindex 属性：&lt;a&gt;, &lt;area&gt;, &lt;button&gt;, &lt;input&gt;, &lt;object&gt;, &lt;select&gt; 以及 &lt;textarea&gt;。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="tabindextext2"></el-input>
		<h4>属性值</h4>
		<el-table :data="tabindextext3" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="value" label="值" >
			</el-table-column>
			<el-table-column prop="desc" label="描述" >
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				tabindextext1:'<!DOCTYPE html>\n<html>\n<body>\n\n<a href="http://www.w3school.com.cn/" tabindex="2">W3School</a><br />\n<a href="http://www.google.com/" tabindex="1">Google</a><br />\n<a href="http://www.microsoft.com/" tabindex="3">Microsoft</a>\n\n<p><b>注释：</b>请尝试使用键盘上的 "Tab" 键在链接之间进行导航。</p>\n\n</body>\n</html>\n',
				tabindextext2:'<element tabindex="number">',
				tabindextext3:[
					{'value':'number','desc':'规定元素的 tab 键控制次序（1 是第一个）。'}
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
