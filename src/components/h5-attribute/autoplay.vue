<template>
	<el-card>
		<h4>HTML &lt;autoplay&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>设置为自动播放的 audio 元素：</p>
		<code-card :mytextarea="autoplay_text1" uniquename='autoplay1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>autoplay 属性规定一旦音频就绪马上开始播放。</p>
		<p>如果设置了该属性，音频将自动播放。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>autoplay 属性是 HTML 5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="autoplay_text2"></el-input>
		<el-divider></el-divider>
		<el-link type='primary' href="/audio_tag">HTML &lt;audio&gt;标签</el-link><br><br>
		<el-link type='primary' href="/video_tag">HTML &lt;video&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				autoplay_text1: '<!DOCTYPE HTML>\n<html>\n<body>\n\n<audio controls="controls" autoplay="autoplay">\n  <source src="static/video/song.ogv" type="audio/ogg" />\nYour browser does not support the audio element.\n</audio>\n\n</body>\n</html>\n',
				autoplay_text2: '<audio autoplay="autoplay" />'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
