<template>
	<el-card>
		<h4>HTML onmousemove 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当鼠标指针移动到图像上时执行一段 JavaScript：：</p>
		<code-card :mytextarea='onmousemove_text1' uniquename='onmousemove1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onmousemove 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onmousemove 属性在鼠标指针移动到元素上时触发。</p>
		<p class="note"><span>注释：</span>onmousemove 属性不适用以下元素：&lt;base&gt;、&lt;bdo&gt;、&lt;br&gt;、&lt;head&gt;、&lt;html&gt;、&lt;iframe&gt;、&lt;meta&gt;、&lt;param&gt;、&lt;script&gt;、&lt;style&gt; 或 &lt;title&gt;。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onmousemove_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onmousemove_text2" style="width: 100%" :stripe="true" :border="true">
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
		<h4>事件属性</h4>
		<p><el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				onmousemove_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction bigImg(x)\n{\nx.style.height="180px";\nx.style.width="180px";\n}\n\nfunction normalImg(x)\n{\nx.style.height="128px";\nx.style.width="128px";\n}\n\<\/script\>\n</head>\n<body>\n\n<img onmousemove="bigImg(this)" onmouseout="normalImg(this)" border="0" src="static/img/eg_smile.gif" alt="Smiley" >\n\n<p>函数 bigImg() 在鼠标指针移动到图像上时触发。此函数放大图像。</p>\n<p>函数 normalImg() 在鼠标指针移出图像时触发。此函数把图像的高度和宽度重置为正常尺寸。</p>\n\n</body>\n</html>\n',
				onmousemove_text2:[
					{'value':'script','desc':'onmousemove 发生时运行的脚本。'}
				],
				onmousemove_text3:'<element onmousemove="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


