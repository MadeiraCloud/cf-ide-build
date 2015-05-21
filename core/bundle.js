define('template/ApplicationTpl',[''], (function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","fa fa-home");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("DASHBOARD");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","fa fa-bars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("RULE");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","fa fa-clock-o");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("LOG");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","fa fa-wrench");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("CONFIGURATION");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
      var el1 = dom.createElement("aside");
      dom.setAttribute(el1,"id","CFSidebar");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","logo");
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"src","/asset/image/logo.png");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("nav");
      dom.setAttribute(el2,"class","menu");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" env:dev                                                                                              env:dev:end ");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","user");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","logout fa fa-power-off");
      dom.setAttribute(el3,"data-tooltip","Log out");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"class","avatar");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","name");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","mail");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("nav");
      dom.setAttribute(el2,"class","tool");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"class","support");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","fa fa-comments");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("SUPPORT");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"class","documentation");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","fa fa-question-circle");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("DOC");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block, element = hooks.element, get = hooks.get, subexpr = hooks.subexpr, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
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
      var element1 = dom.childAt(element0, [3]);
      var element2 = dom.childAt(element0, [5]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element2, [3]);
      var morph0 = dom.createMorphAt(element1,1,1);
      var morph1 = dom.createMorphAt(element1,3,3);
      var morph2 = dom.createMorphAt(element1,5,5);
      var morph3 = dom.createMorphAt(element1,7,7);
      var attrMorph0 = dom.createAttrMorph(element4, 'src');
      var morph4 = dom.createMorphAt(dom.childAt(element2, [5]),0,0);
      var morph5 = dom.createMorphAt(dom.childAt(element2, [7]),0,0);
      var morph6 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      block(env, morph0, context, "link-to", ["dashboard"], {}, child0, null);
      block(env, morph1, context, "link-to", ["ruleManager"], {}, child1, null);
      block(env, morph2, context, "link-to", ["scanLogPage"], {}, child2, null);
      block(env, morph3, context, "link-to", ["settings"], {}, child3, null);
      element(env, element3, context, "action", ["logout"], {});
      attribute(env, attrMorph0, element4, "src", concat(env, [subexpr(env, context, "gravatar", [get(env, context, "App.user.email")], {})]));
      content(env, morph4, context, "App.user.username");
      content(env, morph5, context, "App.user.email");
      content(env, morph6, context, "outlet");
      return fragment;
    }
  };
}()));
define('ui/UI.tooltip',[], function() {
  var tooltip;
  tooltip = function(event) {
    var content, docElem, height, target, target_height, target_offset, target_width, tooltip_box, width;
    target = $(event.currentTarget);
    content = $.trim(target.attr('data-tooltip'));
    tooltip_box = $('#tooltip_box');
    docElem = document.documentElement;
    if (content !== '' && !target.hasClass('parsley-error')) {
      if (!tooltip_box[0]) {
        $(document.body).append('<div id="tooltip_box"></div>');
        tooltip_box = $('#tooltip_box');
      }
      if (target.data('tooltip-type') === 'html') {
        tooltip_box.html(content).show();
      } else {
        tooltip_box.text(content).show();
      }
      if (target.prop('namespaceURI') === 'http://www.w3.org/2000/svg') {
        target_offset = target[0].getBoundingClientRect();
        target_width = target_offset.width;
        target_height = target_offset.height;
      } else {
        target_offset = target.offset();
        target_width = target.innerWidth();
        target_height = target.innerHeight();
      }
      width = tooltip_box.width();
      height = tooltip_box.height();
      tooltip_box.css({
        'left': target_offset.left + target_width + width - docElem.scrollLeft > window.innerWidth ? target_offset.left + target_width - width - 20 : target_offset.left + 5,
        'top': target_offset.top + target_height + height - docElem.scrollTop + 45 > window.innerHeight ? target_offset.top - height - 15 : target_offset.top + target_height + 8
      });
      $(document.body).on('mouseleave', '[data-tooltip]', tooltip.clear);
      tooltip.timer.push(setInterval((function() {
        if (target.closest('html').length === 0) {
          tooltip.clear();
        }
      }), 1000));
    }
    return true;
  };
  tooltip.timer = [];
  tooltip.clear = function() {
    $(document.body).off('mouseleave', '[data-tooltip]', tooltip.clear);
    $('#tooltip_box').remove();
    $.each(tooltip.timer, function(index, timer) {
      clearInterval(timer);
    });
    return false;
  };
  return $(document).ready(function() {
    return $(document.body).on('mouseenter', '[data-tooltip]', tooltip);
  });
});


/*
 ***********************************************************
 ** Filename: UI.table
 ** Creator: Angel
 ** Description: UI.table
 ** Date: 20130917
 * **********************************************************
 * (c) Copyright 2013 Madeiracloud  All Rights Reserved
 * **********************************************************
 */
define('ui/UI.table',[], function() {
  var table;
  table = {
    edit: function(event) {
      var input, row, row_height;
      if (event.target.tagName.toLowerCase() === 'input') {
        return false;
      } else {
        row = $(this);
        row_height = row.css('height');
        input = row.html('<input class="table-input" type="text" value="' + row.text() + '"/>').children(':first');
        $(input).css({
          'color': row.css('color'),
          'font-size': row.css('font-size')
        }).focus();
      }
      return true;
    },
    update: function(event) {
      $(this).parent().text(this.value);
      return true;
    },
    sort: function(event) {
      var fragment, index, order, rowType, rows, stack, target, tbody, thead;
      target = $(this);
      index = target.index() + 1;
      thead = target.parent().parent();
      table = thead.parent();
      order = target.hasClass('desc-sort') ? 'DESC' : 'ASC';
      fragment = document.createDocumentFragment();
      stack = [];
      rowType = '';
      tbody = void 0;
      rows = void 0;
      if (table.attr('data-target')) {
        table = $('#' + table.attr('data-target'));
      }
      if (table.hasClass('table-head')) {
        tbody = table.parent().find('.table tbody');
        rows = tbody.find('tr');
      } else {
        tbody = table.find('tbody');
        rows = tbody.find('tr');
      }
      thead.find('.active').removeClass('active');
      target.addClass('active');
      rows.map(function() {
        stack.push({
          'item': this,
          'value': $(this).find('td:nth-child(' + index + ')').text().toLowerCase()
        });
      });
      rowType = target.data('rowType');
      if (order === 'DESC') {
        stack.sort(function(a, b) {
          var intA, intB;
          if (rowType === 'datetime') {
            return new Date(a.value) - (new Date(b.value));
          }
          intA = parseInt(a.value);
          intB = parseInt(b.value);
          if (rowType !== 'string' && !isNaN(intA) && !isNaN(intB)) {
            return intA - intB;
          }
          if (typeof a.value === 'string') {
            return a.value.localeCompare(b.value);
          }
        });
        target.removeClass('desc-sort');
      } else {
        stack.sort(function(a, b) {
          var intA, intB;
          if (rowType === 'datetime') {
            return new Date(b.value) - (new Date(a.value));
          }
          intA = parseInt(a.value);
          intB = parseInt(b.value);
          if (rowType !== 'string' && !isNaN(intA) && !isNaN(intB)) {
            return intB - intA;
          }
          if (typeof a.value === 'string') {
            return b.value.localeCompare(a.value);
          }
        });
        target.addClass('desc-sort');
      }
      $.each(stack, function(i, row) {
        fragment.appendChild(row.item);
      });
      tbody.empty().append(fragment);
      fragment = null;
      return true;
    }
  };
  $(document).ready(function() {
    return $(document.body).on('click', '.table td.editable', table.edit).on('click', '.table .sortable, .table-head .sortable', table.sort).on('blur', '.table-input', table.update);
  });
  return table;
});

define('view/ApplicationView',["template/ApplicationTpl", "ui/UI.tooltip", "ui/UI.table"], function(AppTpl) {
  return Ember.View.extend({
    template: AppTpl,
    classNames: ["cloudfielder"]
  });
});

define('core/Router',[], function() {
  return Ember.Router.map(function() {
    this.route("dashboard", {
      path: "/dashboard"
    }, function() {});
    this.route("settings", {
      path: "/settings"
    }, function() {});
    this.resource("scanLog", {
      path: "/logs/"
    }, function() {
      return this.resource("scanLogPage", {
        path: "/:pageId"
      }, function() {});
    });
    return this.route("ruleManager", {
      path: "/rules"
    }, function() {
      return this.resource("ruleList", {
        path: "/0"
      }, function() {
        return this.resource("rule", {
          path: ":id"
        }, function() {
          this.resource("ruleScanLog", {
            path: "scanned"
          }, function() {});
          return this.resource("ruleAuditLog", {
            path: "operated"
          }, function() {});
        });
      });
    });
  });
});

define('core/Store',[], function() {
  return DS.Store.extend();
});

define('route/ApplicationRoute',[], function() {
  return Ember.Route.extend({
    afterModel: function() {
      console.log("App is Ready");
      return $("#GlobalLoading").remove();
    },
    actions: {
      error: function() {
        console.log("Global error route is activated, make sure it's not because any unhandled error from the substate of application.", arguments);
        debugger;
        return this.logout();
      },
      logout: function() {
        var cValue, ckey, _ref;
        _ref = $.cookie();
        for (ckey in _ref) {
          cValue = _ref[ckey];
          $.removeCookie(ckey, {
            "path": "/"
          });
        }
        return window.location.href = "/login";
      }
    }
  });
});

define('route/IndexRoute',[], function() {
  return Ember.Route.extend({
    redirect: function() {
      return this.transitionTo('dashboard');
    }
  });
});

define('route/DashboardRoute',[], function() {
  return Ember.Route.extend({
    model: function() {
      return this.store.find('dashboard', 1);
    }
  });
});

define('route/LogRoute',[], function() {
  return {
    ScanLogRoute: Ember.Route.extend({
      beforeModel: function() {
        return this.transitionTo('scanLogPage', 1);
      }
    }),
    ScanLogPageRoute: Ember.Route.extend({
      model: function(params, transition) {
        return this.store.find('scanLogPage', transition.params.scanLogPage.pageId);
      },
      setupController: function(controller, model) {
        this.controllerFor('scanLogList').set('model', model.get('result'));
        return this._super.apply(this, arguments);
      }
    }),
    RuleScanLogRoute: Ember.Route.extend({
      model: function() {
        var rule;
        rule = this.modelFor('rule');
        return this.store.find('ruleScanLog', rule.id);
      },
      setupController: function(controller, model) {
        this.controllerFor('ruleScanLogList').set('model', model.get('result'));
        return this._super.apply(this, arguments);
      }
    }),
    RuleAuditLogRoute: Ember.Route.extend({
      model: function() {
        var rule;
        rule = this.modelFor('rule');
        return this.store.find('ruleAuditLog', rule.id);
      }
    })
  };
});

define('route/RuleManagerRoute',[], function() {
  var RuleLoaded;
  RuleLoaded = false;
  return {
    RuleManagerRoute: Ember.Route.extend({
      deactivate: function() {
        var rule, _i, _len, _ref;
        _ref = App.user.get("rules").filterBy("id", null);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rule = _ref[_i];
          rule.deleteRecord();
        }
        this.controllerFor("ruleList").send("toggleSelect", false);
      },
      actions: {
        error: function(e) {
          console.error(e);
          this.transitionTo('ruleList');
          return false;
        }
      }
    }),
    RuleManagerIndexRoute: Ember.Route.extend({
      redirect: function() {
        return this.transitionTo('ruleList');
      }
    }),
    RuleListRoute: Ember.Route.extend({
      model: function() {
        if (RuleLoaded === false) {
          return this.store.find("rule").then(function(data) {
            RuleLoaded = true;
            App.user.get("rules").pushObjects(data);
            return App.user.get("rules");
          });
        }
        return App.user.get("rules");
      }
    }),
    RuleIndexRoute: Ember.Route.extend({}),
    RuleRoute: Ember.Route.extend({
      model: function(o) {
        if (o.id === "new") {
          return this.store.all("rule").filterBy("id", null)[0] || this.store.createRecord("rule", {
            user: App.user,
            content: "name\n\n  \"untitled rule\"\n\ndescription\n\n  \"db instance shouldn't have publicIp\"\n\nparameter\n\n\nif\n\n  region\n  .instance( tags[\"role\"] = \"db\", publicIpAddress!=\"\" )\n\ndo\n\n  email()"
          });
        } else {
          return this.store.find("rule", o.id);
        }
      },
      setupController: function(controller, model) {
        var id;
        id = model.id === "new" ? null : model.id;
        model = this.store.all("rule").filterBy("id", id)[0];
        return this._super.call(this, controller, model);
      },
      serialize: function(model, params) {
        if (model.get && model.get("isNew")) {
          return {
            id: 'new'
          };
        }
        if (model.hasOwnProperty("id")) {
          return {
            id: !model.id ? 'new' : model.id
          };
        }
        return this._super(model, params);
      }
    })
  };
});

define('route/SettingsRoute',[], function() {
  return {
    SettingsRoute: Ember.Route.extend({
      model: function() {
        return App.user;
      },
      deactivate: function() {
        this.controllerFor("settings").resetState();
      }
    })
  };
});

define('template/SettingsTpl',[''], (function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","static font-mono");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","setting-cred");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3,"class","fa fa-user-secret");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","setting-cred");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3,"class","fa fa-key");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","setting-cred");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3,"class","fa fa-lock");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","red");
        dom.setAttribute(el2,"id","cfgRemoveAccount");
        var el3 = dom.createTextNode("Remove Account");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, element = hooks.element;
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
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [7]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
        content(env, morph0, context, "model.profile.awsAccount");
        content(env, morph1, context, "model.profile.awsAccessKey");
        content(env, morph2, context, "model.profile.awsSecretKey");
        element(env, element1, context, "action", ["removeAwsAccount"], {"target": "view", "bubbles": false});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","static");
        var el2 = dom.createTextNode("None");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","static wide hint");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("In order to monitor your cloud infrastructure with CloudField, you have to provide an cloud account.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Currently only AWS account is supported.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ol");
        dom.setAttribute(el1,"class","account-instruction");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2,"style","line-height:30px;");
        var el3 = dom.createTextNode("Go to ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","http://console.aws.com");
        var el4 = dom.createTextNode("AWS console > Security Credentials > Users");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("Create new user for CloudFielder. Then download/copy the generated access key and secret.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("Set up proper permissions for this user. Read-only access to all supported resources is recommended.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
      dom.setAttribute(el1,"class","settings-content settings-form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("fieldset");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("header");
      var el4 = dom.createTextNode("Account");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      dom.setAttribute(el3,"class","entry");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      var el5 = dom.createTextNode("Username");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","static");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","account-key-id");
      var el5 = dom.createTextNode("Name");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","static");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","dynamic");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap half");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgFirstName");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("First Name");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap half");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgLastName");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("Last Name");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","action-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      var el7 = dom.createTextNode("Save");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"class","link");
      var el7 = dom.createTextNode("Cancel");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      var el5 = dom.createTextNode("Email");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","static");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","dynamic");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgEmail");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("New Email");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","password");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgEmailPass");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("Confirm with password");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","action-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      var el7 = dom.createTextNode("Update Email");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"class","link");
      var el7 = dom.createTextNode("Cancel");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      var el5 = dom.createTextNode("Password");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","static font-mono");
      var el5 = dom.createTextNode("******");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","dynamic");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","password");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgPass0");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("Old password");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","password");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgPass1");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("New password");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","password");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgPass2");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("Confirm new password");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","action-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      var el7 = dom.createTextNode("Update Password");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"class","link");
      var el7 = dom.createTextNode("Cancel");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("fieldset");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("header");
      var el4 = dom.createTextNode("Scan Configuration");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      var el5 = dom.createTextNode("Scan Interval");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","static");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" min");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","dynamic");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgScan");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("Scan Interval ( miniute )");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","action-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      var el7 = dom.createTextNode("Save");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"class","link");
      var el7 = dom.createTextNode("Cancel");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("section");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","account-key-id");
      var el5 = dom.createTextNode("Cloud Account");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","dynamic");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgAwsAccount");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createElement("i");
      dom.setAttribute(el7,"class","fa fa-user-secret");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("AWS Account Number");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgAwsAccess");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createElement("i");
      dom.setAttribute(el7,"class","fa fa-key");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("AWS Access Key");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"required","required");
      dom.setAttribute(el6,"id","cfgAwsPrivate");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createElement("i");
      dom.setAttribute(el7,"class","fa fa-lock");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("AWS Private Key");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","error");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","action-wrap");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      var el7 = dom.createTextNode("Link Account");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"class","link");
      var el7 = dom.createTextNode("Cancel");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"class","link");
      dom.setAttribute(el5,"style","margin-top:1em;");
      var el6 = dom.createTextNode("Having trouble geting the account info?");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content, element = hooks.element, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block;
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
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element3, [5]);
      var element5 = dom.childAt(element4, [3]);
      var element6 = dom.childAt(element4, [5]);
      var element7 = dom.childAt(element6, [1]);
      var element8 = dom.childAt(element7, [1]);
      var element9 = dom.childAt(element6, [3]);
      var element10 = dom.childAt(element9, [1]);
      var element11 = dom.childAt(element6, [5]);
      var element12 = dom.childAt(element11, [1]);
      var element13 = dom.childAt(element11, [3]);
      var element14 = dom.childAt(element3, [7]);
      var element15 = dom.childAt(element14, [5]);
      var element16 = dom.childAt(element15, [5]);
      var element17 = dom.childAt(element16, [1]);
      var element18 = dom.childAt(element16, [3]);
      var element19 = dom.childAt(element3, [9]);
      var element20 = dom.childAt(element19, [5]);
      var element21 = dom.childAt(element20, [7]);
      var element22 = dom.childAt(element21, [1]);
      var element23 = dom.childAt(element21, [3]);
      var element24 = dom.childAt(element2, [3]);
      var element25 = dom.childAt(element24, [3]);
      var element26 = dom.childAt(element25, [5]);
      var element27 = dom.childAt(element26, [3]);
      var element28 = dom.childAt(element27, [1]);
      var element29 = dom.childAt(element27, [3]);
      var element30 = dom.childAt(element24, [5]);
      var element31 = dom.childAt(element30, [5]);
      var element32 = dom.childAt(element31, [7]);
      var element33 = dom.childAt(element32, [1]);
      var element34 = dom.childAt(element32, [3]);
      var element35 = dom.childAt(element31, [9]);
      var morph0 = dom.createMorphAt(dom.childAt(element3, [3, 3]),0,0);
      var morph1 = dom.createMorphAt(element5,0,0);
      var morph2 = dom.createMorphAt(element5,2,2);
      var attrMorph0 = dom.createAttrMorph(element8, 'value');
      var morph3 = dom.createMorphAt(dom.childAt(element7, [5]),0,0);
      var attrMorph1 = dom.createAttrMorph(element10, 'value');
      var morph4 = dom.createMorphAt(dom.childAt(element9, [5]),0,0);
      var morph5 = dom.createMorphAt(dom.childAt(element14, [3]),0,0);
      var morph6 = dom.createMorphAt(dom.childAt(element15, [1, 5]),0,0);
      var morph7 = dom.createMorphAt(dom.childAt(element15, [3, 5]),0,0);
      var morph8 = dom.createMorphAt(dom.childAt(element20, [1, 5]),0,0);
      var morph9 = dom.createMorphAt(dom.childAt(element20, [3, 5]),0,0);
      var morph10 = dom.createMorphAt(dom.childAt(element20, [5, 5]),0,0);
      var morph11 = dom.createMorphAt(dom.childAt(element25, [3]),0,0);
      var morph12 = dom.createMorphAt(dom.childAt(element26, [1, 5]),0,0);
      var morph13 = dom.createMorphAt(element30,3,3);
      var morph14 = dom.createMorphAt(dom.childAt(element31, [1, 5]),0,0);
      var morph15 = dom.createMorphAt(dom.childAt(element31, [3, 5]),0,0);
      var morph16 = dom.createMorphAt(dom.childAt(element31, [5, 5]),0,0);
      var morph17 = dom.createMorphAt(element30,7,7);
      content(env, morph0, context, "model.username");
      element(env, element4, context, "bind-attr", [], {"class": ":entry isEditingName:editing isSavingName:saving"});
      element(env, element4, context, "action", ["editFullName"], {});
      content(env, morph1, context, "model.firstName");
      content(env, morph2, context, "model.lastName");
      attribute(env, attrMorph0, element8, "value", concat(env, [get(env, context, "model.firstName")]));
      content(env, morph3, context, "view.errorFirstName");
      attribute(env, attrMorph1, element10, "value", concat(env, [get(env, context, "model.lastName")]));
      content(env, morph4, context, "view.errorLastName");
      element(env, element12, context, "action", ["saveFullname"], {"target": "view", "bubbles": false});
      element(env, element13, context, "action", ["cancelFullName"], {"bubbles": false});
      element(env, element14, context, "bind-attr", [], {"class": ":entry isEditingEmail:editing isSavingEmail:saving"});
      element(env, element14, context, "action", ["editEmail"], {});
      content(env, morph5, context, "model.email");
      content(env, morph6, context, "view.errorEmail");
      content(env, morph7, context, "view.errorEmailPass");
      element(env, element17, context, "action", ["updateEmail"], {"target": "view", "bubbles": false});
      element(env, element18, context, "action", ["cancelEmail"], {"target": "view", "bubbles": false});
      element(env, element19, context, "bind-attr", [], {"class": ":entry isEditingPassword:editing isSavingPassword:saving"});
      element(env, element19, context, "action", ["editPassword"], {});
      content(env, morph8, context, "view.errorPass0");
      content(env, morph9, context, "view.errorPass1");
      content(env, morph10, context, "view.errorPass2");
      element(env, element22, context, "action", ["updatePassword"], {"target": "view", "bubbles": false});
      element(env, element23, context, "action", ["cancelPassword"], {"target": "view", "bubbles": false});
      element(env, element25, context, "bind-attr", [], {"class": ":entry isEditingScanInt:editing isSavingScanInt:saving"});
      element(env, element25, context, "action", ["editScanInt"], {});
      content(env, morph11, context, "model.profile.cfgScanInt");
      content(env, morph12, context, "view.errorScan");
      element(env, element28, context, "action", ["saveScanInt"], {"target": "view", "bubbles": false});
      element(env, element29, context, "action", ["cancelScanInt"], {"target": "view", "bubbles": false});
      element(env, element30, context, "bind-attr", [], {"class": ":entry isEditingCred:editing isSavingCred:saving"});
      element(env, element30, context, "action", ["editCredential"], {});
      block(env, morph13, context, "if", [get(env, context, "hasCredential")], {}, child0, child1);
      content(env, morph14, context, "view.errorAwsAccount");
      content(env, morph15, context, "view.errorAwsAccess");
      content(env, morph16, context, "view.errorAwsPrivate");
      element(env, element33, context, "action", ["saveAwsAccount"], {"target": "view", "bubbles": false});
      element(env, element34, context, "action", ["cancelCredential"], {"target": "view", "bubbles": false});
      element(env, element35, context, "action", ["toggleAwsHelp"], {"bubbles": false});
      block(env, morph17, context, "if", [get(env, context, "isShowingAwsHelp")], {}, child2, null);
      return fragment;
    }
  };
}()));
define('ui/UI.bubblepopup',[], function() {
  var bubblePopup;
  $(document).on('click', function(event) {
    if (!$(event.target).hasClass('bubble-popuped')) {
      $('#bubble-box').remove();
      return $('.bubble-popuped').removeClass('bubble-popuped');
    }
  });
  bubblePopup = function(target, option, handleMap) {
    var $content, bubble_box, content, coordinate, height, target_height, target_offset, target_width, width;
    target = $(target);
    bubble_box = $('#bubble-box');
    coordinate = {};
    if (typeof option !== 'string') {
      content = "<div class=\"info\">" + option.title + "</div>\n<div class=\"operate\">\n    <button class=\"confirm btn btn-red\">" + option.confirm + "</li>\n    <button class=\"cancel btn btn-silver\">" + option.cancel + "</li>\n</div>";
    } else {
      content = option;
    }
    if ($.trim(content) !== '') {
      if (!bubble_box[0]) {
        $(document.body).append('<div id="bubble-box" class="bubble-popup"><div class="arrow"></div><div class="content"></div></div>');
        bubble_box = $('#bubble-box');
      }
      $content = $('#bubble-box .content').html(content);
      $content.find('.cancel').on('click', function() {
        $('#bubble-box').remove();
        return $('.bubble-popuped').removeClass('bubble-popuped');
      });
      _.each(handleMap, function(handle, selector) {
        return $content.find(selector).on('click', handle);
      });
      target_offset = target.offset();
      target_width = target.innerWidth();
      target_height = target.innerHeight();
      width = bubble_box.width();
      height = bubble_box.height();
      if (target_offset.top + target_height + height - document.documentElement.scrollTop > window.innerHeight) {
        coordinate.top = target_offset.top - height - 15;
        bubble_box.addClass('bubble-top');
      } else {
        coordinate.top = target_offset.top + target_height + 15;
        bubble_box.addClass('bubble-bottom');
      }
      coordinate.left = target_offset.left - ((width - target_width) / 2);
      bubble_box.css(coordinate).show();
      return target.addClass('bubble-popuped');
    }
  };
  return bubblePopup;
});

define('view/SettingsView',["template/SettingsTpl", "ui/UI.bubblepopup"], function(SettingsTemplate, popupBubble) {
  var error1, error2, error3, error4, error5, error6, error7, error8, error9;
  error1 = "Cannot be empty.";
  error2 = "Error occured, please retry later.";
  error3 = "Please provide a valid value.";
  error4 = "Password must contain 6 characters at least.";
  error5 = "These passwords don't match.";
  error6 = "The email has be used.";
  error7 = "Your password is invalid.";
  error8 = "Cannot link your account, please retry later.";
  error9 = "Scan interval should be >= 30";
  return {
    SettingsView: Ember.View.extend({
      template: SettingsTemplate,
      classNames: ["settings", "workarea"],
      clearError: function() {
        this.set("errorFirstName", "");
        this.set("errorLastName", "");
        this.set("errorEmail", "");
        this.set("errorEmailPass", "");
        this.set("errorPass0", "");
        this.set("errorPass1", "");
        this.set("errorPass2", "");
        this.set("errorScan", "");
        this.set("errorAwsAccount", "");
        this.set("errorAwsAccess", "");
        return this.set("errorAwsPrivate", "");
      },
      clearPasswords: function() {
        this.$("#cfgPass0").val("");
        this.$("#cfgPass1").val("");
        this.$("#cfgPass2").val("");
      },
      clearEmail: function() {
        this.$("#cfgEmail").val("");
        this.$("#cfgEmailPass").val("");
      },
      clearCredential: function() {
        this.$("#cfgAwsAccount").val("");
        this.$("#cfgAwsAccess").val("");
        this.$("#cfgAwsPrivate").val("");
      },
      actions: {
        saveFullname: function() {
          var fn, ln;
          this.clearError();
          fn = this.$("#cfgFirstName").val();
          ln = this.$("#cfgLastName").val();
          if (!fn) {
            this.set("errorFirstName", error1);
          }
          if (!ln) {
            this.set("errorLastName", error1);
          }
          if (!fn || !ln) {
            return;
          }
          this.set("controller.isSavingName", true);
          this.get("controller.model").updateName(fn, ln).then((function(_this) {
            return function() {
              return _this.get("controller").send("cancelFullName");
            };
          })(this), (function(_this) {
            return function(error) {
              _this.set("controller.isSavingName", false);
              return _this.set("errorFirstName", error2);
            };
          })(this));
        },
        updateEmail: function() {
          var em, ep;
          this.clearError();
          em = this.$("#cfgEmail").val();
          ep = this.$("#cfgEmailPass").val();
          if (em === App.user.get("email")) {
            this.send("cancelEmail");
            return;
          }
          if (!em) {
            this.set("errorEmail", error1);
          }
          if (!ep) {
            this.set("errorEmailPass", error1);
          }
          if (!em || !ep) {
            return;
          }
          if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(em)) {
            this.set("errorEmail", error3);
            return;
          }
          this.set("controller.isSavingEmail", true);
          this.get("controller.model").updateEmail(em, ep).then((function(_this) {
            return function() {
              return _this.send("cancelEmail");
            };
          })(this), (function(_this) {
            return function(error) {
              _this.set("controller.isSavingEmail", false);
              if (error && error.error === 117) {
                return _this.set("errorEmail", error6);
              } else {
                return _this.set("errorEmail", error2);
              }
            };
          })(this));
        },
        cancelEmail: function() {
          this.clearEmail();
          this.get("controller").send("cancelEmail");
        },
        updatePassword: function() {
          var p0, p1, p2;
          this.clearError();
          p0 = this.$("#cfgPass0").val();
          p1 = this.$("#cfgPass1").val();
          p2 = this.$("#cfgPass2").val();
          if (!p0) {
            this.set("errorPass0", error1);
          }
          if (!p1) {
            this.set("errorPass1", error1);
          }
          if (!p2) {
            this.set("errorPass2", error1);
          }
          if (!p0 || !p1 || !p2) {
            return;
          }
          if (p1.length < 6) {
            this.set("errorPass0", error4);
            return;
          }
          if (p1 !== p2) {
            this.set("errorPass2", error5);
            return;
          }
          this.set("controller.isSavingPassword", true);
          this.get("controller.model").updatePassword(p0, p1).then((function(_this) {
            return function() {
              return _this.send("cancelPassword");
            };
          })(this), (function(_this) {
            return function(error) {
              _this.set("controller.isSavingPassword", false);
              if (error && error.error === 110) {
                return _this.set("errorPass0", error7);
              } else {
                return _this.set("errorPass0", error2);
              }
            };
          })(this));
        },
        cancelPassword: function() {
          this.clearPasswords();
          this.get("controller").send("cancelPassword");
        },
        saveAwsAccount: function() {
          var aa, an, ap;
          this.clearError();
          an = this.$("#cfgAwsAccount").val();
          aa = this.$("#cfgAwsAccess").val();
          ap = this.$("#cfgAwsPrivate").val();
          if (!an) {
            this.set("errorAwsAccount", error1);
          }
          if (!aa) {
            this.set("errorAwsAccess", error1);
          }
          if (!ap) {
            this.set("errorAwsPrivate", error1);
          }
          if (!an || !aa || !ap) {
            return;
          }
          this.set("controller.isSavingCred", true);
          this.get("controller.model.profile").updateCredential(an, aa, ap).then((function(_this) {
            return function() {
              return _this.send("cancelCredential");
            };
          })(this), (function(_this) {
            return function(error) {
              _this.set("controller.isSavingCred", false);
              if (error && error.error === 293) {
                return _this.set("errorAwsAccount", error8);
              } else {
                return _this.set("errorAwsAccount", error2);
              }
            };
          })(this));
        },
        removeAwsAccount: function() {
          var self;
          self = this;
          popupBubble(this.$('#cfgRemoveAccount'), {
            title: "Are youre sure to remove the cloud account?",
            confirm: "Confirm",
            cancel: "Cancel"
          }, {
            '.confirm': function() {
              self.set("controller.isSavingCred", true);
              self.get("controller.model.profile").updateCredential("", "", "").then(function() {
                return self.send("cancelCredential");
              }, function(error) {
                return self.set("controller.isSavingCred", false);
              });
            }
          });
        },
        cancelCredential: function() {
          this.clearCredential();
          return this.get("controller").send("cancelCredential");
        },
        saveScanInt: function() {
          var s;
          s = this.$("#cfgScan").val();
          if (!s) {
            this.set("errorScan", error1);
            return;
          }
          s = parseInt(s);
          if (isNaN(s) || s < 30) {
            this.set("errorScan", error9);
            return;
          }
          this.set("controller.isSavingScanInt", true);
          this.get("controller.model.profile").updateScanInterval(s).then((function(_this) {
            return function() {
              return _this.send("cancelScanInt");
            };
          })(this), (function(_this) {
            return function(error) {
              _this.set("controller.isSavingScanInt", false);
              return _this.set("errorScan", error2);
            };
          })(this));
        },
        cancelScanInt: function() {
          this.$("#cfgScan").val("");
          return this.get("controller").send("cancelScanInt");
        }
      }
    })
  };
});

define('controller/SettingsController',[], function() {
  return {
    SettingsController: Ember.Controller.extend({
      init: function() {
        this._super();
        return this.resetState();
      },
      hasCredential: (function() {
        return !!this.get("model.profile.awsAccount");
      }).property("model.profile.awsAccount"),
      resetState: function() {
        this.set("isEditingName", false);
        this.set("isEditingEmail", false);
        this.set("isEditingPassword", false);
        this.set("isEditingCred", false);
        this.set("isEditingScanInt", false);
        this.set("isShowingAwsHelp", false);
        this.set("isSavingName", false);
        this.set("isSavingEmail", false);
        this.set("isSavingPasword", false);
        this.set("isSavingCred", false);
        this.set("isSavingScanInt", false);
      },
      actions: {

        /*
         UI State
         */
        toggleAwsHelp: function() {
          this.set("isShowingAwsHelp", !this.get("isShowingAwsHelp"));
        },
        editFullName: function() {
          if (!this.get("isSavingName")) {
            this.set('isEditingName', true);
          }
        },
        editEmail: function() {
          if (!this.get("isSavingEmail")) {
            this.set("isEditingEmail", true);
          }
        },
        editPassword: function() {
          if (!this.get("isSavingPassword")) {
            this.set("isEditingPassword", true);
          }
        },
        editScanInt: function() {
          if (!this.get("isSavingScanInt")) {
            this.set("isEditingScanInt", true);
          }
        },
        editCredential: function() {
          if (!this.get("isSavingCred")) {
            this.set("isEditingCred", true);
          }
        },
        cancelFullName: function() {
          this.set('isEditingName', false);
          this.set('isSavingName', false);
        },
        cancelEmail: function() {
          this.set("isEditingEmail", false);
          this.set("isSavingEmail", false);
        },
        cancelPassword: function() {
          this.set("isEditingPassword", false);
          this.set("isSavingPassword", false);
        },
        cancelScanInt: function() {
          this.set("isEditingScanInt", false);
          this.set("isSavingScanInt", false);
        },
        cancelCredential: function() {
          this.set("isShowingAwsHelp", false);
          this.set("isEditingCred", false);
          this.set("isSavingCred", false);
        }
      }
    })
  };
});

define('template/DashboardTpl',[], function(){ var TEMPLATE={};

TEMPLATE.dashboard=(function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","dashboard-warning clearfix");
        var el2 = dom.createTextNode("It seems there is no scanning happening. Make sure you have active rules which are properly defined.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
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
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "activeRules");
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel-content blank");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-cloud");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                No resource has been scanned.\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","res-count");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","type-name");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
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
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element2, [5]);
          var attrMorph0 = dom.createAttrMorph(element3, 'class');
          var morph0 = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
          var morph1 = dom.createMorphAt(element4,0,0);
          var attrMorph1 = dom.createAttrMorph(element4, 'title');
          attribute(env, attrMorph0, element3, "class", concat(env, ["awsicon awsicon-", get(env, context, "resource.icon")]));
          content(env, morph0, context, "resource.count");
          attribute(env, attrMorph1, element4, "title", concat(env, [get(env, context, "resource.name")]));
          content(env, morph1, context, "resource.name");
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
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel-content");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","dashboard-resources");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1]),1,1);
        block(env, morph0, context, "each", [get(env, context, "model.resources")], {"keyword": "resource"}, child0, null);
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","item expand");
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","head");
          var el3 = dom.createTextNode("\n                                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","info");
          var el4 = dom.createTextNode("\n                                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4,"class","fa fa-chevron-right");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("Rule ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class","name");
          var el5 = dom.createTextNode(" ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" has ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class","count");
          var el5 = dom.createTextNode(" ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(" ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" violations\n                                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","toggle-detail tooltip");
          dom.setAttribute(el3,"data-tooltip","Expand all violation");
          var el4 = dom.createElement("i");
          dom.setAttribute(el4,"class","fa fa-list");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
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
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1, 1]);
          var morph0 = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
          var morph1 = dom.createMorphAt(dom.childAt(element1, [5]),1,1);
          var morph2 = dom.createMorphAt(element0,3,3);
          content(env, morph0, context, "rule.name");
          content(env, morph1, context, "rule.count");
          inline(env, morph2, context, "violation-node", [], {"nodes": get(env, context, "rule.nodes")});
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
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel-content");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","violation-list");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 1]),1,1);
        block(env, morph0, context, "each", [get(env, context, "model.violationRules")], {"keyword": "rule"}, child0, null);
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel-content blank");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-smile-o");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                Good News! There is no violations.\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("    ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","panel panel-half dashboard-basic");
      var el2 = dom.createTextNode("\n        ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-title");
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-globe");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("BASIC INFORMATION");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n        ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-content");
      var el3 = dom.createTextNode("\n            ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","overview");
      var el4 = dom.createTextNode("\n                ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","violation");
      var el5 = dom.createTextNode("\n                    ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                    ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","label");
      var el6 = dom.createElement("i");
      dom.setAttribute(el6,"class","fa fa-exclamation-triangle");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("Violation");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n                ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("ul");
      dom.setAttribute(el4,"class","info-list");
      var el5 = dom.createTextNode("\n                    ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      dom.setAttribute(el5,"class","");
      var el6 = dom.createElement("i");
      dom.setAttribute(el6,"class","fa fa-heartbeat");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("Scanner is ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      var el7 = dom.createTextNode("Healthy");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                    ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      dom.setAttribute(el5,"class","");
      var el6 = dom.createElement("i");
      dom.setAttribute(el6,"class","fa fa-bars");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" Active Rules");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                    ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      dom.setAttribute(el5,"class","");
      var el6 = dom.createElement("i");
      dom.setAttribute(el6,"class","fa fa-clock-o");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("Next scan in ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" min");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n    ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","panel panel-half");
      var el2 = dom.createTextNode("\n        ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-title");
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-cloud");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("LAST SCANNED RESOURCE");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("    ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n    ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","panel");
      var el2 = dom.createTextNode("\n        ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-title");
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-exclamation-triangle");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("VIOLATION ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","time");
      var el4 = dom.createTextNode(" (");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(")");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("    ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, element = hooks.element, content = hooks.content, inline = hooks.inline;
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
      var element5 = dom.childAt(fragment, [2, 3, 1]);
      var element6 = dom.childAt(element5, [1, 1]);
      var element7 = dom.childAt(element5, [3]);
      var element8 = dom.childAt(fragment, [6]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(element6,0,0);
      var morph2 = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element7, [5, 2]),0,0);
      var morph4 = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
      var morph5 = dom.createMorphAt(dom.childAt(element8, [1, 2]),1,1);
      var morph6 = dom.createMorphAt(element8,3,3);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "unless", [get(env, context, "model.resources.length")], {}, child0, null);
      element(env, element6, context, "bind-attr", [], {"class": ":circle violationCount:error"});
      content(env, morph1, context, "violationCount");
      block(env, morph2, context, "link-to", ["ruleList"], {}, child1, null);
      content(env, morph3, context, "nextScanTime");
      block(env, morph4, context, "unless", [get(env, context, "model.resources.length")], {}, child2, child3);
      inline(env, morph5, context, "dateFromNow", [get(env, context, "vioDateFromNow")], {});
      block(env, morph6, context, "if", [get(env, context, "model.violationRules.length")], {}, child4, child5);
      return fragment;
    }
  };
}());

TEMPLATE.loading=(function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","workarea");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","workarea-loading");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('view/DashboardView',["template/DashboardTpl"], function(DashboardTemplate) {
  Ember.TEMPLATES["dashboard/loading"] = DashboardTemplate.loading;
  return Ember.View.extend({
    template: DashboardTemplate.dashboard,
    classNames: ["dashboard", "workarea"]
  });
});

define('controller/DashboardController',[], function() {
  return Ember.Controller.extend({
    needs: ["application", "ruleList"],
    nextScanTime: (function() {
      var nextScanTime;
      nextScanTime = Math.round((this.model.get("nextScannedTime") * 1000 - new Date()) / 1000 / 60);
      return nextScanTime;
    }).property("nextScannedTime"),
    activeRules: (function() {
      var rules;
      rules = this.model.get("rules");
      return rules.filterBy("enabled", true).get("length");
    }).property("rules.@each.enabled"),
    actions: {
      initResources: function() {
        return this.store.get("resource");
      },
      showViolation: function(violation) {
        return console.log(violation.toJSON());
      }
    },
    violationCount: (function() {
      var count;
      count = 0;
      this.model.get("violationRules").toArray().forEach(function(rule) {
        return count += rule.get("count");
      });
      return count;
    }).property("violationRules"),
    vioDateFromNow: (function() {
      return App.violationTimestamp;
    }).property(),
    resourceModel: (function() {
      console.log("initialized");
      console.log(this.store.get("resource"));
      console.log("---------------");
      return this.store.get("resource");
    }).property("resources")
  });
});

define('model/SessionModel',["api/ApiRequest"], function(ApiRequest) {
  var SessionInited, __maskString;
  SessionInited = false;
  __maskString = function(text) {
    if (text == null) {
      text = "";
    }
    if (text.length > 6) {
      return (new Array(6)).join("*") + text.substr(-6);
    } else {
      return text;
    }
  };
  return {
    SessionAdapter: DS.Adapter.extend({
      createRecord: function(store, type, session) {
        if (SessionInited) {
          throw new Error("Session is created multiple times.");
        }
        SessionInited = true;
        return ApiRequest("session_login", {
          username: Base64.decode(session.get("usercode")),
          password: session.get("id")
        }).then(function(data) {
          var credential, profile;
          App.user = store.push("user", {
            id: data.id,
            email: Base64.decode(data.email),
            firstName: Base64.decode(data.first_name),
            lastName: Base64.decode(data.last_name),
            username: Base64.decode(data.username),
            usercode: data.username
          });
          profile = data.profile;
          credential = profile.credential || {};
          store.push("profile", {
            user: App.user,
            id: profile.id,
            cfgScanInt: profile.config.scan_interval,
            awsAccount: credential.account_id,
            awsAccessKey: __maskString(credential.access_key),
            awsSecretKey: __maskString(credential.secret_key)
          });
          return {
            id: session.get("id"),
            usercode: session.get("usercode")
          };
        }, function(err) {
          SessionInited = false;
          throw err;
        });
      },
      deleteRecord: function() {
        return ApiRequest("session_logout", {}).then(function() {
          SessionInited = false;
        });
      }
    }),
    SessionModel: DS.Model.extend({
      usercode: DS.attr("string")
    })
  };
});


/*
  Checkout this post to learn how to use ember data
  http://stackoverflow.com/questions/16463958/how-to-use-multiple-models-with-a-single-route-in-emberjs-ember-data
 */
define('model/UserModel',["api/ApiRequest"], function(ApiRequest) {
  var __maskString, _localSet;
  __maskString = function(text) {
    if (text && text.length > 6) {
      return (new Array(6)).join("*") + text.substr(-6);
    } else {
      return text;
    }
  };
  _localSet = function(key, value) {
    var k, v;
    if (value !== void 0) {
      key = {
        key: value
      };
    }
    for (k in key) {
      v = key[k];
      this._data[k] = v;
      this.set(k, v);
    }
  };
  return {
    UserModel: DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      email: DS.attr('string'),
      username: DS.attr('string'),
      usercode: DS.attr('string'),
      rules: DS.hasMany('rule', {
        async: true
      }),

      /*
        The first version of user has multiple profiles and each profile has multiple cloud accounts
        The negotiate version of user has multiple profiles but each profile has only one cloud accounts
        But the current version became single profile and single cloud account... WTF?
       */
      profiles: DS.hasMany('profile'),
      profile: (function() {
        return this.get("profiles").toArray()[0];
      }).property("profiles.@each"),

      /*
        It's more appropriate to update user's data locally only after saving the new value to backend.
        Thus, we use some ApiRequest here ( which should, by following the convention, exist in Adaptor if only ember provie a clean way to save/sync partial data of a model )
       */
      _localSet: _localSet,
      updateName: function(firstName, lastName) {
        return ApiRequest("account_update_account", {
          attributes: {
            first_name: firstName,
            last_name: lastName
          }
        }).then((function(_this) {
          return function() {
            return _this._localSet({
              firstName: firstName,
              lastName: lastName
            });
          };
        })(this));
      },
      updateEmail: function(email, password) {
        return ApiRequest("account_update_account", {
          attributes: {
            email: email,
            password: password
          }
        }).then((function(_this) {
          return function() {
            return _this._localSet({
              email: email
            });
          };
        })(this));
      },
      updatePassword: function(password, new_password) {
        return ApiRequest("account_update_account", {
          attributes: {
            password: password,
            new_password: new_password
          }
        });
      }
    }),
    ProfileModel: DS.Model.extend({
      user: DS.belongsTo("user"),
      cfgScanInt: DS.attr("number"),
      awsAccount: DS.attr("string", {
        defaultValue: ""
      }),
      awsAccessKey: DS.attr("string", {
        defaultValue: ""
      }),
      awsSecretKey: DS.attr("string", {
        defaultValue: ""
      }),

      /*
        Just like user.
       */
      _localSet: _localSet,
      updateScanInterval: function(scanInt) {
        return ApiRequest("profile_update", {
          profile_id: this.get("id"),
          scan_interval: scanInt
        }).then((function(_this) {
          return function() {
            _this._localSet({
              cfgScanInt: scanInt
            });
          };
        })(this));
      },
      updateCredential: function(account_id, access_key, secret_key, provider) {
        if (provider == null) {
          provider = "aws::global";
        }
        return ApiRequest("profile_update_credential", {
          "profile_id": this.get("id"),
          "credential": {
            account_id: account_id,
            access_key: access_key,
            secret_key: secret_key,
            provider: provider
          }
        }).then((function(_this) {
          return function() {
            _this._localSet({
              awsAccount: account_id,
              awsAccessKey: __maskString(access_key),
              awsSecretKey: __maskString(secret_key)
            });
          };
        })(this));
      }
    })
  };
});

define('model/RuleModel',["api/ApiRequest"], function(ApiRequest) {
  var reloadRuleLog, stringValOfContent;
  stringValOfContent = function(content, key) {
    var reg;
    reg = new RegExp(key + '[\\s\\n]+"(([^\\"]|\\\\\\\\|\\\\")+)"');
    return (reg.exec(content) || {})[1] || "";
  };
  reloadRuleLog = function(store, rules) {
    var rule, ruleAuditLog, _i, _len, _results;
    if (!_.isArray(rules)) {
      rules = [rules];
    }
    _results = [];
    for (_i = 0, _len = rules.length; _i < _len; _i++) {
      rule = rules[_i];
      ruleAuditLog = store.getById('ruleAuditLog', rule.id);
      _results.push(ruleAuditLog != null ? ruleAuditLog.reload() : void 0);
    }
    return _results;
  };
  return {
    RuleAdapter: DS.Adapter.extend({
      createRecord: function(store, type, rule) {
        return ApiRequest("rule_create", {
          content: rule.get("content")
        }).then(function(data) {
          return {
            id: data,
            content: rule.get("content"),
            enabled: true,
            urlPart: data
          };
        });
      },
      updateRecord: function(store, type, rule) {
        return ApiRequest("rule_save", {
          rule_id: rule.id,
          content: rule.get("content")
        }).then(function(res) {
          reloadRuleLog(store, rule);
          return null;
        });
      },
      deleteRecord: function(store, type, rule) {
        return ApiRequest("rule_remove", {
          rule_id: rule.id
        });
      },
      findAll: function() {
        return ApiRequest("rule_list", {
          rule_ids: []
        }).then(function(data) {
          return data.map(function(a) {
            a.urlPart = a.id;
            delete a.state;
            return a;
          });
        });
      },
      find: function(store, type, id, snapshot) {
        var d, rule;
        if (id === void 0 || id === null) {
          d = Q.defer();
          d.reject({
            error: ApiRequest.Errors.InvalidParameter,
            msg: "Invalid ruleId when querying, id: " + id
          });
          return d.promise;
        }
        rule = store.findById('rule', id);
        if (rule) {
          return rule;
        }
        return ApiRequest("rule_list", {
          rule_ids: [id]
        }).then(function(data) {
          if (!data || data.length === 0) {
            throw {
              error: ApiRequest.Errors.MissingDataInServer,
              msg: "Can't find rule, id: " + id
            };
          }
          data = data[0];
          data.urlPart = data.id;
          delete data.state;
          return data;
        });
      }
    }),
    RuleModel: DS.Model.extend({
      enabled: DS.attr("boolean", {
        defaultValue: true
      }),
      content: DS.attr("string", {
        defaultValue: ""
      }),
      name: (function() {
        return stringValOfContent(this.get("content"), "name") || "Untitled";
      }).property("content").readOnly(),
      description: (function() {
        return stringValOfContent(this.get("content"), "description");
      }).property("content").readOnly(),
      user: DS.belongsTo("user"),
      urlPart: DS.attr("string", {
        defaultValue: "new"
      }),
      auditLogs: DS.hasMany("ruleAuditLog"),
      toggleCondition: function(rules, enabled) {
        var that;
        that = this;
        rules = rules || [this];
        if (enabled === void 0) {
          enabled = !this.get("enabled");
        }
        return ApiRequest("rule_enable", {
          rule_ids: rules.map(function(a) {
            return a.id;
          }),
          enabled: enabled
        }).then(function() {
          var rule, _i, _len;
          for (_i = 0, _len = rules.length; _i < _len; _i++) {
            rule = rules[_i];
            rule._data.enabled = enabled;
            rule.set("enabled", enabled);
          }
          reloadRuleLog(that.store, rules);
        });
      }
    })
  };
});

define('template/RuleTpl',[], function(){ var TEMPLATE={};

TEMPLATE.loading=(function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","workarea");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","workarea-loading");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}());

TEMPLATE.manager=(function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
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
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      content(env, morph0, context, "outlet");
      return fragment;
    }
  };
}());

TEMPLATE.list=(function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-plus");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("Create");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
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
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","rule-warning");
          var el2 = dom.createTextNode("There is no active rule. To start enforcing policies to your cloud infrastructure, you need to enable at least one rule.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
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
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("button");
              dom.setAttribute(el1,"data-tooltip","Enable / Disable rule");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, element = hooks.element, get = hooks.get;
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
              element(env, element0, context, "bind-attr", [], {"class": ":tooltip :rule-cond item.enabled"});
              element(env, element0, context, "action", ["toggleRuleCond", get(env, context, "item.content")], {"bubbles": false});
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
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","content");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","rule-name");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","rule-desc");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block, element = hooks.element, content = hooks.content;
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
            var element1 = dom.childAt(fragment, [3]);
            var element2 = dom.childAt(fragment, [5]);
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            var morph1 = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
            var morph2 = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
            block(env, morph0, context, "if", [get(env, context, "item.id")], {}, child0, null);
            element(env, element1, context, "bind-attr", [], {"class": ":rule-select :fa item.isSelected:fa-check"});
            element(env, element1, context, "action", ["selectItem", get(env, context, "item")], {"bubbles": false});
            content(env, morph1, context, "item.name");
            content(env, morph2, context, "item.description");
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
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
          block(env, morph0, context, "link-to", ["rule", get(env, context, "item.content")], {"classNames": "edit-rule"}, child0, null);
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
        var el1 = dom.createElement("aside");
        dom.setAttribute(el1,"class","panel rule-list");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2,"class","panel-title");
        var el3 = dom.createTextNode("RULE(");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(") ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","rule-list-control");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","clearfix");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","btn btn-dark rule-action rule-remove");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-trash-o");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","btn btn-dark rule-action");
        var el5 = dom.createTextNode("Enable");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","btn btn-dark rule-action rule-disable");
        var el5 = dom.createTextNode("Disable");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, block = hooks.block, element = hooks.element, get = hooks.get;
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
        var element3 = dom.childAt(fragment, [0]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(element5, [3]);
        var element8 = dom.childAt(element7, [1]);
        var element9 = dom.childAt(element7, [3]);
        var element10 = dom.childAt(element7, [5]);
        var morph0 = dom.createMorphAt(element4,1,1);
        var morph1 = dom.createMorphAt(element4,3,3);
        var morph2 = dom.createMorphAt(element3,5,5);
        var morph3 = dom.createMorphAt(dom.childAt(element3, [7]),1,1);
        var morph4 = dom.createMorphAt(fragment,2,2,contextualElement);
        content(env, morph0, context, "model.length");
        block(env, morph1, context, "link-to", ["rule", "new"], {"classNames": "btn btn-green create-rule"}, child0, null);
        element(env, element6, context, "bind-attr", [], {"class": ":rule-select :fa allRuleSelected:fa-check hasRuleSelected:partial-selected"});
        element(env, element6, context, "action", ["toggleSelect"], {});
        element(env, element8, context, "action", ["deleteRules"], {"target": "view"});
        element(env, element9, context, "action", ["enableSelectedRules"], {});
        element(env, element10, context, "action", ["disableSelectedRules"], {"target": "view"});
        block(env, morph2, context, "unless", [get(env, context, "hasEnabledRule")], {}, child1, null);
        block(env, morph3, context, "each", [get(env, context, "wrappedModel")], {"keyword": "item"}, child2, null);
        content(env, morph4, context, "outlet");
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Create Rule");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
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
        dom.setAttribute(el1,"class","rule-empty");
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","rule-empty-wrap");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h5");
        var el4 = dom.createTextNode("You have not yet created any rule");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("To monitor your cloud infrastructure, you have to create rules.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Check out the document, if you're not familiar with them.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1, 7]),0,0);
        block(env, morph0, context, "link-to", ["rule", "new"], {"classNames": "create-rule"}, child0, null);
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "if", [get(env, context, "model.length")], {}, child0, child1);
      return fragment;
    }
  };
}());

TEMPLATE.rule_list_index=(function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("i");
      dom.setAttribute(el1,"class","fa fa-smile-o");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\nSelect a rule to edit/view detail info.");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}());

TEMPLATE.rule=(function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
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
          inline(env, morph0, context, "violation-detail", [], {"action": "closeViolationDetail", "rule": get(env, context, "model"), "isLoadingAudit": true, "version": get(env, context, "version"), "isAudit": true});
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
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
          inline(env, morph0, context, "violation-detail", [], {"action": "closeViolationDetail", "rule": get(env, context, "model"), "isLoadingViolation": true});
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "if", [get(env, context, "isAudit")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","fa fa-file-text-o");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("CONTENT");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-search");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("SCANNED");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
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
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-clock-o");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("OPERATED");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
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
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
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
        var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
        block(env, morph0, context, "link-to", ["ruleScanLog"], {"tagName": "li"}, child0, null);
        block(env, morph1, context, "link-to", ["ruleAuditLog"], {"tagName": "li"}, child1, null);
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      dom.setAttribute(el1,"class","panel-title");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
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
      var element0 = dom.childAt(fragment, [2]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(element0,1,1);
      var morph2 = dom.createMorphAt(element0,3,3);
      var morph3 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "if", [get(env, context, "showDetailPanel")], {}, child0, null);
      block(env, morph1, context, "link-to", ["rule.index"], {"tagName": "li"}, child1, null);
      block(env, morph2, context, "if", [get(env, context, "model.id")], {}, child2, null);
      content(env, morph3, context, "outlet");
      return fragment;
    }
  };
}());

TEMPLATE.rule_content=(function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-blue");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-floppy-o");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Save");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-blue");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-eye");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Valid");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
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
        var element1 = dom.childAt(fragment, [2]);
        element(env, element0, context, "action", ["saveRule"], {});
        element(env, element1, context, "action", ["validRule"], {});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-blue");
        dom.setAttribute(el1,"disabled","disabled");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-floppy-o");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Save");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","btn btn-blue");
        dom.setAttribute(el1,"disabled","disabled");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-eye");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Valid");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
      dom.setAttribute(el1,"class","rule-toolbar");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      var el3 = dom.createTextNode("Not change yet.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, inline = hooks.inline;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      block(env, morph0, context, "if", [get(env, context, "model.isDirty")], {}, child0, child1);
      inline(env, morph1, context, "rule-editor", [], {"content": get(env, context, "model.content")});
      return fragment;
    }
  };
}());

TEMPLATE.rule_scan_log=(function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
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
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "view", ["scanLogList"], {"controller": get(env, context, "controllers.ruleScanLogList"), "model": get(env, context, "result")});
      return fragment;
    }
  };
}());

TEMPLATE.rule_audit_log=(function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","detail");
          var el2 = dom.createTextNode("Detail ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2,"class","fa fa-chevron-right");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, element = hooks.element;
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
          element(env, element0, context, "action", ["showAuditLog", get(env, context, "model")], {});
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
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tr");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content, block = hooks.block;
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
        var element1 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [5]),0,0);
        inline(env, morph0, context, "interval", [get(env, context, "model.timestamp")], {});
        content(env, morph1, context, "model.event");
        block(env, morph2, context, "if", [get(env, context, "model.hasDetail")], {}, child0, null);
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
      var el1 = dom.createElement("thead");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("tr");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("th");
      var el4 = dom.createTextNode("TIME");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("th");
      var el4 = dom.createTextNode("EVENT");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("th");
      var el4 = dom.createTextNode("DETAIL");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("tbody");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
      block(env, morph0, context, "each", [get(env, context, "result")], {"itemController": "ruleAuditItemLog"}, child0, null);
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('view/RuleView',["template/RuleTpl", "ui/UI.bubblepopup"], function(RuleTpl, popupBubble) {
  Ember.TEMPLATES["ruleManager/loading"] = RuleTpl.loading;
  Ember.TEMPLATES["rule/loading"] = RuleTpl.loading;
  return {
    RuleManagerView: Ember.View.extend({
      template: RuleTpl.manager,
      classNames: ["rule-manager", "workarea"]
    }),
    RuleListView: Ember.View.extend({
      template: RuleTpl.list,
      classNames: ["rule-manager-content"],
      actions: {
        deleteRules: function() {
          var controller, text;
          controller = this.get("controller");
          if (controller.get("allRuleSelected")) {
            text = "Are you sure to delect all rules?";
          } else if (controller.get("hasRuleSelected")) {
            text = "Are you sure to delect selected rules?";
          } else {
            return;
          }
          return popupBubble(this.$('.rule-remove'), {
            title: text,
            confirm: "Confirm",
            cancel: "Cancel"
          }, {
            '.confirm': function() {
              controller.deleteRules();
            }
          });
        },
        disableSelectedRules: function() {
          var controller, text;
          controller = this.get("controller");
          if (controller.isAllSavedRuleSelected()) {
            text = "Are you sure to disable all rules?";
          } else if (controller.hasSavedRuleSelected()) {
            text = "Are you sure to disable selected rules?";
          } else {
            return;
          }
          return popupBubble(this.$('.rule-disable'), {
            title: text,
            confirm: "Confirm",
            cancel: "Cancel"
          }, {
            '.confirm': function() {
              controller.disableSelectedRules();
            }
          });
        }
      }
    }),
    RuleListIndexView: Ember.View.extend({
      template: RuleTpl.rule_list_index,
      classNames: ["rule-select-tip"]
    }),
    RuleView: Ember.View.extend({
      template: RuleTpl.rule,
      classNames: ["rule-view", "panel"],
      tagName: "section"
    }),
    RuleIndexView: Ember.View.extend({
      template: RuleTpl.rule_content,
      classNames: ["panel-content", "rule-content"],
      tagName: "div"
    }),
    RuleScanLogView: Ember.View.extend({
      template: RuleTpl.rule_scan_log,
      classNames: ["table", "rule-log-list"],
      tagName: "table"
    }),
    RuleAuditLogView: Ember.View.extend({
      template: RuleTpl.rule_audit_log,
      classNames: ["table", "rule-log-list"],
      tagName: "table"
    })
  };
});

define('controller/RuleManagerC',[], function() {
  return {
    RuleListController: Ember.ArrayController.extend({
      hasEnabledRule: (function() {
        var savedModels;
        savedModels = this.get("model").filterBy("id");
        return savedModels.length === 0 || savedModels.filterBy("enabled", true).length > 0;
      }).property("model.@each.enabled"),
      mostRuleEnabled: (function() {
        return this.get("model").filterBy("enabled", true).length > this.get("model").get("length") / 2;
      }).property("model.@each.enabled"),
      hasRuleSelected: (function() {
        return this.get("wrappedModel").filterBy("isSelected", true).length > 0;
      }).property("wrappedModel.@each.isSelected"),
      allRuleSelected: (function() {
        return this.get("wrappedModel").filterBy("isSelected", false).length === 0;
      }).property("wrappedModel.@each.isSelected"),
      wrappedModel: (function() {
        return this.get("model").map(function(a) {
          return Ember.ObjectProxy.create({
            content: a,
            isSelected: false
          });
        });
      }).property("model.@each"),
      isAllSavedRuleSelected: function() {
        return this.get("wrappedModel").filterBy("id").filterBy("isSelected", false).length === 0;
      },
      hasSavedRuleSelected: function() {
        return this.get("wrappedModel").filterBy("id").filterBy("isSelected", true).length > 0;
      },
      getSelectedSavedModels: function() {
        var content, selectedRules, wrapped, _i, _len, _ref;
        selectedRules = [];
        _ref = this.get("wrappedModel");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          wrapped = _ref[_i];
          content = wrapped.content;
          if (content.get("id") && wrapped.get("isSelected")) {
            selectedRules.push(content);
          }
        }
        return selectedRules;
      },
      disableSelectedRules: function() {
        var rules;
        rules = this.getSelectedSavedModels();
        if (rules.length) {
          rules[0].toggleCondition(rules, false);
        }
        return false;
      },
      deleteRules: function() {
        var rule, _i, _len, _ref;
        _ref = this.get("wrappedModel").filterBy("isSelected", true);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rule = _ref[_i];
          rule.content.destroyRecord();
        }
      },
      actions: {
        toggleRuleCond: function(rule) {
          rule.toggleCondition();
          return false;
        },
        enableSelectedRules: function() {
          var rules;
          rules = this.getSelectedSavedModels();
          if (rules.length) {
            rules[0].toggleCondition(rules, true);
          }
          return false;
        },
        toggleSelect: function(toState) {
          var wrapped, _i, _len, _ref;
          if (toState === void 0) {
            toState = !this.get("hasRuleSelected");
          }
          _ref = this.get("wrappedModel");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            wrapped = _ref[_i];
            wrapped.set("isSelected", toState);
          }
          return false;
        },
        selectItem: function(item) {
          item.set("isSelected", !item.get("isSelected"));
          return false;
        }
      }
    }),
    RuleController: Ember.Controller.extend({
      showDetailPanel: false,
      actions: {
        closeViolationDetail: function() {
          var self;
          self = this;
          return _.delay(function() {
            return self.set('showDetailPanel', false);
          }, 300);
        }
      }
    }),
    RuleIndexController: Ember.Controller.extend({
      needs: ["application"],
      currentTab: 'content',
      tabContent: (function() {
        return this.get('currentTab') === 'content';
      }).property('currentTab'),
      tabScanned: (function() {
        return this.get('currentTab') === 'scanned';
      }).property('currentTab'),
      tabOperated: (function() {
        return this.get('currentTab') === 'operated';
      }).property('currentTab'),
      onRuleDeleted: (function() {
        if (this.model.get("isDeleted") && this.get("controllers.application.currentRouteName") === "rule") {
          this.replaceRoute("ruleList");
        }
      }).observes("model.isDeleted"),
      actions: {
        saveRule: function() {
          var currentModel, isNew, self;
          self = this;
          currentModel = this.model;
          isNew = !this.model.id;
          return currentModel.save().then(function(res) {
            if (isNew && self.get("controllers.application.currentRouteName") === "rule.index" && currentModel === self.model) {
              self.replaceRoute("rule", currentModel.id);
            }
          });
        },
        validRule: function() {
          this.controllerFor("rule").set('showDetailPanel', true);
          return this.controllerFor("rule").set('isAudit', false);
        },
        toggleTab: function(tab) {
          return this.set('currentTab', tab);
        }
      }
    }),
    RuleScanLogController: Ember.Controller.extend({
      needs: ['ruleScanLogList']
    })
  };
});

define('model/DashboardModel',["api/ApiRequest"], function(ApiRequest) {
  var Models, ResourceMap, resourceLoop, resourceLoopTree;
  ResourceMap = {
    "AWS.EC2.Region": "Region",
    "AWS.EC2.AvailabilityZone": "Availability Zone",
    "AWS.EC2.Instance": "Instance",
    "AWS.EC2.KeyPair": "Key Pair",
    "AWS.EC2.SecurityGroup": "Security Group",
    "AWS.EC2.EIP": "Elastic IP",
    "AWS.EC2.AMI": "AMI",
    "AWS.EC2.EBS.Volume": "Volume",
    "AWS.EC2.EBS.Snapshot": "Snapshot",
    "AWS.ELB": "Load Balancer",
    "AWS.VPC.VPC": "VPC",
    "AWS.VPC.Subnet": "Subnet",
    "AWS.VPC.InternetGateway": "Internet Gateway",
    "AWS.VPC.RouteTable": "Route Table",
    "AWS.VPC.VPNGateway": "VPN Gateway",
    "AWS.VPC.CustomerGateway": "Customer Gateway",
    "AWS.VPC.NetworkInterface": "Network Interface",
    "AWS.VPC.DhcpOptions": "DHCP Options",
    "AWS.VPC.VPNConnection": "VPN Connection",
    "AWS.VPC.NetworkAcl": "Network Acl",
    "AWS.IAM.ServerCertificate": "Server Certificate",
    'AWS.AutoScaling.Group': 'AutoScaling Group',
    'AWS.AutoScaling.LaunchConfiguration': 'Launch Configuration',
    'AWS.AutoScaling.NotificationConfiguration': 'Notification Configuration',
    'AWS.AutoScaling.ScalingPolicy': 'Scaling Policy',
    'AWS.AutoScaling.ScheduledActions': 'Scheduled Actions',
    'AWS.CloudWatch.CloudWatch': 'Cloud Watch',
    "AWS.RDS.DBSubnetGroup": "DB Subnet Group",
    "AWS.RDS.DBInstance": "DB Instance"
  };
  window.ResourceIDMap = {
    "region": "regionName",
    "az": "zoneName",
    "instance": "instanceId",
    "kp": "keyName",
    "sg": "groupId",
    "eip": "publicIp",
    "ami": "imageId",
    "vol": "volumeId",
    "snap": "snapshotId",
    "elb": "loadBalancerName",
    "vpc": "vpcId",
    "subnet": "subnetId",
    "igw": "internetGatewayId",
    "rtb": "routeTableId",
    "vgw": "vpnGatewayId",
    "cgw": "customerGatewayId",
    "eni": "networkInterfaceId",
    "dhcp": "dhcpOptionsId",
    "vpn": "vpnConnectionId",
    "acl": "networkAclId",
    'asg': "AutoScalingGroupARN",
    "dbinstance": "dbInstanceIdentifier",
    "subnetgroup": "dbSubnetGroupName",
    "optionGroup": "optionGroupName",
    "lc": "LaunchConfigurationARN"
  };
  resourceLoop = function(aArray, count) {
    var anotherArray;
    anotherArray = _.map(aArray, function(value) {
      var _ref;
      value.id = value[ResourceIDMap[value.type]];
      value.count = 0;
      console.assert(value.id, "Can't find id attr for " + value.type + " in ResourceIDMap!");
      if ((_ref = value.resource) != null ? _ref.length : void 0) {
        value.resource = resourceLoop(value.resource, count);
        value.resource.forEach(function(val) {
          return value.count += val.count;
        });
      } else {
        value.count = 1;
      }
      return value;
    });
    return anotherArray;
  };
  resourceLoopTree = function(store, aArray) {
    var nodes;
    nodes = [];
    aArray.forEach(function(value) {
      var nodeModel, subNodes, _node, _ref;
      _node = $.extend({}, value);
      delete _node.resource;
      _node.id = value[ResourceIDMap[value.type]];
      if ((_ref = value.resource) != null ? _ref.length : void 0) {
        subNodes = resourceLoopTree(store, value.resource);
        _node.nodes = subNodes;
      }
      nodeModel = store.push("node", _node);
      return nodes.push(store.push("node", nodeModel));
    });
    return nodes;
  };
  Models = {
    DashboardAdapter: DS.Adapter.extend({
      find: function() {
        return Q.all([
          ApiRequest("scheduler_list", {
            profile_ids: [App.user.get("profile").id]
          }), App.user.store.findAll("rule"), App.user.store.findAll("resource"), App.user.store.findAll("violationRule")
        ]).spread(function(result, rules, resources, violationRules) {
          var id, nextScannedTime, _ref;
          nextScannedTime = (_ref = result[0]) != null ? _ref.next_run_time_utc : void 0;
          rules = rules.toArray().map(function(a) {
            return a.id;
          });
          id = 1;
          resources = resources.toArray().map(function(resource) {
            return resource.id;
          });
          violationRules = violationRules.toArray().map(function(violationRule) {
            return violationRule.id;
          });
          return {
            id: id,
            nextScannedTime: nextScannedTime,
            rules: rules,
            resources: resources,
            violationRules: violationRules
          };
        });
      }
    }),
    Dashboard: DS.Model.extend({
      nextScannedTime: DS.attr("number", {
        defaultValue: 0
      }),
      rules: DS.hasMany("rule", {
        async: true
      }),
      resources: DS.hasMany('resource', {
        async: true
      }),
      violationRules: DS.hasMany('violationRule', {
        async: true
      })
    }),
    ResourceAdapter: DS.Adapter.extend({
      findAll: function() {
        return ApiRequest("aws_resource", {
          profile_id: App.user.get("profile").id
        }).then(function(result) {
          var index, resources, value, _i, _len;
          resources = [];
          for (index = _i = 0, _len = result.length; _i < _len; index = ++_i) {
            value = result[index];
            resources.push({
              id: resources.length + 1,
              type: value.type,
              count: value.resource.length || 0
            });
          }
          return resources;
        });
      }
    }),
    Resource: DS.Model.extend({
      type: DS.attr("string"),
      count: DS.attr("number", {
        defaultValue: 0
      }),
      name: (function() {
        return ResourceMap[this.get("type")];
      }).property("type"),
      icon: (function() {
        return this.get("type").replace(/\./g, "");
      }).property("type")
    }),
    ViolationRuleAdapter: DS.Adapter.extend({
      findAll: function(store) {
        return ApiRequest("log_violation", {
          profile_id: App.user.get("profile").id
        }).then(function(result) {
          var key, log, rule, ruleId, rules, value, vioDate, _ref, _ref1;
          rules = [];
          App.violationCache = {};
          vioDate = result.timestamp;
          App.violationTimestamp = vioDate;
          _ref = result.log;
          for (ruleId in _ref) {
            log = _ref[ruleId];
            rule = {};
            App.violationCache[ruleId] = log.resource;
            _ref1 = App.violationCache;
            for (key in _ref1) {
              value = _ref1[key];
              App.violationCache[key] = resourceLoop(value);
            }
            rule.violations = resourceLoopTree(store, log.resource);
            rule.rule = rule.id = ruleId;
            rules.push(rule);
          }
          return rules;
        });
      }
    }),
    ViolationRule: DS.Model.extend({
      name: (function() {
        var _ref;
        return ((_ref = this.get("rule")) != null ? _ref.get("name") : void 0) || "";
      }).property("rule"),
      violations: DS.hasMany('node', {
        async: true
      }),
      rule: DS.belongsTo("rule"),
      nodes: (function() {
        var ruleId;
        ruleId = this.get("id");
        return window.App.violationCache[ruleId];
      }).property(),
      count: (function() {
        var count;
        count = 0;
        this.get("nodes").forEach(function(node) {
          return count += node.count;
        });
        return count;
      }).property()
    }),
    NodeAdapter: DS.Adapter.extend({}),
    Node: DS.Model.extend({
      type: DS.attr("string"),
      nodes: DS.hasMany("node", {
        async: true
      }),
      name: DS.attr("string")
    })
  };
  return Models;
});

define('model/LogModel',["api/ApiRequest"], function(ApiRequest) {
  var defaultPerPageNum;
  defaultPerPageNum = 50;
  return {
    ScanLogPageAdapter: DS.Adapter.extend({
      findAll: function() {
        return this.find();
      },
      find: function(store, type, pageId, snapshot) {
        if (pageId == null) {
          pageId = 1;
        }
        pageId = +pageId;
        return Q.all([
          store.findAll("rule"), ApiRequest("log_filter_log", {
            filter: {
              perPageNum: defaultPerPageNum,
              returnPage: pageId
            }
          })
        ]).spread(function(rules, data) {
          data.id = pageId;
          data.result = _.map(data.result, function(r) {
            var newLog, originLog;
            originLog = r.log;
            newLog = [];
            _.each(originLog, function(ruleLog, ruleId) {
              var rule;
              ruleLog.id = ruleId;
              rule = store.getById('rule', ruleId);
              if (rule) {
                if (rule) {
                  ruleLog.name = rule.get('name');
                }
                return newLog.push(ruleLog);
              }
            });
            r.log = newLog;
            return r;
          });
          return data;
        });
      }
    }),
    RuleScanLogAdapter: DS.Adapter.extend({
      find: function(store, type, ruleId, snapshot) {
        return ApiRequest('log_list', {
          rule_id: ruleId,
          log_type: ['rule']
        }).then(function(data) {
          var result;
          result = data.rule_log;
          result = _.map(result, function(r) {
            r.log = _.map(r.log, function(ruleLog, ruleId) {
              var rule;
              ruleLog.id = ruleId;
              rule = store.getById('rule', ruleId);
              ruleLog.name = rule.get('name');
              return ruleLog;
            });
            return r;
          });
          return {
            id: ruleId,
            result: result
          };
        });
      }
    }),
    RuleAuditLogAdapter: DS.Adapter.extend({
      find: function(store, type, ruleId, snapshot) {
        return ApiRequest('log_list', {
          rule_id: ruleId,
          log_type: ['audit']
        }).then(function(data) {
          var result;
          result = _.map(data.audit_log, function(log) {
            var _ref;
            if ((_ref = log.event) === 'created' || _ref === 'updated') {
              log.hasDetail = true;
            }
            return log;
          });
          return {
            id: ruleId,
            result: result
          };
        });
      }
    }),
    ScanLogPageModel: DS.Model.extend({
      curPageNum: DS.attr('number'),
      totalNum: DS.attr('number'),
      totalPageNum: DS.attr('number'),
      result: DS.attr()
    }),
    RuleScanLogModel: DS.Model.extend({
      result: DS.attr()
    }),
    RuleAuditLogModel: DS.Model.extend({
      result: DS.attr()
    })
  };
});

define('controller/LogController',[], function() {
  var countViolation;
  countViolation = function(resource) {
    var count, res, _i, _len;
    if (!(resource && _.isArray(resource))) {
      return 0;
    }
    count = 0;
    for (_i = 0, _len = resource.length; _i < _len; _i++) {
      res = resource[_i];
      if (res.resource) {
        count += countViolation(res.resource);
      } else {
        count += 1;
      }
    }
    return count;
  };
  return {
    ScanLogPageController: Ember.Controller.extend({
      needs: ['application', 'scanLogList'],
      hasLog: (function() {
        var result;
        result = this.get('model').get('result');
        return result && result.length;
      }).property(),
      showPagination: (function() {
        return this.model.get('totalPageNum') > 1;
      }).property(),
      actions: {
        turnPage: function(pageNumber) {
          return this.transitionToRoute('scanLogPage', pageNumber);
        }
      }
    }),
    ScanLogListController: Ember.ArrayController.extend({
      itemController: 'scanLogItem',
      showDetailPanel: false,
      hasLog: (function() {
        return this.get('model').length;
      }).property(),
      toggleViolationDetail: function(log) {
        var rule;
        if (this.get("showDetailPanel")) {
          return this.set("showDetailPanel", false);
        } else {
          rule = this.store.getById("rule", log.id);
          this.set("vioDetailRule", rule);
          this.set("vioDetailLog", log);
          return this.set("showDetailPanel", true);
        }
      },
      actions: {
        toggleViolationDetail: function(log) {
          return this.toggleViolationDetail(log);
        }
      }
    }),
    RuleScanLogListController: Ember.ArrayController.extend({
      isSingleRule: true,
      itemController: 'scanLogItem',
      showDetailPanel: false,
      hasLog: (function() {
        return this.get('model').length;
      }).property(),
      actions: {
        toggleViolationDetail: function(scanLog) {
          var log, rule;
          if (this.get("showDetailPanel")) {
            return this.set("showDetailPanel", false);
          } else {
            log = scanLog.log[0];
            rule = this.store.getById("rule", log.id);
            this.set("vioDetailRule", rule);
            this.set("vioDetailLog", log);
            return this.set("showDetailPanel", true);
          }
        }
      }
    }),
    ScanLogItemController: Ember.Controller.extend({
      needs: ['application'],
      hide: true,
      isSingleRule: Ember.computed.alias("parentController.isSingleRule"),
      violationCount: (function() {
        var count, model;
        model = this.get('model');
        count = _.reduce(model.log, function(memo, logItem) {
          var violationList, _ref;
          violationList = logItem != null ? (_ref = logItem.filter_result) != null ? _ref.resource : void 0 : void 0;
          if (violationList) {
            return memo + countViolation(violationList);
          } else {
            return memo;
          }
        }, 0);
        return count || 'N/A';
      }).property(),
      singleRuleVersion: (function() {
        var _ref;
        return (_ref = this.get('model').log[0]) != null ? _ref.rule_version : void 0;
      }).property(),
      hasViolation: (function() {
        return this.get('violationCount') !== 'N/A';
      }).property(),
      rules: (function() {
        return this.get('model').log;
      }).property,
      actions: {
        toggleViolation: function() {
          if (this.get('parentController.isSingleRule')) {
            return this.send('toggleViolationDetail', this.get('model'));
          } else {
            return this.set('hide', !this.get('hide'));
          }
        }
      }
    }),
    ScanLogRuleController: Ember.Controller.extend({
      hide: Ember.computed.alias("parentController.hide"),
      violationCount: (function() {
        var model, _ref;
        model = this.get('model');
        return countViolation(model != null ? (_ref = model.filter_result) != null ? _ref.resource : void 0 : void 0);
      }).property(),
      hasViolation: (function() {
        return this.get('violationCount') > 0;
      }).property()
    }),
    RuleAuditItemLogController: Ember.Controller.extend({
      actions: {
        showAuditLog: function(log) {
          var rule, ruleController;
          ruleController = this.controllerFor("rule");
          console.log(log);
          if (ruleController.get("showDetailPanel")) {
            ruleController.set("showDetailPanel", false);
            return ruleController.set("isAudit", false);
          } else {
            rule = ruleController.store.getById("rule", log.rule_id);
            ruleController.set("version", log.rule_version);
            ruleController.set("vioDetailRule", rule);
            ruleController.set("isAudit", true);
            return ruleController.set("showDetailPanel", true);
          }
        }
      }
    })
  };
});

define('template/LogTpl',[], function(){ var TEMPLATE={};

TEMPLATE.index=(function() {
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
        inline(env, morph0, context, "simple-pagination", [], {"action": "turnPage", "totalPage": get(env, context, "model.totalPageNum"), "currentPage": get(env, context, "model.curPageNum")});
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
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
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "view", ["scanLogList"], {"controller": get(env, context, "controllers.scanLogList"), "model": get(env, context, "result")});
      block(env, morph1, context, "if", [get(env, context, "showPagination")], {}, child0, null);
      return fragment;
    }
  };
}());

TEMPLATE.loading=(function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","workarea");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","workarea-loading");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}());

TEMPLATE.scan_log=(function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("th");
        dom.setAttribute(el1,"class","version");
        var el2 = dom.createTextNode("VERSION");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
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
          inline(env, morph0, context, "violation-detail", [], {"rule": get(env, context, "vioDetailRule"), "log": get(env, context, "vioDetailLog"), "action": "toggleViolationDetail"});
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("td");
            dom.setAttribute(el1,"class","version");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
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
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
            content(env, morph0, context, "singleRuleVersion");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("\n                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1,"class","detail");
              var el2 = dom.createTextNode("Detail ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("i");
              dom.setAttribute(el2,"class","fa fa-chevron-right");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, element = hooks.element;
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
              var element6 = dom.childAt(fragment, [1]);
              element(env, element6, context, "action", ["toggleViolation"], {});
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1,"class","fa fa-list detail");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, element = hooks.element;
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
              var element5 = dom.childAt(fragment, [1]);
              element(env, element5, context, "action", ["toggleViolation"], {});
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
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
            block(env, morph0, context, "if", [get(env, context, "isSingleRule")], {}, child0, child1);
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                isHTMLBars: true,
                revision: "Ember@1.11.3",
                blockParams: 0,
                cachedFragment: null,
                hasRendered: false,
                build: function build(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                            ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("li");
                  var el2 = dom.createTextNode("\n                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("div");
                  dom.setAttribute(el2,"class","vio-rule-info");
                  var el3 = dom.createTextNode("Rule ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("span");
                  dom.setAttribute(el3,"class","rule-name");
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode("(");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  var el4 = dom.createTextNode(")");
                  dom.appendChild(el3, el4);
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode(" has ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("span");
                  dom.setAttribute(el3,"class","vio-count");
                  var el4 = dom.createComment("");
                  dom.appendChild(el3, el4);
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode(" violations.");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("span");
                  dom.setAttribute(el2,"class","detail");
                  var el3 = dom.createTextNode("Detail ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createElement("i");
                  dom.setAttribute(el3,"class","fa fa-chevron-right");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                            ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                render: function render(context, env, contextualElement) {
                  var dom = env.dom;
                  var hooks = env.hooks, content = hooks.content, get = hooks.get, element = hooks.element;
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
                  var element0 = dom.childAt(fragment, [1]);
                  var element1 = dom.childAt(element0, [1]);
                  var element2 = dom.childAt(element1, [1]);
                  var element3 = dom.childAt(element0, [3]);
                  var morph0 = dom.createMorphAt(element2,0,0);
                  var morph1 = dom.createMorphAt(element2,2,2);
                  var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
                  content(env, morph0, context, "model.name");
                  content(env, morph1, context, "model.rule_version");
                  content(env, morph2, context, "violationCount");
                  element(env, element3, context, "action", ["toggleViolationDetail", get(env, context, "model")], {});
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
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
                var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
                dom.insertBoundary(fragment, null);
                dom.insertBoundary(fragment, 0);
                block(env, morph0, context, "if", [get(env, context, "hasViolation")], {}, child0, null);
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
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("tr");
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              dom.setAttribute(el2,"colspan","5");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("ul");
              dom.setAttribute(el3,"class","rule-violation-list table tr-detail");
              var el4 = dom.createTextNode("\n");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("                    ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, element = hooks.element, get = hooks.get, block = hooks.block;
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
              var element4 = dom.childAt(fragment, [1, 1]);
              var morph0 = dom.createMorphAt(dom.childAt(element4, [1]),1,1);
              element(env, element4, context, "bind-attr", [], {"class": ":rule-log-detail hide:hide"});
              block(env, morph0, context, "each", [get(env, context, "model.log")], {"itemController": "scanLogRule"}, child0, null);
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
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "unless", [get(env, context, "isSingleRule")], {}, child0, null);
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
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("i");
          dom.setAttribute(el3,"class","fa fa-circle-o");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element, get = hooks.get, block = hooks.block, inline = hooks.inline, content = hooks.content;
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
          var element7 = dom.childAt(fragment, [1]);
          var element8 = dom.childAt(element7, [1]);
          var morph0 = dom.createMorphAt(element7,3,3);
          var morph1 = dom.createMorphAt(dom.childAt(element7, [5]),0,0);
          var morph2 = dom.createMorphAt(dom.childAt(element7, [7]),0,0);
          var morph3 = dom.createMorphAt(dom.childAt(element7, [9]),0,0);
          var morph4 = dom.createMorphAt(fragment,3,3,contextualElement);
          dom.insertBoundary(fragment, null);
          element(env, element8, context, "bind-attr", [], {"class": ":status hasViolation:error"});
          block(env, morph0, context, "if", [get(env, context, "isSingleRule")], {}, child0, null);
          inline(env, morph1, context, "interval", [get(env, context, "model.timestamp")], {});
          content(env, morph2, context, "violationCount");
          block(env, morph3, context, "if", [get(env, context, "hasViolation")], {}, child1, null);
          block(env, morph4, context, "if", [get(env, context, "hasViolation")], {}, child2, null);
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
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tbody");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
        var element9 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element9,1,1);
        var morph1 = dom.createMorphAt(element9,2,2);
        block(env, morph0, context, "if", [get(env, context, "showDetailPanel")], {}, child0, null);
        block(env, morph1, context, "each", [], {}, child1, null);
        return fragment;
      }
    };
  }());
  var child2 = (function() {
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
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","log-empty");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("There is no log yet.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("The result of each scan will appear here.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
      var el1 = dom.createElement("table");
      dom.setAttribute(el1,"class","table rule-log-list");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("thead");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tr");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","status");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","time");
      var el5 = dom.createTextNode("TIME");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","violation");
      var el5 = dom.createTextNode("VIOLATION");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","detail");
      var el5 = dom.createTextNode("DETAIL");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
      var element10 = dom.childAt(fragment, [0]);
      var morph0 = dom.createMorphAt(dom.childAt(element10, [1, 1]),3,3);
      var morph1 = dom.createMorphAt(element10,3,3);
      var morph2 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      block(env, morph0, context, "if", [get(env, context, "isSingleRule")], {}, child0, null);
      block(env, morph1, context, "if", [get(env, context, "hasLog")], {}, child1, null);
      block(env, morph2, context, "unless", [get(env, context, "hasLog")], {}, child2, null);
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('view/LogView',["template/LogTpl"], function(template) {
  Ember.TEMPLATES["scanLog/loading"] = template.loading;
  return {
    ScanLogPageView: Ember.View.extend({
      template: template.index,
      classNames: ["log-viewer", "workarea"]
    }),
    ScanLogListView: Ember.View.extend({
      template: template.scan_log
    })
  };
});

define('component/template/ViolationDetailTpl',[], function(){ var TEMPLATE={};

TEMPLATE.index=(function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","violation-loading");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","workarea-loading");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, get = hooks.get, inline = hooks.inline;
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
        var element2 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element2,0,0);
        element(env, element2, context, "bind-attr", [], {"class": ":vio-rule-content isAudit:audit"});
        inline(env, morph0, context, "rule-editor", [], {"content": get(env, context, "content"), "readonly": true});
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","violation-loading");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","workarea-loading");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
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
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1,"class","violation-list");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          dom.setAttribute(el2,"class","item expand");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","head");
          var el4 = dom.createTextNode("\n                            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","info");
          var el5 = dom.createTextNode("\n                                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("i");
          dom.setAttribute(el5,"class","fa fa-chevron-right");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("Rule ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5,"class","name");
          var el6 = dom.createTextNode(" ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(" has ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5,"class","count");
          var el6 = dom.createTextNode(" ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode(" ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode(" violations\n                            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4,"class","toggle-detail tooltip");
          dom.setAttribute(el4,"data-tooltip","Expand all violation");
          var el5 = dom.createElement("i");
          dom.setAttribute(el5,"class","fa fa-list");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
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
          var element0 = dom.childAt(fragment, [1, 1]);
          var element1 = dom.childAt(element0, [1, 1]);
          var morph0 = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
          var morph1 = dom.createMorphAt(dom.childAt(element1, [5]),1,1);
          var morph2 = dom.createMorphAt(element0,3,3);
          content(env, morph0, context, "rule.name");
          content(env, morph1, context, "violationCount");
          inline(env, morph2, context, "violation-node", [], {"nodes": get(env, context, "nodes")});
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
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","vio-rule-head vio-res");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-exclamation-triangle");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Violating Resource");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
        var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        block(env, morph0, context, "if", [get(env, context, "isLoadingViolation")], {}, child0, child1);
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
      dom.setAttribute(el1,"class","panel panel-float");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-title");
      var el3 = dom.createTextNode("\n        Violation Detail for ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","modal-close");
      var el4 = dom.createTextNode("×");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-content");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","vio-rule-head");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","fa fa-file-text-o");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("Rule content");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content, element = hooks.element, get = hooks.get, block = hooks.block;
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
      var element3 = dom.childAt(fragment, [0]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element4, [2]);
      var element6 = dom.childAt(element3, [3]);
      var morph0 = dom.createMorphAt(element4,1,1);
      var morph1 = dom.createMorphAt(element6,3,3);
      var morph2 = dom.createMorphAt(element6,4,4);
      content(env, morph0, context, "rule.name");
      element(env, element5, context, "action", ["close"], {});
      block(env, morph1, context, "if", [get(env, context, "isLoadingAudit")], {}, child0, child1);
      block(env, morph2, context, "unless", [get(env, context, "isAudit")], {}, child2, null);
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('component/ViolationDetailComponent',["./template/ViolationDetailTpl", "api/ApiRequest"], function(template, ApiRequest) {
  var ViolationDetailComponent, resourceLoop;
  resourceLoop = function(aArray, count) {
    return _.map(aArray, function(value) {
      var _ref;
      value.id = value[window.ResourceIDMap[value.type]];
      value.count = 0;
      console.assert(value.id, "Can't find id attr for " + value.type + " in ResourceIDMap!");
      if ((_ref = value.resource) != null ? _ref.length : void 0) {
        value.resource = resourceLoop(value.resource, count);
        value.resource.forEach(function(val) {
          return value.count += val.count;
        });
      } else {
        value.count = 1;
      }
      return value;
    });
  };
  ViolationDetailComponent = Ember.Component.extend({
    template: template.index,
    classNames: ["violation-detail"],
    nodes: (function() {
      if (this.get("log")) {
        return resourceLoop(this.get("log").filter_result.resource);
      } else {
        return [];
      }
    }).property(),
    content: (function() {
      if (this.get("isLoadingAudit")) {
        return null;
      } else {
        return this.get("rule").get("content");
      }
    }).property(),
    violationCount: (function() {
      var count;
      if (this.get("isLoadingViolation")) {
        return 0;
      }
      count = 0;
      this.get("nodes").forEach(function(rule) {
        return count += rule.count;
      });
      return count;
    }).property(),
    didInsertElement: function() {
      var self;
      _.delay((function(_this) {
        return function() {
          return $(_this.element).find(".panel").addClass("show");
        };
      })(this));
      self = this;
      if (this.get("isLoadingAudit")) {
        return ApiRequest("rule_version", {
          rule_id: self.get("rule").id,
          rule_version: self.get("version")
        }).then(function(result) {
          self.set("content", result.content);
          return self.set("isLoadingAudit", false);
        });
      } else if (this.get("isLoadingViolation")) {
        return ApiRequest("rule_filter", {
          profile_id: App.user.get("profile").id,
          content: this.get("rule").get("content")
        }).then(function(result) {
          self.set("nodes", resourceLoop(result.resource));
          return self.set("isLoadingViolation", false);
        });
      }
    },
    actions: {
      close: function() {
        var self;
        $(this.element).find(".panel").removeClass("show");
        self = this;
        return _.delay((function() {
          return self.sendAction();
        }), 300);
      }
    }
  });
  return ViolationDetailComponent;
});

define('component/template/RuleEditorTpl',[], function(){ var TEMPLATE={};

TEMPLATE.index=(function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('component/RuleEditorComponent',["./template/RuleEditorTpl", "lib/ace/editor"], function(template) {
  var RuleEditorComponent;
  RuleEditorComponent = Ember.Component.extend({
    template: template.index,
    classNames: ["rule-editor"],
    content: (function(key, val) {
      var cursor;
      if (!this.editor) {
        this.preset = val;
        return val;
      }
      if (arguments.length === 1) {
        return this.editor.getSession().getValue();
      }
      if (this.editor.getSession().getValue() !== val) {
        cursor = this.editor.getCursorPosition();
        this.editor.getSession().setValue(val);
        this.editor.moveCursorToPosition(cursor);
      }
      return val;
    }).property(),
    readonly: (function(key, val) {
      if (!this.editor) {
        this.readOnlyMode = val;
        return val;
      }
      if (arguments.length === 1) {
        return this.editor.getReadOnly();
      } else {
        return this.editor.setReadOnly(val);
      }
    }).property(),
    didInsertElement: function() {
      var $editor, CloudFielderCompleter, editor, langTools, that;
      $editor = this.$();
      editor = this.editor = ace.edit($editor[0]);
      editor.setTheme('./theme/monokai');
      editor.getSession().setMode('ace/mode/cloudfielder');
      editor.setShowPrintMargin(false);
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true
      });
      langTools = ace.require('ace/ext/language_tools');
      CloudFielderCompleter = ace.require('ace/autocomplete/cloudfielder_completer');
      langTools.addCompleter(CloudFielderCompleter);
      $editor.on('keyup', function(e) {
        var code;
        code = e.keyCode || e.which;
        if (code === 190 || code === 57 || code === 188 || code === 32) {
          return editor.execCommand('startAutocomplete');
        }
      });
      that = this;
      editor.on('change', function() {
        return that.notifyPropertyChange('content');
      });
      if (this.preset) {
        this.set('content', this.preset);
        this.preset = null;
      }
      if (this.readOnlyMode) {
        return this.editor.setReadOnly(true);
      }
    }
  });
  return RuleEditorComponent;
});

define('lib/simplePagination',[], function() {
	/**
	* simplePagination.js v1.6
	* A simple jQuery pagination plugin.
	* http://flaviusmatis.github.com/simplePagination.js/
	*
	* Copyright 2012, Flavius Matis
	* Released under the MIT license.
	* http://flaviusmatis.github.com/license.html
	*/

	(function($){

		var methods = {
			init: function(options) {
				var o = $.extend({
					items: 1,
					itemsOnPage: 1,
					pages: 0,
					displayedPages: 5,
					edges: 2,
					currentPage: 0,
					hrefTextPrefix: '#page-',
					hrefTextSuffix: '',
					prevText: 'Prev',
					nextText: 'Next',
					ellipseText: '&hellip;',
					cssStyle: 'light-theme',
					listStyle: '',
					labelMap: [],
					selectOnClick: true,
					nextAtFront: false,
					invertPageOrder: false,
					useStartEdge : true,
					useEndEdge : true,
					onPageClick: function(pageNumber, event) {
						// Callback triggered when a page is clicked
						// Page number is given as an optional parameter
					},
					onInit: function() {
						// Callback triggered immediately after initialization
					}
				}, options || {});

				var self = this;

				o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
				if (o.currentPage)
					o.currentPage = o.currentPage - 1;
				else
					o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
				o.halfDisplayed = o.displayedPages / 2;

				this.each(function() {
					self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
					methods._draw.call(self);
				});

				o.onInit();

				return this;
			},

			selectPage: function(page) {
				methods._selectPage.call(this, page - 1);
				return this;
			},

			prevPage: function() {
				var o = this.data('pagination');
				if (!o.invertPageOrder) {
					if (o.currentPage > 0) {
						methods._selectPage.call(this, o.currentPage - 1);
					}
				} else {
					if (o.currentPage < o.pages - 1) {
						methods._selectPage.call(this, o.currentPage + 1);
					}
				}
				return this;
			},

			nextPage: function() {
				var o = this.data('pagination');
				if (!o.invertPageOrder) {
					if (o.currentPage < o.pages - 1) {
						methods._selectPage.call(this, o.currentPage + 1);
					}
				} else {
					if (o.currentPage > 0) {
						methods._selectPage.call(this, o.currentPage - 1);
					}
				}
				return this;
			},

			getPagesCount: function() {
				return this.data('pagination').pages;
			},

			setPagesCount: function(count) {
				this.data('pagination').pages = count;
			},

			getCurrentPage: function () {
				return this.data('pagination').currentPage + 1;
			},

			destroy: function(){
				this.empty();
				return this;
			},

			drawPage: function (page) {
				var o = this.data('pagination');
				o.currentPage = page - 1;
				this.data('pagination', o);
				methods._draw.call(this);
				return this;
			},

			redraw: function(){
				methods._draw.call(this);
				return this;
			},

			disable: function(){
				var o = this.data('pagination');
				o.disabled = true;
				this.data('pagination', o);
				methods._draw.call(this);
				return this;
			},

			enable: function(){
				var o = this.data('pagination');
				o.disabled = false;
				this.data('pagination', o);
				methods._draw.call(this);
				return this;
			},

			updateItems: function (newItems) {
				var o = this.data('pagination');
				o.items = newItems;
				o.pages = methods._getPages(o);
				this.data('pagination', o);
				methods._draw.call(this);
			},

			updateItemsOnPage: function (itemsOnPage) {
				var o = this.data('pagination');
				o.itemsOnPage = itemsOnPage;
				o.pages = methods._getPages(o);
				this.data('pagination', o);
				methods._selectPage.call(this, 0);
				return this;
			},

			_draw: function() {
				var	o = this.data('pagination'),
					interval = methods._getInterval(o),
					i,
					tagName;

				methods.destroy.call(this);

				tagName = (typeof this.prop === 'function') ? this.prop('tagName') : this.attr('tagName');

				var $panel = tagName === 'UL' ? this : $('<ul' + (o.listStyle ? ' class="' + o.listStyle + '"' : '') + '></ul>').appendTo(this);

				// Generate Prev link
				if (o.prevText) {
					methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, {text: o.prevText, classes: 'prev'});
				}

				// Generate Next link (if option set for at front)
				if (o.nextText && o.nextAtFront) {
					methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {text: o.nextText, classes: 'next'});
				}

				// Generate start edges
				if (!o.invertPageOrder) {
					if (interval.start > 0 && o.edges > 0) {
						if(o.useStartEdge) {
							var end = Math.min(o.edges, interval.start);
							for (i = 0; i < end; i++) {
								methods._appendItem.call(this, i);
							}
						}
						if (o.edges < interval.start && (interval.start - o.edges != 1)) {
							$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
						} else if (interval.start - o.edges == 1) {
							methods._appendItem.call(this, o.edges);
						}
					}
				} else {
					if (interval.end < o.pages && o.edges > 0) {
						if(o.useStartEdge) {
							var begin = Math.max(o.pages - o.edges, interval.end);
							for (i = o.pages - 1; i >= begin; i--) {
								methods._appendItem.call(this, i);
							}
						}

						if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
							$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
						} else if (o.pages - o.edges - interval.end == 1) {
							methods._appendItem.call(this, interval.end);
						}
					}
				}

				// Generate interval links
				if (!o.invertPageOrder) {
					for (i = interval.start; i < interval.end; i++) {
						methods._appendItem.call(this, i);
					}
				} else {
					for (i = interval.end - 1; i >= interval.start; i--) {
						methods._appendItem.call(this, i);
					}
				}

				// Generate end edges
				if (!o.invertPageOrder) {
					if (interval.end < o.pages && o.edges > 0) {
						if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
							$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
						} else if (o.pages - o.edges - interval.end == 1) {
							methods._appendItem.call(this, interval.end);
						}
						if(o.useEndEdge) {
							var begin = Math.max(o.pages - o.edges, interval.end);
							for (i = begin; i < o.pages; i++) {
								methods._appendItem.call(this, i);
							}
						}
					}
				} else {
					if (interval.start > 0 && o.edges > 0) {
						if (o.edges < interval.start && (interval.start - o.edges != 1)) {
							$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
						} else if (interval.start - o.edges == 1) {
							methods._appendItem.call(this, o.edges);
						}

						if(o.useEndEdge) {
							var end = Math.min(o.edges, interval.start);
							for (i = end - 1; i >= 0; i--) {
								methods._appendItem.call(this, i);
							}
						}
					}
				}

				// Generate Next link (unless option is set for at front)
				if (o.nextText && !o.nextAtFront) {
					methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {text: o.nextText, classes: 'next'});
				}
			},

			_getPages: function(o) {
				var pages = Math.ceil(o.items / o.itemsOnPage);
				return pages || 1;
			},

			_getInterval: function(o) {
				return {
					start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
					end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
				};
			},

			_appendItem: function(pageIndex, opts) {
				var self = this, options, $link, o = self.data('pagination'), $linkWrapper = $('<li></li>'), $ul = self.find('ul');

				pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);

				options = {
					text: pageIndex + 1,
					classes: ''
				};

				if (o.labelMap.length && o.labelMap[pageIndex]) {
					options.text = o.labelMap[pageIndex];
				}

				options = $.extend(options, opts || {});

				if (pageIndex == o.currentPage || o.disabled) {
					if (o.disabled) {
						$linkWrapper.addClass('disabled');
					} else {
						$linkWrapper.addClass('active');
					}
					$link = $('<span class="current">' + (options.text) + '</span>');
				} else {
					$link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
					$link.click(function(event){
						return methods._selectPage.call(self, pageIndex, event);
					});
				}

				if (options.classes) {
					$link.addClass(options.classes);
				}

				$linkWrapper.append($link);

				if ($ul.length) {
					$ul.append($linkWrapper);
				} else {
					self.append($linkWrapper);
				}
			},

			_selectPage: function(pageIndex, event) {
				var o = this.data('pagination');
				o.currentPage = pageIndex;
				if (o.selectOnClick) {
					methods._draw.call(this);
				}
				return o.onPageClick(pageIndex + 1, event);
			}

		};

		$.fn.pagination = function(method) {

			// Method calling logic
			if (methods[method] && method.charAt(0) != '_') {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' +  method + ' does not exist on jQuery.pagination');
			}

		};

	})(jQuery);


	return jQuery
});

define('component/PaginationComponent',["lib/simplePagination"], function(template) {
  return {
    SimplePaginationComponent: Ember.Component.extend({
      tagName: 'div',
      didInsertElement: function() {
        var that;
        that = this;
        return this.$().pagination({
          pages: that.get('totalPage'),
          currentPage: that.get('currentPage'),
          cssStyle: 'dark-theme',
          hrefTextPrefix: '',
          onPageClick: function(pageNumber, event) {
            that.sendAction('action', pageNumber);
            return false;
          }
        });
      }
    })
  };
});

define('component/template/ViolationTpl',[], function(){ var TEMPLATE={};

TEMPLATE.index=(function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","name");
            var el2 = dom.createTextNode(" ( ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" )");
            dom.appendChild(el1, el2);
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
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
            content(env, morph0, context, "node.name");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" = ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
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
              var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
              var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
              dom.insertBoundary(fragment, 0);
              content(env, morph0, context, "obj.key");
              content(env, morph1, context, "obj.value");
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
            var el1 = dom.createElement("pre");
            var el2 = dom.createElement("code");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 0]),0,0);
            block(env, morph0, context, "each", [get(env, context, "node.eachArray")], {"keyword": "obj"}, child0, null);
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
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","type");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","id");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, block = hooks.block, inline = hooks.inline;
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
          var element0 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
          var morph2 = dom.createMorphAt(element0,5,5);
          var morph3 = dom.createMorphAt(element0,7,7);
          var morph4 = dom.createMorphAt(element0,9,9);
          element(env, element0, context, "bind-attr", [], {"class": "node.resource.length:res:no-more :res-item"});
          content(env, morph0, context, "node.type");
          content(env, morph1, context, "node.id");
          block(env, morph2, context, "if", [get(env, context, "node.name")], {}, child0, null);
          block(env, morph3, context, "if", [get(env, context, "node.eachArray.length")], {}, child1, null);
          inline(env, morph4, context, "violation-node", [], {"nodes": get(env, context, "node.resource")});
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
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","res-list");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        block(env, morph0, context, "each", [get(env, context, "nodes")], {"keyword": "node"}, child0, null);
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "if", [get(env, context, "nodes.length")], {}, child0, null);
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('component/ViolationComponent',["./template/ViolationTpl"], function(template) {
  return Ember.Component.extend({
    template: template.index,
    nodes: (function(key, value) {
      return _.map(value, function(node) {
        var _key, _value;
        node.eachArray = [];
        for (_key in node) {
          _value = node[_key];
          if (_key !== window.ResourceIDMap[node.type] && _key !== "tagSet" && _key !== "regionName" && _key !== "type" && _key !== "id" && _key !== "count" && _key !== "eachArray" && _key !== "resource" && _key !== "vpcId" && _key !== "subnetId" && _key !== "name") {
            if (_.isArray(_value) || _.isObject(_value)) {
              _value = JSON.stringify(_value);
            }
            node.eachArray.push({
              key: _key,
              value: _value
            });
          }
        }
        if (node.tagSet && node.tagSet["Name"]) {
          node.name = node.tagSet["Name"];
        }
        return node;
      });
    }).property()
  });
});

define('core/Helper',[], function() {
  var dateFormat, intervalDate, md5, onClickResList;
  dateFormat = function(date, format) {
    var date_format, key;
    date_format = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (key in date_format) {
      if (new RegExp('(' + key + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date_format[key] : ('00' + date_format[key]).substr(('' + date_format[key]).length));
      }
    }
    return format;
  };
  intervalDate = function(timestamp) {
    var date_time, days, hours, minute, now, second;
    now = new Date();
    date_time = timestamp * 1000;
    second = (now.getTime() - date_time) / 1000;
    days = Math.floor(second / 86400);
    hours = Math.floor(second / 3600);
    minute = Math.floor(second / 60);
    if (days > 30) {
      return dateFormat(new Date(date_time), "yyyy:MM:dd hh:mm:ss");
    } else {
      if (days > 0) {
        return days + " days ago";
      } else if (hours > 0) {
        return hours + " hours ago";
      } else if (minute > 0) {
        return minute + " minutes ago";
      } else {
        return "just now";
      }
    }
  };
  md5 = function(str) {
    var AA, BB, CC, DD, S11, S12, S13, S14, S21, S22, S23, S24, S31, S32, S33, S34, S41, S42, S43, S44, a, addUnsigned, b, c, convertToWordArray, d, k, rotateLeft, temp, wordToHex, x, xl, _F, _FF, _G, _GG, _H, _HH, _I, _II;
    rotateLeft = function(lValue, iShiftBits) {
      return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
    };
    addUnsigned = function(lX, lY) {
      var lResult, lX4, lX8, lY4, lY8;
      lX8 = lX & 0x80000000;
      lY8 = lY & 0x80000000;
      lX4 = lX & 0x40000000;
      lY4 = lY & 0x40000000;
      lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
      if (lX4 & lY4) {
        return lResult ^ 0x80000000 ^ lX8 ^ lY8;
      }
      if (lX4 | lY4) {
        if (lResult & 0x40000000) {
          return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
        } else {
          return lResult ^ 0x40000000 ^ lX8 ^ lY8;
        }
      } else {
        return lResult ^ lX8 ^ lY8;
      }
    };
    _F = function(x, y, z) {
      return x & y | ~x & z;
    };
    _G = function(x, y, z) {
      return x & z | y & ~z;
    };
    _H = function(x, y, z) {
      return x ^ y ^ z;
    };
    _I = function(x, y, z) {
      return y ^ (x | ~z);
    };
    _FF = function(a, b, c, d, x, s, ac) {
      a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
      return addUnsigned(rotateLeft(a, s), b);
    };
    _GG = function(a, b, c, d, x, s, ac) {
      a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
      return addUnsigned(rotateLeft(a, s), b);
    };
    _HH = function(a, b, c, d, x, s, ac) {
      a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
      return addUnsigned(rotateLeft(a, s), b);
    };
    _II = function(a, b, c, d, x, s, ac) {
      a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
      return addUnsigned(rotateLeft(a, s), b);
    };
    convertToWordArray = function(str) {
      var lByteCount, lBytePosition, lMessageLength, lNumberOfWords, lNumberOfWords_temp1, lNumberOfWords_temp2, lWordArray, lWordCount;
      lWordCount = void 0;
      lMessageLength = str.length;
      lNumberOfWords_temp1 = lMessageLength + 8;
      lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
      lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
      lWordArray = new Array(lNumberOfWords - 1);
      lBytePosition = 0;
      lByteCount = 0;
      while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | str.charCodeAt(lByteCount) << lBytePosition;
        lByteCount++;
      }
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
      lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
      lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
      return lWordArray;
    };
    wordToHex = function(lValue) {
      var lByte, lCount, wordToHexValue, wordToHexValue_temp;
      wordToHexValue = '';
      wordToHexValue_temp = '';
      lCount = 0;
      while (lCount <= 3) {
        lByte = lValue >>> lCount * 8 & 255;
        wordToHexValue_temp = '0' + lByte.toString(16);
        wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
        lCount++;
      }
      return wordToHexValue;
    };
    x = [];
    S11 = 7;
    S12 = 12;
    S13 = 17;
    S14 = 22;
    S21 = 5;
    S22 = 9;
    S23 = 14;
    S24 = 20;
    S31 = 4;
    S32 = 11;
    S33 = 16;
    S34 = 23;
    S41 = 6;
    S42 = 10;
    S43 = 15;
    S44 = 21;
    x = convertToWordArray(str);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    xl = x.length;
    k = 0;
    while (k < xl) {
      AA = a;
      BB = b;
      CC = c;
      DD = d;
      a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
      d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
      c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
      b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
      a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
      d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
      c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
      b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
      a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
      d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
      c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
      b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
      a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
      d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
      c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
      b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
      a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
      d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
      c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
      b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
      a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
      d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
      c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
      b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
      a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
      d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
      c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
      b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
      a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
      d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
      c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
      b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
      a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
      d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
      c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
      b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
      a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
      d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
      c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
      b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
      a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
      d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
      c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
      b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
      a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
      d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
      c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
      b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
      a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
      d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
      c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
      b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
      a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
      d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
      c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
      b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
      a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
      d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
      c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
      b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
      a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
      d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
      c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
      b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
      a = addUnsigned(a, AA);
      b = addUnsigned(b, BB);
      c = addUnsigned(c, CC);
      d = addUnsigned(d, DD);
      k += 16;
    }
    temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
    return temp.toLowerCase();
  };
  Ember.Handlebars.helper('interval', function(value) {
    var date, dateInterval, dateObj, dateStr;
    date = Number(value);
    dateObj = new Date(date * 1000);
    dateStr = dateFormat(dateObj, "yyyy-MM-dd hh:mm:ss");
    dateInterval = intervalDate(date);
    return new Ember.Handlebars.SafeString('<span data-tooltip="' + dateObj + '">' + dateStr + ' <span class="date-interval">(' + dateInterval + ')</span></span>');
  });
  Ember.Handlebars.helper('dateFromNow', function(value) {
    var date, dateInterval;
    date = Number(value);
    dateInterval = intervalDate(date);
    console.log(dateInterval);
    return new Ember.Handlebars.SafeString(dateInterval);
  });
  Ember.Handlebars.helper('gravatar', function(email) {
    return new Ember.Handlebars.SafeString('http://www.gravatar.com/avatar/' + md5(email));
  });
  Ember.Handlebars.helper('every', function(context, options) {
    var actualData, k, oArray, _i, _len;
    oArray = [];
    actualData = this.get(context);
    for (_i = 0, _len = actualData.length; _i < _len; _i++) {
      k = actualData[_i];
      oArray.push({
        key: k,
        value: actualData[k]
      });
    }
    this.set(context, oArray);
    return Ember.Handlebars.helpers.each.apply(this, Array.prototype.slice.call(arguments));
  });
  onClickResList = function() {
    $("body").on("click", "li.res-item", function(e) {
      $(this).toggleClass("expand");
      $(this).find(" > div > .res-list").toggleClass("expand");
      return false;
    });
    return $("body").on("click", ".toggle-detail", function(e) {
      var $parentItem, hasOpen;
      $parentItem = $(this).parents("li.item");
      hasOpen = !$parentItem.find("li.res-item.expand").size();
      return $parentItem.find("li.res-item, ul.res-list").toggleClass("expand", hasOpen);
    });
  };
  return onClickResList();
});


/*
----------------------------
  This is the core / entry point / controller of the whole IDE.
----------------------------

  Application acts as namespace in Ember. We store our component defination(a.k.a Class)
  in Application, so that Ember will find the component and wire them up.
 */
define('core/Application',["view/ApplicationView", "core/Router", "core/Store", "route/ApplicationRoute", "route/IndexRoute", "route/DashboardRoute", "route/LogRoute", "route/RuleManagerRoute", "route/SettingsRoute", "view/SettingsView", "controller/SettingsController", "view/DashboardView", "controller/DashboardController", "model/SessionModel", "model/UserModel", "model/RuleModel", "view/RuleView", "controller/RuleManagerC", "model/DashboardModel", "model/LogModel", "controller/LogController", "view/LogView", "component/ViolationDetailComponent", "component/RuleEditorComponent", "component/PaginationComponent", "component/ViolationComponent", "./Helper"], function(ApplicationView, Router, Store, ApplicationRoute, IndexRoute, DashboardRoute, LogRoute, RuleManagerRoute, SettingsRoute, SettingsView, SettingsController, DashboardView, DashboardController, SessionModel, UserModel, RuleModel, RuleView, RuleController, DashboardModel, LogModel, LogController, LogView, ViolationDetailComponent, RuleEditorComponent, PaginationComponent, ViolationComponent) {
  window.App = Ember.Application.extend({
    LOG_TRANSITIONS: true,
    rootElement: "body",
    logout: function() {
      App.session.destroyRecord().then(function() {
        var cValue, ckey, _ref;
        _ref = $.cookie();
        for (ckey in _ref) {
          cValue = _ref[ckey];
          $.removeCookie(ckey, {
            "path": "/"
          });
        }
        window.location.href = "/login";
      });
    }
  }).create();
  App.refreshCSS = function() {
    var date, date_query;
    date = new Date();
    date_query = date.getTime();
    return $('link', document.head[0]).map(function(index, item) {
      item = $(item);
      if (item.attr('rel') === 'stylesheet') {
        return item.attr('href', item.attr('href').replace(/\.css(\?d=[0-9]*)?/ig, '.css?d=' + date_query));
      }
    });
  };
  App.initializer({
    name: "SessionManagment",
    initialize: function(container, app) {
      App.deferReadiness();
      App.session = container.lookup("store:main").createRecord("session", {
        id: $.cookie("session"),
        usercode: $.cookie("usercode")
      });
      return App.session.save().then(function() {
        return App.advanceReadiness();
      }, function() {
        var cValue, ckey, _ref;
        _ref = $.cookie();
        for (ckey in _ref) {
          cValue = _ref[ckey];
          $.removeCookie(ckey, {
            "path": "/"
          });
        }
        window.location.href = "/login";
      });
    }
  });
  App.deferReadiness();
  App.Router.reopen({
    location: 'history'
  });

  /*
  Defination of component
   */
  App.Store = Store;
  App.ApplicationView = ApplicationView;
  App.ApplicationRoute = ApplicationRoute;
  App.IndexRoute = IndexRoute;
  App.DashboardIndexRoute = DashboardRoute;
  App.DashboardIndexView = DashboardView;
  App.DashboardIndexController = DashboardController;
  App.ViolationDetailComponent = ViolationDetailComponent;
  App.RuleEditorComponent = RuleEditorComponent;
  App.ViolationNodeComponent = ViolationComponent;
  Ember.mixin(App, SettingsRoute);
  Ember.mixin(App, SettingsView);
  Ember.mixin(App, SettingsController);
  Ember.mixin(App, RuleManagerRoute);
  Ember.mixin(App, SessionModel);
  Ember.mixin(App, UserModel);
  Ember.mixin(App, LogModel);
  Ember.mixin(App, LogRoute);
  Ember.mixin(App, LogController);
  Ember.mixin(App, LogView);
  Ember.mixin(App, PaginationComponent);
  Ember.mixin(App, RuleModel);
  Ember.mixin(App, RuleView);
  Ember.mixin(App, RuleController);
  Ember.mixin(App, DashboardModel);
  return App;
});


define("core/bundle", function(){});
