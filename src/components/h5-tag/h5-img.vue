<template>
	<el-card>
		<h4>HTML &lt;img&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='img_text1' uniquename='img1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;img&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>img 元素向网页中嵌入一幅图像。</p>
		<p>请注意，从技术上讲，&lt;img&gt; 标签并不会在网页中插入图像，而是从网页上链接图像。&lt;img&gt; 标签创建的是被引用图像的占位空间。</p>
		<p>&lt;img&gt; 标签有两个必需的属性：src 属性 和 alt 属性。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;img&gt; 标签没有结束标签。</p>
		<p>在 XHTML 中，&lt;img&gt; 标签必须被正确地关闭。</p>
		<p>在 HTML 4.01 中，不推荐使用 image 元素的 "align"、"border"、"hspace" 以及 "vspace" 属性。</p>
		<p>在 XHTML 1.0 Strict DTD 中，不支持 image 元素的 "align"、"border"、"hspace" 以及 "vspace" 属性</p>
		<el-divider></el-divider>
		<h4>必须的属性</h4>
		<el-table :data="img_text2" style="width: 100%" :stripe="true" :border="true">
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
		<h4>可选的属性</h4>
		<el-table :data="img_text3" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;img&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;img&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示如何将图片调整到不同的尺寸</p>
		<code-card :mytextarea='img_text4' uniquename='img4'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				img_text1:'<!DOCTYPE HTML> \n<html> \n \n<body> \n \n<p> \n一幅图像： \n<img src="static/img/eg_mouse.jpg" width="128" height="128" /> \n</p> \n \n<p> \n一幅动画图像： \n<img src="static/img/eg_cute.gif" width="50" height="50" /> \n</p> \n \n<p>请注意，插入动画图像的语法与插入普通图像的语法没有区别。</p> \n \n</body> \n</html>  \n',
				img_text2:[
					{'attr':'alt','value':'text','desc':'规定图像的替代文本。'},
					{'attr':'src','value':'URL','desc':'规定显示图像的 URL'}
				],
				img_text3:[
					{'attr':'align','value':'top bottom middle left right','desc':'规定如何根据周围的文本来排列图像'},
					{'attr':'border','value':'pixels','desc':'定义图像周围的边框'},
					{'attr':'height','value':'pixels %','desc':'定义图像的高度。'},
					{'attr':'hspace','value':'pixels ','desc':'定义图像左侧和右侧的空白'},
					{'attr':'ismap','value':'URL','desc':'将图像定义为服务器端图像映射。'},
					{'attr':'longdesc','value':'URL','desc':'指向包含长的图像描述文档的 URL'},
					{'attr':'usemap','value':'URL','desc':'将图像定义为客户器端图像映射'},
					{'attr':'vspace','value':'pixels','desc':'定义图像顶部和底部的空白'},
					{'attr':'width','value':'pixels %','desc':'设置图像的宽度'}
				],
				img_text4:'<html> \n \n<body> \n \n<img src="static/img/eg_mouse.jpg" width="50" height="50"> \n \n<br /> \n \n<img src="static/img/eg_mouse.jpg" width="100" height="100"> \n \n<br /> \n \n<img src="static/img/eg_mouse.jpg" width="200" height="200"> \n \n<p>通过改变 img 标签的 "height" 和 "width" 属性的值，您可以放大或缩小图像。</p> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


