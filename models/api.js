import {
    HTTP
} from '../utils/http.js';

const baseUrl='https://101.35.179.187:5230'
class api extends HTTP {
    // 登陆接口
    userLogin(parameterObj) {
        return this.request({
            url: baseUrl + '/user/login',
            // header: {
            //     'Content-type': 'application/json',
            //     'Data-type': 'json'
            // },
            data: parameterObj,
            method: "POST"
        })
    }
    // 获取uid
    userUid(parameterObj) {
        return this.request({
            url: baseUrl + '/user/uid',
            header : {
                'content-type': 'application/x-www-form-urlencoded',
                'token':wx.getStorageSync('token')
            },
            method: "get"
        })
    }
    // 信息编辑
    editUserInfo(parameterObj){
        return this.request({
            url: baseUrl + '/up/info',
            header : {
                'content-type': 'application/x-www-form-urlencoded',
                'token':wx.getStorageSync('token')
            },
            data: parameterObj,
            method: "POST"
        })
    }
     // 信息编辑
     getUserInfo(){
        return this.request({
            url: baseUrl + '/user/data?uid='+wx.getStorageSync('uid'),
            // header : {
            //     'content-type': 'application/x-www-form-urlencoded',
            //     // 'token':wx.getStorageSync('token')
            // },
            // data: parameterObj,
            method: "GET"
        })
    }

    //设置隐私
    setPrivacy(parameterObj){
        return this.request({
            url: baseUrl + '/match/privacy',
            header : {
                'content-type': 'application/x-www-form-urlencoded',
                'token':wx.getStorageSync('token')
            },
            data: parameterObj,
            method: "POST"
        })
    }
//获取隐私设置
    getPrivacy(){
        return this.request({
            url: baseUrl + '/user/privacy',
            header : {
                'content-type': 'application/x-www-form-urlencoded',
                'token':wx.getStorageSync('token')
            },
            method: "GET"
        })
    }
//意见反馈
setsuggest(parameterObj){
    return this.request({
        url: baseUrl + '/up/suggest',
        header : {
            'content-type': 'application/x-www-form-urlencoded',
            'token':wx.getStorageSync('token')
        },
        data: parameterObj,
        method: "POST"
    })
}

//匹配规则
setFilter(parameterObj){
    return this.request({
        url: baseUrl + '/match/set',
        header : {
            'content-type': 'application/x-www-form-urlencoded',
            'token':wx.getStorageSync('token')
        },
        data: parameterObj,
        method: "POST"
    })
}
}

export {
    api
}