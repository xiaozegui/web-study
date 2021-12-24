<template>
	<el-card>
		<h4>HTML &lt;tbody&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>带有 thead、tbody 以及 tfoot 元素的 HTML 表格：</p>
		<code-card :mytextarea='tbody_text1' uniquename='tbody1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>&lt;tbody&gt; 标签仅得到所有主流浏览器的部分支持</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;tbody&gt; 标签表格主体（正文）。该标签用于组合 HTML 表格的主体内容。</p>
		<p>tbody 元素应该与 thead 和 tfoot 元素结合起来使用。</p>
		<p>thead 元素用于对 HTML 表格中的表头内容进行分组，而 tfoot 元素用于对 HTML 表格中的表注（页脚）内容进行分组。</p>
		<p>注释：如果您使用 thead、tfoot 以及 tbody 元素，您就必须使用全部的元素。它们的出现次序是：thead、tfoot、tbody，这样浏览器就可以在收到所有数据前呈现页脚了。您必须在 table 元素内部使用这些标签。</p>
		<p>提示：在默认情况下这些元素不会影响到表格的布局。不过，您可以使用 CSS 使这些元素改变表格的外观。</p>
		<p><strong>详细描述</strong></p>
		<p>thead、tfoot 以及 tbody 元素使您有能力对表格中的行进行分组。当您创建某个表格时，您也许希望拥有一个标题行，一些带有数据的行，以及位于底部的一个总计行。这种划分使浏览器有能力支持独立于表格标题和页脚的表格正文滚动。当长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>None</p>
		<h4>提示和注释：</h4>
		<p><mark>注释：&lt;thead&gt; 内部必须拥有 &lt;tr&gt; 标签！</mark></p>
		<p>注释：&lt;thead&gt;、&lt;tbody&gt; 以及 &lt;tfoot&gt; 很少被使用，这是因为糟糕的浏览器支持。我们期望在 XHTML 的未来版本中这种情况会发生变化</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="tbody_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;tbody&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;tbody&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				tbody_text1:'<html>\n<head>\n<style type="text/css">\nthead {color:green}\ntbody {color:blue;height:50px}\ntfoot {color:red}\n</style>\n</head>\n<body>\n\n<table border="1">\n  <thead>\n    <tr>\n      <th>Month</th>\n      <th>Savings</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>January</td>\n      <td>$100</td>\n    </tr>\n    <tr>\n      <td>February</td>\n      <td>$80</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td>Sum</td>\n      <td>$180</td>\n    </tr>\n  </tfoot>\n</table>\n\n</body>\n</html>\n',
				tbody_text2:[
					{'attr':'align','value':'right lef tcenter justify char','desc':'定义 tbody 元素中内容的对齐方式。'},
					{'attr':'char','value':'character','desc':'规定根据哪个字符来进行文本对齐。'},
					{'attr':'charoff','value':'number','desc':'规定第一个对齐字符的偏移量'},
					{'attr':'valign','value':'top middle bottom baseline','desc':'规定 tbody 元素中内容的垂直对齐方式'}
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


