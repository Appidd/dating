// pages/mine/mine.js
import {
    api
} from '../../models/api.js';
import * as storage from '../../utils/storage.js'
const Api = new api()
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        uid:'000',
        currentIndex:1,
        matchedList:[
            
        ],
        requestedList:[
           
        ]
    },
    refresh(){
        this.getSeekList()
    },
    getMore(){
        console.log('getmore')
    },
    changeTab(e){
        console.log(e)
       let index=e.currentTarget.dataset.index
        this.setData({
            currentIndex:index
        })
    },
    toPrivce(){
        // if(getApp().isLogin()){
        //     wx.navigateTo({
        //         url: '/pages/privacy/privacy',
        //       })
        // }else{
        //     wx.navigateTo({
        //       url: '/pages/login/login',
        //     })
        // }
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
    //     if(getApp().isLogin()){
    //         wx.navigateTo({
    //             url: '/pages/edit/edit',
    //           })
    //     }else{
    //     wx.navigateTo({
    //       url: '/pages/login/login',
    //     })
    // }
    wx.navigateTo({
        url: '/pages/edit/edit',
      })
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
        const that=this
        if(app.isLogin()){
            Api.getSeeList({page:1}).then(res=>{
                const list=res.data
                if(list.length){
                    list.map(e=>{
                        e.photo_url=JSON.parse(e.photo_url)[0]
                        e.like_list=JSON.parse(e.like_list)
                    })
                    console.log(list)
                    
                }
                that.setData({
                    matchedList:list
                })
            }).catch(err=>{
               
            })
        }
       
    },

    //请求列表
    getSeekList(){
        const that=this
        if(app.isLogin()){
            Api.getSeekList({page:1}).then(res=>{
                const list=res.data
                if(list.length){
                    list.map(e=>{
                        e.photo_url=JSON.parse(e.photo_url)[0]
                        e.like_list=JSON.parse(e.like_list)
                    })
                    console.log(list)
                    
                }
                that.setData({
                    requestedList:list
                })
            }).catch(err=>{
               
            })
        }
        
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
       if(getApp().isLogin()){
        Api.getUserInfo().then(res=>{
            console.log(res.user)
            const user=res.user
            that.setData({
                ...user
            })
            storage.set('userInfo',user)
            that.setData({
                sex:parseInt(user.sex)|0,
                imgList:JSON.parse(user.photo_url)
            })
        }).then(err=>{
            console.log(err)
        })
       }
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