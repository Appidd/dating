let uploadUrl='http://101.35.179.187:5230/up/image'
 const upFileObj={
// 选择图片并上传，编辑页面插入图片
uploadFilePromiseInsert(filePath){
    console.log(wx.getStorageSync('token'))
    return  new Promise((r,i)=>{
      wx.uploadFile({
          url: uploadUrl,
          header: {
             'content-type': 'application/x-www-form-urlencoded',
              "token": wx.getStorageSync('token')
          },
          filePath: filePath,
          name: "file",
          success:res=>{
              const imgUrl = JSON.parse(res.data).data
              r(imgUrl)
          },
          fail:err=>{
              i('err')
          }
      })
    })
  },

 }
 export default upFileObj
 