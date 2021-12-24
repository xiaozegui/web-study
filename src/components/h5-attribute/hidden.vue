<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>被隐藏的段落：</p>
		<code-card :mytextarea="hiddentext1" uniquename='hidden1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 hidden 属性，除了 Internet Explorer。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>hidden 属性是布尔属性。</p>
		<p>如果设置该属性，它规定元素仍未或不再相关。</p>
		<p>浏览器不应显示已规定 hidden 属性的元素。</p>
		<p>hidden 属性也可用于防止用户查看元素，直到匹配某些条件（比如选择了某个复选框）。然后，JavaScript 可以删除 hidden 属性，以使此元素可见。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>draggable 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="hiddentext2"></el-input>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue:true,
				hiddentext1:'<!DOCTYPE html>\n<html>\n<body>\n\n<p hidden="hidden">这是一段隐藏的段落。</p>\n<p>这是一段可见的段落。</p>\n\n</body>\n</html>\n',
				hiddentext2:'<element hidden>'
			}
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
