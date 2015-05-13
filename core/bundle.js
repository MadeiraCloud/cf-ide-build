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
        var el1 = dom.createTextNode("Dashboard");
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
        var el1 = dom.createTextNode("Rule");
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
        var el1 = dom.createTextNode("Log");
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
        var el1 = dom.createTextNode("Configuration");
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
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","fa fa-bug");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("Debug");
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
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","logo");
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-stumbleupon-circle");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("CloudFielder");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"id","CFWorkArea");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block, content = hooks.content;
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
      var morph0 = dom.createMorphAt(element0,3,3);
      var morph1 = dom.createMorphAt(element0,5,5);
      var morph2 = dom.createMorphAt(element0,7,7);
      var morph3 = dom.createMorphAt(element0,9,9);
      var morph4 = dom.createMorphAt(element0,11,11);
      var morph5 = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
      block(env, morph0, context, "link-to", ["dashboard"], {}, child0, null);
      block(env, morph1, context, "link-to", ["ruleManager"], {}, child1, null);
      block(env, morph2, context, "link-to", ["logViewer"], {}, child2, null);
      block(env, morph3, context, "link-to", ["settings"], {}, child3, null);
      block(env, morph4, context, "link-to", ["debugger"], {}, child4, null);
      content(env, morph5, context, "outlet");
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
    this.route("logViewer", {
      path: "/logs"
    });
    this.route("settings", {
      path: "/settings"
    });
    return this.route("ruleManager", {
      path: "/rules"
    }, function() {
      return this.resource("ruleList", {
        path: "/0"
      }, function() {
        return this.resource("rule", {
          path: ":id"
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
        var cValue, ckey, _ref;
        console.log("Global error route is activated, make sure it's not because any unhandled error from the substate of application.", arguments);
        debugger;
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

define('route/LogViewerRoute',[], function() {
  return Ember.Route.extend({
    model: function() {
      return {};
    }
  });
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
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","workarea-header");
      var el2 = dom.createTextNode("RULE");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","work-area-content settings-form");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","settings-content settings-form");
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("fieldset");
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("header");
      var el5 = dom.createTextNode("Account");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("section");
      dom.setAttribute(el4,"class","entry");
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Username");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","static");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n    ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("section");
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","account-key-id");
      var el6 = dom.createTextNode("Name");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","static");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","dynamic");
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap half");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","text");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgFirstName");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createTextNode("First Name");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap half");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","text");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgLastName");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createTextNode("Last Name");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","action-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      var el8 = dom.createTextNode("Save");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      dom.setAttribute(el7,"class","link");
      var el8 = dom.createTextNode("Cancel");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n      ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n    ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("section");
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Email");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","static");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","dynamic");
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","text");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgEmail");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createTextNode("New Email");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","password");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgEmailPass");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createTextNode("Confirm with password");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","action-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      var el8 = dom.createTextNode("Update Email");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      dom.setAttribute(el7,"class","link");
      var el8 = dom.createTextNode("Cancel");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n      ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n    ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("section");
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Password");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","static font-mono");
      var el6 = dom.createTextNode("******");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","dynamic");
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","password");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgPass0");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createTextNode("Old password");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","password");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgPass1");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createTextNode("New password");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","password");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgPass2");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createTextNode("Confirm new password");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","action-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      var el8 = dom.createTextNode("Update Password");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      dom.setAttribute(el7,"class","link");
      var el8 = dom.createTextNode("Cancel");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n      ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n    ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n  ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n  ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("fieldset");
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("header");
      var el5 = dom.createTextNode("Scan Configuration");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("section");
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Scan Interval");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","static");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" min");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","dynamic");
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","text");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgScan");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createTextNode("Scan Interval ( miniute )");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","action-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      var el8 = dom.createTextNode("Save");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      dom.setAttribute(el7,"class","link");
      var el8 = dom.createTextNode("Cancel");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n      ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n    ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n    ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("section");
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","account-key-id");
      var el6 = dom.createTextNode("Cloud Account");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("      ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","dynamic");
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","text");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgAwsAccount");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createElement("i");
      dom.setAttribute(el8,"class","fa fa-user-secret");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("AWS Account Number");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","text");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgAwsAccess");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createElement("i");
      dom.setAttribute(el8,"class","fa fa-key");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("AWS Access Key");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","input-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("input");
      dom.setAttribute(el7,"type","text");
      dom.setAttribute(el7,"required","required");
      dom.setAttribute(el7,"id","cfgAwsPrivate");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("label");
      var el8 = dom.createElement("i");
      dom.setAttribute(el8,"class","fa fa-lock");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("AWS Private Key");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","error");
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("div");
      dom.setAttribute(el6,"class","action-wrap");
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      var el8 = dom.createTextNode("Link Account");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("button");
      dom.setAttribute(el7,"class","link");
      var el8 = dom.createTextNode("Cancel");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n        ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n\n        ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("button");
      dom.setAttribute(el6,"class","link");
      dom.setAttribute(el6,"style","margin-top:1em;");
      var el7 = dom.createTextNode("Having trouble geting the account info?");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n      ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("    ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n  ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
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
      var element2 = dom.childAt(fragment, [2, 1]);
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
      classNames: ["settings"],
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
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" TODO: Will Change here. ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","dashboard-warning clearfix");
        var el2 = dom.createTextNode("You are looking at a sample dashboard. ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("Set up cloud account");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" to get started with policy enforcement right away");
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
        var element8 = dom.childAt(fragment, [3, 1]);
        element(env, element8, context, "action", ["setup"], {});
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
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","panel-content blank");
          var el2 = dom.createTextNode("No resource has been scanned.");
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
            var el2 = dom.createElement("img");
            dom.setAttribute(el2,"alt","");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","res-count");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","type-name");
            var el3 = dom.createComment("");
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
            var attrMorph0 = dom.createAttrMorph(element3, 'src');
            var morph0 = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
            var morph1 = dom.createMorphAt(element4,0,0);
            var attrMorph1 = dom.createAttrMorph(element4, 'title');
            attribute(env, attrMorph0, element3, "src", concat(env, [get(env, context, "resource.type"), ".png"]));
            content(env, morph0, context, "resource.count");
            attribute(env, attrMorph1, element4, "title", concat(env, [get(env, context, "resource.type")]));
            content(env, morph1, context, "resource.type");
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
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","panel-content");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2,"class","dashboard-resources");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("                    ");
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
            var el1 = dom.createTextNode("                            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1,"class","vio-res-item");
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("dl");
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("dt");
            var el4 = dom.createTextNode("VPC");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("dd");
            var el4 = dom.createTextNode("vpc-3jf3nsd");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("dt");
            var el4 = dom.createTextNode("INSTANCE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("dd");
            var el4 = dom.createTextNode("i-dfjienfd");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4,"class","res-name");
            var el5 = dom.createTextNode("(web-server-1)");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("dt");
            var el4 = dom.createTextNode("SUBNET");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("dd");
            var el4 = dom.createTextNode("subnet-34jdfad");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("dt");
            var el4 = dom.createTextNode("ROUTE TABLE");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("dd");
            var el4 = dom.createTextNode("rtb-a34ndfe");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2,"href","#");
            dom.setAttribute(el2,"class","btn-vio-detail");
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
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1,"class","vio-rule-item");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","vio-rule-info");
          var el3 = dom.createTextNode("Rule ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"class","rule-name");
          var el4 = dom.createComment("");
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
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2,"class","vio-res");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("                        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
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
          var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
          var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
          var morph2 = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
          content(env, morph0, context, "violationRule.name");
          content(env, morph1, context, "violationRule.violations.length");
          block(env, morph2, context, "each", [get(env, context, "violationRule.violations")], {"keyword": "violation"}, child0, null);
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
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","panel panel-half");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-title");
        var el3 = dom.createTextNode("BASIC INFORMATION");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-content");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","violation");
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","circle");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","label");
        var el5 = dom.createTextNode("Violation");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","info-list");
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-heartbeat");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("Scanner is ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        var el6 = dom.createTextNode("Healthy");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-bars");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" Active Rules");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-clock-o");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("Next scan in ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" min");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","panel panel-half");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-title");
        var el3 = dom.createTextNode("LAST SCANNED RESOURCE");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","panel");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-title");
        var el3 = dom.createTextNode("VIOLATION ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","count");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-content");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","vio-rule vio-rule-summary");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
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
        var element5 = dom.childAt(fragment, [2, 3]);
        var element6 = dom.childAt(element5, [3]);
        var element7 = dom.childAt(fragment, [6]);
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(element5, [1, 1]),0,0);
        var morph2 = dom.createMorphAt(dom.childAt(element6, [3, 1]),0,0);
        var morph3 = dom.createMorphAt(dom.childAt(element6, [5, 2]),0,0);
        var morph4 = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
        var morph5 = dom.createMorphAt(dom.childAt(element7, [1, 1]),0,0);
        var morph6 = dom.createMorphAt(dom.childAt(element7, [3, 1]),1,1);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "unless", [get(env, context, "model.resources.length")], {}, child0, null);
        content(env, morph1, context, "model.violationCount");
        content(env, morph2, context, "activeRules");
        content(env, morph3, context, "nextScanTime");
        block(env, morph4, context, "unless", [get(env, context, "model.resources.length")], {}, child1, child2);
        content(env, morph5, context, "model.violationCount");
        block(env, morph6, context, "each", [get(env, context, "model.violationRules")], {"keyword": "violationRule"}, child3, null);
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
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","workarea-header");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h2");
      dom.setAttribute(el2,"class","header-title");
      var el3 = dom.createTextNode("Dashboard");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","work-area-content");
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
      block(env, morph0, context, "unless", [true], {}, child0, child1);
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
      dom.setAttribute(el1,"class","workarea-loading");
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
    classNames: ["dashboard"]
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
      }
    },
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
    if (text.length > 6) {
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
  var stringValOfContent;
  stringValOfContent = function(content, key) {
    var reg;
    reg = new RegExp(key + '[\\s\\n]+"(([^\\"]|\\\\\\\\|\\\\")+)"');
    return (reg.exec(content) || {})[1] || "";
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
        var d;
        if (id === void 0 || id === null) {
          d = Q.defer();
          d.reject({
            error: ApiRequest.Errors.InvalidParameter,
            msg: "Invalid ruleId when querying, id: " + id
          });
          return d.promise;
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
      toggleCondition: function(rules, enabled) {
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
      dom.setAttribute(el1,"class","workarea-loading");
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
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","workarea-header");
      var el2 = dom.createTextNode("RULE");
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
      var morph0 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
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
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","rule-viewer");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("aside");
        dom.setAttribute(el2,"class","rule-list");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("header");
        var el4 = dom.createTextNode("RULE(");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(") ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","rule-list-control");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","clearfix");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","rule-action rule-remove");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-trash-o");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","rule-action");
        var el6 = dom.createTextNode("Enable");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","rule-action rule-disable");
        var el6 = dom.createTextNode("Disable");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element4, [3]);
        var element7 = dom.childAt(element6, [1]);
        var element8 = dom.childAt(element6, [3]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element8, [3]);
        var element11 = dom.childAt(element8, [5]);
        var morph0 = dom.createMorphAt(element5,1,1);
        var morph1 = dom.createMorphAt(element5,3,3);
        var morph2 = dom.createMorphAt(element4,5,5);
        var morph3 = dom.createMorphAt(dom.childAt(element4, [7]),1,1);
        var morph4 = dom.createMorphAt(element3,3,3);
        content(env, morph0, context, "model.length");
        block(env, morph1, context, "link-to", ["rule", "new"], {"classNames": "create-rule"}, child0, null);
        element(env, element7, context, "bind-attr", [], {"class": ":rule-select :fa allRuleSelected:fa-check hasRuleSelected:partial-selected"});
        element(env, element7, context, "action", ["toggleSelect"], {});
        element(env, element9, context, "action", ["deleteRules"], {"target": "view"});
        element(env, element10, context, "action", ["enableSelectedRules"], {});
        element(env, element11, context, "action", ["disableSelectedRules"], {"target": "view"});
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

TEMPLATE.item=(function() {
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
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
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
        dom.insertBoundary(fragment, 0);
        inline(env, morph0, context, "violation-detail", [], {"action": "closeViolationDetail"});
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
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Save");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
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
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(fragment, [3]);
        element(env, element0, context, "action", ["saveRule"], {});
        element(env, element1, context, "action", ["validRule"], {});
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
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"disabled","disabled");
        var el2 = dom.createTextNode("Save");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"disabled","disabled");
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
  var child3 = (function() {
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
        inline(env, morph0, context, "rule-editor", [], {"content": get(env, context, "model.content")});
        return fragment;
      }
    };
  }());
  var child4 = (function() {
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
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","table rule-log-list");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4,"class","sortable");
        var el5 = dom.createTextNode("TIME");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4,"class","sortable");
        var el5 = dom.createTextNode("EVENT");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        dom.setAttribute(el4,"class","sortable");
        var el5 = dom.createTextNode("VIOLATION");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("DETAIL");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","status");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("2015.3.31 12:32");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Scheduled Scan");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("N/A");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","status error");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("2015.3.31 8:32");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Scheduled Scan");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("4");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Detail ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","fa fa-chevron-right");
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
      var el1 = dom.createElement("ul");
      dom.setAttribute(el1,"class","panel-title");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("\n        CONTENT\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("LOG");
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
      var hooks = env.hooks, get = hooks.get, block = hooks.block, element = hooks.element;
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
      var element4 = dom.childAt(element2, [3]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(element3,1,1);
      var morph2 = dom.createMorphAt(fragment,3,3,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "if", [get(env, context, "showViolationDetail")], {}, child0, null);
      element(env, element3, context, "bind-attr", [], {"class": "isContent:active"});
      element(env, element3, context, "action", ["toggleContent"], {});
      block(env, morph1, context, "if", [get(env, context, "model.isDirty")], {}, child1, child2);
      element(env, element4, context, "bind-attr", [], {"class": "isContent::active"});
      element(env, element4, context, "action", ["toggleLog"], {});
      block(env, morph2, context, "if", [get(env, context, "isContent")], {}, child3, child4);
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('view/RuleView',["template/RuleTpl", "ui/UI.bubblepopup"], function(RuleTpl, popupBubble) {
  Ember.TEMPLATES["ruleManager/loading"] = RuleTpl.loading;
  return {
    RuleManagerView: Ember.View.extend({
      template: RuleTpl.manager,
      classNames: ["rule-manager"]
    }),
    RuleListView: Ember.View.extend({
      template: RuleTpl.list,
      classNames: ["work-area-content"],
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
    RuleView: Ember.View.extend({
      template: RuleTpl.item,
      classNames: ["rule-content", "panel"],
      tagName: "section"
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
      needs: ["application"],
      isContent: true,
      showViolationDetail: false,
      onRuleDeleted: (function() {
        if (this.model.get("isDeleted") && this.get("controllers.application.currentRouteName") === "rule") {
          this.replaceRoute("ruleList");
        }
      }).observes("model.isDeleted"),
      actions: {
        saveRule: function() {
          var currentModel, self;
          self = this;
          currentModel = this.model;
          return currentModel.save().then(function() {
            if (self.get("controllers.application.currentRouteName") === "rule" && currentModel === self.model) {
              self.replaceRoute("rule", {
                id: currentModel.id
              });
            }
          });
        },
        validRule: function() {
          return this.set('showViolationDetail', true);
        },
        closeViolationDetail: function() {
          return this.set('showViolationDetail', false);
        },
        toggleContent: function() {
          return this.set('isContent', true);
        },
        toggleLog: function() {
          return this.set('isContent', false);
        }
      }
    })
  };
});

define('model/DashboardModel',["api/ApiRequest"], function(ApiRequest) {
  var Models;
  Models = {
    DashboardAdapter: DS.Adapter.extend({
      find: function() {
        return Q.all([
          ApiRequest("scheduler_list", {
            profile_ids: [App.user.get("profile").id]
          }), App.user.store.findAll("rule"), App.user.store.findAll("resource")
        ]).spread(function(result, rules, resources) {
          var id, nextScannedTime;
          nextScannedTime = result[0]["next_run_time_utc"];
          rules = rules.toArray().map(function(a) {
            return a.id;
          });
          id = 1;
          resources = resources.toArray().map(function(resource) {
            return resource.id;
          });
          return {
            id: id,
            nextScannedTime: nextScannedTime,
            rules: rules,
            resources: resources
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
          console.log(result);
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
      })
    }),
    ViolationRuleAdapter: DS.Adapter.extend({
      find: function() {
        return {
          id: 1,
          name: "no-idle-eip",
          violations: [1]
        };
      }
    }),
    ViolationRule: DS.Model.extend({
      name: DS.attr("string"),
      violations: DS.hasMany('violation', {
        async: true
      })
    }),
    ViolationAdapter: DS.Adapter.extend({
      find: function() {
        return {
          id: 1,
          type: "instance",
          resId: "i-abcdef",
          name: "host-1"
        };
      }
    }),
    Violation: DS.Model.extend({
      type: DS.attr("string"),
      resId: DS.attr("string"),
      name: DS.attr("string")
    })
  };
  return Models;
});

define('template/LogTpl',[], function(){ var TEMPLATE={};

TEMPLATE.index=(function() {
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
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","time sortable");
      var el5 = dom.createTextNode("TIME");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","evvent sortable");
      var el5 = dom.createTextNode("EVENT");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","violation sortable");
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
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("tbody");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tr");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","status");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("2015.3.31 12:32");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("Scheduled Scan");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("N/A");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tr");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","status error");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("2015.3.31 8:32");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("Scheduled Scan");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("4");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","fa fa-list");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tr");
      dom.setAttribute(el3,"class","rule-log-detail");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      dom.setAttribute(el4,"colspan","5");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","rule-violation-list table tr-detail");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","vio-rule-info");
      var el8 = dom.createTextNode("Rule ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","rule-name");
      var el9 = dom.createTextNode("no-idle-eip");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" has ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","vio-count");
      var el9 = dom.createTextNode("2");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" violations.");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("span");
      dom.setAttribute(el7,"class","detail");
      var el8 = dom.createTextNode("Detail ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("i");
      dom.setAttribute(el8,"class","fa fa-chevron-right");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","vio-rule-info");
      var el8 = dom.createTextNode("Rule ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","rule-name");
      var el9 = dom.createTextNode("no-idle-eip");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" has ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","vio-count");
      var el9 = dom.createTextNode("2");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" violations.");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("span");
      dom.setAttribute(el7,"class","detail");
      var el8 = dom.createTextNode("Detail ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("i");
      dom.setAttribute(el8,"class","fa fa-chevron-right");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("div");
      dom.setAttribute(el7,"class","vio-rule-info");
      var el8 = dom.createTextNode("Rule ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","rule-name");
      var el9 = dom.createTextNode("no-idle-eip");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" has ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("span");
      dom.setAttribute(el8,"class","vio-count");
      var el9 = dom.createTextNode("2");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode(" violations.");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                        ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("span");
      dom.setAttribute(el7,"class","detail");
      var el8 = dom.createTextNode("Detail ");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("i");
      dom.setAttribute(el8,"class","fa fa-chevron-right");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tr");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","status error");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("2015.3.31 8:32");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("Scheduled Scan");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("4");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","fa fa-list");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tr");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","status error");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("2015.3.31 8:32");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("Scheduled Scan");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createTextNode("4");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("td");
      var el5 = dom.createElement("i");
      dom.setAttribute(el5,"class","fa fa-list");
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
define('view/LogView',["template/LogTpl"], function(template) {
  return Ember.View.extend({
    template: template.index,
    classNames: ["log-viewer"]
  });
});

define('component/template/ViolationDetailTpl',[], function(){ var TEMPLATE={};

TEMPLATE.index=(function() {
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
      var el3 = dom.createTextNode("\n        Violation Detail");
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
      dom.setAttribute(el3,"class","vio-rule-info");
      var el4 = dom.createTextNode("Rule ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","rule-name");
      var el5 = dom.createTextNode("no-idle-eip");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" has ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","vio-count");
      var el5 = dom.createTextNode("2");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" violations.");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","vio-rule-head");
      var el4 = dom.createTextNode("Rule content");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","vio-rule-content");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","vio-rule-head");
      var el4 = dom.createTextNode("Violating Resource #1");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("ul");
      dom.setAttribute(el3,"class","vio-rule vio-rule-summary");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      dom.setAttribute(el4,"class","vio-rule-item");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","vio-res vio-detail");
      var el6 = dom.createTextNode("\n                	");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("li");
      dom.setAttribute(el6,"class","vio-res-item");
      var el7 = dom.createTextNode("\n                		");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("dl");
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("dt");
      var el9 = dom.createTextNode("VPC");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("dd");
      var el9 = dom.createTextNode("vpc-3jf3nsd");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                		");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                		");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("dl");
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("dt");
      var el9 = dom.createTextNode("INSTANCE");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("dd");
      var el9 = dom.createTextNode("i-dfjienfd");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("span");
      dom.setAttribute(el9,"class","res-name");
      var el10 = dom.createTextNode("(web-server-1)\n                			");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n                			");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("div");
      dom.setAttribute(el8,"class","vio-res-filter");
      var el9 = dom.createTextNode("\n                				");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("p");
      var el10 = dom.createElement("span");
      dom.setAttribute(el10,"class","var-name");
      var el11 = dom.createTextNode("tags[\"type\"]");
      dom.appendChild(el10, el11);
      dom.appendChild(el9, el10);
      var el10 = dom.createTextNode(" = ");
      dom.appendChild(el9, el10);
      var el10 = dom.createElement("span");
      dom.setAttribute(el10,"class","var-value");
      var el11 = dom.createTextNode("private\"");
      dom.appendChild(el10, el11);
      dom.appendChild(el9, el10);
      var el10 = dom.createTextNode(",");
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n                				");
      dom.appendChild(el8, el9);
      var el9 = dom.createElement("p");
      var el10 = dom.createElement("span");
      dom.setAttribute(el10,"class","func-name");
      var el11 = dom.createTextNode("hasSGRule(");
      dom.appendChild(el10, el11);
      dom.appendChild(el9, el10);
      var el10 = dom.createElement("span");
      dom.setAttribute(el10,"class","var-value");
      var el11 = dom.createTextNode("in,22");
      dom.appendChild(el10, el11);
      dom.appendChild(el9, el10);
      var el10 = dom.createElement("span");
      dom.setAttribute(el10,"class","func-name");
      var el11 = dom.createTextNode(")");
      dom.appendChild(el10, el11);
      dom.appendChild(el9, el10);
      dom.appendChild(el8, el9);
      var el9 = dom.createTextNode("\n                			");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                		");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                		");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("dl");
      dom.setAttribute(el7,"class","active");
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("dt");
      var el9 = dom.createTextNode("SUBNET");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("dd");
      var el9 = dom.createTextNode("subnet-34jdfad");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                		");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                		");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("dl");
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("dt");
      var el9 = dom.createTextNode("ROUTE TABLE");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                			");
      dom.appendChild(el7, el8);
      var el8 = dom.createElement("dd");
      var el9 = dom.createTextNode("rtb-a34ndfe");
      dom.appendChild(el8, el9);
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n                		");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n                	");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
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
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, inline = hooks.inline;
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
      var element1 = dom.childAt(element0, [1, 1]);
      var morph0 = dom.createMorphAt(dom.childAt(element0, [3, 5]),0,0);
      element(env, element1, context, "action", ["close"], {});
      inline(env, morph0, context, "rule-editor", [], {"content": "if region.instance do email()", "readonly": true});
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('component/ViolationDetailComponent',["./template/ViolationDetailTpl"], function(template) {
  var ViolationDetailComponent;
  ViolationDetailComponent = Ember.Component.extend({
    template: template.index,
    classNames: ["violation-detail"],
    didInsertElement: function() {
      return _.delay((function(_this) {
        return function() {
          return $(_this.element).find(".panel").addClass("show");
        };
      })(this));
    },
    actions: {
      close: function() {
        $(this.element).find(".panel").removeClass("show");
        return this.sendAction();
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
      var el1 = dom.createElement("article");
      dom.setAttribute(el1,"class","editor");
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
define('component/RuleEditorComponent',["./template/RuleEditorTpl", "lib/ace/editor"], function(template) {
  var RuleEditorComponent;
  RuleEditorComponent = Ember.Component.extend({
    template: template.index,
    classNames: ["ace-component"],
    content: (function(key, val) {
      var cursor;
      if (!this.editor) {
        this.preset = val;
        return val;
      }
      if (arguments.length === 1) {
        return this.editor.getSession().getValue();
      }
      cursor = this.editor.getCursorPosition();
      this.editor.getSession().setValue(val);
      this.editor.moveCursorToPosition(cursor);
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
      $editor = this.$('.editor');
      editor = this.editor = ace.edit($editor.get(0));
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


/*
----------------------------
  This is the core / entry point / controller of the whole IDE.
----------------------------

  Application acts as namespace in Ember. We store our component defination(a.k.a Class)
  in Application, so that Ember will find the component and wire them up.
 */
define('core/Application',["view/ApplicationView", "core/Router", "core/Store", "route/ApplicationRoute", "route/IndexRoute", "route/DashboardRoute", "route/LogViewerRoute", "route/RuleManagerRoute", "route/SettingsRoute", "view/SettingsView", "controller/SettingsController", "view/DashboardView", "controller/DashboardController", "model/SessionModel", "model/UserModel", "model/RuleModel", "view/RuleView", "controller/RuleManagerC", "model/DashboardModel", "view/LogView", "component/ViolationDetailComponent", "component/RuleEditorComponent"], function(ApplicationView, Router, Store, ApplicationRoute, IndexRoute, DashboardRoute, LogViewerRoute, RuleManagerRoute, SettingsRoute, SettingsView, SettingsController, DashboardView, DashboardController, SessionModel, UserModel, RuleModel, RuleView, RuleController, DashboardModel, LogViewerView, ViolationDetailComponent, RuleEditorComponent) {
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
  App.LogViewerRoute = LogViewerRoute;
  App.LogViewerView = LogViewerView;
  App.ViolationDetailComponent = ViolationDetailComponent;
  App.RuleEditorComponent = RuleEditorComponent;
  Ember.mixin(App, SettingsRoute);
  Ember.mixin(App, SettingsView);
  Ember.mixin(App, SettingsController);
  Ember.mixin(App, RuleManagerRoute);
  Ember.mixin(App, SessionModel);
  Ember.mixin(App, UserModel);
  Ember.mixin(App, RuleModel);
  Ember.mixin(App, RuleView);
  Ember.mixin(App, RuleController);
  Ember.mixin(App, DashboardModel);
  return App;
});


define("core/bundle", function(){});
