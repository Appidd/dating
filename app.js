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

    // 登录
    wx.login({
      success: res => {
          console.log(res)
          const code=res.code
          Api.userLogin({code}).then(e=>{
              console.log(e)
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
  globalData: {
    userInfo: null,
    itemObj:null
  }
})
