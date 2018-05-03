Page({

  /**
   * 页面的初始数据
   */
  data: {
    casArray: ['励志', '情感', '家书', '呓语', '歌词', '台词', '书籍', '诗词'],
    casIndex: 0,
    write_sentence_value: "分享你的好句子（最多300字）",
    author_source_value: "作者/出处",
    hiddenToast: true 
  },
  thisfocus:function(){
    this.setData({
      write_sentence_value:""
    })
  },
  thatfocus: function () {
    this.setData({
      author_source_value: ""
    })
  },
  PickerChange: function (e) {
    this.setData({
      casIndex: e.detail.value
    })
  },
  listenerButton: function () {
    this.setData({
      hiddenToast: !this.data.hiddenToast
    })
  },
  toastHidden: function () {
    this.setData({
      hiddenToast: true
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