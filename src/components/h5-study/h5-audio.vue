<template>
	<el-card>
		<p style="margin-top: 24px;font-size: 16px;">HTML5 提供了播放音频的标准。</p>
		<el-divider></el-divider>
		<h4>Web 上的音频</h4>
		<p>直到现在，仍然不存在一项旨在网页上播放音频的标准</p>
		<p>今天，大多数音频是通过插件（比如 Flash）来播放的。然而，并非所有浏览器都拥有同样的插件。</p>
		<p>HTML5 规定了一种通过 audio 元素来包含音频的标准方法。</p>
		<p>audio 元素能够播放声音文件或者音频流。</p>
		<el-divider></el-divider>
		<h4 id="audioform"><a href="/audio/#audioform" class="header-anchor">¶</a>音频格式</h4>
		<p>当前，audio 元素支持三种音频格式：</p>
		<el-table :data="audioform" :border="istrue" :stripe="istrue">
			<el-table-column prop="form" label="" >
			</el-table-column>
			<el-table-column prop="ie" label="IE 9" >
			</el-table-column>
			<el-table-column prop="firefox" label="Firefox 3.5">
			</el-table-column>
			<el-table-column prop="opera" label="Opera 10.5">
			</el-table-column>
			<el-table-column prop="chrome" label="Chrome 3.0">
			</el-table-column>
			<el-table-column prop="safari" label="Safari 3.0">
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>如何工作</h4>
		<p>如需在 HTML5 中播放音频，您所有需要的是：</p>
		<code-card :mytextarea="audiotext" uniquename="audio1"></code-card>
		<p>control 属性供添加播放、暂停和音量控件。</p>
		<p>&lt;audio&gt; 与 &lt;/audio&gt; 之间插入的内容是供不支持 audio 元素的浏览器显示的：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="audiotext1" uniquename="audio2"></code-card>
		<p>上面的例子使用一个 Ogg 文件，适用于Firefox、Opera 以及 Chrome 浏览器。</p>
		<p>要确保适用于 Safari 浏览器，音频文件必须是 MP3 或 Wav 类型</p>
		<p>audio 元素允许多个 source 元素。source 元素可以链接不同的音频文件。浏览器将使用第一个可识别的格式：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="audiotext2" uniquename="audio3"></code-card>
		<el-divider></el-divider>
		<h4>Internet Explorer</h4>
		<p>Internet Explorer 8 不支持 audio 元素。在 IE 9 中，将提供对 audio 元素的支持。</p>
		<el-divider></el-divider>
		<h4>&lt;audio&gt; 标签的属性</h4>
		<el-table :data="audioattribute" style="width: 100%" :stripe="istrue" :border="istrue">
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
		<h4>相关页面</h4>
		<p>参考手册：<el-link type="primary" href="/audio_tag">HTML 5 &lt;audio&gt; 标签</el-link></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data(){
			return{
				audioform:[
					{'form':'Ogg Vorbis','ie':'','firefox':'√','opera':'√','chrome':'√','safari':''},
					{'form':'MP3','ie':'√','firefox':'','opera':'','chrome':'√','safari':'√'},
					{'form':'Wav','ie':'','firefox':'√','opera':'√','chrome':'','safari':'√'}
				],
				audioattribute:[
					{'attribute':'autoplay','value':'autoplay','desc':'如果出现该属性，则音频在就绪后马上播放。'},
					{'attribute':'controls','value':'controls','desc':'如果出现该属性，则向用户显示控件，比如播放按钮。'},
					{'attribute':'loop','value':'loop','desc':'如果出现该属性，则每当音频结束时重新开始播放。'},
					{'attribute':'preload','value':'preload','desc':'如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。'},
					{'attribute':'src','value':'url','desc':'要播放的音频的 URL。'}
				],
				istrue:true,
				audiotext:'<audio src="../static/video/song.ogv" controls="controls">\n</audio>\n',
				audiotext1:'<audio src="../static/video/song.ogv" controls="controls">\nYour browser does not support the audio tag.\n</audio>\n',
				audiotext2:'<audio controls="controls">\n  <source src="../static/video/song.ogv" type="audio/ogg">\n  <source src="song.mp3" type="audio/mpeg">\nYour browser does not support the audio tag.\n</audio>\n'
			}
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
