<template>
	<el-card>
		<h4>HTML &lt;menuitem&gt; 标签</h4>
		<p><strong>实例</strong></p>
		<p>包含不同 &lt;menuitem&gt; 元素的上下文菜单：</p>
		<code-card :mytextarea='menuitem_text1' uniquename='menuitem1'></code-card>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Firefox 8.0 以及更高的版本支持 &lt;menuitem&gt; 标签。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>&lt;menuitem&gt;标签定义用户可以从弹出菜单调用的命令/菜单项目。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML 5 之间的差异</h4>
		<p>&lt;menuitem&gt; 标签是 HTML 5 的新标签。</p>
		<el-divider></el-divider>
		<h4>属性</h4>
		<p><i class="el-icon-time"></i>HTML5 中的新属性</p>
		<el-table :data="menuitem_text2" style="width: 100%" :stripe="true" :border="true">
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
		<p>&lt;menuitem&gt;标签支持<el-link type='primary' href="/attribute">HTML5全局属性</el-link></p>
		<el-divider></el-divider>
		<h4>事件属性</h4>
		<p>&lt;menuitem&gt;标签支持<el-link type='primary' href='/event'>全局事件属性</el-link> </p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				menuitem_text1:'<!DOCTYPE html> \n<html> \n<body> \n \n<div style="background:yellow;border:1px solid #cccccc;padding: 10px;" contextmenu="mymenu"> \n<p>请在框中右键点击，就可以看到快捷菜单！</p> \n \n<menu type="context" id="mymenu"> \n  <menuitem label="Refresh" onclick="window.location.reload();" icon="ico_reload.png"></menuitem> \n  <menu label="Share on..."> \n    <menuitem label="Twitter" icon="ico_twitter.png" onclick="window.open(//twitter.com/intent/tweet?text= + window.location.href);"></menuitem> \n    <menuitem label="Facebook" icon="ico_facebook.png" onclick="window.open(//facebook.com/sharer/sharer.php?u= + window.location.href);"></menuitem> \n  </menu> \n  <menuitem label="Email This Page" onclick="window.location=mailto:?body=+window.location.href;"></menuitem> \n</menu> \n \n</div> \n \n<p>本例只在 Firefox 中有效！</p> \n \n</body> \n</html> \n',
				menuitem_text2:[
					{'attr':'checked','value':'checked','desc':'规定在页面加载后选中命令/菜单项目。仅适用于 type="radio" 或 type="checkbox"。','isshow':true},
					{'attr':'default','value':'default','desc':'把命令/菜单项设置为默认命令。','isshow':true},
					{'attr':'disabled','value':'disabled','desc':'	规定命令/菜单项应该被禁用。','isshow':true},
					{'attr':'icon','value':'URL','desc':'规定命令/菜单项的图标。','isshow':true},
					{'attr':'open','value':'open','desc':'定义 details 是否可见','isshow':true},
					{'attr':'label','value':'text','desc':'必需。规定命令/菜单项的名称，以向用户显示','isshow':true},
					{'attr':'radiogroup','value':'groupname','desc':'规定命令组的名称，命令组会在命令/菜单项本身被切换时进行切换。仅适用于 type="radio"','isshow':true},
					{'attr':'type','value':'checkbox command radio','desc':'规定命令/菜单项的类型。默认是 "command"。','isshow':true}
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


