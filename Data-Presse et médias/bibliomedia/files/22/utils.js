!function(){var n=("ontouchstart"in window||"onmsgesturechange"in window,function(){return/(iPhone|iPod|iPad).+AppleWebKit/i.test(window.navigator.userAgent)}),e=document.getElementsByTagName("html")[0],t=e.getAttribute("class"),a=[];null!==t&&(a=t.split(" ")),!n()&&a.push("fig__not-ios"),e.setAttribute("class",a.join(" "))}();var AdManager=function(n,e){var t=[],a=[],i=[],o=new Map,r=new Map,u=n.device||"desktop",s=function(){i=n.deferredTagIds||[],apntag.anq.push(function(){apntag.setPageOpts({member:e.memberId,keywords:e.keywords})}),n.define.map(c),n.show.map(f),n.execute.map(m)},c=function(n){n in adTags&&!t.includes(n)&&(apntag.anq.push(function(){apntag.defineTag({formatId:n,targetId:n,invCode:[u,e.pageId,n].join("_"),sizes:adTags[n].sizes[u]||adTags[n].sizes.desktop||[]})}),t[n]=new Promise(function(e,t){g("adLoaded",n,function(t){e(t),a.includes(n)&&h(o,t,n)}),g("adNoBid",n,function(e){t(e),a.includes(n)&&h(r,e,n)}),g("adError",n,function(e){t(e),a.includes(n)&&h(r,e,n)})}))},f=function(n){i.includes(n)||d(n)},d=function(n){n in t&&t[n].then(function(){a.push(n)}),apntag.anq.push(function(){apntag.showTag(n)})},p=function(){apntag.anq.push(function(){apntag.loadTags()})},g=function(n,e,t){apntag.anq.push(function(){apntag.onEvent(n,e,t)})},h=function(n,e,t){Array.from(n).filter(function(n){return n[1]==t}).map(function(n){n[0](e)})},m=function(n){apntag.anq.push(function(){n()})},l=function(){var n=Array.from(arguments).map(function(n){return t[n]||Promise.reject(n+" is not defined")});return Promise.all(n)},w=function(){var n=Array.from(arguments);return function(e,t){P(n,e,t).then(e,t)}},P=function(n,e,t){var a=new Promise(function(e,t){var a=n.map(function(n){return new Promise(function(e,t){o.set(e,n),r.set(t,n)})});Promise.all(a).then(e,t)["catch"](t)});return a.then(function(){return P(n,e,t)}).then(e,t)["catch"](t),a},v=function(){i.map(function(n){d(n)})},A=function(n){return!!n.banner},T=function(n){return A(n)&&n.banner.content.includes("<!-- EXCLU_LUXE -->")},b=function(n){return A(n)&&n.banner.content.includes("<!-- PIXEL_COLLAPSE_AD -->")},E=function(){Array.from(arguments).map(function(n){apntag.anq.push(function(){apntag.refresh(n)})})};return{device:u,loadTags:p,isTagLoaded:l,isTagRefreshed:w,showDeferredTagIds:v,isExclu:T,isPixel:b,refresh:E,isBanner:A,define:{push:c},show:{push:f},execute:{push:m},init:s}};adManager=new AdManager(adManager,adOpts),adManager.init();