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
        dom.setAttribute(el1,"class","icon ion-ios-home");
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
        dom.setAttribute(el1,"class","icon ion-navicon-round");
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
        dom.setAttribute(el1,"class","icon ion-clock");
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
        dom.setAttribute(el1,"class","icon ion-settings");
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
        dom.setAttribute(el1,"class","icon ion-bug");
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
      dom.setAttribute(el3,"class","icon ion-ionic");
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
    });
    this.route("logViewer", {
      path: "/logs"
    });
    this.route("settings", {
      path: "/settings"
    }, function() {
      this.route("scan");
      return this.route("account");
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

define('template/Panel',[], function(){ var TEMPLATE={};

TEMPLATE.panel=(function() {
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
          dom.setAttribute(el1,"class","modal-confirm ");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element, content = hooks.content;
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
          var element1 = dom.childAt(fragment, [0]);
          var morph0 = dom.createMorphAt(element1,0,0);
          element(env, element1, context, "action", ["confirm"], {});
          content(env, morph0, context, "confirm.text");
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
          dom.setAttribute(el1,"class","modal-cancel");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element, content = hooks.content;
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
          var morph0 = dom.createMorphAt(element0,0,0);
          element(env, element0, context, "action", ["cancel"], {});
          content(env, morph0, context, "cancel.text");
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal-footer");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
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
        var element2 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element2,1,1);
        var morph1 = dom.createMorphAt(element2,3,3);
        block(env, morph0, context, "unless", [get(env, context, "confirm.hide")], {}, child0, null);
        block(env, morph1, context, "unless", [get(env, context, "cancel.hide")], {}, child1, null);
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
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("ul");
      dom.setAttribute(el3,"class","panel-title");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
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
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
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
      var element5 = dom.childAt(element4, [3]);
      var morph0 = dom.createMorphAt(dom.childAt(element4, [1, 1]),0,0);
      var morph1 = dom.createUnsafeMorphAt(dom.childAt(element3, [3]),1,1);
      var morph2 = dom.createMorphAt(element3,5,5);
      content(env, morph0, context, "title");
      element(env, element5, context, "action", ["close"], {});
      content(env, morph1, context, "body");
      block(env, morph2, context, "unless", [get(env, context, "footer.hide")], {}, child0, null);
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('utils/panel',["../template/Panel"], function(template) {
  var Panel, PanelController, PanelView;
  PanelView = Ember.View.extend({
    template: template.panel,
    didInsertElement: function() {
      var controller;
      _.delay((function(_this) {
        return function() {
          return $(_this.element).find(".panel").addClass("show");
        };
      })(this));
      controller = this.get("controller");
      return controller.on("close", (function(_this) {
        return function() {
          $(_this.element).find(".panel").removeClass("show");
          return _.delay(function() {
            _this.remove();
            return _this.destroy();
          }, 300);
        };
      })(this));
    }
  });
  PanelController = Ember.Controller.extend({
    actions: {
      close: function() {
        return this.trigger('close');
      }
    }
  }).extend(Ember.Evented);
  Panel = Ember.Object.extend({
    init: function() {
      var controller, view;
      controller = PanelController.create(this);
      view = PanelView.create({
        controller: controller
      });
      return view.append();
    }
  });
  return Panel;
});

define('route/DashboardRoute',["../utils/panel"], function(Panel) {
  return Ember.Route.extend({
    model: function() {
      return this.store.find('dashboard', 1);
    },
    actions: {
      slide: function() {
        return Panel.create({
          title: "Validation Details",
          body: "<h1>Wow~~</h1>",
          footer: {
            hide: true
          }
        });
      }
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
    SettingsIndexRoute: Ember.Route.extend({
      redirect: function() {
        return this.transitionTo('settings.scan');
      }
    }),
    SettingsScanRoute: Ember.Route.extend({
      model: function() {
        return {
          "profile": App.user.get("profile"),
          "user": App.user,
          "hasCredential": App.user.get("profile").get("awsAccount")
        };
      }
    }),
    SettingsAccountRoute: Ember.Route.extend({
      model: function() {
        return App.user;
      }
    })
  };
});

define('template/SettingsTpl',[], function(){ var TEMPLATE={};

TEMPLATE.cloud=(function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("SCAN CONFIGURATIONS");
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
        var el1 = dom.createTextNode("ACCOUNT SETTINGS");
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
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button");
          var el2 = dom.createTextNode("Add Cloud Account");
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
          var element9 = dom.childAt(fragment, [1]);
          element(env, element9, context, "action", ["addCloudAccount"], {"target": "view"});
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
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button disabled");
          dom.setAttribute(el1,"disabled","disabled");
          var el2 = dom.createTextNode("Updating Account...");
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
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1,"class","major");
        var el2 = dom.createTextNode("CLOUD ACCOUNT");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","warning-bar two-line");
        var el2 = dom.createTextNode("\n                To get started monitoring your cloud infrastructure, set up cloud account first.\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Currently only AWS is supported\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","account-number");
        var el4 = dom.createTextNode("\n                        Account Number\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","account-key-id");
        var el4 = dom.createTextNode("\n                        Account Access Key\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","account-key-hash");
        var el4 = dom.createTextNode("\n                        Account Secret Key\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        dom.setAttribute(el2,"class","loading");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","workarea-loading");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","account-instruction");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2,"class","small");
        var el3 = dom.createTextNode("How to set up AWS credential for CloudFielder");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ol");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Go to ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://console.aws.com");
        var el5 = dom.createTextNode("AWS console > Security Credentials > Users");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Create new user for CloudFielder. Then download/copy the generated\n                        access key and secret.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Set up proper permissions for this user. Read-only access to all supported\n                        resources is recommended.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Fill your account number, access key and secret key saved in step #2 in\n                        the fields on left.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Click \"Add Cloud Account\" and we will look after the rest.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
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
        var hooks = env.hooks, element = hooks.element, inline = hooks.inline, get = hooks.get, block = hooks.block;
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
        var element10 = dom.childAt(fragment, [5]);
        var morph0 = dom.createMorphAt(dom.childAt(element10, [1]),3,3);
        var morph1 = dom.createMorphAt(dom.childAt(element10, [3]),3,3);
        var morph2 = dom.createMorphAt(dom.childAt(element10, [5]),3,3);
        var morph3 = dom.createMorphAt(dom.childAt(element10, [7]),1,1);
        element(env, element10, context, "bind-attr", [], {"class": ":form :add-cloud-account isSavingCred:loading"});
        inline(env, morph0, context, "input", [], {"type": "text", "class": "accountNumber"});
        inline(env, morph1, context, "input", [], {"type": "text", "class": "accessKey"});
        inline(env, morph2, context, "input", [], {"type": "text", "class": "secretKey"});
        block(env, morph3, context, "unless", [get(env, context, "isSavingCred")], {}, child0, child1);
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
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
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
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          content(env, morph0, context, "model.profile.awsAccount");
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
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
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
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "input", [], {"type": "text", "class": "accountNumber"});
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
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
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
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          content(env, morph0, context, "model.profile.awsAccessKey");
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
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
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
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "input", [], {"type": "text", "class": "accessKey"});
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
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
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
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          content(env, morph0, context, "model.profile.secretKey");
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
          var el1 = dom.createTextNode("                        ");
          dom.appendChild(el0, el1);
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
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "input", [], {"type": "text", "class": "secretKey"});
          return fragment;
        }
      };
    }());
    var child6 = (function() {
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
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link");
            var el2 = dom.createTextNode("Update Credential");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link red");
            var el2 = dom.createTextNode("Remove Credential");
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
            var element5 = dom.childAt(fragment, [1]);
            var element6 = dom.childAt(fragment, [3]);
            element(env, element5, context, "action", ["editCredential"], {});
            element(env, element6, context, "action", ["removeCredential"], {});
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
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link disabled");
            var el2 = dom.createTextNode("Updating ...");
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
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "unless", [get(env, context, "isSavingCred")], {}, child0, child1);
          return fragment;
        }
      };
    }());
    var child7 = (function() {
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
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link");
            var el2 = dom.createTextNode("Update Credential");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link");
            var el2 = dom.createTextNode("Cancel");
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
            var element3 = dom.childAt(fragment, [1]);
            var element4 = dom.childAt(fragment, [3]);
            element(env, element3, context, "action", ["addCloudAccount"], {"target": "view"});
            element(env, element4, context, "action", ["editCredentialCancel"], {});
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
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link disabled");
            var el2 = dom.createTextNode("please wait...");
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
          block(env, morph0, context, "unless", [get(env, context, "isSavingCred")], {}, child0, child1);
          return fragment;
        }
      };
    }());
    var child8 = (function() {
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
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
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
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          content(env, morph0, context, "model.user.email");
          return fragment;
        }
      };
    }());
    var child9 = (function() {
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
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "input", [], {"type": "email", "class": "alertEmail"});
          return fragment;
        }
      };
    }());
    var child10 = (function() {
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
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" min");
          dom.appendChild(el1, el2);
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
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          content(env, morph0, context, "model.cfgScanInt");
          return fragment;
        }
      };
    }());
    var child11 = (function() {
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
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("min");
          dom.appendChild(el1, el2);
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
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "input", [], {"type": "text", "class": "isEditingScan:disabled scanInterval half"});
          return fragment;
        }
      };
    }());
    var child12 = (function() {
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
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button link");
          var el2 = dom.createTextNode("Edit");
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
          var element2 = dom.childAt(fragment, [1]);
          element(env, element2, context, "action", ["editScanOptions"], {});
          return fragment;
        }
      };
    }());
    var child13 = (function() {
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
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link");
            var el2 = dom.createTextNode("Update");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link");
            var el2 = dom.createTextNode("Cancel");
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
            element(env, element0, context, "action", ["updateScanOptions"], {"target": "view"});
            element(env, element1, context, "action", ["editScanOptionsCancel"], {});
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
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"class","button link disabled");
            var el2 = dom.createTextNode("Please wait...");
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
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "unless", [get(env, context, "isSavingScan")], {}, child0, child1);
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
        var el1 = dom.createElement("p");
        dom.setAttribute(el1,"class","major");
        var el2 = dom.createTextNode("CLOUD ACCOUNT");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","account-number");
        var el4 = dom.createTextNode("\n                        Account Number\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","account-key-id");
        var el4 = dom.createTextNode("\n                        Account Access Key\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","account-key-id");
        var el4 = dom.createTextNode("\n                        Account Secret Key\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        dom.setAttribute(el2,"class","loading");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","workarea-loading");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.setAttribute(el1,"class","through clearfix");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1,"class","major");
        var el2 = dom.createTextNode("SCAN OPTIONS");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","account-number");
        var el4 = dom.createTextNode("\n                        Alert Email\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3,"for","account-key-id");
        var el4 = dom.createTextNode("\n                        Scan Interval\n                    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        dom.setAttribute(el2,"class","loading");
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","workarea-loading");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
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
        var element7 = dom.childAt(fragment, [3]);
        var element8 = dom.childAt(fragment, [9]);
        var morph0 = dom.createMorphAt(dom.childAt(element7, [1]),3,3);
        var morph1 = dom.createMorphAt(dom.childAt(element7, [3]),3,3);
        var morph2 = dom.createMorphAt(dom.childAt(element7, [5]),3,3);
        var morph3 = dom.createMorphAt(dom.childAt(element7, [7]),1,1);
        var morph4 = dom.createMorphAt(dom.childAt(element8, [1]),3,3);
        var morph5 = dom.createMorphAt(dom.childAt(element8, [3]),3,3);
        var morph6 = dom.createMorphAt(dom.childAt(element8, [5]),1,1);
        element(env, element7, context, "bind-attr", [], {"class": ":add-cloud-account :form isRemovingCred:loading isSavingCred:loading"});
        block(env, morph0, context, "unless", [get(env, context, "isEditingCred")], {}, child0, child1);
        block(env, morph1, context, "unless", [get(env, context, "isEditingCred")], {}, child2, child3);
        block(env, morph2, context, "unless", [get(env, context, "isEditingCred")], {}, child4, child5);
        block(env, morph3, context, "unless", [get(env, context, "isEditingCred")], {}, child6, child7);
        element(env, element8, context, "bind-attr", [], {"class": ":form :add-cloud-account isSavingScan:loading"});
        block(env, morph4, context, "unless", [get(env, context, "isEditingScan")], {}, child8, child9);
        block(env, morph5, context, "unless", [get(env, context, "isEditingScan")], {}, child10, child11);
        block(env, morph6, context, "unless", [get(env, context, "isEditingScan")], {}, child12, child13);
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
      var el3 = dom.createTextNode("Configuration");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","clearfix work-area-content");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"class","panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("ul");
      dom.setAttribute(el3,"class","panel-title tab");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      dom.setAttribute(el4,"class","active");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","panel-content clearfix");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
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
      var hooks = env.hooks, block = hooks.block, get = hooks.get;
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
      var element11 = dom.childAt(fragment, [2, 1]);
      var element12 = dom.childAt(element11, [1]);
      var morph0 = dom.createMorphAt(dom.childAt(element12, [1]),0,0);
      var morph1 = dom.createMorphAt(dom.childAt(element12, [3]),0,0);
      var morph2 = dom.createMorphAt(dom.childAt(element11, [3]),1,1);
      block(env, morph0, context, "link-to", ["settings.scan"], {}, child0, null);
      block(env, morph1, context, "link-to", ["settings.account"], {}, child1, null);
      block(env, morph2, context, "unless", [get(env, context, "model.hasCredential")], {}, child2, child3);
      return fragment;
    }
  };
}());

TEMPLATE.account=(function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("SCAN CONFIGURATIONS");
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
        var el1 = dom.createTextNode("ACCOUNT SETTINGS");
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
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","result");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","text");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"href","#");
        var el3 = dom.createTextNode("Edit");
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
        var element9 = dom.childAt(fragment, [1]);
        var element10 = dom.childAt(element9, [1]);
        var element11 = dom.childAt(element9, [3]);
        var morph0 = dom.createMorphAt(element10,0,0);
        var morph1 = dom.createMorphAt(element10,2,2);
        content(env, morph0, context, "model.firstName");
        content(env, morph1, context, "model.lastName");
        element(env, element11, context, "action", ["editFullname"], {"class": "edit"});
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
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button link disabled");
          var el2 = dom.createTextNode("Saving...");
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
          var el1 = dom.createTextNode("                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button link");
          var el2 = dom.createTextNode("Save");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button link");
          var el2 = dom.createTextNode("Cancel");
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
          var element7 = dom.childAt(fragment, [1]);
          var element8 = dom.childAt(fragment, [3]);
          element(env, element7, context, "action", ["saveFullname"], {"target": "view"});
          element(env, element8, context, "action", ["editFullnameCancel"], {});
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
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","edit");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2,"type","text");
        dom.setAttribute(el2,"class","half firstName");
        dom.setAttribute(el2,"placeholder","First Name");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2,"type","text");
        dom.setAttribute(el2,"class","half lastName");
        dom.setAttribute(el2,"placeholder","Last Name");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("                    ");
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
        block(env, morph0, context, "if", [get(env, context, "model.isSaving")], {}, child0, child1);
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
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","text");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"href","#");
        var el2 = dom.createTextNode("Edit");
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
        var element6 = dom.childAt(fragment, [3]);
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        content(env, morph0, context, "model.email");
        element(env, element6, context, "action", ["editEmail"], {"class": "edit"});
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button link");
          var el2 = dom.createTextNode("Update Email");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button link");
          var el2 = dom.createTextNode("Cancel");
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
          var element4 = dom.childAt(fragment, [1]);
          var element5 = dom.childAt(fragment, [3]);
          element(env, element4, context, "action", ["updateEmail"], {});
          element(env, element5, context, "action", ["editEmailCancel"], {});
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
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","button link disabled");
          var el2 = dom.createTextNode("Saving...");
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
        var el1 = dom.createTextNode("                        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","input-group");
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2,"type","email");
        dom.setAttribute(el2,"class","updateEmail");
        dom.setAttribute(el2,"placeholder","New Email");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2,"type","password");
        dom.setAttribute(el2,"class","updateEmailPassword");
        dom.setAttribute(el2,"placeholder","Password");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("                        ");
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),7,7);
        block(env, morph0, context, "unless", [get(env, context, "isSavingEmail")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  var child6 = (function() {
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
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","button link");
        var el2 = dom.createTextNode("Change Password");
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
        var element3 = dom.childAt(fragment, [1]);
        element(env, element3, context, "action", ["editPassword"], {});
        return fragment;
      }
    };
  }());
  var child7 = (function() {
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","input-group");
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2,"for","");
        var el3 = dom.createTextNode("\n                                Current Password\n                            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2,"for","");
        var el3 = dom.createTextNode("\n                                New Password\n                            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2,"type","password");
        dom.setAttribute(el2,"class","newPassword");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","button link");
        var el3 = dom.createTextNode("Update Password");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","button link");
        var el3 = dom.createTextNode("Cancel");
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
        var hooks = env.hooks, inline = hooks.inline, element = hooks.element;
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
        var element1 = dom.childAt(element0, [13]);
        var element2 = dom.childAt(element0, [15]);
        var morph0 = dom.createMorphAt(element0,3,3);
        inline(env, morph0, context, "input", [], {"type": "password", "class": "oldPassword"});
        element(env, element1, context, "action", ["updatePassword"], {});
        element(env, element2, context, "action", ["editPasswordCancel"], {});
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
      var el3 = dom.createTextNode("Configuration");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","clearfix work-area-content");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"class","panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("ul");
      dom.setAttribute(el3,"class","panel-title tab");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("li");
      dom.setAttribute(el4,"class","active");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","panel-content clearfix");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      dom.setAttribute(el4,"class","major");
      var el5 = dom.createTextNode("USER ACCOUNT");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","form add-cloud-account");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("fieldset");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","account-number");
      var el7 = dom.createTextNode("\n                        Username\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","text");
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("fieldset");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","account-key-id");
      var el7 = dom.createTextNode("\n                        Name\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("fieldset");
      var el6 = dom.createTextNode("\n                    ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"for","account-email");
      var el7 = dom.createTextNode("\n                        Email\n                    ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("fieldset");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
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
      var hooks = env.hooks, block = hooks.block, content = hooks.content, get = hooks.get;
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
      var element12 = dom.childAt(fragment, [2, 1]);
      var element13 = dom.childAt(element12, [1]);
      var element14 = dom.childAt(element12, [3, 3]);
      var morph0 = dom.createMorphAt(dom.childAt(element13, [1]),0,0);
      var morph1 = dom.createMorphAt(dom.childAt(element13, [3]),0,0);
      var morph2 = dom.createMorphAt(dom.childAt(element14, [1, 3]),0,0);
      var morph3 = dom.createMorphAt(dom.childAt(element14, [3]),3,3);
      var morph4 = dom.createMorphAt(dom.childAt(element14, [5]),3,3);
      var morph5 = dom.createMorphAt(dom.childAt(element14, [7]),1,1);
      block(env, morph0, context, "link-to", ["settings.scan"], {}, child0, null);
      block(env, morph1, context, "link-to", ["settings.account"], {}, child1, null);
      content(env, morph2, context, "model.username");
      block(env, morph3, context, "unless", [get(env, context, "isEditing")], {}, child2, child3);
      block(env, morph4, context, "unless", [get(env, context, "isEditingEmail")], {}, child4, child5);
      block(env, morph5, context, "unless", [get(env, context, "isEditingPassword")], {}, child6, child7);
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('view/SettingsView',["template/SettingsTpl"], function(SettingsTemplate) {
  return {
    SettingsScanView: Ember.View.extend({
      template: SettingsTemplate.cloud,
      classNames: ["settings"],
      actions: {
        addCloudAccount: function() {
          var awsAccessKey, awsAccount, awsSecretKey, controller, model;
          awsAccount = this.$(".accountNumber").val();
          awsAccessKey = this.$(".accessKey").val();
          awsSecretKey = this.$(".secretKey").val();
          model = this.get("controller").get("model");
          controller = this.get("controller");
          controller.set("isSavingCred", true);
          model.profile.setProperties({
            awsAccount: awsAccount,
            awsAccessKey: awsAccessKey,
            awsSecretKey: awsSecretKey
          });
          return model.profile.save().then(function() {
            controller.set("isSavingCred", false);
            controller.set("isEditingCred", false);
            return controller.transitionToRoute("settings");
          });
        },
        updateScanOptions: function() {
          var alertEmail, controller, model, scanInterval;
          alertEmail = this.$(".alertEmail").val();
          scanInterval = this.$(".scanInterval").val();
          controller = this.get("controller");
          model = controller.get("model").profile;
          model.setProperties({
            cfgScanInt: scanInterval,
            alertEmail: alertEmail
          });
          return controller.send("updateScanOptions");
        }
      }
    }),
    SettingsAccountView: Ember.View.extend({
      template: SettingsTemplate.account,
      classNames: ["settings"],
      actions: {
        saveFullname: function() {
          var controller, firstName, lastName, model;
          firstName = this.$(".firstName").val();
          lastName = this.$(".lastName").val();
          controller = this.get("controller");
          model = this.get("controller").get("model");
          model.setProperties({
            firstName: firstName,
            lastName: lastName
          });
          return model.save().then(function() {
            return controller.set("isEditing", false);
          });
        },
        updateEmail: function() {
          var controller, model, newEmail, password;
          newEmail = this.$(".updateEmail").val();
          password = this.$(".updateEmailPassword").val();
          controller = this.get("controller");
          model = controller.get("model");
          return model.updateEmail(newEmail, password).then(function() {
            return controller.send("editEmailCancel");
          })["finally"](function() {
            return controller.send("updateEmailDone");
          }, null);
        },
        updatePassword: function() {
          var controller, model, newPassword, oldPassword;
          oldPassword = this.$(".oldPassword").val();
          newPassword = this.$(".newPassword").val();
          controller = this.get("controller");
          model = controller.get("model");
          return model.updatePassword(oldPassword, newPassword).then(function() {
            return controller.send("editPasswordCancel");
          })["finally"](function() {
            return controller.send("editPasswordDone");
          }, null);
        }
      }
    })
  };
});

define('controller/SettingsController',[], function() {
  return {
    SettingsAccountController: Ember.Controller.extend({
      actions: {
        editFullname: function() {
          return this.set('isEditing', true);
        },
        editFullnameCancel: function() {
          return this.set('isEditing', false);
        },
        editEmail: function() {
          return this.set("isEditingEmail", true);
        },
        editEmailCancel: function() {
          return this.set("isEditingEmail", false);
        },
        updateEmail: function() {
          return this.set("isSavingEmail", true);
        },
        updateEmailDone: function() {
          return this.set("isSavingEmail", false);
        },
        editPassword: function() {
          return this.set("isEditingPassword", true);
        },
        editPasswordCancel: function() {
          return this.set("isEditingPassword", false);
        },
        updatePassword: function() {
          return this.set("isSavingPassword", true);
        },
        updatePasswordDone: function() {
          return this.set("isSavingPassword", false);
        }
      }
    }),
    SettingsScanController: Ember.Controller.extend({
      actions: {
        editCredential: function() {
          return this.set("isEditingCred", true);
        },
        editCredentialCancel: function() {
          return this.set("isEditingCred", false);
        },
        removeCredential: function() {
          var awsAccessKey, awsAccount, awsSecretKey, model;
          this.set("isRemovingCred", true);
          model = this.get("model");
          awsAccount = awsAccessKey = awsSecretKey = null;
          model.profile.setProperties({
            awsAccount: awsAccount,
            awsAccessKey: awsAccessKey,
            awsSecretKey: awsSecretKey
          });
          return model.profile.save().then((function(_this) {
            return function() {
              _this.set("isRemovingCred", false);
              _this.set("isEditingCred", false);
              return _this.transitionToRoute('settings');
            };
          })(this));
        },
        editScanOptions: function() {
          return this.set("isEditingScan", true);
        },
        editScanOptionsCancel: function() {
          return this.set("isEditingScan", false);
        },
        updateScanOptions: function() {
          var model, self;
          self = this;
          this.set("isSavingScan", true);
          model = this.get('model').profile;
          return model.save().then(function() {
            return self.set("isEditingScan", false);
          })["finally"](function() {
            return self.set("isSavingScan", false);
          }, null);
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
        var element7 = dom.childAt(fragment, [3, 1]);
        element(env, element7, context, "action", ["setup"], {});
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
          var el2 = dom.createTextNode("No resouce has been scanned.");
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
            dom.setAttribute(el2,"class","count");
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
            var attrMorph0 = dom.createAttrMorph(element3, 'src');
            var morph0 = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
            var morph1 = dom.createMorphAt(dom.childAt(element2, [5]),0,0);
            attribute(env, attrMorph0, element3, "src", concat(env, [get(env, context, "type"), ".png"]));
            content(env, morph0, context, "count");
            content(env, morph1, context, "type");
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
          block(env, morph0, context, "each", [get(env, context, "model.resources")], {}, child0, null);
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
            dom.setAttribute(el2,"href","");
            dom.setAttribute(el2,"class","btn-vio-detail icon-detail");
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
        var element4 = dom.childAt(fragment, [2, 3]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(fragment, [6]);
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(element4, [1, 1]),0,0);
        var morph2 = dom.createMorphAt(dom.childAt(element5, [1, 0]),0,0);
        var morph3 = dom.createMorphAt(dom.childAt(element5, [3, 1]),0,0);
        var morph4 = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
        var morph5 = dom.createMorphAt(dom.childAt(element6, [1, 1]),0,0);
        var morph6 = dom.createMorphAt(dom.childAt(element6, [3, 1]),1,1);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "unless", [get(env, context, "model.resources.length")], {}, child0, null);
        content(env, morph1, context, "model.violationCount");
        content(env, morph2, context, "model.activeRuleCount");
        content(env, morph3, context, "model.lastScannedTime");
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
      dom.setAttribute(el1,"class","clearfix work-area-content");
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

return TEMPLATE; });
define('view/DashboardView',["template/DashboardTpl"], function(DashboardTemplate) {
  return Ember.View.extend({
    template: DashboardTemplate.dashboard,
    classNames: ["dashboard"]
  });
});

define('controller/DashboardController',[], function() {
  return Ember.Controller.extend({
    needs: ["application"]
  });
});

define('api/ApiRequestDefs',[], function() {

  /*
  == Following name of the paramter is autofilled. Thus the paramter is not required.
  == It also means that you cannot use a param name if the param is for sth. else.
     For example, the param's name cannot be username, if it's used to represent Instance's Id.
  
  ** Auto Fill List :
  username
  usercode
  session_id
   */
  var ApiRequestDefs;
  ApiRequestDefs = {};
  ApiRequestDefs.Defs = {
    'session_login': {
      url: '/session/',
      method: 'login',
      params: ['username', 'password', 'option']
    },
    'session_logout': {
      url: '/session/',
      method: 'logout',
      params: ['username', 'session_id']
    },
    'log_list': {
      url: '/log/',
      method: 'list',
      params: ['username', 'session_id', 'profile_id', 'filter']
    },
    'profile_create': {
      url: '/profile/',
      method: 'create',
      params: ['username', 'session_id', 'members', 'credentials', 'scan_interval']
    },
    'profile_remove': {
      url: '/profile/',
      method: 'remove',
      params: ['username', 'session_id', 'profile_id']
    },
    'profile_list': {
      url: '/profile/',
      method: 'list',
      params: ['username', 'session_id', 'profile_ids']
    },
    'profile_invite': {
      url: '/profile/',
      method: 'invite',
      params: ['username', 'session_id', 'profile_id', 'member_email', 'member_role']
    },
    'profile_check_invitation': {
      url: '/profile/',
      method: 'check_invitation',
      params: ['session_id', 'key']
    },
    'profile_cancel_invitation': {
      url: '/profile/',
      method: 'cancel_invitation',
      params: ['username', 'session_id', 'profile_id', 'member_id']
    },
    'profile_remove_members': {
      url: '/profile/',
      method: 'remove_members',
      params: ['username', 'session_id', 'profile_id', 'member_ids']
    },
    'profile_update_role': {
      url: '/profile/',
      method: 'update_role',
      params: ['username', 'session_id', 'profile_id', 'member_id', 'new_role']
    },
    'profile_add_credential': {
      url: '/profile/',
      method: 'add_credential',
      params: ['username', 'session_id', 'profile_id', 'credential']
    },
    'profile_remove_credential': {
      url: '/profile/',
      method: 'remove_credential',
      params: ['username', 'session_id', 'profile_id', 'key_id']
    },
    'profile_update_credential': {
      url: '/profile/',
      method: 'update_credential',
      params: ['username', 'session_id', 'profile_id', 'credential']
    },
    'rule_create': {
      url: '/rule/',
      method: 'create',
      params: ['username', 'session_id', 'content']
    },
    'rule_remove': {
      url: '/rule/',
      method: 'remove',
      params: ['username', 'session_id', 'rule_id']
    },
    'rule_save': {
      url: '/rule/',
      method: 'save',
      params: ['username', 'session_id', 'rule_id', 'content']
    },
    'rule_list': {
      url: '/rule/',
      method: 'list',
      params: ['username', 'session_id', 'rule_ids']
    },
    'rule_enable': {
      url: '/rule/',
      method: 'enable',
      params: ['username', 'session_id', 'rule_ids', 'enabled']
    },
    'rule_verify': {
      url: '/rule/',
      method: 'verify',
      params: ['username', 'session_id', 'spec']
    },
    'account_register': {
      url: '/account/',
      method: 'register',
      params: ['username', 'password', 'email', 'attributes']
    },
    'account_update_account': {
      url: '/account/',
      method: 'update_account',
      params: ['username', 'session_id', 'attributes']
    },
    'account_reset_password': {
      url: '/account/',
      method: 'reset_password',
      params: ['username']
    },
    'account_update_password': {
      url: '/account/',
      method: 'update_password',
      params: ['key', 'new_pwd']
    },
    'account_check_repeat': {
      url: '/account/',
      method: 'check_repeat',
      params: ['username', 'email']
    },
    'account_check_validation': {
      url: '/account/',
      method: 'check_validation',
      params: ['key', 'operation_flag']
    }
  };

  /*
   * === Error Code Defination ===
   * 1. Any network errors will be negative. For example, when server returns 404, the `error` in the promise will be -404.
   */
  ApiRequestDefs.Errors = {
    InvalidRpcReturn: -1,
    XhrFailure: -2,
    InvalidMethodCall: -3,
    InvalidParameter: -4,
    MissingDataInServer: -5,
    OperationFailure: -6,
    Network404: -404,
    Network500: -500
  };
  ApiRequestDefs.AutoFill = function(paramter_name) {
    switch (paramter_name) {
      case "username":
        return App.user.get("usercode");
      case "session_id":
        return App.session.get("id");
      case "content":
        return "name\n\n    \"rule1\"\n\ndescription\n\n    \"db instance shouldn't have publicIp\"\n\nparameter\n\n    _role = \"database\"\n    _region = [\"us-east\", \"ap-south\"]\n\nif\n\nregion\n.vpc\n.instance(\n    tags[\"name\"] like \"^web.*\",\n    tags[\"role\"] = \"db\",\n    publicIpAddress != \"\",\n    tags[\"key\"] in _role,\n    tags[\"region\"] in _region,\n    AvailabilityZones not has [\"us-east-1a\",\"us-east-1b\"]\n)\n.subnet\n.rtb.hasNoRoute(instanceId != \"\")\n.elb(\n    ListenerDescriptions.member not has [{\n        \"LoadBalancerPort\": 80,\n        \"Protocol\": \"HTTP\"\n    }]\n)\n.eip(networkInterfaceId = \"\")\n.notExist().eip(networkInterfaceId = \"\")\n\ndo\n    email()";
    }
    return null;
  };
  return ApiRequestDefs;
});

define('api/ApiRequest',["api/ApiRequestDefs"], function(ApiDefination) {
  var AjaxErrorHandler, AjaxSuccessHandler, ApiRequest, CreateError;
  CreateError = function(errorNum, errorMsg, params) {
    return {
      error: errorNum,
      msg: errorMsg || "",
      result: params || void 0
    };
  };

  /*
   * === ApiRequest ===
   *
   * Paramters :
   *   apiName       : (String) The name of the api, see ApiRequestDefs
   *   apiParameters : An object to be send with the api request.
   *         If an api has its parameters map, the `apiParameters` will be converted from OBJECT to ARRAY
   *         If an api has no param map, the apiParameters is considered as the first and only one paramter
   *         to be send with the api.
   */
  AjaxSuccessHandler = function(data, textStatus, jqXHR) {
    if (!data || !data.result || data.result.length !== 2) {
      throw CreateError(ApiDefination.Errors.InvalidRpcReturn, "Invalid JsonRpc Return Data");
    }
    if (data.result[0] !== 0) {
      throw CreateError(data.result[0], "Service Error", data.result[1]);
    }
    return data.result[1];
  };
  AjaxErrorHandler = function(jqXHR, textStatus, error) {
    if (!error && jqXHR.status !== 200) {
      throw CreateError(-jqXHR.status, "Network Error");
    }
    throw CreateError(ApiErrors.XhrFailure, textStatus, error);
  };

  /*
   ApiRequest Defination
   */
  ApiRequest = function(apiName, apiParameters) {
    var ApiDef;
    ApiDef = ApiDefination.Defs[apiName];
    apiParameters = apiParameters || EmptyObject;
    if (!ApiDef) {
      console.error("Cannot find defination of the api:", apiName);
      return;
    }
    return Q($.ajax({
      url: MC_API_HOST + ApiDef.url,
      dataType: "json",
      type: "POST",
      jsonp: false,
      data: JSON.stringify({
        jsonrpc: '2.0',
        id: "1",
        method: ApiDef.method || "",
        params: ApiDef.params.map(function(i) {
          if (apiParameters.hasOwnProperty(i)) {
            return apiParameters[i];
          } else {
            return ApiDefination.AutoFill(i);
          }
        })
      })
    })).then(AjaxSuccessHandler, AjaxErrorHandler);
  };
  ApiRequest.Errors = ApiDefination.Erros;
  ApiRequest.Defs = ApiDefination.Defs;
  ApiRequest.AutoFill = ApiDefination.AutoFill;
  return ApiRequest;
});

define('model/SessionModel',["api/ApiRequest"], function(ApiRequest) {
  var SessionInited;
  SessionInited = false;
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
            awsAccessKey: credential.access_key,
            awsSecretKey: credential.secret_key
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
  return {
    ProfileAdapter: DS.Adapter.extend({
      updateRecord: function(store, type, profile) {
        if (profile.record.changedAttributes().cfgScanInt || profile.record.changedAttributes().alertEmail) {
          return ApiRequest("profile_update_config", {});
        } else {
          return ApiRequest("profile_update_credential", {
            "profile_id": profile.get("id"),
            "credential": {
              account_id: profile.get("awsAccount"),
              access_key: profile.get("awsAccessKey"),
              secret_key: profile.get("awsSecretKey"),
              provider: "aws::global"
            }
          }).then(function(result) {
            var awsAccessKey, awsAccount, awsSecretKey, id;
            awsAccount = result[0], awsAccessKey = result[1], awsSecretKey = result[2];
            id = profile.get("id");
            return {
              awsAccount: awsAccount,
              awsAccessKey: awsAccessKey,
              awsSecretKey: awsSecretKey,
              id: id
            };
          });
        }
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
      })
    }),
    UserAdapter: DS.Adapter.extend({
      updateRecord: function(store, type, user) {
        return ApiRequest("account_update_account", {
          attributes: {
            first_name: user.get("firstName"),
            last_name: user.get("lastName")
          }
        }).then(function() {
          return null;
        });
      }
    }),
    UserModel: DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      email: DS.attr('string'),
      username: DS.attr('string'),
      usercode: DS.attr('string'),
      rules: DS.hasMany('rule', {
        async: true
      }),
      profiles: DS.hasMany('profile'),
      profile: (function() {
        return this.get("profiles").toArray()[0];
      }).property("profiles.@each")
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
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","rule-warning");
          var el2 = dom.createTextNode("There is no active rule. To start enforcing policies to your cloud infrastructure, you need to activate the rules.");
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
              element(env, element0, context, "bind-attr", [], {"class": ":rule-cond item.enabled"});
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
            element(env, element1, context, "bind-attr", [], {"class": ":rule-select item.isSelected:selected"});
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
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
        var el4 = dom.createTextNode(")");
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
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"class","no-sure-wth-is-this");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"data-tooltip","Toggle all rule");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content, element = hooks.element;
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
        var element3 = dom.childAt(fragment, [1]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(element5, [5]);
        var element8 = dom.childAt(element5, [7]);
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(element4, [1]),1,1);
        var morph2 = dom.createMorphAt(element5,3,3);
        var morph3 = dom.createMorphAt(dom.childAt(element4, [5]),1,1);
        var morph4 = dom.createMorphAt(element3,3,3);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "unless", [get(env, context, "hasEnabledRule")], {}, child0, null);
        content(env, morph1, context, "model.length");
        element(env, element6, context, "bind-attr", [], {"class": ":rule-select allRuleSelected:selected"});
        element(env, element6, context, "action", ["toggleSelect"], {});
        block(env, morph2, context, "link-to", ["rule", "new"], {"classNames": "create-rule"}, child1, null);
        element(env, element7, context, "action", ["deleteRules"], {});
        element(env, element8, context, "bind-attr", [], {"class": ":rule-cond :toggle-all mostRuleEnabled:enabled"});
        element(env, element8, context, "action", ["toggleAllRules"], {"target": "view"});
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
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","rule-empty-wrap");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("There is no rule yet");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" from scratch, or get started with pre-built rule set.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("How to write a rule? Read the doc.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1, 3]),0,0);
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
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Save");
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
        element(env, element0, context, "action", ["saveRule"], {});
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
        dom.setAttribute(el1,"disabled","disabled");
        var el2 = dom.createTextNode("Save");
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
        inline(env, morph0, context, "ace-editor", [], {"content": get(env, context, "model.content")});
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
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"class","detail");
        var el6 = dom.createTextNode("Detail");
        dom.appendChild(el5, el6);
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
      var element1 = dom.childAt(fragment, [0]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element1, [3]);
      var morph0 = dom.createMorphAt(element2,1,1);
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      element(env, element2, context, "bind-attr", [], {"class": "isContent:active"});
      element(env, element2, context, "action", ["toggleContent"], {});
      block(env, morph0, context, "if", [get(env, context, "model.isDirty")], {}, child0, child1);
      element(env, element3, context, "bind-attr", [], {"class": "isContent::active"});
      element(env, element3, context, "action", ["toggleLog"], {});
      block(env, morph1, context, "if", [get(env, context, "isContent")], {}, child2, child3);
      return fragment;
    }
  };
}());

TEMPLATE.editor=(function() {
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

define('view/RuleView',["template/RuleTpl", "ui/UI.bubblepopup", "lib/ace/editor"], function(RuleTpl, popupBubble) {
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
        toggleAllRules: function() {
          var that;
          that = this;
          return popupBubble(this.$('.toggle-all'), {
            title: "Confirm toggle all rules?",
            confirm: "Confirm",
            cancel: "Cancel"
          }, {
            '.confirm': function() {
              return that.get('controller').send('toggleAllRules');
            }
          });
        }
      }
    }),
    AceEditorComponent: Ember.Component.extend({
      template: RuleTpl.editor,
      classNames: ["ace-component", "panel-content"],
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
          return this.preset = null;
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
        return this.get("model").filterBy("enabled", true).length > 0;
      }).property("model.@each.enabled"),
      mostRuleEnabled: (function() {
        return this.get("model").filterBy("enabled", true).length > this.get("model").get("length") / 2;
      }).property("model.@each.enabled"),
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
      actions: {
        toggleRuleCond: function(rule) {
          rule.toggleCondition();
          return false;
        },
        toggleAllRules: function() {
          var rules;
          rules = this.get("model").filterBy("id").toArray();
          if (rules.length) {
            rules[0].toggleCondition(rules, !this.get("mostRuleEnabled"));
          }
          return false;
        },
        toggleSelect: function(toState) {
          var wrapped, _i, _len, _ref;
          if (toState === void 0) {
            toState = !this.get("allRuleSelected");
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
        },
        deleteRules: function() {
          var rule, _i, _len, _ref;
          _ref = this.get("wrappedModel").filterBy("isSelected", true);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            rule = _ref[_i];
            rule.content.destroyRecord();
          }
        }
      }
    }),
    RuleController: Ember.Controller.extend({
      needs: ["application"],
      isContent: true,
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

define('model/DashboardModel',[], function() {
  var Models;
  Models = {
    DashboardAdapter: DS.Adapter.extend({
      find: function() {
        return {
          id: 1,
          activeRuleCount: 36,
          lastScannedTime: 30,
          violationRules: [1],
          resources: [1]
        };
      }
    }),
    Dashboard: DS.Model.extend({
      activeRuleCount: DS.attr("number", {
        defaultValue: 0
      }),
      lastScannedTime: DS.attr("number", {
        defaultValue: 0
      }),
      resources: DS.hasMany('resource', {
        async: true
      }),
      violationRules: DS.hasMany('violationRule', {
        async: true
      }),
      violationCount: (function() {
        return 18;
      }).property('violationRules')
    }),
    ResourceAdapter: DS.Adapter.extend({
      find: function() {
        return {
          id: 1,
          type: "instance",
          count: 12
        };
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
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","sortable");
      var el5 = dom.createTextNode("TIME");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","sortable");
      var el5 = dom.createTextNode("EVENT");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
      dom.setAttribute(el4,"class","sortable");
      var el5 = dom.createTextNode("VIOLATION");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("th");
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
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"class","detail");
      var el6 = dom.createTextNode("Detail");
      dom.appendChild(el5, el6);
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


/*
----------------------------
  This is the core / entry point / controller of the whole IDE.
----------------------------

  Application acts as namespace in Ember. We store our component defination(a.k.a Class)
  in Application, so that Ember will find the component and wire them up.
 */
define('core/Application',["view/ApplicationView", "core/Router", "core/Store", "route/ApplicationRoute", "route/IndexRoute", "route/DashboardRoute", "route/LogViewerRoute", "route/RuleManagerRoute", "route/SettingsRoute", "view/SettingsView", "controller/SettingsController", "view/DashboardView", "controller/DashboardController", "model/SessionModel", "model/UserModel", "model/RuleModel", "view/RuleView", "controller/RuleManagerC", "model/DashboardModel", "view/LogView"], function(ApplicationView, Router, Store, ApplicationRoute, IndexRoute, DashboardRoute, LogViewerRoute, RuleManagerRoute, SettingsRoute, SettingsView, SettingsController, DashboardView, DashboardController, SessionModel, UserModel, RuleModel, RuleView, RuleController, DashboardModel, LogViewerView) {
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
  App.DashboardRoute = DashboardRoute;
  App.DashboardView = DashboardView;
  App.DashboardController = DashboardController;
  App.LogViewerRoute = LogViewerRoute;
  App.LogViewerView = LogViewerView;
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
