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
      { id: 1, description: "洗衣服", completed: false },
      { id: 2, description: "写一篇文章", completed: false },
      { id: 3, description: "吃饭", completed: false },
      { id: 4, description: "完成数学作业", completed: false },
      { id: 5, description: "扫地", completed: false },
      { id: 6, description: "收拾房间", completed: false },
      { id: 7, description: "完成语文作业", completed: false },
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
    // if (description) {
    //   http.post("/todos", {
    //     description,
    //     completed: false
    //   }).then(response => {
    //     const newTodo = [response.data.resource]
    //     const newTodoList = newTodo.concat(this.data.todoList)
    //     this.setData({ todoList: newTodoList })
    //     this.hideCreateConfirm();
    //   })
    // } 
    if (description) {
      let list = this.data.todoList;
      const newTodo = {
        id: list.length + 1,
        description,
        completed: false
      }
      const newTodoList = [newTodo].concat(this.data.todoList)
      this.setData({ todoList: newTodoList })
      this.hideCreateConfirm();
    } else {
      wx.showToast({
        title: '你还没有输入内容！',
        icon: "none"
      })
    }
  },
  updateTodo(event) {
    let description = event.detail;
    // if (description) {
    //   http.put(`/todos/${this.data.updateId}`, {
    //     description
    //   }).then(response => {
    //     const todo = response.data.resource;
    //     this.data.todoList[index] = todo;
    // this.hideUpdateConfirm();
    //     this.setData({ todoList: this.data.todoList })
    //   })
    // } 
    if (description) {
      for (let i = 0; i < this.data.todoList.length; i++) {
        if (this.data.todoList[i].id === this.data.updateId) {
          this.data.todoList[i].description = description;
          this.setData({ todoList: this.data.todoList })
          this.hideUpdateConfirm();
          return
        }
      }
    } else {
      wx.showToast({
        title: '你还没有输入内容！',
        icon: "none"
      })
    }
  }
})