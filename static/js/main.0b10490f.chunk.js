(window["webpackJsonpGA-RealtimeReport-PWA"]=window["webpackJsonpGA-RealtimeReport-PWA"]||[]).push([[0],{26:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),i=n.n(a),c=n(15),u=n(1),s=function(){return{type:"AUTHORIZE_AUTO"}},l=function(e){return{type:"AUTHORIZATION_FAILED",autoMode:e}},d=function(){return{type:"AUTHORIZATION_OK"}},p=function(e){return{type:"AUTH_RECEIVE_ACCOUNTS",accounts:e}},f=function(e){return{type:"GA_GET_ALL_DATA",viewId:e}},w=function(e){return{type:"GA_GET_RT_DATA",viewId:e}},h=function(e){return{type:"GA_RECEIVE_RT_DATA",data:e.data,viewId:e.viewId,reAuth:e.reAuth}},v=function(e){return{type:"GA_GET_DATA",viewId:e}},A=function(e){return{type:"GA_RECEIVE_DATA",data:e.data,viewId:e.viewId,reAuth:e.reAuth}},O=function(e){return{type:"NETWORK_LASTFETCH",lastFetch:e}},g=n(9);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y,b="48841825057-engcdce3j4sfo5j5v4pc3hrpe9fgv1mu.apps.googleusercontent.com",T=["https://www.googleapis.com/auth/analytics.readonly"];function I(e){var t={client_id:b,scope:T,immediate:e};return window.gapi.auth.authorize(t,(function(e){if(e.error)throw new Error("window.gapi - Authorization failed")}))}function _(){return window.gapi.client.analytics.management.accounts.list().then((function(e){if(e.result.items&&e.result.items.length){var t=e.result.items.map((function(e){return{id:e.id,name:e.name}}));return window.gapi.client.analytics.management.webproperties.list({accountId:"~all"}).then((function(e){if(e.result.items&&e.result.items.length)return t.forEach((function(t){t.properties=e.result.items.filter((function(e){return e.accountId===t.id})).map((function(e){return{id:e.id,name:e.name}}))})),window.gapi.client.analytics.management.profiles.list({accountId:"~all",webPropertyId:"~all"}).then((function(e){if(e.result.items&&e.result.items.length)return t.forEach((function(t){t.properties.forEach((function(t){t.views=e.result.items.filter((function(e){return e.webPropertyId===t.id})).map((function(e){return{id:e.id,name:e.name}}))}))})),t}))}))}console.log("No accounts found for this user.")}))}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authorized:!1,authorizing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHORIZE_REFRESH_TOKEN":return Object(u.d)(e,u.a.run((function(){return I(!0)}),{successActionCreator:function(){return f(t.viewId)}}));case"AUTHORIZE_AUTO":case"AUTHORIZE_MANUAL":return Object(u.d)(m({},e,{authorizing:!0}),u.a.run((function(){return I("AUTHORIZE_AUTO"===t.type)}),{successActionCreator:d,failActionCreator:l,args:["AUTHORIZE_AUTO"===t.type]}));case"AUTHORIZATION_OK":return Object(u.d)(m({},e,{authorized:!0,authorizing:!1}),u.a.action({type:"AUTH_GET_ACCOUNTS"}));case"AUTHORIZATION_FAILED":return m({},e,{authorized:!1,authorizing:!1});case"AUTHORIZE_SINGOUT":return Object(u.d)(m({},e,{authorized:!1,authorizing:!1}),u.a.run((function(){window.gapi.auth.setToken(null),window.gapi.auth.signOut()})));case"AUTH_GET_ACCOUNTS":return Object(u.d)(e,u.a.run((function(){return _()}),{successActionCreator:p}));case"AUTH_RECEIVE_ACCOUNTS":var n=[];return e.currentAccount&&n.push(u.a.action({type:"GA_GET_ALL_DATA",viewId:e.currentAccount.viewId})),Object(u.d)(m({},e,{availableAccounts:t.accounts}),u.a.list(n));case"AUTH_CHOOSE_ACCOUNT":var r=!1;return t.account.viewId&&y!==t.account.viewId&&(r=!0,y=t.account.viewId),r?Object(u.d)(m({},e,{currentAccount:t.account}),u.a.list([u.a.action({type:"GA_GET_ALL_DATA",viewId:t.account.viewId}),u.a.action({type:"SERVICE_PERSIST_STATE"})])):m({},e,{currentAccount:t.account});default:return e}};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t){var n=t().auth;n&&n.currentAccount&&n.currentAccount.viewId&&(e(s()),e(w(n.currentAccount.viewId)),e(v(n.currentAccount.viewId)))}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{online:navigator.onLine},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NETWORK_ONLINE":return Object(u.d)(S({},e,{online:!0}),u.a.run(P,{args:[u.a.dispatch,u.a.getState]}));case"NETWORK_OFFLINE":return S({},e,{online:!1});case"NETWORK_LASTFETCH":return S({},e,{lastFetch:t.lastFetch});default:return e}};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D,G;function k(e){return window.gapi.client.analytics.data.realtime.get({ids:"ga:"+e,metrics:"rt:activeUsers",dimensions:"rt:country",fields:"rows,totalsForAllResults"}).then((function(t){return{data:{usersNow:t.result.totalsForAllResults["rt:activeUsers"],countriesAndUsersNow:t.result.rows},viewId:e}})).catch((function(t){if(401===t.status)return{reAuth:!0,viewId:e};console.log("GA RT error: "+t.status)}))}function H(e){return window.gapi.client.analytics.data.ga.get({ids:"ga:"+e,"start-date":"today","end-date":"today",metrics:"ga:users",dimensions:"ga:country",sort:"-ga:users",fields:"rows,totalsForAllResults"}).then((function(t){return{data:{usersToday:t.result.totalsForAllResults["ga:users"],countriesAndUsersToday:t.result.rows},viewId:e}})).catch((function(t){if(401===t.status)return{reAuth:!0,viewId:e};console.log("GA error: "+t.status)}))}var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{usersNow:0,usersToday:0},t=arguments.length>1?arguments[1]:void 0;if(("GA_RECEIVE_RT_DATA"===t.type||"GA_RECEIVE_DATA"===t.type)&&t.reAuth&&!0===t.reAuth)return Object(u.d)(C({},e,{fetching:!1}),u.a.list([u.a.action({type:"AUTHORIZE_REFRESH_TOKEN",viewId:t.viewId})]));switch(t.type){case"GA_GET_ALL_DATA":return Object(u.d)(e,u.a.list([u.a.action({type:"GA_GET_RT_DATA",viewId:t.viewId}),u.a.action({type:"GA_GET_DATA",viewId:t.viewId})]));case"GA_GET_RT_DATA":return clearTimeout(D),Object(u.d)(C({},e,{fetching:!0}),u.a.run((function(){return k(t.viewId)}),{successActionCreator:h}));case"GA_RECEIVE_RT_DATA":var n=u.a.run((function(e,t){D=setTimeout((function(){return e(w(t))}),3e3)}),{args:[u.a.dispatch,t.viewId]}),r=u.a.action(O(new Date));return Object(u.d)(C({},e,{fetching:!1,usersNow:t.data.usersNow,countriesAndUsersNow:t.data.countriesAndUsersNow}),u.a.list([n,r]));case"GA_GET_DATA":return clearTimeout(G),Object(u.d)(C({},e,{fetching:!0}),u.a.run((function(){return H(t.viewId)}),{successActionCreator:A}));case"GA_RECEIVE_DATA":return Object(u.d)(C({},e,{fetching:!1,usersToday:t.data.usersToday,countriesAndUsersToday:t.data.countriesAndUsersToday}),u.a.run((function(e,t){G=setTimeout((function(){return e(v(t))}),12e3)}),{args:[u.a.dispatch,t.viewId]}));default:return e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=void 0;switch(t.type){case"SERVICE_LOAD_STATE":if(null===(n=localStorage.getItem("state")))return e;var r=JSON.parse(n);return r.network.lastFetch&&(r.network.lastFetch=new Date(r.network.lastFetch)),r;case"SERVICE_PERSIST_STATE":return n=JSON.stringify(e),localStorage.setItem("state",n),e;default:return e}},z=Object(u.e)(F,Object(u.b)({auth:j,gaData:L,network:N})),W=(n(31),n(5)),Z=n(17),V=n(11),K=n(24);function x(e){var t=e.component,n=e.conditionEval,r=Object(K.a)(e,["component","conditionEval"]);return o.a.createElement(V.b,Object.assign({},r,{render:function(e){return n()?o.a.createElement(t,e):o.a.createElement(V.a,{to:{pathname:"/auth",state:{referrer:e.location}}})}}))}var J=function(e){var t=e.availableAccounts,n=e.currentAccount,r=e.onAccountChoice;function a(e,t){var n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;if(c.id===t)return c}}catch(u){r=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return null}var i=null,c=null,u=null;if(n&&(i=n.accountId,c=n.propertyId,u=n.viewId),null===i&&t&&t.length>0){var s=t[0];if(i=s.id,s.properties&&s.properties.length>0){var l=t[0].properties[0];if(c=l.id,l.views&&l.views.length>0){var d=l.views[0];u=d.id}}r({accountId:i,propertyId:c,viewId:u})}var p=i?a(t,i):null,f=c&&p?a(p.properties,c):null,w=u&&f?a(f.views,u):null;return p&&!f&&p.properties&&p.properties.length>0&&r({accountId:i,propertyId:p.properties[0].id,viewId:u}),f&&!w&&f.views&&f.views.length>0&&r({accountId:i,propertyId:c,viewId:f.views[0].id}),o.a.createElement("div",{id:"account"},o.a.createElement("span",null,"Account"),o.a.createElement("br",null),o.a.createElement("select",{onChange:function(e){return r({accountId:e.target.value,propertyId:c,viewId:u})},value:i||""},p&&t.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)}))),o.a.createElement("br",null),o.a.createElement("span",null,"Property"),o.a.createElement("br",null),o.a.createElement("select",{onChange:function(e){return r({accountId:i,propertyId:e.target.value,viewId:u})},value:c||""},f&&p.properties.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)}))),o.a.createElement("br",null),o.a.createElement("span",null,"View"),o.a.createElement("br",null),o.a.createElement("select",{onChange:function(e){return r({accountId:i,propertyId:c,viewId:e.target.value})},value:u||""},w&&f.views.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)}))),o.a.createElement("br",null))};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var B=Object(W.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.auth)}),(function(e){return{onAccountChoice:function(t){e(function(e){return{type:"AUTH_CHOOSE_ACCOUNT",account:e}}(t))}}}))(J);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var q=Object(W.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.auth)}),(function(e){return{onSignIn:function(){e({type:"AUTHORIZE_MANUAL"})},onSignOut:function(){e({type:"AUTHORIZE_SINGOUT"})}}}))((function(e){var t=e.authorized,n=e.onSignIn,r=e.onSignOut,a=e.history;return o.a.createElement("div",{id:"navigation"},!t&&o.a.createElement("button",{onClick:n},"Sign in"),t&&"/auth"===a.location.pathname&&o.a.createElement("button",{onClick:r},"Sign out"),t&&"/auth"===a.location.pathname&&o.a.createElement("button",{onClick:function(){return a.push("/")}},"Proceed"),t&&"/auth"!==a.location.pathname&&o.a.createElement("button",{onClick:function(){return a.push("/auth")}},"Switch"))}));var Q=function(e){var t=e.online,n=e.authorized,r=e.currentAccount,a=e.lastFetch;return o.a.createElement("div",{id:"status"},t?"Online; ":"Offline; ",n?"Authorized; ":"Not Authorizded; ",r?"GA Selected; ":"GA Not Selected; ",a?a.getHours()+":"+a.getMinutes()+":"+a.getSeconds():"")},X=Object(W.b)((function(e){return{online:e.network.online,authorized:e.auth.authorized,currentAccount:e.auth.currentAccount,lastFetch:e.network.lastFetch}}))(Q);var Y=function(e){var t=e.users,n=e.countriesAndUsers,r=e.title;return o.a.createElement("div",{className:"users"},o.a.createElement("h2",null,r),o.a.createElement("h1",null,t),n&&n.length>0&&n.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{key:e[0]},e[0]),o.a.createElement("span",{key:e[1],className:"right"},e[1]),o.a.createElement("br",null))})))},ee=Object(W.b)((function(e){return{users:e.gaData.usersNow,countriesAndUsers:e.gaData.countriesAndUsersNow,title:"Now"}}))(Y),te=Object(W.b)((function(e){return{users:e.gaData.usersToday,countriesAndUsers:e.gaData.countriesAndUsersToday,title:"Today"}}))(Y),ne="/";ne="/GA-RealtimeReport-PWA";var re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}window.store=Object(c.b)(z,{},Object(u.c)()),window.dispatch=window.store.dispatch,window.store.dispatch({type:"SERVICE_LOAD_STATE"}),i.a.render(o.a.createElement((function(){return o.a.createElement("div",{className:"App"},o.a.createElement(W.a,{store:window.store},o.a.createElement(Z.a,{basename:ne},o.a.createElement(V.b,{component:q}),o.a.createElement(V.b,{exact:!0,path:"/auth",component:B}),o.a.createElement("div",{id:"columns"},o.a.createElement(x,{exact:!0,path:"/",component:ee,conditionEval:function(){return window.store.getState().auth.authorized}}),o.a.createElement(x,{exact:!0,path:"/",component:te,conditionEval:function(){return window.store.getState().auth.authorized}}))),o.a.createElement(X,null)))}),null),document.getElementById("root"));var ae=!1;function ie(){var e=document.createElement("script");e.onload=function(){window.gapi.load("auth",(function(){window.gapi.client.load("analytics","v3").then((function(){ae=!0,window.dispatch(s())}))}))},e.src="https://apis.google.com/js/client.js",document.head.appendChild(e)}ie(),window.addEventListener("online",(function(){ae||ie(),window.dispatch({type:"NETWORK_ONLINE"})})),window.addEventListener("offline",(function(){window.dispatch({type:"NETWORK_OFFLINE"})})),document.addEventListener("resume",(function(e){window.dispatch({type:"NETWORK_ONLINE"})})),function(e){if("serviceWorker"in navigator){if(new URL("/GA-RealtimeReport-PWA",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/GA-RealtimeReport-PWA","/service-worker.js");re?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):oe(t,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.0b10490f.chunk.js.map