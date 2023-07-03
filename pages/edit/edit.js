// pages/edit/edit.js
import * as storage from '../../utils/storage.js'
import upFileObj from '../../utils/upFile'
// 调用登录接口
import {
    api
} from '../../models/api.js';
const Api = new api()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        wechat: '',
        family: '',
        hobby: '',
        income: '',
        industry: '',
        weight: '',
        height: '',
        real_name: '',
        imgList: [],
        sex_list: [{
                checked: false,
                value: '男',
                checkedUrl: '/static/images/icon/boyChecked.png',
                defaultUrl: '/static/images/icon/boynotChecked.png'
            },
            {
                checked: true,
                value: '女',
                checkedUrl: '/static/images/icon/girlChecked.png',
                defaultUrl: '/static/images/icon/girlnotChecked.png'
            }
        ],
        sex: 0,
        age: 20,
        chineseZodiacList: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
        animals: '鼠',
        constellationList: ['水瓶座', '双鱼座', '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座'],
        constellation: '狮子座',
        educationList: ['小学', '初中', '高中', '大专', '本科', '硕士', '博士'],
        education: 4,
        areaList: ['选择地区', '汕头', '潮州', '揭阳'],
        area: '选择地区',
        nowAreaList: ['选择现居', '汕头', '潮州', '揭阳'],
        now_area: '选择现居'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
        this.setData({
            area:  storage.get('area')
        })
        const that = this
        Api.getUserInfo().then(res => {
            console.log(res.user)
            const user = res.user
            that.setData({
                ...user
            })
            let sex = parseInt(user.sex)
            console.log(sex)
            let sex_list = [{
                    checked: true,
                    value: '男',
                    checkedUrl: '/static/images/icon/boyChecked.png',
                    defaultUrl: '/static/images/icon/boynotChecked.png'
                },
                {
                    checked: false,
                    value: '女',
                    checkedUrl: '/static/images/icon/girlChecked.png',
                    defaultUrl: '/static/images/icon/girlnotChecked.png'
                }
            ]
            if (sex == 1) {
                that.setData({
                    sex_list
                })
            }
            that.setData({
                sex: parseInt(user.sex),
                imgList: JSON.parse(user.photo_url)
            })
        }).then(err => {
            console.log(err)
        })
    },
    // 选择生肖
    chineseZodiac(e) {
        const index = parseInt(e.detail.value)
        const zodiac = this.data.chineseZodiacList[index]
        this.setData({
            animals: zodiac
        })
    },
    //选择地区
    chooseArea(e) {
        const index = parseInt(e.detail.value)
        const area = this.data.areaList[index]
        this.setData({
            area
        })
    },
    //选择现居
    chooseNowArea(e) {
        const index = parseInt(e.detail.value)
        const now_area = this.data.nowAreaList[index]
        this.setData({
            now_area
        })
    },
    // 选择性别
    chooseSex(e) {
        const index = e.currentTarget.dataset.index
        const sex_list = this.data.sex_list
        sex_list.forEach(item => {
            item.checked = false
        })
        sex_list[index].checked = true
        this.setData({
            sex_list,
            sex: index?0:1
        })
    },
    //选择星座
    chineseConstellation(e) {
        const index = parseInt(e.detail.value)
        const constellation = this.data.constellationList[index]
        this.setData({
            constellation
        })
    },
    //选择学历
    chooseeducation(e) {
        const index = parseInt(e.detail.value)
        this.setData({
            education: index
        })
    },
    //上传照片
    chooseImg() {
        let that = this
        const uid = that.data.uid
        wx.chooseImage({
            count: 6,
            success: res => {
                wx.showLoading({
                    title: '',
                })
                const fileList = res.tempFilePaths

                const uploadTasks = fileList.map((file) => upFileObj.uploadFilePromiseInsert(file, uid));
                Promise.all(uploadTasks).then(img => {
                    console.log(imgList)
                    const imgList = this.data.imgList
                    const newList = imgList.concat(img)
                    let resultList = []
                    if (newList.length > 6) {
                        resultList = newList.slice(0, 6)
                    } else {
                        resultList = newList
                    }

                    that.setData({
                        imgList: resultList
                    })
                    wx.hideLoading()
                }).catch(err => {
                    wx.hideLoading()
                    wx.showToast({
                        title: '上传失败',
                        icon: 'error'
                    })
                })
            }
        })
    },

    //删除照片
    delete(e) {
        const index = e.currentTarget.dataset.index
        const imgList = this.data.imgList
        imgList.splice(index, 1)
        this.setData({
            imgList
        })
    },
    submit() {
        const {
            imgList,
            real_name,
            sex,
            age,
            animals,
            height,
            weight,
            constellation,
            education,
            industry,
            income,
            wechat,
            family,
            hobby,
            area,
            now_area
        } = this.data

        if (!imgList.length) {
            wx.showToast({
                title: '请上传个人照片',
                icon: 'none'
            })
            return
        }
        if (!real_name) {
            wx.showToast({
                title: '请输入真实姓名',
                icon: 'none'
            })
            return
        }
        if (!age) {
            wx.showToast({
                title: '请输入年龄',
                icon: 'none'
            })
            return
        }

        if (!height) {
            wx.showToast({
                title: '请输入身高',
                icon: 'none'
            })
            return
        }
        if (!weight) {
            wx.showToast({
                title: '请输入体重',
                icon: 'none'
            })
            return
        }
        if (area == '选择区域') {
            wx.showToast({
                title: '请选择地区',
                icon: 'none'
            })
            return
        }
        if (now_area == '选择现居') {
            wx.showToast({
                title: '请选择现居',
                icon: 'none'
            })
            return
        }
        if (!industry) {
            wx.showToast({
                title: '请输入行业',
                icon: 'none'
            })
            return
        }

        if (!income) {
            wx.showToast({
                title: '请输入年收入',
                icon: 'none'
            })
            return
        }
        if (!wechat) {
            wx.showToast({
                title: '请输入微信',
                icon: 'none'
            })
            return
        }
        if (!wechat) {
            wx.showToast({
                title: '请输入微信',
                icon: 'none'
            })
            return
        }
        wx.showLoading({
            title: '保存中',
        })
        Api.editUserInfo({
            img_list: JSON.stringify(imgList),
            real_name,
            sex,
            age,
            animals,
            height,
            weight,
            constellation,
            edu:education,
            industry,
            income,
            wechat,
            family,
            hobby,
            area,
            now_area
          
        }).then(res => {
            wx.hideLoading()
            wx.showToast({
                title: '保存成功',
                icon: 'success'
            })
            console.log(res)
        }).catch(err => {
            wx.hideLoading()
            wx.showToast({
                title: '保存失败',
                icon: 'error'
            })
            console.log(err)
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})