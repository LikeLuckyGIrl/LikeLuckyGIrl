(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xiangqing-xiangqing"],{"24c0":function(t,e,n){"use strict";n.r(e);var i=n("8ba4"),a=n("3976");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var r=n("828b"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"6332823c",null,!1,i["a"],void 0);e["default"]=c.exports},3976:function(t,e,n){"use strict";n.r(e);var i=n("c5d3"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},5231:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;e.baseUrl="http://8.140.245.208:7071"},"8ba4":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{margin:"20rpx"}},[n("h3",[t._v(t._s(t.shujv[0].classname))])]),n("v-uni-view",{staticStyle:{margin:"20rpx"}},[n("v-uni-text",[t._v(t._s(t.shujv[0].particulars))])],1),n("v-uni-view",{staticStyle:{margin:"20rpx"}},[n("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:t.shujv[0].url1,mode:"widthFix"}})],1),n("v-uni-view",{staticStyle:{margin:"20rpx"}},[n("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:t.shujv[0].url2,mode:"widthFix"}})],1),n("v-uni-view",{staticStyle:{margin:"20rpx"}},[n("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:t.shujv[0].url3,mode:"widthFix"}})],1)],1)},a=[]},c13d:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.deleteid=function(t){return uni.request({url:"".concat(i.baseUrl,"/delete?id=").concat(t),method:"DELETE"})},e.guoji=function(){return uni.request({url:"".concat(i.baseUrl,"/selectByClassification?classification=国际")})},e.post=function(t,e,n,a,u,r){return uni.request({url:"".concat(i.baseUrl,"/post"),method:"POST",header:{"content-type":"application/json"},data:JSON.stringify({classname:r,classification:t,particulars:e,url1:n,url2:a,url3:u})})},e.put=function(t,e,n,a,u,r,c){return uni.request({url:"".concat(i.baseUrl,"/put"),method:"POST",header:{"content-type":"application/json"},data:JSON.stringify({id:t,classname:c,classification:e,particulars:n,url1:a,url2:u,url3:r})})},e.selectByPage=function(t){return uni.request({url:"".concat(i.baseUrl,"/selectByPage?current=").concat(t,"&size=10")})},e.tiyv=function(){return uni.request({url:"".concat(i.baseUrl,"/selectByClassification?classification=体育")})},e.xiangqing=function(t){return uni.request({url:"".concat(i.baseUrl,"/selectId?id=").concat(t)})},e.yvle=function(){return uni.request({url:"".concat(i.baseUrl,"/selectByClassification?classification=娱乐")})},e.zhuang=function(){return uni.request({url:"".concat(i.baseUrl,"/selectcad")})},n("c223"),n("d4b5");var i=n("5231")},c5d3:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("c13d"),a={data:function(){return{shujv:[]}},onLoad:function(t){var e=this;console.log(t),(0,i.xiangqing)(t.id).then((function(t){console.log(t[1].data),e.shujv=t[1].data,console.log(e.shujv[0])}))},methods:{}};e.default=a}}]);