import http from "../../utils/_http"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowCreateConfirm: false,
    isShowUpdateConfirm: false,
    originDescription: "",
    updateId: "",
    todoList: [
      { id: 1, description: "kjdjfei", completed: false },
      { id: 2, description: "kjdjfei", completed: false },
      { id: 3, description: "kjdjfei", completed: false },
      { id: 4, description: "kjdjfei", completed: false },
      { id: 5, description: "kjdjfei", completed: false },
      { id: 6, description: "kjdjfei", completed: false },
      { id: 7, description: "kjdjfei", completed: false },
    ]
  },
  onShow: function () {
    // http.get("/todos?completed=false").then(response => {
    // this.setData({todoList:response.data.resources})
    // console.log(response)
    // })
  },
  confirmFinish(e) {
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    this.data.todoList[index].completed = true;
    this.setData({ todoList: this.data.todoList })
    // http.put(`/todos/${id}`, {
    //   completed: true
    // }).then(response => {
    //   const todo = response.data.resource;
    //   this.data.todoList[index] = todo;
    //   this.setData({ todoList: this.data.todoList })
    // })
  },
  showCreateConfirm() {
    this.setData({ "isShowCreateConfirm": true });
  },
  hideCreateConfirm() {
    this.setData({ "isShowCreateConfirm": false });
  },
  showUpdateConfirm(event) {
    const { description, id } = event.currentTarget.dataset;
    this.data.updateId = id;
    this.setData({ originDescription: description })
    this.setData({ "isShowUpdateConfirm": true });
  },
  hideUpdateConfirm() {
    this.setData({ "isShowUpdateConfirm": false });
  },
  createTodo(event) {
    const description = event.detail;
    if (description) {
      http.post("/todos", {
        description,
        completed: false
      }).then(response => {
        const newTodo = [response.data.resource]
        const newTodoList = newTodo.concat(this.data.todoList)
        this.setData({ todoList: newTodoList })
        this.hideCreateConfirm();
      })
    } else {
      wx.showToast({
        title: '你还没有输入内容！',
        icon: "none"
      })
    }
  },
  updateTodo(event) {
    const description = event.detail;
    if (description) {
      http.put(`/todos/${this.data.updateId}`, {
        description
      }).then(response => {
        const todo = response.data.resource;
        this.data.todoList[index] = todo;
        this.setData({ todoList: this.data.todoList })
      })
    } else {
      wx.showToast({
        title: '你还没有输入内容！',
        icon: "none"
      })
    }
  }
})