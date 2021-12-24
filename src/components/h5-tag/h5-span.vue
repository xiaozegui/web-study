<template>
	<el-card>
		<h4>HTML &lt;span&gt; 标签</h4>
		<h4>浏览器支持</h4>
		<p>所有浏览器都支持 &lt;span&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;span&gt;  标签被用来组合文档中的行内元素。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>NONE</p>
		<h4>提示和注释：</h4>
		<p>提示：请使用 &lt;span&gt; 来组合行内元素，以便通过样式来格式化它们。</p>
		<p>注释：span 没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。</p>
		<el-divider></el-divider>
		<h4>例子</h4>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="span_text3"></el-input>
		<p>例子解释</p>
		<p>如果不对 span 应用样式，那么 span 元素中的文本与其他文本不会任何视觉上的差异。尽管如此，上例中的 span 元素仍然为 p 元素增加了额外的结构。</p>
		<p>可以为 span 应用 id 或 class 属性，这样既可以增加适当的语义，又便于对 span 应用样式。</p>
		<p>可以对同一个 &lt;span&gt; 元素应用 class 或 id 属性，但是更常见的情况是只应用其中一种。这两者的主要差异是，class 用于元素组（类似的元素，或者可以理解为某一类元素），而 id 用于标识单独的唯一的元素。</p>
		<p><span>提示：</span>事实上，您也许已经注意到了，W3School 站点上有一些文本的样式与其他文本是不同的。比如“提示”使用了粗体的橘红色。尽管实现这种效果的方法非常多，但是我们的做法是：使用“提示”使用 span 元素，然后对这个 span 元素的父元素，即 p 元素应用 class，这样就可以对这个类的子元素 span 应用相应的样式了。</p>
		<p>HTML:</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="span_text4"></el-input>
		<p>CSS:</p>
		<el-input type="textarea" :autosize="true" style="width: 60%;" :readonly="true" v-model="span_text5"></el-input>
		<el-divider></el-divider>
		<h4>全局属性</h4>
		<p>&lt;span&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;span&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				span_text1:'<!DOCTYPE html>\n<html>\n<body>\n\n<p><b>注释：</b>只有 Chrome 和 Safari 6 和支持 span 标签。</p>\n\n\n<table border="1">\n<tr>\n<th>一月 <span open>这是打开的对话窗口</span></th>\n<th>二月</th>\n<th>三月</th>\n</tr>\n<tr>\n<td>31</td>\n<td>28</td>\n<td>31</td>\n</tr>\n</table>\n\n</body>\n</html>\n',
				span_text3:'<p><span>some text.</span>some other text.</p>',
				span_text4:'<p class="tip"><span>提示：</span>... ... ...</p>',
				span_text5:'p.tip span { \n	font-weight:bold; \n	color:#ff9955; \n	} \n'
			}
		},
		components: {
			'code-card': codecard
		}
	}
</script>

<style scoped="scoped">
</style>


