<template>
	<el-card>
		<h4>HTML &lt;input&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>一个简单的 HTML 表单，包含两个文本输入框和一个提交按钮：</p>
		<code-card :mytextarea='input_text1' uniquename='input1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;input&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;input&gt; 标签用于搜集用户信息。</p>
		<p>根据不同的 type 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、复选框、掩码后的文本控件、单选按钮、按钮等等。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;input&gt; 标签没有结束标签。</p>
		<p>在 XHTML 中，&lt;input&gt; 标签必须被正确地关闭</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p><mark>提示：请使用 label 元素为某个表单控件定义标签。</mark></p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="input_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;input&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;input&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示如何在 HTML 页面创建文本域。用户可以在文本域写入文本。</p>
		<code-card :mytextarea='input_text3' uniquename='input3'></code-card>
		<p>本例演示如何创建 HTML 的密码域</p>
		<code-card :mytextarea='input_text4' uniquename='input4'></code-card>
		<p>本例演示如何在 HTML 页中创建文本框。用户可以选中或取消选取复选框。</p>
		<code-card :mytextarea='input_text5' uniquename='input5'></code-card>
		<p>本例演示如何在 HTML 中创建单选按钮。</p>
		<code-card :mytextarea='input_text6' uniquename='input6'></code-card>
		<p>本例演示如何创建一个文本域（多行文本输入控制）。用户可以在文本域中写入文本。在文本域中，可写入的字符字数不受限制。</p>
		<code-card :mytextarea='input_text7' uniquename='input7'></code-card>
		<p>本例演示如何创建按钮。你可以对按钮上的文字进行自定义</p>
		<code-card :mytextarea='input_text8' uniquename='input8'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				input_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<form action="static/codeview.html"> \nFirst name:<br> \n<input type="text" name="firstname" value="Mickey"> \n<br> \nLast name:<br> \n<input type="text" name="lastname" value="Mouse"> \n<br><br> \n<input type="submit" value="Submit"> \n</form>  \n \n<p>如果您点击提交，表单数据会被发送到名为 demo_form.asp 的页面。</p> \n \n</body> \n</html> \n',
				input_text2:[
					{'attr':'accept','value':'mime_type','desc':'规定通过文件上传来提交的文件的类型。','isshow':false},
					{'attr':'align','value':'left right top middle bottom','desc':'规定图像输入的对齐方式。','isshow':false},
					{'attr':'alt','value':'text','desc':'定义图像输入的替代文本','isshow':false},
					{'attr':'autocomplete','value':'on off','desc':'规定是否使用输入字段的自动完成功能','isshow':false},
					{'attr':'autofocus','value':'autofocus','desc':'规定输入字段在页面加载时是否获得焦点','isshow':false},
					{'attr':'checked','value':'checked','desc':'规定此 input 元素首次加载时应当被选中。','isshow':false},
					{'attr':'disabled','value':'disabled','desc':'当 input 元素加载时禁用此元素','isshow':false},
					{'attr':'form','value':'formname','desc':'规定输入字段所属的一个或多个表单','isshow':false},
					{'attr':'formaction','value':'URL','desc':'覆盖表单的 action 属性。','isshow':false},
					{'attr':'formenctype','value':'见注释','desc':'覆盖表单的 enctype 属性','isshow':false},
					{'attr':'formmethod','value':'get post','desc':'覆盖表单的 method 属性','isshow':false},
					{'attr':'formnovalidate','value':'formnovalidate','desc':'覆盖表单的 novalidate 属性','isshow':false},
					{'attr':'formtarget','value':'_blank _self _parent _topframename','desc':'覆盖表单的 target 属性','isshow':false},
					{'attr':'height','value':'pixels','desc':'定义 input 字段的高度。（适用于 type="image"）','isshow':false},
					{'attr':'list','value':'datalist-id','desc':'引用包含输入字段的预定义选项的 datalist ','isshow':false},
					{'attr':'max','value':'number date','desc':'规定输入字段的最大值。','isshow':false},
					{'attr':'maxlength','value':'number','desc':'规定输入字段中的字符的最大长度','isshow':false},
					{'attr':'min','value':'number date','desc':'规定输入字段的最小值','isshow':false},
					{'attr':'multiple','value':'multiple','desc':'如果使用该属性，则允许一个以上的值。','isshow':false},
					{'attr':'name','value':'field_name','desc':'定义 input 元素的名称','isshow':false},
					{'attr':'pattern','value':'regexp_pattern','desc':'规定输入字段的值的模式或格式','isshow':false},
					{'attr':'placeholder','value':'text','desc':'规定帮助用户填写输入字段的提示','isshow':false},
					{'attr':'readonly','value':'readonly','desc':'规定输入字段为只读。','isshow':false},
					{'attr':'required','value':'required','desc':'指示输入字段的值是必需的','isshow':false},
					{'attr':'size','value':'number_of_char','desc':'定义输入字段的宽度','isshow':false},
					{'attr':'src','value':'URL','desc':'定义以提交按钮形式显示的图像的 URL。','isshow':false},
					{'attr':'step','value':'number','desc':'规定输入字的的合法数字间隔','isshow':false},
					{'attr':'type','value':'button check box file hidden image password radio reset submit text','desc':'规定 input 元素的类型','isshow':false},
					{'attr':'value','value':'value','desc':'规定 input 元素的值','isshow':false},
					{'attr':'width','value':'pixels %','desc':'定义 input 字段的宽度。（适用于 type="image"）','isshow':false}
				],
				input_text3:'<html> \n \n<body> \n \n<form> \n名： \n<input type="text" name="firstname"> \n<br /> \n姓： \n<input type="text" name="lastname"> \n</form> \n \n</body> \n</html> \n',
				input_text4:'<html> \n \n<body> \n \n<form> \n用户： \n<input type="text" name="user"> \n<br /> \n密码： \n<input type="password" name="password"> \n</form> \n<p> \n请注意，当您在密码域中键入字符时，浏览器将使用项目符号来代替这些字符。 \n</p> \n</body> \n</html> \n',
				input_text5:'<html> \n \n<body> \n \n<form> \n我喜欢自行车： \n<input type="checkbox" name="Bike"> \n<br /> \n我喜欢汽车： \n<input type="checkbox" name="Car"> \n</form> \n \n</body> \n</html> \n',
				input_text6:'<html> \n \n<body> \n \n<form> \n男性： \n<input type="radio" checked="checked" name="Sex" value="male" /> \n<br /> \n女性： \n<input type="radio" name="Sex" value="female" /> \n</form> \n \n<p>当用户点击一个单选按钮时，该按钮会变为选中状态，其他所有按钮会变为非选中状态。</p> \n \n</body> \n</html> \n',
				input_text7:'<html> \n<body> \n \n<p> \nThis example cannot be edited \nbecause our editor uses a textarea \nfor input, \nand your browser does not allow \na textarea inside a textarea. \n</p> \n \n<textarea rows="10" cols="30"> \nThe cat was playing in the garden. \n',
				input_text8:'<html> \n \n<body> \n \n<form> \n<input type="button" value="Hello world!"> \n</form> \n \n</body> \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


