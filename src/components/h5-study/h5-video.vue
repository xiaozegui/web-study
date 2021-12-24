<template>
	<el-card id="checkveidosupport">
		<h4><a href="/video/#checkveidosupport" class="header-anchor">¶</a>许多时髦的网站都提供视频。HTML5 提供了展示视频的标准。</h4>
		<p>检测您的浏览器是否支持 HTML5 视频：</p>
		<div id="checkVideoResult">
			<el-button type="info" @click="checkVideo()">check</el-button>
		</div>
		<el-divider></el-divider>
		<h4>Web 上的视频</h4>
		<p>直到现在，仍然不存在一项旨在网页上显示视频的标准。</p>
		<p>今天，大多数视频是通过插件（比如 Flash）来显示的。然而，并非所有浏览器都拥有同样的插件。</p>
		<p>HTML5 规定了一种通过 video 元素来包含视频的标准方法。</p>
		<el-divider></el-divider>
		<h4 id="videoform"><a href="/video/#videoform" class="header-anchor">¶</a>视频格式</h4>
		<p>当前，video 元素支持三种视频格式：</p>
		<el-table :data="videodata" style="width: 100%" :border="isboder" :stripe="isstripe">
			<el-table-column prop="form" label="格式">
			</el-table-column>
			<el-table-column prop="IE" label="IE">
			</el-table-column>
			<el-table-column prop="Firefox" label="Firefox">
			</el-table-column>
			<el-table-column prop="Opera" label="Opera">
			</el-table-column>
			<el-table-column prop="Chrome" label="Chrome">
			</el-table-column>
			<el-table-column prop="Safari" label="Safari">
			</el-table-column>
		</el-table>
		<p>Ogg = 带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件</p>
		<p>MPEG4 = 带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件</p>
		<p>WebM = 带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件</p>
		<el-divider></el-divider>
		<h4>如何工作</h4>
		<p>如需在 HTML5 中显示视频，您所有需要的是：</p>
		<code-card :mytextarea="codetext1" uniquename="vedio1"></code-card>
		<p>controls 属性供添加播放、暂停和音量控件。</p>
		<p>包含宽度和高度属性也是不错的主意。</p>
		<p>&lt;video&gt; 与 &lt;/video&gt; 之间插入的内容是供不支持 video 元素的浏览器显示的：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="codetext2" uniquename="vedio2"></code-card>
		<p>上面的例子使用一个 Ogg 文件，适用于Firefox、Opera 以及 Chrome 浏览器。</p>
		<p>要确保适用于 Safari 浏览器，视频文件必须是 MPEG4 类型。</p>
		<p>video 元素允许多个 source 元素。source 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="codetext3" uniquename="vedio3"></code-card>
		<el-divider></el-divider>
		<h4>Internet Explorer</h4>
		<p>Internet Explorer 8 不支持 video 元素。在 IE 9 中，将提供对使用 MPEG4 的 video 元素的支持。</p>
		<el-divider></el-divider>
		<h4 id="videoattributions"><a href="/video/#videoattributions" class="header-anchor">¶</a>&lt;video&gt; 标签的属性</h4>
		<el-table :data="videoattribute" style="width: 100%" :stripe="isstripe" :border="isboder">
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
		<h4>相关页面</h4>
		<p>参考手册：<el-link type="primary" href='/video_tag'>HTML 5 &lt;video&gt; 标签</el-link></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue';
	export default {
		data() {
			return {
				videodata: [{
						'form': 'Ogg',
						'IE': 'NO',
						'Firefox': '3.5+',
						'Opera': '10.5+',
						'Chrome': '5.0+',
						'Safari': 'No'
					},
					{
						'form': 'MPEFG 4',
						'IE': '9.0+',
						'Firefox': 'No',
						'Opera': 'No',
						'Chrome': '5.0+',
						'Safari': '3.0+'
					},
					{
						'form': 'WebM',
						'IE': 'No',
						'Firefox': '4.0+',
						'Opera': '10.6+',
						'Chrome': '6.0+',
						'Safari': '3.0+'
					}
				],
				isstripe: true,
				isboder: true,
				codetext1: '<video src=../static/video/movie.ogv controls="controls">\n</video>\n',
				codetext2: '<video src="../static/video/movie.ogv" width="220" height="140" controls="controls">\nYour browser does not support the video tag.\n</video>\n',
				codetext3: '<video width="320" height="240" controls="controls">\n  <source src="../static/video/movie.ogv" type="video/ogg">\n  <source src="movie.mp4" type="video/mp4">\nYour browser does not support the video tag.\n</video>\n',
				videoattribute: [
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
		methods: {
			checkVideo() {
				if (!!document.createElement('video').canPlayType) {
					var vidTest = document.createElement("video");
					var oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
					if (!oggTest) {
						h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
						if (!h264Test) {
							document.getElementById("checkVideoResult").innerHTML = "Sorry. No video support."
						} else {
							if (h264Test == "probably") {
								document.getElementById("checkVideoResult").innerHTML = "Yes! Full support!";
							} else {
								document.getElementById("checkVideoResult").innerHTML = "Well. Some support.";
							}
						}
					} else {
						if (oggTest == "probably") {
							document.getElementById("checkVideoResult").innerHTML = "Yes! Full support!";
						} else {
							document.getElementById("checkVideoResult").innerHTML = "Well. Some support.";
						}
					}
				} else {
					document.getElementById("checkVideoResult").innerHTML = "Sorry. No video support."
				}
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
