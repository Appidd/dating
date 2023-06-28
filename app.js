// app.js
import * as storage from './utils/storage.js'
// 调用登录接口
import {
    api
} from './models/api.js';
const Api=new api()
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

   
  },
  login(){
       // 登录
    wx.login({
        success: res => {
            Api.userLogin({code:res.code}).then(e=>{
                storage.set('token',e.token)  
            }).catch(err=>{
                console.log(err)
            })
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
  },
  isLogin() {
    return storage.get('token') ? true : false
},
getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 地球半径，单位为千米
  
  
    const dLat = (lat2 - lat1) * (Math.PI / 180); // 将纬度转换为弧度
  
    const dLon = (lon2 - lon1) * (Math.PI / 180); // 将经度转换为弧度
  
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = R * c; // 计算距离，单位为千米
  
  
    return distance;
  },
  globalData: {
    userInfo: null,
    itemObj:null,
    latitude:'',
    longitude:''
  }
})
