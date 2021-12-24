<template>
	<el-card>
		<h4>HTML &lt;time&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>如何定义时间和日期：</p>
		<code-card :mytextarea='time_text1' uniquename='time1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>&lt;time&gt; 标签不会在任何浏览器中呈现任何特殊效果。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;time&gt; 标签定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。</p>
		<p>该元素能够以机器可读的方式对日期和时间进行编码，这样，举例说，用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;time&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="time_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;time&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;time&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				time_text1:'<html>\n<body>\n\n<p>\n我们在每天早上 <time>9:00</time> 开始营业。\n</p>\n\n<p>\n我在 <time datetime="2010-02-14">情人节</time> 有个约会。\n</p>\n\n</body>\n</html>\n',
				time_text2:[
					{'attr':'datetime','value':'datetime','desc':'规定日期 / 时间。否则，由元素的内容给定日期 / 时间。','isshow':true},
					{'attr':'pubdate','value':'pubdate','desc':'指示 <time> 元素中的日期 / 时间是文档（或 <article> 元素）的发布日期','isshow':true}
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


