<template>
	<el-card>
		<h4>HTML &lt;iframe&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='iframe_text1' uniquename='iframe1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;iframe&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 XHTML  之间的差异</h4>
		<p>在 HTML 4.1 Strict DTD 和 XHTML 1.0 Strict DTD 中，不支持 iframe 元素。</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p><mark>提示：您可以把需要的文本放置在 &lt;iframe&gt; 和 &lt;/iframe&gt; 之间，这样就可以应对无法理解 iframe 的浏览器。</mark></p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="iframe_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;iframe&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;iframe&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				iframe_text1:'<html>\n\n<body>\n\n<iframe src="../../../static/img/eg_landscape.jpg"></iframe>\n\n<p>一些老的浏览器不支持 iframe。</p>\n<p>如果得不到支持，iframe 是不可见的。</p>\n\n\n</body>\n</html>\n',
				iframe_text2:[
					{'attr':'align','value':'left right top middle bottom','desc':'规定如何根据周围的元素来对齐此框架。','isshow':false},
					{'attr':'frameborder','value':'1 0','desc':'规定是否显示框架周围的边框。','isshow':false},
					{'attr':'height','value':'pixels %','desc':'规定 iframe 的高度','isshow':false},
					{'attr':'longdesc','value':'URL','desc':'规定一个页面，该页面包含了有关 iframe 的较长描述','isshow':false},
					{'attr':'marginheight','value':'pixels','desc':'定义 iframe 的顶部和底部的边距','isshow':false},
					{'attr':'marginwidth','value':'pixels','desc':'定义 iframe 的左侧和右侧的边距','isshow':false},
					{'attr':'name','value':'frame_name','desc':'规定 iframe 的名称。','isshow':false},
					{'attr':'sandbox','value':'allow-forms allow-same-origin allow-scripts allow-top-navigation','desc':'启用一系列对 <iframe> 中内容的额外限制','isshow':true},
					{'attr':'scrolling','value':'yes no auto','desc':'规定是否在 iframe 中显示滚动条。','isshow':false},
					{'attr':'seamless','value':'seamless','desc':'规定 <iframe> 看上去像是包含文档的一部分','isshow':true},
					{'attr':'src','value':'URL','desc':'规定在 iframe 中显示的文档的 URL','isshow':false},
					{'attr':'srcdoc','value':'HTML_code','desc':'规定在 <iframe> 中显示的页面的 HTML 内容','isshow':true},
					{'attr':'width','value':'pixels %','desc':'定义 iframe 的宽度','isshow':false}
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


