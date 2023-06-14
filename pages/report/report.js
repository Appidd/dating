// pages/report/report.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fileList:[],
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
    ],
    describe:'',
    r_uid:''
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
        const {describe,typeList,r_uid}=this.data
        let tempFilePath=''
        console.log(typeList)
        if(this.data.fileList[0]){
            tempFilePath=this.data.fileList[0].tempFilePath
        }
         let type=''
         typeList.forEach(e=>{
             if(e.checked){
                type=type+e.value+';'
             }
         })
        
        if(tempFilePath==''){
            wx.showToast({
              title: '请上传图片',
              icon:'error'
            })
            return
        }
        wx.showLoading({
          title: '提交中',
        })
       const uploadUrl='https://101.35.179.187:5230/up/report'
        wx.uploadFile({
            url: uploadUrl,
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            filePath: tempFilePath,
            formData: {
              r_uid,
              "q_uid": wx.getStorageSync('uid'),
              type,
              describe,
              "file-1":tempFilePath,
            },
            name: "file",
            success:res=>{
                wx.hideLoading()
                wx.showToast({
                  title: '举报成功',
                })
                setTimeout(e=>{
                    wx.navigateBack()
                },1000)
              
            },
            fail:err=>{
                wx.hideLoading()
                wx.showToast({
                    title: '举报失败',
                    icon:'error'
                  })

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