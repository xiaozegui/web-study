<template>
	<el-card>
		<h4>HTML 全局属性</h4>
		<el-divider></el-divider>
		<h4>实例</h4>
		<p>拖动数据会产生被拖动数据的副本：</p>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="dragzonetext1"></el-input>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>目前所有主流浏览器都不支持 dropzone 属性。</p>
		<el-divider></el-divider>
		<h4>定义和用法</h4>
		<p>dropzone 属性规定在元素上拖动数据时，是否拷贝、移动或链接被拖动数据。</p>
		<el-divider></el-divider>
		<h4>HTML 4.01 与 HTML5 之间的差异</h4>
		<p>draggable 属性是 HTML5 中的新属性。</p>
		<el-divider></el-divider>
		<h4>语法</h4>
		<el-input type="textarea" :readonly="istrue" style="width: 60%" v-model="dragzonetext2"></el-input>
		<h4>属性值</h4>
		<el-table :data="dragzonetext3" style="width: 100%" :border="istrue" :stripe="istrue">
			<el-table-column prop="value" label="值" >
			</el-table-column>
			<el-table-column prop="desc" label="描述" >
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default {
		data() {
			return {
				istrue:true,
				dragzonetext1:'<div dropzone="copy"></div>',
				dragzonetext2:'<element dropzone="copy|move|link">',
				dragzonetext3:[
					{'value':'copy','desc':'拖动数据会产生被拖动数据的副本。'},
					{'value':'move','desc':'拖动数据会导致被拖动数据被移动到新位置。'},
					{'value':'link','desc':'拖动数据会产生指向原始数据的链接。'}
				]
			}
		}
	}
</script>

<style scoped="scoped">
</style>
