<template>
	<el-card>
		<p><strong>HTML5 Geolocation（地理定位）用于定位用户的位置。</strong></p>
		<code-card :mytextarea="locationtext" uniquename="location1"></code-card>
		<el-divider></el-divider>
		<h4>定位用户的位置</h4>
		<p>HTML5 Geolocation API 用于获得用户的地理位置。</p>
		<p>鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。</p>
		<el-divider></el-divider>
		<h4>浏览器支持</h4>
		<p>Internet Explorer 9、Firefox、Chrome、Safari 以及 Opera 支持地理定位。</p>
		<p><strong>注释</strong>：对于拥有 GPS 的设备，比如 iPhone，地理定位更加精确。</p>
		<el-divider></el-divider>
		<h4>HTML5 - 使用地理定位</h4>
		<p>请使用 getCurrentPosition() 方法来获得用户的位置。</p>
		<p>下例是一个简单的地理定位实例，可返回用户位置的经度和纬度。</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="locationtext2" uniquename="location2"></code-card>
		<p>例子解释：</p>
		<ul>
			<li v-for="item in explaintext" style="font-size: 14px;margin: 5px 0px;">{{item}}</li>
		</ul>
		<p>上面的例子是一个非常基础的地理定位脚本，不含错误处理。</p>
		<el-divider></el-divider>
		<h4>处理错误和拒绝</h4>
		<p>getCurrentPosition() 方法的第二个参数用于处理错误。它规定当获取用户位置失败时运行的函数：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="locationtext3" uniquename="location3"></code-card>
		<p>错误代码：</p>
		<ul>
			<li v-for="item1 in errorcode" style="font-size: 14px;margin: 5px 0px;">{{item1}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>在地图中显示结果</h4>
		<p>如需在地图中显示结果，您需要访问可使用经纬度的地图服务，比如谷歌地图或百度地图：</p>
		<h4>给定位置的信息</h4>
		<p>本页演示的是如何在地图上显示用户的位置。不过，地理定位对于给定位置的信息同样很有用处。</p>
		<p>案例：</p>
		<ul>
			<li v-for="item2 in exampletext" style="font-size: 14px;margin: 5px 0px;">{{item2}}</li>
		</ul>
		<el-divider></el-divider>
		<h4>getCurrentPosition() 方法 - 返回数据</h4>
		<p>若成功，则 getCurrentPosition() 方法返回对象。始终会返回 latitude、longitude 以及 accuracy 属性。如果可用，则会返回其他下面的属性。</p>
		<el-table :data="attribute" :border="istrue" :stripe="istrue">
			<el-table-column prop="attr" label="属性" >
			</el-table-column>
			<el-table-column prop="desc" label="描述" >
			</el-table-column>
		</el-table>
		<el-divider></el-divider>
		<h4>Geolocation 对象 - 其他有趣的方法</h4>
		<p>watchPosition() - 返回用户的当前位置，并继续返回用户移动时的更新位置（就像汽车上的 GPS）。</p>
		<p>clearWatch() - 停止 watchPosition() 方法</p>
		<p>下面的例子展示 watchPosition() 方法。您需要一台精确的 GPS 设备来测试该例（比如 iPhone）：</p>
		<p><strong>实例</strong></p>
		<code-card :mytextarea="locationtext4" uniquename="location4"></code-card>
	</el-card>
</template>

<script>
	import codecard from "../code-card.vue"
	export default {
		data() {
			return {
				istrue: true,
				locationtext: '<!DOCTYPE html>\n<html>\n<body>\n<p id="demo">点击这个按钮，获得您的位置：</p>\n<button onclick="getLocation()">试一下</button>\n<div id="mapholder"></div>\n<script src="http://maps.google.com/maps/api/js?sensor=false">\<\/script\>\n<script>\nvar x=document.getElementById("demo");\nfunction getLocation()\n  {\n  if (navigator.geolocation)\n    {\n    navigator.geolocation.getCurrentPosition(showPosition,showError);\n    }\n  else{x.innerHTML="Geolocation is not supported by this browser.";}\n  }\n\nfunction showPosition(position)\n  {\n  lat=position.coords.latitude;\n  lon=position.coords.longitude;\n  latlon=new google.maps.LatLng(lat, lon)\n  mapholder=document.getElementById("mapholder")\n  mapholder.style.height="250px";\n  mapholder.style.width="500px";\n\n  var myOptions={\n  center:latlon,zoom:14,\n  mapTypeId:google.maps.MapTypeId.ROADMAP,\n  mapTypeControl:false,\n  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}\n  };\n  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);\n  var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});\n  }\n\nfunction showError(error)\n  {\n  switch(error.code) \n    {\n    case error.PERMISSION_DENIED:\n      x.innerHTML="User denied the request for Geolocation."\n      break;\n    case error.POSITION_UNAVAILABLE:\n      x.innerHTML="Location information is unavailable."\n      break;\n    case error.TIMEOUT:\n      x.innerHTML="The request to get user location timed out."\n      break;\n    case error.UNKNOWN_ERROR:\n      x.innerHTML="An unknown error occurred."\n      break;\n    }\n  }\n\<\/script\>\n</body>\n</html>\n',
				locationtext2: '<!DOCTYPE html>\n<html>\n<body>\n<p id="demo">点击这个按钮，获得您的坐标：</p>\n<button onclick="getLocation()">试一下</button>\n<script>\nvar x=document.getElementById("demo");\nfunction getLocation()\n  {\n  if (navigator.geolocation)\n    {\n    navigator.geolocation.getCurrentPosition(showPosition);\n    }\n  else{x.innerHTML="Geolocation is not supported by this browser.";}\n  }\nfunction showPosition(position)\n  {\n  x.innerHTML="Latitude: " + position.coords.latitude + \n  "<br />Longitude: " + position.coords.longitude;	\n  }\n\<\/script\>\n</body>\n</html>\n',
				locationtext4:'<!DOCTYPE html>\n<html>\n<body>\n<p id="demo">点击这个按钮，获得您的坐标：</p>\n<button onclick="getLocation()">试一下</button>\n<script>\nvar x=document.getElementById("demo");\nfunction getLocation()\n  {\n  if (navigator.geolocation)\n    {\n    navigator.geolocation.watchPosition(showPosition);\n    }\n  else{x.innerHTML="Geolocation is not supported by this browser.";}\n  }\nfunction showPosition(position)\n  {\n  x.innerHTML="Latitude: " + position.coords.latitude + \n  "<br />Longitude: " + position.coords.longitude;	\n  }\n\<\/script\>\n</body>\n</html>\n',
				explaintext: [
					'检测是否支持地理定位',
					'如果支持，则运行 getCurrentPosition() 方法。如果不支持，则向用户显示一段消息。',
					'如果getCurrentPosition()运行成功，则向参数showPosition中规定的函数返回一个coordinates对象',
					'showPosition() 函数获得并显示经度和纬度'
				],
				locationtext3: '<!DOCTYPE html>\n<html>\n<body>\n<p id="demo">点击这个按钮，获得您的坐标：</p>\n<button onclick="getLocation()">试一下</button>\n<script>\nvar x=document.getElementById("demo");\nfunction getLocation()\n  {\n  if (navigator.geolocation)\n    {\n    navigator.geolocation.getCurrentPosition(showPosition,showError);\n    }\n  else{x.innerHTML="Geolocation is not supported by this browser.";}\n  }\nfunction showPosition(position)\n  {\n  x.innerHTML="Latitude: " + position.coords.latitude + \n  "<br />Longitude: " + position.coords.longitude;	\n  }\nfunction showError(error)\n  {\n  switch(error.code) \n    {\n    case error.PERMISSION_DENIED:\n      x.innerHTML="User denied the request for Geolocation."\n      break;\n    case error.POSITION_UNAVAILABLE:\n      x.innerHTML="Location information is unavailable."\n      break;\n    case error.TIMEOUT:\n      x.innerHTML="The request to get user location timed out."\n      break;\n    case error.UNKNOWN_ERROR:\n      x.innerHTML="An unknown error occurred."\n      break;\n    }\n  }\n\<\/script\>\n</body>\n</html>\n',
				errorcode: [
					'Permission denied - 用户不允许地理定位',
					'Position unavailable - 无法获取当前位置',
					'Timeout - 操作超时'
				],
				exampletext: [
					'更新本地信息',
					'显示用户周围的兴趣点',
					'交互式车载导航系统 (GPS)'
				],
				attribute: [{
						'attr': 'coords.latitude',
						'desc': '十进制数的纬度'
					},
					{
						'attr': 'coords.longitude',
						'desc': '十进制数的经度'
					},
					{
						'attr': 'coords.accuracy',
						'desc': '位置精度'
					},
					{
						'attr': 'coords.altitude',
						'desc': '海拔，海平面以上以米计'
					},
					{
						'attr': 'coords.altitudeAccuracy',
						'desc': '位置的海拔精度'
					},
					{
						'attr': 'coords.heading',
						'desc': '方向，从正北开始以度计'
					},
					{
						'attr': 'coords.speed',
						'desc': '速度，以米/每秒计'
					},
					{
						'attr': 'timestamp',
						'desc': '响应的日期/时间'
					}
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
