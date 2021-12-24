<template>
	<el-card>
		<h4>HTML &lt;ins&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>带有已删除部分和新插入部分的文本：</p>
		<code-card :mytextarea='ins_text1' uniquename='ins1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;ins&gt; 标签。</p>
		<p><mark>注释：没有主流浏览器能够正确地显示 &lt;ins&gt; 标签的 cite 或 datetime 属性。</mark></p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;ins&gt;标签定义已经被插入文档中的文本</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p><mark>提示：请与 &lt;del&gt; 一同使用，来描述文档中的更新和修正。</mark></p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="ins_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;ins&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;ins&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				ins_text1:'<html> \n \n<body> \n \n<p>一打有 <del>二十</del> <ins>十二</ins> 件。</p> \n \n<p>大多数浏览器会改写为删除文本和下划线文本。</p> \n \n<p>一些老式的浏览器会把删除文本和下划线文本显示为普通文本。</p> \n \n</body> \n</html> \n',
				ins_text2:[
					{'attr':'cite','value':'URL','desc':'指向另外一个文档的 URL，此文档可解释文本被插入的原因。'},
					{'attr':'datetime','value':'YYYYMMDD','desc':'定义文本被插入的日期和时间。'}
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


