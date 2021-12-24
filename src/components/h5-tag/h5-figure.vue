<template>
	<el-card>
		<h4>HTML &lt;figure&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>用作文档中插图的图像：</p>
		<code-card :mytextarea='figure_text1' uniquename='figure1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9, Firefox, Opera, Chrome 以及 Safari 支持 &lt;figure&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;figure&gt; 标签规定独立的流内容（图像、图表、照片、代码等等）。</p>
		<p>figure 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;figure&gt; 标签是 HTML 5 中的新标签。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>提示：请使用 &lt;figcaption&gt; 元素为 figure 添加标题（caption）。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;figure&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;figure&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				figure_text1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<p>上海卢浦大桥是当今世界第一钢结构拱桥，是世界上跨度最大的拱形桥。它也是世界上首座完全采用焊接工艺连接的大型拱桥（除合拢接口采用栓接外），现场焊接焊缝总长度达4万多米，接近上海市内环高架路的总长度。卢浦大桥像澳大利亚悉尼的海湾大桥一样具有旅游观光的功能。</p>\n\n<figure>\n  <p>黄浦江上的的卢浦大桥</p>\n  <p>拍摄者：W3School 项目组，拍摄时间：2010 年 10 月</p>\n  <img src="../../../static/img/shanghai_lupu_bridge.jpg"\n  width="350" height="234" />\n</figure>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


