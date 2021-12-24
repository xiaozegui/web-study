<template>
	<el-card class="box-card">
		<div slot="header" class="card-header">
			<iframe :srcdoc="codetextarea" :class="uniquename"></iframe>
			<el-button type="text" @click="executecode()" class="executecode">在线运行</el-button>
		</div>
		<mark>{{errorposit}}附近:{{errormessage}}</mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<mark>{{errordescript}}</mark>
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
				errordescript: '',
				errorposit: ''
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
			executecode() {
				this.errormessage = this.checkgrammar(this.codetextarea);
				this.errordescript = this.checktag(this.codetextarea);
				try {
					var ifm = document.getElementsByClassName(this.uniquename);
					var item = ifm[0];
					console.log(ifm);
					item.height = item.contentWindow.document.documentElement.scrollHeight;
					item.width = item.contentWindow.document.documentElement.scrollWidth;
				} catch (e) {
					console.log('找不到对象');
				}

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
