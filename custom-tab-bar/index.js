Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#13227A",
    list: [{
      pagePath: "/pages/home/index",
      iconPath: "/images/new/faxian.png",
      selectedIconPath: "/images/new/faxian-a.png",
      id: 0,
      text: "首页"
    },{
      pagePath: "/pages/list/index",
      iconPath: "/images/new/liebiao.png",
      selectedIconPath: "/images/new/liebiao-a.png",
      id: 1,
      text: "列表"
    },{
      pagePath: "/pages/setting/index",
      iconPath: "/images/new/shezhi.png",
      selectedIconPath: "/images/new/shezhi-a.png",
      id: 2,
      text: "设置"
    }, {
      pagePath: "/pages/me/index",
      iconPath: "/images/new/wode.png",
      selectedIconPath: "/images/new/wode-a.png",
      id: 3,
      text: "我的"
    }]
  },
  lifetimes: {
    attached: function() {
      console.log("在组件实例进入页面节点树时执行")
      // 在组件实例进入页面节点树时执行
      // this.handleSwitchTab(this.data.selected)
    },
    detached: function() {
      console.log("在组件实例被从页面节点树移除时执行")
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    handleSwitchTab(e) {
      let that = this
      const data = e.currentTarget.dataset
      const url = data.path
      const ind = data.index
      // console.log("that", that)
      // console.log("index", data.index)
      // console.log("url", url)
      // console.log("selected", that.data.selected)
      // setTimeout(function(){
        that.setData({
          selected: ind
        })
        // wx.switchTab({url})
      // }, 0)
      
      console.log("new selected", this.data.selected)
      this.triggerEvent("switchTab", this.data.selected);
    }
  },
  observers: {
    'selected': function(selected) {
      // console.log("selected", selected)
      // 在 rate被设置时，执行这个函数
      // this.handleSwitchTab()
      // this.setData({
      //   selected: selected
      // })
    }
  }
})