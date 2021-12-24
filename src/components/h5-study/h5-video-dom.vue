<template>
	<el-card>
		<h4 id="domvideo"><a href="/videodom/#domvideo" class="header-anchor">¶</a>HTML5 &lt;vide&gt; - 使用 DOM 进行控制</h4>
		<p>HTML5 &lt;vide&gt; 元素同样拥有方法、属性和事件。</p>
		<p>其中的方法用于播放、暂停以及加载等。其中的属性（比如时长、音量等）可以被读取或设置。其中的 DOM 事件能够通知您，比方说， &lt;vide&gt; 元素开始播放、已暂停，已停止，等等。</p>
		<p>下例中简单的方法，向我们演示了如何使用 &lt;vide&gt; 元素，读取并设置属性，以及如何调用方法。</p>
		<p><strong>实例</strong></p>
		<p>为视频创建简单的播放/暂停以及调整尺寸控件：</p>
		<code-card :mytextarea="videodomtext" uniquename="vediodom1"></code-card>
		<p>上面的例子调用了两个方法：play() 和 pause()。它同时使用了两个属性：paused 和 width。</p>
		<el-divider></el-divider>
		<h4 id="videomethodsattributeevent"><a href="/videodom/#videomethodsattributeevent" class="header-anchor">¶</a>HTML5 &lt;vide&gt; - 方法、属性以及事件</h4>
		<p>下面列出了大多数浏览器支持的视频方法、属性和事件：</p>
		<el-table :data="videomeatev" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="videomethods" label="方法" >
			</el-table-column>
			<el-table-column prop="videoattribute" label="属性" >
			</el-table-column>
			<el-table-column prop="vedioevent" label="事件">
			</el-table-column>
		</el-table>
		<p>注释：在所有属性中，只有 videoWidth 和 videoHeight 属性是立即可用的。在视频的元数据已加载后，其他属性才可用。</p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue';
	export default {
		data() {
			return {
				videodomtext: '<!DOCTYPE html> \n<html> \n<body> \n\n<div style="text-align:center;">\n  <button onclick="playPause()">播放/暂停</button> \n  <button onclick="makeBig()">大</button>\n  <button onclick="makeNormal()">中</button>\n  <button onclick="makeSmall()">小</button>\n  <br /> \n  <video id="video1" width="420" style="margin-top:15px;">\n    <source src="../static/video/mov_bbb.mp4" type="video/mp4" />\n    <source src="/example/html5/mov_bbb.ogg" type="video/ogg" />\n    Your browser does not support HTML5 video.\n  </video>\n</div> \n\n<script type="text/javascript">\nvar myVideo=document.getElementById("video1");\n\nfunction playPause()\n{ \nif (myVideo.paused) \n  myVideo.play(); \nelse \n  myVideo.pause(); \n} \n\nfunction makeBig()\n{ \nmyVideo.width=560; \n} \n\nfunction makeSmall()\n{ \nmyVideo.width=320; \n} \n\nfunction makeNormal()\n{ \nmyVideo.width=420; \n} \n\<\/script\> \n\n</body> \n</html>\n',
				videomeatev:[
					{'videomethods':'play()','videoattribute':'currentSrc','vedioevent':'play'},
					{'videomethods':'pause()','videoattribute':'currentTime','vedioevent':'pause'},
					{'videomethods':'load()','videoattribute':'videoWidth','vedioevent':'progress'},
					{'videomethods':'canPlayType','videoattribute':'videoHeight','vedioevent':'error'},
					{'videomethods':'','videoattribute':'duration','vedioevent':'timeupdate'},
					{'videomethods':'','videoattribute':'ended','vedioevent':'ended'},
					{'videomethods':'','videoattribute':'error','vedioevent':'abort'},
					{'videomethods':'','videoattribute':'paused','vedioevent':'empty'},
					{'videomethods':'','videoattribute':'muted','vedioevent':'emptied'},
					{'videomethods':'','videoattribute':'seeking','vedioevent':'waiting'},
					{'videomethods':'','videoattribute':'volume','vedioevent':'	loadedmetadata'},
					{'videomethods':'','videoattribute':'height','vedioevent':''},
					{'videomethods':'','videoattribute':'width','vedioevent':''},
				],
				istrue:true
			}
		},
		methods: {
			playPause() {
				var myVideo = document.getElementById("video1");
				if (myVideo.paused)
					myVideo.play();
				else
					myVideo.pause();
			},
			makeBig() {
				var myVideo = document.getElementById("video1");
				myVideo.width = 560;
			},
			makeSmall() {
				var myVideo = document.getElementById("video1");
				myVideo.width = 320;
			},
			makeNormal() {
				var myVideo = document.getElementById("video1");
				myVideo.width = 420;
			}
		},
		mounted() {
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
