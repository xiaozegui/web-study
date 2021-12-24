<template>
	<el-card class="box-card">
		<div slot="header" class="card-header">
			<div :class="uniquename"></div>
			<el-button type="text" @click="executecode()" class="executecode">在线运行</el-button>
		</div>
		<mark>{{errorposit}}附近:{{errormessage}}</mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<mark>{{errordescript}}</mark>
		<!-- <mark>{{tagmatch}}</mark> -->
		<el-input type="textarea" :autosize="istrue" v-model="codetextarea">
		</el-input>
	</el-card>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				istrue: true,
				codetextarea: this.mytextarea,
				errormessage: '',
				errorposit: '',
				errordescript: '',
				tagmatch:''
			}
		},
		props: ['mytextarea', 'uniquename'],
		methods: {
			checkgrammar(braces) {
				let leftBraReg = /[\(\{\[\<]/;
				let rightBraReg = /[\)\}\]\>]/,
					stack = [],
					bracket, rightBracket
				braces = braces.split('')
				for (bracket of braces) {
					if (leftBraReg.test(bracket)) {
						stack.push(bracket)
					} else if (rightBraReg.test(bracket)) {
						switch (bracket) {
							case ')':
								rightBracket = stack.pop()
								if (rightBracket !== '(') {
									return bracket + '不匹配';
								}
								break
							case ']':
								rightBracket = stack.pop()
								if (rightBracket !== '[') {
									return bracket + '不匹配';
								}
								break
							case '}':
								rightBracket = stack.pop()
								if (rightBracket !== '{') {
									return bracket + '不匹配';
								}
								break
							case '>':
								rightBracket = stack.pop()
								if (rightBracket !== '<') {
									return bracket + '不匹配';
								}
								break
						}
					} else {
						this.errorposit = bracket;
					}
				}
				return stack.length === 0 ? '代码运行正确' : '不匹配栈中剩余: ' + stack
			},
			checktag(str) {
				var TagReg = /<[^>]+>/gi;
				var TagArray = str.match(TagReg);
				for (var item of TagArray) {
					var status = false;
					var tagarry = item.split(' ');
					// console.log(tagarry[0]);
					var tag = tagarry[0].replace(/[\>\<\/\!]*/, '');
					var tag = tag.replace(/[\>]/, '');
					// console.log(tag);
					var routes = this.$router.options.routes;
					routes.forEach((route) => {
						// console.log(route['path']);
						// console.log(route['path'].indexOf(tag.toLowerCase())==-1);
						if (route['path'].indexOf(tag) != -1) {
							status = true;
						}
					});
					// console.log(status);
					if (!status) {
						console.log(item + '书写错误');
						return item + '标签书写错误';
					}
				}
				return '标签正确';
			},
			// checktagmatch(str){
			// 	let TagReg = /<[^>]+>/gi;
			// 	let leftReg = /<([a-zA-Z])([^>]*)>/gi;
			// 	let rightReg = /<^\/[^>]*>/gi;
			// 	let TagArray = str.match(TagReg);
			// 	let leftArray = [],lefttag;
			// 	// console.log(TagArray[2],leftReg.test(TagArray[2]));
			// 	TagArray.forEach((mytag)=>{
			// 		// console.log(mytag,leftReg.test("<html>"));
			// 		// console.log(leftArray);
			// 		if(leftReg.test(mytag)){
			// 			leftArray.push(mytag);
			// 			console.log(mytag,'l');
			// 		}else if(rightReg.test(mytag)){
			// 			console.log(mytag,'r');
			// 			lefttag = leftArray.pop();
			// 			// console.log(lefttag);
			// 			var leftcollect = lefttag.split(' ');
			// 			// console.log(tagarry[0]);
			// 			var ltag = leftcollect[0].replace(/[\>\<\/\!]*/, '');
			// 			var ltag = ltag.replace(/[\>]/, '');
			// 			var rtag = mytag.replace(/[\>\<\/\!]*/, '');
			// 			var rtag = rtag.replace(/[\>]/, '');
			// 			// console.log(ltag,rtag);
			// 			if(ltag!=rtag){
			// 				this.tagmatch = lefttag+'not match';
			// 			}
			// 		}else{
			// 			console.log(mytag,'e');
			// 			this.tagmatch = lefttag+'is singletag';
			// 		}
			// 	});
			// },
			executecode() {
				this.errormessage = this.checkgrammar(this.codetextarea);
				this.errordescript = this.checktag(this.codetextarea);
				// this.checktagmatch(this.codetextarea);
				// console.log(this.errordescript);
				// console.log("enter");
				$("." + this.uniquename).html(this.codetextarea);
				// console.log($(".codeview"));
			}
		},
		mounted() {
			this.executecode();
		},

	}
</script>

<style scoped="scoped">
	.card-header {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}

	.codeview {
		background-color: #FAFAFA;
		width: 90%;
	}

	.el-card {
		margin-top: 1px;
	}
</style>
