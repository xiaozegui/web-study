<template>
	<el-card>
		<h4>HTML &lt;address&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>Example.com 的联系信息：</p>
		<code-card :mytextarea='addresstext1' uniquename='address1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;address&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;address&gt; 标签定义文档或文章的作者/拥有者的联系信息。</p>
		<p>如果 &lt;address&gt; 元素位于 &lt;body&gt; 元素内，则它表示文档联系信息</p>
		<p>如果 &lt;address&gt; 元素位于 &lt;article&gt; 元素内，则它表示文章的联系信息。</p>
		<p>&lt;address&gt; 元素中的文本通常呈现为斜体。大多数浏览器会在 address 元素前后添加折行。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p>提示：&lt;address&gt; 标签不应该用于描述通讯地址，除非它是联系信息的一部分。</p>
		<p>提示：&lt;address&gt; 元素通常连同其他信息被包含在 &lt;footer&gt; 元素中。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>HTML 4.01 不支持 &lt;article&gt; 标签，因此在 HTML 4.01 中，&lt;address&gt; 标签始终定义文档作者/拥有者的联系信息。</p>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;address&gt; 标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;address&gt; 标签支持<el-link type='primary' href='/event'>事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				addresstext1:'<!DOCTYPE html>\n<html>\n<body>\n\n<address>\nWritten by <a href="mailto:webmaster@example.com">Donald Duck</a>.<br> \nVisit us at:<br>\nExample.com<br>\nBox 564, Disneyland<br>\nUSA\n</address>\n\n</body>\n</html>\n',
				addresstext2:''
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>

