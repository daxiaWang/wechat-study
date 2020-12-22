Component({
  //初始化数据
  data: {
    selectInd: 0
  },
  methods: {
    switchTab(e) {
      console.log("e", e.detail)
      this.setData({
        selectInd: e.detail
      })
      console.log("selectInd", this.data.selectInd)
    }
  }
})