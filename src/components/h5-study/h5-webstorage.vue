<template>
	<el-card>
		<h4>在客户端存储数据</h4>
		<p>HTML5 提供了两种在客户端存储数据的新方法：</p>
		<ul>
			<li style="font-size: 14px;margin: 5px 0px;">localStorage - 没有时间限制的数据存储</li>
			<li style="font-size: 14px;margin: 5px 0px;">sessionStorage - 针对一个 session 的数据存储</li>
		</ul>
		<p>之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。</p>
		<p>在 HTML5 中，数据不是由每个服务器请求传递的，而是只有在请求时使用数据。它使在不影响网站性能的情况下存储大量数据成为可能。</p>
		<p>对于不同的网站，数据存储于不同的区域，并且一个网站只能访问其自身的数据。</p>
		<p>HTML5 使用 JavaScript 来存储和访问数据。</p>
		<el-divider></el-divider>
		<h4>localStorage 方法</h4>
		<p>localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。</p>
		<p>如何创建和访问 localStorage：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="webstoragetext1" uniquename="webstorage1"></code-card>
		<p>下面的例子对用户访问页面的次数进行计数：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="webstoragetext2" uniquename="webstorage2"></code-card>
		<el-divider></el-divider>
		<h4>sessionStorage 方法</h4>
		<p>sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。</p>
		<p>如何创建并访问一个 sessionStorage：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="webstoragetext3" uniquename="webstorage3"></code-card>
		<p>下面的例子对用户在当前 session 中访问页面的次数进行计数：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="webstoragetext4" uniquename="webstorage4"></code-card>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default{
		data(){
			return{
				webstoragetext1:'<!DOCTYPE html>\n<html>\n<body>\n\n<div id="result"></div>\n\n<script>\n// Check browser support\nif (typeof(Storage) !== "undefined") {\n    // Store\n    localStorage.setItem("lastname", "Gates");\n    // Retrieve\n    document.getElementById("result").innerHTML = localStorage.getItem("lastname");\n} else {\n    document.getElementById("result").innerHTML \n= "抱歉！您的浏览器不支持 Web Storage ...";\n}\n\<\/script\>\n\n</body>\n</html>\n',
				webstoragetext2:'<!DOCTYPE HTML>\n<html>\n<body>\n<p>刷新页面会看到计数器在增长。</p>\n\n<p id="counter">请关闭浏览器窗口，然后再试一次，计数器会继续计数。</p>\n\n</body>\n<script type="text/javascript">\n\nif (localStorage.pagecount)\n	{\n	localStorage.pagecount=Number(localStorage.pagecount) +1;\n	}\nelse\n	{\n	localStorage.pagecount=1;\n	}\ndocument.getElementById("counter").innerHTML="Visits: " + localStorage.pagecount + " time(s).";\n\<\/script\>\n</html>\n',
				webstoragetext3:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction clickCounter() {\n    if(typeof(Storage) !== "undefined") {\n        if (sessionStorage.clickcount) {\n            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;\n        } else {\n            sessionStorage.clickcount = 1;\n        }\n        document.getElementById("result1").innerHTML =\n "在本 session 中，您已经点击这个按钮 " + sessionStorage.clickcount + " 次。";\n    } else {\n        document.getElementById("result1").innerHTML =\n "抱歉！您的浏览器不支持 Web Storage ...";\n    }\n}\n\<\/script\>\n</head>\n<body>\n<p><button onclick="clickCounter()" type="button">请点击这里</button></p>\n<div id="result1"></div>\n<p>请点击按钮使计数器递增。</p>\n<p>请关闭浏览器或标签页，然后再试一次，计数器会重置。</p>\n</body>\n</html>\n',
				webstoragetext4:'<!DOCTYPE HTML>\n<html>\n<body>\n<p>刷新页面会看到计数器在增长。</p>\n<p id="counter2">请关闭浏览器窗口，然后再试一次，计数器已经重置了。</p>\n</body>\n<script type="text/javascript">\n\nif (sessionStorage.pagecount)\n	{\n	sessionStorage.pagecount=Number(sessionStorage.pagecount) +1;\n	}\nelse\n	{\n	sessionStorage.pagecount=1;\n	}\ndocument.getElementById("counter2").innerHTML=\n"Visits " + sessionStorage.pagecount + " time(s) this session.";\n\n\<\/script\> \n</html>\n',
				webstoragetext5:''
			}
		},
		components:{
			'code-card':codecard
		}
		
	}
</script>

<style scoped="scoped">
	{	
	}
</style>
