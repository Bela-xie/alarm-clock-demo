import http from "../../utils/http"

Page({
  data: {
    me: "",
    tab: 'tomato',
    todos: {
      '星期一': [
        { 'id': 1, 'created_at': '12:34', 'description': '完成语文作业' },
        { 'id': 2, 'created_at': '14:24', 'description': '完成数学作业' },
        { 'id': 3, 'created_at': '11:09', 'description': '完成英语作业' }
      ],
      '星期二': [
        { 'id': 4, 'created_at': '12:34', 'description': '写一篇作文' },
        { 'id': 5, 'created_at': '14:24', 'description': '背英语单词' },
      ],
      '星期三': [
        { 'id': 6, 'created_at': '12:34', 'description': '打扫卫生' },
        { 'id': 7, 'created_at': '14:24', 'description': '洗衣服' },
      ],
    },
    tomatoes: {
      '星期一': [
        { 'id': 1, 'created_at': '12:34', 'description': '完成了语文作业' },
        { 'id': 2, 'created_at': '14:24', 'description': '完成了数学作业' },
        { 'id': 3, 'created_at': '11:09', 'description': '完成了英语作业' }
      ],
      '星期二': [
        { 'id': 4, 'created_at': '12:34', 'description': '完成了背单词' },
      ],
      '星期三': [
        { 'id': 6, 'created_at': '12:34', 'description': '完成了打扫卫生' },
      ],
    },
  },
  onShow: function () {
    this.fetchTodos();
    this.fetchTomatoes();
    this.setData({
      me: wx.getStorageSync('me')
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