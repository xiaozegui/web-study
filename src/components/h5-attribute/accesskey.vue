<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<p><strong>实例</strong></p>
		<p>带有指定快捷键的超链接：</p>
		<code-card :mytextarea="accesskeytext1" uniquename='accesskey1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>几乎所有浏览器均 accesskey 属性，除了 Opera。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>ccesskey 属性规定激活（使元素获得焦点）元素的快捷键。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>注释：以下元素支持 accesskey 属性：&lt;a&gt;, &lt;area&gt;, &lt;button&gt;, &lt;input&gt;, &lt;label&gt;, &lt;legend&gt; 以及
			&lt;textarea&gt;。</p>
		<el-divider></el-divider>
		<p>语法</p>
		<el-input type="textarea" :readonly="istrue" style="width:60%" v-model="accesskeytext2"></el-input>
		<h4>属性值</h4>
		<table class="el-table">
			<tbody>
				<tr>
					<th>值</th>
					<th>描述</th>
				</tr>

				<tr>
					<td><i>character</i></td>
					<td>规定激活（使元素获得焦点）元素的便捷按键。</td>
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
				accesskeytext1: '<!DOCTYPE html>\n<html>\n<body>\n\n<a href="http://www.w3school.com.cn/html/" accesskey="h">HTML 教程</a><br />\n<a href="http://www.w3school.com.cn/css/" accesskey="c">CSS 教程</a>\n\n<p><b>注释：</b>请使用Alt + <i>accessKey</i> (或者 Shift + Alt + <i>accessKey</i>) \n来访问带有指定快捷键的元素。</p>\n\n</body>\n</html>\n',
				accesskeytext2: '<element accesskey="character">'
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
