<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>在 HTML 文档中使用 class 属性：</p>
		<code-card :mytextarea="classtext1" uniquename='class1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>class 属性规定元素的类名（classname）。</p>
		<p>class 属性大多数时候用于指向样式表中的类（class）。不过，也可以利用它通过 JavaScript 来改变带有指定 class 的 HTML 元素。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>注释：class 属性不能在以下 HTML 元素中使用：base, head, html, meta, param, script, style 以及 title。</p>
		<p>提示：可以给 HTML 元素赋予多个 class，例如：&lt;span class="left_menu important"&gt;。这么做可以把若干个 CSS 类合并到一个 HTML 元素。</p>
		<p>提示：类名不能以数字开头！只有 Internet Explorer 支持这种做法。</p>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>W3C: "W3C" 列指示 W3C 的 HTML/XHTML 推荐标准中是否定义了该属性。</p>
		<table class="el-table">
			<tbody>
				<tr>
					<th>IE</th>
					<th>Firefox</th>
					<th>Opera</th>
					<th>Safari</th>
					<th>W3C</th>
				</tr>

				<tr>
					<td>YES</td>
					<td>YES</td>
					<td>YES</td>
					<td>YES</td>
					<td>YES</td>
				</tr>
			</tbody>
		</table>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="istrue" :readonly="istrue" style="width: 60%" v-model="classtext2"></el-input>
		<h4>属性值</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th>值</th>
					<th>描述</th>
				</tr>

				<tr>
					<td><i>classname</i></td>
					<td>规定元素的类的名称。如需为一个元素规定多个类，用空格分隔类名。</td>
				</tr>
			</tbody>
		</table>
		<el-divider></el-divider>
		<h4>实例</h4>
		<code-card :mytextarea="classtext3" uniquename='class3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				classtext1: '<html>\n<head>\n<style type="text/css">\nh1.intro {color:blue;}\np.important {color:red;}\n</style>\n</head>\n\n<body>\n<h1 class="intro">Header 1</h1>\n<p>A paragraph.</p>\n<p class="important">请注意这个重要的段落。:)</p>\n</body>\n\n</html>\n',
				classtext2: '<element class="value">',
				classtext3:'<html>\n<head>\n<style type="text/css">\nh1.intro\n{\ncolor:blue;\ntext-align:center;\n}\n.important {background-color:yellow;}\n</style>\n</head>\n\n<body>\n<h1 class="intro important">Header 1</h1>\n<p>A paragraph.</p>\n</body>\n\n</html>\n'
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
