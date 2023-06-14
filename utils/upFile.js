let uploadUrl='https://101.35.179.187:5230/up/image'
 const upFileObj={
// 选择图片并上传，编辑页面插入图片
uploadFilePromiseInsert(filePath){
    console.log(wx.getStorageSync('uid'))
    return  new Promise((r,i)=>{
      wx.uploadFile({
          url: uploadUrl,
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          filePath: filePath,
          formData: {
            "uid": wx.getStorageSync('uid')
          },
          name: "file",
          success:res=>{
              const imgUrl = JSON.parse(res.data).img
              console.log(imgUrl)
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
 