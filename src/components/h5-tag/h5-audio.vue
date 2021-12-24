<template>
	<el-card>
		<h4>HTML &lt;audio&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一段简单的 HTML 5 音频：</p>
		<code-card :mytextarea='audiotext1' uniquename='audio1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 &lt;audio&lt; 标签。</p>
		<p>注释：Internet Explorer 8 以及更早的版本不支持 &lt;audio&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;audio&gt; 标签定义声音，比如音乐或其他音频流。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>&lt;audio&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>提示：可以在开始标签和结束标签之间放置文本内容，这样老的浏览器就可以显示出不支持该标签的信息。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<el-table :data="audiotext2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attribute }}&nbsp;&nbsp;<i class="el-icon-time"></i></el-link>
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
		<p>&lt;audio&gt; 标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;audio&gt; 标签支持<el-link type='primary' href='/event'>事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				audiotext1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<audio src="../../static/video/horse.ogv" controls="controls">\nYour browser does not support the audio element.\n</audio>\n\n</body>\n</html>\n',
				audiotext2:[
					{'attribute':'autoplay','value':'autoplay','desc':'如果出现该属性，则音频在就绪后马上播放。'},
					{'attribute':'controls','value':'controls','desc':'如果出现该属性，则向用户显示控件，比如播放按钮。'},
					{'attribute':'loop','value':'loop','desc':'如果出现该属性，则每当音频结束时重新开始播放。'},
					{'attribute':'preload','value':'preload','desc':'如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。'},
					{'attribute':'src','value':'url','desc':'要播放的音频的 URL。'}
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


