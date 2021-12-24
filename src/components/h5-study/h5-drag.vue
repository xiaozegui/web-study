<template>
	<el-card>
		<h4>拖放（Drag 和 drop）是 HTML5 标准的组成部分。</h4>
		<el-divider></el-divider>
		<h4>拖放</h4>
		<p>拖放是一种常见的特性，即抓取对象以后拖到另一个位置。</p>
		<p>在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放</p>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9、Firefox、Opera 12、Chrome 以及 Safari 5 支持拖放。</p>
		<p><strong>注释</strong>：在 Safari 5.1.2 中不支持拖放。</p>
		<el-divider></el-divider>
		<h4>HTML5 拖放实例</h4>
		<p>下面的例子是一个简单的拖放实例：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="dragtext" uniquename="drag1"></code-card>
		<p>它看上去也许有些复杂，不过我们可以分别研究拖放事件的不同部分。</p>
		<el-divider></el-divider>
		<h4>设置元素为可拖放</h4>
		<p>首先，为了使元素可拖动，把 draggable 属性设置为 true ：</p>
		<el-input type="textarea" v-model="text1" :readonly="istrue" style="width: 50%;"></el-input>
		<el-divider></el-divider>
		<h4>拖动什么 - ondragstart 和 setData()</h4>
		<p>然后，规定当元素被拖动时，会发生什么。</p>
		<p>在上面的例子中，ondragstart 属性调用了一个函数，drag(event)，它规定了被拖动的数据。</p>
		<p>dataTransfer.setData() 方法设置被拖数据的数据类型和值：</p>
		<el-input type="textarea" v-model="text2" :readonly="istrue" :autosize="istrue" style="width: 50%;"></el-input>
		<p>在这个例子中，数据类型是 "Text"，值是可拖动元素的 id ("drag1")。</p>
		<el-divider></el-divider>
		<h4>放到何处 - ondragover</h4>
		<p>ondragover 事件规定在何处放置被拖动的数据。</p>
		<p>默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。</p>
		<p>这要通过调用 ondragover 事件的 event.preventDefault() 方法：</p>
		<el-input type="textarea" v-model="text3" :readonly="istrue" :autosize="istrue" style="width: 50%;"></el-input>
		<el-divider></el-divider>
		<h4>进行放置 - ondrop</h4>
		<p>当放置被拖数据时，会发生 drop 事件。</p>
		<p>在上面的例子中，ondrop 属性调用了一个函数，drop(event)：</p>
		<el-input type="textarea" v-model="text4" :readonly="istrue" :autosize="istrue" style="width: 60%;"></el-input>
		<p><strong>代码解释：</strong></p>
		<ul>
			<li v-for="item in codeexplain" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>更多实例:</h4>
		<p>如何在两个&lt;div&gt; 元素之间拖放图像。</p>
		<code-card :mytextarea="text5" uniquename="drag2"></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue';
	export default{
		data(){
			return{
				dragtext:'<!DOCTYPE HTML>\n<html>\n<head>\n<style type="text/css">\n#div1 {width:198px; height:66px;padding:10px;border:1px solid #aaaaaa;}\n</style>\n<script type="text/javascript">\nfunction allowDrop(ev)\n{\nev.preventDefault();\n}\n\nfunction drag(ev)\n{\nev.dataTransfer.setData("Text",ev.target.id);\n}\n\nfunction drop(ev)\n{\nev.preventDefault();\nvar data=ev.dataTransfer.getData("Text");\nev.target.appendChild(document.getElementById(data));\n}\n\<\/script\>\n</head>\n<body>\n\n<p>请把 W3School 的图片拖放到矩形中：</p>\n\n<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>\n<br />\n<img id="drag1" src="static/video/eg_dragdrop_w3school.gif" draggable="true" ondragstart="drag(event)" />\n\n</body>\n</html>\n',
				istrue:true,
				text1:'<img draggable="true" />',
				text2:'function drag(ev)\n{\nev.dataTransfer.setData("Text",ev.target.id);\n}\n',
				text3:'event.preventDefault()',
				text4:'function drop(ev)\n{\nev.preventDefault();\nvar data=ev.dataTransfer.getData("Text");\nev.target.appendChild(document.getElementById(data));\n}\n',
				codeexplain:[
					'调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）',
					'通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。',
					'被拖数据是被拖元素的 id ("drag1")',
					'把被拖元素追加到放置元素（目标元素）中'
				],
				text5:'<!DOCTYPE HTML>\n<html>\n<head>\n<style type="text/css">\n#div3, #div2\n{float:left; width:198px; height:66px; margin:10px;padding:10px;border:1px solid #aaaaaa;}\n</style>\n<script type="text/javascript">\nfunction allowDrop(ev)\n{\nev.preventDefault();\n}\n\nfunction drag(ev)\n{\nev.dataTransfer.setData("Text",ev.target.id);\n}\n\nfunction drop(ev)\n{\nev.preventDefault();\nvar data=ev.dataTransfer.getData("Text");\nev.target.appendChild(document.getElementById(data));\n}\n\<\/script\>\n</head>\n<body>\n\n<div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)">\n  <img src="static/video/eg_dragdrop_w3school.gif"\n draggable="true" ondragstart="drag(event)" id="drag2" />\n</div>\n<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>\n\n</body>\n</html>\n'
			}
		},
		mounted(){
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
