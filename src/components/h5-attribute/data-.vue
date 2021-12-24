<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>使用 data-* 属性来嵌入自定义数据：：</p>
		<code-card :mytextarea="data_text1" uniquename='data1'></code-card>
		<p>浏览器支持:所有主流浏览器都支持 data-* 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>data-* 属性用于存储页面或应用程序的私有自定义数据。</p>
		<p>data-* 属性赋予我们在所有 HTML 元素上嵌入自定义 data 属性的能力。</p>
		<p>存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 Ajax 调用或服务器端数据库查询）。</p>
		<p>data-* 属性包括两部分：</p>
		<ul>
			<li v-for="item in data_text3" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<p>注释：用户代理会完全忽略前缀为 "data-" 的自定义属性。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>data-* 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="data_text4"></el-input>
		<h4>属性值</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th>值</th>
					<th>描述</th>
				</tr>
				<tr>
					<td><i>somevalue</i></td>
					<td>规定属性的值（以字符串）。</td>
				</tr>
			</tbody>
		</table>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue: true,
				data_text1: '<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction showDetails(animal) {\n    var animalType = animal.getAttribute("data-animal-type");\n    alert(animal.innerHTML + "是一种" + animalType + "。");\n}\n\<\/script\>\n</head>\n<body>\n\n<h1>物种</h1>\n\n<p>点击某个物种来查看其类别：</p>\n\n<ul>\n  <li onclick="showDetails(this)" id="owl" data-animal-type="鸟类">喜鹊</li>\n  <li onclick="showDetails(this)" id="salmon" data-animal-type="鱼类">金枪鱼</li>  \n  <li onclick="showDetails(this)" id="tarantula" data-animal-type="蜘蛛">蝇虎</li>  \n</ul>\n\n</body>\n</html>\n',
				data_text2: '',
				data_text3: [
					'属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符',
					'属性值可以是任意字符串'
				],
				data_text4: '<element data-*="somevalue">'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
	th {
		border-top: 1px #EBEEF5 solid;
		border-bottom: 1px #EBEEF5 solid;
		border-left: 1px #EBEEF5 solid;
	}
	
	td {
		border-left: 1px #EBEEF5 solid;
	}
</style>
