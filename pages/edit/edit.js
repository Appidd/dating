// pages/edit/edit.js
import upFileObj from '../../utils/upFile'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgList:['/static/images/icon/bg.jpg'],
        sex_list:[{
            checked:true,
            value:'男',
            checkedUrl:'/static/images/icon/boyChecked.png',
            defaultUrl:'/static/images/icon/boynotChecked.png'
        },
        {
            checked:false,
            value:'女',
            checkedUrl:'/static/images/icon/girlChecked.png',
            defaultUrl:'/static/images/icon/girlnotChecked.png'
        }
    ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
//上传照片
chooseImg(){
    const imgList=this.data.imgList
    let that=this
    wx.chooseImage({
        count: 9,
        success: res => {
            // wx.showLoading({
            //     title: '',
            // })
            const fileList = res.tempFilePaths
            console.log(fileList)
            const newList=imgList.concat(fileList)
            that.setData({
                imgList:newList
            })
            // const uploadTasks = fileList.map((file) => upFileObj.uploadFilePromiseInsert(file));
            // Promise.all(uploadTasks).then(imgList => {
            //     console.log(imgList)
            // }).catch(err => {
            //     wx.hideLoading()
            //     wx.showToast({
            //         title: '上传失败',
            //         icon: 'error'
            //     })
            // })
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