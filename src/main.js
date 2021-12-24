import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './assets/global.css'
import router from './router/index.js'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios;
Vue.use(ElementUI)

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
