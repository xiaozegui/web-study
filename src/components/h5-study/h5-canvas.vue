<template>
	<el-card>
		<p><strong>canvas 元素用于在网页上绘制图形。</strong></p>
		<el-divider></el-divider>
		<h4>什么是 Canvas？</h4>
		<p>HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。</p>
		<p>画布是一个矩形区域，您可以控制其每一像素。</p>
		<p>canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。</p>
		<el-divider></el-divider>
		<h4>创建 Canvas 元素</h4>
		<p>向 HTML5 页面添加 canvas 元素。</p>
		<p>规定元素的 id、宽度和高度：</p>
		<el-input type="textarea" v-model="canvastext1" :readonly="istrue" :autosize="istrue" style="width: 60%;"></el-input>
		<el-divider></el-divider>
		<h4>通过 JavaScript 来绘制</h4>
		<p>canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：</p>
		<el-input type="textarea" v-model="canvastext2" :readonly="istrue" :autosize="istrue" style="width: 60%;"></el-input>
		<p>JavaScript 使用 id 来寻找 canvas 元素：</p>
		<el-input type="textarea" v-model="canvastext3" :readonly="istrue" :autosize="istrue" style="width: 60%;"></el-input>
		<p>然后，创建 context 对象：</p>
		<el-input type="textarea" v-model="canvastext4" :readonly="istrue" :autosize="istrue" style="width: 60%;"></el-input>
		<p>getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。下面的两行代码绘制一个红色的矩形：</p>
		<el-input type="textarea" v-model="canvastext5" :readonly="istrue" :autosize="istrue" style="width: 60%;"></el-input>
		<p>fillStyle 方法将其染成红色，fillRect 方法规定了形状、位置和尺寸。</p>
		<el-divider></el-divider>
		<h4>理解坐标</h4>
		<p>上面的 fillRect 方法拥有参数 (0,0,150,75)。</p>
		<p>意思是：在画布上绘制 150x75 的矩形，从左上角开始 (0,0)。</p>
		<p>如下面实例所示，画布的 X 和 Y 坐标用于在画布上对绘画进行定位。</p>
		<code-card :mytextarea="canvastext6" uniquename="canvas1"></code-card>
		<el-divider></el-divider>
		<h4>更多 Canvas 实例</h4>
		<p>下面的在 canvas 元素上进行绘画的更多实例：</p>
		<p><strong>实例 - 线条</strong></p>
		<p>通过指定从何处开始，在何处结束，来绘制一条线：</p>
		<code-card :mytextarea="canvastext7" uniquename="cavas2"></code-card>
		<p><strong>实例 - 圆形</strong></p>
		<p>通过规定尺寸、颜色和位置，来绘制一个圆：</p>
		<code-card :mytextarea="canvastext8" uniquename="cavas3"></code-card>
		<p><strong>实例 - 渐变</strong></p>
		<p>使用您指定的颜色来绘制渐变背景：</p>
		<code-card :mytextarea="canvastext9" uniquename="cavas4"></code-card>
		<p><strong>实例 - 图像</strong></p>
		<p>把一幅图像放置到画布上：</p>
		<code-card :mytextarea="canvastext10" uniquename="canvas5"></code-card>
		<el-divider></el-divider>
		<h4>相关页面</h4>
		<p>参考手册：<el-link type="primary">HTML 5 &lt;canvas&gt; 标签</el-link></p>
		<p>参考手册：<el-link type="primary">HTML DOM Canvas 对象</el-link></p>
	</el-card>
</template>

<script>
	import codecard from '../code-card.vue'
	export default{
		data(){
			return{
				istrue:true,
				canvastext1:'<canvas id="myCanvas" width="200" height="100"></canvas>',
				canvastext2:'\<script type="text/javascript"\>\nvar c=document.getElementById("myCanvas");\nvar cxt=c.getContext("2d");\ncxt.fillStyle="#FF0000";\ncxt.fillRect(0,0,150,75);\n\<\/script\>\n',
				canvastext3:'var c=document.getElementById("myCanvas");',
				canvastext4:'var cxt=c.getContext("2d"); ',
				canvastext5:'cxt.fillStyle="#FF0000";\ncxt.fillRect(0,0,150,75);',
				canvastext6:'<!DOCTYPE HTML>\n<html>\n<head>\n<style type="text/css"> \nbody\n{\nfont-size:70%;\nfont-family:verdana,helvetica,arial,sans-serif;\n}\n</style>\n\n<script type="text/javascript"> \nfunction cnvs_getCoordinates(e)\n{\nx=e.clientX;\ny=e.clientY;\ndocument.getElementById("xycoordinates").\ninnerHTML="Coordinates: (" + x + "," + y + ")";\n}\n \nfunction cnvs_clearCoordinates()\n{\ndocument.getElementById("xycoordinates").innerHTML="";\n}\n\<\/script\>\n</head>\n\n<body style="margin:0px;">\n\n<p>把鼠标悬停在下面的矩形上可以看到坐标：</p>\n\n<div id="coordiv" style="float:left;width:199px;height:99px;\nborder:1px solid #c3c3c3" onmousemove=\n"cnvs_getCoordinates(event)" onmouseout="cnvs_clearCoordinates()"></div>\n<br />\n<br />\n<br />\n<div id="xycoordinates"></div>\n \n \n</body>\n</html>\n',
				canvastext7:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">\nYour browser does not support the canvas element.\n</canvas>\n\n<script type="text/javascript">\n\nvar c=document.getElementById("myCanvas");\nvar cxt=c.getContext("2d");\ncxt.moveTo(10,10);\ncxt.lineTo(150,50);\ncxt.lineTo(10,50);\ncxt.stroke();\n\n\<\/script\>\n\n</body>\n</html>\n',
				canvastext8:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<canvas id="myCanvas2" width="200" height="100" \nstyle="border:1px solid #c3c3c3;">\nYour browser does not support the canvas element.\n</canvas>\n\n<script type="text/javascript">\n\nvar c=document.getElementById("myCanvas2");\nvar cxt=c.getContext("2d");\ncxt.fillStyle="#FF0000";\ncxt.beginPath();\ncxt.arc(70,18,15,0,Math.PI*2,true);\ncxt.closePath();\ncxt.fill();\n\n\<\/script\>\n\n</body>\n</html>\n',
				canvastext9:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<canvas id="myCanvas3" width="200"\n height="100" style="border:1px solid #c3c3c3;">\nYour browser does not support the canvas element.\n</canvas>\n\n\n<script type="text/javascript">\n\nvar c=document.getElementById("myCanvas3");\nvar cxt=c.getContext("2d");\nvar grd=cxt.createLinearGradient(0,0,175,50);\ngrd.addColorStop(0,"#FF0000");\ngrd.addColorStop(1,"#00FF00");\ncxt.fillStyle=grd;\ncxt.fillRect(0,0,175,50);\n\n\<\/script\>\n\n</body>\n</html>\n',
				canvastext10:'<!DOCTYPE HTML>\n<html>\n<body>\n\n<canvas id="myCanvas4" width="200" height="100" style="border:1px solid #c3c3c3;">\nYour browser does not support the canvas element.\n</canvas>\n\n<script type="text/javascript">\n\nvar c=document.getElementById("myCanvas4");\nvar cxt=c.getContext("2d");\nvar img=new Image()\nimg.src="static/video/ev-flower.jpg";\ncxt.drawImage(img,0,0);\n\n\<\/script\>\n\n</body>\n</html>\n'
			}
		},
		components:{
			'code-card':codecard
		}
	}
</script>

<style scoped="scoped">
</style>
