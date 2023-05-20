// components/card/card.js
const app=getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: {}
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
    lifetimes: {
        attached() {
           
        }
    },
    methods: {
        toDetail(){
            app.globalData.itemObj=this.data.item
            wx.navigateTo({
              url: '/pages/detail/detail',
            })
        },
    }
})