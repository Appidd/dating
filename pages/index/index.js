Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
        {
            name:'芭比1',
            age:22,
            address:'潮汕-汕头市',
            distance:'8.83',
            introduce:'不Y 喜欢能够给我提供情绪价值的朋友 不擅长聊天 希望你是趣的酒搭子饭搭子'
        }
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  refresh(){
      this.setData({
          triggered:false,
          
      })
      wx.navigateTo({
        url: '/pages/detail/detail',
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