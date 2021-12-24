<template>
	<el-card>
		<h4>Unicode 联盟</h4>
		<p>Unicode 联盟开发了 Unicode 标准。他们的目标是用标准的 Unicode 转换格式（UTF）替换现有的字符集。</p>
		<p>Unicode 标准已经成功实现，并且以 HTML、XML、Java、JavaScript、电子邮件、ASP、PHP 等实现。在许多操作系统和所有现代浏览器中也支持 Unicode 标准。</p>
		<p>Unicode 联盟与领先的标准开发组织（如 ISO、W3C 和 ECMA）开展了合作。</p>
		<el-divider></el-divider>
		<h4>Unicode 字符集</h4>
		<p>Unicode 可以通过不同的字符集来实现。最常用的编码是 UTF-8 和 UTF-16：</p>
		<table class="el-table">
			<tbody>
				<tr>
					<th style="width:15%;">字符集</th>
					<th>描述</th>
				</tr>
				<tr>
					<td>UTF-8</td>
					<td>UTF8 中的字符长度可以是 1 到 4 个字节。 UTF-8 可以代表 Unicode 标准中的任何字符。 UTF-8 向后兼容ASCII。 UTF-8 是电子邮件和网页的首选编码。</td>
				</tr>
				<tr>
					<td>UTF-16</td>
					<td>16 位 Unicode 转换格式是 Unicode 的可变长度字符编码，能够编码整个 Unicode 编码。 UTF-16 用于主要的操作系统和环境，如 Microsoft Windows、Java 和 .NET。</td>
				</tr>
			</tbody>
		</table>
		<p>提示：Unicode 的前 128 个字符（与 ASCII 一一对应）使用与 ASCII 相同的二进制值的单个八位字节进行编码，使得有效的 ASCII 文本使用有效的 UTF-8 编码 Unicode。</p>
		<p>HTML 4 支持 UTF-8。 HTML 5 同时支持 UTF-8 和 UTF-16！</p>
		<el-divider></el-divider>
		<h4>HTML5 标准：Unicode UTF-8</h4>
		<p>由于 ISO-8859 中的字符集大小有限，在多语言环境中不兼容，因此 Unicode 联盟制定了 Unicode 标准。</p>
		<p>Unicode 标准涵盖了（几乎）世界上所有的字符、标点和符号。</p>
		<p>Unicode 支持独立于平台和语言的文本处理、存储和传输。</p>
		<p>HTML-5 中的默认字符编码是 UTF-8。</p>
		<p>如果 HTML5 网页使用与 UTF-8 不同的字符集，则应在 &lt;meta&gt; 标记中指定它，如下所示：</p>
		<el-input type="textarea" :autosize="istrue" style="width: 60%;" :readonly="istrue" v-model="text"></el-input>
		<el-divider></el-divider>
		<h4>Unicode 和 UTF-8 的区别</h4>
		<p>Unicode 是一个字符集。 UTF-8 属于编码。</p>
		<p>Unicode 是具有唯一十进制数字（代码点）的字符列表。 A = 65，B = 66，C = 67，....</p>
		<p>这个十进制数字表示字符串“hello”：104 101 108 108 111</p>
		<p>编码指的是如何将这些数字转换成存储在计算机中的二进制数字：</p>
		<p>UTF-8 编码将像这样存储“hello”（二进制）：01101000 01100101 01101100 01101100 01101111</p>
		<p>编码将数字转换为二进制。字符集将字符转换为数字。</p>
		<el-divider></el-divider>
		<h4>HTML5 UTF-8 字符码</h4>
		<p>以下是 HTML5 支持的一些 UTF-8 字符代码列表：</p>
		<table class="el-table">
			<tbody>
				<tr>
					<th>字符码</th>
					<th>十进制</th>
					<th>十六进制</th>
				</tr>

				<tr>
					<td>C0 控制和基本拉丁语</td>
					<td>0-127</td>
					<td>0000-007F</td>
				</tr>

				<tr>
					<td>C1 控制和 Latin-1 补充</td>
					<td>128-255</td>
					<td>0080-00FF</td>
				</tr>

				<tr>
					<td>拉丁文扩展-A</td>
					<td>256-383</td>
					<td>0100-017F</td>
				</tr>

				<tr>
					<td>拉丁文扩展-B</td>
					<td>384-591</td>
					<td>0180-024F</td>
				</tr>

				<tr>
					<td>间距修饰符</td>
					<td>688-767</td>
					<td>02B0-02FF</td>
				</tr>

				<tr>
					<td>变音符号</td>
					<td>768-879</td>
					<td>0300-036F</td>
				</tr>

				<tr>
					<td>希腊和科普特</td>
					<td>880-1023</td>
					<td>0370-03FF</td>
				</tr>

				<tr>
					<td>西里尔文基本</td>
					<td>1024-1279</td>
					<td>0400-04FF</td>
				</tr>

				<tr>
					<td>西里尔文补充</td>
					<td>1280-1327</td>
					<td>0500-052F</td>
				</tr>

				<tr>
					<td>一般标点符号</td>
					<td>8192-8303</td>
					<td>2000-206F</td>
				</tr>

				<tr>
					<td>货币符号</td>
					<td>8352-8399</td>
					<td>20A0-20CF</td>
				</tr>

				<tr>
					<td>类字母符号</td>
					<td>8448-8527</td>
					<td>2100-214F</td>
				</tr>

				<tr>
					<td>箭头</td>
					<td>8592-8703</td>
					<td>2190-21FF</td>
				</tr>

				<tr>
					<td>数学运算符</td>
					<td>8704-8959</td>
					<td>2200-22FF</td>
				</tr>

				<tr>
					<td>框绘制</td>
					<td>9472-9599</td>
					<td>2500-257F</td>
				</tr>

				<tr>
					<td>块元素</td>
					<td>9600-9631</td>
					<td>2580-259F</td>
				</tr>

				<tr>
					<td>几何形状</td>
					<td>9632-9727</td>
					<td>25A0-25FF</td>
				</tr>

				<tr>
					<td>杂项符号</td>
					<td>9728-9983</td>
					<td>2600-26FF</td>
				</tr>

				<tr>
					<td>装饰符号</td>
					<td>9984-10175</td>
					<td>2700-27BF</td>
				</tr>
			</tbody>
		</table>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				istrue: true,
				text: '<meta charset="ISO-8859-1">'
			}
		}
	}
</script>

<style scoped="scoped">
	th {
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
	}
</style>
