(()=>{"use strict";var e={3912:(e,t,r)=>{r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);function i(e,t,r,o,n,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var s=r(4260);const u=(0,s.Z)(l,[["render",i]]),c=u;var d=r(5195),f=r(7083),p=r(9582);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(658)]).then(r.bind(r,1658)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(755)]).then(r.bind(r,6755))},{path:"/login",component:()=>Promise.all([r.e(736),r.e(976)]).then(r.bind(r,1976))},{path:"/register",component:()=>Promise.all([r.e(736),r.e(533)]).then(r.bind(r,2533))},{path:"/dashboard",component:()=>Promise.all([r.e(736),r.e(26)]).then(r.bind(r,9026))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(293)]).then(r.bind(r,7293))}],b=h,v=(0,f.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t}));async function m(e,t){const o="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,5195)),i="function"===typeof v?await v({store:o}):v;o.$router=i;const l=e(c);return l.use(n.Z,t),{app:l,store:o,storeKey:a,router:i}}var g=r(6417);const y={config:{},plugins:{Notify:g.Z}},w="";async function k({app:e,router:t,store:r,storeKey:o},n){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},l=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:l,urlPath:s,publicPath:w})}catch(u){return u&&u.url?void l(u.url):void console.error("[Quasar] boot error:",u)}!0!==a&&(e.use(t),e.use(r,o),e.mount("#q-app"))}m(o.ri,y).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1768))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,r)}))))},1768:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,api:()=>i});var o=r(7083),n=r(52),a=r.n(n);const i=a().create({baseURL:"http://localhost:3000",validateStatus:e=>e>=200&&e<=300||400===e||401===e}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},5195:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,storeKey:()=>l,useStore:()=>u});var o=r(7083),n=r(3617);const a={state:()=>({authenticated:!1,token:""}),mutations:{loggedIn(e,t){e.authenticated=t.authenticated,e.token=t.token},loggedOut(e){e.authenticated=!1,e.token=""}},getters:{getLoggedIn(e){return e.authenticated},getToken(e){return e.token}}},i=a,l=Symbol("vuex-key"),s=(0,o.h)((function(){const e=(0,n.MT)({modules:{UserModule:i},strict:!1});return e}));function u(){return(0,n.oR)(l)}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{26:"ebf20acb",293:"0df6750f",533:"fb4c0423",658:"5f77734d",755:"38b5f46e",976:"4a8c489d"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"3bec629a",736:"fde95fe4"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="web:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var f=(t,r)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,u=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var c=s(r)}for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=self["webpackChunkweb"]=self["webpackChunkweb"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(3912)));o=r.O(o)})();