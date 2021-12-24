<template>
	<el-card>
		<h4>HTML &lt;article&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='articletext1' uniquename='article1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9, Firefox, Opera, Chrome 以及 Safari 支持 &lt;article&gt; 标签。</p>
		<p style="color: #409EFF;">注释：Internet Explorer 8 以及更早的版本不支持 &lt;article&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;article&gt; 标签规定独立的自包含内容。</p>
		<p>一篇文章应有其自身的意义，应该有可能独立于站点的其余部分对其进行分发。</p>
		<p>&lt;article&gt; 元素的潜在来源：</p>
		<ul v-for="item in articletext2">
			<li style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>&lt;article&gt; 标签是 HTML 5 中的新标签。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;article&gt; 标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;article&gt; 标签支持<el-link type='primary' href='/event'>事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				articletext1:'<!DOCTYPE html>\n<html>\n<body>\n\n<article>\n  <h1>Internet Explorer 9</h1>\n  <p>Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月 14 日发布.....</p>\n</article>\n\n</body>\n</html>\n',
				articletext2:[
					'论坛帖子',
					'报纸文章',
					'博客条目',
					'用户评论'
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


