<template>
	<el-card>
		<h4>HTML &lt;button&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>以下代码标记了一个按钮：</p>
		<code-card :mytextarea='button_text1' uniquename='button1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>所有主流浏览器都支持 &lt;button&gt; 标签。</p>
		<p><mark>重要事项：如果在 HTML 表单中使用 button 元素，不同的浏览器会提交不同的值。Internet Explorer 将提交 &lt;button&gt; 与 &lt;/button&gt; 之间的文本，而其他浏览器将提交 value 属性的内容。请在 HTML 表单中使用 input 元素来创建按钮。</mark></p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;button&gt; 标签定义一个按钮。</p>
		<p>在 button 元素内部，您可以放置内容，比如文本或图像。这是该元素与使用 input 元素创建的按钮之间的不同之处。</p>
		<p>&lt;button&gt; 控件 与 &lt;input type="button"&gt; 相比，提供了更为强大的功能和更丰富的内容。&lt;button&gt; 与 &lt;/button&gt; 标签之间的所有内容都是按钮的内容，其中包括任何可接受的正文内容，比如文本或多媒体内容。例如，我们可以在按钮中包括一个图像和相关的文本，用它们在按钮中创建一个吸引人的标记图像。</p>
		<p>唯一禁止使用的元素是图像映射，因为它对鼠标和键盘敏感的动作会干扰表单按钮的行为。</p>
		<p>请始终为按钮规定 type 属性。Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值是 "submit"。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>HTML 5 中的新属性：autofocus, form, formaction, formenctype, formmethod, formnovalidate 以及 formtarget。</p>
		<el-divider></el-divider>
		<h4>提示和注释</h4>
		<p><mark>注释：</mark>如果在 HTML 表单中使用 button 元素，不同的浏览器会提交不同的按钮值。请使用 input 元素在 HTML 表单中创建按钮。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性。</p>
		<el-table :data="button_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;<i class="el-icon-time" v-show="scope.row.isshow"></i></el-link>
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
		<p>&lt;button&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;button&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				button_text1:'<html>\n<body>\n\n<button type="button">Click Me!</button>\n\n</body>\n</html>\n',
				button_text2:[
					{'attr':'autofocus','value':'autofocus','desc':'规定当页面加载时按钮应当自动地获得焦点。','isshow':true},
					{'attr':'disabled','value':'disabled','desc':'规定应该禁用该按钮。','isshow':false},
					{'attr':'form','value':'form_name','desc':'规定按钮属于一个或多个表单。','isshow':true},
					{'attr':'formaction','value':'url','desc':'覆盖 form 元素的 action 属性。注释：该属性与 type="submit" 配合使用。','isshow':true},
					{'attr':'formenctype','value':'见注释','desc':'覆盖 form 元素的 enctype 属性。注释：该属性与 type="submit" 配合使用。','isshow':true},
					{'attr':'formmethod','value':'get post','desc':'覆盖 form 元素的 method 属性。注释：该属性与 type="submit" 配合使用','isshow':true},
					{'attr':'formnovalidate','value':'formnovalidate','desc':'覆盖 form 元素的 novalidate 属性。注释：该属性与 type="submit" 配合使用。','isshow':true},
					{'attr':'formtarget','value':'_blank _self _parent _top framename','desc':'覆盖 form 元素的 target 属性。注释：该属性与 type="submit" 配合使用','isshow':true},
					{'attr':'name','value':'button_name','desc':'规定按钮的名称。','isshow':true},
					{'attr':'type','value':'button reset submit','desc':'规定按钮的类型。'},
					{'attr':'value','value':'value','desc':'规定按钮的初始值。可由脚本进行修改。'}
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


