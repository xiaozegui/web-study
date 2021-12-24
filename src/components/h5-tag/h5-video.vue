<template>
	<el-card>
		<h4>HTML &lt;video&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一段简单的 HTML5 视频：</p>
		<code-card :mytextarea='video_text1' uniquename='video1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持&lt;video&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;video&gt;标签定义视频，比如电影片段或其他视频流</p>
		<p>提示：可以在开始标签和结束标签之间放置文本内容，这样老的浏览器就可以显示出不支持该标签的信息</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;video&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="video_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.vattribute }}&nbsp;&nbsp;<i class="el-icon-time"></i></el-link>
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
		<p>&lt;video&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;video&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				video_text1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<video src="static/video/movie.ogv" controls="controls">\nyour browser does not support the video tag\n</video>\n\n</body>\n</html>\n',
				video_text2:[
					{'vattribute': 'autoplay','value':'autoplay','desc':'如果出现该属性，则视频在就绪后马上播放。'},
					{'vattribute': 'controls','value':'controls','desc':'如果出现该属性，则向用户显示控件，比如播放按钮。'}, 
					{'vattribute': 'height','value':'pixels','desc':'设置视频播放器的高度。'}, 
					{'vattribute': 'loop','value':'loop','desc':'如果出现该属性，则当媒介文件完成播放后再次开始播放。'}, 
					{'vattribute': 'preload','value':'preload','desc':'如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 autoplay，则忽略该属性。'}, 
					{'vattribute': 'src','value':'url','desc':'要播放的视频的 URL。'}, 
					{'vattribute': 'width','value':'pixels','desc':'设置视频播放器的宽度。'}
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