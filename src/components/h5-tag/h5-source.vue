<template>
	<el-card>
		<h4>HTML &lt;source&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>拥有两份源文件的音频播放器。浏览器应该选择它所支持的文件（如果有的话）：</p>
		<code-card :mytextarea='source_text1' uniquename='source1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 &lt;source&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;source&gt; 标签为媒介元素（比如 &lt;video&gt; 和 &lt;audio&gt;）定义媒介资源。</p>
		<p>&lt;source&gt; 标签允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;source&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="source_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;source&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;source&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				source_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<audio controls> \n<source src="static/video/horse.ogv" type="audio/ogg"> \n<source src="static/video/horse.mp3" type="audio/mpeg"> \nYour browser does not support the audio element. \n</audio> \n \n</body> \n</html> \n',
				source_text2:[
					{'attr':'media','value':'media query','desc':'规定媒体资源的类型','isshow':true},
					{'attr':'src','value':'url','desc':'规定媒体文件的 URL。','isshow':true},
					{'attr':'type','value':'numeric value','desc':'规定媒体资源的 MIME 类型。','isshow':true}
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


