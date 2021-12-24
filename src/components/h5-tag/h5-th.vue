<template>
	<el-card>
		<h4>HTML &lt;th&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>普通的 HTML 表格，包含两行两列：</p>
		<code-card :mytextarea='th_text1' uniquename='th1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持&lt;th&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>定义表格内的表头单元格。</p>
		<p>HTML 表格有两类单元格：</p>
		<ul>
			<li style="font-size: 14px;margin: 5px 0px;">表头单元 - 包含头部信息（由 th 元素创建）</li>
			<li style="font-size: 14px;margin: 5px 0px;">标准单元 - 包含数据（由 td 元素创建）</li>
		</ul>
		<p>th 元素内部的文本通常会呈现为居中的粗体文本，而 td 元素内的文本通常是左对齐的普通文本。</p>
		<p><mark>提示：如果需要将内容横跨多个行或列，请使用 colspan 和 rowspan 属性。</mark></p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，th 元素的 "bgcolor"、"height"、"width" 以及 "nowrap" 属性是不被推荐使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，th 元素的 "bgcolor"、"height"、"width" 以及 "nowrap" 属性是不被支持。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="th_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;th&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;th&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示如何显示在不同的元素内显示元素。</p>
		<code-card :mytextarea='th_text3' uniquename='th3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				th_text1:'<html>\n<body>\n\n<table border="1">\n  <tr>\n    <th>Company</th>\n    <th>Address</th>\n  </tr>\n\n  <tr>\n    <td>Apple, Inc.</td>\n    <td>1 Infinite Loop Cupertino, CA 95014</td>\n  </tr>\n</table>\n\n\n</body>\n</html>\n',
				th_text2:[
					{'attr':'abbr','value':'text','desc':'规定单元格中内容的缩写版本'},
					{'attr':'align','value':'left right center justify char','desc':'规定单元格内容的水平对齐方式。'},
					{'attr':'axis','value':'category_name','desc':'对单元格进行分类。'},
					{'attr':'bgcolor','value':'rgb(x,x,x) #xxxxxx colorname','desc':'规定表格单元格的背景颜色。'},
					{'attr':'char','value':'character','desc':'规定根据哪个字符来进行内容的对齐。'},
					{'attr':'charoff','value':'number','desc':'规定对齐字符的偏移量。'},
					{'attr':'colspan','value':'number','desc':'设置单元格可横跨的列数。'},
					{'attr':'headers','value':'	idrefs','desc':'由空格分隔的表头单元格 ID 列表，为数据单元格提供表头信息'},
					{'attr':'height','value':'pixels %','desc':'规定表格单元格的高度。'},
					{'attr':'nowrap','value':'nowrap','desc':'规定单元格中的内容是否折行。'},
					{'attr':'rowspan','value':'number','desc':'规定单元格可横跨的行数'},
					{'attr':'scope','value':'col colgroup row rowgroup','desc':'定义将表头数据与单元数据相关联的方法'},
					{'attr':'valign','value':'top middle bottom baseline','desc':'规定单元格内容的垂直排列方式'},
					{'attr':'width','value':'pixels %','desc':'规定表格单元格的宽度。'}
				],
				th_text3:'<html>\n\n<body>\n\n<table border="1">\n<tr>\n  <td>\n   <p>这是一个段落。</p>\n   <p>这是另一个段落。</p>\n  </td>\n  <td>这个单元包含一个表格：\n   <table border="1">\n   <tr>\n     <td>A</td>\n     <td>B</td>\n   </tr>\n   <tr>\n     <td>C</td>\n     <td>D</td>\n   </tr>\n   </table>\n  </td>\n</tr>\n<tr>\n  <td>这个单元包含一个列表：\n   <ul>\n    <li>苹果</li>\n    <li>香蕉</li>\n    <li>菠萝</li>\n   </ul>\n  </td>\n  <td>HELLO</td>\n</tr>\n</table>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


