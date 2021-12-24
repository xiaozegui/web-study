<template>
	<el-card>
		<p><strong>HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。</strong></p>
		<el-divider></el-divider>
		<h4>Server-Sent 事件 - 单向消息传递</h4>
		<p>Server-Sent 事件指的是网页自动获取来自服务器的更新。</p>
		<p>以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。</p>
		<p>例子：Facebook/Twitter 更新、估价更新、新的博文、赛事结果等。</p>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器均支持服务器发送事件，除了 Internet Explorer。</p>
		<el-divider></el-divider>
		<h4>接收 Server-Sent 事件通知</h4>
		<p>EventSource 对象用于接收服务器发送事件通知：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="serversenteventtext1" uniquename="serversentevent1"></code-card>
		<p>例子解释：</p>
		<ul>
			<li v-for="item in stepexplain" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>检测 Server-Sent 事件支持</h4>
		<p>在上面的 TIY 实例中，我们编写了一段额外的代码来检测服务器发送事件的浏览器支持情况：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="serversenteventtext2" style="width: 60%;"></el-input>
		<el-divider></el-divider>
		<h4>服务器端代码实例</h4>
		<p>为了让上面的例子可以运行，您还需要能够发送数据更新的服务器（比如 PHP 和 ASP）</p>
		<p>服务器端事件流的语法是非常简单的。把 "Content-Type" 报头设置为 "text/event-stream"。现在，您可以开始发送事件流了。</p>
		<p><strong>PHP 代码 (demo_sse.php)：</strong></p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="serversenteventtext3" style="width: 60%;"></el-input>
		<p><strong>ASP 代码 (VB) (demo_sse.asp):</strong></p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="serversenteventtext4" style="width: 60%;"></el-input>
		<p>代码解释：</p>
		<ul>
			<li v-for="step in codeexplain" style="font-size: 14px;margin: 5px 0px;">{{step}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>EventSource 对象</h4>
		<p>在上面的例子中，我们使用 onmessage 事件来获取消息。不过还可以使用其他事件：</p>
		<el-table :data="otherevent" :border="istrue" :stripe="istrue">
			<el-table-column prop="event" label="事件">
			</el-table-column>
			<el-table-column prop="desc" label="描述">
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				serversenteventtext1: '<html>\n<body>\n<h1>获得服务器更新</h1>\n<div id="result"></div>\n\n<script>\nif(typeof(EventSource)!=="undefined")\n  {\n  var source=new EventSource("");\n  source.onmessage=function(event)\n    {\n    document.getElementById("result").innerHTML+=event.data + "<br />";\n    };\n  }\nelse\n  {\n  document.getElementById("result").innerHTML="抱歉，您的浏览器不支持 server-sent 事件 ...";\n  }\n\<\/script\>\n\n</body>\n</html>\n',
				stepexplain: [
					'创建一个新的 EventSource 对象，然后规定发送更新的页面的 URL（本例中是 "demo_sse.php"）',
					'每接收到一次更新，就会发生 onmessage 事件',
					'当 onmessage 事件发生时，把已接收的数据推入 id 为 "result" 的元素中'
				],
				serversenteventtext2: 'if(typeof(EventSource)!=="undefined")\n  {\n  // Yes! Server-sent events support!\n  // Some code.....\n  }\nelse\n  {\n  // Sorry! No server-sent events support..\n  }\n',
				serversenteventtext3: '<?php\nheader("Content-Type: text/event-stream");\nheader("Cache-Control: no-cache");\n$time = date("r");\necho "data: The server time is: {$time}";\nflush();\n?>\n',
				serversenteventtext4: '<%\nResponse.ContentType="text/event-stream"\nResponse.Expires=-1\nResponse.Write("data: " & now())\nResponse.Flush()\n%>\n',
				codeexplain: [
					'把报头 "Content-Type" 设置为 "text/event-stream"',
					'规定不对页面进行缓存',
					'输出发送日期（始终以 "data: " 开头）',
					'向网页刷新输出数据'
				],
				otherevent:[
					{'event':'onopen','desc':'	当通往服务器的连接被打开'},
					{'event':'onmessage','desc':'当接收到消息'},
					{'event':'onerror','desc':'	当错误发生'}
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
