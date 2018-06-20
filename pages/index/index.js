var WxParse = require('../wxParse/wxParse.js');
var form = require('form.js');

//index.js
//获取应用实例
const app = getApp()

Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var formDate = e.detail.value
    var score = parseInt(formDate.age) +
      parseInt(formDate.cert) +
      (formDate.loc && 30) +
      parseInt(formDate.nz_cert) +
      (formDate.nz_ss && 10) +
      (formDate.nz_workexperience && 10) +
      (formDate.offer && 50) +
      parseInt(formDate.partner_cert) +
      (formDate.partner_offer && 20) +
      (formDate.salary && 20) +
      parseInt(formDate.ss) +
      parseInt(formDate.work_all);
    var result, status;
    if (isNaN(score)){
      status = '请完整回答所有问题'
    }else{
      if (score >= 160) {
        status = "恭喜你！"
        result = "从目前自测的结果来看，你已经满足新西兰技术移民条件，请大胆地申请吧。如有疑问，请随时私信、留言或发送邮件至：\nhuanghuangnz@aliyun.com\n我们将尽快回复您的问题。"
      } else if (score >= 140 && score < 160) {
        status = "很遗憾..."
        result = "从目前自测的结果来看，你与新西兰技术移民分数还有一小段距离。你可考虑配偶加分或紧缺行业等项目加分是否准确。如有疑问，请随时私信、留言或发送邮件至：\nhuanghuangnz@aliyun.com\n我们将尽快回复您的问题。"
      } else if (score < 140) {
        status = "很遗憾..."
        result = "从目前自测的结果来看，你尚未达到新西兰技术移民要求。你可考虑创业移民，投资移民，留学，银蕨，打工度假签证等方式移民新西兰。如有疑问，请随时私信、留言(扫码关注公众号)或发送邮件至：\nhuanghuangnz@aliyun.com\n我们将尽快回复您的问题。"
      }
    } 
    this.setData({ score: score})
    this.setData({ result: score && result })
    this.setData({ status: status })
    this.setData({ scoreReady: !isNaN(score) })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    WxParse.wxParse('rating', 'html', form.form, this, 5);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
