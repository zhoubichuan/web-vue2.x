(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{693:function(e,t,u){"use strict";u.r(t);var a={name:"myInput",model:{props:"inputValue",event:"updateValue"},props:{inputValue:{type:String,default:""},placeholder:{type:String,default:"请输入"}},data(){return{value:this.inputValue}},watch:{inputValue(e){this.value=e}},methods:{update(e){this.value=e,this.$emit("updateValue",this.value)}}},l=u(3),p=Object(l.a)(a,(function(){return(0,this._self._c)("el-input",{attrs:{clearable:"",value:this.inputValue,placeholder:this.placeholder},on:{input:this.update}})}),[],!1,null,null,null);t.default=p.exports}}]);