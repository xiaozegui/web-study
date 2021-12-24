<template>
	<el-card>
		<h4>HTML &lt;href&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>href 属性规定链接的目标：</p>
		<code-card :mytextarea="href_text1" uniquename='href1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;a&gt;标签的 href 属性用于指定超链接目标的 URL。</p>
		<p>href 属性的值可以是任何有效文档的相对或绝对 URL，包括片段标识符和 JavaScript 代码段。如果用户选择了 &lt;a&gt; 标签中的内容，那么浏览器会尝试检索并显示 href 属性指定的 URL
			所表示的文档，或者执行 JavaScript 表达式、方法和函数的列表</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p><mark>注意：&lt;a&gt; 标签中必须提供 href 属性或 name 属性。</mark></p>
		<el-divider></el-divider>
		<h4>制作文本链接</h4>
		<p>更复杂的锚还可以包含图像。下面这个 LOGO 是一个图像链接，点击该图像，可以返回 W3school 的首页：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="href_text3"></el-input>
		<p>上面的代码会为 W3School 的 LOGO 添加一个返回首页的超链接：</p>
		<p>大多数图形浏览器都会在作为锚的一部分的图像周围放置特殊的边框。通过在 &lt;img&gt; 标签中把图像的 border 属性设置为 0 可以删除超链接的边框。也可以使用 CSS 的边框属性来全局性地改变元素的边框样式。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="href_text2"></el-input>
		<el-divider></el-divider>
		<h4>属性值</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th>值</th>
					<th>描述</th>
				</tr>
				<tr>
					<td><i>URL</i></td>
					<td>超链接的 URL。可能的值：
						<ul class="listintable">
							<li>绝对 URL - 指向另一个站点（比如 href="http://www.example.com/index.htm"）</li>
							<li>相对 URL - 指向站点内的某个文件（href="index.htm"）</li>
							<li>锚 URL - 指向页面中的锚（href="#top"）</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
		<br>
		<el-link type='primary' href="/a">HTML &lt;a&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				href_text1: '<html>\n<body>\n\n<p>绝对链接：</p>\n\n<a href="http://127.0.0.1:8080/index">HTML5 Study</a>\n\n<p>相对链接：</p>\n\n<a href="/index">HTML5 Study</a>\n\n</body>\n</html>\n',
				href_text2: '<a href="value">',
				href_text3: '<a href="http://www.w3school.com.cn/index.html">\n<img src="/i/w3school_logo_white.gif" />\n</a>\n',
				href_text4: ''
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	th,td{
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
		border-left: 1px #EBEEF5 solid;
	}
</style>
