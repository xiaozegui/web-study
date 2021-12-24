<template>
	<el-card>
		<h4>HTML &lt;big&gt; 标签</h4>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;big&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;big&gt; 标签呈现大号字体效果。</p>
		<p>使用 &lt;big&gt; 标签可以很容易地放大字体。这简直不能再简单了：浏览器显示包含在 &lt;big&gt; 标签和其相应的 &lt;/big&gt; 标签之间的文字时，其字体比周围的文字要大一号。但是，如果文字已经是最大号字体，这个 &lt;big&gt; 标签将不起任何作用。</p>
		<p>更妙的是，可以嵌套 &lt;big&gt; 标签来放大文本。每一个 &lt;big&gt; 标签都可以使字体大一号，直到上限 7 号文本，正如字体模型所定义的那样。</p>
		<p>但是使用 &lt;big&gt; 标签的时候还是要小心，因为浏览器总是很宽大地试图去理解各种标签，对于那些不支持 &lt;big&gt; 标签的浏览器来说，它经常将其认为是粗体字标签。</p>
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

