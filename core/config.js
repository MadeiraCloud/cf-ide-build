(function(){var e,t,n,r,i,s,o,u,a;if(!window)return;n=window.location;if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(n.hostname)){void 0;return}t=n.hostname.split("."),t.length>=3?window.MC_DOMAIN=t[t.length-2]+"."+t[t.length-1]:window.MC_DOMAIN=n.hostname,window.MC_API_HOST=n.protocol+"//api."+window.MC_DOMAIN,window.language=window.version="";if(n.hostname.toLowerCase().indexOf("cloudfielder.com")>=0&&n.protocol==="http:"){window.location=n.href.replace("http:","https:");return}e=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null};if(!e("usercode")||!e("session")){r=window.location.pathname,r==="/"&&(r=window.location.hash.replace("#","/")),r&&r!=="/login"?window.location.href="/login?ref="+r:window.location.href="/login";return}s=document.getElementsByTagName("script");for(u=0,a=s.length;u<a;u++){i=s[u],o=i.getAttribute("data-main");if(o){window.version=o.split("?")[1];break}}return window.version==="#{version}"&&(window.version="dev"),window.language=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||(navigator.language&&navigator.language.toLowerCase()==="zh-cn"?"zh-cn":"en-us"),null})(),require.config({baseUrl:"/",waitSeconds:10,locale:language,urlArgs:"v="+version,shim:{"lib/ember":{deps:["lib/jquery"]},"lib/ember-data":{deps:["lib/ember"]},"lib/jquery-cookie":{deps:["lib/jquery"]}},bundles:{"lib/vender":["lib/q","lib/base64","lib/underscore","lib/ember","lib/ember-data"],"lib/ace":["lib/ace/editor"],"lib/ace-grammar":["lib/ace/editor-grammar-checker"],"api/ApiRequest":["api/ApiRequest"],"core/bundle":["core/Application"],"core/debug":["core/Debugger"]},bundleExcludes:{"lib/vender":["lib/jquery"]}}),function(){var e;if(!window.define)return;e=function(e){e=e||{requireType:"timeout"},e.requireType==="timeout"?(requirejs.onError=function(){},void 0,window.location.reload()):void 0},requirejs.onError=e,require(["lib/q","lib/base64","lib/jquery","lib/jquery-cookie","lib/underscore","lib/ember","lib/ember-data"],function(e,t){var n,r,i,s;return s=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(s),n=n||/(webkit)[ \/]([\w.]+)/.exec(s),n=n||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(s),n=n||/(msie) ([\w.]+)/.exec(s),n=n||s.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(s),i=(n||[""])[1],i==="webkit"?/version\/([\d\.]+).*safari/.exec(s)&&(i+=" safari"):i==="chrome"&&(i+=" webkit"),navigator.platform.toLowerCase().indexOf("mac")>=0&&(i+=" mac"),$(document.body).addClass(i),window.Q=e,window.Base64=t,r=["core/Application"],require(r,function(e){return e.advanceReadiness()})})}();