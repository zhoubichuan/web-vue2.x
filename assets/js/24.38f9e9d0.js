(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{673:function(t,e,s){t.exports=s.p+"assets/img/Vuex.83b3d553.png"},784:function(t,e,s){"use strict";s.r(e);var a=s(3),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"源码概览-vuex3-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码概览-vuex3-x"}},[t._v("#")]),t._v(" 源码概览(Vuex3.x)")]),t._v(" "),e("p",[e("img",{attrs:{src:s(673),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_1-实例化-vuex-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-实例化-vuex-store"}},[t._v("#")]),t._v(" 1.实例化 Vuex.store")]),t._v(" "),e("p",[t._v("将用户的配置文件通过 new Vuex.store(options) 得到一个对象，以 store 值作为 vue 初始化实例的对象的一个值传入")]),t._v(" "),e("h2",{attrs:{id:"_2-加载-vuex-插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-加载-vuex-插件"}},[t._v("#")]),t._v(" 2.加载 Vuex 插件")]),t._v(" "),e("p",[t._v("Vuex 是以插件的方式通过 Vue.use 加载的，当 Vue.use(Vuex)时,内部会调用 Vuex 这个类上面的 install 方法，通过 Vue.mixin 方法混入到 beforeCreate 这个生命周期中 this.store=this.$option.store")]),t._v(" "),e("h2",{attrs:{id:"_3-当加载组件的时候"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-当加载组件的时候"}},[t._v("#")]),t._v(" 3.当加载组件的时候")]),t._v(" "),e("p",[t._v("执行生命周期函数会将之前实例化 Vuex.store 挂载到 this.store 上，用户可以使用 this.store.state、this.store.mutation")]),t._v(" "),e("h3",{attrs:{id:"_3-1-mapstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-mapstate"}},[t._v("#")]),t._v(" 3.1 mapState")]),t._v(" "),e("p",[t._v("用户将 mapState 在 computed 中使用会返回一个对象，这个对象就是之前在 store 中写的配置，里面有各种 state，在 compute 中会转换成一个函数，返回值的 state 指向 store 中的 state，key 就是自己想要拿到的 key")])])}),[],!1,null,null,null);e.default=r.exports}}]);