<template>
	<el-card>
		<h4>HTML &lt;frame&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>简单的三框架页面：</p>
		<code-card :mytextarea='frame_text1' uniquename='frame1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;frame&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;frame&gt; 标签定义 frameset 中的一个特定的窗口（框架）</p>
		<p>frameset 中的每个框架都可以设置不同的属性，比如 border、scrolling、noresize 等等。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;frame&gt; 标签没有结束标签。</p>
		<p>在 XHTML 中，&lt;frame&gt; 标签必须被正确地关闭</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p>注释：如果您希望验证包含框架的页面，请确保 doctype 被设置为 "Frameset DTD"。</p>
		<p>重要事项：您不能与 &lt;frameset&gt;&lt;/frameset&gt; 标签一起使用 &lt;body&gt;&lt;/body&gt; 标签。不过，如果您需要为不支持框架的浏览器添加一个 &lt;noframes&gt; 标签，请务必将此标签放置在 &lt;body&gt;&lt;/body&gt; 标签中！</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="frame_text2" style="width: 100%" :stripe="true" :border="true">
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
		<h4>标准属性</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="frame_text3"></el-input>
		<p>如需完整的描述，请访问<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				frame_text1:'<html>\n\n<frameset cols="25%,50%,25%">\n\n  <frame src="../../../static/codeview.html">\n  <frame src="../../../static/codeview.html">\n  <frame src="../../../static/codeview.html">\n\n</frameset>\n\n</html>\n',
				frame_text2:[
					{'attr':'frameborder','value':'0 1','desc':'规定是否显示框架周围的边框'},
					{'attr':'longdesc','value':'URL','desc':'规定一个包含有关框架内容的长描述的页面'},
					{'attr':'marginheight','value':'pixels','desc':'定义框架的上方和下方的边距'},
					{'attr':'marginwidth','value':'pixels','desc':'定义框架的左侧和右侧的边距'},
					{'attr':'name','value':'name','desc':'规定框架的名称'},
					{'attr':'noresize','value':'noresize','desc':'规定无法调整框架的大小'},
					{'attr':'scrolling','value':'yes no auto','desc':'规定是否在框架中显示滚动条'},
					{'attr':'src','value':'URL','desc':'规定在框架中显示的文档的 URL'}
				],
				frame_text3:'id, class, title, style'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


