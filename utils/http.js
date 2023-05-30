class HTTP {
    request({
        url,
        data = {},
        method = "GET",
        header
    }) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method, header)
        })
    }
    _request(url, resolve, reject, data = {}, method = "GET", header) {
        // 请求头 
        if (!header) {
            header = {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }
        wx.request({
            url: url,
            method: method,
            data: data,
            header: header,
            success: (res) => {
                // 判断状态码
                const code = res.statusCode.toString()
                // 如果状态码 开头是2
                if (code.startsWith('2')) {
                    resolve(res.data)
                    if (res.data.stateCode !== '000000') {
                        if (res.data.stateCode === '700004' || res.data.stateCode === '700003') {
                            return false
                        }
                        if (res.data.stateCode === '100000' || res.data.stateCode === '700005' || res.data.stateCode === '700006') {
                            if (res.data.message) {
                                wx.showModal({
                                    title: '提示',
                                    content: res.data.message,
                                    showCancel: false
                                })
                            }
                        } else if (res.data.stateCode === '200000') {

                        } else if(res.data.stateCode === '20001'){

                        }else if(res.data.stateCode === '21001'){
                            
                        }else if(res.data.stateCode === '21002'){
                            
                        }else if(res.data.stateCode === '30001'){

                        }
                        else {
                            if (res.data.message) {
                                wx.showToast({
                                    title: '系统异常',
                                    icon: 'none'
                                })
                            }
                        }
                    }
                } else {
                    reject()
                    // 服务器报错
                    wx.showToast({
                        title: '请求地址异常',
                        icon: 'none'
                    })
                }
            },
            fail: (err) => {
                reject(err)
                wx.showToast({
                    title: '服务器异常',
                    icon: 'none'
                })
            }
        })
    }
}

export {
    HTTP
}