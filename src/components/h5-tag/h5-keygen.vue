<template>
	<el-card>
		<h4>HTML &lt;keygen&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>带有 keygen 字段的表单：</p>
		<code-card :mytextarea='keygen_text1' uniquename='keygen1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Firefox, Chrome, Opera 以及 Safari 6 支持 &lt;keygen&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;keygen&gt; 标签规定用于表单的密钥对生成器字段。</p>
		<p>当提交表单时，私钥存储在本地，公钥发送到服务器。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;keygen&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="keygen_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link><i class="el-icon-time" v-show="scope.row.isshow"></i>
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
		<h4>全局属性</h4>
		<p>&lt;keygen&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;keygen&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				keygen_text1:'<!DOCTYPE HTML> \n<html> \n<body> \n \n<form action="static/codeview.html" method="get"> \n用户名：<input type="text" name="usr_name" /> \n加密：<keygen name="security" /> \n<input type="submit" /> \n</form> \n \n</body> \n</html> \n',
				keygen_text2:[
					{'attr':'autofocus','value':'autofocus','desc':'使 keygen 字段在页面加载时获得焦点。','isshow':true},
					{'attr':'challenge','value':'challenge','desc':'如果使用，则将 keygen 的值设置为在提交时询问','isshow':true},
					{'attr':'disabled','value':'disabled','desc':'禁用 keytag 字段','isshow':true},
					{'attr':'form','value':'formname','desc':'定义该 keygen 字段所属的一个或多个表单。','isshow':true},
					{'attr':'keytype','value':'rsa','desc':'定义 keytype。rsa 生成 RSA 密钥。','isshow':true},
					{'attr':'name','value':'fieldname','desc':'定义 keygen 元素的唯一名称。 name 属性用于在提交表单时搜集字段的值','isshow':true}
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


