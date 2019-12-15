//videoList 
//"https://p1.haohuimai1.com/642db9f6f2704611b322f938c6326367/app.mp4"
//"https://static1.haohuimai1.com/screenshot/642db9f6f2704611b322f938c6326367/00001.jpg"

//"https://p1.haohuimai1.com/c9b44cadb9934a3c8ea268944ab5da66/app.mp4"
//"https://static1.haohuimai1.com/screenshot/c9b44cadb9934a3c8ea268944ab5da66/00001.jpg"

//"https://static1.haohuimai1.com/screenshot/7ee40bd48035477c8e7eaa4c74327c57/00001.jpg"
//"https://p1.haohuimai1.com/7ee40bd48035477c8e7eaa4c74327c57/app.mp4"

//"https://static1.haohuimai1.com/screenshot/3878de13c6e24ab2ad86b2563e78d950/00001.jpg"
//"https://p1.haohuimai1.com/3878de13c6e24ab2ad86b2563e78d950/app.mp4"

//"https://static1.haohuimai1.com/screenshot/f2645da15d924ca18b127489e7e1f034/00001.jpg"
//"https://p1.haohuimai1.com/f2645da15d924ca18b127489e7e1f034/app.mp4"
//获取应用实例
const app = getApp()

Page({
  data: {
    hidden: true,
    clientX: -800,
    clientY: 0,
    current: {},
    playList: [{
      image: 'https://static1.haohuimai1.com/screenshot/642db9f6f2704611b322f938c6326367/00001.jpg',
      video:"https://p1.haohuimai1.com/642db9f6f2704611b322f938c6326367/app.mp4"
    },{
        image: "https://static1.haohuimai1.com/screenshot/c9b44cadb9934a3c8ea268944ab5da66/00001.jpg",
        video: "https://p1.haohuimai1.com/c9b44cadb9934a3c8ea268944ab5da66/app.mp4"},
      {
        image: "https://static1.haohuimai1.com/screenshot/7ee40bd48035477c8e7eaa4c74327c57/00001.jpg",
        video: "https://p1.haohuimai1.com/7ee40bd48035477c8e7eaa4c74327c57/app.mp4"},
      {
        image: "https://static1.haohuimai1.com/screenshot/3878de13c6e24ab2ad86b2563e78d950/00001.jpg",
        video: "https://p1.haohuimai1.com/3878de13c6e24ab2ad86b2563e78d950/app.mp4"},
      {
        image: "https://static1.haohuimai1.com/screenshot/f2645da15d924ca18b127489e7e1f034/00001.jpg",
        video: "https://p1.haohuimai1.com/f2645da15d924ca18b127489e7e1f034/app.mp4"}]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onClickHandler: function(e) {
    console.log(e.currentTarget.dataset.id)
    let { dataset,offsetLeft,offsetTop } = e.currentTarget;

    let {playList} = this.data;
    this.setData({
      hidden: false,
      clientX: offsetLeft,
      clientY: offsetTop,
      current: playList[dataset.id]
    })
  },
  onLoad: function () {
    // 
  },
})
