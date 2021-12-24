<template>
	<el-card>
		<h4>全局事件属性</h4>
		<p>HTML 4 增加了使事件在浏览器中触发动作的能力，比如当用户点击元素时启动 JavaScript。</p>
		<p>如需学习更多有关事件编程的知识，请访问我们的 JavaScript 教程。</p>
		<p>下面列出了添加到 HTML 元素以定义事件动作的全局事件属性。</p>
		<p><i class="el-icon-time"></i>= HTML5 中新的事件属性。</p>
		<el-divider></el-divider>
		<h4>Window 事件属性</h4>
		<p>针对 window 对象触发的事件（应用到 &lt;body&gt; 标签）：</p>
		<el-table :data="windowwvent" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link :href="scope.row.attr" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<h4>Form 事件</h4>
		<p>由 HTML 表单内的动作触发的事件（应用到几乎所有 HTML 元素，但最常用在 form 元素中）：</p>
		<el-table :data="formevent" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link :href="scope.row.attr" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<h4>Keyboard 事件</h4>
		<el-table :data="keyboardevent" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link :href="scope.row.attr" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<h4>Mouse 事件</h4>
		<p>由鼠标或类似用户动作触发的事件：</p>
		<el-table :data="mouseevent" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link :href="scope.row.attr" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<h4>Media 事件</h4>
		<p>由媒介（比如视频、图像和音频）触发的事件（适用于所有 HTML 元素，但常见于媒介元素中，比如 &lt;audio&gt;、&lt;embed&gt;、&lt;img&gt;、&lt;object&gt; 以及 &lt;video&gt;）:</p>
		<el-table :data="mediaevent" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link :href="scope.row.attr" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
				istrue:true,
				windowwvent:[
					{'attr':'onafterprint','value':'script','desc':'文档打印之后运行的脚本。','isshow':true},
					{'attr':'onbeforeprint','value':'script','desc':'文档打印之前运行的脚本。','isshow':true},
					{'attr':'onbeforeunload','value':'script','desc':'文档卸载之前运行的脚本。','isshow':true},
					{'attr':'onerror','value':'script','desc':'在错误发生时运行的脚本。','isshow':true},
					{'attr':'onhaschange','value':'script','desc':'当文档已改变时运行的脚本。','isshow':true},
					{'attr':'onload','value':'script','desc':'页面结束加载之后触发。','isshow':false},
					{'attr':'onmessage','value':'script','desc':'在消息被触发时运行的脚本。','isshow':true},
					{'attr':'onoffline','value':'script','desc':'当文档离线时运行的脚本。','isshow':true},
					{'attr':'ononline','value':'script','desc':'当文档上线时运行的脚本。','isshow':true},
					{'attr':'onpagehide','value':'script','desc':'当窗口隐藏时运行的脚本。','isshow':true},
					{'attr':'onpageshow	','value':'script','desc':'当窗口成为可见时运行的脚本','isshow':true},
					{'attr':'onpopstate','value':'script','desc':'当窗口历史记录改变时运行的脚本','isshow':true},
					{'attr':'onredo','value':'script','desc':'当文档执行撤销（redo）时运行的脚本。','isshow':true},
					{'attr':'onresize','value':'script','desc':'当浏览器窗口被调整大小时触发','isshow':true},
					{'attr':'onstorage','value':'script','desc':'在 Web Storage 区域更新后运行的脚本。','isshow':true},
					{'attr':'onundo','value':'script','desc':'在文档执行 undo 时运行的脚本。','isshow':true},
					{'attr':'onunload','value':'script','desc':'一旦页面已下载时触发（或者浏览器窗口已被关闭）。','isshow':false}
				],
				formevent:[
					{'attr':'onblur','value':'script','desc':'元素失去焦点时运行的脚本。','isshow':false},
					{'attr':'onchange','value':'script','desc':'在元素值被改变时运行的脚本。','isshow':false},
					{'attr':'oncontextmenu','value':'script','desc':'当上下文菜单被触发时运行的脚本。','isshow':true},
					{'attr':'onfocus','value':'script','desc':'当元素获得焦点时运行的脚本。','isshow':false},
					{'attr':'onformchange','value':'script','desc':'在表单改变时运行的脚本。','isshow':true},
					{'attr':'onforminput','value':'script','desc':'当表单获得用户输入时运行的脚本。','isshow':true},
					{'attr':'oninput','value':'script','desc':'当元素获得用户输入时运行的脚本。','isshow':true},
					{'attr':'oninvalid','value':'script','desc':'当元素无效时运行的脚本。','isshow':true},
					{'attr':'onreset','value':'script','desc':'当表单中的重置按钮被点击时触发。HTML5 中不支持。','isshow':false},
					{'attr':'onselect','value':'script','desc':'在元素中文本被选中后触发。','isshow':false},
					{'attr':'onsubmit','value':'script','desc':'在提交表单时触发。','isshow':false}
				],
				keyboardevent:[
					{'attr':'onkeydown','value':'script','desc':'在用户按下按键时触发。','isshow':false},
					{'attr':'onkeypress','value':'script','desc':'在用户敲击按钮时触发。','isshow':false},
					{'attr':'onkeyup','value':'script','desc':'当用户释放按键时触发。','isshow':false},
				],
				mouseevent:[
					{'attr':'onclick','value':'script','desc':'元素上发生鼠标点击时触发。','isshow':false},
					{'attr':'ondblclick','value':'script','desc':'元素上发生鼠标双击时触发。','isshow':false},
					{'attr':'ondrag','value':'script','desc':'元素被拖动时运行的脚本。','isshow':false},
					{'attr':'ondragend','value':'script','desc':'在拖动操作末端运行的脚本。','isshow':true},
					{'attr':'ondragenter','value':'script','desc':'当元素元素已被拖动到有效拖放区域时运行的脚本。','isshow':true},
					{'attr':'ondragleave','value':'script','desc':'当元素离开有效拖放目标时运行的脚本。','isshow':true},
					{'attr':'ondragover','value':'script','desc':'当元素在有效拖放目标上正在被拖动时运行的脚本。','isshow':true},
					{'attr':'ondragstart','value':'script','desc':'在拖动操作开端运行的脚本。','isshow':true},
					{'attr':'ondrop','value':'script','desc':'当被拖元素正在被拖放时运行的脚本。','isshow':true},
					{'attr':'onmousedown','value':'script','desc':'当元素上按下鼠标按钮时触发。','isshow':true},
					{'attr':'onmousemove','value':'script','desc':'当鼠标指针移动到元素上时触发。','isshow':false},
					{'attr':'onmouseout','value':'script','desc':'当鼠标指针移出元素时触发。','isshow':false},
					{'attr':'onmouseover','value':'script','desc':'当鼠标指针移动到元素上时触发。','isshow':false},
					{'attr':'onmouseup','value':'script','desc':'当在元素上释放鼠标按钮时触发。','isshow':false},
					{'attr':'onmousewheel','value':'script','desc':'当鼠标滚轮正在被滚动时运行的脚本。','isshow':true},
					{'attr':'onscroll','value':'script','desc':'当元素滚动条被滚动时运行的脚本。','isshow':true}
				],
				mediaevent:[
					{'attr':'onabort','value':'script','desc':'在退出时运行的脚本。','isshow':false},
					{'attr':'oncanplay','value':'script','desc':'当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）。','isshow':true},
					{'attr':'oncanplaythrough','value':'script','desc':'当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本。','isshow':true},
					{'attr':'ondurationchange','value':'script','desc':'当媒介长度改变时运行的脚本。','isshow':true},
					{'attr':'onemptied','value':'script','desc':'当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）。','isshow':true},
					{'attr':'onended','value':'script','desc':'当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）。','isshow':true},
					{'attr':'onerror','value':'script','desc':'当在文件加载期间发生错误时运行的脚本。','isshow':true},
					{'attr':'onloadeddata','value':'script','desc':'当媒介数据已加载时运行的脚本。','isshow':true},
					{'attr':'onloadedmetadata','value':'script','desc':'当元数据（比如分辨率和时长）被加载时运行的脚本。','isshow':true},
					{'attr':'onloadstart','value':'script','desc':'在文件开始加载且未实际加载任何数据前运行的脚本。','isshow':true},
					{'attr':'onpause','value':'script','desc':'当媒介被用户或程序暂停时运行的脚本。。','isshow':true},
					{'attr':'onplay','value':'script','desc':'当媒介已就绪可以开始播放时运行的脚本。','isshow':true},
					{'attr':'onplaying','value':'script','desc':'当媒介已开始播放时运行的脚本。','isshow':true},
					{'attr':'onprogress','value':'script','desc':'当浏览器正在获取媒介数据时运行的脚本。','isshow':true},
					{'attr':'onratechange','value':'script','desc':'每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）。','isshow':true},
					{'attr':'onreadystatechange	','value':'script','desc':'每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）。','isshow':true},
					{'attr':'onseeked','value':'script','desc':'当 seeking 属性设置为 false（指示定位已结束）时运行的脚本。','isshow':true},
					{'attr':'onseeking','value':'script','desc':'当 seeking 属性设置为 true（指示定位是活动的）时运行的脚本。','isshow':true},
					{'attr':'onstalled','value':'script','desc':'在浏览器不论何种原因未能取回媒介数据时运行的脚本。。','isshow':true},
					{'attr':'onsuspend','value':'script','desc':'在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本','isshow':true},
					{'attr':'ontimeupdate','value':'script','desc':'当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。','isshow':true},
					{'attr':'onvolumechange','value':'script','desc':'每当音量改变时（包括将音量设置为静音）时运行的脚本。','isshow':true},
					{'attr':'onwaiting','value':'script','desc':'当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本。','isshow':false}
				]
			}
		}
	}
</script>

<style scoped="scoped">
</style>
