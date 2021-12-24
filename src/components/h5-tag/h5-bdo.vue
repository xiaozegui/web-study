<template>
	<el-card>
		<h4>HTML &lt;bdo&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='bdo_text1' uniquename='bdo1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;bdo&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>bdo 元素可覆盖默认的文本方向。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="bdo_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<p>&lt;bdo&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;bdo&gt;标签支持<el-link type='primary' href='/event'>事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				bdo_text1:'<html>\n\n<body>\n\n<p>\n如果您的浏览器支持 bi-directional override (bdo)，下一行会从右向左输出 (rtl)；\n</p>\n\n<bdo dir="rtl">\nHere is some Hebrew text\n</bdo>\n\n</body>\n</html>\n',
				bdo_text2:[
					{'attr':'dir','value':'ltr rtl','desc':'定义文字的方向'}
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

