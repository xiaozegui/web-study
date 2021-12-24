<template>
	<el-card>
		<h4>HTML &lt;blockquote&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>标记长的引用：</p>
		<code-card :mytextarea='blockquote_text1' uniquename='blockquote1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流的浏览器均支持 &lt;blockquote&gt; 标签。</p>
		<p><mark>注释：没有浏览器能够正确地显示 cite 属性。</mark></p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;blockquote&gt; 标签定义块引用。</p>
		<p>&lt;blockquote&gt; 与 &lt;/blockquote&gt; 之间的所有文本都会从常规文本中分离出来，经常会在左、右两边进行缩进（增加外边距），而且有时会使用斜体。也就是说，块引用拥有它们自己的空间。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p><mark>提示：请使用 q 元素来标记短的引用。</mark></p>
		<p>注释：如需把页面作为 strict XHTML 进行验证，那么 &lt;blockquote&gt; 元素必须包含块级元素，比如这样：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="blockquote_text3"></el-input>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="blockquote_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<p>&lt;blockquote&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;blockquote&gt;标签支持<el-link type='primary' href='/event'>事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				blockquote_text1:'<html>\n<body>\n\nHere comes a long quotation:\n\n<blockquote>\nThis is a long quotation. This is a long quotation. This is a long quotation. This is a long quotation. This is a long quotation.\n</blockquote>\n\n请注意，浏览器在 blockquote 元素前后添加了换行，并增加了外边距。\n\n</body>\n</html>\n',
				blockquote_text2:[
					{'attr':'cite','value':'URL','desc':'规定引用的来源。'}
				],
				blockquote_text3:'<blockquote>\n<p>here is a long quotation here is a long quotation</p>\n</blockquote>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>

