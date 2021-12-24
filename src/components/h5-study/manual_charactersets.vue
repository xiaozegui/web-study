<template>
	<el-card>
		<h4>HTML 字符集</h4>
		<p>万维网早期使用的字符集是 ASCII。ASCII 支持 0-9 的数字，大写和小写英文字母表，以及一些特殊字符。</p>
		<el-link type="primary" href='/manual_ascii'>完整的 ASCII 参考手册</el-link>
		<p>由于很多国家使用的字符并不属于 ASCII，现代浏览器的默认字符集是 ISO-8859-1。</p>
		<el-link type="primary" href='/manual_iso'>完整的 ISO-8859-1 参考手册</el-link>
		<p>如果网页使用不同于 ISO-8859-1 的字符集，就应该在 <meta> 标签进行指定。</p>
		<el-divider></el-divider>
		<h4>Unicode 标准</h4>
		<p>由于上面列出的字符集都有容量限制，而且不兼容多语言环境，Unicode 联盟开发了 Unicode 标准。</p>
		<p>Unicode 标准涵盖了世界上的所有字符、标点和符号。</p>
		<p>不论是何种平台、程序或语言，Unicode 都能够进行文本数据的处理、存储和交换。</p>
		<el-divider></el-divider>
		<h4>Unicode 联盟</h4>
		<p>Unicode 联盟开发了 Unicode 标准。他们的目标是用标准的 Unicode 转换格式 (UTF) 来取代现有的字符集。</p>
		<p>Unicode 标准已经获得了成功，在 XML、Java、ECMAScript (JavaScript)、LDAP、CORBA 3.0、WML 中，Unicode 已经得到了实现。在许多操作系统以及所有的现代浏览器中，Unicode 同样得到了支持。</p>
		<p>Unicode 联盟与领导性的标准发展组织进行合作，比如 ISO、W3C 以及 ECMA。</p>
		<p>Unicode 可以被不同的字符集兼容。最常用的编码方式是 UTF-8 和 UTF-16：</p>
		<p style="color: #409EFF;">UTF-8</p>
		<p>UTF8 中的字符可以是 1-4 个字节长。UTF-8 可以表示 Unicode 标准中的任意字符。UTF-8 向后兼容 ASCII。UTF-8 是网页和电子邮件的首选编码。</p>
		<p style="color: #409EFF;">UTF-16</p>
		<p>16 比特的 Unicode 转换格式是一种 Unicode 可变字符编码，能够对全部 Unicode 指令表进行编码。UTF-16 主要被用于操作系统和环境中，比如微软的 Windows 2000/XP/2003/Vista/CE 以及 Java 和 .NET 字节代码环境。</p>
		<p><strong>提示</strong>：最前面的 256 个 Unicode 字符集字符对应于 256 个 ISO-8859-1 字符。</p>
		<p><strong>提示</strong>：所有 HTML 4 处理器均已支持 UTF-8，而所有 XHTML 和 XML 处理器支持 UTF-8 和 UTF-16。</p>
	</el-card>
</template>

<script>
</script>

<style scoped="scoped">
</style>
