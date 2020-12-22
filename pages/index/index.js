Component({
  //初始化数据
  data: {
    sum: 0,
    num1: null,
    num2: null
  },
  methods: {
    handleInput(e) {
      this.setData({
        num1: e.detail.value
      })
      console.log("num1", this.data.num1)
    },
    handleInput1(e) {
      this.setData({
        num2: e.detail.value
      })
    },
    handleOpen() {
      // wx.navigateTo({
      //   url: 'pages/detail',
      // })
      wx.navigateTo({
        url: '/pages/detail/index'
      })
    }
  },
  observers: {
    // 监听num1和num2的变化 动态改变sum的值
    // 记住num1和num2 data已经更新 下面不需要更新！否则会死循环！
    'num1,num2': function (num1, num2) {
      console.log("num", num1)
      this.setData({
        sum: Number(num1) + Number(num2)
      })
    }
  }
})