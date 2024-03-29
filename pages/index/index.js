const app = getApp()
// 调用登录接口
import {
    api
} from '../../models/api.js';
import storage from '../../utils/storage.js';
const Api = new api()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        isLogin: false
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},
    getMore() {
        wx.showToast({
            title: '暂无更多内容',
            icon: 'none'
        })
    },



    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        const that = this
        this.setData({
            isLogin: app.isLogin()
        })
        if (app.isLogin()) {
            Api.userUid().then(re => {
                if (re.code == 201) {
                    wx.clearStorage()
                } else {
                    app.globalData.uid = re.uid
                }
            })
            wx.showLoading()
            if (storage.get('latitude')) {
                Api.updateLocation({
                    latitude: storage.get('latitude'),
                    longitude: storage.get('longitude')
                })
            }
            Api.getList().then(res => {
                wx.hideLoading()
                const list = res.data
                list.map(e => {
                    const urlListString = e.photo_url.replaceAll('\\', '')
                    console.log(urlListString)
                    e.photo_url = JSON.parse(urlListString)
                    console.log(e.photo_url)
                    // e.like_list=JSON.parse(e.like_list)
                    // const userInfo = storage.get('userInfo')
                    // if (userInfo.latitude && e.latitude != '0') {
                    //     e.distance = app.getDistance(parseFloat(userInfo.latitude), parseFloat(userInfo.longitude), parseFloat(e.latitude), parseFloat(e.longitude))
                    // }
                })
                that.setData({
                    list
                })
            }).catch(err => {
                wx.hideLoading()
                console.log(err)
            })
        } else {
            Api.getThisInfo(10181901).then(res => {
                console.log(res)
                const user = res.user
                const urlListString = user.photo_url.replaceAll('\\', '')
                user.photo_url = JSON.parse(urlListString)
                this.setData({
                    list: [user]
                })
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})