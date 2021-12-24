<template>
	<el-card>
		<h4>HTML &lt;object&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>使用 &lt;object&gt; 元素：</p>
		<code-card :mytextarea='object_text1' uniquename='object1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>几乎所有主流浏览器都拥有部分对支持 &lt;object&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>定义一个嵌入的对象。请使用此元素向您的 XHTML 页面添加多媒体。此元素允许您规定插入 HTML 文档中的对象的数据和参数，以及可用来显示和操作数据的代码。</p>
		<p>&lt;object&gt; 标签用于包含对象，比如图像、音频、视频、Java applets、ActiveX、PDF 以及 Flash。</p>
		<p>object 的初衷是取代 img 和 applet 元素。不过由于漏洞以及缺乏浏览器支持，这一点并未实现。</p>
		<p>浏览器的对象支持有赖于对象类型。不幸的是，主流浏览器都使用不同的代码来加载相同的对象类型。</p>
		<p>而幸运的是，object 对象提供了解决方案。如果未显示 object 元素，就会执行位于 &lt;object&gt; 和 &lt;/object&gt; 之间的代码。通过这种方式，我们能够嵌套多个 object 元素（每个对应一个浏览器）。</p>
		<el-divider></el-divider>
		<h4>HTML 与 XHTML 之间的差异</h4>
		<p>NONE</p>
		<h4>提示和注释：</h4>
		<p>注释：&lt;param&gt; 标签定义用于对象的 run-time 设置。</p>
		<p>注释：不要对图像使用 &lt;object&gt; 标签，请使用 &lt;img&gt; 标签代替。</p>
		<el-divider></el-divider>
		<h4>可选的属性</h4>
		<el-table :data="object_text2" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;&nbsp;</el-link>
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
		<p>&lt;object&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;object&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				object_text1:'<object classid="clsid:F08DF954-8592-11D1-B16A-00C0F0283628" id="Slider1"  \nwidth="100" height="50"> \n<param name="BorderStyle" value="1" /> \n<param name="MousePointer" value="0" /> \n<param name="Enabled" value="1" /> \n<param name="Min" value="0" /> \n<param name="Max" value="10" /> \n</object> \n',
				object_text2:[
					{'attr':'align','value':'left right top bottom','desc':'定义围绕该对象的文本对齐方式。'},
					{'attr':'archive','value':'URL','desc':'由空格分隔的指向档案文件的 URL 列表。这些档案文件包含了与对象相关的资源'},
					{'attr':'border','value':'pixels','desc':'定义对象周围的边框'},
					{'attr':'classid','value':'class ID','desc':'定义嵌入 Windows Registry 中或某个 URL 中的类的 ID 值，此属性可用来指定浏览器中包含的对象的位置，通常是一个 Java 类。'},
					{'attr':'codebase','value':'URL','desc':'定义在何处可找到对象所需的代码，提供一个基准 URL。'},
					{'attr':'codetype','value':'MIME type','desc':'	通过 classid 属性所引用的代码的 MIME 类型'},
					{'attr':'data','value':'URL','desc':'定义引用对象数据的 URL。如果有需要对象处理的数据文件,要用 data 属性来指定这些数据文件。'},
					{'attr':'declare','value':'declare','desc':'可定义此对象仅可被声明，但不能被创建或例示，直到此对象得到应用为止。'},
					{'attr':'form','value':'form_id','desc':'规定对象所属的一个或多个表单'},
					{'attr':'height','value':'pixels','desc':'定义对象的高度'},
					{'attr':'hspace','value':'pixels','desc':'定义对象周围水平方向的空白'},
					{'attr':'name','value':'unique_name','desc':'为对象定义唯一的名称'},
					{'attr':'standby','value':'text','desc':'定义当对象正在加载时所显示的文本'},
					{'attr':'type','value':'MIME_type','desc':'定义被规定在 data 属性中指定的文件中出现的数据的 MIME 类型'},
					{'attr':'usemap','value':'URL','desc':'规定与对象一同使用的客户端图像映射的 URL'},
					{'attr':'vspace','value':'pixels','desc':'定义对象的垂直方向的空白'},
					{'attr':'width','value':'pixels','desc':'定义对象的宽度。'}
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


