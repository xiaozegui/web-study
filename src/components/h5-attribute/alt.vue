<template>
	<el-card>
		<h4>HTML &lt;alt&gt;属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>如果无法显示图像，浏览器将显示替代文本，就像这样：</p>
		<code-card :mytextarea="alt_text1" uniquename='alt1'></code-card>
		<p>此外，当用户把鼠标移到图像上方，最新的浏览器会在一个文本框中显示描述性文本。下面的代码在 alt 属性中为图像添加了描述性文本：</p>
		<p>您可以把鼠标移动到下面的照片上，看看相应的效果</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>alt 属性是一个必需的属性，它规定在图像无法显示时的替代文本。</p>
		<p>假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：</p>
		<ul>
		<li style="font-size: 14px;margin: 5px 0px;">网速太慢</li>
		<li style="font-size: 14px;margin: 5px 0px;">src 属性中的错误</li>
		<li style="font-size: 14px;margin: 5px 0px;">浏览器禁用图像</li>
		<li style="font-size: 14px;margin: 5px 0px;">用户使用的是屏幕阅读器</li>
		</ul>
		<p>&lt;img&gt; 标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。</p>
		<p>我们强烈推荐您在文档的每个图像中都使用这个属性。这样即使图像无法显示，用户还是可以看到关于丢失了什么东西的一些信息。而且对于残疾人来说，alt 属性通常是他们了解图像内容的唯一方式。</p>
		<el-divider></el-divider>
		<h4>提示和注释：</h4>
		<p class="note"><span>注释：</span>alt 属性的值是一个最多可以包含 1024 个字符的字符串，其中包括空格和标点。这个字符串必须包含在引号中。这段 alt 文本中可以包含对特殊字符的实体引用，但它不允许包含其他类别的标记，尤其是不允许有任何样式标签。</p>
		<p class="note"><span>注释：</span>当用户把鼠标移动到 img 元素上时，Internet Explorer 会显示出 alt 属性的值。这种行为并不正确。所有其他的浏览器正在向规范靠拢，只要当图像无法显示时，才会显示出替代文本。</p>
		<p class="tip"><span>提示：</span>如果需要为图像创建工具提示，请使用 title 属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="true" style="width: 60%" v-model="alt_text2" :autosize='true'></el-input>
		<h4>属性值</h4>
		<el-table :data="alt_text3" style="width: 100%" :stripe="true" :border="true">
			<el-table-column label="属性">
				<template slot-scope="scope">
					{{ scope.row.attr }}
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<br><br>
		<el-link type='primary' href="/img">HTML &lt;img&gt;标签</el-link>
	</el-card>
</template>

<script>
	import codecard from '../iframe-view.vue'
	export default {
		data() {
			return {
				istrue: true,
				alt_text1: '<html>\n<body>\n\n<img src="/i/eg_tulip.jpg"  alt="上海鲜花港 - 郁金香" />\n\n</body>\n</html>\n',
				alt_text2: '<a alt="value">',
				alt_text3:[
					{'attr':'text','desc':'规定图像的替代文本 alt 文本的使用原则：如果图像包含信息 - 使用 alt 描述图像 如果图像在 a 元素中 - 使用 alt 描述目标链接 如果图像仅供装饰 - 使用 alt=""'}
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
