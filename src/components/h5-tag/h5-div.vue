<template>
	<el-card>
		<h4>HTML &lt;div&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>文档中的一个部分会显示为绿色：</p>
		<code-card :mytextarea='div_text1' uniquename='div1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;div&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;div&gt; 可定义文档中的分区或节（division/section）。</p>
		<p>&lt;div&gt; 标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。</p>
		<p>如果用 id 或 class 来标记 &lt;div&gt;，那么该标签的作用会变得更加有效。</p>
		<p><strong>用法</strong></p>
		<p>&lt;div&gt; 是一个块级元素。这意味着它的内容自动地开始一个新行。实际上，换行是 &lt;div&gt; 固有的唯一格式表现。可以通过 &lt;div&gt; 的 class 或 id 应用额外的样式。</p>
		<p>不必为每一个 &lt;div&gt; 都加上类或 id，虽然这样做也有一定的好处。</p>
		<p>可以对同一个 &lt;div&gt; 元素应用 class 或 id 属性，但是更常见的情况是只应用其中一种。这两者的主要差异是，class 用于元素组（类似的元素，或者可以理解为某一类元素），而 id 用于标识单独的唯一的元素。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，div 元素的 "align" 属性不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，div 元素的 "align" 属性不被支持。</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p>注释：&lt;div&gt; 是一个块级元素，也就是说，浏览器通常会在 div 元素前后放置一个换行符。</p>
		<p><mark>请使用 &lt;div&gt; 元素来组合块级元素，这样就可以使用样式对它们进行格式化。</mark></p>
		<el-divider></el-divider>
		<h4>案例分析</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="div_text3"></el-input>
		<p>例子解释</p>
		<p>正如您看到的，上面这段 HTML 模拟了新闻网站的结构。其中的每个 div 把每条新闻的标题和摘要组合在一起，也就是说，div 为文档添加了额外的结构。同时，由于这些 div 属于同一类元素，所以可以使用 class="news" 对这些 div 进行标识，这么做不仅为 div 添加了合适的语义，而且便于进一步使用样式对 div 进行格式化，可谓一举两得。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="div_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;div&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;div&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				div_text1:'<html>\n<body>\n\n<h3>This is a header</h3>\n<p>This is a paragraph.</p>\n\n<div style="color:#00FF00">\n  <h3>This is a header</h3>\n  <p>This is a paragraph.</p>\n</div>\n\n</body>\n</html>\n',
				div_text2:[
					{'attr':'align','value':'left right center justify','desc':'规定 div 元素中的内容的对齐方式。'}
				],
				div_text3:'<body>\n\n <h1>NEWS WEBSITE</h1>\n  <p>some text. some text. some text...</p>\n  ...\n\n <div class="news">\n  <h2>News headline 1</h2>\n  <p>some text. some text. some text...</p>\n  ...\n </div>\n\n <div class="news">\n  <h2>News headline 2</h2>\n  <p>some text. some text. some text...</p>\n  ...\n </div>\n\n ...\n</body>\n',
				div_text4:'onclick, ondblclick, onfocus, onblur, onmousedown, onmouseup, onmouseover, onmousemove, onmouseout, onkeypress, onkeydown, onkeyup'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>




