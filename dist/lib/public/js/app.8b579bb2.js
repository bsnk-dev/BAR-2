(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-btn",{attrs:{dark:"",icon:""},on:{click:function(t){e.drawer=!e.drawer}}},[n("v-icon",[e._v("mdi-menu")])],1),n("div",[e._v(" BAR Web Client ")])],1),n("v-navigation-drawer",{attrs:{temporary:"",absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("BAR 2.0 Web Client")]),n("v-list-item-subtitle",[e._v("Bann's Automatic Recruitment Bot")])],1)],1),n("v-divider"),e._l(e.navItems,(function(t,a){return n("v-list-item",{key:a,attrs:{link:""},on:{click:function(n){e.navLocation=t.location,e.drawer=!1}}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1),n("v-main",{staticClass:"d-flex pr-10 pl-10 main-width"},[n("v-scroll-y-transition",{attrs:{group:""}},[0==e.navLocation?[n("div",{key:0},[n("v-row",{staticClass:"mt-5"},[n("ApiCard",{staticClass:"max-width",attrs:{totalApiRequests:this.api.totalRequests,remainingApiRequests:this.api.remainingRequests}})],1),n("v-row",{staticClass:"mt-5"},[n("SentMessages",{staticClass:"max-width",attrs:{items:e.sentMessages}})],1)],1)]:e._e(),1==e.navLocation?[n("Configuration",{key:1})]:e._e(),2==e.navLocation?[n("About",{key:2})]:e._e()],2)],1)],1)},r=[],s=(n("99af"),n("4160"),n("b0c0"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{outlined:""}},[n("v-card-title",[e._v("API Requests")]),n("v-card-subtitle",[e._v("Your remaining API requests.")]),n("v-card-text",[n("div",{staticClass:"black--text text-h3 mb-5"},[e._v(" "+e._s(e.remainingApiRequests)+" / "+e._s(e.totalApiRequests)+" ")]),n("v-progress-linear",{attrs:{value:e.remainingApiRequests/e.totalApiRequests*100}})],1)],1)},c=[],l=(n("a9e3"),{name:"ApiCard",props:{totalApiRequests:Number,remainingApiRequests:Number}}),u=l,d=n("2877"),m=n("6544"),p=n.n(m),v=n("b0af"),f=n("99d9"),g=n("8e36"),b=Object(d["a"])(u,o,c,!1,null,null,null),h=b.exports;p()(b,{VCard:v["a"],VCardSubtitle:f["a"],VCardText:f["b"],VCardTitle:f["c"],VProgressLinear:g["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-slide-y-transition",[n("v-list",{attrs:{"three-line":"",outlined:"",rounded:""}},[e._l(e.itemsSliced,(function(t,a){return[t.header?n("v-subheader",{key:a,domProps:{textContent:e._s(t.header)}}):n("v-list-item",{key:a,attrs:{href:t.link,target:"_blank"}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.avatar}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:e._s(t.title)}}),n("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.subtitle)}})],1)],1),a==e.itemsSliced.length-1||t.header?e._e():n("v-divider",{key:a,attrs:{inset:t.inset}})]})),0==e.itemsSliced.length?n("div",{staticClass:"text-center"},[e._v(" No sent messages yet. ")]):e._e()],2)],1),n("div",{staticClass:"text-center mt-12 mb-12"},[n("v-pagination",{attrs:{length:Math.ceil(e.items.length/10)},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)},y=[],x=(n("fb6a"),{name:"SentMessages",props:{items:Array},data:function(){return{page:1,itemsPerPage:10}},computed:{itemsSliced:function(){var e=this.page-1,t=this.items.slice(10*e,10*(e+1));return t}}}),_=x,k=n("ce7e"),V=n("adda"),C=n("8860"),R=n("da13"),A=n("8270"),P=n("5d23"),M=n("891e"),S=n("0789"),j=n("e0c7"),L=Object(d["a"])(_,w,y,!1,null,null,null),T=L.exports;p()(L,{VDivider:k["a"],VImg:V["a"],VList:C["a"],VListItem:R["a"],VListItemAvatar:A["a"],VListItemContent:P["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VPagination:M["a"],VSlideYTransition:S["e"],VSubheader:j["a"]});var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-10 d-flex flex-column"},[n("div",{staticClass:"text-h4 font-weight-bold grey--text text--darken-3 mb-5"},[e._v(" Your Configuration ")]),n("div",{staticClass:"grey--text mt-5 mb-5"},[e._v(" Enter your Politics & War account information so BAR can login to your account. ")]),n("v-text-field",{attrs:{label:"Politics & War Email",outlined:""},model:{value:e.config.pwEmail,callback:function(t){e.$set(e.config,"pwEmail",t)},expression:"config.pwEmail"}}),n("v-text-field",{attrs:{label:"Politics & War Password",type:"password",outlined:""},model:{value:e.config.pwPassword,callback:function(t){e.$set(e.config,"pwPassword",t)},expression:"config.pwPassword"}}),e._m(0),n("v-text-field",{attrs:{label:"API Key",outlined:""},model:{value:e.config.apiKey,callback:function(t){e.$set(e.config,"apiKey",t)},expression:"config.apiKey"}}),n("div",{staticClass:"grey--text mt-5 mb-5"},[e._v(" How often would you like to check for new nations, we recommend 3 minutes. You can choose for up to 24 hours to pass before checking. ")]),n("v-menu",{ref:"timeMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.time=t},"update:return-value":function(t){e.time=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"How often to check","prepend-icon":"mdi-timer-outline",outlined:"",readonly:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"v-text-field",i,!1),a))]}}]),model:{value:e.timeMenu,callback:function(t){e.timeMenu=t},expression:"timeMenu"}},[e.timeMenu?n("v-time-picker",{attrs:{format:"24hr","full-width":""},on:{"click:minute":function(t){return e.$refs.timeMenu.save(e.time)}},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}):e._e()],1),n("div",{staticClass:"grey--text mt-5 mb-5"},[e._v(" Choose what you would like your subject and message to be. ")]),n("v-text-field",{attrs:{label:"Message Subject",outlined:""},model:{value:e.config.subject,callback:function(t){e.$set(e.config,"subject",t)},expression:"config.subject"}}),n("v-textarea",{attrs:{label:"Message Body",outlined:""},model:{value:e.config.message,callback:function(t){e.$set(e.config,"message",t)},expression:"config.message"}}),n("div",{staticClass:"ml-auto mb-8"},[n("v-btn",{attrs:{outlined:""}},[e._v(" Discard Changes ")]),n("v-btn",{staticClass:"ml-5",attrs:{color:"primary",raised:""}},[e._v(" Save ")])],1)],1)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grey--text mt-5 mb-5"},[e._v(" Enter your Politics & War API key so BAR can access the API. You can find this "),n("a",{attrs:{href:"https://politicsandwar.com/account"}},[e._v("here")]),e._v(". ")])}],q={name:"Configuration",data:function(){return{config:{pwEmail:"",pwPassword:"",apiKey:0,checkTime:0,checksToRelogin:0,subject:"",message:""},timeMenu:null,time:"00:03"}},methods:{get:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==a.readyState)if(200==a.status){var e=JSON.parse(a.responseText);t(e)}else n(a)},a.open("GET",e,!0),a.send({})})));case 1:case"end":return t.stop()}}),t)})))()},loadData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.get("/api/config").catch();case 2:n=t.sent,e.config=n;case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.loadData()}},E=q,$=n("8336"),D=n("e449"),B=n("8654"),K=n("a844"),H=n("c964"),N=Object(d["a"])(E,I,O,!1,null,null,null),W=N.exports;p()(N,{VBtn:$["a"],VMenu:D["a"],VTextField:B["a"],VTextarea:K["a"],VTimePicker:H["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" About page. ")])},J=[],G={name:"About"},X=G,F=Object(d["a"])(X,Y,J,!1,null,null,null),z=F.exports,Q={name:"App",components:{ApiCard:h,SentMessages:T,Configuration:W,About:z},data:function(){return{drawer:!1,navItems:[{title:"Dashboard",icon:"mdi-view-dashboard",location:0},{title:"Configuration",icon:"mdi-cog",location:1},{title:"About",icon:"mdi-help-box",location:2}],navLocation:0,recievedMessages:[],api:{totalRequests:0,remainingRequests:0},config:{}}},computed:{sentMessages:function(){return this.convertToItems(this.recievedMessages)}},methods:{convertToItems:function(e){var t=[{header:"Sent Messages"}];return e.forEach((function(e){var n={avatar:e.successful?"imgs/success.jpg":"imgs/failed.jpg",title:e.nation.leader,subtitle:"They created ".concat(e.nation.name," on ").concat(new Date(e.nation.founded).toLocaleString()),link:"https://politicsandwar.com/nation/id=".concat(e.nation.id)};t.push(n)})),t},get:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==a.readyState)if(200==a.status){var e=JSON.parse(a.responseText);t(e)}else n(a)},a.open("GET",e,!0),a.send({})})));case 1:case"end":return t.stop()}}),t)})))()},loadData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.get("/api/web-db").catch();case 2:n=t.sent,e.recievedMessages=n.messages,e.api.totalRequests=n.apiKeyDetails.totalRequests,e.api.remainingRequests=n.apiKeyDetails.remainingRequests;case 6:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.loadData()}},U=Q,Z=(n("034f"),n("7496")),ee=n("40dc"),te=n("132d"),ne=n("34c3"),ae=n("f6c4"),ie=n("f774"),re=n("0fd9"),se=Object(d["a"])(U,i,r,!1,null,null,null),oe=se.exports;p()(se,{VApp:Z["a"],VAppBar:ee["a"],VBtn:$["a"],VDivider:k["a"],VIcon:te["a"],VList:C["a"],VListItem:R["a"],VListItemContent:P["a"],VListItemIcon:ne["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VMain:ae["a"],VNavigationDrawer:ie["a"],VRow:re["a"],VScrollYTransition:S["c"]});var ce=n("f309");a["a"].use(ce["a"]);var le=new ce["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:le,render:function(e){return e(oe)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.8b579bb2.js.map