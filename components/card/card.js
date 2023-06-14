// components/card/card.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: {}
        },
        isLogin: {
            type:Boolean,
            value:false
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
        console.log(222)
        },
        detached(){
            console.log(111)
        }
    },
    methods: {
        toDetail() {
            app.globalData.itemObj = this.data.item
            wx.navigateTo({
                url: '/pages/detail/detail',
            })
        },
        toLogin(e) {
           wx.navigateTo({
             url: '/pages/login/login',
           })
        }
    }
})