// pages/privacy/privacy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        beginAge:20,
        endAge:26,
        lowHeight:156,
        higHeight:173,
        checked1: true,
        checked2: true,
        checked3: false,
        checked4: true,
    },
    onChangeAge(event) {
        const beginAge=event.detail[0]
        const endAge=event.detail[1]
        this.setData({
            beginAge,
            endAge
        })
      },
      onChangeHeight(event){
        const lowHeight=event.detail[0]
        const higHeight=event.detail[1]
        this.setData({
            lowHeight,
            higHeight
        })
      },
      onChange1({ detail }) {
        // 需要手动对 checked 状态进行更新
        this.setData({ checked1: detail });
      },
      onChange2({ detail }) {
        // 需要手动对 checked 状态进行更新
        this.setData({ checked2: detail });
      },
      onChange3({ detail }) {
        // 需要手动对 checked 状态进行更新
        this.setData({ checked3: detail });
      },
      onChange4({ detail }) {
        // 需要手动对 checked 状态进行更新
        this.setData({ checked4: detail });
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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