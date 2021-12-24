<template>
	<el-card>
		<h4>描述</h4>
		<p>HTML5 &lt;canvas&gt; 标签用于绘制图像（通过脚本，通常是 JavaScript）。</p>
		<p>不过，&lt;canvas&gt; 元素本身并没有绘制能力（它仅仅是图形的容器） - 您必须使用脚本来完成实际的绘图任务。</p>
		<p>getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。</p>
		<p>本手册提供完整的 getContext("2d") 对象属性和方法，可用于在画布上绘制文本、线条、矩形、圆形等等。</p>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9、Firefox、Opera、Chrome 以及 Safari 支持 &lt;canvas&gt; 及其属性和方法。</p>
		<p><strong>注释</strong>：Internet Explorer 8 以及更早的版本不支持 &lt;canvas&gt; 元素。</p>
		<el-divider></el-divider>
		<h4>颜色、样式和阴影</h4>
		<el-table :data="canvas_color_style_shadow" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<p></p>
		<p></p>
		<el-table :data="canvas_methods" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.method }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>线条样式</h4>
		<el-table :data="canvas_line_style" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>矩形</h4>
		<el-table :data="canvas_rect" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.method }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>路径</h4>
		<el-table :data="canvas_path" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.method }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>文本</h4>
		<el-table :data="canvas_text_attr" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<p></p>
		<p></p>
		<el-table :data="canvas_text_method" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.method }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>图像绘制</h4>
		<el-table :data="canvas_draw_method" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.method }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>像素操作</h4>
		<el-table :data="canvas_px_operate_attr" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<p></p><p></p>
		<el-table :data="canvas_px_operate_method" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.method }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>合成</h4>
		<el-table :data="canvas_compose" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.attr }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>其他</h4>
		<el-table :data="canvas_others" style="width: 100%" :stripe="istrue" :border="istrue">
			<el-table-column label="属性">
				<template slot-scope="scope">
					<el-link src="" type="primary">{{ scope.row.method }}&nbsp;</el-link>
				</template>
			</el-table-column>
			<el-table-column label="描述">
				<template slot-scope="scope">
					<span>{{scope.row.desc}}</span>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
	export default{
		data(){
			return {
				istrue:true,
				canvas_color_style_shadow:[
					{'attr':'fillStyle','desc':'设置或返回用于填充绘画的颜色、渐变或模式'},
					{'attr':'strokeStyle','desc':'设置或返回用于笔触的颜色、渐变或模式'},
					{'attr':'shadowColor','desc':'设置或返回用于阴影的颜色'},
					{'attr':'shadowBlur','desc':'设置或返回用于阴影的模糊级别'},
					{'attr':'shadowOffsetX','desc':'设置或返回阴影距形状的水平距离'},
					{'attr':'shadowOffsetY','desc':'设置或返回阴影距形状的垂直距离'}
				],
				canvas_methods:[
					{'method':'createLinearGradient()','desc':'创建线性渐变（用在画布内容上）'},
					{'method':'createPattern()','desc':'在指定的方向上重复指定的元素'},
					{'method':'createRadialGradient()','desc':'创建放射状/环形的渐变（用在画布内容上）'},
					{'method':'addColorStop()','desc':'规定渐变对象中的颜色和停止位置'}
				],
				canvas_line_style:[
					{'attr':'lineCap','desc':'设置或返回线条的结束端点样式'},
					{'attr':'lineJoin','desc':'设置或返回两条线相交时，所创建的拐角类型'},
					{'attr':'lineWidth','desc':'设置或返回当前的线条宽度'},
					{'attr':'miterLimit','desc':'设置或返回最大斜接长度'}
				],
				canvas_rect:[
					{'method':'rect()','desc':'创建矩形'},
					{'method':'fillRect()','desc':'绘制“被填充”的矩形'},
					{'method':'strokeRect()','desc':'绘制矩形（无填充）'},
					{'method':'clearRect()','desc':'在给定的矩形内清除指定的像素'}
				],
				canvas_path:[
					{'method':'fill()','desc':'填充当前绘图（路径）'},
					{'method':'stroke()','desc':'绘制已定义的路径'},
					{'method':'beginPath()','desc':'起始一条路径，或重置当前路径'},
					{'method':'moveTo()','desc':'把路径移动到画布中的指定点，不创建线条'},
					{'method':'closePath()','desc':'创建从当前点回到起始点的路径'},
					{'method':'lineTo()','desc':'添加一个新点，然后在画布中创建从该点到最后指定点的线条'},
					{'method':'clip()','desc':'从原始画布剪切任意形状和尺寸的区域'},
					{'method':'quadraticCurveTo()','desc':'创建二次贝塞尔曲线'},
					{'method':'bezierCurveTo()','desc':'创建三次方贝塞尔曲线'},
					{'method':'arc()','desc':'创建弧/曲线（用于创建圆形或部分圆）'},
					{'method':'arcTo()','desc':'创建两切线之间的弧/曲线'},
					{'method':'isPointInPath()','desc':'如果指定的点位于当前路径中，则返回 true，否则返回 false'}
				],
				canvas_trans:[
					{'method':'scale()','desc':'缩放当前绘图至更大或更小'},
					{'method':'rotate()','desc':'旋转当前绘图'},
					{'method':'translate()','desc':'重新映射画布上的 (0,0) 位置'},
					{'method':'transform()','desc':'替换绘图的当前转换矩阵'},
					{'method':'setTransform()','desc':'将当前转换重置为单位矩阵。然后运行 transform()'}
				],
				canvas_text_attr:[
					{'attr':'font','desc':'设置或返回文本内容的当前字体属性'},
					{'attr':'textAlign','desc':'设置或返回文本内容的当前对齐方式'},
					{'attr':'textBaseline','desc':'设置或返回在绘制文本时使用的当前文本基线'}
				],
				canvas_text_method:[
					{'method':'fillText()','desc':'在画布上绘制“被填充的”文本'},
					{'method':'strokeText()','desc':'在画布上绘制文本（无填充）'},
					{'method':'measureText()','desc':'返回包含指定文本宽度的对象'}
				],
				canvas_draw_method:[
					{'method':'drawImage()','desc':'向画布上绘制图像、画布或视频'}
				],
				canvas_px_operate_attr:[
					{'attr':'width','desc':'返回 ImageData 对象的宽度'},
					{'attr':'height','desc':'返回 ImageData 对象的高度'},
					{'attr':'data','desc':'返回一个对象，其包含指定的 ImageData 对象的图像数据'}
				],
				canvas_px_operate_method:[
					{'method':'createImageData()','desc':'创建新的、空白的 ImageData 对象'},
					{'method':'getImageData()','desc':'返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据'},
					{'method':'putImageData()','desc':'把图像数据（从指定的 ImageData 对象）放回画布上'}
				],
				canvas_compose:[
					{'attr':'globalAlpha','desc':'设置或返回绘图的当前 alpha 或透明值'},
					{'attr':'globalCompositeOperation','desc':'设置或返回新图像如何绘制到已有的图像上'}
				],
				canvas_others:[
					{'method':'save()','desc':'保存当前环境的状态'},
					{'method':'restore()','desc':'返回之前保存过的路径状态和属性'},
					{'method':'createEvent()','desc':''},
					{'method':'getContext()','desc':''},
					{'method':'toDataURL()','desc':''}
				]
			}
		}
	}
</script>

<style scoped="scoped">
</style>
