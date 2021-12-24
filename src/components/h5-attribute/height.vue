<template>
	<el-card>
		<h4>HTML &lt;height&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>高度和宽度为 200 像素的画布</p>
		<code-card :mytextarea="height_text1" uniquename='height1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>height 属性规定 canvas 的高度</p>
		<p>提示：每当画布的高度或宽度被重设时，画布内容就会被清空（请看页面底部的例子）。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;canvas&gt; 是 HTML5 中的新标签。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="height_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<table class="el-table">
		<tbody><tr>
		<th style="width:25%;">值</th>
		<th>描述</th>
		</tr>
		<tr>
		<td><i>pixels</i></td>
		<td>规定以像素计的 canvas 高度（比如 "100px" 或仅仅是 "100"）。默认是 "150"。</td>
		</tr>
		</tbody></table>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>清空画布</p>
		<code-card :mytextarea="height_text3" uniquename='height3'></code-card>
		<br><br>
		<el-link type='primary' href="/canvas">HTML &lt;canvas&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				height_text1: '<!DOCTYPE html>\n<html>\n<body>\n\n<canvas id="myCanvas" width="200" height="200" style="border:1px solid">\nYour browser does not support the canvas element.\n</canvas>\n\n<script type="text/javascript">\nvar c=document.getElementById("myCanvas");\nvar cxt=c.getContext("2d");\ncxt.fillStyle="#92B901";\ncxt.fillRect(50,50,100,100);\n\<\/script\>\n\n</body>\n</html>\n',
				height_text2: '<canvas height="pixels" />',
				height_text3:'<!DOCTYPE html>\n<html>\n<body>\n\n<canvas id="myCanvas" width="200" height="200" style="border:1px solid">\nYour browser does not support the canvas element.\n</canvas>\n\n<script type="text/javascript">\nvar c=document.getElementById("myCanvas");\nvar cxt=c.getContext("2d");\ncxt.fillStyle="#92B901";\ncxt.fillRect(50,50,100,100);\nfunction clearCanvas()\n{\nc.height=c.height;\n}\n\<\/script\>\n<br />\n<button onclick="clearCanvas()">清空画布</button>\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	th,td{
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
		border-left: 1px #EBEEF5 solid;
	}
</style>
