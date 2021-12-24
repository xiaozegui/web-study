<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>规定 &lt;div&gt; 元素的上下文菜单。上下文菜单会在用户右键点击元素时出现：</p>
		<code-card :mytextarea="contentmenutext1" uniquename='contentmenu1'></code-card>
		<p>浏览器支持:目前只有 Firefox 支持 contextmenu 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>contextmenu 属性规定元素的上下文菜单。当用户右键点击元素时，会出现上下文菜单。</p>
		<p>contextmenu 属性的值是要打开的 &lt;menu&gt; 元素的 id。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>contextmenu 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width:60%" v-model="contentmenutext2"></el-input>
		<h4>属性值</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th>值</th>
					<th>描述</th>
				</tr>
				<tr>
					<td><i>menu_id</i></td>
					<td>要打开的 &lt;menu&gt; 元素的 id。</td>
				</tr>
			</tbody>
		</table>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				contentmenutext1: '<!DOCTYPE html>\n<html>\n<body>\n\n<p contextmenu="supermenu">本段落拥有一个名为 "supermenu" 的上下文菜单。这个菜单会在用户右键单击该段落时出现。</p>  \n\n<menu id="supermenu">\n  <command label="Step 1: Write Tutorial" onclick="doSomething()">\n  <command label="Step 2: Edit Tutorial" onclick="doSomethingElse()">\n</menu>\n\n<p><b>注释：</b>目前只有 Firefox 支持 contextmenu 属性。</p>\n\n</body>\n</html>\n',
				contentmenutext2: '<element contextmenu="menu_id">'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	th {
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
		border-left: 1px #EBEEF5 solid;
	}
	
	td {
		border-left: 1px #EBEEF5 solid;
	}
</style>
