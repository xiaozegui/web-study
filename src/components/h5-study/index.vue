<template>
	<el-card>
		<div class="myindex">
			<h4 id="h5simpleintroduce"><a href="/index/#h5simpleintroduce" class="header-anchor">¶</a>HTML5简介</h4>
		</div>
		<p style="text-align: center;">HTML5 是下一代的 HTML。</p>
		<p style="text-align: center;">H5 Study向您讲解 HTML5 中的新特性。</p>
		<el-divider></el-divider>
		<div style="text-align: center;">
			<p style="font-size: 18px;"><strong>在线实例测试工具</strong></p>
			<p>在 HTML5 Study，我们提供上千个实例。</p>
			<p>通过使用我们的在线编辑器，你可以编辑这些例子，并对代码进行实验。</p>
		</div>
		<el-divider></el-divider>
		<h4>每一章中的实例</h4>
		<p>通过简易 HTML 在线编辑器 ，您能够编辑 HTML 并实时查看效果。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="videotext1" uniquename="video1"></code-card>
		<el-divider></el-divider>
		<h4>HTML5 参考手册</h4>
		<p>在 HTML Study，您将找到有关 HTML5 标签、标准属性以及标准事件等内容的完整参考。</p>
		<el-link type='primary' href='/event'>HTML5 参考手册</el-link>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				videotext1: '<!DOCTYPE HTML>\n<html>\n<body>\n\n<video width="200" height="100" controls="controls">\n  <source src="../static/video/movie.ogv" type="video/ogg">\n  <source type="video/mp4">\nYour browser does not support the video tag.\n</video>\n\n</body>\n</html>\n',
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	.myindex {
		display: flex;
		justify-content: flex-start;
		text-align: left;
	}
</style>
