import http from "../../utils/_http"
const { app_id, app_secret } = getApp().globalData;

Page({

  data: {

  },
  onShow: function () {
  },
  login(event) {
    const { encryptedData, iv } = event.detail;
    this.wxlogin(encryptedData, iv)
  },
  wxlogin(encryptedData, iv) {
    wx.login({
      success: (res) => {
        this.userLogin(encryptedData, iv, res.code);
      },
    })
  },
  userLogin(encryptedData, iv, code) {
    http.post("/sign_in/mini_program_user", {
      encryptedData,
      iv,
      code,
      app_id,
      app_secret
    }).then(response => {
      this.saveMessage(response);
      wx.reLaunch({
        url: '/pages/home/home',
      })
    })
  },
  saveMessage(response) {
    wx.setStorageSync('me', response.data.resource)
    wx.setStorageSync('X-token', response.header["X-token"])
  },
  //假的登录
  fakeLogin() {
    wx.reLaunch({
      url: '/pages/home/home',
    })
  }
})