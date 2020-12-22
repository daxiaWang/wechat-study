module.exports = Behavior({
  data: {
    sharedText: "This is a piece of data shared between pages."
  },
  methods: {
    sharedMethods: function() {
      console.log("sharedMethods")
      this.data.sharedText === "This is a piece of data shared between pages."
    }
  }
})