<template>
	<el-card>
		<h4>HTML &lt;disable&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>带有一个禁用输入字段的 HTML 表单：</p>
		<code-card :mytextarea="disable_text1" uniquename='disable1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>disabled 属性规定应该禁用 input 元素。</p>
		<p>被禁用的 input 元素既不可用，也不可点击。可以设置 disabled 属性，直到满足某些其他的条件为止（比如选择了一个复选框等等）。然后，就需要通过 JavaScript 来删除 disabled 值，将 input 元素的值切换为可用。</p>
		<p>注释：disabled 属性无法与 &lt;input type="hidden"&gt; 一起使用。</p>
		<ul>
		<li style="font-size: 14px;margin: 5px 0px;">网速太慢</li>
		<li style="font-size: 14px;margin: 5px 0px;">src 属性中的错误</li>
		<li style="font-size: 14px;margin: 5px 0px;">浏览器禁用图像</li>
		<li style="font-size: 14px;margin: 5px 0px;">用户使用的是屏幕阅读器</li>
		</ul>
		<p>&lt;img&gt; 标签的 disable 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。</p>
		<p>我们强烈推荐您在文档的每个图像中都使用这个属性。这样即使图像无法显示，用户还是可以看到关于丢失了什么东西的一些信息。而且对于残疾人来说，disable 属性通常是他们了解图像内容的唯一方式。</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p class="note"><span>注释：</span>disable 属性的值是一个最多可以包含 1024 个字符的字符串，其中包括空格和标点。这个字符串必须包含在引号中。这段 disable 文本中可以包含对特殊字符的实体引用，但它不允许包含其他类别的标记，尤其是不允许有任何样式标签。</p>
		<p class="note"><span>注释：</span>当用户把鼠标移动到 img 元素上时，Internet Explorer 会显示出 disable 属性的值。这种行为并不正确。所有其他的浏览器正在向规范靠拢，只要当图像无法显示时，才会显示出替代文本。</p>
		<p class="tip"><span>提示：</span>如果需要为图像创建工具提示，请使用 title 属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="disable_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<el-table :data="disable_text3" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					{{ scope.row.attr }}
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<br><br>
		<el-link type='primary' href="/input">HTML &lt;input&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				disable_text1: '<html>\n<body>\n\n<form action="static/codeview.html" method="get">\n  <p>First name: <input type="text" name="fname" /></p>\n  <p>Last name: <input type="text" name="lname" disabled="disabled" /></p>\n  <input type="submit" value="Submit" />\n</form>\n\n<p>请在提交按钮上单击，输入会发送到服务器上名为 "form_action.asp" 的页面。</p>\n\n</body>\n</html>\n',
				disable_text2: '<input disabled="value">',
				disable_text3:[
					{'attr':'disabled','desc':'禁用一个 input 元素。'}
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
