<template>
	<el-card>
		<h4>HTML &lt;td&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一个简单的 HTML 表格，包含两行两列：</p>
		<code-card :mytextarea='td_text1' uniquename='td1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持&lt;td&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;td&gt;  标签定义 HTML 表格中的标准单元格。</p>
		<p>HTML 表格有两类单元格：</p>
		<ul>
			<li style="font-size: 14px;margin: 5px 0px;">表头单元 - 包含头部信息（由 th 元素创建）</li>
			<li style="font-size: 14px;margin: 5px 0px;">标准单元 - 包含数据（由 td 元素创建）</li>
		</ul>
		<p>td 元素中的文本一般显示为正常字体且左对齐。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，td 元素的 "bgcolor"、"height"、"width" 以及 "nowrap" 是不被赞成使用的</p>
		<p>在 XHTML 1.0 Strict DTD 中，td 元素的 "bgcolor"、"height"、"width" 以及 "nowrap" 是不被支持的。</p>
		<p><mark>提示：请使用 colspan 和 rowspan 属性来实现内容横跨多个行或列。</mark></p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="td_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;td&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;td&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示如何使用单元格填充来创建单元格内容与其边框之间的空白。</p>
		<code-card :mytextarea='td_text3' uniquename='td3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				td_text1:'<html>\n<body>\n\n<table border="1">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>\n\n</body>\n</html>\n',
				td_text2:[
					{'attr':'abbr','value':'text','desc':'规定单元格中内容的缩写版本。'},
					{'attr':'align','value':'left right center justify char','desc':'规定单元格内容的水平对齐方式。'},
					{'attr':'axis','value':'category_name','desc':'对单元进行分类。'},
					{'attr':'bgcolor','value':'rgb(x,x,x) #xxxxxx colorname','desc':'规定单元格的背景颜色'},
					{'attr':'char','value':'character','desc':'规定根据哪个字符来进行内容的对齐。'},
					{'attr':'charoff','value':'	number','desc':'规定对齐字符的偏移量。'},
					{'attr':'colspan','value':'	number','desc':'规定单元格可横跨的列数。'},
					{'attr':'headers','value':'header_cells_id','desc':'规定与单元格相关的表头。'},
					{'attr':'height','value':'pixels %','desc':'规定表格单元格的高度。'},
					{'attr':'nowrap','value':'nowrap','desc':'规定单元格中的内容是否折行'},
					{'attr':'rowspan','value':'number','desc':'规定单元格可横跨的行数'},
					{'attr':'scope','value':'col colgroup row rowgroup','desc':'定义将表头数据与单元数据相关联的方法。'},
					{'attr':'valign','value':'top middle bottom baseline','desc':'规定单元格内容的垂直排列方式。'},
					{'attr':'width','value':'pixels %','desc':'规定表格单元格的宽度。'}
				],
				td_text3:'<html>\n\n<body>\n\n<h4>没有 cellpadding：</h4>\n<table border="1">\n<tr>\n  <td>First</td>\n  <td>Row</td>\n</tr>   \n<tr>\n  <td>Second</td>\n  <td>Row</td>\n</tr>\n</table>\n\n<h4>带有 cellpadding：</h4>\n<table border="1" \ncellpadding="10">\n<tr>\n  <td>First</td>\n  <td>Row</td>\n</tr>   \n<tr>\n  <td>Second</td>\n  <td>Row</td>\n</tr>\n</table>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


