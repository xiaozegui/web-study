<template>
	<el-card>
		<h4>HTML5 视频和音频的 DOM 参考手册</h4>
		<p>HTML5 DOM 为 &lt;audio&gt; 和 &lt;video&gt; 元素提供了方法、属性和事件。</p>
		<p>这些方法、属性和事件允许您使用 JavaScript 来操作 &lt;audio&gt; 和 &lt;video&gt; 元素。</p>
		<el-divider></el-divider>
		<h4>HTML5 Audio/Video 方法</h4>
		<el-table :data="video_audio_methods" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="方法">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.method }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>HTML5 Audio/Video 属性</h4>
		<el-table :data="video_audio_attribute" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>HTML5 Audio/Video 事件</h4>
		<el-table :data="video_atudio_event" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.event }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
				istrue:true,
				video_audio_methods:[
					{'method':'addTextTrack()','desc':'	向音频/视频添加新的文本轨道'},
					{'method':'canPlayType()','desc':'检测浏览器是否能播放指定的音频/视频类型'},
					{'method':'load()','desc':'重新加载音频/视频元素'},
					{'method':'play()','desc':'开始播放音频/视频'},
					{'method':'pause()','desc':'暂停当前播放的音频/视频'}
				],
				video_audio_attribute:[
					{'attr':'audioTracks','desc':'返回表示可用音轨的 AudioTrackList 对象'},
					{'attr':'autoplay','desc':'设置或返回是否在加载完成后随即播放音频/视频'},
					{'attr':'buffered','desc':'返回表示音频/视频已缓冲部分的 TimeRanges 对象'},
					{'attr':'controller','desc':'返回表示音频/视频当前媒体控制器的 MediaController 对象'},
					{'attr':'controls','desc':'设置或返回音频/视频是否显示控件（比如播放/暂停等）'},
					{'attr':'crossOrigin','desc':'设置或返回音频/视频的 CORS 设置'},
					{'attr':'currentSrc','desc':'返回当前音频/视频的 URL'},
					{'attr':'currentTime','desc':'设置或返回音频/视频中的当前播放位置（以秒计）'},
					{'attr':'defaultMuted','desc':'设置或返回音频/视频默认是否静音'},
					{'attr':'defaultPlaybackRate','desc':'设置或返回音频/视频的默认播放速度'},
					{'attr':'duration','desc':'返回当前音频/视频的长度（以秒计）'},
					{'attr':'ended','desc':'返回音频/视频的播放是否已结束'},
					{'attr':'error','desc':'返回表示音频/视频错误状态的 MediaError 对象'},
					{'attr':'loop','desc':'设置或返回音频/视频是否应在结束时重新播放'},
					{'attr':'mediaGroup','desc':'设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）'},
					{'attr':'muted','desc':'设置或返回音频/视频是否静音'},
					{'attr':'networkState','desc':'返回音频/视频的当前网络状态'},
					{'attr':'paused','desc':'设置或返回音频/视频是否暂停'},
					{'attr':'playbackRate','desc':'设置或返回音频/视频播放的速度'},
					{'attr':'played','desc':'返回表示音频/视频已播放部分的 TimeRanges 对象'},
					{'attr':'preload','desc':'设置或返回音频/视频是否应该在页面加载后进行加载'},
					{'attr':'readyState','desc':'返回音频/视频当前的就绪状态'},
					{'attr':'seekable','desc':'返回表示音频/视频可寻址部分的 TimeRanges 对象'},
					{'attr':'seeking','desc':'返回用户是否正在音频/视频中进行查找'},
					{'attr':'src','desc':'设置或返回音频/视频元素的当前来源'},
					{'attr':'startDate','desc':'返回表示当前时间偏移的 Date 对象'},
					{'attr':'textTracks','desc':'返回表示可用文本轨道的 TextTrackList 对象'},
					{'attr':'videoTracks','desc':'返回表示可用视频轨道的 VideoTrackList 对象'},
					{'attr':'volume','desc':'设置或返回音频/视频的音量'}
				],
				video_atudio_event:[
					{'event':'abort','desc':'当音频/视频的加载已放弃时'},
					{'event':'canplay','desc':'当浏览器可以播放音频/视频时'},
					{'event':'canplaythrough','desc':'当浏览器可在不因缓冲而停顿的情况下进行播放时'},
					{'event':'durationchange','desc':'当音频/视频的时长已更改时'},
					{'event':'emptied','desc':'当目前的播放列表为空时'},
					{'event':'ended','desc':'当目前的播放列表已结束时'},
					{'event':'error','desc':'当在音频/视频加载期间发生错误时'},
					{'event':'loadeddata','desc':'当浏览器已加载音频/视频的当前帧时'},
					{'event':'loadedmetadata','desc':'当浏览器已加载音频/视频的元数据时'},
					{'event':'loadstart','desc':'当浏览器开始查找音频/视频时'},
					{'event':'pause','desc':'当音频/视频已暂停时'},
					{'event':'play','desc':'当音频/视频已开始或不再暂停时'},
					{'event':'playing','desc':'当音频/视频在已因缓冲而暂停或停止后已就绪时'},
					{'event':'progress','desc':'当浏览器正在下载音频/视频时'},
					{'event':'ratechange','desc':'当音频/视频的播放速度已更改时'},
					{'event':'seeked','desc':'当用户已移动/跳跃到音频/视频中的新位置时'},
					{'event':'seeking','desc':'当用户开始移动/跳跃到音频/视频中的新位置时'},
					{'event':'stalled','desc':'当浏览器尝试获取媒体数据，但数据不可用时'},
					{'event':'suspend','desc':'当浏览器刻意不获取媒体数据时'},
					{'event':'timeupdate','desc':'当目前的播放位置已更改时'},
					{'event':'volumechange','desc':'当音量已更改时'},
					{'event':'waiting','desc':'当视频由于需要缓冲下一帧而停止'}	
				]
			}
		}
	}
</script>

<style scoped="scoped">
</style>
