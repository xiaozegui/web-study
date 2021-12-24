<template>
	<el-card>
		<h4>HTML &lt;ul&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>无序 HTML 列表：</p>
		<code-card :mytextarea='ul_text1' uniquename='ul1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;ul&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;ul&gt; 标签定义无序列表</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，ul 元素的 "compact" 和 "type" 属性是不被赞成使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，ul 元素的 "compact" 和 "type" 属性是不被支持的</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="ul_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;ul&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;ul&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示如何嵌套列表。</p>
		<code-card :mytextarea='ul_text3' uniquename='ul3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				ul_text1:'<html>\n\n<body>\n\n<h4>一个无序列表：</h4>\n<ul>\n  <li>咖啡</li>\n  <li>茶</li>\n  <li>牛奶</li>\n</ul>\n\n</body>\n</html>\n',
				ul_text2:[
					{'attr':'compact','value':'	compact','desc':'规定列表呈现的效果比正常情况更小巧。'},
					{'attr':'type','value':'disc square circle','desc':'规定列表的项目符号的类型。'}
				],
				ul_text3:'<html>\n\n<body>\n\n<h4>一个嵌套列表：</h4>\n<ul>\n  <li>咖啡</li>\n  <li>茶\n    <ul>\n    <li>红茶</li>\n    <li>绿茶</li>\n    </ul>\n  </li>\n  <li>牛奶</li>\n</ul>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


