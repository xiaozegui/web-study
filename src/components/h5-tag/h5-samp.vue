<template>
	<el-card>
		<h4>HTML &lt;samp&gt; 标签</h4>
		<h4>定义和用法</h4>
		<p>&lt;samp&gt; 标签表示一段用户应该对其没有什么其他解释的文本字符。要从正常的上下文抽取这些字符时，通常要用到这个标签。</p>
		<p>请看下面的例子：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="samp_text1"></el-input>
		<p>上面的 HTML 代码会显示为：</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="samp_text2"></el-input>
		<p>注释：在 HTML 中，用于 "ae" 连字的特殊实体是 "&aelig;"，大多数浏览器都会将它转换成相应的 "æ" 连字字符。</p>
		<p>&lt;samp&gt; 标签并不经常使用。只有在要从正常的上下文中将某些短字符序列提取出来，对它们加以强调的极少情况下，才使用这个标签。</p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				samp_text1:'字符序列 <samp>ae</samp> 可能会被转换为 &aelig; 连字字符。',
				samp_text2:'字符序列 ae 可能会被转换为 æ 连字字符。'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


