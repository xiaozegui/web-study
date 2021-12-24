<template>
	<el-card>
		<h4>HTML &lt;code&gt; 标签</h4>
		<h4>定义和用法</h4>
		<p>&lt;code&gt; 标签用于表示计算机源代码或者其他机器可以阅读的文本内容。</p>
		<p>软件代码的编写者已经习惯了编写源代码时文本表示的特殊样式。&lt;code&gt; 标签就是为他们设计的。包含在该标签内的文本将用等宽、类似电传打字机样式的字体（Courier）显示出来，对于大多数程序员和 W3School 的用户来说，这应该是十分熟悉的。</p>
		<p>只应该在表示计算机程序源代码或者其他机器可以阅读的文本内容上使用 &lt;code&gt; 标签。虽然 &lt;code&gt; 标签通常只是把文本变成等宽字体，但它暗示着这段文本是源程序代码。将来的浏览器有可能会加入其他显示效果。例如，程序员的浏览器可能会寻找 &lt;code&gt; 片段，并执行某些额外的文本格式化处理，如循环和条件判断语句的特殊缩进等。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>提示：如果只是希望使用等宽字体的效果，请使用 &lt;tt&gt; 标签。或者，如果想要在严格限制为等宽字体格式的文本中显示编程代码，请使用 &lt;pre&gt; 标签。</p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>




