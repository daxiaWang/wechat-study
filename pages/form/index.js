//index.js
//获取应用实例
const app = getApp()
var localValue = "index-value"

var myBehavior = require("../../behavior/my-behavior.js")
var utils = require("../../utils/util")

Page({
  behaviors: [myBehavior],
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },
  data: {
    motto: 'Hello Worldmmmm',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    index: 0,
    sharedText: "sharedText",
    time: "",
    inputValue: "inputValue",
    pickerHidden: true,
    chosen: ''
  },
  //页面创建时执行
  onLoad: function (option) {
    console.log("this", this)
    console.log("wx.env", wx.env)
    this.setData({
      sharedText : 'This is a piece of data shared between pages.',
      time: utils.formatTime(new Date())
    })
    // this.sharedText === 'This is a piece of data shared between pages.'
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        // console.log("res", res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  //自定义函数
	// 用户点击右上角分享给好友,要先在分享好友这里设置menus的两个参数,才可以分享朋友圈
	onShareAppMessage: function() {
    console.log("onShareAppMessage")
		wx.showShareMenu({
	      withShareTicket: true,
	      menus: ['shareAppMessage', 'shareTimeline']
	    })
	},
	//用户点击右上角分享朋友圈
	onShareTimeline: function () {
    console.log("onShareTimeline")
		return {
	      title: 'wwwwwwwwwwwwwwwwww',
	      query: {
	        key: value
	      },
	      imageUrl: ''
	    }
	},
  onTabItemTap(item) {
    let ind = this.data.index++
    // tab 点击时执行
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
    this.setData({
      motto: `new motto ${ind}`
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  getUserInfo: function (e) {
    console.log('getUserInfo',e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goDetail: function() {
    wx.reLaunch({
      url: '../detail/index',
    })
    // wx.switchTab({
    //   url: '../home/index',
    // })
  },
  searchInp(e) {
    console.log("e",  e.detail.value)
    this.setData({
      inputValue: e.detail.value
    })
    console.log("inputValue",  this.data.inputValue)
  },
  customData: {
    hi: "MINA"
  },
  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})

console.log("app-index", app)
