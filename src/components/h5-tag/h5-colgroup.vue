<template>
	<el-card>
		<h4>HTML &lt;colgroup&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>colgroup 元素为表格中的三个列规定了不同的对齐方式：</p>
		<code-card :mytextarea='colgroup_text1' uniquename='colgroup1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;colgroup&gt; 标签。</p>
		<p>Firefox、Chrome 以及 Safari 仅支持 colgroup 元素的 span 和 width 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;colgroup&gt;标签用于对表格中的列进行组合，以便对其进行格式化。</p>
		<p>如需对全部列应用样式，&lt;colgroup&gt; 标签很有用，这样就不需要对各个单元和各行重复应用样式了</p>
		<p>&lt;colgroup&gt; 标签只能在 table 元素中使用。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p ><span>提示：</span>请为 &lt;colgroup&gt; 标签添加 class 属性。这样就可以使用 CSS 来负责对齐方式、宽度和颜色等等。</p>
		<p ><span>注释：</span>col 元素是仅包含属性的空元素。如需创建列，您就必须在 tr 元素内部规定 td 元素。</p>
		<p>参见：<el-link type='primary' href='/col'>&lt;col&gt; 标签</el-link></p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="colgroup_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;colgroup&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;colgroup&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				colgroup_text1:'<html>\n<body>\n\n<table width="100%" border="1">\n  <colgroup span="2" align="right"></colgroup>\n  <colgroup align="right" style="color:#0000FF;"></colgroup>\n  <tr>\n    <th>ISBN</th>\n    <th>Title</th>\n    <th>Price</th>\n  </tr>\n  <tr>\n    <td>3476896</td>\n    <td>My first HTML</td>\n    <td>$53</td>\n  </tr>\n  <tr>\n    <td>2489604</td>\n    <td>My first CSS</td>\n    <td>$47</td>\n  </tr>\n</table>\n\n</body>\n</html>\n',
				colgroup_text2:[
					{'attr':'align','value':'right left center justify char','desc':'定义在列组合中内容的水平对齐方式。'},
					{'attr':'char','value':'character','desc':'规定根据哪个字符来对齐列组中的内容。'},
					{'attr':'charoff','value':'number','desc':'规定第一个对齐字符的偏移量'},
					{'attr':'span','value':'number','desc':'规定列组应该横跨的列数。'},
					{'attr':'valign','value':'top middle bottom baseline','desc':'定义在列组合中内容的垂直对齐方式。'},
					{'attr':'width','value':'pixels % relative_length','desc':'规定列组合的宽度'}
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


