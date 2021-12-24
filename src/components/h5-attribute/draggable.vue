<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>一个可拖动的段落：</p>
		<code-card :mytextarea="draggabletext1" uniquename='draggable1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9+, Firefox, Opera, Chrome, and Safari 支持 draggable 属性。</p>
		<p>注释：Internet Explorer 8 以及更早的版本，不支持 draggable 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>draggable 属性规定元素是否可拖动。</p>
		<p>提示：链接和图像默认是可拖动的。</p>
		<p>提示：draggable 属性常用在拖放操作中。请在我们的拖放教程中学习更多内容。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>draggable 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="draggabletext2"></el-input>
		<h4>属性值</h4>
		<el-table :data="draggabletext3" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="value" label="值" >
			</el-table-column>
			<el-table-column prop="desc" label="描述" >
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue:true,
				draggabletext1:'<style type="text/css">\n#div1 {width:350px;height:70px;padding:10px;border:1px solid #aaaaaa;}\n</style>\n<script type="text/javascript">\nfunction allowDrop(ev)\n{\nev.preventDefault();\n}\n\nfunction drag(ev)\n{\nev.dataTransfer.setData("Text",ev.target.id);\n}\n\nfunction drop(ev)\n{\nvar data=ev.dataTransfer.getData("Text");\nev.target.appendChild(document.getElementById(data));\nev.preventDefault();\n}\n\<\/script\>\n</head>\n<body>\n\n<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>\n<br />\n<p id="drag1" draggable="true" ondragstart="drag(event)">这是一段可移动的段落。请把该段落拖入上面的矩形。</p>\n\n</body>\n</html>\n',
				draggabletext2:'<element draggable="true|false|auto">',
				draggabletext3:[
					{'value':'true','desc':'规定元素的可拖动的。'},
					{'value':'false','desc':'规定元素不可拖动。'},
					{'value':'auto','desc':'使用浏览器的默认行为'},
				]
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>
