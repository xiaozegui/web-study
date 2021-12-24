<template>
	<el-card>
		<h4>HTML &lt;li&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='li_text1' uniquename='li1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;li&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;li&gt; 标签定义列表项目。</p>
		<p>&lt;li&gt;标签可用在有序列表 (&lt;ol&gt;>) 和无序列表 (&lt;ul&gt;) 中。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，li 元素的 "type" 和 "value" 属性是不被赞成使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，li 元素的 "type" 和 "value" 属性是不被支持的</p>
		<h4>提示和注释：</h4>
		<p>提示：请使用 CSS 来定义列表和列表项目的类型。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="li_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;li&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;li&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示不同类型的无序列表。</p>
		<code-card :mytextarea='li_text3' uniquename='li3'></code-card>
		<p>本例演示如何嵌套列表。</p>
		<code-card :mytextarea='li_text4' uniquename='li4'></code-card>
		<p>本例演示一个有序列表。</p>
		<code-card :mytextarea='li_text5' uniquename='li5'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				li_text1:'<html> \n<body> \n \n<p>有序列表：</p> \n<ol> \n  <li>打开冰箱门</li> \n  <li>把大象放进去</li> \n  <li>关上冰箱门</li> \n</ol> \n \n<p>无序列表：</p> \n<ul> \n  <li>雪碧</li> \n  <li>可乐</li> \n  <li>凉茶</li> \n</ul> \n \n</body> \n</html> \n',
				li_text2:[
					{'attr':'type','value':'A a I i 1 disc square circle','desc':'规定使用哪种项目符号'},
					{'attr':'value','value':'number','desc':'规定列表项目的数字'}
				],
				li_text3:'<html> \n<body> \n \n<h4>Disc 项目符号列表：</h4> \n<ul type="disc"> \n <li>苹果</li> \n <li>香蕉</li> \n <li>柠檬</li> \n <li>桔子</li> \n</ul>   \n \n<h4>Circle 项目符号列表：</h4> \n<ul type="circle"> \n <li>苹果</li> \n <li>香蕉</li> \n <li>柠檬</li> \n <li>桔子</li> \n</ul>   \n \n<h4>Square 项目符号列表：</h4> \n<ul type="square"> \n <li>苹果</li> \n <li>香蕉</li> \n <li>柠檬</li> \n <li>桔子</li> \n</ul>   \n \n</body> \n</html> \n',
				li_text4:'<html> \n \n<body> \n \n<h4>一个嵌套列表：</h4> \n<ul> \n  <li>咖啡</li> \n  <li>茶 \n    <ul> \n    <li>红茶</li> \n    <li>绿茶 \n      <ul> \n      <li>中国茶</li> \n      <li>非洲茶</li> \n      </ul> \n    </li> \n    </ul> \n  </li> \n  <li>牛奶</li> \n</ul> \n \n</body> \n</html> \n',
				li_text5:'<!DOCTYPE html> \n<html> \n<body> \n \n<ol> \n  <li>咖啡</li> \n  <li>牛奶</li> \n  <li>茶</li> \n</ol> \n \n<ol start="50"> \n  <li>咖啡</li> \n  <li>牛奶</li> \n  <li>茶</li> \n</ol> \n  \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


