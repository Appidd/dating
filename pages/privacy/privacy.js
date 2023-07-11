// pages/privacy/privacy.js
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
        age_start: 22,
        age_end: 34,
        height_start: 156,
        height_end: 178,
        beginAge: 20,
        endAge: 26,
        show_name: 1,
        open_tel: 1,
        open_income: 1,
        open_family: 1,
        educationList: ['小学', '初中', '高中', '大专', '本科', '硕士', '博士'],
        see_edu: 1,
        areaList: ['选择地区', '汕头', '潮州', '揭阳'],
        see_area: '选择地区',
        see_not: '',
        heightList:[150,176],
        ageList:[16,30]
    },
    //选择学历
    chooseeducation(e) {
        const index = parseInt(e.detail.value)
        this.setData({
            see_edu: index
        })
    },
    //选择地区
    chooseArea(e) {
        const index = parseInt(e.detail.value)
        const see_area = this.data.areaList[index]
        this.setData({
            see_area
        })
    },
    onChangeAge(event) {
        const age_end = event.detail[1]
        const age_start = event.detail[0]
        this.setData({
            age_start,
            age_end
        })
    },
    onChangeHeight(event) {
        const height_start = event.detail[0]
        const height_end = event.detail[1]

        this.setData({
            height_start,
            height_end
        })
    },
    onChange1({
        detail
    }) {
        // 需要手动对 checked 状态进行更新
        this.setData({
            show_name: detail?1:0
        });
    },
    onChange2({
        detail
    }) {
        // 需要手动对 checked 状态进行更新
        this.setData({
            open_tel: detail?1:0
        });
    },
    onChange3({
        detail
    }) {
        // 需要手动对 checked 状态进行更新
        this.setData({
            open_income: detail?1:0
        });
    },
    onChange4({
        detail
    }) {
        // 需要手动对 checked 状态进行更新
        this.setData({
            open_family: detail?1:0
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const that=this
     Api.getPrivacy().then(res=>{
       let  {show_name,
            open_tel,
            open_income,
            open_family,
            see_edu,
            see_area,
            see_not,
            height_end,
            height_start,
            age_start,
            age_end}=res.data
            show_name=parseInt(show_name)
            open_tel=parseInt(open_tel)
            open_income=parseInt(open_income)
            open_family=parseInt(open_family)
            height_end=parseInt(height_end||176)
            height_start=parseInt(height_start||150)
            age_start=parseInt(age_start||16)
            age_end=parseInt(age_end||30)
            that.setData({
                show_name,
            open_tel,
            open_income,
            open_family,
            see_edu,
            see_area,
            see_not,
            height_end,
            height_start,
            age_start,
            age_end,
            ageList:[age_start,age_end],
            heightList:[height_start,height_end]
            })
        
     }).catch(err=>{
    console.log(err)     
    })
    },
    submit() {
        console.log(this.data.open_family)
        wx.showLoading({
            title: '正在保存',
        })
        const {
            show_name,
            open_tel,
            open_income,
            open_family,
            see_edu,
            see_area,
            see_not,
            height_end,
            height_start,
            age_start,
            age_end
        } = this.data
        Api.setPrivacy({
            show_name,
            open_tel,
            open_income,
            open_family,
            see_edu,
            see_area,
            see_not,
            height_end,
            height_start,
            age_start,
            age_end
        }).then(res => {
            wx.hideLoading()
            wx.showToast({
                title: '保存成功',
            })
            setTimeout(e=>{
                wx.navigateBack()
            },2000)
        }).catch(err => {
            wx.hideLoading()
            wx.showToast({
                title: '保存失败',
                icon: 'error'
            })
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