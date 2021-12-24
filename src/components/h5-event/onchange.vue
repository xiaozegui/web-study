<template>
	<el-card>
		<h4>HTML onchange 事件属性</h4>
		<p><strong>实例</strong></p>
		<p>当值改变时检查输入字段：</p>
		<code-card :mytextarea='onchange_text1' uniquename='onchange1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 onchange 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>onchange 在元素值改变时触发。</p>
		<p>onchange 属性适用于：&lt;input&gt;、&lt;textarea&gt; 以及 &lt;select&gt; 元素。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>None</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="onchange_text3"></el-input>
		<h4>属性值</h4>
		<el-table :data="onchange_text2" style="width: 100%" :stripe="true" :border="true">
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
				onchange_text1:'<!DOCTYPE html>\n<html>\n<head>\n<script>\nfunction checkField(val)\n{\nalert("输入值已更改。新值是：" + val);\n}\n\<\/script\>\n</head>\n<body>\n\n<p>请修改输入字段中的文本，然后在字段外点击以触发 onchange。</p>\n\n请输入文本：<input type="text" name="txt" value="Hello" onchange="checkField(this.value)">\n\n</body>\n</html>\n',
				onchange_text2:[
					{'value':'script','desc':'onchange 发生时运行的脚本。'}
				],
				onchange_text3:'<element onchange="script">'
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


