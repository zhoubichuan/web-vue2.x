(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{674:function(s,t,a){s.exports=a.p+"assets/img/1.94b4a46e.png"},675:function(s,t,a){s.exports=a.p+"assets/img/2.1b08c410.png"},790:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"源码概览-cli2-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码概览-cli2-x"}},[s._v("#")]),s._v(" 源码概览(cli2.x)")]),s._v(" "),t("h2",{attrs:{id:"_1-vue-命令的逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-命令的逻辑"}},[s._v("#")]),s._v(" 1.vue 命令的逻辑")]),s._v(" "),t("p",[s._v("在 vue-cli 项目的 package.json 文件中定义了命令对应的文件位置，具体如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/vue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue-init"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/vue-init"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue-list"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/vue-list"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("vue 命令对应的 bin/vue 文件的源码比较简单，这里就直接贴出来具体如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\nconst program "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'commander'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nprogram\n  .version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../package'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  .usage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<command> [options]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  .command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'init'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'generate a new project from a template'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  .command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'list'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'list available official templates'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  .command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prototype a new project'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  .command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'create'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(for v3 warning only)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nprogram.parse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process.argv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("commander 是 Node.js 命令行的解决方案（即 Node.js 下实现自定义命令），点此查看 commander 中文文档。")]),s._v(" "),t("p",[s._v("这里简单介绍下常用相关方法：")]),s._v(" "),t("ul",[t("li",[s._v("version：定义版本")]),s._v(" "),t("li",[s._v("usage：帮助信息输出")]),s._v(" "),t("li",[s._v("command：使用独立的可执行文件作为子命令")]),s._v(" "),t("li",[s._v("option：定义选项")]),s._v(" "),t("li",[s._v("parse：解析参数用于匹配对应选项或命令")])]),s._v(" "),t("p",[s._v("当在控制台中输入 vue 命令，会输出相关的命令和帮助信息，如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(674),alt:""}})]),s._v(" "),t("p",[s._v("这里定义了子命令 init 等， Commander 将会尝试在 vue 脚本的目录中搜索 program-command 形式的可执行文件例如 init 会查找 vue-init 等。")]),s._v(" "),t("h2",{attrs:{id:"_2-vue-init-命令的逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-init-命令的逻辑"}},[s._v("#")]),s._v(" 2.vue init 命令的逻辑")]),s._v(" "),t("p",[s._v("vue-cli 脚手架工具中可以使用 vue init 或 vue-init 命令来初始化项目，命令最终都对应 bin/vue-init 文件。\nvue-init 文件的逻辑流程主要如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(675),alt:""}})]),s._v(" "),t("p",[s._v("vue-init 文件逻辑中有几个重要的依赖包：")]),s._v(" "),t("ul",[t("li",[s._v("commander：命令行处理")]),s._v(" "),t("li",[s._v("download-git-repo：Node.js 下 git 仓库下载处理")]),s._v(" "),t("li",[s._v("inquirer：Node 下用户与命令行交互处理")]),s._v(" "),t("li",[s._v("ora：终端加载优化处理")])]),s._v(" "),t("p",[s._v("vue init 语法是：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("vue init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("project-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("vue 官方提供了不同的模板（对应着不同的构建工具等），这些模块仓库都位于 vuejs-templates 中，简单概括对应了两类：webpack 模板和 browserify 模板。\n当然个人也可以自己的模块仓库，通过自有模块来初始化项目，语法如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("vue init username/repo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("project-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当 webpack 模板来初始化项目，其执行逻辑简要概括如下：")]),s._v(" "),t("ul",[t("li",[s._v("判断当前目录是否存在相同名称的目录，存在需要与用户交互处理")]),s._v(" "),t("li",[s._v("使用 download-git-repo 来下载对应的模块仓库，会在用户目录下创建.vue-templates 目录，该目录下存在 webpack 模板仓库")]),s._v(" "),t("li",[s._v("编译 webpack 模板仓库生成最终的文件")])]),s._v(" "),t("h2",{attrs:{id:"_3-run-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-run-函数"}},[s._v("#")]),s._v(" 3.run 函数")]),s._v(" "),t("p",[s._v("该函数的逻辑是检查、下载和编译模板的入口，实际上其逻辑主要就分成 3 部分：")]),s._v(" "),t("h3",{attrs:{id:"_3-1-检查部分的逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-检查部分的逻辑"}},[s._v("#")]),s._v(" 3.1 检查部分的逻辑")]),s._v(" "),t("p",[s._v("实际上检查部分的逻辑主要是：")]),s._v(" "),t("ul",[t("li",[s._v("创建是否是本地模板")])]),s._v(" "),t("p",[s._v("vue 脚手架支持依据本地模板来初始化项目，源码中判断本地模块是通过路径来进行的，即脚手架对于以./、/或 window 环境下[a-zA-Z]:的开头的路径都看成是使用本地模板")]),s._v(" "),t("ul",[t("li",[s._v("对于非本地模板检查相关信息\n"),t("ul",[t("li",[s._v("首先会检查对应 node 版本和 vue-cli 是否存在新版本")]),s._v(" "),t("li",[s._v("其次会检查模板路径是否存在 / 来判断是否使用官方模板还是非官方模板")])])])]),s._v(" "),t("h3",{attrs:{id:"_3-2-下载部分的逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-下载部分的逻辑"}},[s._v("#")]),s._v(" 3.2 下载部分的逻辑")]),s._v(" "),t("p",[s._v("该部分就是调用 download-git-repo 库提供的方法下载对应的 git 模板仓库，其源码具体如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模板下载优化")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" spinner "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ora")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"downloading template"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nspinner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本地模板存在就删除掉重新下载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exists")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("download")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下载成功后逻辑")]),s._v("\n  spinner"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    logger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fatal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Failed to download repo "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" template "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("trim")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"_4-模板编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-模板编译"}},[s._v("#")]),s._v(" 4.模板编译")]),s._v(" "),t("p",[s._v("模板编译是在模板成功下载过后立即执行的，调用的是自定义模块 generate 下的 generate 方法，该模块负责模板编译的具体逻辑。generate 模块依赖几个重要的第三方 NPM 包，具体如下：")]),s._v(" "),t("ul",[t("li",[s._v("handlebars：轻量级语义化模板（点此查看 handlebars 中文文档）")]),s._v(" "),t("li",[s._v("consolidate：模板引擎整合库，支持目前比较流行的模板库")]),s._v(" "),t("li",[s._v("metalsmith：静态站点生成器")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("首先明确下为什么需要 handlebars 包？")]),s._v(" "),t("p",[s._v("因为官方 vuejs-templates 仓库提供的模板是使用 handlebars 来编写的")])]),s._v(" "),t("p",[s._v("接下来具体看看 generate 模块的具体逻辑，其逻辑主要有如下几点：")]),s._v(" "),t("h3",{attrs:{id:"_4-1-获取-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-获取-options"}},[s._v("#")]),s._v(" 4.1 获取 options")]),s._v(" "),t("p",[s._v("实际上获取 options 的逻辑比较简单，直接贴源码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模板位置的实际路径")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" opts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMetadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认项目名")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValidateName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认用户名")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" author "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getGitUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"author"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" opts\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("该函数主要的逻辑是 getMetadata，实际上这是脚手架模板仓库的必要设置，即模板仓库必须存在 meta.json 或 meta.js 的。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMetadata")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" js "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取对应文件内容")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" opts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这里以官方模板 vuejs-templates/webpack 为例，这里看看其 meta.js 的设置，该文件主要包含下面几项：")]),s._v(" "),t("ul",[t("li",[s._v("metalsmith 对象")]),s._v(" "),t("li",[s._v("helpers 对象")]),s._v(" "),t("li",[s._v("prompts 对象")]),s._v(" "),t("li",[s._v("filters 对象")]),s._v(" "),t("li",[s._v("complete 函数")])]),s._v(" "),t("p",[s._v("这里 meta.js 的配置信息是用在后续的逻辑中，这里暂时先不展开，后续逻辑在针对性的说明。")]),s._v(" "),t("h3",{attrs:{id:"_4-2-helpers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-helpers"}},[s._v("#")]),s._v(" 4.2 helpers")]),s._v(" "),t("p",[s._v("Handlebars 是一种简单的模板语言，它使用模板和输入对象来生成 HTML 或其他文本格式。\n在 generate 模块中关于 Handlebars 的逻辑都是调用 Handlebars.registerHelper 函数。")]),s._v(" "),t("p",[s._v("Handlebars.registerHelper 是提供用户自定义助手的功能\ngenerate 模板中的定义的助手代码有：")]),s._v(" "),t("ul",[t("li",[s._v("if_eq")]),s._v(" "),t("li",[s._v("unless_eq")]),s._v(" "),t("li",[s._v("if_or")]),s._v(" "),t("li",[s._v("template_version")])]),s._v(" "),t("p",[s._v("为模板逻辑服务，具体可以看 Handlebars 的使用和官方模板的具体使用，这里具体就不展开的")]),s._v(" "),t("h3",{attrs:{id:"_4-3-metalsmith"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-metalsmith"}},[s._v("#")]),s._v(" 4.3 metalsmith")]),s._v(" "),t("p",[s._v("使用第三方库 metalsmith 读取模板仓库中 template 目录，并对模板的 meta 数据做相关处理。\nMetalsmith 是静态站点生成器，其工作原理简单概括只是三个简单步骤：")]),s._v(" "),t("p",[s._v("读取源目录中的所有文件\n调用一系列处理文件的插件\n将结果写入目标目录\nMetalsmith 核心逻辑只有读取源目录文件以及输出处理后的文件，所有对于文件的处理都是通过创建来完成的。\n从 Metalsmith 官网对于其工作原理的说明，可以看出与构建工具 Glup 等相似。\nvue 脚手架使用 Metalsmith 原因：")]),s._v(" "),t("p",[s._v("Metalsmith 可以自定义插件来实现一些流程性工作\n实际上脚手架中对于 Metalsmith 的使用逻辑就是自定义流程，具体流程如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// metalsmith.use就是使用插件")]),s._v("\nmetalsmith\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("askQuestions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prompts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("filterFiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("renderTemplateFiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skipInterpolation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_4-4-askquestions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-askquestions"}},[s._v("#")]),s._v(" 4.4 askQuestions")]),s._v(" "),t("p",[s._v("vue init 命令执行后首先会下载模板之后会有一系列与用户交互的处理，askQuestions 插件就是使用 inquirer 库处理与用户交互的，处理信息定义在 meta.js 中，即获取 options 中的 prompts 对象。")]),s._v(" "),t("p",[s._v("具体的交互信息内容简单如下：")]),s._v(" "),t("p",[s._v("Project name：项目名\nProject description：项目描述\nAuthor：作者\nVue build\nInstall vue-router\nESLint 相关\n测试相关\n自动安装依赖方式选择")]),s._v(" "),t("h3",{attrs:{id:"_4-5-filterfiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-filterfiles"}},[s._v("#")]),s._v(" 4.5 filterFiles")]),s._v(" "),t("p",[s._v("过滤相关文件，主要是 eslint 相关、测试相关，这需要根据之前与用户交互的结果来看是否删除对应文件或目录（官方模板默认是包含所有的文件的）。")]),s._v(" "),t("h3",{attrs:{id:"_4-6-rendertemplatefiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-rendertemplatefiles"}},[s._v("#")]),s._v(" 4.6 renderTemplateFiles")]),s._v(" "),t("p",[s._v("该自定义插件逻辑就是处理所有模块文件，该插件使用 consolidate 库来调用对应的模板引擎来处理每一个文件，vue 官方模板是采用 Handlebars 模板语言的，所以也是采用对应 Handlebars 的模板引擎来处理的。")]),s._v(" "),t("p",[s._v("输出处理后的模板文件相关逻辑")]),s._v(" "),t("p",[s._v("具体源码如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("metalsmith\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// start from template root instead of `./src` which is Metalsmith's default for `source`")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("destination")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" files")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("done")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("complete "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"function"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" helpers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" chalk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" logger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" files "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("complete")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" helpers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("logMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("completeMessage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("这部分的逻辑就是定义输出目录的路径和具体的编译逻辑，这里涉及到 metalsmith 的使用，这里就不展开。\n需要注意 complete 函数的逻辑，在模板文件编译输出后会执行 complete 函数的逻辑，实际上该函数逻辑主要就是自动按照依赖，complete 函数主要逻辑如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("complete")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" chalk "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装依赖")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("autoInstall"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("installDependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cwd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("autoInstall"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" green"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" chalk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("vue init 命令的执行逻辑至此完成。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("总结")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("vue init webpack vue-demo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("基于上面命令，这里总结下 vue 脚手架初始化项目的整体流程：")]),s._v(" "),t("ul",[t("li",[s._v("基于第三方库 commander 建立脚手架提供的自定义命令")]),s._v(" "),t("li",[s._v("判断模板类型是本地模板、官方模板还是自定义模板，做相关处理，这里使用官方模板")]),s._v(" "),t("li",[s._v("使用第三方库 download-git-repo 下载官方模板 vuejs-templates 的 webpack 模块仓库")]),s._v(" "),t("li",[s._v("开启对 webpack 模板仓库的编译，输出编译后的模板到指定目录\n"),t("ul",[t("li",[s._v("首先读取 webpack 模板仓库的 meta.js 或 meta.json 文件，获取到对应的 options 对象")]),s._v(" "),t("li",[s._v("然后使用 metalsmith 整合流程：使用 ininquirer 处理与用户交互、过滤文件、使用 consolidate 调用模板引擎编译所有模板文件")]),s._v(" "),t("li",[s._v("metalsmith 输出处理后的文件到指定目录下")])])])]),s._v(" "),t("p",[s._v("通过对 vue-cli 脚手架的分析，知道了目前在 Node.js 环境下如何实现脚手架，同时也对 vue 官方模板等有了较为细致的了解，这对个人定制 vue 项目模板是非常有帮助的。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);