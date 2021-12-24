<template>
	<el-card>
		<h4>HTML &lt;font&gt; 标签</h4>
		<h4>定义和用法</h4>
		<p>font 元素可将表单内的相关元素分组。</p>
		<el-divider></el-divider>
		<p><strong>实例</strong></p>
		<p>规定文本字体、大小和颜色：</p>
		<code-card :mytextarea='font_text1' uniquename='font1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;font&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>在 HTML 4.01 中，font 元素不被赞成使用。</p>
		<p>在 XHTML 1.0 Strict DTD 中，font 元素不被支持</p>
		<el-divider></el-divider>
		<h4>可选属性</h4>
		<el-table :data="font_text2" style="width: 100%" :stripe="true" :border="true">
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
		<h4>属性</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="font_text3"></el-input>
		<el-divider></el-divider>
		<p><strong>实例</strong></p>
		<p>本例演示如何设置文字的字体。</p>
		<code-card :mytextarea='font_text4' uniquename='font4'></code-card>
		<p>本例演示如何设置文字的尺寸。</p>
		<code-card :mytextarea='font_text5' uniquename='font5'></code-card>
		<p>本例演示如何设置文字的颜色</p>
		<code-card :mytextarea='font_text6' uniquename='font6'></code-card>
		<p>本例演示如何设置文字的字体、字体尺寸、字体颜色.</p>
		<code-card :mytextarea='font_text7' uniquename='font7'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				font_text1:'<html>\n<body>\n\n<h1><font face="verdana">A heading</font></h1>\n<p><font size="5" face="arial" color="red">A paragraph.</font></p>\n\n</body>\n</html>\n',
				font_text2:[
					{'attr':'color','value':'rgb(x,x,x) #xxxxxx colorname','desc':'规定文本的颜色。'},
					{'attr':'face','value':'font_family','desc':'规定文本的字体。'},
					{'attr':'size','value':'number','desc':'规定文本的大小。'}
				],
				font_text3:'id, class, title, style, dir, lang, xml:lang',
				font_text4:'<html>\n<body>\n<h1 style="font-family:verdana">A heading</h1>\n<p style="font-family:courier">A paragraph</p>\n</body>\n</html>\n',
				font_text5:'<html>\n<body>\n<h1 style="font-size:150%">A heading</h1>\n<p style="font-size:80%">A paragraph</p>\n</body>\n</html>\n',
				font_text6:'<html>\n<body>\n<h1 style="color:blue">A heading</h1>\n<p style="color:red">A paragraph</p>\n</body>\n</html>\n',
				font_text7:'<html>\n<body>\n<p style="font-family:verdana;font-size:80%;color:green">\nThis is a paragraph with some text in it. This is a paragraph with some text in it. This is a paragraph with some text in it. This is a paragraph with some text in it.\n</p>\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


