<template>
	<el-card>
		<h4>HTML &lt;area&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>带有可点击区域的图像映射：</p>
		<code-card :mytextarea='areatext1' uniquename='area1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;area&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;area&gt; 标签定义图像映射中的区域（注：图像映射指得是带有可点击区域的图像）。</p>
		<p>area 元素总是嵌套在 &lt;map&gt; 标签中。</p>
		<p>注释：&lt;img&gt; 标签中的 usemap 属性与 map 元素 name 属性相关联，创建图像与映射之间的联系。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>注释：&lt;img&gt; 中的 usemap 属性可引用 &lt;map&gt; 中的 id 或 name 属性（由浏览器决定），所以我们需要同时向 &lt;map&gt; 添加 id 和 name 两个属性。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;area&gt; 没有结束标签。</p>
		<p>在 XHTML 中，&lt;area&gt; 必须正确地关闭。</p>
		<el-divider></el-divider>
		<h4>必需的属性</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th style="width:20%;">属性</th>
					<th style="width:20%;">值</th>
					<th style="width:60%;">描述</th>
				</tr>
				<tr>
					<td>alt</td>
					<td><i>text</i></td>
					<td>定义此区域的替换文本。</td>
				</tr>
			</tbody>
		</table>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="areatext2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;area&gt; 标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link>
		</p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;area&gt; 标签支持<el-link type='primary' href='/event'>事件属性</el-link>
		</p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				areatext1: '<html>\n<body>\n\n<p>请点击图像上的星球，把它们放大。</p>\n\n<img\nsrc="../../static/img/eg_planets.jpg"\nborder="0" usemap="#planetmap"\nalt="Planets" />\n\n<map name="planetmap" id="planetmap">\n\n<area\nshape="circle"\ncoords="180,139,14"\nhref ="../static/venus.html"\ntarget ="_blank"\nalt="Venus" />\n\n<area\nshape="circle"\ncoords="129,161,10"\nhref ="../static/mercur.html"\ntarget ="_blank"\nalt="Mercury" />\n\n<area\nshape="rect"\ncoords="0,0,110,260"\nhref ="../static/sun.html"\ntarget ="_blank"\nalt="Sun" />\n\n</map>\n\n<p><b>注释：</b>img 元素中的 "usemap" 属性引用 map 元素中的 "id" 或 "name" 属性（根据浏览器），所以我们同时向 map 元素添加了 "id" 和 "name" 属性。</p>\n\n</body>\n</html>\n',
				areatext2: [
					{'attr':'coords','value':'坐标值','desc':'定义可点击区域（对鼠标敏感的区域）的坐标'},
					{'attr':'href','value':'URL','desc':'定义此区域的目标 URL。'},
					{'attr':'nohref','value':'nohref','desc':'从图像映射排除某个区域。'},
					{'attr':'shape','value':'default rect circ poly','desc':'定义区域的形状'},
					{'attr':'target','value':'_blank _parent _self _top','desc':'规定在何处打开 href 属性指定的目标 URL'}
				]
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	th,td{
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
		border-left: 1px #EBEEF5 solid;
	}
</style>
