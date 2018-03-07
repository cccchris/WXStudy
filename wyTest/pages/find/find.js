// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testData: {
      data: [{
        "title": "标题111",
        "content":"内容1内容1内容1内容",
      },
      {
        "title": "标题222",
        "content": "内容2内容2内容2内容",
      },
      {
        "title": "标题333",
        "content": "内容3内容3内容3内容",
      },
      {
        "title": "标题444",
        "content": "内容4内容5内容6内容",
      }]
    },
  },

  moreMsg: function () {
    // 跳转详情
    wx.navigateTo({
      url: '../homelist/homelist',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})