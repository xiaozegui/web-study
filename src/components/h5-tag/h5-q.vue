<template>
	<el-card>
		<h4>HTML &lt;q&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>标记短的引用：</p>
		<code-card :mytextarea='q_text1' uniquename='q1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;q&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;q&gt; 标签定义短的引用。</p>
		<p>浏览器经常在引用的内容周围添加引号。</p>
		<el-divider></el-divider>
		<h4>&lt;q&gt; 与 &lt;blockquote&gt; 的区别</h4>
		<p>&lt;q&gt; 标签在本质上与 &lt;blockquote&gt; 是一样的。不同之处在于它们的显示和应用。&lt;q&gt; 标签用于简短的行内引用。如果需要从周围内容分离出来比较长的部分（通常显示为缩进的块），请使用 &lt;blockquote&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<h4>提示和注释：</h4>
		<p>提示：根据 HTML 4.01 规范，q 元素应当使用分界引号来呈现，就是说，q 元素包含的文本必须以引号来开始和结束。Mozilla 浏览器 (Firefox) 以及 Opera 符合这个规定，但是 Internet Explorer 却不支持此规定。结果，如果要使用 &lt;q&gt; 标签，而且用自己的引号来满足 Internet Explorer，那么就要在符合标准的浏览器使用两组引号。尽管如此，我们还是推荐使用 &lt;q&gt; 标签，这不仅仅因为我们喜欢标准，还因为我们预见到了将其应用于文档处理、信息提取等方面的显示效果。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="q_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;abbr&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;abbr&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>此例演示如何实现长短不一的引用语。</p>
		<code-card :mytextarea='q_text3' uniquename='q3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				q_text1:'<html> \n<body> \n \n<p>Here comes a short quotation: <q>This is a short quotation</q></p> \n \n<p>请注意，浏览器在引用的周围插入了引号。</p> \n \n</body> \n</html> \n',
				q_text2:[
					{'attr':'cite','value':'citation','desc':'定义引用的出处或来源'}
				],
				q_text3:'<html> \n \n<body> \n \n这是长的引用： \n<blockquote> \n这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。 \n</blockquote> \n \n这是短的引用： \n<q> \n这是短的引用。 \n</q> \n \n<p> \n使用 blockquote 元素的话，浏览器会插入换行和外边距，而 q 元素不会有任何特殊的呈现。 \n</p> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


