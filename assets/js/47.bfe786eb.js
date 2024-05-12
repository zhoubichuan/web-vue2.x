(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{788:function(t,s,v){"use strict";v.r(s);var _=v(2),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-功能模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-功能模块"}},[t._v("#")]),t._v(" Vue 功能模块")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),s("p",[t._v("这里主要通过一个常见的数据管理系统应用为例，介绍 一个"),s("code",[t._v("Vue")]),t._v(" 项目开发过程中常见的功能场景，以及一些注意事项")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("功能类别")]),t._v(" "),s("th",[t._v("案例模块")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("一.权限认证")]),t._v(" "),s("td",[t._v("登陆/注册、权限管理")])]),t._v(" "),s("tr",[s("td",[t._v("二.模板页面")]),t._v(" "),s("td",[t._v("搜索模板、操作模板、表格模板、表单模板、富文本")])]),t._v(" "),s("tr",[s("td",[t._v("三.文件处理")]),t._v(" "),s("td",[t._v("导入导出、上传下载、文件预览")])]),t._v(" "),s("tr",[s("td",[t._v("四.性能优化")]),t._v(" "),s("td",[t._v("骨架屏、虚拟滚动、pwa、懒加载、ssr")])]),t._v(" "),s("tr",[s("td",[t._v("五.补充功能")]),t._v(" "),s("td",[t._v("页面监控、国际化、页面测试、消息推送 、拖拽功能")])]),t._v(" "),s("tr",[s("td",[t._v("六.其他功能")]),t._v(" "),s("td",[t._v("地图相关、音频视频、微前端 、页面截图、移动端")])])])]),t._v(" "),s("h2",{attrs:{id:"_1-微前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-微前端"}},[t._v("#")]),t._v(" 1.微前端")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("ul",[s("li",[t._v("1.项目太大，不好维护，需要拆分成小项目维护，可以使用微前端思路拆分大项目为小项目")]),t._v(" "),s("li",[t._v("2.项目太老，新开发的项目使用其他框架或者最新框架来开发，可以使用微前端将新项目嵌入到老项目某个模块中")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：子应用与子应用、基座之间 ui 框架、相关工具不能复用，ui 框架和相关工具之间版本不同，难以维护")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_2-消息推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-消息推送"}},[t._v("#")]),t._v(" 2.消息推送")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("前端主要有三种方式实现信息实时更新："),s("strong",[t._v("页面实时更新内容比较多时才使用"),s("code",[t._v("WebSocket")])])]),t._v(" "),s("ul",[s("li",[t._v("1.轮询：通过定时器不断请求接口")]),t._v(" "),s("li",[t._v("2.长轮询：后端只有更新消息才会返回")]),t._v(" "),s("li",[t._v("3.WebSocket")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：后端推送不稳定，经常会断开")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("使用心跳的方式，间断与后端保存联系\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_3-登录模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-登录模块"}},[t._v("#")]),t._v(" 3.登录模块")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("几种常见的认证方式：")]),t._v(" "),s("ul",[s("li",[t._v("OAuth 认证")]),t._v(" "),s("li",[t._v("Cookie-Session 认证")]),t._v(" "),s("li",[t._v("基于 JWT 的 Token 认证")]),t._v(" "),s("li",[t._v("无密码的认证")])])]),t._v(" "),s("p",[t._v("这里主要讲解 基于 JWT 的 Token 认证")]),t._v(" "),s("ul",[s("li",[t._v("扫描二维码登录")]),t._v(" "),s("li",[t._v("sso 单点登录")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：密码是明文传输给后端的")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("密码要加密后传输给后端，要使用 https 协议传输密码，后端同步加密处理\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_4-监控模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-监控模块"}},[t._v("#")]),t._v(" 4.监控模块")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("主要的集中监控方式：")]),t._v(" "),s("ul",[s("li",[t._v("页面埋点")]),t._v(" "),s("li",[t._v("性能监控")]),t._v(" "),s("li",[t._v("异常监控")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_5-测试模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试模块"}},[t._v("#")]),t._v(" 5.测试模块")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("单元测试、端到端测试")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_6-权限模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-权限模块"}},[t._v("#")]),t._v(" 6.权限模块")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("路由权限、菜单权限")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_7-国际化模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-国际化模块"}},[t._v("#")]),t._v(" 7.国际化模块")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("使用配置文件的方式，使用同一套界面，根据语言的不同加载对应的配置文件")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_8-文件预览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-文件预览"}},[t._v("#")]),t._v(" 8.文件预览")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("常见的文件预览：")]),t._v(" "),s("ul",[s("li",[t._v("pdf 在线预览")]),t._v(" "),s("li",[t._v("excel 在线预览")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_9-骨架屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-骨架屏"}},[t._v("#")]),t._v(" 9.骨架屏")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("代码优化、组件优化、打包优化")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_10-服务端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-服务端渲染"}},[t._v("#")]),t._v(" 10.服务端渲染")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("nuxt.js")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_11-pwa-功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-pwa-功能"}},[t._v("#")]),t._v(" 11.PWA 功能")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("提供独立于浏览器的缓存，并且可以接收服务器的推送。如：在没有网络，或者网络状态较差的时候，仍可访问缓存在本地的数据")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_12-上传下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-上传下载"}},[t._v("#")]),t._v(" 12.上传下载")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("下载相关")])]),t._v(" "),s("ul",[s("li",[t._v("断点续传")]),t._v(" "),s("li",[t._v("大文件下载")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_13-视频播放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-视频播放"}},[t._v("#")]),t._v(" 13.视频播放")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("vue 开发移动端项目需要注意的事项")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("video 播放器封装与使用")])]),t._v(" "),s("li",[s("p",[t._v("海康威视摄像头使用\n"),s("strong",[t._v("可能遇到的问题：")])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_14-地图相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-地图相关"}},[t._v("#")]),t._v(" 14.地图相关")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("主要是常见的厂商地图 sdk 使用：")]),t._v(" "),s("ul",[s("li",[t._v("高德地图")]),t._v(" "),s("li",[t._v("百度地图")]),t._v(" "),s("li",[t._v("谷歌地图")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_15-富文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-富文本"}},[t._v("#")]),t._v(" 15.富文本")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("主流的富文本编辑器：")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_16-导入导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-导入导出"}},[t._v("#")]),t._v(" 16.导入导出")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("video 视频开发：")])]),t._v(" "),s("ul",[s("li",[t._v("excel 文件")]),t._v(" "),s("li",[t._v("pdf 文件")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_17-页面截图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-页面截图"}},[t._v("#")]),t._v(" 17.页面截图")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("ul",[s("li",[t._v("懒加载图片列表")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("h2",{attrs:{id:"_18-懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18-懒加载"}},[t._v("#")]),t._v(" 18.懒加载")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("ul",[s("li",[t._v("懒加载图片列表")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_19-拖拽功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19-拖拽功能"}},[t._v("#")]),t._v(" 19.拖拽功能")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("ul",[s("li",[t._v("拖拽库")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_20-移动端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-移动端"}},[t._v("#")]),t._v(" 20.移动端")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("vue 开发移动端项目需要注意的事项")]),t._v(" "),s("ul",[s("li",[t._v("vue 项目适配")]),t._v(" "),s("li",[t._v("打包成 app")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_21-虚拟滚动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_21-虚拟滚动"}},[t._v("#")]),t._v(" 21.虚拟滚动")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("ul",[s("li",[t._v("表格虚拟滚动")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：xxx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("xxx\n")])])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);