<template>
	<el-card>
		<h4>HTML &lt;src&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>在下面的例子中，我们在页面中插入一幅 上海鲜花港拍摄的郁金香照片</p>
		<code-card :mytextarea="src_text1" uniquename='src1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;img&gt; 标签的 src 属性是必需的。它的值是图像文件的 URL，也就是引用该图像的文件的的绝对路径或相对路径。</p>
		<p>所有主流浏览器都支持 src 属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="src_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<el-table :data="src_text3" style="width: 100%" :stripe="true" :border="true">
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
		<el-link type='primary' href="/img">HTML &lt;img&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				src_text1: '<html>\n\n<body>\n\n<p>\n郁金香：\n<img src="static/img/eg_tulip.jpg" />\n</p>\n\n<p>\n月季花：\n<img src="static/img/eg_chinarose.jpg" />\n</p>\n\n<p>src 属性用于指定图像文件的 URL。上面的例子使用了相对路径，你甚至可以通过使用绝对路径来引用外部图像（比如另一个服务器上的图像）。</p>\n\n</body>\n</html>\n',
				src_text2: '<a src="value">',
				src_text3:[
					{'attr':'URL','desc':'规定图像的 URL。绝对 URL - 指向其他站点（比如 src="http://www.example.com/"）\n相对 URL - 指向站点内的文件（比如 src="/i/image.gif"）'}
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
