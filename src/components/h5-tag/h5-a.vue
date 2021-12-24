<template>
	<el-card>
		<h4>HTML &lt;a&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>指向 w3school 的超链接：</p>
		<code-card :mytextarea='a_text1' uniquename='a1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持&lt;a&gt;标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;a&gt; 标签定义超链接，用于从一张页面链接到另一张页面。</p>
		<p>&lt;a&gt; 元素最重要的属性是 href 属性，它指示链接的目标。</p>
		<p>在所有浏览器中，链接的默认外观是：</p>
		<ul style="font-size: 14px;">
			<li style="color: blue;text-decoration: underline;margin: 5px 0px;">未被访问的链接带有下划线而且是蓝色的</li>
			<li style="color: purple;text-decoration: underline;margin: 5px 0px;">已被访问的链接带有下划线而且是紫色的</li>
			<li style="color: red;text-decoration: underline;margin: 5px 0px;">活动链接带有下划线而且是红色的</li>
		</ul>
		<p style="color: #409EFF;">提示：您可以使用 CSS 伪类 向文本超链接添加复杂而多样的样式。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p><strong style="color: #409EFF;">提示：</strong>如果不使用 href 属性，则不可以使用如下属性：download, hreflang, media, rel, target 以及 type 属性。</p>
		<p><strong style="color: #409EFF;">提示：</strong>被链接页面通常显示在当前浏览器窗口中，除非您规定了另一个目标（target 属性）。</p>
		<p><strong style="color: #409EFF;">提示：</strong>请使用 CSS 来设置链接的样式。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>在 HTML 4.01 中，&lt;a&gt; 标签可以是超链接或锚。在 HTML5 中，&lt;a&gt; 标签始终是超链接，但是如果未设置 href 属性，则只是超链接的占位符。</p>
		<p>HTML5 提供了一些新属性，同时不再支持一些 HTML 4.01 属性。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><strong style="color: #409EFF;">New : </strong>HTML5 中的新属性。</p>
		<el-table :data="a_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link :href='scope.row.attr' type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<p>&lt;a&gt; 标签支持 HTML 中的<el-link type='primary' href='/accesskey'>全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;a&gt; 标签支持 HTML 中的<el-link type='primary' href='/event'>事件属性</el-link></p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>本例演示如何在 HTML 文档中创建链接。</p>
		<code-card :mytextarea='a_text3' uniquename='a3'></code-card>
		<p>本例演示如何使用图像作为链接。</p>
		<code-card :mytextarea='a_text4' uniquename='a4'></code-card>
		<p>本例演示如何使用链接跳转至文档的另一个部分</p>
		<code-card :mytextarea='a_text5' uniquename='a5'></code-card>
		<p>本例演示如何在新窗口打开一个页面，这样的话访问者就无需离开你的站点了。</p>
		<code-card :mytextarea='a_text6' uniquename='a6'></code-card>
		<p>本例演示如何跳出框架，假如你的页面被固定在框架之内。</p>
		<code-card :mytextarea='a_text7' uniquename='a7'></code-card>
		<p>本例演示如何如何链接到一个邮件。（本例在安装邮件客户端程序后才能工作。）</p>
		<code-card :mytextarea='a_text8' uniquename='a8'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				a_text1:'<html>\n<body>\n\n<a href="http://www.w3school.com.cn">W3School</a>\n\n</body>\n</html>\n',
				a_text2:[
					{'attr':'charset','value':'char_encoding','desc':'HTML5 中不支持。规定被链接文档的字符集。','isshow':false},
					{'attr':'coords','value':'coordinates','desc':'HTML5 中不支持。规定链接的坐标。','isshow':false},
					{'attr':'download','value':'filename','desc':'规定被下载的超链接目标。','isshow':true},
					{'attr':'href','value':'URL','desc':'规定链接指向的页面的 URL。','isshow':false},
					{'attr':'hreflang','value':'language_code','desc':'规定被链接文档的语言','isshow':false},
					{'attr':'media','value':'media_query','desc':'规定被链接文档是为何种媒介/设备优化的。','isshow':true},
					{'attr':'name','value':'section_name','desc':'HTML5 中不支持。规定锚的名称','isshow':false},
					{'attr':'rel','value':'text','desc':'规定当前文档与被链接文档之间的关系。','isshow':false},
					{'attr':'rev','value':'text','desc':'HTML5 中不支持。规定被链接文档与当前文档之间的关系。','isshow':false},
					{'attr':'shape','value':'default rect circle poly','desc':'HTML5 中不支持。规定链接的形状。','isshow':false},
					{'attr':'target','value':'_blank _parent _self _top framename','desc':'规定在何处打开链接文档。','isshow':false},
					{'attr':'type','value':'MIME type','desc':'规定被链接文档的的 MIME 类型。','isshow':true}
				],
				a_text3:'<html>\n\n<body>\n\n<p>\n<a href="/index">此文本</a> 是一个指向本网站中的一个页面的链接。</p>\n\n<p><a href="http://www.microsoft.com/">此文本</a> 是一个指向万维网上的页面的链接。</p>\n\n</body>\n</html>\n',
				a_text4:'<html>\n\n<body>\n<p>\n您也可以使用图像来作链接：\n<a href="/index ">\n<img src="../../../static/video/eg_submit.jpg" />\n</a>\n</p>\n\n</body>\n</html>\n',
				a_text5:'<html>\n\n<body>\n\n<p>\n<a href="#C4">查看 Chapter 4。</a>\n</p>\n\n<h2>Chapter 1</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 2</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 3</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2><a name="C4">Chapter 4</a></h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 5</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 6</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 7</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 8</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 9</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 10</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 11</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 12</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 13</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 14</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 15</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 16</h2>\n<p>This chapter explains ba bla bla</p>\n\n<h2>Chapter 17</h2>\n<p>This chapter explains ba bla bla</p>\n\n</body>\n</html>\n',
				a_text6:'<html>\n\n<body>\n\n<a href="http://127.0.0.1:8080/" target="_blank">Visit HTML5 Study</a>\n\n<p>如果把链接的 target 属性设置为 "_blank"，该链接会在新窗口中打开。</p>\n\n</body>\n\n</html>\n',
				a_text7:'<html>\n\n<body>\n\n<p>被锁在框架中了吗？</p> \n\n<a href="/index"\ntarget="_top">请点击这里！</a> \n\n</body>\n</html>\n',
				a_text8:'<html>\n\n<body>\n\n<p>\n这是邮件链接：\n<a href="mailto:someone@microsoft.com?subject=Hello%20again">发送邮件</a>\n</p>\n\n<p>\n<b>注意：</b>应该使用 %20 来替换单词之间的空格，这样浏览器就可以正确地显示文本了。\n</p>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
