define(["api/ApiRequest", "core/Application", "template/DebuggerTpl"], function(ApiRequest, App, DebuggerTpl) {
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
