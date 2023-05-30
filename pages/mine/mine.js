// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndex:1,
        recommendList:[
            {  id:1,
                isNew:true,
                name:'李思思',
                contact:'xiao-lsd',
                cover_img:'/static/images/icon/water_img.png'
            },
            {
                id:1,
                isNew:false,
                name:'范冰冰',
                contact:'fan binbin',
                cover_img:'/static/images/icon/water_img.png'
            },
            {
                id:1,
                isNew:false,
                name:'李思瑶',
                contact:'cons-lsd',
                cover_img:'/static/images/icon/water_img.png'
            },
            {
                id:1,
                isNew:false,
                name:'王丽',
                contact:'xiao-fdsf',
                cover_img:'/static/images/icon/water_img.png'
            },
            {
                id:1,
                isNew:false,
                name:'王丽',
                contact:'xiao-fdsf',
                cover_img:'/static/images/icon/water_img.png'
            }
        ]
    },
    changeTab(e){
        console.log(e)
       let index=e.currentTarget.dataset.index
        this.setData({
            currentIndex:index
        })
    },
    toPrivce(){
       wx.navigateTo({
         url: '/pages/privacy/privacy',
       })
    },
    toGroup(){
        wx.navigateTo({
          url: '/pages/group/group',
        })
    },
    toEdit(){
        wx.navigateTo({
          url: '/pages/edit/edit',
        })
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