(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"f2015005","chunk-2d2102cc":"590cf52a","chunk-2d215c15":"c331e2e3","chunk-8ccc685e":"64d839b0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-8ccc685e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"31d6cfe0","chunk-2d2102cc":"31d6cfe0","chunk-2d215c15":"31d6cfe0","chunk-8ccc685e":"509f455c"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("bc3a"),a=n.n(o),c=n("a7fe"),s=n.n(c),i=n("2b27"),u=n.n(i),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},f=[],d=n("2877"),p={},h=Object(d["a"])(p,l,f,!1,null,null,null),m=h.exports,g=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container mb-2 mt-2 default-layout"},[n("b-row",{staticClass:"text-center justify-content-end head"},[n("b-list-group",{attrs:{horizontal:"md"}},[n("b-list-group-item",[n("font-awesome-icon",{staticClass:"phone mr-2",attrs:{icon:"phone-alt",size:"lg"}}),e._v("8977425125")],1),n("b-list-group-item",[n("font-awesome-icon",{staticClass:"map mr-2",attrs:{icon:"map-marker",size:"lg"}}),e._v("marikavalasa")],1),n("b-list-group-item",[n("a",{attrs:{href:"/auth"}},[n("font-awesome-icon",{staticClass:"user mr-2",attrs:{icon:"user",size:"lg"}}),e._v("Login")],1)])],1)],1),n("b-row",{staticClass:"row1",attrs:{cols:"2"}},[n("b-img",{attrs:{src:"https://entrackr.com/wp-content/uploads/2018/01/bigbasket-image-1-1200x600.jpg"}}),n("b-form-input",{staticClass:"search-input",attrs:{size:"lg",placeholder:"Search for Products...",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Search for Products...'",type:"search","aria-label":"Text input with checkbox"}}),n("b-row",{staticClass:"basket",attrs:{cols:"1"}},[n("b-col",[n("font-awesome-icon",{staticClass:"basket-icon mt-4 ml-3",attrs:{icon:"shopping-basket"}})],1),n("span",{staticClass:"mt-2 ml-5"},[e._v("0 items")])],1)],1),n("b-row",{staticClass:"border"},[n("b-button",{staticClass:"font-weight-bold",attrs:{size:"lg"}},[e._v("SHOP BY CATEGORY"),n("font-awesome-icon",{staticClass:"ml-5",attrs:{icon:"angle-down"}})],1),n("span",{staticClass:"p-3 offers"},[n("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"tag"}}),e._v("OFFERS")],1)],1)],1),n("router-view")],1)},v=[],w=(n("fcba"),{}),k=Object(d["a"])(w,b,v,!1,null,null,null),y=k.exports;r["default"].use(g["a"]);var C=[{path:"/",redirect:"/home"},{path:"/",component:y,children:[{path:"/home",name:"Dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-2d2102cc").then(n.bind(null,"b789"))}},{path:"/basket",name:"Basket",component:function(){return n.e("chunk-2d215c15").then(n.bind(null,"c00b"))}}]},{path:"/auth",name:"Auth",component:function(){return n.e("chunk-8ccc685e").then(n.bind(null,"2fef"))}}],_=new g["a"]({mode:"history",base:"/",routes:C}),O=_,j=n("2f62");r["default"].use(j["a"]);var A=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=n("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4989"),n("f9e3"),n("2dd8"),n("6672");var S=n("f524"),x=n.n(S),E=n("9c9e"),T=n.n(E),B=(n("caad"),n("ac1f"),n("2532"),n("5319"),n("863e")),$=n.n(B),N=$.a.apiBaseUrl.includes("localhost")?$.a.apiBaseUrl.replace("localhost",location.host):$.a.apiBaseUrl,U={host_url:N.replace("api/",""),login:N+"login",logout:N+"logout",sign_up:N+"users/create",get_categories:N+"categories"},z=U,H=n("1157"),L=n.n(H),D=n("5f5b"),F=n("ecee"),M=n("c074"),q=n("ad3d");F["c"].add(M["j"],M["c"],M["l"],M["i"],M["d"],M["a"],M["b"],M["e"],M["n"],M["o"],M["k"],M["m"],M["h"],M["f"],M["p"],M["g"],M["q"]),r["default"].component("font-awesome-icon",q["a"]),r["default"].use(s.a,a.a,u.a),r["default"].use(D["a"]);var I=L.a;window.$=I,r["default"].config.productionTip=!1,r["default"].prototype.$api=z,r["default"].prototype.$apiHeaders=x.a.headers,r["default"].mixin({methods:T.a}),new r["default"]({router:O,store:A,render:function(e){return e(m)}}).$mount("#app")},6672:function(e,t,n){},"863e":function(e,t){e.exports={apiBaseUrl:"http://192.168.43.158:9999/api/"}},"89f0":function(e,t,n){},"9c9e":function(e,t,n){e.exports={getUserData:function(){if(window.$cookies.isKey("user"))return window.$cookies.get("user")},getAuthHeaders:function(){var e=this.getUserData();return void 0!=e&&(this.$apiHeaders["headers"]["Authorization"]="Bearer "+e.access_token),this.$apiHeaders}}},f524:function(e,t){e.exports={headers:{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, PATCH, PUT, DELETE, OPTIONS",Accept:"application/json"}},server_error:"Something went wrong. Please contact administrator."}},fcba:function(e,t,n){"use strict";var r=n("89f0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.91741165.js.map