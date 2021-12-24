<template>
	<el-card>
		<h4>HTML &lt;bdi&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>标记一个缩写：</p>
		<code-card :mytextarea='bdi_text1' uniquename='bdi1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>目前只有 Firefox 和 Chrome 支持 &lt;bdi&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>bdi 指的是 bidi 隔离。</p>
		<p>&lt;bdi&gt; 标签允许您设置一段文本，使其脱离其父元素的文本方向设置。</p>
		<p>在发布用户评论或其他您无法完全控制的内容时，该标签很有用。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;bdi&gt; 标签是 HTML5 中的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<el-table :data="bdi_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;bdi&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;bdi&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				bdi_text1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<ul>\n<li>Username <bdi>Bill</bdi>:80 points</li>\n<li>Username <bdi>Steve</bdi>: 78 points</li>\n</ul>\n\n</body>\n</html>\n',
				bdi_text2:[
					{'attr':'dir','value':'ltr rtl auto','desc':'可选。规定 <bdi> 元素内的文本的文本方向。默认值：auto。'}
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

