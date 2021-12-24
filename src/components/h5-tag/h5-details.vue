<template>
	<el-card>
		<h4>HTML &lt;details&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>关于文档的细节：</p>
		<code-card :mytextarea='details_text1' uniquename='details1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>目前只有 Chrome 和 Safari 6 支持 &lt;details&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;details&gt; 标签用于描述文档或文档某个部分的细节。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;details&gt; 标签是 HTML 5 中的新标签。</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p><mark>提示：与 &lt;summary&gt; 标签 配合使用可以为 details 定义标题。标题是可见的，用户点击标题时，会显示出 details。</mark></p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性。</p>
		<el-table :data="details_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;details&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;details&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				details_text1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<details>\n<summary>Copyright 2011.</summary>\n<p>All pages and graphics on this web site are the property of W3School.</p>\n</details>\n\n</body>\n</html>\n',
				details_text2:[
					{'attr':'open','value':'open','desc':'定义 details 是否可见。'}
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


