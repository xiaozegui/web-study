<template>
	<el-card>
		<h4>HTML &lt;embed&gt; 标签</h4>
		<h4>定义和用法</h4>
		<p>&lt;embed&gt; 标签定义嵌入的内容，比如插件。</p>
		<el-divider></el-divider>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='embed_text1' uniquename='embed1'></code-card>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;embed&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="embed_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;embed&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;embed&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				embed_text1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<embed src="../../../static/video/helloworld.swf" />\n\n</body>\n</html>\n',
				embed_text2:[
					{'attr':'height','value':'pixels','desc':'设置嵌入内容的高度','isshow':true},
					{'attr':'src','value':'url','desc':'嵌入内容的 URL','isshow':true},
					{'attr':'type','value':'type','desc':'定义嵌入内容的类型','isshow':true},
					{'attr':'width','value':'pixels','desc':'设置嵌入内容的宽度','isshow':true}
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


