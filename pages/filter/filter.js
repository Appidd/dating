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
        age_start:18,
        age_end:60,
        height_start:140,
        height_end:200,
        sex:-1,
        edu:0,
        area:'不限',
        sexList:['不限','女','男'],
        educationList: ['全部', '初中', '中专','高中', '大专', '本科', '硕士', '博士'],
        areaList: ['不限', '汕头', '潮州', '揭阳','汕尾']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
this.getFilter()
    },
    getFilter(){
        const that=this
        Api.getFilter().then(res=>{
            console.log(res)
            const result=res.data
            that.setData({
                age_end:parseInt(result.age_end||45),
                age_start:parseInt(result.age_start||20),
                height_end:parseInt(result.height_end||187),
                height_start:parseInt(result.height_start||167),
                edu:parseInt(result.edu||1),
                sex:parseInt(result.sex||-1),
                area:result.area=='[]'?'':'选择地区'
            })
        })
    },
    reset(){
        this.setData({
            age_start:18,
            age_end:60,
            height_start:140,
            height_end:200,
            sex:-1,
            edu:-1,
            area:'不限'
        })
        this.submit()
    },
    chooseeducation(e) {
        const index = parseInt(e.detail.value)
        this.setData({
            edu: index-1
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
          const sex=parseInt(e.detail.value)-1
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