window.FileVersions={"account/account.js":"2c230556","api/ApiRequest.js":"02c08cee","core/bundle.js":"4b136f0a","core/config.js":"09191705","core/debug.js":"d5ca7bd1","lib/ace.js":"32791b0f","lib/ace/editor-grammar-checker.js":"848c4dc8","lib/jquery-cookie.js":"5b0faadb","lib/jquery.js":"2d7ea574","lib/require.js":"3b0d1b25","lib/vender.js":"fb587d6c"};
(function(){var e,t,n,r,i,s,o,u,a;if(!window)return;n=window.location;if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(n.hostname)){void 0;return}t=n.hostname.split("."),t.length>=3?window.MC_DOMAIN=t[t.length-2]+"."+t[t.length-1]:window.MC_DOMAIN=n.hostname,window.MC_API_HOST=n.protocol+"//api."+window.MC_DOMAIN,window.language=window.version="";if(n.hostname.toLowerCase().indexOf("cloudfielder.com")>=0&&n.protocol==="http:"){window.location=n.href.replace("http:","https:");return}e=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null};if(!e("usercode")||!e("session")){r=window.location.pathname,r==="/"&&(r=window.location.hash.replace("#","/")),r&&r!=="/login"?window.location.href="/login?ref="+r:window.location.href="/login";return}s=document.getElementsByTagName("script");for(u=0,a=s.length;u<a;u++){i=s[u],o=i.getAttribute("data-main");if(o){window.version=o.split("?")[1];break}}return window.version==="#{version}"&&(window.version="dev"),window.language=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||(navigator.language&&navigator.language.toLowerCase()==="zh-cn"?"zh-cn":"en-us"),null})(),require.config({baseUrl:"/",waitSeconds:10,locale:language,urlArgs:"v="+version,shim:{"lib/ember":{deps:["lib/jquery"]},"lib/ember-data":{deps:["lib/ember"]},"lib/jquery-cookie":{deps:["lib/jquery"]}},bundles:{"lib/vender":["lib/q","lib/base64","lib/underscore","lib/ember","lib/ember-data"],"lib/ace":["lib/ace/editor"],"api/ApiRequest":["api/ApiRequest"],"core/bundle":["core/Application"],"core/debug":["core/Debugger"]},bundleExcludes:{"lib/vender":["lib/jquery"],"lib/ace":["lib/ace/editor-grammar-checker"]}}),function(){var e;if(!window.define)return;e=function(e){e=e||{requireType:"timeout"},e.requireType==="timeout"?(requirejs.onError=function(){},void 0,window.location.reload()):void 0},requirejs.onError=e,require(["lib/jquery","lib/jquery-cookie"],function(){var e,t,n;return n=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(n),e=e||/(webkit)[ \/]([\w.]+)/.exec(n),e=e||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n),e=e||/(msie) ([\w.]+)/.exec(n),e=e||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n),t=(e||[""])[1],t==="webkit"?/version\/([\d\.]+).*safari/.exec(n)&&(t+=" safari"):t==="chrome"&&(t+=" webkit"),navigator.platform.toLowerCase().indexOf("mac")>=0&&(t+=" mac"),$(document.body).addClass(t),require(["lib/q","lib/base64","lib/underscore","lib/ember","lib/ember-data"],function(e,t){var n;return window.Q=e,window.Base64=t,n=["core/Application"],require(n,function(e){return e.advanceReadiness()})})})}();