(function(e){function t(t){for(var r,o,i=t[0],a=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==u[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},u={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e63a56c4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=u[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=u[e]=[t,r]}));t.push(n[2]=r);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=o(e);var s=new Error;c=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}u[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/agent-monitoring-app-blueprint/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"00cb":function(e,t,n){},1:function(e,t){},2:function(e,t){},3:function(e,t){},"364d":function(e,t,n){"use strict";n("3981")},3981:function(e,t,n){},4:function(e,t){},5532:function(e,t,n){e.exports=n.p+"img/yuri.yeti.abf58382.png"},6877:function(e,t,n){},7565:function(e,t,n){},8395:function(e,t,n){"use strict";n("6877")},"8e41":function(e,t,n){},"95fa":function(e,t,n){"use strict";n("c720")},c720:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function u(e,t,n,u,c,o){var i=Object(r["w"])("AppHeader"),a=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(i),Object(r["f"])(a)],64)}var c,o=n("1da1"),i=(n("96cf"),n("b85c")),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("841c"),n("159b"),n("93bf")),s={clientId:"e7de8a75-62bb-43eb-9063-38509f8c21af",redirectUri:"https://genesyscloudblueprints.github.io/agent-monitoring-app-blueprint/"},l=new a["a"].RoutingApi,d=new a["a"].NotificationsApi,f={loginImplicitGrant:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search),n=t.get("environment")||localStorage.getItem("gc-environment")||"mypurecloud.com",r=a["a"].ApiClient.instance,r.setPersistSettings(!0,"agent-monitoring-app"),r.setEnvironment(n),localStorage.setItem("gc-environment",n),e.next=8,r.loginImplicitGrant(s.clientId,s.redirectUri);case 8:console.log("Authenticated");case 9:case"end":return e.stop()}}),e)})))()},getQueues:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.getRoutingQueues({pageSize:100});case 2:return t=e.sent,e.abrupt("return",t.entities);case 4:case"end":return e.stop()}}),e)})))()},getQueue:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.getRoutingQueue(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},getMembersOfQueue:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.getRoutingQueueMembers(e,{pageSize:100,expand:["presence","routingStatus"]});case 2:return n=t.sent,console.log(n),t.abrupt("return",n.entities);case 5:case"end":return t.stop()}}),t)})))()},subscribeToUsersStatus:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,u,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r="",n.next=3,d.postNotificationsChannels();case 3:if(u=n.sent,u.connectUri&&u.id){n.next=6;break}throw new Error("Channel not created");case 6:return console.log("Channel created"),r=u.id,c&&c.close(),c=new WebSocket(u.connectUri),c.onmessage=function(e){var n,r=Object(i["a"])(t);try{for(r.s();!(n=r.n()).done;){var u=n.value;u(e)}}catch(c){r.e(c)}finally{r.f()}},o=[],e.forEach((function(e){o.push({id:"v2.users.".concat(e,"?presence&routingStatus")})})),n.next=15,d.postNotificationsChannelSubscriptions(r,o);case 15:console.log("Subscribed to topics");case 16:case"end":return n.stop()}}),n)})))()}},b=n("5532"),p=n.n(b),v=function(e){return Object(r["s"])("data-v-0f18b4d0"),e=e(),Object(r["q"])(),e},g={class:"hero"},m=v((function(){return Object(r["e"])("img",{src:p.a,alt:"Yuri the Yeti"},null,-1)})),h=v((function(){return Object(r["e"])("h1",null,"Vue My Agents",-1)})),O=[m,h];function j(e,t){return Object(r["p"])(),Object(r["d"])("div",g,O)}n("95fa");var w=n("6b0d"),y=n.n(w);const S={},x=y()(S,[["render",j],["__scopeId","data-v-0f18b4d0"]]);var q=x,k={name:"Agent Monitoring App",components:{AppHeader:q},created:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.loginImplicitGrant();case 2:history.pushState({},"",s.redirectUri);case 3:case"end":return e.stop()}}),e)})))()}};n("8395");const R=y()(k,[["render",u]]);var M=R,Q=n("6c02"),U=function(e){return Object(r["s"])("data-v-d178e854"),e=e(),Object(r["q"])(),e},_={class:"container"},A=U((function(){return Object(r["e"])("div",{class:"instructions"}," Select a queue from the drop-down list and view all of the agents' status in real-time. ",-1)})),N={class:"home"};function I(e,t,n,u,c,o){var i=Object(r["w"])("QueueSelector"),a=Object(r["w"])("QueueDetails");return Object(r["p"])(),Object(r["d"])("div",_,[A,Object(r["e"])("div",N,[Object(r["f"])(i,{onQueueSelected:e.onQueueSelected},null,8,["onQueueSelected"]),Object(r["f"])(a,{queue:e.queue},null,8,["queue"])])])}n("b0c0");var C=function(e){return Object(r["s"])("data-v-bfc916aa"),e=e(),Object(r["q"])(),e},P=C((function(){return Object(r["e"])("option",{selected:"",disabled:"",hiddem:""},"Select Queue",-1)})),D=["value"];function L(e,t,n,u,c,o){return Object(r["p"])(),Object(r["d"])("select",{onChange:t[0]||(t[0]=function(){return e.onChange&&e.onChange.apply(e,arguments)}),name:"queue-selector",id:"queue-selector"},[P,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.queues,(function(e){return Object(r["p"])(),Object(r["d"])("option",{key:e.id,value:e.id},Object(r["y"])(e.name),9,D)})),128))],32)}var E=Object(r["g"])({name:"QueueList",data:function(){return{queues:[],selectedOption:""}},methods:{onChange:function(e){if(e.target){var t=e.target.value;this.$emit("queueSelected",t)}}},emits:["queueSelected"],created:function(){var e=this;f.getQueues().then((function(t){t&&(e.queues=t)})).catch((function(e){return console.error(e)}))}});n("364d");const T=y()(E,[["render",L],["__scopeId","data-v-bfc916aa"]]);var G=T,H={class:"container"},J={class:"loading"},z={class:"table"},Y={class:"no-users"};function B(e,t,n,u,c,o){var i=Object(r["w"])("QueueMemberDetails");return Object(r["p"])(),Object(r["d"])("div",H,[Object(r["C"])(Object(r["e"])("div",J," Loading Members... ",512),[[r["A"],e.isLoading]]),Object(r["C"])(Object(r["e"])("div",z,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.queueMembers,(function(e){return Object(r["p"])(),Object(r["d"])("div",{key:e.id},[Object(r["f"])(i,{queueMember:e},null,8,["queueMember"])])})),128))],512),[[r["A"],!e.isLoading]]),Object(r["C"])(Object(r["e"])("div",Y," No users assigned in this queue. 😞 ",512),[[r["A"],e.showNoUsers]])])}n("d81d"),n("7db0");var V={class:"profile-picture"},W=["src"],$={class:"name"},F={class:"presence"},K={class:"routing-status"};function X(e,t,n,u,c,o){return Object(r["p"])(),Object(r["d"])("div",{class:Object(r["l"])(["member-container",["p-".concat(e.presence),"rs-".concat(e.routingStatus)]])},[Object(r["e"])("div",V,[Object(r["e"])("img",{src:e.imageURI},null,8,W)]),Object(r["e"])("div",$,Object(r["y"])(e.name),1),Object(r["e"])("div",F,Object(r["y"])(e.presence),1),Object(r["e"])("div",K,Object(r["y"])(e.routingStatus),1)],2)}var Z="./img/default-face.png",ee=Object(r["g"])({name:"QueueMemberDetails",props:{queueMember:{type:Object}},computed:{name:function(){var e;return null===(e=this.queueMember)||void 0===e?void 0:e.name},presence:function(){var e,t,n,r;return null===(e=this.queueMember)||void 0===e||null===(t=e.user)||void 0===t||null===(n=t.presence)||void 0===n||null===(r=n.presenceDefinition)||void 0===r?void 0:r.systemPresence},routingStatus:function(){var e,t,n;return null===(e=this.queueMember)||void 0===e||null===(t=e.user)||void 0===t||null===(n=t.routingStatus)||void 0===n?void 0:n.status},imageURI:function(){var e,t,n=null===(e=this.queueMember)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.images,r=Z;return n&&(r=n[n.length-1].imageUri||r),r}}});n("f1ab");const te=y()(ee,[["render",X],["__scopeId","data-v-5abeaa15"]]);var ne=te,re=Object(r["g"])({name:"QueueDetails",components:{QueueMemberDetails:ne},props:{queue:{type:Object}},data:function(){return{queueMembers:[],isLoading:!1,showNoUsers:!1}},watch:{queue:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLoading=!0,this.showNoUsers=!1,null!==(t=this.queue)&&void 0!==t&&t.id){e.next=5;break}return console.error("Queue not found"),e.abrupt("return");case 5:return e.next=7,f.getMembersOfQueue(this.queue.id);case 7:if(e.t1=n=e.sent,e.t0=null!==e.t1,!e.t0){e.next=11;break}e.t0=void 0!==n;case 11:if(!e.t0){e.next=15;break}e.t2=n,e.next=16;break;case 15:e.t2=[];case 16:if(this.queueMembers=e.t2,r=this.queueMembers.map((function(e){var t;return null!==(t=e.id)&&void 0!==t?t:""})),!(r.length<=0)){e.next=23;break}console.log("No users in queue"),this.showNoUsers=!0,e.next=25;break;case 23:return e.next=25,f.subscribeToUsersStatus(r,[this.onUserEvent]);case 25:this.isLoading=!1;case 26:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},methods:{onUserEvent:function(e){var t,n=JSON.parse(e.data),r=n.topicName,u=n.eventBody,c=/(v2\.users\.)(.*)\.(.*)/g,o=c.exec(r);if(o){var i=o[2],a=o[3];console.log(i);var s=this.queueMembers.find((function(e){return e.id===i}));if(null!==s&&void 0!==s&&null!==(t=s.user)&&void 0!==t&&t.presence)switch(a){case"presence":s.user.presence.presenceDefinition=u.presenceDefinition;break;case"routingStatus":s.user.routingStatus=u.routingStatus,"NOT_RESPONDING"===u.routingStatus.status&&this.showNotRespondingAlert(s.user);break}else console.error("User not find in queue")}},showNotRespondingAlert:function(e){alert("".concat(e.name," is not responding."))}}});n("d5ff");const ue=y()(re,[["render",B],["__scopeId","data-v-374e886d"]]);var ce=ue,oe=Object(r["g"])({name:"Home",components:{QueueSelector:G,QueueDetails:ce},data:function(){return{queue:{}}},methods:{onQueueSelected:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,f.getQueue(e);case 2:if(n.t1=r=n.sent,n.t0=null!==n.t1,!n.t0){n.next=6;break}n.t0=void 0!==r;case 6:if(!n.t0){n.next=10;break}n.t2=r,n.next=11;break;case 10:n.t2={};case 11:t.queue=n.t2;case 12:case"end":return n.stop()}}),n)})))()}}});n("ec5c");const ie=y()(oe,[["render",I],["__scopeId","data-v-d178e854"]]);var ae=ie,se=[{path:"/",name:"Home",component:ae},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],le=Object(Q["a"])({history:Object(Q["b"])("/agent-monitoring-app-blueprint"),routes:se}),de=le;Object(r["c"])(M).use(de).mount("#app")},d5ff:function(e,t,n){"use strict";n("00cb")},ec5c:function(e,t,n){"use strict";n("8e41")},f1ab:function(e,t,n){"use strict";n("7565")}});
//# sourceMappingURL=app.82782265.js.map