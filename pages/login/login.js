// pages/login/login.js
// app.js
import * as storage from '../../utils/storage.js'
// 调用登录接口
import {
    api
} from '../../models/api.js';
const Api = new api()
const app = getApp()
let apiKey='RAQBZ-KL3Y5-GJEIB-IWCRL-VCSUF-W7FGN'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked:false
    },
    checkChange(e){
        const checked=this.data.checked
        this.setData({
            checked:!checked
        })
        console.log(e)
    },
    toAgreement(){
        wx.navigateTo({
          url: '../agreement/agreement',
        })
    },
    login() {
       if(this.data.checked){
        wx.showLoading({
            title: '授权中',
        })
        wx.login({
            success: res => {
                Api.userLogin({
                    code: res.code
                }).then(e => {
                    storage.set('token', e.token)
                    wx.hideLoading()
                    wx.navigateBack()
                }).catch(err => {
                    console.log(err)
                    wx.hideLoading()
                    wx.showToast({
                        title: '授权失败',
                        icon: 'error'
                    })
                })
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
       }else{
           wx.showToast({
             title: '请勾选同意隐私协议',
             icon:'none'
           })
       }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // wx.getLocation({
        //     type: 'wgs84',
        //     success(res) {
        //         let latitude=res.latitude
        //         let longitude=res.longitude
        //         storage.set('latitude', latitude)
        //         storage.set('longitude', longitude)
        //         wx.request({
        //             url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${apiKey}`,
        //             success(addressInfo) {
        //                 console.log(addressInfo)
        //                 let address=addressInfo.data.result.address_component
        //                 let area=address.city+address.district
        //                 storage.set('area', area)
        //                 console.log(area)
        //             //   const address = res.data.result.address; // 地址详情
                  
                  
        //               // 在这里可以处理获取到的地理位置详情
                  
                  
        //             },
        //             fail() {
        //               // 请求逆地址解析接口失败
                  
                  
        //             }
        //           })
        //     }
        // })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})