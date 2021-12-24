<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<code-card :mytextarea="dir_text1" uniquename='dir1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器均支持 dir 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>dir 属性规定元素内容的文本方向。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>注释：dir 属性在以下标签中无效：&lt;base&gt;, &lt;br&gt;, &lt;frame&gt;, &lt;frameset&gt;, &lt;hr&gt;, &lt;iframe&gt;,
			&lt;param&gt; 以及 &lt;script&gt;。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="dir_text2"></el-input>
		<h4>属性值</h4>
		<el-table :data="dir_text3" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="value" label="值" >
			</el-table-column>
			<el-table-column prop="desc" label="描述" >
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				dir_text1: '<!DOCTYPE html>\n<html>\n<body>\n\n<p dir="rtl">Write this text right-to-left!</p>\n\n</body>\n</html>\n',
				dir_text2: '<element dir="ltr|rtl">',
				dir_text3:[
					{'value':'ltr','desc':'默认。从左向右的文本方向。'},
					{'value':'rtl','desc':'从右向左的文本方向。'},
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
