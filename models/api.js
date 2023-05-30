import {
    HTTP
} from '../utils/http.js';

const baseUrl='http://101.35.179.187:5230'
class api extends HTTP {
    // 获取文章类型
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
}

export {
    api
}