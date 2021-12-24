<template>
	<el-card>
		<h4>HTML &lt;tr&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一个简单的 HTML 表格，包含两行两列：</p>
		<code-card :mytextarea='tr_text1' uniquename='tr1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;tr&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;tr&gt; 标签定义 HTML 表格中的行</p>
		<p>tr 元素包含一个或多个 th 或 td 元素。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，tr 元素的 "bgcolor" 是不被赞成使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，tr 元素的 "bgcolor" 是不被支持的。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="tr_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;tr&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;tr&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示一个没有边框的表格。</p>
		<code-card :mytextarea='tr_text3' uniquename='tr3'></code-card>
		<p></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				tr_text1:'<html>\n<body>\n\n<table border="1">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>\n\n</body>\n</html>\n',
				tr_text2:[
					{'attr':'align','value':'right left center justify char','desc':'定义表格行的内容对齐方式'},
					{'attr':'bgcolor','value':'rgb(x,x,x) #xxxxxx colorname','desc':'规定表格行的背景颜色。'},
					{'attr':'char','value':'character','desc':'规定根据哪个字符来进行文本对齐'},
					{'attr':'charoff','value':'number','desc':'规定第一个对齐字符的偏移量。'},
					{'attr':'valign','value':'top middle bottom baseline','desc':'规定表格行中内容的垂直对齐方式'}
				],
				tr_text3:'<html>\n\n<body>\n\n<h4>这个表格没有边框：</h4>\n<table>\n<tr>\n  <td>100</td>\n  <td>200</td>\n  <td>300</td>\n</tr>\n<tr>\n  <td>400</td>\n  <td>500</td>\n  <td>600</td>\n</tr>\n</table>\n\n<h4>这个表格也没有边框：</h4>\n<table border="0">\n<tr>\n  <td>100</td>\n  <td>200</td>\n  <td>300</td>\n</tr>\n<tr>\n  <td>400</td>\n  <td>500</td>\n  <td>600</td>\n</tr>\n</table>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


