<template>
	<el-card>
		<h4>HTML &lt;color&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>规定文本的颜色：</p>
		<code-card :mytextarea="color_text1" uniquename='color1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>color 属性规定 font 元素中文本的颜色。</p>
		<p>所有主流浏览器都支持 color 属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="color_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<el-table :data="color_text3" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					{{ scope.row.attr }}
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<br><br>
		<el-link type='primary' href="/font">HTML &lt;font&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				color_text1: '<html>\n<body>\n\n<p><font color="red">This is some text!</font></p>\n\n<p>在 HTML 4.01 中，不赞成 color 属性；在 XHTML 1.0 Strict DTD 中，不支持 color 属性。请使用 CSS 代替。</p>\n\n</body>\n</html>\n',
				color_text2: '<font color="value">',
				color_text3:[
					{'attr':'color_name','desc':'规定颜色值为颜色名称的文本颜色（比如 "red"）。'},
					{'attr':'hex_number','desc':'规定颜色值为十六进制值的文本颜色（比如 "#ff0000"）。'},
					{'attr':'rgb_number','desc':'规定颜色值为 rgb 代码的文本颜色（比如 "rgb(255,0,0)'}
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
