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
        animals:'',
        cascaderValue: '',
        cascaderData:[],
        wechat: '',
        family: '',
        hobby: '',
        income: 5,
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
        educationList: [ '初中','中专', '高中', '大专', '本科', '硕士', '博士'],
        education: 4,
        areaList: ['选择地区', '汕头', '潮州', '揭阳','汕尾'],
        area: '选择地区',
        nowAreaList: ['选择现居', '汕头', '潮州', '揭阳','汕尾'],
        now_area: '选择现居',
        uid:getApp().globalData.uid,
        incomeList:[{
            name:'10万以下',
            value:5
        },{
            name:'10万-20万',
            value:15
        },
        {
            name:'20万-30万',
            value:25
        },
        {
            name:'30万-50万',
            value:40
        },
        {
            name:'50万-100万',
            value:75
        },
        {
            name:'100万以上',
            value:100
        }
       ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const that = this
        this.setData({
            nowarea: storage.get('area')
        })

        Api.getUserInfo().then(res => {
            console.log(res.user)
            const user = res.user
            that.setData({
                ...user,
                canEdit:user.real_name?false:true
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
        Api.getArea().then(res => {
            // console.log(res)
            let data = res.data
            that.fomatCasData(data)
        })
    },
    onFinish(e) {
        console.log(e)
        const { selectedOptions, value } = e.detail;
        const fieldValue = selectedOptions
            .map((option) => option.text || option.name)
            .join('-');
            console.log(fieldValue,value)
        this.setData({
          fieldValue,
          cascaderValue: value,
          area:fieldValue,
          show:false
        })
      },
      onClick() {
        this.setData({
          show: true,
        });
      },
    
      onClose() {
        this.setData({
          show: false,
        });
      },
    fomatCasData(data) {
        // 转换为四级级联选择的对象数组

        const cascaderData = [];

        data.forEach(item => {
            const provinceIndex = cascaderData.findIndex(province => province.text === item.city);
            if (provinceIndex === -1) {
                const province = {
                    value: item.city,
                    text: item.city,
                    children: []
                };
                const city = {
                    value: item.area,
                    text: item.area,
                    children: []
                };
                const town = {
                    value: item.town,
                    text: item.town,
                    children: []
                };
                const village = {
                    value: item.village,
                    text: item.village

                };

                town.children.push(village);
                city.children.push(town);
                province.children.push(city);

                cascaderData.push(province);
            } else {
                const province = cascaderData[provinceIndex];
                const cityIndex = province.children.findIndex(city => city.text === item.area);
                if (cityIndex === -1) {
                    const city = {
                        value: item.area,
                        text: item.area,
                        children: []
                    };
                    const town = {
                        value: item.town,
                        text: item.town,
                        children: []
                    };
                    const village = {
                        value: item.village,
                        text: item.village

                    };

                    town.children.push(village);
                    city.children.push(town);
                    province.children.push(city);
                } else {
                    const city = province.children[cityIndex];
                    const townIndex = city.children.findIndex(town => town.text === item.town);
                    if (townIndex === -1) {
                        const town = {
                            value: item.town,
                            text: item.town,
                            children: []
                        };
                        const village = {
                            value: item.village,
                            text: item.village

                        };

                        town.children.push(village);
                        city.children.push(town);
                    } else {
                        const town = city.children[townIndex];
                        const village = {
                            value: item.village,
                            text: item.village

                        };

                        town.children.push(village);
                    }
                }
            }
        });
this.setData({
    cascaderData:cascaderData.slice(0,-1)
})
console.log(cascaderData)
    },
    // 选择生肖
    chineseZodiac(e) {
        const index = parseInt(e.detail.value)
        const zodiac = this.data.chineseZodiacList[index]
        this.setData({
            animals: zodiac
        })
    },
    //选择年收入
    chineseIncome(e){
        const index = parseInt(e.detail.value)
        const zodiac = this.data.incomeList[index]
        this.setData({
            income: zodiac.value
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
        // const index = parseInt(e.detail.value)
        // const now_area = this.data.nowAreaList[index]
        this.setData({
            // now_area
            show:true
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
            sex: index ? 0 : 1
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
            edu: education,
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
            setTimeout(e=>{
                wx.navigateBack()
            },2000)
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