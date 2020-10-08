import http from "../../utils/http"

Page({
  timer: null,
  seconds: 1500,
  data: {
    time: "",
    isStopStatus: true,
    confirmVisible: false,
    againVisible: false,
    finishConfirmVisible: false,
    tomato: {}
  },

  onShow: function () {
    this.startTimer();
    // http.post("/tomatoes").then(response => {
    //   this.setData({ tomato: response.data.resource })
    // })
  },
  onHide: function () {
    this.clearTimer();
    // http.put(`/tomatoes/${this.data.tomato.id}`, {
    //   description: "退出放弃",
    //   aborted: true
    // })
  },
  onUnload: function () {
    this.clearTimer();
    // http.put(`/tomatoes/${this.data.tomato.id}`, {
    //   description: "退出放弃",
    //   aborted: true
    // })
  },
  hideFinishConfirm() {
    this.setData({
      finishConfirmVisible: false
    })
  },
  confirmFinish(e) {
    const content = e.detail;
    this.hideFinishConfirm();
  },
  convertSeconds() {
    let m = Math.floor(this.seconds / 60)
    let s = Math.floor(this.seconds % 60)
    if ((s + "").length === 1) {
      s = "0" + s;
    }
    if ((m + "").length === 1) {
      m = "0" + m;
    }
    this.setData({
      time: `${m}:${s}`
    })
  },
  againTimer() {
    this.seconds = 1500;
    this.startTimer();
    this.setData({
      againVisible: false
    })
    // http.post("/tomatoes").then(response => {
    //   this.setData({ tomato: response.data.resource })
    // })
  },
  startTimer() {
    this.convertSeconds();
    this.setData({ isStopStatus: true })
    this.timer = setInterval(() => {
      this.seconds--;
      this.convertSeconds();
      if (this.seconds === 0) {
        this.setData({
          againVisible: true,
          finishConfirmVisible: true
        })
        return this.clearTimer();
      }

    }, 1000);
  },
  clearTimer() {
    this.setData({ isStopStatus: false })
    clearInterval(this.timer);
    this.timer = null;
  },
  confirmAbandon(e) {
    wx.navigateBack({
      to: -1,
    })
    // const content = e.detail;
    // http.put(`/tomatoes/${this.data.tomato.id}`, {
    //   description: content,
    //   aborted: true
    // }).then(() => {
    //   wx.navigateBack({
    //     to: -1,
    //   })
    // })
  },
  abandon() {
    this.clearTimer();
    this.setData({
      confirmVisible: true
    })
  },
  cancel() {
    this.startTimer();
    this.setData({
      confirmVisible: false
    })
  }
})