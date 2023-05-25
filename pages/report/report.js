// pages/report/report.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        textNum:0,
        typeList:[{
            id:1,
            checked:true,
            value:'违规违法'
        },
        {
            id:2,
            checked:false,
            value:'色情低俗'
        },
        {
            id:3,
            checked:false,
            value:'诈骗信息'
        },
        {
            id:4,
            checked:false,
            value:'谩骂攻击'
        },
        {
            id:5,
            checked:false,
            value:'冒充他人'
        },
        {
            id:6,
            checked:false,
            value:'广告'
        },
        {
            id:7,
            checked:false,
            value:'涉未成年人'
        },
        {
            id:8,
            checked:false,
            value:'其他'
        }
    ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    checkItem(e){
        const item=e.currentTarget.dataset.item
        console.log(item)
        const typeList=this.data.typeList
        typeList.forEach(it=>{
           if(it.id==item.id){
               console.log(item)
               it.checked=!item.checked
           }
        })
        this.setData({
            typeList
        })
// console.log(e)
    },
    checkNum(e){
        const cursor=e.detail.cursor
        this.setData({
            textNum:cursor
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