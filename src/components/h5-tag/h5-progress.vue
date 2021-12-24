<template>
	<el-card>
		<h4>HTML &lt;progress&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>正在进行的下载：</p>
		<code-card :mytextarea='progress_text1' uniquename='progress1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 10, Firefox, Opera, Chrome 以及 Safari 6 支持&lt;progress&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;progress&gt; 标签标示任务的进度（进程）</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;progress&gt; 标签是 HTML 5 的新标签。</p>
		<h4>提示和注释</h4>
		<p>提示：请结合 &lt;progress&gt; 标签与 JavaScript 一同使用，来显示任务的进度。</p>
		<p>注释：&lt;progress&gt; 标签不适合用来表示度量衡（例如，磁盘空间使用情况或查询结果）。如需表示度量衡，请使用 &lt;meter&gt; 标签代替。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="progress_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;progress&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;progress&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				progress_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n下载进度： \n<progress value="22" max="100"> \n</progress> \n \n<p><b>注释：</b>Internet Explorer 9 以及更早的版本不支持 <progress> 标签。</p> \n \n</body> \n</html> \n',
				progress_text2:[
					{'attr':'max','value':'number','desc':'规定任务一共需要多少工作','isshow':true},
					{'attr':'value','value':'number','desc':'规定已经完成多少任务','isshow':true}
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


