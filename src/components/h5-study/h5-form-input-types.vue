<template>
	<el-card>
		<h4>HTML5 新的 Input 类型</h4>
		<p>HTML5 拥有多个新的表单输入类型。这些新特性提供了更好的输入控制和验证。</p>
		<p>本章全面介绍这些新的输入类型：</p>
		<ul>
			<li v-for="item in inputtypes" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<el-table :data="exploresupport" :border="istrue" :stripe="istrue">
			<el-table-column prop="type" label="Input type">
			</el-table-column>
			<el-table-column prop="ie" label="IE">
			</el-table-column>
			<el-table-column prop="firefox" label="FireFox">
			</el-table-column>
			<el-table-column prop="opera" label="Opera">
			</el-table-column>
			<el-table-column prop="chrome" label="Chrome">
			</el-table-column>
			<el-table-column prop="safari" label="Safari">
			</el-table-column>
		</el-table>
		<p><strong>注释</strong>：Opera 对新的输入类型的支持最好。不过您已经可以在所有主流的浏览器中使用它们了。即使不被支持，仍然可以显示为常规的文本域。</p>
		<el-divider></el-divider>
		<h4>Input 类型 - email</h4>
		<p>email 类型用于应该包含 e-mail 地址的输入域。</p>
		<p>在提交表单时，会自动验证 email 域的值。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="forminputtypestext1" uniquename="forminputtype1"></code-card>
		<p><strong>提示</strong>：iPhone 中的 Safari 浏览器支持 email 输入类型，并通过改变触摸屏键盘来配合它（添加 @ 和 .com 选项）。</p>
		<el-divider></el-divider>
		<h4>Input 类型 - url</h4>
		<p>url 类型用于应该包含 URL 地址的输入域。</p>
		<p>在提交表单时，会自动验证 url 域的值。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="forminputtypestext2" uniquename="forminputtype2"></code-card>
		<p><strong>提示</strong>：iPhone 中的 Safari 浏览器支持 url 输入类型，并通过改变触摸屏键盘来配合它（添加 .com 选项）。</p>
		<el-divider></el-divider>
		<h4>Input 类型 - number</h4>
		<p>number 类型用于应该包含数值的输入域。</p>
		<p>您还能够设定对所接受的数字的限定：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="forminputtypestext3" uniquename="forminputtype3"></code-card>
		<p>请使用下面的属性来规定对数字类型的限定：</p>
		<el-table :data="nunmbertype" :border="istrue" :stripe="istrue">
			<el-table-column prop="attr" label="属性">
			</el-table-column>
			<el-table-column prop="value" label="值">
			</el-table-column>
			<el-table-column prop="desc" label="描述">
			</el-table-column>
		</el-table>
		<p>请试一下带有所有限定属性的例子：</p>
		<code-card :mytextarea="forminputtypestext4" uniquename="forminputtype4"></code-card>
		<el-divider></el-divider>
		<h4>Input 类型 - range</h4>
		<p>range 类型用于应该包含一定范围内数字值的输入域。</p>
		<p>range 类型显示为滑动条。</p>
		<p>您还能够设定对所接受的数字的限定：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="forminputtypestext5" uniquename="forminputtype5"></code-card>
		<p>请使用下面的属性来规定对数字类型的限定：</p>
		<el-table :data="nunmbertype" :border="istrue" :stripe="istrue">
			<el-table-column prop="attr" label="属性">
			</el-table-column>
			<el-table-column prop="value" label="值">
			</el-table-column>
			<el-table-column prop="desc" label="描述">
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>Input 类型 - Date Pickers（日期选择器）</h4>
		<p>HTML5 拥有多个可供选取日期和时间的新输入类型：</p>
		<ul>
			<li v-for="item in calendarinput" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<p>下面的例子允许您从日历中选取一个日期：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="forminputtypestext6" uniquename="forminputtype6"></code-card>
		<p>请您在代码区尝试替换不同type类型，在线运行</p>
		<p>输入类型 "month":type="month"</p>
		<p>输入类型 "week":type="week"</p>
		<p>输入类型 "time":type="time"</p>
		<p>输入类型 "datetime":type="datetime"</p>
		<p>输入类型 "datetime-local":type="datetime-local"</p>
		<el-divider></el-divider>
		<h4>Input 类型 - search</h4>
		<p>search 类型用于搜索域，比如站点搜索或 Google 搜索。</p>
		<p>search 域显示为常规的文本域。</p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default{
		data(){
			return {
				istrue:true,
				inputtypes:[
					'email',
					'url',
					'number',
					'range',
					'Date pickers (date, month, week, time, datetime, datetime-local)',
					'search',
					'color'
				],
				exploresupport:[
					{'type':'email','ie':'No','firefox':'4.0','opera':'9.0','chrome':'10.0','safari':'No'},
					{'type':'url','ie':'No','firefox':'4.0','opera':'9.0','chrome':'10.0','safari':'No'},
					{'type':'number','ie':'No','firefox':'No','opera':'9.0','chrome':'7.0','safari':'No'},
					{'type':'range','ie':'No','firefox':'No','opera':'9.0','chrome':'4.0','safari':'4.0'},
					{'type':'Date pickers','ie':'No','firefox':'No','opera':'9.0','chrome':'10.0','safari':'No'},
					{'type':'search','ie':'No','firefox':'4.0','opera':'11.0','chrome':'10.0','safari':'No'},
					{'type':'color','ie':'No','firefox':'No','opera':'11.0','chrome':'No','safari':'No'}
				],
				forminputtypestext1:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nE-mail: <input type="email" name="user_email" /><br />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				forminputtypestext2:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nHomepage: <input type="url" name="user_url" /><br />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				forminputtypestext3:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nPoints: <input type="number" name="points" min="1" max="10" />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				nunmbertype:[
					{'attr':'max','value':'number','desc':'规定允许的最大值'},
					{'attr':'min','value':'number','desc':'规定允许的最小值'},
					{'attr':'step','value':'number','desc':'规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等）'},
					{'attr':'value','value':'number','desc':'规定默认值'}
				],
				forminputtypestext4:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\n<input type="number" name="points" min="0" max="10" step="3" value="6" />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				forminputtypestext5:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nPoints: <input type="range" name="points" min="1" max="10" />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n',
				calendarinput:[
					'date - 选取日、月、年',
					'month - 选取月、年',
					'week - 选取周和年',
					'time - 选取时间（小时和分钟）',
					'datetime - 选取时间、日、月、年（UTC 时间）',
					'datetime-local - 选取时间、日、月、年（本地时间）'
				],
				forminputtypestext6:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<form action="static/codeview.html" method="get">\nDate: <input type="date" name="user_date" />\n<input type="submit" />\n</form>\n\n</body>\n</html>\n'
			}
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
