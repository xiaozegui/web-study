<template>
	<el-card>
		<h4>HTML &lt;form&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<code-card :mytextarea='form_text1' uniquename='form1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;form&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;form&gt;  标签用于为用户输入创建 HTML 表单。</p>
		<p>表单能够包含 input 元素，比如文本字段、复选框、单选框、提交按钮等等。</p>
		<p>表单还可以包含 menus、textarea、fieldset、legend 和 label 元素。</p>
		<p>表单用于向服务器传输数据。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>注释：form 元素是块级元素，其前后会产生折行。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="form_text2" style="width: 100%" :stripe="true" :border="true">
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
			<p><strong>说明</strong></p>
			<p>enctype 属性可能的值：</p>
			<ul>
				<li style="font-size: 14px;margin: 5px 0px;">application/x-www-form-urlencoded</li>
				<li style="font-size: 14px;margin: 5px 0px;">multipart/form-data</li>
				<li style="font-size: 14px;margin: 5px 0px;">text/plain</li>
			</ul>
		</el-table>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;form&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;form&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>此例演示如何从表单发送电子邮件。</p>
		<code-card :mytextarea='form_text3' uniquename='form3'></code-card>
		<p>此表单包含两个单选框和一个确认按钮。</p>
		<code-card :mytextarea='form_text4' uniquename='form4'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				form_text1:'<!DOCTYPE html>\n<html>\n<body>\n\n<form action="/static/codeview.html">\nFirst name:<br>\n<input type="text" name="firstname" value="Mickey">\n<br>\nLast name:<br>\n<input type="text" name="lastname" value="Mouse">\n<br><br>\n<input type="submit" value="Submit">\n</form> \n\n<p>如果您点击提交，表单数据会被发送到名为 codeview.html 的页面。</p>\n\n</body>\n</html>\n',
				form_text2:[
					{'attr':'accept','value':'MIME_type','desc':'HTML 5 中不支持。','isshow':false},
					{'attr':'accept-charset','value':'charset_list','desc':'规定服务器可处理的表单数据字符集。','isshow':false},
					{'attr':'action','value':'URL','desc':'规定当提交表单时向何处发送表单数据','isshow':false},
					{'attr':'autocomplete','value':'on off','desc':'规定是否启用表单的自动完成功能','isshow':true},
					{'attr':'enctype','value':'见说明','desc':'规定在发送表单数据之前如何对其进行编码','isshow':false},
					{'attr':'method','value':'get post','desc':'规定用于发送 form-data 的 HTTP 方法','isshow':false},
					{'attr':'name','value':'form_name','desc':'规定表单的名称','isshow':false},
					{'attr':'novalidate','value':'novalidate','desc':'如果使用该属性，则提交表单时不进行验证','isshow':true},
					{'attr':'target','value':'_blank _self _parent _top framename','desc':'规定在何处打开 action URL','isshow':false}
				],
				form_text3:'<html>\n\n<body>\n<form action="MAILTO:someone@w3school.com.cn" method="post" enctype="text/plain">\n\n<h3>这个表单会把电子邮件发送到 W3School。</h3>\n姓名：<br />\n<input type="text" name="name" value="yourname" size="20">\n<br />\n电邮：<br />\n<input type="text" name="mail" value="yourmail" size="20">\n<br />\n内容：<br />\n<input type="text" name="comment" value="yourcomment" size="40">\n<br /><br />\n<input type="submit" value="发送">\n<input type="reset" value="重置">\n\n</form>\n</body>\n</html>\n',
				form_text4:'<!DOCTYPE html>\n<html>\n<body>\n\n<form>\n<input type="radio" name="sex" value="male" checked>Male\n<br>\n<input type="radio" name="sex" value="female">Female\n</form> \n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


