// pages/mine/mine.js
import {
    api
} from '../../models/api.js';
const Api = new api()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        uid:'000',
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
        if(getApp().isLogin()){
            wx.navigateTo({
                url: '/pages/privacy/privacy',
              })
        }else{
            wx.navigateTo({
              url: '/pages/login/login',
            })
        }
       
    },
    toGroup(){
        if(getApp().isLogin()){
            wx.navigateTo({
                url: '/pages/group/group',
              })
        }else{
        wx.navigateTo({
          url: '/pages/login/login',
        })
    }
        
    },
    toEdit(){
        if(getApp().isLogin()){
            wx.navigateTo({
                url: '/pages/edit/edit',
              })
        }else{
        wx.navigateTo({
          url: '/pages/login/login',
        })
    }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
this.getSeeList()
this.getSeekList()
    },
    //匹配列表
    getSeeList(){

        Api.getSeeList({page:1}).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },

    //请求列表
    getSeekList(){
        Api.getSeekList({page:1}).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
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
        const that=this
        Api.getUserInfo().then(res=>{
            console.log(res.user)
            const user=res.user
            that.setData({
                ...user
            })
            that.setData({
                sex:parseInt(user.sex)|0,
                imgList:JSON.parse(user.photo_url)
            })
        }).then(err=>{
            console.log(err)
        })
    },
    copyID(e){
        const uid=e.currentTarget.dataset.id
        wx.setClipboardData({
          data: uid,
          success:res=>{
              wx.showToast({
                title: '复制成功',
              })
          }
        })
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