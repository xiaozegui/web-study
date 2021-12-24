<template>
	<el-card>
		<h4>HTML5 的新的表单属性</h4>
		<p>本章讲解涉及 &lt;form&gt; 和 &lt;input&gt; 元素的新属性。</p>
		<p><strong>新的 form 属性：</strong></p>
		<ul>
			<li v-for="item1 in formattr" style="font-size: 14px;margin: 5px 0px;">{{item1}}</li>
		</ul>
		<p><strong>新的 input 属性：</strong></p>
		<ul>
			<li v-for="item2 in inputattr" style="font-size: 14px;margin: 5px 0px;">{{item2}}</li>
		</ul>
		<el-divider></el-divider>
		<h3>autocomplete 属性</h3>
		<p>autocomplete 属性规定 form 或 input 域应该拥有自动完成功能。</p>
		<p><strong>注释</strong>：autocomplete 适用于 &lt;form&gt; 标签，以及以下类型的 &lt;input&gt; 标签：text, search, url, telephone, email, password, datepickers, range 以及 color。</p>
		<code-card :mytextarea="formattributestext1" uniquename="formattributes1"></code-card>
		<p><strong>注释</strong>：在某些浏览器中，您可能需要启用自动完成功能，以使该属性生效</p>
		<el-divider></el-divider>
		<h4>autofocus 属性</h4>
		<p>autofocus 属性规定在页面加载时，域自动地获得焦点。</p>
		<p>注释：autofocus 属性适用于所有 &lt;input&gt; 标签的类型。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext2" uniquename="formattributes2"></code-card>
		<el-divider></el-divider>
		<h4>form 属性</h4>
		<p>form 属性规定输入域所属的一个或多个表单</p>
		<p><strong>注释</strong>：form 属性适用于所有 &lt;input&gt; 标签的类型。</p>
		<p>form 属性必须引用所属表单的 id：</p>
		<code-card :mytextarea="formattributestext3" uniquename="formattributes3"></code-card>
		<p><strong>注释</strong>：如需引用一个以上的表单，请使用空格分隔的列表。</p>
		<el-divider></el-divider>
		<h4>表单重写属性</h4>
		<p>表单重写属性（form override attributes）允许您重写 form 元素的某些属性设定。</p>
		<p>表单重写属性有：</p>
		<ul>
			<li v-for="item3 in formreattr" style="font-size: 14px;margin: 5px 0px;">{{item3}}</li>
		</ul>
		<p><strong>注释</strong>：表单重写属性适用于以下类型的 &lt;input&gt; 标签：submit 和 image。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext4" uniquename="formattributes4"></code-card>
		<p><strong>注释</strong>：这些属性对于创建不同的提交按钮很有帮助。</p>
		<el-divider></el-divider>
		<h4>height 和 width 属性</h4>
		<p>height 和 width 属性规定用于 image 类型的 input 标签的图像高度和宽度。</p>
		<p><strong>注释</strong>：height 和 width 属性只适用于 image 类型的 <input> 标签。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext5" uniquename="formattributes5"></code-card>
		<el-divider></el-divider>
		<h4>list 属性</h4>
		<p>list 属性规定输入域的 datalist。datalist 是输入域的选项列表。</p>
		<p><strong>注释</strong>：list 属性适用于以下类型的 &lt;input&gt; 标签：text, search, url, telephone, email, date pickers, number, range 以及 color。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext6" uniquename="formattributes6"></code-card>
		<el-divider></el-divider>
		<h4>min、max 和 step 属性</h4>
		<p>min、max 和 step 属性用于为包含数字或日期的 input 类型规定限定（约束）。</p>
		<p>max 属性规定输入域所允许的最大值</p>
		<p>min 属性规定输入域所允许的最小值。</p>
		<p>step 属性为输入域规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等）。</p>
		<p>注释：min、max 和 step 属性适用于以下类型的 &lt;input&gt; 标签：date pickers、number 以及 range。下面的例子显示一个数字域，该域接受介于 0 到 10 之间的值，且步进为 3（即合法的值为 0、3、6 和 9）：</p>
		<code-card :mytextarea="formattributestext7" uniquename="formattributes7"></code-card>
		<el-divider></el-divider>
		<h4>multiple 属性</h4>
		<p>multiple 属性规定输入域中可选择多个值。</p>
		<p><strong>注释</strong>：multiple 属性适用于以下类型的 &lt;input&gt; 标签：email 和 file。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext8" uniquename="formattributes8"></code-card>
		<el-divider></el-divider>
		<h4>novalidate 属性</h4>
		<p>novalidate 属性规定在提交表单时不应该验证 form 或 input 域。</p>
		<p>注释：novalidate 属性适用于 &lt;form&gt; 以及以下类型的 &lt;input&gt; 标签：text, search, url, telephone, email, password, date pickers, range 以及 color.</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext9" uniquename="formattributes9"></code-card>
		<el-divider></el-divider>
		<h4>pattern 属性</h4>
		<p>pattern 属性规定用于验证 input 域的模式（pattern）。</p>
		<p>模式（pattern） 是正则表达式。</p>
		<p><strong>注释</strong>：pattern 属性适用于以下类型的 &lt;input&gt; 标签：text, search, url, telephone, email 以及 password。下面的例子显示了一个只能包含三个字母的文本域（不含数字及特殊字符）：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext10" uniquename="formattributes10"></code-card>
		<el-divider></el-divider>
		<h4>placeholder 属性</h4>
		<p>placeholder 属性提供一种提示（hint），描述输入域所期待的值。</p>
		<p><strong>注释</strong>：placeholder 属性适用于以下类型的&lt;input&gt; 标签：text, search, url, telephone, email 以及 password。提示（hint）会在输入域为空时显示出现，会在输入域获得焦点时消失：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext11" uniquename="formattributes11"></code-card>
		<el-divider></el-divider>
		<h4>required 属性</h4>
		<p>required 属性规定必须在提交之前填写输入域（不能为空）。</p>
		<p><strong>注释</strong>：required 属性适用于以下类型的 &lt;input&gt; 标签：text, search, url, telephone, email, password, date pickers, number, checkbox, radio 以及 file。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formattributestext12" uniquename="formattributes12"></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default{
		data(){
			return{
				istrue:true,
				formattr:[
					'autocomplete','novalidate'
				],
				inputattr:[
					'autocomplete',
					'autofocus',
					'form',
					'form overrides (formaction, formenctype, formmethod, formnovalidate, formtarget)',
					'height 和 width',
					'list','min, max 和 step','multiple',
					'pattern (regexp)','placeholder','required'
				],
				formattributestext1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get" autocomplete="on">\nFirst name:<input type="text" name="fname" /><br />\nLast name: <input type="text" name="lname" /><br />\nE-mail: <input type="email" name="email" autocomplete="off" /><br />\n<input type="submit" />\n</form>\n\n<p>请填写并提交此表单，然后重载页面，来查看自动完成功能是如何工作的。</p>\n<p>请注意，表单的自动完成功能是打开的，而 e-mail 域是关闭的。</p>\n\n</body>\n</html>\n',
				formattributestext2:'<!DOCTYPE html>\n<html>\n<head> \n<meta charset="utf-8"> \n</head>\n<body>\n\n<form action="static/codeview.html">\n  First name: <input type="text" name="fname" autofocus><br>\n  Last name: <input type="text" name="lname"><br>\n  <input type="submit">\n</form>\n<p><strong>注意：</strong> Internet Explorer 9及更早 IE 版本不支持 input 标签的 autofocus 属性。</p>\n\n</body>\n</html>\n',
				formattributestext3:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get" id="user_form1">\nFirst name:<input type="text" name="fname" />\n<input type="submit" />\n</form>\n\n<p>下面的输入域在 form 元素之外，但仍然是表单的一部分。</p>\n\nLast name: <input type="text" name="lname" form="user_form" />\n\n</body>\n</html>\n',
				formattributestext4:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get" id="user_form">\nE-mail: <input type="email" name="userid" /><br />\n<input type="submit" value="Submit" /><br />\n<input type="submit" formaction="static/codeview.html" value="Submit as admin" /><br />\n<input type="submit" formnovalidate="true" value="Submit without validation" /><br />\n</form>\n\n</body>\n</html>\n',
				formattributestext5:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nUser name: <input type="text" name="user_name" /><br />\n<input type="image" src="static/video/eg_submit.jpg" width="99" height="99" />\n</form>\n\n</body>\n</html>\n',
				formattributestext6:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nWebpage: <input type="url" list="url_list" name="link" />\n<datalist id="url_list">\n	<option label="W3School" value="http://www.w3school.com.cn" />\n	<option label="Google" value="http://www.google.com" />\n	<option label="Microsoft" value="http://www.microsoft.com" />\n</datalist>\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				formattributestext7:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nPoints: <input type="number" name="points" min="0" max="10" step="3"/>\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				formattributestext8:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nSelect images: <input type="file" name="img" multiple="multiple" />\n<input type="submit" />\n</form>\n\n<p>当您浏览文件时，请试着选择多个文件。</p>\n\n</body>\n</html>\n',
				formattributestext9:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get" novalidate="novalidate">\nE-mail: <input type="email" name="user_email" />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				formattributestext10:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nCountry code: <input type="text" name="country_code" pattern="[A-z]{3}"\ntitle="Three letter country code" />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				formattributestext11:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\n<input type="search" name="user_search" placeholder="HTML5 Study" />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				formattributestext12:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nName: <input type="text" name="usr_name" required="required" />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				formreattr:[
					'formaction - 重写表单的 action 属性',
					'formenctype - 重写表单的 enctype 属性',
					'formmethod - 重写表单的 method 属性',
					'formnovalidate - 重写表单的 novalidate 属性',
					'formtarget - 重写表单的 target 属性'
				]
			}
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
