(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-international-international"],{"48fc":function(t,e,i){"use strict";i.r(e);var n=i("6000"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},5231:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;e.baseUrl="http://8.140.245.208:7071"},6e3:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("c13d"),a={data:function(){return{shujv:[{biaoti:"标题",id:1,tupian:"https://p3-sign.toutiaoimg.com/tos-cn-i-axegupay5k/10ee889a1d05413291698e68f6fe908d~noop.image?_iz=58558&from=article.pc_detail&lk3s=953192f4&x-expires=1716548593&x-signature=WTKKsZOQ5NeItm82ae%2BEZd2ucPs%3D"}]}},onLoad:function(){var t=this;(0,n.guoji)().then((function(e){console.log(e[1].data),t.shujv=e[1].data,console.log(t.shujv)}))},methods:{handleToxiangqing:function(t){uni.navigateTo({url:"/pages/xiangqing/xiangqing?id=".concat(t)}),console.log(t)}}};e.default=a},c13d:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.deleteid=function(t){return uni.request({url:"".concat(n.baseUrl,"/delete?id=").concat(t),method:"DELETE"})},e.guoji=function(){return uni.request({url:"".concat(n.baseUrl,"/selectByClassification?classification=国际")})},e.post=function(t,e,i,a,r,c){return uni.request({url:"".concat(n.baseUrl,"/post"),method:"POST",header:{"content-type":"application/json"},data:JSON.stringify({classname:c,classification:t,particulars:e,url1:i,url2:a,url3:r})})},e.put=function(t,e,i,a,r,c,u){return uni.request({url:"".concat(n.baseUrl,"/put"),method:"POST",header:{"content-type":"application/json"},data:JSON.stringify({id:t,classname:u,classification:e,particulars:i,url1:a,url2:r,url3:c})})},e.selectByPage=function(t){return uni.request({url:"".concat(n.baseUrl,"/selectByPage?current=").concat(t,"&size=10")})},e.tiyv=function(){return uni.request({url:"".concat(n.baseUrl,"/selectByClassification?classification=体育")})},e.xiangqing=function(t){return uni.request({url:"".concat(n.baseUrl,"/selectId?id=").concat(t)})},e.yvle=function(){return uni.request({url:"".concat(n.baseUrl,"/selectByClassification?classification=娱乐")})},e.zhuang=function(){return uni.request({url:"".concat(n.baseUrl,"/selectcad")})},i("c223"),i("d4b5");var n=i("5231")},c336:function(t,e,i){"use strict";i.r(e);var n=i("c418"),a=i("48fc");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var c=i("828b"),u=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"084b851c",null,!1,n["a"],void 0);e["default"]=u.exports},c418:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("meta",{attrs:{name:"referrer",content:"no-referrer"}}),t._l(t.shujv,(function(e,n){return i("v-uni-view",{key:n},[i("v-uni-view",{staticStyle:{margin:"10rpx","background-color":"#DCDCDC","border-radius":"30rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleToxiangqing(e.id)}}},[i("v-uni-view",{staticStyle:{margin:"10rpx"}},[i("h3",[t._v(t._s(e.classname))])]),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-around","align-items":"center",margin:"10rpx",width:"calc(100vw - 40rpx)",height:"20vh"}},[i("v-uni-view",{staticStyle:{flex:"1",height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[i("v-uni-image",{staticStyle:{width:"calc(100% - 20rpx)","max-height":"calc(100% - 20rpx)",padding:"10rpx"},attrs:{src:e.url1,mode:"widthFix"}})],1),i("v-uni-view",{staticStyle:{flex:"1",height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[i("v-uni-image",{staticStyle:{width:"calc(100% - 20rpx)","max-height":"calc(100% - 20rpx)",padding:"10rpx"},attrs:{src:e.url2,mode:"widthFix"}})],1),i("v-uni-view",{staticStyle:{flex:"1",height:"100%",display:"flex","justify-content":"center","align-items":"center"}},[i("v-uni-image",{staticStyle:{width:"calc(100% - 20rpx)","max-height":"calc(100% - 20rpx)",padding:"10rpx"},attrs:{src:e.url3,mode:"widthFix"}})],1)],1),i("v-uni-view",{staticStyle:{margin:"10rpx",color:"white",display:"flex","flex-direction":"row-reverse"}},[t._v(t._s(e.updatetime))])],1)],1)}))],2)},a=[]}}]);