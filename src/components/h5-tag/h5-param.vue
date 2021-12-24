<template>
	<el-card>
		<h4>HTML &lt;param&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;param&gt; 元素：</p>
		<code-card :mytextarea='param_text1' uniquename='param1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持&lt;param&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>param 元素允许您为插入 XHTML 文档的对象规定 run-time 设置，也就是说，此标签可为包含它的 &lt;object&gt; 或者 &lt;applet&gt; 标签提供参数。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;param&gt; 标签没有结束标签</p>
		<p>在 XHTML 中，&lt;param&gt; 标签必须被正确地关闭。</p>
		<el-divider></el-divider>
		<h4>必需的属性</h4>
		<el-table :data="param_text2" style="width: 100%" :stripe="true" :border="true">
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
		<el-table :data="param_text3" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;param&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;param&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				param_text1:'<object classid="clsid:F08DF954-8592-11D1-B16A-00C0F0283628" id="Slider1"  \nwidth="100" height="50"> \n<param name="BorderStyle" value="1" /> \n<param name="MousePointer" value="0" /> \n<param name="Enabled" value="1" /> \n<param name="Min" value="0" /> \n<param name="Max" value="10" /> \n</object> \n',
				param_text2:[
					{'attr':'name','value':'unique_name','desc':'定义参数的名称（用在脚本中）。'}
				],
				param_text3:[
					{'attr':'type','value':'MIME type','desc':'规定参数的 MIME 类型'},
					{'attr':'value','value':'value','desc':'规定参数的值。'},
					{'attr':'valuetype','value':'data ref object','desc':'规定值的 MIME 类型'}
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



