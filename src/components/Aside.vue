<template>
	<el-scrollbar style="height: 100%;" ref="scrollbar1">
		<div class="mymenu" v-on:mouseleave="changeOpacity()" v-on:mouseenter="changeOpacity()">
			<el-menu text-color="#303133" active-text-color="#409EFF" :default-openeds="openeds" router :default-active='myindex'>
				<el-submenu index="h5-study">
					<template slot="title">
						<i class="el-icon-reading"></i>
						<span>HTML5 Study</span>
					</template>
					<el-menu-item-group title="H5 character">
						<el-menu-item index="/index"><span>H5 Study</span></el-menu-item>
						<el-menu-item index="/introduce"><span>HTML5 简介</span></el-menu-item>
						<el-menu-item index="/video"><span>HTML5 视频</span></el-menu-item>
						<el-menu-item index="/videodom"><span>HTML5 视频+DOM</span></el-menu-item>
						<el-menu-item index="/audio"><span>HTML5 音频</span></el-menu-item>
						<el-menu-item index="/drag"><span>HTML5 拖放</span></el-menu-item>
						<el-menu-item index="/canvas"><span>HTML5 画布</span></el-menu-item>
						<el-menu-item index="/svg"><span>HTML5 SVG</span></el-menu-item>
						<el-menu-item index="/canvasvssvg"><span>HTML5 画布 vs SVG</span></el-menu-item>
						<el-menu-item index="/location"><span>HTML5 地理定位</span></el-menu-item>
						<el-menu-item index="/webstorage"><span>HTML5 Web存储</span></el-menu-item>
						<el-menu-item index="/appcache"><span>HTML5 应用缓存</span></el-menu-item>
						<el-menu-item index="/webworker"><span>HTML5 Web Workers</span></el-menu-item>
						<el-menu-item index="/serversentevent"><span>HTML5 服务器发送事件</span></el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="H5 表单">
						<el-menu-item index="/forminputtypes">HTML5 输入类型</el-menu-item>
						<el-menu-item index="/formelement">HTML5 表单元素</el-menu-item>
						<el-menu-item index="/formattributes">HTML5 表单属性</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="H5 参考手册">
						<el-menu-item index="/tag">HTML5 标签</el-menu-item>
						<el-menu-item index="/attribute">HTML5 属性</el-menu-item>
						<el-menu-item index="/event">HTML5 事件</el-menu-item>
						<el-menu-item index="/video_audio">HTML5 视频/音频</el-menu-item>
						<el-menu-item index="/manual_canvas">HTML5 画布</el-menu-item>
						<el-menu-item index="/manual_dtd">HTML 文档类型DTD</el-menu-item>
						<el-menu-item index="/manual_color">HTML 颜色名</el-menu-item>
						<el-menu-item index="/manual_charactersets">HTML 字符集</el-menu-item>
						<el-menu-item index="/manual_ascii">HTML ASCII</el-menu-item>
						<el-menu-item index="/manual_iso">HTML ISO-8859-1</el-menu-item>
						<el-menu-item index="/manual_symbols">HTML 符号</el-menu-item>
						<el-menu-item index="/manual_utf8">HTML UTF-8</el-menu-item>
						<el-menu-item index="/manual_urlencode">HTML URL编码</el-menu-item>
						<el-menu-item index="/manual_languagecode">HTML 语言代码</el-menu-item>
						<el-menu-item index="/manual_httpmessage">HTML 消息</el-menu-item>
						<el-menu-item index="/manual_httpmethods">HTML 方法</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="h5-tag">
					<template slot="title">
						<i class="el-icon-reading"></i>
						<span>HTML5 标签</span>
					</template>
					<el-menu-item-group title="H5 tag">
						<el-menu-item index="/notes">&lt;!-- --&gt;</el-menu-item>
						<el-menu-item index="/DOCTYPE">&lt;!DOCTYPE&gt; </el-menu-item>
						<el-menu-item index="/a">&lt;a&gt;</el-menu-item>
						<el-menu-item index="/abbr">&lt;abbr&gt;</el-menu-item>
						<el-menu-item index="/acronym">&lt;acronym&gt;</el-menu-item>
						<el-menu-item index="/address">&lt;address&gt;</el-menu-item>
						<el-menu-item index="/area">&lt;area&gt;</el-menu-item>
						<el-menu-item index="/article" class="H5-new">&lt;article&gt;</el-menu-item>
						<el-menu-item index="/aside" class="H5-new">&lt;aside&gt;</el-menu-item>
						<el-menu-item index="/audio_tag" class="H5-new">&lt;audio&gt;</el-menu-item>
						<el-menu-item index="/b">&lt;b&gt;</el-menu-item>
						<el-menu-item index="/base">&lt;base&gt;</el-menu-item>
						<el-menu-item index="/basefont">&lt;basefont&gt;</el-menu-item>
						<el-menu-item index="/bdi" class="H5-new">&lt;bdi&gt;</el-menu-item>
						<el-menu-item index="/bdo">&lt;bdo&gt;</el-menu-item>
						<el-menu-item index="/big">&lt;big&gt;</el-menu-item>
						<el-menu-item index="/blockquote">&lt;blockquote&gt;</el-menu-item>
						<el-menu-item index="/body">&lt;body&gt;</el-menu-item>
						<el-menu-item index="/br">&lt;br&gt;</el-menu-item>
						<el-menu-item index="/button">&lt;button&gt;</el-menu-item>
						<el-menu-item index="/canvas_tag" class="H5-new">&lt;canvas&gt;</el-menu-item>
						<el-menu-item index="/caption">&lt;caption&gt;</el-menu-item>
						<el-menu-item index="/center">&lt;center&gt;</el-menu-item>
						<el-menu-item index="/cite">&lt;cite&gt;</el-menu-item>
						<el-menu-item index="/code">&lt;code&gt;</el-menu-item>
						<el-menu-item index="/col">&lt;col&gt;</el-menu-item>
						<el-menu-item index="/colgroup">&lt;colgroup&gt;</el-menu-item>
						<el-menu-item index="/command" class="H5-new">&lt;command&gt;</el-menu-item>
						<el-menu-item index="/datalist" class="H5-new">&lt;datalist&gt;</el-menu-item>
						<el-menu-item index="/dd">&lt;dd&gt;</el-menu-item>
						<el-menu-item index="/del">&lt;del&gt;</el-menu-item>
						<el-menu-item index="/details" class="H5-new">&lt;details&gt;</el-menu-item>
						<el-menu-item index="/dfn">&lt;dfn&gt;</el-menu-item>
						<el-menu-item index="/dialog">&lt;dialog&gt;</el-menu-item>
						<el-menu-item index="/dir_tag">&lt;dir&gt;</el-menu-item>
						<el-menu-item index="/div">&lt;div&gt;</el-menu-item>
						<el-menu-item index="/dl">&lt;dl&gt;</el-menu-item>
						<el-menu-item index="/dt">&lt;dt&gt;</el-menu-item>
						<el-menu-item index="/em">&lt;em&gt;</el-menu-item>
						<el-menu-item index="/embed" class="H5-new">&lt;embed&gt;</el-menu-item>
						<el-menu-item index="/fieldset">&lt;fieldset&gt;</el-menu-item>
						<el-menu-item index="/figcaption" class="H5-new">&lt;figcaption&gt;</el-menu-item>
						<el-menu-item index="/figure" class="H5-new">&lt;figure&gt;</el-menu-item>
						<el-menu-item index="/font">&lt;font&gt;</el-menu-item>
						<el-menu-item index="/footer_tag" class="H5-new">&lt;footer&gt;</el-menu-item>
						<el-menu-item index="/form">&lt;form&gt;</el-menu-item>
						<el-menu-item index="/frame">&lt;frame&gt;</el-menu-item>
						<el-menu-item index="/h1_h6">&lt;h1 to h6&gt;</el-menu-item>
						<el-menu-item index="/head">&lt;head&gt;</el-menu-item>
						<el-menu-item index="/header" class="H5-new">&lt;header&gt;</el-menu-item>
						<el-menu-item index="/hr">&lt;hr&gt;</el-menu-item>
						<el-menu-item index="/html">&lt;html&gt;</el-menu-item>
						<el-menu-item index="/i">&lt;i&gt;</el-menu-item>
						<el-menu-item index="/iframe">&lt;iframe&gt;</el-menu-item>
						<el-menu-item index="/img">&lt;img&gt;</el-menu-item>
						<el-menu-item index="/input">&lt;input&gt;</el-menu-item>
						<el-menu-item index="/ins">&lt;ins&gt;</el-menu-item>
						<el-menu-item index="/keygen" class="H5-new">&lt;keygen&gt;</el-menu-item>
						<el-menu-item index="/label">&lt;label&gt;</el-menu-item>
						<el-menu-item index="/legend">&lt;legend&gt;</el-menu-item>
						<el-menu-item index="/li">&lt;li&gt;</el-menu-item>
						<el-menu-item index="/link">&lt;link&gt;</el-menu-item>
						<el-menu-item index="/main">&lt;main&gt;</el-menu-item>
						<el-menu-item index="/map">&lt;map&gt;</el-menu-item>
						<el-menu-item index="/mark" class="H5-new">&lt;mark&gt;</el-menu-item>
						<el-menu-item index="/menu">&lt;menu&gt;</el-menu-item>
						<el-menu-item index="/menuitem">&lt;menuitem&gt;</el-menu-item>
						<el-menu-item index="/meta">&lt;meta&gt;</el-menu-item>
						<el-menu-item index="/meter" class="H5-new">&lt;meter&gt;</el-menu-item>
						<el-menu-item index="/nav" class="H5-new">&lt;nav&gt;</el-menu-item>
						<el-menu-item index="/noframes">&lt;noframes&gt;</el-menu-item>
						<el-menu-item index="/noscript">&lt;noscript&gt;</el-menu-item>
						<el-menu-item index="/object">&lt;object&gt;</el-menu-item>
						<el-menu-item index="/ol">&lt;ol&gt;</el-menu-item>
						<el-menu-item index="/optgroup">&lt;optgroup&gt;</el-menu-item>
						<el-menu-item index="/option">&lt;option&gt;</el-menu-item>
						<el-menu-item index="/output" class="H5-new">&lt;output&gt;</el-menu-item>
						<el-menu-item index="/p" class="test">&lt;p&gt;</el-menu-item>
						<el-menu-item index="/param">&lt;param&gt;</el-menu-item>
						<el-menu-item index="/pre">&lt;pre&gt;</el-menu-item>
						<el-menu-item index="/progress" class="H5-new">&lt;progress&gt;</el-menu-item>
						<el-menu-item index="/q">&lt;q&gt;</el-menu-item>
						<el-menu-item index="/rp" class="H5-new">&lt;rp&gt;</el-menu-item>
						<el-menu-item index="/rt" class="H5-new">&lt;rt&gt;</el-menu-item>
						<el-menu-item index="/ruby" class="H5-new">&lt;ruby&gt;</el-menu-item>
						<el-menu-item index="/s">&lt;s&gt;</el-menu-item>
						<el-menu-item index="/samp">&lt;samp&gt;</el-menu-item>
						<el-menu-item index="/script">&lt;script&gt;</el-menu-item>
						<el-menu-item index="/section" class="H5-new">&lt;section&gt;</el-menu-item>
						<el-menu-item index="/select">&lt;select&gt;</el-menu-item>
						<el-menu-item index="/small">&lt;small&gt;</el-menu-item>
						<el-menu-item index="/source" class="H5-new">&lt;source&gt;</el-menu-item>
						<el-menu-item index="/span">&lt;span&gt;</el-menu-item>
						<el-menu-item index="/strike">&lt;strike&gt;</el-menu-item>
						<el-menu-item index="/strong">&lt;strong&gt;</el-menu-item>
						<el-menu-item index="/style_tag">&lt;style&gt;</el-menu-item>
						<el-menu-item index="/sub">&lt;sub&gt;</el-menu-item>
						<el-menu-item index="/summary" class="H5-new">&lt;summary&gt;</el-menu-item>
						<el-menu-item index="/sup">&lt;sup&gt;</el-menu-item>
						<el-menu-item index="/table">&lt;table&gt;</el-menu-item>
						<el-menu-item index="/tbody">&lt;tbody&gt;</el-menu-item>
						<el-menu-item index="/td">&lt;td&gt;</el-menu-item>
						<el-menu-item index="/textarea">&lt;textarea&gt;</el-menu-item>
						<el-menu-item index="/tfoot">&lt;tfoot&gt;</el-menu-item>
						<el-menu-item index="/th">&lt;th&gt;</el-menu-item>
						<el-menu-item index="/thead">&lt;thead&gt;</el-menu-item>
						<el-menu-item index="/time" class="H5-new">&lt;time&gt;</el-menu-item>
						<el-menu-item index="/title_tag">&lt;title&gt;</el-menu-item>
						<el-menu-item index="/tr">&lt;tr&gt;</el-menu-item>
						<el-menu-item index="/track" class="H5-new">&lt;track&gt;</el-menu-item>
						<el-menu-item index="/tt">&lt;tt&gt;</el-menu-item>
						<el-menu-item index="/u">&lt;u&gt;</el-menu-item>
						<el-menu-item index="/ul">&lt;ul&gt;</el-menu-item>
						<el-menu-item index="/var">&lt;var&gt;</el-menu-item>
						<el-menu-item index="/video_tag" class="H5-new">&lt;video&gt;</el-menu-item>
						<el-menu-item index="/wbr" class="H5-new">&lt;wbr&gt;</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="h5-attribute">
					<template slot="title">
						<i class="el-icon-reading"></i>
						<span>HTML5 全局属性</span>
					</template>
					<el-menu-item-group title="H5 global attribute">
						<el-menu-item index="/accesskey">accesskey</el-menu-item>
						<el-menu-item index="/class">class</el-menu-item>
						<el-menu-item index="/contenteditable" class="H5-new">contenteditable</el-menu-item>
						<el-menu-item index="/contentmenu" class="H5-new">contextmenu</el-menu-item>
						<el-menu-item index="/data" class="H5-new">data-*</el-menu-item>
						<el-menu-item index="/dir">dir</el-menu-item>
						<el-menu-item index="/draggable" class="H5-new">draggable</el-menu-item>
						<el-menu-item index="/dragzone" class="H5-new">dropzone</el-menu-item>
						<el-menu-item index="/hidden" class="H5-new">hidden</el-menu-item>
						<el-menu-item index="/id">id</el-menu-item>
						<el-menu-item index="/lang">lang</el-menu-item>
						<el-menu-item index="/spellcheck" class="H5-new">spellcheck</el-menu-item>
						<el-menu-item index="/style">style</el-menu-item>
						<el-menu-item index="/tabindex">tabindex</el-menu-item>
						<el-menu-item index="/title">title</el-menu-item>
						<el-menu-item index="/translate" class="H5-new">translate</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="H5 attribute Extension">
						<el-menu-item index="/autoplay">autoplay</el-menu-item>
						<el-menu-item index="/href">href</el-menu-item>
						<el-menu-item index="/height">height</el-menu-item>
						<el-menu-item index="/width">width</el-menu-item>
						<el-menu-item index="/align">align</el-menu-item>
						<el-menu-item index="/color">color</el-menu-item>
						<el-menu-item index="/src">src</el-menu-item>
						<el-menu-item index="/background">background</el-menu-item>
						<el-menu-item index="/alt">alt</el-menu-item>
						<el-menu-item index="/disable">disable</el-menu-item>
						<el-menu-item index="/size">size</el-menu-item>
						<el-menu-item index="/type">type</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="h5-manual">
					<template slot="title">
						<i class="el-icon-reading"></i>
						<span>HTML5 全局事件</span>
					</template>
					<el-menu-item-group title="H5 global event">
						<el-menu-item index="/onafterprint">onafterprint 事件</el-menu-item>
						<el-menu-item index="/onbeforeprint">onbeforeprint 事件</el-menu-item>
						<el-menu-item index="/onload">onload 事件</el-menu-item>
						<el-menu-item index="/onresize">onresize 事件</el-menu-item>
						<el-menu-item index="/onunload">onunload 事件</el-menu-item>
						<el-menu-item index="/onblur">onblur 事件</el-menu-item>
						<el-menu-item index="/onchange">onchange 事件</el-menu-item>
						<el-menu-item index="/onfocus">onfocus 事件</el-menu-item>
						<el-menu-item index="/onselect">onselect 事件</el-menu-item>
						<el-menu-item index="/onsubmit">onsubmit 事件</el-menu-item>
						<el-menu-item index="/onkeydown">onkeydown 事件</el-menu-item>
						<el-menu-item index="/onkeypress">onkeypress 事件</el-menu-item>
						<el-menu-item index="/onkeyup">onkeyup 事件</el-menu-item>
						<el-menu-item index="/onclick">onclick 事件</el-menu-item>
						<el-menu-item index="/ondbclick">ondbclick 事件</el-menu-item>
						<el-menu-item index="/onmousedown">onmousedown 事件</el-menu-item>
						<el-menu-item index="/onmousemove">onmousemove 事件</el-menu-item>
						<el-menu-item index="/onmouseout">onmouseout 事件</el-menu-item>
						<el-menu-item index="/onmouseover">onmouseover 事件</el-menu-item>
						<el-menu-item index="/onmouseup">onmouseup 事件</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="H5 event Extensions">
						<el-menu-item index="/ontoggle">ontoggle 事件</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</div>
	</el-scrollbar>
</template>

<script>
	export default {
		data() {
			return {
				openeds: ['h5-study','h5-manual'],
				myindex:this.activeIndex()
			}
		},
		watch: {
			'$route.path': function() {
				this.myindex = this.activeIndex();
				// console.log('myindex='+this.myindex);
			}
		},
		mounted() {
			this.asidescroll();
		},
		methods: {
			getElementToPageTop(el) {
				var distance = 0;
				for (var i = 0; i < 10; i++) {
					distance += el.offsetTop; 
				}
				return distance
			},
			changeOpacity() {
				var collectionitems = document.getElementsByClassName("el-menu-item-group");
				var items = Array.from(collectionitems);
				// console.log(items);
				items.forEach((item) => {
					if (item.style.opacity == 1) {
						item.style.opacity = 0.5;
						// console.log(item.style.opacity)
					} else {
						item.style.opacity = 1;
						// console.log(item.style.opacity)
					}
				});
			},
			activeIndex() {
				console.log("进入活动路由");
				var mypath = this.$route.path;
				var mylength = mypath.length;
				if (mypath[mylength - 1] == '/') {
					mypath = mypath.substring(0, mylength - 1);
				}
				console.log(mypath, this.$route.path);
				return mypath;
			},
			asidescroll() {
				setTimeout(() => {
					var distance = 0;
					var items = document.getElementsByClassName("is-active");
					var item = Array.from(items);
					var i = item[1];
					// console.log(i);
					if(this.$route.path !== '/login' && this.$route.path !== '/register'&&this.$route.path !== '/changepassword'&&this.$route.path !== '/usercharge'&&this.$route.path !== '/chartcharge'){
						distance = i.getBoundingClientRect().top;
						// var items = document.getElementsByClassName("is-vertical");
						// var maxheight = items[2].getBoundingClientRect().height;
						// console.log(maxheight);
						// console.log(distance);
						// console.log(distance, parseInt(distance /1.2));
						this.$refs.scrollbar1.wrap.scrollTop = parseInt(distance/1.5);
						// console.log(distance,parseInt(distance/3));
						// this.$refs.scrollbar1.wrap.scrollTop = parseInt(distance/3);	
						// console.log(this.$refs.scrollbar1.wrap)
						// this.$refs.scrollbar2.wrap.scrollTop = 0;
					}
				}, 500);
			}
		}
	}
</script>

<style scoped="scoped">
	.mymenu {
		overflow-x: auto;
	}

	.el-menu {
		padding: 50px 0px 100px 0px;
		text-align: left;
		border-right: 0px;
	}

	/deep/ .el-menu-item-group__title {
		padding: 7px 0px 7px 0px !important;
	}

	.el-menu-item {
		padding: 0px !important;
		opacity: 1;
	}

	.el-menu-item-group {
		opacity: 0.5;
		transition: opacity 0.5s ease-in-out;
	}

	/deep/ .el-submenu__title {
		padding-left: 0px !important;
		font-size: medium;
		font-weight: 700;
		opacity: 0.5;
	}

	/deep/ .el-submenu.is-opened .el-submenu__title {
		color: #409EFF !important;
	}

	.el-menu-item:hover {
		opacity: 1;
		color: #409EFF !important;
		background-color: white;
	}

	/deep/ .el-submenu__title:hover {
		opacity: 1;
		color: #409EFF !important;
		opacity: 0.5;
	}

	/deep/ .el-menu-item.is-active {
		opacity: 1;
		color: #409EFF;
	}

	.H5-new {
		background-image: url(../assets/img/background-new.jpg);
	}
</style>
