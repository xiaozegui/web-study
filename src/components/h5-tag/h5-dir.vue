<template>
	<el-card>
		<h4>HTML &lt;dir&gt; 标签</h4>
		<p>不赞成使用 dir 元素！</p>
		<el-divider></el-divider>
		<p><strong>实例</strong></p>
		<p>目录列表：</p>
		<code-card :mytextarea='dir_text1' uniquename='dir1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;dir&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;dir&gt; 标签定义目录列表。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，dir 元素不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，dir 元素不被支持。</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p><mark>提示：请使用 CSS 来为列表添加样式！</mark></p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="dir_text2" style="width: 100%" :stripe="true" :border="true">
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
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="dir_text3"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="dir_text4"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				dir_text1:'<html>\n<body>\n\n<dir>\n  <li>html</li>\n  <li>xhtml</li>\n  <li>css</li>\n</dir>\n\n</body>\n</html>\n',
				dir_text2:[
					{'attr':'compact','value':'compact','desc':'不赞成使用。请使用样式代替。'}
				],
				dir_text3:'id, class, title, style, dir, lang, xml:lang',
				dir_text4:'onclick, ondblclick, onfocus, onblur, onmousedown, onmouseup, onmouseover, onmousemove, onmouseout, onkeypress, onkeydown, onkeyup'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>



