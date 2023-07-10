
// pages/detail/detail.js
const app=getApp()
// 调用登录接口
import {
    api
} from '../../models/api.js';
const Api = new api()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        itemObj:null,
        canSee:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options.canSee)
        console.log(app.globalData.itemObj)
        this.setData({
            itemObj:app.globalData.itemObj,
            canSee:options.canSee=='1'?true:false
        })
    },
    getBack(){
        wx.navigateBack()
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    getContact(){
        Api.getUserContact({
            like_uid:this.data.itemObj.uid
        }).then(res=>{
            wx.showToast({
              title: '请求已发送',
            })
            setTimeout(e=>{
                wx.navigateBack()
            },2000)
        }).catch(err=>{
            console.log(err)
        })
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