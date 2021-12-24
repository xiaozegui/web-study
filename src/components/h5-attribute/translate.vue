<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>规定不应翻译某些元素：</p>
		<el-input type="textarea" :autosize="istrue" :readonly="istrue" style="width: 60%" v-model="translatetext1"></el-input>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都无法正确地支持 translate 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>translate 规定是否应该翻译元素内容。</p>
		<p style="color: #409EFF;">提示：请使用 class="notranslate" 替代。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>translate 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="istrue" :readonly="istrue" style="width: 60%" v-model="translatetext2"></el-input>
		<h4>属性值</h4>
		<el-table :data="translatetext3" style="width: 100%" :border="istrue" :stripe="istrue">
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
				translatetext1:'<p translate="no">请勿翻译本段。</p>\n<p>本段可被译为任意语言。</p>\n   ',
				translatetext2:'<element translate="yes|no">',
				translatetext3:[
					{'value':'yes','desc':'规定应该翻译元素内容。'},
					{'value':'no','desc':'规定不应翻译元素内容。'}
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
