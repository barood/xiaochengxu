// pages/grade/grade.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "code": "见习", "text": '0-10' },
      { "code": "正式", "text": '11-30' },
      { "code": "知名", "text": '31-60' },
      { "code": "职业", "text": '61-100' },
      { "code": "著名", "text": '101-150' },
      { "code": "元老", "text": '151+' }
    ],
    inputValue: '', //用于显示输入语句  
    searchinput: '',
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