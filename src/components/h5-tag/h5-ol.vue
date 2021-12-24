<template>
	<el-card>
		<h4>HTML &lt;ol&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='ol_text1' uniquename='ol1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持&lt;ol&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;ol&gt; 标签定义有序列表。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，ol 元素的 "compact"、"start" 以及 "type" 属性是不被赞成使用的。</p>
		<p>在 XHTML 1.0 Strict DTD 中，ol 元素的 "compact"、"start" 以及 "type" 属性是不被支持的。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="ol_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link><i class="el-icon-time" v-show="scope.row.isshow"></i>
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
		<p>&lt;ol&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;ol&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				ol_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<ol> \n  <li>咖啡</li> \n  <li>牛奶</li> \n  <li>茶</li> \n</ol> \n \n<ol start="50"> \n  <li>咖啡</li> \n  <li>牛奶</li> \n  <li>茶</li> \n</ol> \n  \n</body> \n</html> \n',
				ol_text2:[
					{'attr':'compact','value':'compact','desc':'规定列表呈现的效果比正常情况更小巧。','isshow':true},
					{'attr':'reversed','value':'reversed','desc':'规定列表顺序为降序。(9,8,7...)','isshow':true},
					{'attr':'start','value':'number','desc':'规定有序列表的起始值。','isshow':true},
					{'attr':'type','value':'1 A a I i','desc':'规定在列表中使用的标记类型。','isshow':true}
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


