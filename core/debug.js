define("template/DebuggerTpl",[],function(){var e={};return e.Frame=function(){return{isHTMLBars:!0,revision:"Ember@1.11.3",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(t){var n=t.createDocumentFragment(),r=t.createElement("link");t.setAttribute(r,"rel","stylesheet"),t.setAttribute(r,"type","text/css"),t.setAttribute(r,"href","/asset/css/debugger.css"),t.appendChild(n,r);var r=t.createTextNode("\n");t.appendChild(n,r);var r=t.createComment(" <nav id=\"DebuggerNav\">\n  {{#link-to 'dashboard'}}Api Request{{/link-to}}\n</nav> ");t.appendChild(n,r);var r=t.createTextNode("\n");t.appendChild(n,r);var r=t.createComment("");return t.appendChild(n,r),n},render:function(t,n,r){var i=n.dom,s=n.hooks,o=s.content;i.detectNamespace(r);var u;n.useFragmentCache&&i.canClone?(this.cachedFragment===null&&(u=this.build(i),this.hasRendered?this.cachedFragment=u:this.hasRendered=!0),this.cachedFragment&&(u=i.cloneNode(this.cachedFragment,!0))):u=this.build(i);var a=i.createMorphAt(u,4,4,r);return i.insertBoundary(u,null),o(n,a,t,"outlet"),u}}}(),e.Request=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.3",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(t){var n=t.createDocumentFragment(),r=t.createTextNode("    ");t.appendChild(n,r);var r=t.createComment("");t.appendChild(n,r);var r=t.createTextNode("\n");return t.appendChild(n,r),n},render:function(t,n,r){var i=n.dom,s=n.hooks,o=s.get,u=s.inline;i.detectNamespace(r);var a;n.useFragmentCache&&i.canClone?(this.cachedFragment===null&&(a=this.build(i),this.hasRendered?this.cachedFragment=a:this.hasRendered=!0),this.cachedFragment&&(a=i.cloneNode(this.cachedFragment,!0))):a=this.build(i);var f=i.createMorphAt(a,1,1,r);return u(n,f,t,"input",[],{placeholder:o(n,t,"item.name"),value:o(n,t,"item.value"),title:o(n,t,"item.name")}),a}}}();return{isHTMLBars:!0,revision:"Ember@1.11.3",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(t){var n=t.createDocumentFragment(),r=t.createElement("div");t.setAttribute(r,"id","ApiDebuggerParam");var i=t.createTextNode("\n  ");t.appendChild(r,i);var i=t.createElement("section");t.setAttribute(i,"id","ApiParamsWrap"),t.setAttribute(i,"class","clearfix");var s=t.createTextNode("\n  ");t.appendChild(i,s);var s=t.createComment("");t.appendChild(i,s);var s=t.createTextNode("\n  ");t.appendChild(i,s);var s=t.createElement("span");t.setAttribute(s,"id","ApiSelectArrow"),t.appendChild(i,s);var s=t.createTextNode("\n");t.appendChild(i,s);var s=t.createComment("");t.appendChild(i,s);var s=t.createTextNode("  ");t.appendChild(i,s),t.appendChild(r,i);var i=t.createTextNode("\n  ");t.appendChild(r,i);var i=t.createElement("button");t.setAttribute(i,"id","ApiDebugSend");var s=t.createTextNode("Send Request");t.appendChild(i,s),t.appendChild(r,i);var i=t.createTextNode("\n");t.appendChild(r,i),t.appendChild(n,r);var r=t.createTextNode("\n");t.appendChild(n,r);var r=t.createElement("div");t.setAttribute(r,"id","ApiResultWrap");var i=t.createTextNode(" ");t.appendChild(r,i);var i=t.createElement("pre");t.setAttribute(i,"id","ApiResult");var s=t.createComment("");t.appendChild(i,s),t.appendChild(r,i);var i=t.createTextNode(" ");return t.appendChild(r,i),t.appendChild(n,r),n},render:function(n,r,i){var s=r.dom,o=r.hooks,u=o.get,a=o.inline,f=o.block,l=o.element,c=o.content;s.detectNamespace(i);var h;r.useFragmentCache&&s.canClone?(this.cachedFragment===null&&(h=this.build(s),this.hasRendered?this.cachedFragment=h:this.hasRendered=!0),this.cachedFragment&&(h=s.cloneNode(this.cachedFragment,!0))):h=this.build(s);var p=s.childAt(h,[0]),d=s.childAt(p,[1]),v=s.childAt(p,[3]),m=s.createMorphAt(d,1,1),g=s.createMorphAt(d,5,5),y=s.createMorphAt(s.childAt(h,[2,1]),0,0);return a(r,m,n,"view",["select"],{id:"ApiSelect",content:u(r,n,"model.apiList"),value:u(r,n,"model.api")}),f(r,g,n,"each",[u(r,n,"model.parameters")],{keyword:"item"},e,null),l(r,v,n,"bind-attr",[],{"class":"loading"}),l(r,v,n,"action",["sendRequest"],{}),l(r,v,n,"bind-attr",[],{disabled:"loading"}),c(r,y,n,"result"),h}}}(),e}),define("core/Debugger",["api/ApiRequest","core/Application","template/DebuggerTpl"],function(e,t,n){Ember.Router.map(function(){return this.route("debugger",{path:"/debugger"},function(){return this.route("request",{path:"/request"}),this.resource("apiRequest",{path:"/request/:name"})})}),t.DebuggerIndexRoute=Ember.Route.extend({redirect:function(){return this.transitionTo("apiRequest",_.keys(e.Defs)[0])}}),t.DebuggerRequestRoute=Ember.Route.extend({redirect:function(){return this.transitionTo("apiRequest",_.keys(e.Defs)[0])}}),t.DebuggerView=Ember.View.extend({template:n.Frame,classNames:["debugger","workarea"]}),t.ApiRequestRoute=Ember.Route.extend({model:function(t){return{api:t.name,apiList:_.keys(e.Defs),parameters:((e.Defs[t.name]||{}).params||[]).map(function(t){return{name:t,value:e.AutoFill(t)||void 0}})}}}),t.ApiRequestController=Ember.Controller.extend({loading:!1,result:"",selectApi:function(){return this.set("result",""),this.transitionToRoute("apiRequest",this.model.api)}.observes("model.api"),actions:{sendRequest:function(){var t;return t=function(e){try{return[e.name,JSON.parse(e.value)]}catch(t){return[e.name,e.value]}},this.set("loading",!0),this.set("result",""),e(this.model.api,_.object(_.map(this.model.parameters,t)))["catch"](function(e){return e.result}).then(function(e){return function(t){return e.set("loading",!1),e.set("result",JSON.stringify(t,void 0,4))}}(this))}}}),t.ApiRequestView=Ember.View.extend({template:n.Request,tagName:"section",classNames:["debugger-content hidden"]})}),define("core/debug",function(){});