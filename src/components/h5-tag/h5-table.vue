<template>
	<el-card>
		<h4>HTML &lt;table&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一个简单的 HTML 表格，包含两行两列：</p>
		<code-card :mytextarea='table_text1' uniquename='table1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;table&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;table&gt;  标签定义 HTML 表格。</p>
		<p>简单的 HTML 表格由 table 元素以及一个或多个 tr、th 或 td 元素组成。</p>
		<p>tr 元素定义表格行，th 元素定义表头，td 元素定义表格单元。</p>
		<p>更复杂的 HTML 表格也可能包括 caption、col、colgroup、thead、tfoot 以及 tbody 元素。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，table 元素的 "align" 和 "bgcolor" 属性是不被赞成使用的。</p>
		<p>在 XHTML 1.0 Strict DTD，table 元素的 "align" 和 "bgcolor" 属性是不被支持的。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="table_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;table&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;table&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>这个例子演示如何在 HTML 文档中创建表格。</p>
		<code-card :mytextarea='table_text3' uniquename='table3'></code-card>
		<p>本例演示各种类型的表格边框。</p>
		<code-card :mytextarea='table_text4' uniquename='table4'></code-card>
		<p>本例演示如何使用 "frame" 属性来控制围绕表格的边框。</p>
		<code-card :mytextarea='table_text5' uniquename='table5'></code-card>
		<p>本例演示如何定义跨行或跨列的表格单元格。</p>
		<code-card :mytextarea='table_text6' uniquename='table6'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				table_text1:'<html>\n<body>\n\n<table border="1">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>\n\n</body>\n</html>\n',
				table_text2:[
					{'attr':'align','value':'left center right','desc':'规定表格相对周围元素的对齐方式'},
					{'attr':'bgcolor','value':'rgb(x,x,x) #xxxxxx colorname','desc':'规定表格的背景颜色。'},
					{'attr':'border','value':'pixels','desc':'规定表格边框的宽度'},
					{'attr':'cellpadding','value':'pixels %','desc':'规定单元边沿与其内容之间的空白。'},
					{'attr':'cellspacing','value':'pixels %','desc':'规定单元格之间的空白。'},
					{'attr':'frame','value':'void above below hsides lhs rhs vsides box border','desc':'规定外侧边框的哪个部分是可见的'},
					{'attr':'rules','value':'none groups rows cols all','desc':'规定内侧边框的哪个部分是可见的'},
					{'attr':'summary','value':'text','desc':'规定表格的摘要'},
					{'attr':'width','value':'pixels %','desc':'规定表格的宽度'}
				],
				table_text3:'<html>\n\n<body>\n\n<p>每个表格由 table 标签开始。</p>\n<p>每个表格行由 tr 标签开始。</p>\n<p>每个表格数据由 td 标签开始。</p>\n\n<h4>一列：</h4>\n<table border="1">\n<tr>\n  <td>100</td>\n</tr>\n</table>\n\n<h4>一行三列：</h4>\n<table border="1">\n<tr>\n  <td>100</td>\n  <td>200</td>\n  <td>300</td>\n</tr>\n</table>\n\n<h4>两行三列：</h4>\n<table border="1">\n<tr>\n  <td>100</td>\n  <td>200</td>\n  <td>300</td>\n</tr>\n<tr>\n  <td>400</td>\n  <td>500</td>\n  <td>600</td>\n</tr>\n</table>\n\n</body>\n</html>\n',
				table_text4:'<html>\n\n<body>\n\n<h4>带有普通的边框：</h4>  \n<table border="1">\n<tr>\n  <td>First</td>\n  <td>Row</td>\n</tr>   \n<tr>\n  <td>Second</td>\n  <td>Row</td>\n</tr>\n</table>\n\n<h4>带有粗的边框：</h4>  \n<table border="8">\n<tr>\n  <td>First</td>\n  <td>Row</td>\n</tr>   \n<tr>\n  <td>Second</td>\n  <td>Row</td>\n</tr>\n</table>\n\n<h4>带有很粗的边框：</h4>  \n<table border="15">\n<tr>\n  <td>First</td>\n  <td>Row</td>\n</tr>   \n<tr>\n  <td>Second</td>\n  <td>Row</td>\n</tr>\n</table>\n\n</body>\n</html>\n',
				table_text5:'<html>\n<body>\n\n<p><b>注释：</b>frame 属性无法在 Internet Explorer 中正确地显示。</p>\n\n<p>Table with frame="box":</p>\n<table frame="box">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>\n\n<p>Table with frame="above":</p>\n<table frame="above">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>\n\n<p>Table with frame="below":</p>\n<table frame="below">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>\n\n<p>Table with frame="hsides":</p>\n<table frame="hsides">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>\n\n<p>Table with frame="vsides":</p>\n<table frame="vsides">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>\n\n</body>\n</html>\n',
				table_text6:'<html>\n\n<body>\n\n<h4>横跨两列的单元格：</h4>\n<table border="1">\n<tr>\n  <th>姓名</th>\n  <th colspan="2">电话</th>\n</tr>\n<tr>\n  <td>Bill Gates</td>\n  <td>555 77 854</td>\n  <td>555 77 855</td>\n</tr>\n</table>\n\n<h4>横跨两行的单元格：</h4>\n<table border="1">\n<tr>\n  <th>姓名</th>\n  <td>Bill Gates</td>\n</tr>\n<tr>\n  <th rowspan="2">电话</th>\n  <td>555 77 854</td>\n</tr>\n<tr>\n  <td>555 77 855</td>\n</tr>\n</table>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


