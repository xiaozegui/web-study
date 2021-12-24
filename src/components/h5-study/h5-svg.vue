<template>
	<el-card>
		<h4>HTML5 支持内联 SVG。</h4>
		<el-divider></el-divider>
		<h4>什么是SVG？</h4>
		<ul>
			<li v-for="item in svgdefine" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>SVG 的优势</h4>
		<p>与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：</p>
		<ul>
			<li v-for="child in svgadvantage" style="font-size: 14px;margin: 5px 0px;">{{child}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9、Firefox、Opera、Chrome 以及 Safari 支持内联 SVG。</p>
		<el-divider></el-divider>
		<h4>把 SVG 直接嵌入 HTML 页面</h4>
		<p>在 HTML5 中，您能够将 SVG 元素直接嵌入 HTML 页面中：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="svgtext" uniquename="svg1"></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default{
		data(){
			return{
				svgdefine:[
					'SVG 指可伸缩矢量图形 (Scalable Vector Graphics)',
					'SVG 用于定义用于网络的基于矢量的图形',
					'SVG 使用 XML 格式定义图形',
					'SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失',
					'SVG 是万维网联盟的标准'
				],
				svgadvantage:[
					'SVG 图像可通过文本编辑器来创建和修改',
					'SVG 图像可被搜索、索引、脚本化或压缩',
					'SVG 是可伸缩的',
					'SVG 图像可在任何的分辨率下被高质量地打印',
					'SVG 可在图像质量不下降的情况下被放大'
				],
				svgtext:'<!DOCTYPE html>\n<html>\n<body>\n\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">\n   <polygon points="100,10 40,180 190,60 10,60 160,180"\n   style="fill:red;stroke:blue;stroke-width:3;fill-rule:evenodd;" />\n</svg>\n \n</body>\n</html>\n'
			}
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
