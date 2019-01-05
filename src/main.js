import api from "./api";
import Vue from "vue";
import Mint from 'mint-ui';
import './assets/reset.css'; 
import 'mint-ui/lib/style.css'; 
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'lib-flexible/flexible.js'
import $http from './$http.js'
console.log(api);
Vue.prototype.api = api;
Vue.prototype.$http = $http;
console.log($http)
Vue.use(Mint);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
