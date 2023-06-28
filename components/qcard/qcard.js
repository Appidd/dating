const app=getApp()
// 调用登录接口
import {
    api
} from '../../models/api.js';
const Api = new api()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
     qcardObj:{
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
        resolve(){
            Api.getUserContact({
                like_uid:this.data.itemObj.uid
            }).then(res=>{
                wx.showToast({
                  title: '请求已接收',
                })
               this.triggerEvent('refresh')
            }).catch(err=>{
                console.log(err)
            })
        },
    }
})
