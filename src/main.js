import Vue from 'vue'
import App from './App'
import axios from "axios";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//全局url地址
axios.defaults.baseURL = 'http://127.0.0.1:8081',
axios.defaults.timeout = 5000

axios({
  url: '/student/selectByNickName',
  params: {   //post请求用  data{}
    nickname: 'test'
  },
  method: 'get'  //get请求
}).then(res =>{
  console.log(res);
})


