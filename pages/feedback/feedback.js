// pages/feedback/feedback.js
import * as storage from '../../utils/storage.js'
import upFileObj from '../../utils/upFile'
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
        fileList:[],
        textNum:0,
        question:'',
        contact:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    checkNum(e){
        const cursor=e.detail.cursor
        this.setData({
            textNum:cursor
        })
    },
    chooseImage(e){
        const {file}=e.detail
        this.setData({
            fileList:[{...file}]
        })
    },
    deleteImg(e){
        this.setData({
            fileList:[]
        })
    },
    submit(){
        const that=this
        const {contact,question}=this.data
        let tempFilePath=''
        if(this.data.fileList[0]){
            tempFilePath=this.data.fileList[0].tempFilePath
        }

        if(tempFilePath==''){
            wx.showToast({
              title: '请上传图片',
              icon:'error'
            })
            return
        }
        if(!question){
            wx.showToast({
                title: '请填写问题与意见',
                icon:'error'
              })
              return
        }
        if(!contact){
            wx.showToast({
                title: '请填写联系方式',
                icon:'error'
              })
              return
        }
        wx.showLoading({
          title: '提交中',
        })
       const uploadUrl='https://101.35.179.187:5230/up/suggest'
        wx.uploadFile({
            url: uploadUrl,
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            filePath: tempFilePath,
            formData: {
              "uid": wx.getStorageSync('uid'),
              "question":question,
              "contact":contact
            },
            name: "file",
            success:res=>{
                wx.hideLoading()
                wx.showToast({
                  title: '提交成功',
                })
               setTimeout(e=>{
                   wx.navigateBack()
               },1000)
            },
            fail:err=>{
                console.log(err)
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