<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>通过 JavaScript 利用 id 属性来改变一段文本：</p>
		<code-card :mytextarea="idtext1" uniquename='id1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>id 属性规定 HTML 元素的唯一的 id。</p>
		<p>id 在 HTML 文档中必须是唯一的。</p>
		<p>id 属性可用作链接锚（link anchor），通过 JavaScript（HTML DOM）或通过 CSS 为带有指定 id 的元素改变或添加样式。</p>
		<el-divider></el-divider>
		<h4>支持</h4>
		<p>W3C: "W3C" 列指示 W3C 的 HTML/XHTML 推荐标准中是否定义了该属性。</p>
		<el-table :data="idtext2" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="IE" label="IE" >
			</el-table-column>
			<el-table-column prop="Firefox" label="Firefox" >
			</el-table-column>
			<el-table-column prop="Opera" label="Opera" >
			</el-table-column>
			<el-table-column prop="Safari" label="Safari" >
			</el-table-column>
			<el-table-column prop="W3C" label="W3C" >
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="idtext4"></el-input>
		<h4>属性值</h4>
		<el-table :data="idtext3" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="value" label="值" >
			</el-table-column>
			<el-table-column prop="desc" label="描述" >
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>亲自试一试 - 实例</h4>
		<p>如何向 HTML 元素添加 id 属性。</p>
		<code-card :mytextarea="idtext5" uniquename='id2'></code-card>
		<p>如何在 CSS 中使用 id 属性</p>
		<code-card :mytextarea="idtext6" uniquename='id3'></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				idtext1:'<html>\n<head>\n<script type="text/javascript">\nfunction change_header()\n{\ndocument.getElementById("myHeader").innerHTML="Nice day!";\n}\n\<\/script\>\n</head>\n\n<body>\n\n<h1 id="myHeader">Hello World!</h1>\n<button onclick="change_header()">Change text</button>\n\n</body>\n</html>\n',
				idtext2:[
					{'IE':'YES','Firefox':'YES','Opera':'YES','Safari':'YES','W3C':'YES'}
				],
				idtext3:[
					{'value':'id','desc':'规定元素的唯一 id。'}
				],
				idtext4:'<element id="value">',
				idtext5:'<html>\n<body>\n\n<h1 id="myHeader2">W3School is the best!</h1>\n\n</body>\n</html>\n',
				idtext6:'<html>\n<head>\n<style>\n#myHeader3\n{\ncolor:red;\ntext-align:center;\n}\n</style>\n</head>\n<body>\n\n<h1 id="myHeader3">W3School is the best!</h1>\n\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
