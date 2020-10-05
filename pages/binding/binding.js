import http from "../../utils/http"

Page({
  data: {
    account: "",
    password: ""
  },
  watchAccount(event) {
    const content = event.detail.value;
    this.setData({
      account: content
    })
  },
  watchPassword(event) {
    const content = event.detail.value;
    this.setData({
      password: content
    })
  },

  submit() {
    http.post("/bindings", {
      account: this.data.account,
      password_digest: this.data.password
    }).then(response => {
      wx.setStorageSync("me", response.data.resource)
      wx.reLaunch({ url: '/pages/home/home' })
    })
  },
})