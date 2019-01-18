import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Home.vue";
import Cart from "@/views/cart/Cart.vue";
import Search from "@/views/search/Search.vue";
import Classify from "@/views/classify/Classify.vue";
import User from "@/views/user/User.vue";
import GoodsList from "@/views/goodsList/GoodsList.vue";
import GoodsDetail from "@/views/goodsDetail/GoodsDetail.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
//    component: () =>
//      import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
        {
      path: "/classify",
      name: "classify",
      component: Classify
    },    {
      path: "/user",
      name: "user",
      component: User
    },{
      path: "/search",
      name: "search",
      component: Search
    },{
      path: "/detail/:goodsId",
      name: "goods.detail",
      component: GoodsDetail
    },
    {path: '/', redirect: {name:"home"}}
  ]
});
