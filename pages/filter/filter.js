// pages/filter/filter.js
import {
    api
} from '../../models/api.js';
const Api = new api()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        age_start:20,
        age_end:45,
        height_start:167,
        height_end:187,
        sex:0,
        edu:1,
        area:'选择地区',
        sexList:['女','男'],
        educationList: ['小学', '初中', '高中', '大专', '本科', '硕士', '博士'],
        areaList: ['选择地区', '汕头', '潮州', '揭阳']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    reset(){
        this.setData({
            age_start:20,
            age_end:45,
            height_start:167,
            height_end:187,
            sex:0,
            edu:1,
        })
    },
    chooseeducation(e) {
        const index = parseInt(e.detail.value)
        this.setData({
            edu: index
        })
    },
     //选择地区
     chooseArea(e) {
        const index = parseInt(e.detail.value)
        const area = this.data.areaList[index]
        this.setData({
            area
        })
    },
    onChangeAge(event) {
        const age_start=event.detail[0]
        const age_end=event.detail[1]
        this.setData({
            age_start,
            age_end
        })
      },
      onChangeHeight(event){
        const height_start=event.detail[0]
        const height_end=event.detail[1]
        this.setData({
            height_start,
            height_end
        })
      },
      choosesex(e){
          const sex=parseInt(e.detail.value)
          this.setData({
            sex
          })
      },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    submit(){
       const {age_start,age_end,height_start,height_end,sex,edu,area}=this.data
       let areaList=''
       if(area=='选择地区'){
        areaList='[]'
       }else{
        areaList=[area].toString()
       }
        Api.setFilter({age_start,age_end,height_start,height_end,sex,edu,area:areaList}).then(res=>{
         wx.navigateBack()
        }).catch(err=>{
            wx.navigateBack()
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