<template>
	<el-card>
		<p><strong>Canvas 和 SVG 都允许您在浏览器中创建图形，但是它们在根本上是不同的。</strong></p>
		<el-divider></el-divider>
		<h4>SVG</h4>
		<p>SVG 是一种使用 XML 描述 2D 图形的语言</p>
		<p>SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。</p>
		<p>在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。</p>
		<el-divider></el-divider>
		<h4>Canvas</h4>
		<p>Canvas 通过 JavaScript 来绘制 2D 图形。</p>
		<p>Canvas 是逐像素进行渲染的。</p>
		<p>在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。</p>
		<el-divider></el-divider>
		<h4>Canvas 与 SVG 的比较</h4>
		<p>下表列出了 canvas 与 SVG 之间的一些不同之处。</p>
		<p><strong>Canvas</strong></p>
		<ul>
			<li v-for="item1 in canvastext" style="font-size: 14px;margin: 5px 0px;">{{item1}}</li>
		</ul>
		<p><strong>SVG</strong></p>
		<ul>
			<li v-for="item2 in svgtext" style="font-size: 14px;margin: 5px 0px;">{{item2}}</li>
		</ul>
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
				canvastext:[
					'依赖分辨率',
					'不支持事件处理器',
					'弱的文本渲染能力',
					'能够以 .png 或 .jpg 格式保存结果图像',
					'最适合图像密集型的游戏，其中的许多对象会被频繁重绘'
				],
				svgtext:[
					'不依赖分辨率',
					'支持事件处理器',
					'最适合带有大型渲染区域的应用程序（比如谷歌地图）',
					'复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）',
					'不适合游戏应用'
				]
			}
		}
	}
</script>

<style scoped="scoped">
</style>
