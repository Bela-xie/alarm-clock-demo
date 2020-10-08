// components/confirm/confirm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    watchValue(e) {
      this.setData({ inputValue: e.detail.value })
    },
    confirm() {
      this.triggerEvent("confirm", this.data.inputValue)
      this.data.inputValue = ""
    },
    cancel() {
      this.triggerEvent("cancel", "取消")
      this.data.inputValue = ""
    }
  },
})
