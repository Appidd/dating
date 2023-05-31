let uploadUrl=''
 const upFileObj={
// 选择图片并上传，编辑页面插入图片
uploadFilePromiseInsert(filePath){
    return  new Promise((r,i)=>{
      wx.uploadFile({
          url: uploadUrl,
          header: {
              "Content-Type": "multipart/form-data",
              'x-requested-with': 'XMLHttpRequest',
              "token": wx.getStorageSync('token').value
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
 