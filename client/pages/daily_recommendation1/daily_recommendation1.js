// pages/index/home_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgclick:0,
    changeclick:0
  },
  chooseThis:function () {
    var that = this;
    var imgclick = that.data.imgclick === 0 ? 1 : 0;
    that.setData({
      imgclick: imgclick
    });
  },
  changethis:function(){
    var that=this;
    if(that.data.changeclick===0){
      var changeclick=1;
    }
    else if (that.data.changeclick === 1) {
      var changeclick = 2;
    }
    else if (that.data.changeclick === 2) {
      var changeclick = 0;
    };
    that.setData({
      changeclick: changeclick
    });
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