<template>
	<el-card>
		<h4>HTML &lt;track&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>播放带有字幕的视频：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="track_text1"></el-input>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 10, Chrome 以及 Opera 支持 &lt;track&gt; 标签。</p>
		<p>目前所有主流浏览器都不支持 &lt;track&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;track&gt; 标签为诸如 video 元素之类的媒介规定外部文本轨道</p>
		<p>用于规定字幕文件或其他包含文本的文件，当媒介播放时，这些文件是可见的。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;track&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="track_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;track&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;track&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				track_text1:'<video width="320" height="240" controls="controls">\n  <source src="forrest_gump.mp4" type="video/mp4" />\n  <source src="forrest_gump.ogg" type="video/ogg" />\n  <track kind="subtitles" src="subs_chi.srt" srclang="zh" label="Chinese">\n  <track kind="subtitles" src="subs_eng.srt" srclang="en" label="English">\n</video>\n',
				track_text2:[
					{'attr':'default','value':'default','desc':'规定该轨道是默认的，假如没有选择任何轨道。','isshow':true},
					{'attr':'kind','value':'captions chapters descriptions metadata subtitles','desc':'表示轨道属于什么文本类型。','isshow':true},
					{'attr':'label','value':'label','desc':'轨道的标签或标题。','isshow':true},
					{'attr':'src','value':'	url','desc':'轨道的 URL。','isshow':true},
					{'attr':'srclang','value':'language_code','desc':'轨道的语言，若 kind 属性值是 "subtitles"，则该属性必需的。','isshow':true}
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


