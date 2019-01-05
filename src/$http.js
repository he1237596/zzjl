import util from './utils/util.js';
import axios from 'axios';
import { Toast } from 'mint-ui';
axios.defaults.timeout = 5000;
axios.defaults.baseURL ='https://www.zsjingling.com/eidolon-app/app';
axios.defaults.headers.post['Content-Type'] = 'application/json;';
var version = "1.0.0";
var timestamp = Date.parse(new Date()) / 1000;

//http request 拦截器
//axios.interceptors.request.use(
//config => {
//  // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//  config.data = JSON.stringify(config.data);
//  config.headers = {
//    'Content-Type':'application/x-www-form-urlencoded'
//  }
//  // if(token){
//  //   config.params = {'token':token}
//  // }
//  return config;
//},
//error => {
//  return Promise.reject(err);
//}
//);


//http response 拦截器
//axios.interceptors.response.use(
//response => {
//  if(response.data.errCode ==2){
//    router.push({
//      path:"/login",
//      querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//    })
//  }
//  return response;
//},
//error => {
//  return Promise.reject(error)
//}
//)


export default {
	fetch:function(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
},
	post:function(url,param = {}){
		param = JSON.stringify(param);
 	var data ={
 		bizContent: param,
        sign: util.makeSign(param, timestamp, version),
        timestamp: timestamp,
        version: version
 	}
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
   },
   patch:function(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
},
	put:function(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
},
	patch:function(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}
}
