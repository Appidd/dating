const app=getApp()
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
    list:[
        {
            real_name:'芭比11',
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
            photo_url:'/static/images/icon/bg.jpg'
        }
       
    ],
    isLogin:false
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
      const that=this
    this.setData({
        isLogin: app.isLogin()
    })
    if(app.isLogin()){
        if( storage.get('latitude')){
            Api.updateLocation({
                latitude:storage.get('latitude'),
                longitude:storage.get('longitude')
            })
        }
        
        Api.getList().then(res=>{
            const list=[res.data]
            list.map(e=>{
                e.photo_url=JSON.parse(e.photo_url)[0]
                e.like_list=JSON.parse(e.like_list)
                const userInfo=storage.get('userInfo')
                if(userInfo.latitude&&e.latitude!='0'){
                    e.distance=app.getDistance(parseFloat(userInfo.latitude),parseFloat(userInfo.longitude),parseFloat(e.latitude),parseFloat(e.longitude))
                }
            })

            console.log(list)
            that.setData({
                list
            })
        }).catch(err=>{
           
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