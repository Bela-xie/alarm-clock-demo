import http from "../../utils/http"

Page({
  data: {
    me:"",
    tab: 'tomato',
    todos: {
      '星期一 todos': [
        { 'id': 1, 'created_at': '12:34', 'description': '完成了语文作业' },
        { 'id': 2, 'created_at': '14:24', 'description': '完成了语文作业' },
        { 'id': 3, 'created_at': '11:09', 'description': '完成了语文作业' }
      ],
      '星期二 todos': [
        { 'id': 4, 'created_at': '12:34', 'description': '完成了语文作业' },
        { 'id': 5, 'created_at': '14:24', 'description': '完成了语文作业' },
      ],
      '星期三 todos': [
        { 'id': 6, 'created_at': '12:34', 'description': '完成了语文作业' },
        { 'id': 7, 'created_at': '14:24', 'description': '完成了语文作业' },
      ],
    },
    tomatoes: {
      '星期一 tomatoes': [
        { 'id': 1, 'created_at': '12:34', 'description': '完成了语文作业' },
        { 'id': 2, 'created_at': '14:24', 'description': '完成了语文作业' },
        { 'id': 3, 'created_at': '11:09', 'description': '完成了语文作业' }
      ],
      '星期二 tomatoes': [
        { 'id': 4, 'created_at': '12:34', 'description': '完成了语文作业' },
        { 'id': 5, 'created_at': '14:24', 'description': '完成了语文作业' },
      ],
      '星期三 tomatoes': [
        { 'id': 6, 'created_at': '12:34', 'description': '完成了语文作业' },
        { 'id': 7, 'created_at': '14:24', 'description': '完成了语文作业' },
      ],
    },
  },
  onShow: function () {
    this.fetchTodos();
    this.fetchTomatoes();
    this.setData({
      me:wx.getStorageSync('me')
    })
  },
  changeTab(e) {
    const name = e.currentTarget.dataset.name;
    this.setData({
      tab: name
    })
  },
  fetchTodos() {
    //  http.get("/todos",{ is_group: "yes" }).then(response=>{
    //    this.setData({todos:response.data.resources})
    //  })
  },
  fetchTomatoes() {
    // http.get("/tomatoes",{ is_group: "yes" }).then(response=>{
    //   this.setData({tomatoes:response.data.resources})
    // })
  }
})