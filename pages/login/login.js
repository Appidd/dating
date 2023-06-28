// pages/login/login.js
// app.js
import * as storage from '../../utils/storage.js'
// 调用登录接口
import {
    api
} from '../../models/api.js';
const Api = new api()
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    login() {
        wx.showLoading({
            title: '授权中',
        })
        wx.login({
            success: res => {
                Api.userLogin({
                    code: res.code
                }).then(e => {
                    storage.set('token', e.token)
                    Api.userUid().then(res => {
                        storage.set('uid', res.uid)
                        wx.hideLoading()
                        wx.navigateBack()
                    }).catch(err => {
                        wx.hideLoading()
                        wx.showToast({
                            title: '授权失败',
                            icon: 'error'
                        })
                    })
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
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                console.log('纬度' + res.latitude)
              console.log('经度' + res.longitude)
                storage.set('latitude', res.latitude)
                storage.set('longitude', res.longitude)
            }
        })
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