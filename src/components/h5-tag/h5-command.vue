<template>
	<el-card>
		<h4>HTML &lt;command&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>标记一个按钮：</p>
		<code-card :mytextarea='command_text1' uniquename='command1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>没有浏览器支持 &lt;command&gt; 标签。</p>
		<p>只有 Internet Explorer 9 （更早或更晚的版本都不支持）支持 &lt;command&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>command 元素表示用户能够调用的命令。</p>
		<p>&lt;command&gt; 标签可以定义命令按钮，比如单选按钮、复选框或按钮。</p>
		<p>只有当 command 元素位于 menu 元素内时，该元素才是可见的。否则不会显示这个元素，但是可以用它规定键盘快捷键。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;command&gt; 标签是 HTML 5 中的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class='el-icon-time'></i>HTML5 中的新属性。</p>
		<el-table :data="command_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow==true"></i></el-link>
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
		<p>&lt;command&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;command&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				command_text1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<menu>\n<command type="command">Click Me!</command>\n</menu>\n\n</body>\n</html>\n',
				command_text2:[
					{'attr':'checked','value':'checked','desc':'定义是否被选中。仅用于 radio 或 checkbox 类型','isshow':true},
					{'attr':'disabled','value':'disabled','desc':'定义 command 是否可用。','isshow':true},
					{'attr':'icon','value':'url','desc':'定义作为 command 来显示的图像的 url','isshow':true},
					{'attr':'label','value':'text','desc':'为 command 定义可见的 label。','isshow':true},
					{'attr':'radiogroup','value':'groupname','desc':'定义 command 所属的组名。仅在类型为 radio 时使用。','isshow':true},
					{'attr':'type','value':'checkbox command radio','desc':'定义该 command 的类型。默认是command','isshow':true}
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


