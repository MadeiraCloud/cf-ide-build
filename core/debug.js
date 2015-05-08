define('template/DebuggerTpl',[], function(){ var TEMPLATE={};

TEMPLATE.Frame=(function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("link");
      dom.setAttribute(el1,"rel","stylesheet");
      dom.setAttribute(el1,"type","text/css");
      dom.setAttribute(el1,"href","/asset/css/debugger.css");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment(" <nav id=\"DebuggerNav\">\n  {{#link-to 'dashboard'}}Api Request{{/link-to}}\n</nav> ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      content(env, morph0, context, "outlet");
      return fragment;
    }
  };
}());

TEMPLATE.Request=(function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "input", [], {"placeholder": get(env, context, "item.name"), "value": get(env, context, "item.value"), "title": get(env, context, "item.name")});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","ApiDebuggerParam");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"id","ApiParamsWrap");
      dom.setAttribute(el2,"class","clearfix");
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","ApiSelectArrow");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"id","ApiDebugSend");
      var el3 = dom.createTextNode("Send Request");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","ApiResultWrap");
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("pre");
      dom.setAttribute(el2,"id","ApiResult");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block, element = hooks.element, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element0, [3]);
      var morph0 = dom.createMorphAt(element1,1,1);
      var morph1 = dom.createMorphAt(element1,5,5);
      var morph2 = dom.createMorphAt(dom.childAt(fragment, [2, 1]),0,0);
      inline(env, morph0, context, "view", ["select"], {"id": "ApiSelect", "content": get(env, context, "model.apiList"), "value": get(env, context, "model.api")});
      block(env, morph1, context, "each", [get(env, context, "model.parameters")], {"keyword": "item"}, child0, null);
      element(env, element2, context, "bind-attr", [], {"class": "loading"});
      element(env, element2, context, "action", ["sendRequest"], {});
      element(env, element2, context, "bind-attr", [], {"disabled": "loading"});
      content(env, morph2, context, "result");
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('core/Debugger',["api/ApiRequest", "core/Application", "template/DebuggerTpl"], function(ApiRequest, App, DebuggerTpl) {
  Ember.Router.map(function() {
    return this.route("debugger", {
      path: "/debugger"
    }, function() {
      this.route("request", {
        path: "/request"
      });
      return this.resource("apiRequest", {
        path: "/request/:name"
      });
    });
  });
  App.DebuggerIndexRoute = Ember.Route.extend({
    redirect: function() {
      return this.transitionTo('apiRequest', _.keys(ApiRequest.Defs)[0]);
    }
  });
  App.DebuggerRequestRoute = Ember.Route.extend({
    redirect: function() {
      return this.transitionTo('apiRequest', _.keys(ApiRequest.Defs)[0]);
    }
  });
  App.DebuggerView = Ember.View.extend({
    template: DebuggerTpl.Frame,
    classNames: ["debugger"]
  });
  App.ApiRequestRoute = Ember.Route.extend({
    model: function(param) {
      return {
        api: param.name,
        apiList: _.keys(ApiRequest.Defs),
        parameters: ((ApiRequest.Defs[param.name] || {}).params || []).map(function(a) {
          return {
            name: a,
            value: ApiRequest.AutoFill(a) || void 0
          };
        })
      };
    }
  });
  App.ApiRequestController = Ember.Controller.extend({
    loading: false,
    result: "",
    selectApi: (function() {
      this.set("result", "");
      return this.transitionToRoute("apiRequest", this.model.api);
    }).observes("model.api"),
    actions: {
      sendRequest: function() {
        var transform;
        transform = function(p) {
          try {
            return [p.name, JSON.parse(p.value)];
          } catch (_error) {
            return [p.name, p.value];
          }
        };
        this.set("loading", true);
        this.set("result", "");
        return ApiRequest(this.model.api, _.object(_.map(this.model.parameters, transform)))["catch"](function(d) {
          return d.result;
        }).then((function(_this) {
          return function(e) {
            _this.set("loading", false);
            return _this.set("result", JSON.stringify(e, void 0, 4));
          };
        })(this));
      }
    }
  });
  App.ApiRequestView = Ember.View.extend({
    template: DebuggerTpl.Request,
    tagName: "section",
    classNames: ["debugger-content hidden"]
  });
});


define("core/debug", function(){});
