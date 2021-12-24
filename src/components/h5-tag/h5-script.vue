<template>
	<el-card>
		<h4>HTML &lt;script&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>在 HTML 页面中插入一段 JavaScript：</p>
		<code-card :mytextarea='script_text1' uniquename='script1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;script&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;script&gt; 标签用于定义客户端脚本，比如 JavaScript。</p>
		<p>script 元素既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件。</p>
		<p>必需的 type 属性规定脚本的 MIME 类型。</p>
		<p>JavaScript 的常见应用时图像操作、表单验证以及动态内容更新。</p>
		<h4>提示和注释：</h4>
		<p>注释：假如此元素内部的代码没有位于某个函数中，那么这些代码会在页面被加载时被立即执行。&lt;frameset&gt; 标签之后的脚本会被忽略。</p>
		<p>提示：请参阅 noscript 元素；对于那些在浏览器中禁用脚本或者其浏览器不支持客户端脚本的用户来说，该元素非常有用。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>在 HTML 4.01 中，script 元素的 "language" 属性不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，script 元素的 "language" 属性不被支持。</p>
		<p><strong>HTML 4 和 XHTML 在处理脚本中的内容方面有所不同：</strong></p>
		<p>在 HTML 4 中，内容类型声明为 CDATA，就是说不会对实体进行解析。</p>
		<p>在 XHTML 中，内容类型声明为 (#PCDATA)，也就是说会对实体进行解析。</p>
		<p>这意味着，在 XHTML 中，应该编码所有特殊的字符，或者把所有内容嵌套在 CDATA 部分中。</p>
		<p>为了确保在 XHTML 文档中脚本正确进行解析，请使用如下语法：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="script_text3"></el-input>
		<el-divider></el-divider>
		<h4>必选的属性</h4>
		<el-table :data="script_text2" style="width: 100%" :stripe="true" :border="true">
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
		<el-table :data="script_text4" style="width: 100%" :stripe="true" :border="true">
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
		<h4>全局属性</h4>
		<p>&lt;script&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				script_text1:'<html> \n \n<body> \n \n<script type="text/javascript"> \nalert("<h1>Hello World!</h1>") \n\<\/script\>  \n \n</body> \n \n</html> \n',
				script_text2:[
					{'attr':'type','value':'MIME-type','desc':'指示脚本的 MIME 类型。'}
				],
				script_text3:'<script type="text/javascript"><![CDATA[ \n  alert("Hello World!") \n//]]>\<\/script\> \n',
				script_text4:[
					{'attr':'async','value':'async','desc':'规定异步执行脚本（仅适用于外部脚本）。'},
					{'attr':'charset','value':'charset','desc':'规定在外部脚本文件中使用的字符编码。'},
					{'attr':'defer','value':'defer','desc':'规定是否对脚本执行进行延迟，直到页面加载为止'},
					{'attr':'language','value':'script','desc':'不赞成使用。规定脚本语言。请使用 type 属性代替它。'},
					{'attr':'src','value':'	URL','desc':'规定外部脚本文件的 URL。'},
					{'attr':'xml:space','value':'preserve','desc':'规定是否保留代码中的空白。'}
				],
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


