<template>
	<el-card>
		<h4>HTML &lt;width&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>带有 400 像素宽度的表格：</p>
		<code-card :mytextarea="width_text1" uniquename='width1'></code-card>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>width 属性规定表格的宽度。</p>
		<p>如果没有设置 width 属性，表格会占用需要的空间来显示表格数据。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="width_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th>值</th>
					<th>描述</th>
				</tr>
				<tr>
					<td><i>pixels</i></td>
					<td>设置以像素计的宽度（例子：width="50"）。</td>
				</tr>
				<tr>
					<td><i>%</i></td>
					<td>设置以包含元素的百分比计的宽度（例子：width="50%"）。</td>
				</tr>
			</tbody>
		</table>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>清空画布</p>
		<code-card :mytextarea="width_text3" uniquename='width3'></code-card>
		<br><br>
		<el-link type='primary' href="/canvas">HTML &lt;canvas&gt;标签</el-link>
		<br><br>
		<el-link type='primary' href="/table">HTML &lt;table&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				width_text1: '<html>\n<body>\n\n<table border="1" width="400">\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n  <tr>\n    <td>February</td>\n    <td>$80</td>\n  </tr>\n</table>\n\n</body>\n</html>\n',
				width_text2: '<body width="value">',
				width_text3: '<!DOCTYPE html>\n<html>\n<body>\n\n<canvas id="myCanvas" width="200" height="200" style="border:1px solid">\nYour browser does not support the canvas element.\n</canvas>\n\n<script type="text/javascript">\nvar c=document.getElementById("myCanvas");\nvar cxt=c.getContext("2d");\ncxt.fillStyle="#92B901";\ncxt.fillRect(50,50,100,100);\nfunction clearCanvas()\n{\nc.height=c.height;\n}\n\<\/script\>\n<br />\n<button onclick="clearCanvas()">清空画布</button>\n</body>\n</html>\n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	th,
	td {
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
		border-left: 1px #EBEEF5 solid;
	}
</style>
