// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//1.导入element-ui模块 并且导入全局的css样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//将luffyHeader 注册成全局组件
import LuffyHeader from '@/components/Common/LuffyHeader'
Vue.component(LuffyHeader.name,LuffyHeader)
//引入项目中的全局的css样式
import '../static/global/index.css'
import * as api from './restful/api'
Vue.prototype.$http = api


//使用vue-cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

//导入全局的geetest.js
import '../static/global/gt'

//导入store实例
import store from './store/index'

//全局导航守卫
router.beforeEach((to, from, next) => {
  // ...  
  
  if(VueCookies.isKey('access_token')){
   let user = {
    username:VueCookies.get('username'),
    shop_cart_num:VueCookies.get('shop_cart_num'),
    access_token:VueCookies.get('access_token'),
    avatar:VueCookies.get('avatar'),
    notice_num:VueCookies.get('notice_num')
   }
   store.dispatch('getUser',user)
  }
  next()

})









Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
