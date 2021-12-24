<template>
	<el-card>
		<h4>HTML &lt;background&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>为文档规定一幅背景图像：</p>
		<code-card :mytextarea="background_text1" uniquename='background1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>background 属性规定规定文档的背景图像。</p>
		<p>注释：当链接被点击时，该链接就处于活动状态。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="background_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<el-table :data="background_text3" style="width: 100%" :stripe="true" :border="true">
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
		<el-link type='primary' href="/body">HTML &lt;body&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				background_text1: '<html>\n<body background="static/img/eg_bg_04.gif">\n<h1>Hello world!</h1>\n<p><a href="/background">Visit W3School.com.cn!</a></p>\n</body>\n</html>\n',
				background_text2: '<body background="value">',
				background_text3:[
					{'attr':'URL','desc':'背景图像的 URL。绝对 URL - 指向其他站点（比如 background="http://www.example.com/"）\n相对 URL - 指向站点内的文件（比如 background="/i/image.gif"）'}
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
