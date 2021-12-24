<template>
	<el-card>
		<h4>HTML &lt;meter&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 meter 元素来度量给定范围（gauge）内的数据：</p>
		<code-card :mytextarea='meter_text1' uniquename='meter1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Firefox, Chrome, Opera 以及 Safari 6 支持&lt;meter&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;meter&gt; 标签定义已知范围或分数值内的标量测量。也被称为 gauge（尺度）</p>
		<p>例子：磁盘用量、查询结果的相关性，等等。</p>
		<p>注释：&lt;meter&gt; 标签不应用于指示进度（在进度条中）。如果标记进度条，请使用 &lt;progress&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;meter&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="meter_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;meter&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;meter&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				meter_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<p>显示度量值：</p> \n<meter value="3" min="0" max="10">3/10</meter><br> \n<meter value="0.6">60%</meter> \n \n<p><b>注释：</b>Internet Explorer 不支持 meter 标签。</p> \n \n</body> \n</html> \n',
				meter_text2:[
					{'attr':'form','value':'form_id','desc':'规定 <meter> 元素所属的一个或多个表单。','isshow':true},
					{'attr':'high','value':'number','desc':'规定被视作高的值的范围','isshow':true},
					{'attr':'low','value':'number','desc':'规定被视作低的值的范围','isshow':true},
					{'attr':'max','value':'number','desc':'规定范围的最大值','isshow':true},
					{'attr':'min','value':'number','desc':'规定范围的最小值','isshow':true},
					{'attr':'optimum','value':'number','desc':'规定度量的优化值','isshow':true},
					{'attr':'value','value':'number','desc':'必需。规定度量的当前值','isshow':true}
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


