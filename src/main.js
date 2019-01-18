import api from "./api";
import Vue from "vue";
import Mint from 'mint-ui';
import './assets/reset.css'; 
import 'mint-ui/lib/style.css'; 
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import 'lib-flexible/flexible.js'
import $http from './$http.js'
console.log(store);
Vue.prototype.api = api;
Vue.prototype.$http = $http;
console.log($http)
Vue.use(Mint);
Vue.config.productionTip = false;
//注册全局钩子用来拦截导航
//router.beforeEach((to, from, next) => {
////获取store里面的token
//let token = store.state.token;
////判断要去的路由有没有requiresAuth
//if(to.meta.requiresAuth){
//
//  if(token){
//    next();
//  }else{
//    next({
//      path: '/login',
//      query: { redirect: to.fullPath }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
//    });
//  }
//
//}else{
//  next();//如果无需token,那么随它去吧
//}
//});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
