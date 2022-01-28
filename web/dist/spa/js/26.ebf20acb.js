"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[26],{9026:(e,i,l)=>{l.r(i),l.d(i,{default:()=>Q});var o=l(3673),n=l(8880),t=l(2323);const a={key:0},r={class:"fileContainer"},s=["onClick"],d={class:"row justify-end"},u={key:0,style:{"margin-top":"-1.5em"}},c=["src"],p=["src"];function f(e,i,l,f,h,m){const w=(0,o.up)("q-icon"),v=(0,o.up)("q-btn"),y=(0,o.up)("q-card-section"),g=(0,o.up)("q-card"),F=(0,o.up)("q-dialog"),k=(0,o.up)("q-uploader"),q=(0,o.up)("q-page"),D=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(q,{class:"row justify-evenly q-mt-xl",onDrop:(0,n.iM)(e.uploadFile,["prevent"]),onDragover:i[1]||(i[1]=(0,n.iM)((()=>{}),["prevent"]))},{default:(0,o.w5)((()=>[0===e.files.length?((0,o.wg)(),(0,o.iD)("h5",a,"Upload files by drag-and-drop")):(0,o.kq)("",!0),(0,o._)("div",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.files,(i=>((0,o.wg)(),(0,o.iD)("div",{class:"file",key:i._id,onClick:l=>e.openFile(i._id,i.fileIcon)},[(0,o.Wm)(w,{size:"64px",name:i.fileIcon},null,8,["name"]),(0,o._)("p",null,(0,t.zw)(i.originalName),1)],8,s)))),128))]),(0,o.Wm)(F,{modelValue:e.show,"onUpdate:modelValue":i[0]||(i[0]=i=>e.show=i)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.wy)((0,o.Wm)(v,{icon:"close",flat:"",round:"",dense:""},null,512),[[D]])]),"description"===e.fileType?((0,o.wg)(),(0,o.iD)("pre",u,(0,t.zw)(e.currentFile),1)):(0,o.kq)("",!0),"image"===e.fileType?((0,o.wg)(),(0,o.iD)("img",{key:1,class:"media",src:e.currentFile},null,8,c)):(0,o.kq)("",!0),"video_file"===e.fileType?((0,o.wg)(),(0,o.iD)("video",{key:2,class:"media",src:e.currentFile,autoplay:""},null,8,p)):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(k,{url:"http://localhost:3000/files/upload",label:"Uploader",class:"uploader",multiple:"","hide-upload-btn":"","auto-upload":"",flat:"","field-name":"file",ref:"uploader",onUploaded:e.removeUploaded,onFailed:e.notifyFailed,headers:[{name:"authorization",value:`Bearer ${e.token}`}],style:{"min-width":"300px","max-width":"450px",width:"100%"}},null,8,["onUploaded","onFailed","headers"])])),_:1},8,["onDrop"])}var h=l(3768),m=l(1959),w=l(1768),v=function(e,i,l,o){function n(e){return e instanceof l?e:new l((function(i){i(e)}))}return new(l||(l=Promise))((function(l,t){function a(e){try{s(o.next(e))}catch(i){t(i)}}function r(e){try{s(o["throw"](e))}catch(i){t(i)}}function s(e){e.done?l(e.value):n(e.value).then(a,r)}s((o=o.apply(e,i||[])).next())}))};const y=(0,o.aZ)({name:"Dashboard",data:()=>({uploader:(0,m.iH)(h.Z),files:[],currentFile:{},fileType:"",show:!1}),mounted:function(){return v(this,void 0,void 0,(function*(){yield this.refreshFiles()}))},methods:{uploadFile(e){var i;const l=null===(i=e.dataTransfer)||void 0===i?void 0:i.files;l&&this.$refs.uploader.addFiles(l)},removeUploaded(){return v(this,void 0,void 0,(function*(){this.$refs.uploader.removeUploadedFiles(),yield this.refreshFiles()}))},notifyFailed(e){this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:e.xhr.response})},refreshFiles:function(){return v(this,void 0,void 0,(function*(){const e=yield w.api.get("/files");e&&(this.files=e.data)}))},openFile:function(e,i){return v(this,void 0,void 0,(function*(){if("description"!==i&&(this.currentFile=`http://localhost:3000/files/${e}`),"description"===i){const i=yield w.api.get(`/files/${e}`);if(!i)return;this.currentFile=i.data}this.fileType=i,this.show=!0}))}},computed:{token(){const e=this.$store.getters.getToken;return e}}});var g=l(4260),F=l(4379),k=l(4554),q=l(2134),D=l(151),Z=l(5589),_=l(2452),b=l(677),x=l(7518),C=l.n(x);const U=(0,g.Z)(y,[["render",f]]),Q=U;C()(y,"components",{QPage:F.Z,QIcon:k.Z,QDialog:q.Z,QCard:D.Z,QCardSection:Z.Z,QBtn:_.Z,QUploader:h.Z}),C()(y,"directives",{ClosePopup:b.Z})}}]);