<template>
	<el-card>
		<h4>HTML &lt;textarea&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='textarea_text1' uniquename='textarea1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;textarea&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;textarea&gt; 标签定义多行的文本输入控件。</p>
		<p>文本区中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier）。</p>
		<p>可以通过 cols 和 rows 属性来规定 textarea 的尺寸，不过更好的办法是使用 CSS 的 height 和 width 属性。</p>
		<p>注释：在文本输入区内的文本行间，用 "%OD%OA" （回车/换行）进行分隔。</p>
		<p><mark>提示：可以通过 &lt;textarea&gt; 标签的 wrap 属性设置文本输入区内的换行模式</mark></p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="textarea_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;textarea&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;textarea&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				textarea_text1:'<textarea rows="10" cols="50">\n在HTML5 Study，你可以找到你所需要的所有的网站建设教程。\n</textarea>\n',
				textarea_text2:[
					{'attr':'autofocus','value':'autofocus','desc':'规定在页面加载后文本区域自动获得焦点','isshow':true},
					{'attr':'cols','value':'number','desc':'规定文本区内的可见宽度','isshow':false},
					{'attr':'disabled','value':'disabled','desc':'规定禁用该文本区','isshow':false},
					{'attr':'form','value':'form_id','desc':'规定文本区域所属的一个或多个表单。','isshow':true},
					{'attr':'maxlength','value':'number','desc':'规定文本区域的最大字符数','isshow':true},
					{'attr':'name','value':'name_of_textarea','desc':'规定文本区的名称','isshow':false},
					{'attr':'placeholder','value':'text','desc':'规定描述文本区域预期值的简短提示','isshow':true},
					{'attr':'readonly','value':'readonly','desc':'规定文本区为只读','isshow':false},
					{'attr':'required','value':'required','desc':'规定文本区域是必填的','isshow':true},
					{'attr':'rows','value':'number','desc':'规定文本区内的可见行数','isshow':false},
					{'attr':'wrap','value':'hard soft','desc':'规定当在表单中提交时，文本区域中的文本如何换行','isshow':true}
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


