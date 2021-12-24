<template>
	<el-card>
		<p><strong>web worker 是运行在后台的 JavaScript，不会影响页面的性能。</strong></p>
		<el-divider></el-divider>
		<h4>什么是 Web Worker？</h4>
		<p>当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。</p>
		<p>web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。</p>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器均支持 web worker，除了 Internet Explorer。</p>
		<el-divider></el-divider>
		<h4>HTML5 Web Workers 实例</h4>
		<p>下面的例子创建了一个简单的 web worker，在后台计数：</p>
		<code-card :mytextarea="webworkertext1" uniquename="webwroker1"></code-card>
		<el-divider></el-divider>
		<h4>检测 Web Worker 支持</h4>
		<p>在创建 web worker 之前，请检测用户的浏览器是否支持它：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="webworkertext2" style="width: 60%;"></el-input>
		<el-divider></el-divider>
		<h4>创建 web worker 文件</h4>
		<p>现在，让我们在一个外部 JavaScript 中创建我们的 web worker。</p>
		<p>在这里，我们创建了计数脚本。该脚本存储于 "demo_workers.js" 文件中：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="webworkertext3" style="width: 60%;"></el-input>
		<p>以上代码中重要的部分是 postMessage() 方法 - 它用于向 HTML 页面传回一段消息。</p>
		<p><strong>注释</strong>：web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务</p>
		<el-divider></el-divider>
		<h4>创建 Web Worker 对象</h4>
		<p>我们已经有了 web worker 文件，现在我们需要从 HTML 页面调用它。</p>
		<p>下面的代码检测是否存在 worker，如果不存在，- 它会创建一个新的 web worker 对象，然后运行 "demo_workers.js" 中的代码：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="webworkertext4" style="width: 60%;"></el-input>
		<p>然后我们就可以从 web worker 发生和接收消息了。</p>
		<p>向 web worker 添加一个 "onmessage" 事件监听器：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="webworkertext5" style="width: 60%;"></el-input>
		<p>当 web worker 传递消息时，会执行事件监听器中的代码。event.data 中存有来自 event.data 的数据。</p>
		<el-divider></el-divider>
		<h4>终止 Web Worker</h4>
		<p>当我们创建 web worker 对象后，它会继续监听消息（即使在外部脚本完成之后）直到其被终止为止。</p>
		<p>如需终止 web worker，并释放浏览器/计算机资源，请使用 terminate() 方法：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="webworkertext6" style="width: 60%;"></el-input>
		<el-divider></el-divider>
		<h4>Web Workers 和 DOM</h4>
		<p>由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象：</p>
		<ul>
			<li v-for="item in webwrokerobject" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default{
		data(){
			return{
				istrue:true,
				webworkertext1:'<!DOCTYPE html>\n<html>\n<body>\n\n<p>计数: <output id="result123"></output></p>\n<button onclick="startWorker()">开始 Worker</button> \n<button onclick="stopWorker()">停止 Worker</button>\n<br /><br />\n\n<script>\nvar w;\n\nfunction startWorker()\n{\nif(typeof(Worker)!=="undefined")\n  {\n  if(typeof(w)=="undefined")\n  {\n  w=new Worker("../static/js/demo_workers.js");\n  }\n  w.onmessage = function (event) {\n    document.getElementById("result123").innerHTML=event.data;\n    };\n  }\nelse\n  {\n  document.getElementById("result123").innerHTML="Sorry, your browser does not support Web Workers...";\n  }\n}\n\nfunction stopWorker()\n{ \nw.terminate();\n}\n\<\/script\>\n\n</body>\n</html>\n',
				webworkertext2:'if(typeof(Worker)!=="undefined")\n  {\n  // Yes! Web worker support!\n  // Some code.....\n  }\nelse\n  {\n  // Sorry! No Web Worker support..\n  }\n',
				webworkertext3:'var i=0;\n\nfunction timedCount()\n{\ni=i+1;\npostMessage(i);\nsetTimeout("timedCount()",500);\n}\n\ntimedCount();\n',
				webworkertext4:'if(typeof(w)=="undefined")\n  {\n  w=new Worker("demo_workers.js");\n  }\n',
				webworkertext5:'w.onmessage=function(event){\ndocument.getElementById("result").innerHTML=event.data;\n};\n',
				webworkertext6:'w.terminate();',
				webwrokerobject:[
					'window 对象',
					'document 对象',
					'parent 对象'
				]
			}
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
