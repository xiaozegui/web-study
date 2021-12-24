<template>
	<el-card>
		<p><strong>使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。</strong></p>
		<el-divider></el-divider>
		<h4>什么是应用程序缓存（Application Cache）？</h4>
		<p>HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。</p>
		<p>应用程序缓存为应用带来三个优势：</p>
		<ul>
			<li v-for="item in appcacheadvantage" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器均支持应用程序缓存，除了 Internet Explorer。</p>
		<el-divider></el-divider>
		<p>HTML5 Cache Manifest 实例</p>
		<p>下面的例子展示了带有 cache manifest 的 HTML 文档（供离线浏览）：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="appcachetext" style="width: 60%;"></el-input>
		<el-divider></el-divider>
		<h4>Cache Manifest 基础</h4>
		<p>如需启用应用程序缓存，请在文档的 &lt;html&gt; 标签中包含 manifest 属性：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="appcachetext2" style="width: 60%;"></el-input>
		<p>每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。</p>
		<p>manifest 文件的建议的文件扩展名是：".appcache"。</p>
		<p>请注意，manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。</p>
		<el-divider></el-divider>
		<h4>Manifest 文件</h4>
		<p>manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。</p>
		<p>manifest 文件可分为三个部分：</p>
		<ul>
			<li v-for="item1 in appcache1" style="font-size: 14px;margin: 5px 0px;">{{item1}}</li>
		</ul>
		<h4>CACHE MANIFEST</h4>
		<p>第一行，CACHE MANIFEST，是必需的：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="appcachetext3" style="width: 60%;"></el-input>
		<p>上面的 manifest 文件列出了三个资源：一个 CSS 文件，一个 GIF 图像，以及一个 JavaScript 文件。当 manifest 文件加载后，浏览器会从网站的根目录下载这三个文件。然后，无论用户何时与因特网断开连接，这些资源依然是可用的。</p>
		<h4>NETWORK</h4>
		<p>下面的 NETWORK 小节规定文件 "login.asp" 永远不会被缓存，且离线时是不可用的：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="appcachetext4" style="width: 60%;"></el-input>
		<p>可以使用星号来指示所有其他资源/文件都需要因特网连接：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="appcachetext5" style="width: 60%;"></el-input>
		<h4>FALLBACK</h4>
		<p>下面的 FALLBACK 小节规定如果无法建立因特网连接，则用 "offline.html" 替代 /html5/ 目录中的所有文件：</p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="appcachetext6" style="width: 60%;"></el-input>
		<p>注释：第一个 URI 是资源，第二个是替补。</p>
		<el-divider></el-divider>
		<h4>更新缓存</h4>
		<p>一旦应用被缓存，它就会保持缓存直到发生下列情况：</p>
		<ul>
			<li v-for="item2 in appcachestep" style="font-size: 14px;margin: 5px 0px;">{{item2}}</li>
		</ul>
		<p><strong>实例 - 完整的 Manifest 文件</strong></p>
		<el-input :readonly="istrue" type="textarea" :autosize="istrue" v-model="appcachetext7" style="width: 60%;"></el-input>
		<p><strong>重要的提示：</strong>以 "#" 开头的是注释行，但也可满足其他用途。应用的缓存会在其 manifest 文件更改时被更新。如果您编辑了一幅图片，或者修改了一个 JavaScript 函数，这些改变都不会被重新缓存。更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法。</p>
		<el-divider></el-divider>
		<h4>关于应用程序缓存的注释</h4>
		<p>请留心缓存的内容。</p>
		<p>一旦文件被缓存，则浏览器会继续展示已缓存的版本，即使您修改了服务器上的文件。为了确保浏览器更新缓存，您需要更新 manifest 文件。</p>
		<p><strong>注释：</strong>浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。</p>
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
				appcacheadvantage:[
					'离线浏览 - 用户可在应用离线时使用它们',
					'速度 - 已缓存资源加载得更快',
					'减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。'
				],
				istrue:true,
				appcachetext:'<!DOCTYPE HTML>\n<html manifest="demo.appcache">\n\n<body>\nThe content of the document......\n</body>\n\n</html>\n',
				appcachetext2:'<!DOCTYPE HTML>\n<html manifest="demo.appcache">\n...\n</html>\n',
				appcache1:[
					'CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存',
					'NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存',
					'FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）'
				],
				appcachetext3:'CACHE MANIFEST\n/theme.css\n/logo.gif\n/main.js\n',
				appcachetext4:'NETWORK:\nlogin.asp\n',
				appcachetext5:'NETWORK:\n*',
				appcachetext6:'FALLBACK:\n/html5/ /404.html\n',
				appcachestep:[
					'用户清空浏览器缓存',
					'manifest 文件被修改（参阅下面的提示）',
					'由程序来更新应用缓存'
				],
				appcachetext7:'CACHE MANIFEST\n# 2012-02-21 v1.0.0\n/theme.css\n/logo.gif\n/main.js\n\nNETWORK:\nlogin.asp\n\nFALLBACK:\n/html5/ /404.html\n'
			}
		}
	}
</script>

<style scoped="scoped">
</style>
