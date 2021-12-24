<template>
	<el-card>
		<h4>HTML5 的新的表单元素：</h4>
		<p>HTML5 拥有若干涉及表单的元素和属性。</p>
		<p>本章介绍以下新的表单元素：</p>
		<ul>
			<li v-for="item1 in newelelement" style="font-size: 14px;margin: 5px 0px;">{{item1}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>datalist 元素</h4>
		<p>datalist 元素规定输入域的选项列表。</p>
		<p>列表是通过 datalist 内的 option 元素创建的。</p>
		<p>如需把 datalist 绑定到输入域，请用输入域的 list 属性引用 datalist 的 id：</p>
		<code-card :mytextarea="formelementtext1" uniquename="formelementtext1"></code-card>
		<p><strong>提示</strong>：option 元素永远都要设置 value 属性。</p>
		<el-divider></el-divider>
		<h4>keygen 元素</h4>
		<p>keygen 元素的作用是提供一种验证用户的可靠方法。</p>
		<p>keygen 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键，一个是私钥，一个公钥。</p>
		<p>私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。</p>
		<p>目前，浏览器对此元素的糟糕的支持度不足以使其成为一种有用的安全标准。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formelementtext2" uniquename="formelementtext2"></code-card>
		<el-divider></el-divider>
		<h4>output 元素</h4>
		<p>output 元素用于不同类型的输出，比如计算或脚本输出：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="formelementtext3" uniquename="formelementtext3"></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default{
		data(){
			return{
				istrue:true,
				newelelement:[
					'datalist',
					'keygen',
					'output'
				],
				formelementtext1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nWebpage: <input type="url" list="url_list" name="link" />\n<datalist id="url_list">\n	<option label="W3School" value="http://www.w3school.com.cn" />\n	<option label="Google" value="http://www.google.com" />\n	<option label="Microsoft" value="http://www.microsoft.com" />\n</datalist>\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				formelementtext2:'<!DOCTYPE html>\n<html>\n<head> \n<meta charset="utf-8"> \n<title>菜鸟教程(runoob.com)</title> \n</head>\n<body>\n\n<form action="static/codeview.html" method="get">\n  用户名: <input type="text" name="usr_name">\n  加密: <keygen name="security">\n  <input type="submit">\n</form>\n\n<p><strong>注意:</strong> Internet Explorer 不支持 keygen 标签。</p>\n\n</body>\n</html>\n',
				formelementtext3:'<!DOCTYPE html>\n<html>\n<head> \n<meta charset="utf-8"> \n</head>\n<body>\n\n<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0\n<input type="range" id="a" value="50">100\n+<input type="number" id="b" value="50">\n=<output name="x" for="a b"></output>\n</form>\n\n<p><strong>注意:</strong> Edge 12及更早 IE 版本的浏览器不支持 output 元素。</p>\n\n</body>\n</html>\n'
			}
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
