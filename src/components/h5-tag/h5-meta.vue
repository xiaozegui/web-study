<template>
	<el-card>
		<h4>HTML &lt;meta&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>Meta 元素中的信息可以描述文档的关键词。</p>
		<code-card :mytextarea='meta_text1' uniquename='meta1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;meta&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;meta&gt; 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。</p>
		<p>&lt;meta&gt; 标签位于文档的头部，不包含任何内容。&lt;meta&gt; 标签的属性定义了与文档相关联的名称/值对。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 中，&lt;meta&gt; 标签没有结束标签。</p>
		<p>在 XHTML 中，&lt;meta&gt; 标签必须被正确地关闭。</p>
		<h4>提示和注释：</h4>
		<p>注释：&lt;meta&gt; 标签永远位于 head 元素内部。</p>
		<p>注释：元数据总是以名称/值的形式被成对传递的。</p>
		<el-divider></el-divider>
		<h4>必需的属性</h4>
		<el-table :data="meta_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link>
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
		<h4>可选的属性</h4>
		<el-table :data="meta_text3" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link>
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
		<h4>name 属性</h4>
		<p>name 属性提供了名称/值对中的名称。HTML 和 XHTML 标签都没有指定任何预先定义的 &lt;meta&gt; 名称。通常情况下，您可以自由使用对自己和源文档的读者来说富有意义的名称。</p>
		<p>"keywords" 是一个经常被用到的名称。它为文档定义了一组关键字。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。</p>
		<p>类似这样的 meta 标签可能对于进入搜索引擎的索引有帮助：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="meta_text4"></el-input>
		<p>如果没有提供 name 属性，那么名称/值对中的名称会采用 http-equiv 属性的值。</p>
		<el-divider></el-divider>
		<h4>http-equiv 属性</h4>
		<p>http-equiv 属性为名称/值对提供了名称。并指示服务器在发送实际的文档之前先在要传送给浏览器的 MIME 文档头部包含名称/值对。</p>
		<p>当服务器向浏览器发送文档时，会先发送许多名称/值对。虽然有些服务器会发送许多这种名称/值对，但是所有服务器都至少要发送一个：content-type:text/html。这将告诉浏览器准备接受一个 HTML 文档。</p>
		<p>使用带有 http-equiv 属性的 &lt;meta&gt; 标签时，服务器将把名称/值对添加到发送给浏览器的内容头部。例如，添加：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="meta_text5"></el-input>
		<p>这样发送到浏览器的头部就应该包含：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="meta_text6"></el-input>
		<p>当然，只有浏览器可以接受这些附加的头部字段，并能以适当的方式使用它们时，这些字段才有意义。</p>
		<el-divider></el-divider>
		<h4>content 属性</h4>
		<p>content 属性提供了名称/值对中的值。该值可以是任何有效的字符串。</p>
		<p>ontent 属性始终要和 name 属性或 http-equiv 属性一起使用。</p>
		<el-divider></el-divider>
		<h4>scheme 属性</h4>
		<p>scheme 属性用于指定要用来翻译属性值的方案。此方案应该在由 &lt;head&gt; 标签的 profile 属性指定的概况文件中进行了定义。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;meta&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>这个例子演示：在网址已经变更的情况下，将用户重定向到另外一个地址。</p>
		<code-card :mytextarea='meta_text7' uniquename='meta7'></code-card>
		<p>Meta 元素中的信息可以描述 HTML 文档。</p>
		<code-card :mytextarea='meta_text8' uniquename='meta8'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				meta_text1:'<html> \n \n<head> \n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" /> \n \n<meta name="description" \ncontent="HTML examples"> \n \n<meta name="keywords" \ncontent="HTML, DHTML, CSS, XML, XHTML, JavaScript, VBScript"> \n \n</head> \n \n<body> \n<p>本文档的 meta 属性描述了该文档和它的关键词。</p> \n</body> \n \n</html> \n',
				meta_text2:[
					{'attr':'content','value':'	some_text','desc':'定义与 http-equiv 或 name 属性相关的元信息'}
				],
				meta_text3:[
					{'attr':'http-equiv','value':'content-type expires refresh set-cookie','desc':'把 content 属性关联到 HTTP 头部'},
					{'attr':'name','value':'autho description keywords generator revised others','desc':'把 content 属性关联到一个名称。'},
					{'attr':'scheme','value':'some_text','desc':'定义用于翻译 content 属性值的格式。'}
				],
				meta_text4:'<meta name="keywords" content="HTML,ASP,PHP,SQL">',
				meta_text5:'<meta http-equiv="charset" content="iso-8859-1">\n<meta http-equiv="expires" content="31 Dec 2008">',
				meta_text6:'content-type: text/html \ncharset:iso-8859-1 \nexpires:31 Dec 2008 \n',
				meta_text7:'<!DOCTYPE HTML> \n<html> \n<head> \n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" /> \n<meta http-equiv="Refresh" content="100;url=http://www.w3school.com.cn" /> \n</head> \n \n<body> \n<p> \n对不起。我们已经搬家了。您的 URL 是 <a href="http://www.w3school.com.cn">http://www.w3school.com.cn</a> \n</p> \n \n<p>您将在 100 秒内被重定向到新的地址。</p> \n \n<p>如果超过 100 秒后您仍然看到本消息，请点击上面的链接。</p> \n \n</body> \n</html> \n',
				meta_text8:'<html> \n \n<head> \n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" /> \n \n<meta name="author" \ncontent="w3school.com.cn"> \n \n<meta name="revised" \ncontent="David Yang,8/1/07"> \n  \n<meta name="generator" \ncontent="Dreamweaver 8.0en"> \n \n</head> \n \n<body> \n<p>本文档的 meta 属性标识了创作者和编辑软件。</p> \n</body> \n \n</html> \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


