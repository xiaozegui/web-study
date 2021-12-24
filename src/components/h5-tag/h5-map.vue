<template>
	<el-card>
		<h4>HTML &lt;map&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>带有可点击区域的图像映射：</p>
		<code-card :mytextarea='map_text1' uniquename='map1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;map&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>定义一个客户端图像映射。图像映射（image-map）指带有可点击区域的一幅图像。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<h4>提示和注释：</h4>
		<p>注释：area 元素永远嵌套在 map 元素内部。area 元素可定义图像映射中的区域。</p>
		<p>注释：&lt;img&gt;中的 usemap 属性可引用 &lt;map&gt; 中的 id 或 name 属性（取决于浏览器），所以我们应同时向 &lt;map&gt; 添加 id 和 name 属性。</p>
		<el-divider></el-divider>
		<h4>必需的属性</h4>
		<el-table :data="map_text2" style="width: 100%" :stripe="true" :border="true">
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
		<el-table :data="map_text3" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;map&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;map&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				map_text1:'<html>\n<body>\n\n<p>请点击图像上的星球，把它们放大。</p>\n\n<img\nsrc="../../static/img/eg_planets.jpg"\nborder="0" usemap="#planetmap"\nalt="Planets" />\n\n<map name="planetmap" id="planetmap">\n\n<area\nshape="circle"\ncoords="180,139,14"\nhref ="../static/venus.html"\ntarget ="_blank"\nalt="Venus" />\n\n<area\nshape="circle"\ncoords="129,161,10"\nhref ="../static/mercur.html"\ntarget ="_blank"\nalt="Mercury" />\n\n<area\nshape="rect"\ncoords="0,0,110,260"\nhref ="../static/sun.html"\ntarget ="_blank"\nalt="Sun" />\n\n</map>\n\n<p><b>注释：</b>img 元素中的 "usemap" 属性引用 map 元素中的 "id" 或 "name" 属性（根据浏览器），所以我们同时向 map 元素添加了 "id" 和 "name" 属性。</p>\n\n</body>\n</html>\n',
				map_text2:[
					{'attr':'id','value':'unique_name','desc':'为 map 标签定义唯一的名称。'}
				],
				map_text3:[
					{'attr':'name','value':'mapname','desc':'为 image-map 规定的名称'}
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


