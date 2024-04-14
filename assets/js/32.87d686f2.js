(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{688:function(t,s,v){t.exports=v.p+"assets/img/1.1.cdfb2349.png"},812:function(t,s,v){"use strict";v.r(s);var a=v(2),_=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-的工程化流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-的工程化流程"}},[t._v("#")]),t._v(" Vue 的工程化流程")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),s("p",[t._v("前端项目虽然在不同的项目流程有些差异，但是也有很多相同的部分，可以总结一下这些相同的部分，这里简要地列举了一些常见的开发流程分门别类列举了一些可能遇到的问题")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("-")]),t._v(" "),s("th",[t._v("需求评审（产品确定做什么）")]),t._v(" "),s("th",[t._v("静态页面（配合 UI 完成设计界面）")]),t._v(" "),s("th",[t._v("接口联调（配合后端完成逻辑交互）")]),t._v(" "),s("th",[t._v("部署上线（发布到网上）")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("前端开发")]),t._v(" "),s("td",[t._v("1.开发工具 "),s("br"),t._v(" 2.创建项目 "),s("br"),t._v(" 3.Vue CLI 配置 "),s("br"),t._v(" 4.环境配置 "),s("br"),t._v(" 5.UI 框架")]),t._v(" "),s("td",[t._v("6.页面布局 "),s("br"),t._v(" 7.单页应用 "),s("br"),t._v(" 8.多页应用 "),s("br"),t._v(" 9.模板解析 "),s("br"),t._v(" 10.编码技巧")]),t._v(" "),s("td",[t._v("11.Mock 数据"),s("br"),t._v("12.代码优化")]),t._v(" "),s("td",[t._v("13.构建部署")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:v(688),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_1-开发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-开发工具"}},[t._v("#")]),t._v(" 1.开发工具")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("早期写前端项目，只需要在编辑器里写 html+css+javascript 的前端代码，svn 管控代码，chrome 调试代码，一些库或插件以 cdn 的形式引入到项目中；随着前端工程化的普及，前端开发以 node 为基础，通过脚手架、npm 包、相关命令，创建和开发项目")])]),t._v(" "),s("ul",[s("li",[t._v("工具清单，按先后顺序安装")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事项")]),t._v(" "),s("th",[t._v("版本")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("其他")]),t._v(" "),s("th",[t._v("是否必须")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1."),s("a",{attrs:{href:"http://nodejs.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装 node.js"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v(">= 8.9")]),t._v(" "),s("td",[t._v("开发环境支持")]),t._v(" "),s("td",[t._v("前端工程化依赖 node 环境")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("node -v 查看版本")])]),t._v(" "),s("tr",[s("td",[t._v("2."),s("a",{attrs:{href:"https://git-scm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装 git"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("代码管理")]),t._v(" "),s("td",[t._v("gitlens 插件使用")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("3."),s("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装 VSCode"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("编辑器")]),t._v(" "),s("td",[t._v("vscode 常见配置、vscode 常用插件")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("4."),s("a",{attrs:{href:""}},[t._v("安装 谷歌浏览器")])]),t._v(" "),s("td",[t._v("最近两年")]),t._v(" "),s("td",[t._v("调试代码")]),t._v(" "),s("td",[t._v("chrome 代码调试")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("5.升级 npm")]),t._v(" "),s("td",[t._v("最新")]),t._v(" "),s("td",[t._v("包管理器")]),t._v(" "),s("td",[t._v("npm 常用命令")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("npm install -g npm@latest")])])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：项目运行一段时间老是提示内存泄露")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  查看是否是64位系统安装了32位的node\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题二：本地代码和线上代码一致，但是某个环境有些语法用不了")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  查看是否是依赖没有固定导致的，如：vue没有固定版本，导致有些新的语法在老版本中不支持，每次下载依赖时线上的版本和本地的版本不一致；也有可能是不同的npm源下载的包不同，建议统一地址\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题三：同样的代码与配置，甚至将项目完整拷贝到电脑上还是运行有问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  电脑环境不一致造成的，查看是否是node版本不一致导致的\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_2-创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建项目"}},[t._v("#")]),t._v(" 2.创建项目")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("早期前端创建项目，只需要新建一个文件夹，然后新建 html 将 css、 js 引入，后来有了工程化开发方式，通过脚手架及相关命令，拉取仓库模板，组合相关配置，安装相关依赖，可以很轻松初始化配置标准项目")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 脚手架介绍"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("全局安装 vue 脚手架")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vue/cli "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("使用 命令/图形界面 创建 vue 应用")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("vue ui\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：性能优化，需要分析打包后文件大小，确定哪些文件过大")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  使用【vue ui】启动，脚手架图形界面，有以图的形式分析包的大小的功能\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_3-vue-cli-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-cli-配置"}},[t._v("#")]),t._v(" 3.Vue CLI 配置")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("内置的 webpack 无法满足开发需求，例如需要对图片做一些配置，需要对打包做一些配置")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：本地开发环境请求服务器接口跨域的问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  利用webpack中proxy配置本地代理解决跨域问题\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_4-环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-环境配置"}},[t._v("#")]),t._v(" 4.环境配置")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("ul",[s("li",[t._v("开发环境（开发阶段，本地开发版本，一般会使用一些调试工具或额外的辅助功能）")]),t._v(" "),s("li",[t._v("测试环境（测试阶段，上线前版本，除了一些 bug 的修复，基本不会和上线版本有很大差别）")]),t._v(" "),s("li",[t._v("生产环境（上线阶段，正式对外发布的版本，一般会进行优化，关掉错误报告)")])])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：需要区分不通环境，添加不通链接，有些开发以不同域名判断("),s("code",[t._v("location.host.includes('prod') && (相关逻辑)")]),t._v(")，当域名有变化时，相关逻辑失效")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  配置相关环境的打包方式，不同环境与打包部署相关联，不与域名相关联\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题二：测试环境希望方便调试代码，生产环境希望去掉多余的代码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  配置相关环境，不同环境打包时会走不同的逻辑\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_5-ui-框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-ui-框架"}},[t._v("#")]),t._v(" 5.UI 框架")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("前端代码开发，会重复开发某些功能（如日历组件），把这些重复的功能封装起来，统一管理，使用时直接调用会大大提高开发效率，这些公共的组件放在一起形成了我们现在看到的 ui 框架")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：打包文件中有大量未使用过的 UI 组件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  配置按需加载，页面使用组件时单个引入使用\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题 二：如何优雅的只在当前页面中覆盖 ui 库中组件的样式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" 在框架稳定的时候可以考虑配置一套全局风格，或者单独封装每个组件，内部修改本组件样式\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题 三：打包之后文件、图片、背景图资源不存在或者路径错误的问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  注意`publicPath`参数配置\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_6-页面布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-页面布局"}},[t._v("#")]),t._v(" 6.页面布局")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("将页面中组件归类，页面清晰")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题 一：一个文件的代码很多，既存在应用数据的读取和处理，又存在数据的显示，而且每个组件还不能复用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" 数据的请求和数据的展示都在一个组件进行，要实现组件的复用，我们就需要将展示组件和容器组件分离出来\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_7-单页应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-单页应用"}},[t._v("#")]),t._v(" 7.单页应用")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("前端工程化项目后，默认搭建的项目就是单页应用")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题 一：项目比较大，加载比较慢")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  由于是单页应用，如果页面不做处理，打包时会将所有页面打包成一个文件，浏览器加载这个文件就比较大，耗费时间长，可以考虑按需加载页面，打包时就不会将整个页面打包进去\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_8-多页应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-多页应用"}},[t._v("#")]),t._v(" 8.多页应用")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("有时候需要在项目中配置多入口，满足不同的业务需求，如 pc 端扫码展示 h5 页面")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题 一：打包后的入口文件加载比较慢，经过分析发现是入口文件体积比较大，需要优化入口文件体积")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  可以配置多入口来分流文件\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_9-模板解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-模板解析"}},[t._v("#")]),t._v(" 9.模板解析")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("有些页面布局及结构固定，只是内容文字不同，这里可以将文字内容部分抽离为变量，和一般页面不同的是，这里的变量是配置的变量，不是从后端请求的数据，当打包项目后，这个页面内容就固定了。")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题 一：html 页面有些变量在不同的环境会有不同的值，这些变量是在 webpack 中不同环境中配置好的，打包后会从不同环境中取值")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  可以在html页面配置一个通用模板来解析这些变量\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_10-编码技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-编码技巧"}},[t._v("#")]),t._v(" 10.编码技巧")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("不同的人写的代码风格不一致，给其他开发人员造成了理解困难")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：在一个项目中会发现同一个功能的工具类方法，会有很多种写法，逐渐的项目里就累积了很多重复的工具类方法（防抖、节流、深拷贝...），其他开发接手需要从头看这些方法的用法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" 使用 lodash 函数库替代自己写的方法、日期相关处理推荐使用moment.js\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_11-mock-数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-mock-数据"}},[t._v("#")]),t._v(" 11.Mock 数据")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("后端接口不阻塞前端开发，前端可以根据接口文档，使用相关工具或配置实现接口功能，待后端完成接口，切换地址即可替换真实接口")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：某些需求比较抽象复杂，前端界面比较统一（toB 项目），前端静态页面很快就写好了，需要等后端好久才能提供接口，然后边联调边进行逻辑部分开发，延长了开发周期")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" 前端写好静态页面后，可以在后端不提供接口的情况下，用接口文档自己mock数据，完成后面的逻辑部分开发，待后端完成接口后前端与之联调，加快开发进度\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_12-性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-性能优化"}},[t._v("#")]),t._v(" 12.性能优化")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("例如：由于 vue 默认是单页应用，如果不做优化，会随着项目的复杂，打包入口文件会越来越大，影响页面性能；本地构建比较慢，影响开发效率")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：开启 gzip 压缩代码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("  这时前端需要在本地模拟线上发布环境，配置启动 nginx，访问本地的打包文件，验证通过后进行发布\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_13-代码管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-代码管理"}},[t._v("#")]),t._v(" 13.代码管理")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("早期网页部署直接是通过 ftp 将本地的 html 代码传输到后端服务器，然后在页面就可以打开网页，随着前端工程越来越复杂，需要提前准备的工作也越来越多（安全问题、权限问题、回滚操作、错误日志...）")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：在某个重要的环境，紧急修改了某个问题，由于某种原因需要直接发布到这个环境，跳过了前面的环境验证，结果运维发布了页面出现了问题，访问不了")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("这时前端需要在本地模拟线上发布环境，配置启动 nginx，访问本地的打包文件，验证通过后进行发布\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题二：每一次发版后都需要清除浏览器缓存才能看到页面最新的效果")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("部署时，生成项目版本号存于项目某个文件中，当页面打开时一直请求这个文件，隔一段时间与浏览器本地存储的版本号做对比，有差异就更新页面\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题三：项目很大构建慢，影响开发")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("某些路由页面先注释掉，开发完成后改回来\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),s("p",[t._v("通过以上对 vue 项目开发的流程，我们可以大概了解到实际开发中所进行的环节，以及相关环节下需要做的事情，对全面理解 vue 的前端开发做好铺垫。")])]),t._v(" "),s("h2",{attrs:{id:"_14-项目部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-项目部署"}},[t._v("#")]),t._v(" 14.项目部署")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),s("p",[t._v("早期网页部署直接是通过 ftp 将本地的 html 代码传输到后端服务器，然后在页面就可以打开网页，随着前端工程越来越复杂，需要提前准备的工作也越来越多（安全问题、权限问题、回滚操作、错误日志...）")])]),t._v(" "),s("p",[s("strong",[t._v("可能遇到的问题：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("🏷️ 问题一：在某个重要的环境，紧急修改了某个问题，由于某种原因需要直接发布到这个环境，跳过了前面的环境验证，结果运维发布了页面出现了问题，访问不了")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("这时前端需要在本地模拟线上发布环境，配置启动 nginx，访问本地的打包文件，验证通过后进行发布\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题二：每一次发版后都需要清除浏览器缓存才能看到页面最新的效果")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("部署时，生成项目版本号存于项目某个文件中，当页面打开时一直请求这个文件，隔一段时间与浏览器本地存储的版本号做对比，有差异就更新页面\n")])])])]),t._v(" "),s("li",[s("p",[t._v("🏷️ 问题三：项目很大构建慢，影响开发")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("某些路由页面先注释掉，开发完成后改回来\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),s("p",[t._v("通过以上对 vue 项目开发的流程，我们可以大概了解到实际开发中所进行的环节，以及相关环节下需要做的事情，对全面理解 vue 的前端开发做好铺垫。")])])])}),[],!1,null,null,null);s.default=_.exports}}]);