// components/pcard/pcard.js
const app=getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
     pcardObj:{
         type:Object,
         value:{}
     }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
toDetail(){
    app.globalData.pcardObj = this.data.item
            wx.navigateTo({
                url: '/pages/detail/detail?canSee=1',
            })
}
    }
})
