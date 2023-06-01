const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
        {
            name:'芭比11',
            age:22,
            address:'潮汕-汕头市11',
            nowLives:'潮汕-汕头市11',
            distance:'8.83',
            property:'龙',
            introduce:'不Y 喜欢能够给我提供情绪价值的朋友 不擅长聊天 希望你是趣的酒搭子饭搭子',
            sex:0,
            taglist:['176cm','56kg','狮子座','IT/互联网','本科','10w以上'],
            wechat:'Xiaoo65874',
            about:['家庭背景     有个弟弟','刷剧、购物、旅游','不抽烟，身高170以上，温柔，私生活干净，阳光开朗'],
            coverImg:'/static/images/icon/bg.jpg'
        },
        {
            name:'芭比22',
            age:23,
            address:'潮汕-汕头市22',
            nowLives:'潮汕-汕头市22',
            distance:'8.83',
            property:'鼠',
            introduce:'小程序正在开发中正在开发中小程序正在开发中正在开发中小程序正在开发中正在开发中小程序正在开发中正在开发中',
            sex:0,
            taglist:['176cm','56kg','狮子座','IT/互联网','本科','10w以上'],
            wechat:'content330',
            about:['编程     发财','刷剧、购物、旅游','不抽烟，身高170以上，温柔，私生活干净，阳光开朗'],
            coverImg:'/static/images/icon/bg.jpg'
        }
    ],
    isLogin:false
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        hasLogin:app.isLogin()
    })
  },
  getMore(){
wx.showToast({
  title: '暂无更多内容',
  icon:'none'
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