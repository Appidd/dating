// components/card/card.js
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
        list: [1, 2, 3]
    },

    /**
     * 组件的方法列表
     */
    lifetimes: {
        attached() {
            let length = this.data.list.length
            this.setData({
                swiper: {
                    style: `--dotwidth:${600/length}rpx`
                }
            })
        }
    },
    methods: {
        handletouchstart:function(event) {
            this.data.lastX = event.touches[0].pageX;
            this.data.lastY = event.touches[0].pageY;
          },
        handletouchend(event) {
            console.log(event)
            let currentX = event.changedTouches[0].pageX;
            let currentY = event.changedTouches[0].pageY;
            let tx = currentX - this.data.lastX;
            let ty = currentY - this.data.lastY;
            //左右方向滑动
            if (Math.abs(tx) > Math.abs(ty)) {
                if (tx < 0) {
                    // 向左滑动
                    console.log('向左滑动')
                } else if (tx > 0) {
                    // 向右滑动
                    console.log('向右滑动')
                }

            }
            //上下方向滑动
            else {
                if (ty < 0) {
                    console.log('向上滑动')
                    this.data.flag = 3
                    wx.navigateTo({
                      url: '/pages/detail/detail',
                    })
                } else if (ty > 0) {
                    console.log('向下滑动')
                    this.data.flag = 4
                }

            }

        }
    }
})