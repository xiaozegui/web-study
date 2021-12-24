<template>
	<el-card>
		<h4>HTML &lt;h1&gt;到&lt;h6&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>六个不同的 HTML 标题：</p>
		<code-card :mytextarea='h1_h6_text1' uniquename='h1_h6_1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;h1&gt; - &lt;h6&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;h1&gt; - &lt;h6&gt; 标签可定义标题。&lt;h1&gt; 定义最大的标题。&lt;h6&gt; 定义最小的标题。</p>
		<p>由于 h 元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层叠样式表定义来达到漂亮的显示效果。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，h1 - h6 元素的 "align" 属性不被推荐使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，h1 - h6 元素的 "align" 属性不被支持。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="h1_h6_text2" style="width: 100%" :stripe="true" :border="true">
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
		<h4>标准属性</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="h1_h6_text3"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="h1_h6_text4"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<code-card :mytextarea='h1_h6_text5' uniquename='h1_h6_5'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				h1_h6_text1:'<html>\n\n<body>\n\n<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<h3>This is heading 3</h3>\n<h4>This is heading 4</h4>\n<h5>This is heading 5</h5>\n<h6>This is heading 6</h6>\n\n<p>请仅仅把标题标签用于标题文本。不要仅仅为了产生粗体文本而使用它们。请使用其它标签或 CSS 代替。</p>\n\n</body>\n</html>\n',
				h1_h6_text2:[
					{'attr':'align','value':'left center right justify','desc':'规定标题中文本的排列。'}
				],
				h1_h6_text3:'id, class, title, style, dir, lang, xml:lang',
				h1_h6_text4:'onclick, ondblclick, onmousedown, onmouseup, onmouseover, onmousemove, onmouseout, onkeypress, onkeydown, onkeyup',
				h1_h6_text5:'<html>\n\n<body>\n\n<h1 align="center">This is heading 1</h1>\n\n<p>上面的标题在页面中进行了居中排列。上面的标题在页面中进行了居中排列。上面的标题在页面中进行了居中排列。</p>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>



