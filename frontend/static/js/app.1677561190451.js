(function(){"use strict";var t={8352:function(t,e,a){var s,n,r=a(2083),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],l={components:{}},c=l,d=a(1001),u=(0,d.Z)(c,o,i,!1,null,null,null),h=u.exports,m=a(3625),p=function(){var t=this,e=t._self._c;return e("el-container",{attrs:{id:"main"}},[e("el-header",{staticClass:"frame header"},[e("img",{attrs:{alt:"Vue logo",src:a(9109),id:"logo"}}),e("p",{attrs:{id:"logoText"}},[t._v("请问你想来点漫画吗？")])]),e("el-container",{staticClass:"mainPart"},[e("el-menu",{staticClass:"frame aside",attrs:{"default-active":this.$route.fullPath,collapse:t.isCollapse,router:!0,"background-color":"#1e1f26","text-color":"#fff","active-text-color":"#ffd04b"}},[e("el-menu-item",{attrs:{index:"/mainpage/searchpage"}},[e("i",{staticClass:"bi-search menuIcons"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("搜索添加漫画")])]),e("el-menu-item",{attrs:{index:"/mainpage/mangaku"}},[e("i",{staticClass:"bi-tools menuIcons"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("现有漫画")])])],1),e("el-main",{staticClass:"frame main"},[t.isRouterAlive?e("router-view",{on:{reload:t.reload}}):t._e()],1)],1),e("Announcement",{staticClass:"announcement"}),e("v-pull-button",{class:t.isCollapse?"mainPagePullButton hide":"mainPagePullButton",attrs:{isHide:t.isCollapse},on:{switchCollapse:t.handleCollapse}})],1)},g=[],f=function(){var t=this,e=t._self._c;return e("div",{class:t.isHide?"hide":"",attrs:{id:"pullButton"},on:{click:t.changeHide}},[t._m(0)])},v=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"pullButtonBackground"}},[e("i",{staticClass:"bi-arrow-bar-left"})])}],_={name:"V-pullButton",props:["isHide"],data(){return{}},methods:{changeHide(){this.$emit("switchCollapse")}}},b=_,y=(0,d.Z)(b,f,v,!1,null,"48006cba",null),C=y.exports,w={name:"MainPage",data(){return{isRouterAlive:!0,isCollapse:!1}},provide(){return{reload:this.reload}},methods:{reload(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))},handleCollapse(){this.isCollapse=!this.isCollapse}},components:{VPullButton:C},created(){this.$socket.open(),console.log("链接启动！")}},k=w,x=(0,d.Z)(k,p,g,!1,null,"b5aefcf6",null),$=x.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"searchStage"},[e("div",{staticClass:"searchArea"},[e("div",{staticClass:"globalSearch"},[e("el-input",{staticClass:"searchBox",attrs:{size:"mini",id:"searchBoxID","prefix-icon":"el-icon-search",placeholder:"在本页面搜索相关文件"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendOut.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("transition",{attrs:{name:"password-error"}},[e("el-alert",{directives:[{name:"show",rawName:"v-show",value:t.emptyError,expression:"emptyError"}],staticClass:"errorMsgs",attrs:{title:"搜索内容不能为空！",type:"error","show-icon":"",closable:!1,id:"emptyErrorMessage"}})],1)],1),e("Vbotton",{staticClass:"searchButton",attrs:{nameForButton:"搜索",clickMethod:t.sendOut,isIcon:!0,iconClass:"bi-search"}})],1),e("overlay-scrollbars",{staticClass:"listArea",attrs:{options:t.defaultStyle}},[t.isSearch?e("DocumentList",{staticClass:"cardPage",attrs:{searchList:t.searchList},on:{reload:t.reloadPass}}):t._e()],1)],1)},P=[],D=(a(7658),{name:"checkAndPOP",methods:{errorDealing(t,e,a){if(document.getElementById(a)){let t=document.getElementById(a);this.shakingAnime(t)}let s=document.getElementById(e);s.style.backgroundColor="#fbc4c4"},recover(t,e){let a=document.getElementById(e);a.style.backgroundColor="transparent"},shakingAnime(t){t.animate([{transform:"translateX(0)"},{transform:"translateX(-3%)"},{transform:"translateX(0%)"},{transform:"translateX(3%)"},{transform:"translateX(0%)"},{transform:"translateX(-3%)"},{transform:"translateX(0%)"},{transform:"translateX(3%)"},{transform:"translateX(0%)"},{transform:"translateX(-3%)"},{transform:"translateX(0%)"},{transform:"translateX(3%)"},{transform:"translateX(0%)"},{transform:"translateX(-3%)"},{transform:"translateX(0%)"},{transform:"translateX(3%)"},{transform:"translateX(0%)"},{transform:"translateX(-3%)"},{transform:"translateX(0%)"},{transform:"translateX(3%)"},{transform:"translateX(0%)"}],{duration:300})}}}),O=D,B=(0,d.Z)(O,s,n,!1,null,"5435f0fc",null),E=B.exports,X=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"ccc"}},[e("ul",{staticClass:"document"},t._l(t.searchList,(function(a){return e("li",{key:a.manga_id},[e("keep-alive",[e("Document",{attrs:{item:a},on:{reload:t.reload}})],1)],1)})),0),t.isNoContent?e("div",{staticClass:"nothing"},[t._m(0)]):t._e()])},T=[function(){var t=this,e=t._self._c;return e("p",[t._v("这里还没有东西哦！"),e("br"),t._v("Nothing Here!")])}],I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"stage"},[e("div",{staticClass:"documentBlock",on:{click:t.handleClick}},[e("img",{staticStyle:{width:"240px",height:"320px","object-fit":"contain"},attrs:{draggable:"false",id:"s"+t.item.manga_id,src:t.imgSrc}}),e("p",{staticClass:"showName"},[t._v(t._s(t.item.manga_name))]),e("p",{staticClass:"showName"},[t._v(t._s(t.item.artist_name))]),e("p",{staticClass:"showName"},[t._v("最新话名 ："+t._s(t.item.newest_epi))])])])},L=[],M={name:"Document",props:["item"],data(){return{imgSrc:""}},created(){this.imgSrc="data:image/png;base64,"+this.item.thumbnail},mounted(){},methods:{handleClick(){let t=`<p>漫画ID为 ： <strong>${this.item.manga_id}</strong></p><p>漫画作者为 ： <strong>${this.item.artist_name}</strong></p><p>该漫画最新话名为 ： <strong>${this.item.newest_epi}</strong></p><p>请检查上方信息是否正确，最好在漫画狗网站内核实一下</p><p><strong>并且添加的并非库中已有的漫画！</strong></p>`;this.$confirm(t,`你选择的是 ${this.item.manga_name}`,{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((()=>{this.$http.post("dogemanga/confirm",{manga_object:this.item}).then((t=>{let e=t.data;200===e.code?(this.$notify({title:`${this.item.manga_name} 已入库`,message:`成功选择 ${this.item.manga_name}。 ID为 ${this.item.manga_id}。已开始在后台下载！`,type:"success",position:"bottom-right"}),this.$emit("reload")):410===e.code&&this.$notify({title:`${this.item.manga_name} 已存在在库中`,message:"请仔细检查后再添加！",type:"error",position:"bottom-right"})})).catch((t=>{this.isSearch=!1,"/"!==this.$route.fullPath&&this.$router.replace("/"),this.$message.error("漫画搜索出现未知问题，请联系Van！ Code:"+t.message)}))})).catch((()=>{}))},reload(){this.$emit("reload")},changeHeight(t){let e=t.target,a=e.parentNode;435!==e.clientHeight&&(e.style.gridTemplateRows="1fr 1fr 1fr 1fr",a.style.transition="all 0s"),a.style.height=e.clientHeight+"px"},recover(t){let e=t.target,a=e.parentNode;a.style.height="100%",e.style.gridTemplateRows="1fr 1fr",a.style.transition="all 0.3s ease-in-out"}},components:{},computed:{},watch:{}},Z=M,N=(0,d.Z)(Z,I,L,!1,null,"45c3a3ac",null),A=N.exports,H={name:"DocumentList",props:["searchList"],data(){return{isNoContent:!1}},components:{Document:A},methods:{reload(){this.$emit("reload")}}},j=H,R=(0,d.Z)(j,X,T,!1,null,"03a73dec",null),V=R.exports,F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-container",attrs:{id:"button-container"}},[e("button",{class:t.vStyle,attrs:{id:"upload"},on:{click:t.handleClick}},[t.isIcon?e("i",{class:t.iconClass}):t._e(),t._v(" "+t._s(t.nameForButton)+" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.beGreen,expression:"beGreen"}],staticClass:"bottomSide"}),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.beGreen,expression:"!beGreen"}],staticClass:"bottomSide working"})])])},G=[],q={name:"V-botton",props:["nameForButton","clickMethod","isWorking","isIcon","iconClass","vStyle"],data(){return{beGreen:!0}},methods:{handleClick(){return this.clickMethod()}},watch:{isWorking:{handler(t){this.beGreen=t}}}},U=q,z=(0,d.Z)(U,F,G,!1,null,"5948ac98",null),W=z.exports,K={name:"SearchPage",mixins:[E],data(){return{search:"",searchList:[],emptyError:!1,isSearch:!1,defaultStyle:{className:"os-theme-thick-light",overflowBehavior:{x:"hidden"},scrollbars:{autoHide:"leave"}}}},methods:{reloadPass(){this.$emit("reload")},sendOut(t){if(null===this.search||""===this.search)this.emptyError=!0,this.errorDealing(t,"searchBoxID","emptyErrorMessage");else{const e=this.$loading({lock:!0,text:"正在加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.emptyError=!1,this.recover(t,"searchBoxID","emptyErrorMessage"),this.isSearch=!1,this.searchList=[],this.$http.get("dogemanga/search",{params:{manga_name:this.search}}).then((a=>{let s=a.data;if(200===s.code){for(let t of s.data)this.searchList.push(t);this.isSearch=!0,e.close()}else 456===s.code?(e.close(),this.isSearch=!1,this.emptyError=!0,this.errorDealing(t,"searchBoxID","emptyErrorMessage"),console.log("试图绕过前端检查被发现了 杂种")):457===s.code&&(e.close(),this.$notify({title:"搜索出现问题",message:`${this.search} 无法在对应网站源搜索到结果`,type:"success",position:"bottom-right"}),console.log("试图绕过前端检查被发现了 杂种"))})).catch((t=>{e.close(),this.isSearch=!1,"/"!==this.$route.fullPath&&this.$router.replace("/"),this.$message.error("漫画搜索出现未知问题，请联系Van！ Code:"+t.message)}))}}},components:{DocumentList:V,Vbotton:W}},Y=K,J=(0,d.Z)(Y,S,P,!1,null,"02461f1a",null),Q=J.exports,tt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"uploadTable"}},[e("el-table",{staticClass:"grandTable",attrs:{data:t.tableData.filter((e=>!t.search||e.name.toLowerCase().includes(t.search.toLowerCase()))),height:"100%",stripe:!0,"row-style":{background:"transparent",color:"white"},"empty-text":"暂时还没有漫画哦"}},[e("el-table-column",{attrs:{label:"封面",prop:"manga_name",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{width:"100px",height:"133px","object-fit":"contain"},attrs:{id:"s"+t.row.manga_id,src:"data:image/png;base64,"+t.row.thumbnail}})]}}])}),e("el-table-column",{attrs:{label:"漫画名",prop:"manga_name",width:"240"}}),e("el-table-column",{attrs:{label:"漫画ID",prop:"manga_id",width:"90"}}),e("el-table-column",{attrs:{label:"作者",prop:"artist_name",width:"110"}}),e("el-table-column",{attrs:{label:"当前库中最新话名称",prop:"last_epi_name",width:"240"}}),e("el-table-column",{attrs:{label:"初次抓取？",prop:"completed",width:"90"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(!0===a.row.completed?"已完成":1===a.row.completed?"正在抓取...":"排队中..."))])]}}])}),e("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"header",fn:function(a){return[e("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini","prefix-icon":"el-icon-search",placeholder:"输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}}])})],1)],1)},et=[],at={name:"MangaKu",data(){return{search:"",tableData:[]}},async mounted(){const t=this.$loading({lock:!0,text:"正在加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});OverlayScrollbars(document.querySelectorAll("#uploadTable .el-table__body-wrapper"),{className:"os-theme-thick-light",scrollbars:{autoHide:"none"}}),this.tableData=[],await this.$http.post("dogemanga/lib").then((e=>{let a=e.data;if(200===a.code){for(let t of a.data)this.tableData.push(t);this.tableData.sort((function(t,e){return e.add_date-t.add_date})),t.close()}})).catch((e=>{t.close(),this.isSearch=!1,"/"!==this.$route.fullPath&&this.$router.replace("/"),this.$message.error("漫画库加载出现未知问题，请联系Van！ Code:"+e.message)})),await this.$http.get("dogemanga/cdl").then((t=>{let e=t.data;if(200===e.code){let t=e.data;for(let e of this.tableData)e.manga_id===t&&(e.completed=1)}})).catch((e=>{t.close(),this.isSearch=!1,"/"!==this.$route.fullPath&&this.$router.replace("/"),this.$message.error("漫画库下载加载出现未知问题，请联系Van！ Code:"+e.message)}))},sockets:{response(t){let e=t.manga_id;for(let a of this.tableData)if(a.manga_id===e){a.last_epi_name=t.newest_epi_name,a.last_epi=t.newest_epi;break}},complete_info(t){let e=t.manga_id;for(let a of this.tableData)if(a.manga_id===e){a.completed=!0,this.$notify({title:`${a.manga_name} 完成初次抓取下载！`,message:`${a.manga_name} 已经完成初次抓取！将后续循环更新`,type:"success",position:"bottom-right"});break}},downloading_info(t){let e=t;for(let a of this.tableData)if(a.manga_id===e){a.completed=1,this.$notify({title:`${a.manga_name} 开始抓取下载！`,message:`${a.manga_name} 开始初次抓取！`,type:"success",position:"bottom-right"});break}}},create(){}},st=at,nt=(0,d.Z)(st,tt,et,!1,null,"3dd54ddd",null),rt=nt.exports,ot=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"errpageStage"}},[e("p",{staticClass:"back",on:{click:t.backToMainPage}},[t._v("点击我返回现实")]),t._m(0)])},it=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"error"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"404"},[e("pre",[e("code",[t._v("\r\n        "),t._v("\r\n\t  "),e("span",{staticClass:"green"},[t._v("<!")]),e("span",[t._v("DOCTYPE html")]),e("span",{staticClass:"green"},[t._v(">")]),t._v("\r\n      "),e("span",{staticClass:"orange"},[t._v("<html>")]),t._v("\r\n        "),e("span",{staticClass:"orange"},[t._v("<style>")]),t._v("\r\n                * {\r\n\t\t        "),e("span",{staticClass:"green"},[t._v("我")]),t._v(":"),e("span",{staticClass:"blue"},[t._v("究竟是谁")]),t._v(";\r\n            }\r\n        "),e("span",{staticClass:"orange"},[t._v("</style>")]),t._v("\r\n        "),e("span",{staticClass:"orange"},[t._v("<body>")]),t._v("\r\n            VANISLORD.EXE出现错误...\r\n\r\n              ERROR 404!\r\n\t\t\t\t          FILE NOT FOUND!\r\n\r\n\r\n\r\n\t\t\t\t"),e("span",{staticClass:"comment"},[t._v("\x3c!--迷失在现实的泥潭中--\x3e")]),t._v("\r\n        "),e("span",{staticClass:"orange"}),t._v("\r\n      "),e("div",[t._v("\r\n      "),e("br"),t._v("\r\n      "),e("span",{staticClass:"info"},[t._v("\r\n      "),e("br"),t._v("\r\n\r\n\r\n\r\n\r\n        "),e("span",{staticClass:"orange"},[t._v(" </body>")]),t._v("\r\n        "),e("br"),t._v("\r\n      "),e("span",{staticClass:"orange"},[t._v("</html>")]),t._v("\r\n\r\n        ")]),t._v("\r\n        ")]),t._v("\r\n        ")])])])])])}],lt={name:"ErrorPage",methods:{backToMainPage(){this.$router.replace("/mainpage/searchpage/")}},created(){const t=document.querySelector("body");t.style.overflow="hidden"},beforeDestroy(){const t=document.querySelector("body");t.style.overflow="visible"}},ct=lt,dt=(0,d.Z)(ct,ot,it,!1,null,"7c9bdcdc",null),ut=dt.exports;r["default"].use(m.ZP);const ht=[{path:"/mainpage",name:"MainPage",component:$,children:[{path:"searchpage",component:Q},{path:"mangaku",component:rt}]},{path:"*",name:"Error",component:ut,meta:{isLogin:!1}}],mt=new m.ZP({mode:"history",base:"/",routes:ht});mt.beforeEach(((t,e,a)=>{"/"===t.path||"/mainpage"===t.path?a("/mainpage/searchpage"):a()}));var pt=mt,gt=a(5173);r["default"].use(gt.ZP);var ft=new gt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),vt=a(7422),_t=a(1960),bt=a.n(_t),yt=a(9952),Ct=a(7825),wt=a.n(Ct),kt=a(961);r["default"].use(new(wt())({debug:!0,connection:(0,kt.ZP)("https://aijiangsb.com:7777"),extraHeaders:{"Access-Control-Allow-Origin":"*"},options:{autoConnect:!1}})),r["default"].config.productionTip=!1,r["default"].use(bt()),vt.Z.defaults.baseURL="/api",r["default"].prototype.$http=vt.Z,r["default"].prototype.$addr="http://localhost:5000/api",r["default"].use(yt.m),new r["default"]({sockets:{connecting(){console.log("正在连接")},disconnect(){console.log("断开链接")},connect_failed(){console.log("连接失败")},connect(){console.log("链接成功",this.$socket.id)},reconnect(){console.log("重新链接")}},router:pt,store:ft,render:t=>t(h)}).$mount("#app")},9109:function(t,e,a){t.exports=a.p+"img/naiveLogo.7c53ae3b.png"}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,s,n,r){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],r=t[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,r<o&&(o=r));if(i){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[s,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var d=l(a)}for(e&&e(s);c<o.length;c++)r=o[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},s=self["webpackChunkvanmanga"]=self["webpackChunkvanmanga"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(8352)}));s=a.O(s)})();
//# sourceMappingURL=app.1677561190451.js.map