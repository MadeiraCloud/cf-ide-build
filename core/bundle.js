define('template/ApplicationTpl',[], function(){ var TEMPLATE={};

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
        var el1 = dom.createElement("header");
        dom.setAttribute(el1,"id","CFHeader");
        var el2 = dom.createTextNode("In order to monitor your cloud infrastructure, ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("Set Up Cloud Account");
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
        var element0 = dom.childAt(fragment, [0, 1]);
        element(env, element0, context, "action", ["setupCredential"], {});
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
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
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","info");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","logout fa fa-sign-out");
      dom.setAttribute(el4,"data-tooltip","Log out");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("img");
      dom.setAttribute(el4,"class","avatar");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","name");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
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
      dom.setAttribute(el3,"href","mailto:support@visualops.io");
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
      dom.setAttribute(el3,"href","http://cloudfielder.com/");
      dom.setAttribute(el3,"target","_blank");
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
      var el1 = dom.createElement("article");
      dom.setAttribute(el1,"id","CFWorkarea");
      var el2 = dom.createTextNode("\n");
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
      var hooks = env.hooks, get = hooks.get, block = hooks.block, element = hooks.element, subexpr = hooks.subexpr, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
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
      var element2 = dom.childAt(element1, [3]);
      var element3 = dom.childAt(element1, [5]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element4, [1]);
      var element6 = dom.childAt(element4, [3]);
      var element7 = dom.childAt(element3, [3]);
      var element8 = dom.childAt(fragment, [3]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(element2,1,1);
      var morph2 = dom.createMorphAt(element2,3,3);
      var morph3 = dom.createMorphAt(element2,5,5);
      var morph4 = dom.createMorphAt(element2,7,7);
      var attrMorph0 = dom.createAttrMorph(element6, 'src');
      var morph5 = dom.createMorphAt(element7,0,0);
      var morph6 = dom.createMorphAt(element7,2,2);
      var morph7 = dom.createMorphAt(dom.childAt(element3, [5]),0,0);
      var morph8 = dom.createMorphAt(element8,1,1);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "if", [get(env, context, "noCredential")], {}, child0, null);
      element(env, element1, context, "bind-attr", [], {"class": "noCredential:has-info"});
      block(env, morph1, context, "link-to", ["dashboard"], {}, child1, null);
      block(env, morph2, context, "link-to", ["ruleManager"], {}, child2, null);
      block(env, morph3, context, "link-to", ["scanLogPage", 1], {}, child3, null);
      block(env, morph4, context, "link-to", ["settings"], {}, child4, null);
      element(env, element5, context, "action", ["logout"], {});
      attribute(env, attrMorph0, element6, "src", concat(env, [subexpr(env, context, "gravatar", [get(env, context, "user.email")], {})]));
      content(env, morph5, context, "user.firstName");
      content(env, morph6, context, "user.lastName");
      content(env, morph7, context, "user.email");
      element(env, element8, context, "bind-attr", [], {"class": "noCredential:has-info"});
      content(env, morph8, context, "outlet");
      return fragment;
    }
  };
}());

TEMPLATE.error=(function() {
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
        content(env, morph0, context, "result");
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
        var el1 = dom.createTextNode("Sorry, we are suffering from some technical issue, please try again later");
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
      dom.setAttribute(el1,"class","error global-error");
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      block(env, morph0, context, "if", [get(env, context, "result")], {}, child0, child1);
      return fragment;
    }
  };
}());

return TEMPLATE; });
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
  Ember.TEMPLATES["error"] = AppTpl.error;
  return Ember.View.extend({
    template: AppTpl.index,
    classNames: ["cloudfielder"]
  });
});

define('controller/ApplicationController',[], function() {
  return Ember.Controller.extend({
    user: (function() {
      return App.user;
    }).property(),
    info: (function() {
      return App.info;
    }).property(),
    noCredential: (function() {
      return !this.get('user.profile.awsAccount');
    }).property('user.profile.awsAccount'),
    actions: {
      setupCredential: function() {
        return this.transitionToRoute('settings').then(function(settingsRoute) {
          var controller;
          controller = App.__container__.lookup("controller:settings");
          return controller.send('editCredential');
        });
      }
    }
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
    this.route("invalidSession", {
      path: "/sessionexpired"
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
  return {
    ApplicationRoute: Ember.Route.extend({
      afterModel: function() {
        console.log("App is Ready");
        return $("#GlobalLoading").remove();
      },
      actions: {
        error: function() {
          console.info("Global error route is activated, make sure it's not because any unhandled error from the substate of application.", arguments);
          return true;
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
    }),
    IndexRoute: Ember.Route.extend({
      redirect: function() {
        return this.transitionTo('dashboard');
      }
    })
  };
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
    ScanLogIndexRoute: Ember.Route.extend({
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
          return true;
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
            user: App.user
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
      },
      actions: {
        willTransition: function(transition) {
          var model;
          model = this.controller.model;
          if (!model.get('isNew') && model.get('isDirty') && !model.get('isSaving')) {
            this.store.createRecord('ruleUnsaved', {
              id: model.id,
              content: model.get('content')
            });
            return model.rollback();
          }
        }
      }
    })
  };
});

define('template/InvalidSessionTpl',[''], (function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","session-dialog");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Your session has expired.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Please log in again.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","action");
      var el3 = dom.createTextNode("Ok, go to login page");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
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
      var element0 = dom.childAt(fragment, [0, 4]);
      element(env, element0, context, "action", ["gotoLoginPage"], {});
      return fragment;
    }
  };
}()));
define('route/InvalidSessionRoute',["template/InvalidSessionTpl"], function(template) {
  return {
    InvalidSessionRoute: Ember.Route.extend({
      deactivate: function() {
        this.send("gotoLoginPage");
      },
      actions: {
        gotoLoginPage: function() {
          App.gotoLoginPage();
        }
      }
    }),
    InvalidSessionIndexRoute: Ember.Route.extend({
      model: function() {
        return Q.defer().promise;
      }
    }),
    InvalidSessionLoadingRoute: Ember.Route.extend(),
    InvalidSessionLoadingView: Ember.View.extend({
      template: template,
      elementId: "InvalidSession",
      didInsertElement: function() {
        return $("body").append(this.element);
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
        var el3 = dom.createTextNode("In order to monitor your cloud infrastructure with CloudFielder, you have to provide an cloud account.");
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
        dom.setAttribute(el3,"href","https://console.aws.amazon.com/iam/home#users");
        dom.setAttribute(el3,"target","_blank");
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
      needs: ["dashboardIndex"],
      init: function() {
        this._super();
        return this.resetState();
      },
      hasCredential: (function() {
        return !!this.get("model.profile.awsAccount");
      }).property("model.profile.awsAccount"),
      changedCredential: (function() {
        var dashboardController, newHash;
        newHash = Base64.encode("AWSACCOUNT" + this.get("model.profile.awsAccount") + this.get("model.profile.cfgScanInt"));
        if (window.awsAccountHash && window.awsAccountHash !== newHash) {
          dashboardController = this.get("controllers.dashboardIndex");
          dashboardController.send("refreshModel");
        }
        return window.awsAccountHash = newHash;
      }).observes("model.profile.awsAccount", "model.profile.cfgScanInt"),
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
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","label");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-exclamation-triangle");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Last Violation");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
        var element6 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element6,0,0);
        element(env, element6, context, "bind-attr", [], {"class": ":circle model.violationCount:error"});
        content(env, morph0, context, "model.violationCount");
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
          content(env, morph0, context, "nextScanTime");
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
          var el1 = dom.createTextNode("NaN");
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
        var el1 = dom.createTextNode(" min");
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
        block(env, morph0, context, "if", [get(env, context, "hasCredential")], {}, child0, child1);
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
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(element3, [1]);
          var element5 = dom.childAt(element3, [5]);
          var attrMorph0 = dom.createAttrMorph(element4, 'class');
          var morph0 = dom.createMorphAt(dom.childAt(element3, [3]),0,0);
          var morph1 = dom.createMorphAt(element5,0,0);
          var attrMorph1 = dom.createAttrMorph(element5, 'title');
          attribute(env, attrMorph0, element4, "class", concat(env, ["awsicon awsicon-", get(env, context, "resource.icon")]));
          content(env, morph0, context, "resource.count");
          attribute(env, attrMorph1, element5, "title", concat(env, [get(env, context, "resource.name")]));
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
  var child6 = (function() {
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
        var el1 = dom.createTextNode("    ");
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
        var el1 = dom.createTextNode("\n");
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
        var element2 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(dom.childAt(element2, [1, 2]),1,1);
        var morph1 = dom.createMorphAt(element2,3,3);
        inline(env, morph0, context, "dateFromNow", [get(env, context, "vioDateFromNow")], {});
        block(env, morph1, context, "if", [get(env, context, "model.violationRules.length")], {}, child0, child1);
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
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1,"class","panel dashboard-chart");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-title");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3,"class","fa fa-area-chart");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("VIOLATION CHART");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","panel-content");
        var el3 = dom.createComment("");
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 3]),0,0);
        inline(env, morph0, context, "violation-chart", [], {"currentControllerBinding": "controller"});
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
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("                ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("ul");
      dom.setAttribute(el4,"class","info-list");
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
      var el6 = dom.createComment("");
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
      var element7 = dom.childAt(fragment, [2, 3, 1]);
      var element8 = dom.childAt(element7, [3]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(element7,1,1);
      var morph2 = dom.createMorphAt(dom.childAt(element8, [1]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element8, [3]),2,2);
      var morph4 = dom.createMorphAt(dom.childAt(fragment, [4]),3,3);
      var morph5 = dom.createMorphAt(fragment,6,6,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "unless", [get(env, context, "model.resources.length")], {}, child0, null);
      block(env, morph1, context, "link-to", ["scanLog"], {"class": "violation"}, child1, null);
      block(env, morph2, context, "link-to", ["ruleList"], {}, child2, null);
      block(env, morph3, context, "link-to", ["settings"], {}, child3, null);
      block(env, morph4, context, "unless", [get(env, context, "model.resources.length")], {}, child4, child5);
      block(env, morph5, context, "if", [false], {}, child6, child7);
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
    classNames: ["dashboard"]
  });
});

define('controller/DashboardController',[], function() {
  return Ember.Controller.extend({
    needs: ["application", "ruleList"],
    hasCredential: (function() {
      return !!App.user.get("profile").get("awsAccount");
    }).property(),
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
    vioDateFromNow: (function() {
      return App.violationTimestamp;
    }).property(),
    resourceModel: (function() {
      console.log(this.store.get("resource"));
      return this.store.get("resource");
    }).property("resources"),
    actions: {
      refreshModel: function() {
        return this.store.find('dashboard', 1).then(function(post) {
          if (post) {
            return post.destroyRecord();
          }
        });
      }
    }
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
        defaultValue: "name \"rule-1\"\n\ndescription \"\"\n\nparameter\n\n\nif\n    region\n\ndo\n    email()"
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
      },
      didUpdate: function() {
        var unsavedRule;
        unsavedRule = this.store.getById('ruleUnsaved', this.id);
        return unsavedRule != null ? unsavedRule.deleteRecord() : void 0;
      }
    }),
    RuleUnsavedModel: DS.Model.extend({
      content: DS.attr("string", {
        defaultValue: ""
      })
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
        element(env, element8, context, "bind-attr", [], {"disabled": "noRuleSelected"});
        element(env, element8, context, "action", ["deleteRules"], {"target": "view"});
        element(env, element9, context, "bind-attr", [], {"disabled": "noRuleSelected"});
        element(env, element9, context, "action", ["enableSelectedRules"], {});
        element(env, element10, context, "bind-attr", [], {"disabled": "noRuleSelected"});
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
        var el4 = dom.createTextNode("Check out the ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","http://cloudfielder.com/");
        dom.setAttribute(el4,"target","_blank");
        var el5 = dom.createTextNode("document");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(", if you're not familiar with them.");
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
          inline(env, morph0, context, "violation-detail", [], {"action": "closeViolationDetail", "rule": get(env, context, "model"), "isLoadingAudit": get(env, context, "isLoadingAudit"), "version": get(env, context, "version"), "isAudit": get(env, context, "isAudit"), "isValid": get(env, context, "isValid")});
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
          inline(env, morph0, context, "violation-detail", [], {"action": "closeViolationDetail", "rule": get(env, context, "model"), "isLoadingViolation": get(env, context, "isLoadingViolation"), "isValid": get(env, context, "isValid")});
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
        var element4 = dom.childAt(fragment, [0]);
        element(env, element4, context, "action", ["saveRule"], {});
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
        var element3 = dom.childAt(fragment, [0]);
        element(env, element3, context, "action", ["validRule"], {});
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
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","rule-error");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-exclamation-triangle");
        dom.appendChild(el1, el2);
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        content(env, morph0, context, "displayError");
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","rule-unsaved");
        var el2 = dom.createTextNode("\n  You have unsaved edits. ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("Restore edits");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" or ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("Discard");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".\n");
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
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        element(env, element1, context, "action", ["restoreUnsaved"], {});
        element(env, element2, context, "action", ["discardUnsaved"], {});
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
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-green editor-expand");
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-arrows-alt");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"class","rule-help fa fa-question-circle");
      dom.setAttribute(el2,"href","http://cloudfielder.com/");
      dom.setAttribute(el2,"target","_blank");
      dom.setAttribute(el2,"data-tooltip","Syntax Help");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
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
      var element5 = dom.childAt(fragment, [0]);
      var morph0 = dom.createMorphAt(element5,1,1);
      var morph1 = dom.createMorphAt(element5,3,3);
      var morph2 = dom.createMorphAt(element5,7,7);
      var morph3 = dom.createMorphAt(fragment,2,2,contextualElement);
      var morph4 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      block(env, morph0, context, "if", [get(env, context, "enableSave")], {}, child0, child1);
      block(env, morph1, context, "if", [get(env, context, "model.content")], {}, child2, child3);
      block(env, morph2, context, "if", [get(env, context, "displayError")], {}, child4, null);
      block(env, morph3, context, "if", [get(env, context, "unsaved")], {}, child5, null);
      inline(env, morph4, context, "rule-editor", [], {"content": get(env, context, "model.content"), "localError": get(env, context, "localError"), "serverError": get(env, context, "serverError")});
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
          var el1 = dom.createElement("a");
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
        var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
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
        var morph3 = dom.createMorphAt(dom.childAt(element1, [7]),0,0);
        content(env, morph0, context, "model.rule_version");
        inline(env, morph1, context, "interval", [get(env, context, "model.timestamp")], {});
        content(env, morph2, context, "model.event");
        block(env, morph3, context, "if", [get(env, context, "model.hasDetail")], {}, child0, null);
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
      var el4 = dom.createTextNode("VERSION");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
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
      classNames: ["rule-manager"]
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

var wrapEditorError;

wrapEditorError = function(error) {
  return {
    row: error.row - 1,
    column: error.column,
    text: error.message,
    type: 'error'
  };
};

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
      noRuleSelected: (function() {
        return !this.get("hasRuleSelected");
      }).property("hasRuleSelected"),
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
            self.set("isLoadingViolation", false);
            self.set("showDetailPanel", false);
            self.set("isLoadingAudit", false);
            self.set("isAudit", false);
            self.set("isValid", false);
            return self.set("version", null);
          }, 300);
        }
      }
    }),
    RuleIndexController: Ember.Controller.extend({
      needs: ["application", "rule"],
      currentTab: 'content',
      localError: false,
      serverError: false,
      networkError: false,
      displayError: (function() {
        var error, networkError, serverError;
        error = null;
        serverError = this.get('serverError');
        networkError = this.get('networkError');
        if (_.isString(serverError)) {
          error = serverError;
        } else {
          error = false;
        }
        if (_.isObject(serverError)) {
          error = serverError.text;
        }
        if (networkError) {
          error = networkError;
        }
        return error;
      }).property('serverError', 'networkError'),
      enableSave: (function() {
        return this.get('model.isDirty') && !this.get('model.isSaving') && this.get('model.content') && !this.get('localError');
      }).property('model.content', 'model.isSaving', 'model.isDirty', 'localError'),
      unsaved: (function() {
        return this.store.getById('ruleUnsaved', this.get('model.id'));
      }).property('model.isDirty'),
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
        restoreUnsaved: function() {
          var unsaved;
          unsaved = this.get('unsaved');
          if (!unsaved) {
            return;
          }
          this.model.set('content', unsaved.get('content'));
          unsaved.deleteRecord();
          return this.notifyPropertyChange('unsaved');
        },
        discardUnsaved: function() {
          var unsaved;
          unsaved = this.get('unsaved');
          if (!unsaved) {
            return;
          }
          unsaved.deleteRecord();
          return this.notifyPropertyChange('unsaved');
        },
        saveRule: function() {
          var currentModel, isNew, self;
          self = this;
          currentModel = this.model;
          isNew = !this.model.id;
          this.set('networkError', false);
          return currentModel.save().then(function(res) {
            if (isNew && self.get("controllers.application.currentRouteName") === "rule.index" && currentModel === self.model) {
              self.replaceRoute("rule", currentModel.id);
            }
          }, function(error) {
            var errorBody;
            if (error.error === 255) {
              errorBody = error.result;
              if (errorBody.row && errorBody.column) {
                return self.set('serverError', wrapEditorError(errorBody));
              } else {
                return self.set('serverError', errorBody.message);
              }
            } else {
              return self.set('networkError', error.errorMsg);
            }
          });
        },
        validRule: function() {
          var ruleController;
          ruleController = this.get("controllers.rule");
          ruleController.set("isLoadingViolation", true);
          ruleController.set('isAudit', false);
          ruleController.set('isValid', true);
          return ruleController.set('showDetailPanel', true);
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
  window.ResourceLinkMap = {
    "region": "",
    "az": "",
    "instance": "#Instances:search=",
    "kp": "",
    "sg": "#securityGroups:filter=",
    "eip": "#eips:filter=",
    "ami": "",
    "vol": "#Volumes:search=",
    "snap": "",
    "elb": "#LoadBalancers:search=",
    "vpc": "#vpcs:filter=",
    "subnet": "#subnets:filter=",
    "igw": "#igws:filter=",
    "rtb": "#routetables:filter=",
    "vgw": "#vgws:filter=",
    "cgw": "#cgws:filter=",
    "eni": "#NIC:search=",
    "dhcp": "",
    "vpn": "#vpns:filter=",
    "acl": "#acls:filter=",
    'asg': "#AutoScalingGroups:filter=",
    "dbinstance": "#dbinstances:",
    "subnetgroup": "#db-subnet-groups:",
    "optionGroup": "",
    "lc": "#LaunchConfigurations:filter="
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
        var defer, profile;
        profile = App.user.get("profile");
        if (!profile.get("awsAccount")) {
          defer = Q.defer();
          defer.resolve({
            id: 1
          });
          return defer.promise;
        }
        return Q.all([
          ApiRequest("scheduler_list", {
            profile_ids: [App.user.get("profile").id]
          }), App.user.store.findAll("rule"), App.user.store.findAll("resource")
        ]).spread(function(result, rules, resources, violationRules) {
          var id, nextScannedTime, violationCount, _ref, _ref1;
          nextScannedTime = (_ref = result[0]) != null ? _ref.next_run_time_utc : void 0;
          violationCount = ((_ref1 = result[0]) != null ? _ref1.last_violation_num : void 0) || 0;
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
            resources: resources,
            violationRules: violationRules,
            violationCount: violationCount
          };
        });
      },
      deleteRecord: function() {
        var defer;
        defer = new Q.defer();
        defer.resolve();
        return defer.promise;
      }
    }),
    Dashboard: DS.Model.extend({
      nextScannedTime: DS.attr("number", {
        defaultValue: 0
      }),
      violationCount: DS.attr("number", {
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
      find: function(store, type, pageId, snapshot) {
        var filter, timeArray;
        if (pageId == null) {
          pageId = 1;
        }
        if (pageId.indexOf('-') !== -1) {
          timeArray = pageId.split('-');
          timeArray = _.map(timeArray, function(time) {
            if (time.length === 13) {
              time = Math.floor(time / 1000);
            }
            return time;
          });
          filter = {
            startTime: +timeArray[0],
            endTime: +timeArray[1]
          };
        } else {
          pageId = +pageId;
          filter = {
            perPageNum: defaultPerPageNum,
            returnPage: pageId
          };
        }
        return Q.all([
          store.findAll("rule"), ApiRequest("log_filter_log", {
            filter: filter
          })
        ]).spread(function(rules, data) {
          data.id = pageId;
          data.result = _.map(data.result, function(oneScan) {
            var newScan;
            newScan = [];
            _.each(oneScan, function(ruleLog) {
              var rule, ruleId;
              ruleId = ruleLog.rule_id;
              rule = store.getById('rule', ruleId);
              if (rule) {
                ruleLog.name = rule.get('name');
              }
              return newScan.push(ruleLog);
            });
            return newScan;
          });
          return data;
        });
      }
    }),
    RuleScanLogAdapter: DS.Adapter.extend({
      find: function(store, type, ruleId, snapshot) {
        var rule;
        rule = store.getById('rule', ruleId);
        return ApiRequest('log_list', {
          rule_id: ruleId,
          log_type: ['rule']
        }).then(function(data) {
          var result;
          result = data.rule_log;
          result = _.map(result, function(oneScan) {
            _.each(oneScan, function(ruleLog) {
              return ruleLog.name = rule.get('name');
            });
            return oneScan;
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
      start_timestamp: DS.attr('number'),
      end_timestamp: DS.attr('number'),
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
      startTime: (function(key, value) {
        var label, startTime, utcDate;
        if (arguments.length === 1) {
          startTime = this.get("model.start_timestamp");
          utcDate = new Date(+startTime * 1000);
          label = "" + (utcDate.getFullYear()) + "-" + (utcDate.getMonth() + 1) + "-" + (utcDate.getDate()) + " " + (utcDate.getHours()) + ":00";
          this.set("highlight", label);
          return this.get('model.start_timestamp');
        } else if (arguments.length === 2) {
          Ember.run.once(this, 'reloadModel');
          return value;
        }
      }).property('model.start_timestamp'),
      endTime: (function(key, value) {
        if (arguments.length === 1) {
          return this.get('model.end_timestamp');
        } else if (arguments.length === 2) {
          Ember.run.once(this, 'reloadModel');
          return value;
        }
      }).property('model.end_timestamp'),
      reloadModel: function() {
        var controller, endTime, id, startTime;
        controller = this;
        startTime = controller.get('startTime');
        endTime = controller.get('endTime');
        if (startTime && endTime) {
          id = startTime + '-' + endTime;
          return this.transitionToRoute('scanLogPage', id);
        } else {
          return this.transitionToRoute('scanLogPage', 1);
        }
      },
      period: null,
      statType: null,
      timeRange: null,
      needs: ['application', 'scanLogList'],
      hasLog: (function() {
        var result;
        result = this.get('model').get('result');
        return result && result.length;
      }).property(),
      showPagination: (function() {
        return this.model.get('totalPageNum') > 1;
      }).property('model.totalPageNum'),
      actions: {
        turnPage: function(pageNumber) {
          return this.transitionToRoute('scanLogPage', pageNumber);
        },
        closeFilter: function() {
          return this.setProperties({
            startTime: 0,
            endTime: 0
          });
        }
      }
    }),
    ScanLogListController: Ember.ArrayController.extend({
      needs: ['rule'],
      itemController: 'scanLogItem',
      showDetailPanel: false,
      hasLog: (function() {
        return _.some(this.get('model'), function(oneScan) {
          return !!oneScan.length;
        });
      }).property(),
      toggleViolationDetail: function(log) {
        var rule;
        if (this.get("showDetailPanel")) {
          return this.set("showDetailPanel", false);
        } else {
          rule = this.store.getById("rule", log.rule_id);
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
            log = scanLog;
            rule = this.store.getById("rule", log.rule_id);
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
      empty: (function() {
        if (this.get('isSingleRule')) {
          return false;
        }
        return !this.get('model').length;
      }).property(),
      timestamp: (function() {
        if (this.get('isSingleRule')) {
          return this.get('model').timestamp;
        } else {
          return this.get('model')[0].timestamp;
        }
      }).property('model.timestamp'),
      violationCount: (function() {
        var count, model, _ref, _ref1;
        model = this.get('model');
        if (this.get('isSingleRule')) {
          count = countViolation(model != null ? (_ref = model.log) != null ? (_ref1 = _ref.filter_result) != null ? _ref1.resource : void 0 : void 0 : void 0);
        } else {
          count = _.reduce(model, function(memo, logItem) {
            var violationList, _ref2, _ref3;
            violationList = logItem != null ? (_ref2 = logItem.log) != null ? (_ref3 = _ref2.filter_result) != null ? _ref3.resource : void 0 : void 0 : void 0;
            if (violationList) {
              return memo + countViolation(violationList);
            } else {
              return memo;
            }
          }, 0);
        }
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
        var model, _ref, _ref1;
        model = this.get('model');
        return countViolation(model != null ? (_ref = model.log) != null ? (_ref1 = _ref.filter_result) != null ? _ref1.resource : void 0 : void 0 : void 0);
      }).property(),
      hasViolation: (function() {
        return this.get('violationCount') > 0;
      }).property()
    }),
    RuleAuditItemLogController: Ember.Controller.extend({
      needs: ["rule"],
      actions: {
        showAuditLog: function(log) {
          var ruleController;
          ruleController = this.get("controllers.rule");
          if (ruleController.get("showDetailPanel")) {
            ruleController.set("showDetailPanel", false);
            ruleController.set("isLoadingAudit", false);
            ruleController.set("isAudit", false);
            return ruleController.set("version", null);
          } else {
            ruleController.set("version", log.rule_version);
            ruleController.set("isLoadingAudit", true);
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
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","panel-note");
        var el2 = dom.createTextNode("(SHOW CHANGED ONLY)");
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
        dom.setAttribute(el1,"class","log-filter");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","to");
        var el3 = dom.createTextNode("to");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-close");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element;
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
        var element1 = dom.childAt(element0, [5]);
        var morph0 = dom.createMorphAt(element0,0,0);
        var morph1 = dom.createMorphAt(element0,4,4);
        inline(env, morph0, context, "interval", [get(env, context, "startTime"), true], {});
        inline(env, morph1, context, "interval", [get(env, context, "endTime"), true], {});
        element(env, element1, context, "action", ["closeFilter"], {});
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
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","panel");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-title");
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-area-chart");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("VIOLATION CHART");
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
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","panel log-viewer-list");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-title");
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-clock-o");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("HISTORY LOG ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","panel-content");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
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
      var element2 = dom.childAt(fragment, [2]);
      var element3 = dom.childAt(element2, [3]);
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 3]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(element2, [1]),2,2);
      var morph2 = dom.createMorphAt(element3,1,1);
      var morph3 = dom.createMorphAt(element3,3,3);
      var morph4 = dom.createMorphAt(element3,5,5);
      inline(env, morph0, context, "violation-chart", [], {"currentControllerBinding": "controller", "period": get(env, context, "period"), "statType": get(env, context, "statType"), "timeRange": get(env, context, "timeRange"), "highlight": get(env, context, "highlight")});
      block(env, morph1, context, "unless", [get(env, context, "startTime")], {}, child0, null);
      block(env, morph2, context, "if", [get(env, context, "startTime")], {}, child1, null);
      inline(env, morph3, context, "view", ["scanLogList"], {"controller": get(env, context, "controllers.scanLogList"), "model": get(env, context, "result")});
      block(env, morph4, context, "if", [get(env, context, "showPagination")], {}, child2, null);
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

TEMPLATE.error=(function() {
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
        content(env, morph0, context, "result");
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
        var el1 = dom.createTextNode("Sorry, we are suffering from some technical issue, please try again later");
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
      dom.setAttribute(el1,"class","error log-error");
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      block(env, morph0, context, "if", [get(env, context, "result")], {}, child0, child1);
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
                var el1 = dom.createTextNode("                            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
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
                var element5 = dom.childAt(fragment, [1]);
                element(env, element5, context, "action", ["toggleViolation"], {});
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
                var element4 = dom.childAt(fragment, [1]);
                element(env, element4, context, "action", ["toggleViolation"], {});
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
                      content(env, morph0, context, "model.name");
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
                      content(env, morph0, context, "model.rule_id");
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
                      var el1 = dom.createTextNode("                                ");
                      dom.appendChild(el0, el1);
                      var el1 = dom.createElement("a");
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
                      var element0 = dom.childAt(fragment, [1]);
                      element(env, element0, context, "action", ["toggleViolationDetail", get(env, context, "model")], {});
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
                    var el1 = dom.createTextNode("                            ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("li");
                    var el2 = dom.createTextNode("\n                                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createElement("div");
                    dom.setAttribute(el2,"class","vio-rule-info");
                    var el3 = dom.createTextNode("\n                                    Rule ");
                    dom.appendChild(el2, el3);
                    var el3 = dom.createElement("span");
                    dom.setAttribute(el3,"class","rule-name");
                    var el4 = dom.createComment("");
                    dom.appendChild(el3, el4);
                    var el4 = dom.createTextNode(" ");
                    dom.appendChild(el3, el4);
                    dom.appendChild(el2, el3);
                    var el3 = dom.createElement("span");
                    dom.setAttribute(el3,"class","rule-version");
                    var el4 = dom.createTextNode(" (");
                    dom.appendChild(el3, el4);
                    var el4 = dom.createComment("");
                    dom.appendChild(el3, el4);
                    var el4 = dom.createTextNode(")");
                    dom.appendChild(el3, el4);
                    dom.appendChild(el2, el3);
                    var el3 = dom.createTextNode(" has ");
                    dom.appendChild(el2, el3);
                    var el3 = dom.createElement("span");
                    dom.setAttribute(el3,"class","rule-count");
                    var el4 = dom.createComment("");
                    dom.appendChild(el3, el4);
                    dom.appendChild(el2, el3);
                    var el3 = dom.createTextNode(" violations.\n                                ");
                    dom.appendChild(el2, el3);
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("                            ");
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
                    var element1 = dom.childAt(fragment, [1]);
                    var element2 = dom.childAt(element1, [1]);
                    var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
                    var morph1 = dom.createMorphAt(dom.childAt(element2, [2]),1,1);
                    var morph2 = dom.createMorphAt(dom.childAt(element2, [4]),0,0);
                    var morph3 = dom.createMorphAt(element1,3,3);
                    block(env, morph0, context, "if", [get(env, context, "model.name")], {}, child0, child1);
                    content(env, morph1, context, "model.rule_version");
                    content(env, morph2, context, "violationCount");
                    block(env, morph3, context, "if", [get(env, context, "model.name")], {}, child2, null);
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
                var element3 = dom.childAt(fragment, [1, 1]);
                var morph0 = dom.createMorphAt(dom.childAt(element3, [1]),1,1);
                element(env, element3, context, "bind-attr", [], {"class": ":rule-log-detail hide:hide"});
                block(env, morph0, context, "each", [get(env, context, "model")], {"itemController": "scanLogRule"}, child0, null);
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
            var element6 = dom.childAt(fragment, [1]);
            var element7 = dom.childAt(element6, [1]);
            var morph0 = dom.createMorphAt(element6,3,3);
            var morph1 = dom.createMorphAt(dom.childAt(element6, [5]),0,0);
            var morph2 = dom.createMorphAt(dom.childAt(element6, [7]),0,0);
            var morph3 = dom.createMorphAt(dom.childAt(element6, [9]),0,0);
            var morph4 = dom.createMorphAt(fragment,3,3,contextualElement);
            dom.insertBoundary(fragment, null);
            element(env, element7, context, "bind-attr", [], {"class": ":status hasViolation:error"});
            block(env, morph0, context, "if", [get(env, context, "isSingleRule")], {}, child0, null);
            inline(env, morph1, context, "interval", [get(env, context, "timestamp")], {});
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
          block(env, morph0, context, "unless", [get(env, context, "empty")], {}, child0, null);
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
        var element8 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element8,1,1);
        var morph1 = dom.createMorphAt(element8,2,2);
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
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-inbox");
        dom.appendChild(el1, el2);
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
      var element9 = dom.childAt(fragment, [0]);
      var morph0 = dom.createMorphAt(dom.childAt(element9, [1, 1]),3,3);
      var morph1 = dom.createMorphAt(element9,3,3);
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
  Ember.TEMPLATES["scanLog/error"] = template.error;
  return {
    ScanLogPageView: Ember.View.extend({
      template: template.index,
      classNames: ["log-viewer"]
    }),
    ScanLogListView: Ember.View.extend({
      template: template.scan_log
    })
  };
});

define('component/template/ViolationDetailTpl',[], function(){ var TEMPLATE={};

TEMPLATE.index=(function() {
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
        dom.setAttribute(el1,"class","vio-rule-head");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-file-text-o");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Rule content");
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
        block(env, morph0, context, "if", [get(env, context, "isLoadingAudit")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  var child1 = (function() {
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
            content(env, morph0, context, "error.result");
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
            var el1 = dom.createTextNode("Sorry, we are suffering from some technical issue, please try again later");
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
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","error violation-error");
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
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          block(env, morph0, context, "if", [get(env, context, "error.result")], {}, child0, child1);
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
        block(env, morph0, context, "if", [get(env, context, "error")], {}, child0, child1);
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
      var morph1 = dom.createMorphAt(element6,1,1);
      var morph2 = dom.createMorphAt(element6,2,2);
      content(env, morph0, context, "rule.name");
      element(env, element5, context, "action", ["close"], {});
      block(env, morph1, context, "unless", [get(env, context, "isValid")], {}, child0, null);
      block(env, morph2, context, "unless", [get(env, context, "isAudit")], {}, child1, null);
      return fragment;
    }
  };
}());

return TEMPLATE; });
define('component/ViolationDetailComponent',["./template/ViolationDetailTpl", "api/ApiRequest"], function(template, ApiRequest) {
  var ViolationDetailComponent, resourceLoop;
  resourceLoop = function(aArray, count) {
    return _.map(aArray, function(value) {
      var link, platform, _ref, _ref1;
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
      link = window.ResourceLinkMap[value.type];
      if (link && value.regionName && value.id) {
        platform = "vpc";
        if ((_ref1 = value.type) === "instance" || _ref1 === "eni" || _ref1 === "sg" || _ref1 === "eip" || _ref1 === "vol" || _ref1 === "elb") {
          platform = "ec2/v2";
        }
        value.link = "https://" + value.regionName + ".console.aws.amazon.com/" + platform + "/home?region=" + value.regionName + link + value.id;
      }
      return value;
    });
  };
  ViolationDetailComponent = Ember.Component.extend({
    layout: template.index,
    classNames: ["violation-detail"],
    nodes: (function() {
      if (this.get("log")) {
        return resourceLoop(this.get("log").log.filter_result.resource);
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
    }).property("nodes"),
    isLoadingViolation: (function(key, value) {
      var self;
      self = this;
      if (value === true) {
        _.delay(function() {
          return self.checkLoadingState(true);
        });
      }
      return value;
    }).property(),
    isLoadingAudit: (function(key, value) {
      var self;
      self = this;
      if (value === true) {
        _.delay(function() {
          return self.checkLoadingState(null, true);
        });
      }
      return value;
    }).property(),
    didInsertElement: function() {
      return _.delay((function(_this) {
        return function() {
          return $(_this.element).find(".panel").addClass("show");
        };
      })(this));
    },
    checkLoadingState: function(loadingViolation, loadingAudit) {
      var self;
      self = this;
      if (this.get("isLoadingAudit") || loadingAudit) {
        this.set('error', null);
        return ApiRequest("rule_version", {
          rule_id: this.get("rule").id,
          rule_version: self.get("version")
        }).then(function(result) {
          self.set("content", result.content);
          return self.set("isLoadingAudit", false);
        }, function(err) {
          self.set("isLoadingAudit", false);
          return self.set('error', err);
        });
      } else if (this.get("isLoadingViolation") || loadingViolation) {
        this.set('error', null);
        return ApiRequest("rule_filter", {
          profile_id: App.user.get("profile").id,
          content: this.get("rule").get("content")
        }).then(function(result) {
          self.set("nodes", resourceLoop(result.resource));
          return self.set("isLoadingViolation", false);
        }, function(err) {
          var result;
          self.set("isLoadingViolation", false);
          if (err.error === 255) {
            result = err.result.message;
            if (err.result.row && err.result.column) {
              result += ". row: " + err.result.row + ", column: " + err.result.column;
            }
            return self.set('error', {
              result: result
            });
          } else {
            return self.set('error', err);
          }
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
    layout: template.index,
    classNames: ["rule-editor"],
    localError: (function(key, val) {
      if (arguments.length === 1) {
        if (!this.editor) {
          return false;
        }
        return !!this.editor.getSession().getAnnotations().length;
      }
      return false;
    }).property(),
    serverError: (function(key, val) {
      if (!this.editor) {
        return null;
      }
      if (arguments.length === 1) {
        return null;
      }
      if (_.isString(val)) {
        return val;
      }
      if (_.isObject(val) && !_.isArray(val)) {
        val = [val];
      }
      this.editor.getSession().setAnnotations(val);
      return val;
    }).property('content'),
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
      editor.getSession().on("changeAnnotation", function() {
        return that.notifyPropertyChange('localError');
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
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
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
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            content(env, morph0, context, "node.name");
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
            var el1 = dom.createElement("a");
            dom.setAttribute(el1,"class","link fa fa-link");
            dom.setAttribute(el1,"target","_blank");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute;
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
            var attrMorph0 = dom.createAttrMorph(element0, 'href');
            attribute(env, attrMorph0, element0, "href", concat(env, [get(env, context, "node.link")]));
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
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("pre");
            var el2 = dom.createElement("code");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
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
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1, 0]),0,0);
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","type");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","id");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
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
          var element1 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
          var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
          var morph2 = dom.createMorphAt(element1,5,5);
          var morph3 = dom.createMorphAt(element1,7,7);
          var morph4 = dom.createMorphAt(element1,9,9);
          var morph5 = dom.createMorphAt(element1,11,11);
          element(env, element1, context, "bind-attr", [], {"class": "node.resource.length:res:no-more :res-item"});
          content(env, morph0, context, "node.type");
          content(env, morph1, context, "node.id");
          block(env, morph2, context, "if", [get(env, context, "node.name")], {}, child0, null);
          block(env, morph3, context, "if", [get(env, context, "node.link")], {}, child1, null);
          block(env, morph4, context, "if", [get(env, context, "node.eachArray.length")], {}, child2, null);
          inline(env, morph5, context, "violation-node", [], {"nodes": get(env, context, "node.resource")});
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
var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

define('component/ViolationComponent',["./template/ViolationTpl"], function(template) {
  var ResourceAttrFilterArray;
  ResourceAttrFilterArray = ["blockDeviceMapping", "tagSet", "regionName", "type", "id", "count", "link", "eachArray", "resource", "vpcId", "subnetId", "name", "attachmentSet", "VPCZoneIdentifier", "LaunchConfigurationName", "networkInterfaceSet", "attachment", "networkInterfaceId"];
  return Ember.Component.extend({
    layout: template.index,
    nodes: (function(key, value) {
      return _.map(value, function(node) {
        var _key, _value;
        node.eachArray = [];
        for (_key in node) {
          _value = node[_key];
          if (__indexOf.call(ResourceAttrFilterArray.concat([window.ResourceIDMap[node.type]]), _key) < 0) {
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

define('component/template/ViolationChartTpl',[], function(){ var TEMPLATE={};

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
      dom.setAttribute(el1,"class","chart-title");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("label");
      dom.setAttribute(el2,"class","select-name");
      var el3 = dom.createTextNode("Statistic");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","select-wrapper");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("select");
      dom.setAttribute(el3,"class","chart-stat");
      dom.setAttribute(el3,"name","stat_type");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","sum");
      var el5 = dom.createTextNode("Summary");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","avg");
      dom.setAttribute(el4,"selected","");
      var el5 = dom.createTextNode("Average");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","min");
      var el5 = dom.createTextNode("Minimum");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","max");
      var el5 = dom.createTextNode("Maximum");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","select-triangle");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("label");
      dom.setAttribute(el2,"class","select-name");
      var el3 = dom.createTextNode("Time Range");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","select-wrapper");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("select");
      dom.setAttribute(el3,"class","chart-range");
      dom.setAttribute(el3,"name","time_range");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","last_hour");
      var el5 = dom.createTextNode("Last hour");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","last_day");
      dom.setAttribute(el4,"selected","");
      var el5 = dom.createTextNode("Last day");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","last_week");
      var el5 = dom.createTextNode("Last week");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","last_month");
      var el5 = dom.createTextNode("Last month");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","select-triangle");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("label");
      dom.setAttribute(el2,"class","select-name");
      var el3 = dom.createTextNode("Period");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","select-wrapper");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("select");
      dom.setAttribute(el3,"class","chart-period");
      dom.setAttribute(el3,"name","period");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","1h");
      dom.setAttribute(el4,"selected","");
      var el5 = dom.createTextNode("1 hour");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","4h");
      var el5 = dom.createTextNode("4 hour");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","12h");
      var el5 = dom.createTextNode("12 hour");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("option");
      dom.setAttribute(el4,"value","1d");
      var el5 = dom.createTextNode("1 day");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","select-triangle");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-green");
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-refresh");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("Apply");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","canvas-wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","workarea-loading spinner");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","chartjs-tooltip");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","chartjs-highlight");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("canvas");
      dom.setAttribute(el2,"id","chart-canvas");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","chart-blank log-empty");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-inbox");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createTextNode("There is no log yet.");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createTextNode("The result of each scan will appear here.");
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
      var element0 = dom.childAt(fragment, [0, 13]);
      element(env, element0, context, "action", ["applyFilter"], {});
      return fragment;
    }
  };
}());

return TEMPLATE; });
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */


(function(){

  

  //Declare root variable - window in the browser, global on the server
  var root = this,
    previous = root.Chart;

  //Occupy the global variable of Chart, and create a simple base class
  var Chart = function(context){
    var chart = this;
    this.canvas = context.canvas;

    this.ctx = context;

    //Variables global to the chart
    var computeDimension = function(element,dimension)
    {
      if (element['offset'+dimension])
      {
        return element['offset'+dimension];
      }
      else
      {
        return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
      }
    }

    var width = this.width = computeDimension(context.canvas,'Width');
    var height = this.height = computeDimension(context.canvas,'Height');

    // Firefox requires this to work correctly
    context.canvas.width  = width;
    context.canvas.height = height;

    var width = this.width = context.canvas.width;
    var height = this.height = context.canvas.height;
    this.aspectRatio = this.width / this.height;
    //High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
    helpers.retinaScale(this);

    return this;
  };
  //Globally expose the defaults to allow for user updating/changing
  Chart.defaults = {
    global: {
      // Boolean - Whether to animate the chart
      animation: true,

      // Number - Number of animation steps
      animationSteps: 60,

      // String - Animation easing effect
      animationEasing: "easeOutQuart",

      // Boolean - If we should show the scale at all
      showScale: true,

      // Boolean - If we want to override with a hard coded scale
      scaleOverride: false,

      // ** Required if scaleOverride is true **
      // Number - The number of steps in a hard coded scale
      scaleSteps: null,
      // Number - The value jump in the hard coded scale
      scaleStepWidth: null,
      // Number - The scale starting value
      scaleStartValue: null,

      // String - Colour of the scale line
      scaleLineColor: "rgba(0,0,0,.1)",

      // Number - Pixel width of the scale line
      scaleLineWidth: 1,

      // Boolean - Whether to show labels on the scale
      scaleShowLabels: true,

      // Interpolated JS string - can access value
      scaleLabel: "<%=value%>",

      // Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
      scaleIntegersOnly: true,

      // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: false,

      // String - Scale label font declaration for the scale label
      scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Scale label font size in pixels
      scaleFontSize: 12,

      // String - Scale label font weight style
      scaleFontStyle: "normal",

      // String - Scale label font colour
      scaleFontColor: "#666",

      // Boolean - whether or not the chart should be responsive and resize when the browser does.
      responsive: false,

      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,

      // Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
      showTooltips: true,

      // Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
      customTooltips: false,

      // Array - Array of string names to attach tooltip events
      tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

      // String - Tooltip background colour
      tooltipFillColor: "rgba(0,0,0,0.8)",

      // String - Tooltip label font declaration for the scale label
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Tooltip label font size in pixels
      tooltipFontSize: 14,

      // String - Tooltip font weight style
      tooltipFontStyle: "normal",

      // String - Tooltip label font colour
      tooltipFontColor: "#fff",

      // String - Tooltip title font declaration for the scale label
      tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // Number - Tooltip title font size in pixels
      tooltipTitleFontSize: 14,

      // String - Tooltip title font weight style
      tooltipTitleFontStyle: "bold",

      // String - Tooltip title font colour
      tooltipTitleFontColor: "#fff",

      // Number - pixel width of padding around tooltip text
      tooltipYPadding: 6,

      // Number - pixel width of padding around tooltip text
      tooltipXPadding: 6,

      // Number - Size of the caret on the tooltip
      tooltipCaretSize: 8,

      // Number - Pixel radius of the tooltip border
      tooltipCornerRadius: 6,

      // Number - Pixel offset from point x to tooltip edge
      tooltipXOffset: 10,

      // String - Template string for single tooltips
      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

      // String - Template string for single tooltips
      multiTooltipTemplate: "<%= value %>",

      // String - Colour behind the legend colour block
      multiTooltipKeyBackground: '#fff',

      // Function - Will fire on animation progression.
      onAnimationProgress: function(){},

      // Function - Will fire on animation completion.
      onAnimationComplete: function(){}

    }
  };

  //Create a dictionary of chart types, to allow for extension of existing types
  Chart.types = {};

  //Global Chart helpers object for utility methods and classes
  var helpers = Chart.helpers = {};

  //-- Basic js utility methods
  var each = helpers.each = function(loopable,callback,self){
      var additionalArgs = Array.prototype.slice.call(arguments, 3);
      // Check to see if null or undefined firstly.
      if (loopable){
        if (loopable.length === +loopable.length){
          var i;
          for (i=0; i<loopable.length; i++){
            callback.apply(self,[loopable[i], i].concat(additionalArgs));
          }
        }
        else{
          for (var item in loopable){
            callback.apply(self,[loopable[item],item].concat(additionalArgs));
          }
        }
      }
    },
    clone = helpers.clone = function(obj){
      var objClone = {};
      each(obj,function(value,key){
        if (obj.hasOwnProperty(key)) objClone[key] = value;
      });
      return objClone;
    },
    extend = helpers.extend = function(base){
      each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
        each(extensionObject,function(value,key){
          if (extensionObject.hasOwnProperty(key)) base[key] = value;
        });
      });
      return base;
    },
    merge = helpers.merge = function(base,master){
      //Merge properties in left object over to a shallow clone of object right.
      var args = Array.prototype.slice.call(arguments,0);
      args.unshift({});
      return extend.apply(null, args);
    },
    indexOf = helpers.indexOf = function(arrayToSearch, item){
      if (Array.prototype.indexOf) {
        return arrayToSearch.indexOf(item);
      }
      else{
        for (var i = 0; i < arrayToSearch.length; i++) {
          if (arrayToSearch[i] === item) return i;
        }
        return -1;
      }
    },
    where = helpers.where = function(collection, filterCallback){
      var filtered = [];

      helpers.each(collection, function(item){
        if (filterCallback(item)){
          filtered.push(item);
        }
      });

      return filtered;
    },
    findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
      // Default to start of the array
      if (!startIndex){
        startIndex = -1;
      }
      for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
        var currentItem = arrayToSearch[i];
        if (filterCallback(currentItem)){
          return currentItem;
        }
      }
    },
    findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
      // Default to end of the array
      if (!startIndex){
        startIndex = arrayToSearch.length;
      }
      for (var i = startIndex - 1; i >= 0; i--) {
        var currentItem = arrayToSearch[i];
        if (filterCallback(currentItem)){
          return currentItem;
        }
      }
    },
    inherits = helpers.inherits = function(extensions){
      //Basic javascript inheritance based on the model created in Backbone.js
      var parent = this;
      var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

      var Surrogate = function(){ this.constructor = ChartElement;};
      Surrogate.prototype = parent.prototype;
      ChartElement.prototype = new Surrogate();

      ChartElement.extend = inherits;

      if (extensions) extend(ChartElement.prototype, extensions);

      ChartElement.__super__ = parent.prototype;

      return ChartElement;
    },
    noop = helpers.noop = function(){},
    uid = helpers.uid = (function(){
      var id=0;
      return function(){
        return "chart-" + id++;
      };
    })(),
    warn = helpers.warn = function(str){
      //Method for warning of errors
      if (window.console && typeof window.console.warn == "function") console.warn(str);
    },
    amd = helpers.amd = (typeof define == 'function' && define.amd),
  //-- Math methods
    isNumber = helpers.isNumber = function(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    max = helpers.max = function(array){
      return Math.max.apply( Math, array );
    },
    min = helpers.min = function(array){
      return Math.min.apply( Math, array );
    },
    cap = helpers.cap = function(valueToCap,maxValue,minValue){
      if(isNumber(maxValue)) {
        if( valueToCap > maxValue ) {
          return maxValue;
        }
      }
      else if(isNumber(minValue)){
        if ( valueToCap < minValue ){
          return minValue;
        }
      }
      return valueToCap;
    },
    getDecimalPlaces = helpers.getDecimalPlaces = function(num){
      if (num%1!==0 && isNumber(num)){
        return num.toString().split(".")[1].length;
      }
      else {
        return 0;
      }
    },
    toRadians = helpers.radians = function(degrees){
      return degrees * (Math.PI/180);
    },
  // Gets the angle from vertical upright to the point about a centre.
    getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
      var distanceFromXCenter = anglePoint.x - centrePoint.x,
        distanceFromYCenter = anglePoint.y - centrePoint.y,
        radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


      var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

      //If the segment is in the top left quadrant, we need to add another rotation to the angle
      if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
        angle += Math.PI*2;
      }

      return {
        angle: angle,
        distance: radialDistanceFromCenter
      };
    },
    aliasPixel = helpers.aliasPixel = function(pixelWidth){
      return (pixelWidth % 2 === 0) ? 0 : 0.5;
    },
    splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
      //Props to Rob Spencer at scaled innovation for his post on splining between points
      //http://scaledinnovation.com/analytics/splines/aboutSplines.html
      var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
        d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
        fa=t*d01/(d01+d12),// scaling factor for triangle Ta
        fb=t*d12/(d01+d12);
      return {
        inner : {
          x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
          y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
        },
        outer : {
          x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
          y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
        }
      };
    },
    calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
      return Math.floor(Math.log(val) / Math.LN10);
    },
    calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

      //Set a minimum step of two - a point at the top of the graph, and a point at the base
      var minSteps = 2,
        maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
        skipFitting = (minSteps >= maxSteps);

      var maxValue = max(valuesArray),
        minValue = min(valuesArray);

      // We need some degree of seperation here to calculate the scales if all the values are the same
      // Adding/minusing 0.5 will give us a range of 1.
      if (maxValue === minValue){
        maxValue += 0.5;
        // So we don't end up with a graph with a negative start value if we've said always start from zero
        if (minValue >= 0.5 && !startFromZero){
          minValue -= 0.5;
        }
        else{
          // Make up a whole number above the values
          maxValue += 0.5;
        }
      }

      var	valueRange = Math.abs(maxValue - minValue),
        rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
        graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
        graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
        graphRange = graphMax - graphMin,
        stepValue = Math.pow(10, rangeOrderOfMagnitude),
        numberOfSteps = Math.round(graphRange / stepValue);

      //If we have more space on the graph we'll use it to give more definition to the data
      while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
        if(numberOfSteps > maxSteps){
          stepValue *=2;
          numberOfSteps = Math.round(graphRange/stepValue);
          // Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
          if (numberOfSteps % 1 !== 0){
            skipFitting = true;
          }
        }
        //We can fit in double the amount of scale points on the scale
        else{
          //If user has declared ints only, and the step value isn't a decimal
          if (integersOnly && rangeOrderOfMagnitude >= 0){
            //If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
            if(stepValue/2 % 1 === 0){
              stepValue /=2;
              numberOfSteps = Math.round(graphRange/stepValue);
            }
            //If it would make it a float break out of the loop
            else{
              break;
            }
          }
          //If the scale doesn't have to be an int, make the scale more granular anyway.
          else{
            stepValue /=2;
            numberOfSteps = Math.round(graphRange/stepValue);
          }

        }
      }

      if (skipFitting){
        numberOfSteps = minSteps;
        stepValue = graphRange / numberOfSteps;
      }

      return {
        steps : numberOfSteps,
        stepValue : stepValue,
        min : graphMin,
        max	: graphMin + (numberOfSteps * stepValue)
      };

    },
  /* jshint ignore:start */
  // Blows up jshint errors based on the new Function constructor
  //Templating methods
  //Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
    template = helpers.template = function(templateString, valuesObject){

      // If templateString is function rather than string-template - call the function for valuesObject

      if(templateString instanceof Function){
        return templateString(valuesObject);
      }

      var cache = {};
      function tmpl(str, data){
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
          cache[str] = cache[str] :

          // Generate a reusable function that will serve as a template
          // generator (and which will be cached).
          new Function("obj",
            "var p=[],print=function(){p.push.apply(p,arguments);};" +

              // Introduce the data as local variables using with(){}
            "with(obj){p.push('" +

              // Convert the template into pure JavaScript
            str
              .replace(/[\r\t\n]/g, " ")
              .split("<%").join("\t")
              .replace(/((^|%>)[^\t]*)'/g, "$1\r")
              .replace(/\t=(.*?)%>/g, "',$1,'")
              .split("\t").join("');")
              .split("%>").join("p.push('")
              .split("\r").join("\\'") +
            "');}return p.join('');"
          );

        // Provide some basic currying to the user
        return data ? fn( data ) : fn;
      }
      return tmpl(templateString,valuesObject);
    },
  /* jshint ignore:end */
    generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
      var labelsArray = new Array(numberOfSteps);
      if (labelTemplateString){
        each(labelsArray,function(val,index){
          labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
        });
      }
      return labelsArray;
    },
  //--Animation methods
  //Easing functions adapted from Robert Penner's easing equations
  //http://www.robertpenner.com/easing/
    easingEffects = helpers.easingEffects = {
      linear: function (t) {
        return t;
      },
      easeInQuad: function (t) {
        return t * t;
      },
      easeOutQuad: function (t) {
        return -1 * t * (t - 2);
      },
      easeInOutQuad: function (t) {
        if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
        return -1 / 2 * ((--t) * (t - 2) - 1);
      },
      easeInCubic: function (t) {
        return t * t * t;
      },
      easeOutCubic: function (t) {
        return 1 * ((t = t / 1 - 1) * t * t + 1);
      },
      easeInOutCubic: function (t) {
        if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
        return 1 / 2 * ((t -= 2) * t * t + 2);
      },
      easeInQuart: function (t) {
        return t * t * t * t;
      },
      easeOutQuart: function (t) {
        return -1 * ((t = t / 1 - 1) * t * t * t - 1);
      },
      easeInOutQuart: function (t) {
        if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
        return -1 / 2 * ((t -= 2) * t * t * t - 2);
      },
      easeInQuint: function (t) {
        return 1 * (t /= 1) * t * t * t * t;
      },
      easeOutQuint: function (t) {
        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
      },
      easeInOutQuint: function (t) {
        if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
        return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
      },
      easeInSine: function (t) {
        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
      },
      easeOutSine: function (t) {
        return 1 * Math.sin(t / 1 * (Math.PI / 2));
      },
      easeInOutSine: function (t) {
        return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
      },
      easeInExpo: function (t) {
        return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
      },
      easeOutExpo: function (t) {
        return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
      },
      easeInOutExpo: function (t) {
        if (t === 0) return 0;
        if (t === 1) return 1;
        if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
        return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
      },
      easeInCirc: function (t) {
        if (t >= 1) return t;
        return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
      },
      easeOutCirc: function (t) {
        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
      },
      easeInOutCirc: function (t) {
        if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
        return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      easeInElastic: function (t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t === 0) return 0;
        if ((t /= 1) == 1) return 1;
        if (!p) p = 1 * 0.3;
        if (a < Math.abs(1)) {
          a = 1;
          s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(1 / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
      },
      easeOutElastic: function (t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t === 0) return 0;
        if ((t /= 1) == 1) return 1;
        if (!p) p = 1 * 0.3;
        if (a < Math.abs(1)) {
          a = 1;
          s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(1 / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
      },
      easeInOutElastic: function (t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t === 0) return 0;
        if ((t /= 1 / 2) == 2) return 1;
        if (!p) p = 1 * (0.3 * 1.5);
        if (a < Math.abs(1)) {
          a = 1;
          s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(1 / a);
        if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
      },
      easeInBack: function (t) {
        var s = 1.70158;
        return 1 * (t /= 1) * t * ((s + 1) * t - s);
      },
      easeOutBack: function (t) {
        var s = 1.70158;
        return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
      },
      easeInOutBack: function (t) {
        var s = 1.70158;
        if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
        return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
      },
      easeInBounce: function (t) {
        return 1 - easingEffects.easeOutBounce(1 - t);
      },
      easeOutBounce: function (t) {
        if ((t /= 1) < (1 / 2.75)) {
          return 1 * (7.5625 * t * t);
        } else if (t < (2 / 2.75)) {
          return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
        } else if (t < (2.5 / 2.75)) {
          return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
        } else {
          return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
        }
      },
      easeInOutBounce: function (t) {
        if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
        return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
      }
    },
  //Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimFrame = helpers.requestAnimFrame = (function(){
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          return window.setTimeout(callback, 1000 / 60);
        };
    })(),
    cancelAnimFrame = helpers.cancelAnimFrame = (function(){
      return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        window.msCancelAnimationFrame ||
        function(callback) {
          return window.clearTimeout(callback, 1000 / 60);
        };
    })(),
    animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

      var currentStep = 0,
        easingFunction = easingEffects[easingString] || easingEffects.linear;

      var animationFrame = function(){
        currentStep++;
        var stepDecimal = currentStep/totalSteps;
        var easeDecimal = easingFunction(stepDecimal);

        callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
        onProgress.call(chartInstance,easeDecimal,stepDecimal);
        if (currentStep < totalSteps){
          chartInstance.animationFrame = requestAnimFrame(animationFrame);
        } else{
          onComplete.apply(chartInstance);
        }
      };
      requestAnimFrame(animationFrame);
    },
  //-- DOM methods
    getRelativePosition = helpers.getRelativePosition = function(evt){
      var mouseX, mouseY;
      var e = evt.originalEvent || evt,
        canvas = evt.currentTarget || evt.srcElement,
        boundingRect = canvas.getBoundingClientRect();

      if (e.touches){
        mouseX = e.touches[0].clientX - boundingRect.left;
        mouseY = e.touches[0].clientY - boundingRect.top;

      }
      else{
        mouseX = e.clientX - boundingRect.left;
        mouseY = e.clientY - boundingRect.top;
      }

      return {
        x : mouseX,
        y : mouseY
      };

    },
    addEvent = helpers.addEvent = function(node,eventType,method){
      if (node.addEventListener){
        node.addEventListener(eventType,method);
      } else if (node.attachEvent){
        node.attachEvent("on"+eventType, method);
      } else {
        node["on"+eventType] = method;
      }
    },
    removeEvent = helpers.removeEvent = function(node, eventType, handler){
      if (node.removeEventListener){
        node.removeEventListener(eventType, handler, false);
      } else if (node.detachEvent){
        node.detachEvent("on"+eventType,handler);
      } else{
        node["on" + eventType] = noop;
      }
    },
    bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
      // Create the events object if it's not already present
      if (!chartInstance.events) chartInstance.events = {};

      each(arrayOfEvents,function(eventName){
        chartInstance.events[eventName] = function(){
          handler.apply(chartInstance, arguments);
        };
        addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
      });
    },
    unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
      each(arrayOfEvents, function(handler,eventName){
        removeEvent(chartInstance.chart.canvas, eventName, handler);
      });
    },
    getMaximumWidth = helpers.getMaximumWidth = function(domNode){
      var container = domNode.parentNode;
      // TODO = check cross browser stuff with this.
      return container.clientWidth;
    },
    getMaximumHeight = helpers.getMaximumHeight = function(domNode){
      var container = domNode.parentNode;
      // TODO = check cross browser stuff with this.
      return container.clientHeight;
    },
    getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
    retinaScale = helpers.retinaScale = function(chart){
      var ctx = chart.ctx,
        width = chart.canvas.width,
        height = chart.canvas.height;

      if (window.devicePixelRatio) {
        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.height = height * window.devicePixelRatio;
        ctx.canvas.width = width * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    },
  //-- Canvas methods
    clear = helpers.clear = function(chart){
      chart.ctx.clearRect(0,0,chart.width,chart.height);
    },
    fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
      return fontStyle + " " + pixelSize+"px " + fontFamily;
    },
    longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
      ctx.font = font;
      var longest = 0;
      each(arrayOfStrings,function(string){
        var textWidth = ctx.measureText(string).width;
        longest = (textWidth > longest) ? textWidth : longest;
      });
      return longest;
    },
    drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    };


  //Store a reference to each instance - allowing us to globally resize chart instances on window resize.
  //Destroy method on the chart will remove the instance of the chart from this reference.
  Chart.instances = {};

  Chart.Type = function(data,options,chart){
    this.options = options;
    this.chart = chart;
    this.id = uid();
    //Add the chart instance to the global namespace
    Chart.instances[this.id] = this;

    // Initialize is always called when a chart type is created
    // By default it is a no op, but it should be extended
    if (options.responsive){
      this.resize();
    }
    this.initialize.call(this,data);
  };

  //Core methods that'll be a part of every chart type
  extend(Chart.Type.prototype,{
    initialize : function(){return this;},
    clear : function(){
      clear(this.chart);
      return this;
    },
    stop : function(){
      // Stops any current animation loop occuring
      cancelAnimFrame(this.animationFrame);
      return this;
    },
    resize : function(callback){
      this.stop();
      var canvas = this.chart.canvas,
        newWidth = getMaximumWidth(this.chart.canvas),
        newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

      canvas.width = this.chart.width = newWidth;
      canvas.height = this.chart.height = newHeight;

      retinaScale(this.chart);

      if (typeof callback === "function"){
        callback.apply(this, Array.prototype.slice.call(arguments, 1));
      }
      return this;
    },
    reflow : noop,
    render : function(reflow){
      if (reflow){
        this.reflow();
      }
      if (this.options.animation && !reflow){
        helpers.animationLoop(
          this.draw,
          this.options.animationSteps,
          this.options.animationEasing,
          this.options.onAnimationProgress,
          this.options.onAnimationComplete,
          this
        );
      }
      else{
        this.draw();
        this.options.onAnimationComplete.call(this);
      }
      return this;
    },
    generateLegend : function(){
      return template(this.options.legendTemplate,this);
    },
    destroy : function(){
      this.clear();
      unbindEvents(this, this.events);
      var canvas = this.chart.canvas;

      // Reset canvas height/width attributes starts a fresh with the canvas context
      canvas.width = this.chart.width;
      canvas.height = this.chart.height;

      // < IE9 doesn't support removeProperty
      if (canvas.style.removeProperty) {
        canvas.style.removeProperty('width');
        canvas.style.removeProperty('height');
      } else {
        canvas.style.removeAttribute('width');
        canvas.style.removeAttribute('height');
      }

      delete Chart.instances[this.id];
    },
    showTooltip : function(ChartElements, forceRedraw){
      // Only redraw the chart if we've actually changed what we're hovering on.
      if (typeof this.activeElements === 'undefined') this.activeElements = [];

      var isChanged = (function(Elements){
        var changed = false;

        if (Elements.length !== this.activeElements.length){
          changed = true;
          return changed;
        }

        each(Elements, function(element, index){
          if (element !== this.activeElements[index]){
            changed = true;
          }
        }, this);
        return changed;
      }).call(this, ChartElements);

      if (!isChanged && !forceRedraw){
        return;
      }
      else{
        this.activeElements = ChartElements;
      }
      this.draw();
      if(this.options.customTooltips){
        this.options.customTooltips(false);
      }
      if (ChartElements.length > 0){
        // If we have multiple datasets, show a MultiTooltip for all of the data points at that index
        if (this.datasets && this.datasets.length > 1) {
          var dataArray,
            dataIndex;

          for (var i = this.datasets.length - 1; i >= 0; i--) {
            dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
            dataIndex = indexOf(dataArray, ChartElements[0]);
            if (dataIndex !== -1){
              break;
            }
          }
          var tooltipLabels = [],
            tooltipColors = [],
            medianPosition = (function(index) {

              // Get all the points at that particular index
              var Elements = [],
                dataCollection,
                xPositions = [],
                yPositions = [],
                xMax,
                yMax,
                xMin,
                yMin;
              helpers.each(this.datasets, function(dataset){
                dataCollection = dataset.points || dataset.bars || dataset.segments;
                if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
                  Elements.push(dataCollection[dataIndex]);
                }
              });

              helpers.each(Elements, function(element) {
                xPositions.push(element.x);
                yPositions.push(element.y);


                //Include any colour information about the element
                tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
                tooltipColors.push({
                  fill: element._saved.fillColor || element.fillColor,
                  stroke: element._saved.strokeColor || element.strokeColor
                });

              }, this);

              yMin = min(yPositions);
              yMax = max(yPositions);

              xMin = min(xPositions);
              xMax = max(xPositions);

              return {
                x: (xMin > this.chart.width/2) ? xMin : xMax,
                y: (yMin + yMax)/2
              };
            }).call(this, dataIndex);

          new Chart.MultiTooltip({
            x: medianPosition.x,
            y: medianPosition.y,
            xPadding: this.options.tooltipXPadding,
            yPadding: this.options.tooltipYPadding,
            xOffset: this.options.tooltipXOffset,
            fillColor: this.options.tooltipFillColor,
            textColor: this.options.tooltipFontColor,
            fontFamily: this.options.tooltipFontFamily,
            fontStyle: this.options.tooltipFontStyle,
            fontSize: this.options.tooltipFontSize,
            titleTextColor: this.options.tooltipTitleFontColor,
            titleFontFamily: this.options.tooltipTitleFontFamily,
            titleFontStyle: this.options.tooltipTitleFontStyle,
            titleFontSize: this.options.tooltipTitleFontSize,
            cornerRadius: this.options.tooltipCornerRadius,
            labels: tooltipLabels,
            legendColors: tooltipColors,
            legendColorBackground : this.options.multiTooltipKeyBackground,
            title: ChartElements[0].label,
            chart: this.chart,
            ctx: this.chart.ctx,
            custom: this.options.customTooltips
          }).draw();

        } else {
          each(ChartElements, function(Element) {
            var tooltipPosition = Element.tooltipPosition();
            new Chart.Tooltip({
              x: Math.round(tooltipPosition.x),
              y: Math.round(tooltipPosition.y),
              xPadding: this.options.tooltipXPadding,
              yPadding: this.options.tooltipYPadding,
              fillColor: this.options.tooltipFillColor,
              textColor: this.options.tooltipFontColor,
              fontFamily: this.options.tooltipFontFamily,
              fontStyle: this.options.tooltipFontStyle,
              fontSize: this.options.tooltipFontSize,
              caretHeight: this.options.tooltipCaretSize,
              cornerRadius: this.options.tooltipCornerRadius,
              text: template(this.options.tooltipTemplate, Element),
              chart: this.chart,
              custom: this.options.customTooltips
            }).draw();
          }, this);
        }
      }
      return this;
    },
    toBase64Image : function(){
      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
    }
  });

  Chart.Type.extend = function(extensions){

    var parent = this;

    var ChartType = function(){
      return parent.apply(this,arguments);
    };

    //Copy the prototype object of the this class
    ChartType.prototype = clone(parent.prototype);
    //Now overwrite some of the properties in the base class with the new extensions
    extend(ChartType.prototype, extensions);

    ChartType.extend = Chart.Type.extend;

    if (extensions.name || parent.prototype.name){

      var chartName = extensions.name || parent.prototype.name;
      //Assign any potential default values of the new chart type

      //If none are defined, we'll use a clone of the chart type this is being extended from.
      //I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
      //doesn't define some defaults of their own.

      var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

      Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

      Chart.types[chartName] = ChartType;

      //Register this new chart type in the Chart prototype
      Chart.prototype[chartName] = function(data,options){
        var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
        return new ChartType(data,config,this);
      };
    } else{
      warn("Name not provided for this chart, so it hasn't been registered");
    }
    return parent;
  };

  Chart.Element = function(configuration){
    extend(this,configuration);
    this.initialize.apply(this,arguments);
    this.save();
  };
  extend(Chart.Element.prototype,{
    initialize : function(){},
    restore : function(props){
      if (!props){
        extend(this,this._saved);
      } else {
        each(props,function(key){
          this[key] = this._saved[key];
        },this);
      }
      return this;
    },
    save : function(){
      this._saved = clone(this);
      delete this._saved._saved;
      return this;
    },
    update : function(newProps){
      each(newProps,function(value,key){
        this._saved[key] = this[key];
        this[key] = value;
      },this);
      return this;
    },
    transition : function(props,ease){
      each(props,function(value,key){
        this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
      },this);
      return this;
    },
    tooltipPosition : function(){
      return {
        x : this.x,
        y : this.y
      };
    },
    hasValue: function(){
      return isNumber(this.value);
    }
  });

  Chart.Element.extend = inherits;


  Chart.Point = Chart.Element.extend({
    display: true,
    inRange: function(chartX,chartY){
      var hitDetectionRange = this.hitDetectionRadius + this.radius;
      return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
    },
    draw : function(){
      if (this.display){
        var ctx = this.ctx;
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.closePath();

        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = this.strokeWidth;

        ctx.fillStyle = this.fillColor;

        ctx.fill();
        ctx.stroke();
      }


      //Quick debug for bezier curve splining
      //Highlights control points and the line between them.
      //Handy for dev - stripped in the min version.

      // ctx.save();
      // ctx.fillStyle = "black";
      // ctx.strokeStyle = "black"
      // ctx.beginPath();
      // ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
      // ctx.fill();

      // ctx.beginPath();
      // ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
      // ctx.fill();

      // ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
      // ctx.lineTo(this.x, this.y);
      // ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
      // ctx.stroke();

      // ctx.restore();



    }
  });

  Chart.Arc = Chart.Element.extend({
    inRange : function(chartX,chartY){

      var pointRelativePosition = helpers.getAngleFromPoint(this, {
        x: chartX,
        y: chartY
      });

      //Check if within the range of the open/close angle
      var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
        withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

      return (betweenAngles && withinRadius);
      //Ensure within the outside of the arc centre, but inside arc outer
    },
    tooltipPosition : function(){
      var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
        rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
      return {
        x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
        y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
      };
    },
    draw : function(animationPercent){

      var easingDecimal = animationPercent || 1;

      var ctx = this.ctx;

      ctx.beginPath();

      ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

      ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

      ctx.closePath();
      ctx.strokeStyle = this.strokeColor;
      ctx.lineWidth = this.strokeWidth;

      ctx.fillStyle = this.fillColor;

      ctx.fill();
      ctx.lineJoin = 'bevel';

      if (this.showStroke){
        ctx.stroke();
      }
    }
  });

  Chart.Rectangle = Chart.Element.extend({
    draw : function(){
      var ctx = this.ctx,
        halfWidth = this.width/2,
        leftX = this.x - halfWidth,
        rightX = this.x + halfWidth,
        top = this.base - (this.base - this.y),
        halfStroke = this.strokeWidth / 2;

      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (this.showStroke){
        leftX += halfStroke;
        rightX -= halfStroke;
        top += halfStroke;
      }

      ctx.beginPath();

      ctx.fillStyle = this.fillColor;
      ctx.strokeStyle = this.strokeColor;
      ctx.lineWidth = this.strokeWidth;

      // It'd be nice to keep this class totally generic to any rectangle
      // and simply specify which border to miss out.
      ctx.moveTo(leftX, this.base);
      ctx.lineTo(leftX, top);
      ctx.lineTo(rightX, top);
      ctx.lineTo(rightX, this.base);
      ctx.fill();
      if (this.showStroke){
        ctx.stroke();
      }
    },
    height : function(){
      return this.base - this.y;
    },
    inRange : function(chartX,chartY){
      return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
    }
  });

  Chart.Tooltip = Chart.Element.extend({
    draw : function(){

      var ctx = this.chart.ctx;

      ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

      this.xAlign = "center";
      this.yAlign = "above";

      //Distance between the actual element.y position and the start of the tooltip caret
      var caretPadding = this.caretPadding = 2;

      var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
        tooltipRectHeight = this.fontSize + 2*this.yPadding,
        tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

      if (this.x + tooltipWidth/2 >this.chart.width){
        this.xAlign = "left";
      } else if (this.x - tooltipWidth/2 < 0){
        this.xAlign = "right";
      }

      if (this.y - tooltipHeight < 0){
        this.yAlign = "below";
      }


      var tooltipX = this.x - tooltipWidth/2,
        tooltipY = this.y - tooltipHeight;

      ctx.fillStyle = this.fillColor;

      // Custom Tooltips
      if(this.custom){
        this.custom(this);
      }
      else{
        switch(this.yAlign)
        {
          case "above":
            //Draw a caret above the x/y
            ctx.beginPath();
            ctx.moveTo(this.x,this.y - caretPadding);
            ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
            ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
            ctx.closePath();
            ctx.fill();
            break;
          case "below":
            tooltipY = this.y + caretPadding + this.caretHeight;
            //Draw a caret below the x/y
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + caretPadding);
            ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
            ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
            ctx.closePath();
            ctx.fill();
            break;
        }

        switch(this.xAlign)
        {
          case "left":
            tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
            break;
          case "right":
            tooltipX = this.x - (this.cornerRadius + this.caretHeight);
            break;
        }

        drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

        ctx.fill();

        ctx.fillStyle = this.textColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
      }
    }
  });

  Chart.MultiTooltip = Chart.Element.extend({
    initialize : function(){
      this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

      this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

      this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

      this.ctx.font = this.titleFont;

      var titleWidth = this.ctx.measureText(this.title).width,
      //Label has a legend square as well so account for this.
        labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
        longestTextWidth = max([labelWidth,titleWidth]);

      this.width = longestTextWidth + (this.xPadding*2);


      var halfHeight = this.height/2;

      //Check to ensure the height will fit on the canvas
      if (this.y - halfHeight < 0 ){
        this.y = halfHeight;
      } else if (this.y + halfHeight > this.chart.height){
        this.y = this.chart.height - halfHeight;
      }

      //Decide whether to align left or right based on position on canvas
      if (this.x > this.chart.width/2){
        this.x -= this.xOffset + this.width;
      } else {
        this.x += this.xOffset;
      }


    },
    getLineHeight : function(index){
      var baseLineHeight = this.y - (this.height/2) + this.yPadding,
        afterTitleIndex = index-1;

      //If the index is zero, we're getting the title
      if (index === 0){
        return baseLineHeight + this.titleFontSize/2;
      } else{
        return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
      }

    },
    draw : function(){
      // Custom Tooltips
      if(this.custom){
        this.custom(this);
      }
      else{
        drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
        var ctx = this.ctx;
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.closePath();

        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.titleTextColor;
        ctx.font = this.titleFont;

        ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

        ctx.font = this.font;
        helpers.each(this.labels,function(label,index){
          ctx.fillStyle = this.textColor;
          ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

          //A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
          //ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
          //Instead we'll make a white filled block to put the legendColour palette over.

          ctx.fillStyle = this.legendColorBackground;
          ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

          ctx.fillStyle = this.legendColors[index].fill;
          ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


        },this);
      }
    }
  });

  Chart.Scale = Chart.Element.extend({
    initialize : function(){
      this.fit();
    },
    buildYLabels : function(){
      this.yLabels = [];

      var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

      for (var i=0; i<=this.steps; i++){
        this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
      }
      this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
    },
    addXLabel : function(label){
      this.xLabels.push(label);
      this.valuesCount++;
      this.fit();
    },
    removeXLabel : function(){
      this.xLabels.shift();
      this.valuesCount--;
      this.fit();
    },
    // Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
    fit: function(){
      // First we need the width of the yLabels, assuming the xLabels aren't rotated

      // To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
      this.startPoint = (this.display) ? this.fontSize : 0;
      this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

      // Apply padding settings to the start and end point.
      this.startPoint += this.padding;
      this.endPoint -= this.padding;

      // Cache the starting height, so can determine if we need to recalculate the scale yAxis
      var cachedHeight = this.endPoint - this.startPoint,
        cachedYLabelWidth;

      // Build the current yLabels so we have an idea of what size they'll be to start
      /*
       *	This sets what is returned from calculateScaleRange as static properties of this class:
       *
       this.steps;
       this.stepValue;
       this.min;
       this.max;
       *
       */
      this.calculateYRange(cachedHeight);

      // With these properties set we can now build the array of yLabels
      // and also the width of the largest yLabel
      this.buildYLabels();

      this.calculateXLabelRotation();

      while((cachedHeight > this.endPoint - this.startPoint)){
        cachedHeight = this.endPoint - this.startPoint;
        cachedYLabelWidth = this.yLabelWidth;

        this.calculateYRange(cachedHeight);
        this.buildYLabels();

        // Only go through the xLabel loop again if the yLabel width has changed
        if (cachedYLabelWidth < this.yLabelWidth){
          this.calculateXLabelRotation();
        }
      }

    },
    calculateXLabelRotation : function(){
      //Get the width of each grid by calculating the difference
      //between x offsets between 0 and 1.

      this.ctx.font = this.font;

      var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
        lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
        firstRotated,
        lastRotated;


      this.xScalePaddingRight = lastWidth/2 + 3;
      this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

      this.xLabelRotation = 0;
      if (this.display){
        var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
          cosRotation,
          firstRotatedWidth;
        this.xLabelWidth = originalLabelWidth;
        //Allow 3 pixels x2 padding either side for label readability
        var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

        //Max label rotate should be 90 - also act as a loop counter
        while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
          cosRotation = Math.cos(toRadians(this.xLabelRotation));

          firstRotated = cosRotation * firstWidth;
          lastRotated = cosRotation * lastWidth;

          // We're right aligning the text now.
          if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
            this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
          }
          this.xScalePaddingRight = this.fontSize/2;


          this.xLabelRotation++;
          this.xLabelWidth = cosRotation * originalLabelWidth;

        }
        if (this.xLabelRotation > 0){
          this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
        }
      }
      else{
        this.xLabelWidth = 0;
        this.xScalePaddingRight = this.padding;
        this.xScalePaddingLeft = this.padding;
      }

    },
    // Needs to be overidden in each Chart type
    // Otherwise we need to pass all the data into the scale class
    calculateYRange: noop,
    drawingArea: function(){
      return this.startPoint - this.endPoint;
    },
    calculateY : function(value){
      var scalingFactor = this.drawingArea() / (this.min - this.max);
      return this.endPoint - (scalingFactor * (value - this.min));
    },
    calculateX : function(index){
      var isRotated = (this.xLabelRotation > 0),
      // innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
        innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
        valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
        valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

      if (this.offsetGridLines){
        valueOffset += (valueWidth/2);
      }

      return Math.round(valueOffset);
    },
    update : function(newProps){
      helpers.extend(this, newProps);
      this.fit();
    },
    draw : function(){
      var ctx = this.ctx,
        yLabelGap = (this.endPoint - this.startPoint) / this.steps,
        xStart = Math.round(this.xScalePaddingLeft);
      if (this.display){
        ctx.fillStyle = this.textColor;
        ctx.font = this.font;
        each(this.yLabels,function(labelString,index){
          var yLabelCenter = this.endPoint - (yLabelGap * index),
            linePositionY = Math.round(yLabelCenter),
            drawHorizontalLine = this.showHorizontalLines;

          ctx.textAlign = "right";
          ctx.textBaseline = "middle";
          if (this.showLabels){
            ctx.fillText(labelString,xStart - 10,yLabelCenter);
          }

          // This is X axis, so draw it
          if (index === 0 && !drawHorizontalLine){
            drawHorizontalLine = true;
          }

          if (drawHorizontalLine){
            ctx.beginPath();
          }

          if (index > 0){
            // This is a grid line in the centre, so drop that
            ctx.lineWidth = this.gridLineWidth;
            ctx.strokeStyle = this.gridLineColor;
          } else {
            // This is the first line on the scale
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.lineColor;
          }

          linePositionY += helpers.aliasPixel(ctx.lineWidth);

          if(drawHorizontalLine){
            ctx.moveTo(xStart, linePositionY);
            ctx.lineTo(this.width, linePositionY);
            ctx.stroke();
            ctx.closePath();
          }

          ctx.lineWidth = this.lineWidth;
          ctx.strokeStyle = this.lineColor;
          ctx.beginPath();
          ctx.moveTo(xStart - 5, linePositionY);
          ctx.lineTo(xStart, linePositionY);
          ctx.stroke();
          ctx.closePath();

        },this);

        each(this.xLabels,function(label,index){
          var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
          // Check to see if line/bar here and decide where to place the line
            linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
            isRotated = (this.xLabelRotation > 0),
            drawVerticalLine = this.showVerticalLines;

          // This is Y axis, so draw it
          if (index === 0 && !drawVerticalLine){
            drawVerticalLine = true;
          }

          if (drawVerticalLine){
            ctx.beginPath();
          }

          if (index > 0){
            // This is a grid line in the centre, so drop that
            ctx.lineWidth = this.gridLineWidth;
            ctx.strokeStyle = this.gridLineColor;
          } else {
            // This is the first line on the scale
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.lineColor;
          }

          if (drawVerticalLine){
            ctx.moveTo(linePos,this.endPoint);
            ctx.lineTo(linePos,this.startPoint - 3);
            ctx.stroke();
            ctx.closePath();
          }


          ctx.lineWidth = this.lineWidth;
          ctx.strokeStyle = this.lineColor;


          // Small lines at the bottom of the base grid line
          ctx.beginPath();
          ctx.moveTo(linePos,this.endPoint);
          ctx.lineTo(linePos,this.endPoint + 5);
          ctx.stroke();
          ctx.closePath();

          ctx.save();
          ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
          ctx.rotate(toRadians(this.xLabelRotation)*-1);
          ctx.font = this.font;
          ctx.textAlign = (isRotated) ? "right" : "center";
          ctx.textBaseline = (isRotated) ? "middle" : "top";
          ctx.fillText(label, 0, 0);
          ctx.restore();
        },this);

      }
    }

  });

  Chart.RadialScale = Chart.Element.extend({
    initialize: function(){
      this.size = min([this.height, this.width]);
      this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
    },
    calculateCenterOffset: function(value){
      // Take into account half font size + the yPadding of the top value
      var scalingFactor = this.drawingArea / (this.max - this.min);

      return (value - this.min) * scalingFactor;
    },
    update : function(){
      if (!this.lineArc){
        this.setScaleSize();
      } else {
        this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
      }
      this.buildYLabels();
    },
    buildYLabels: function(){
      this.yLabels = [];

      var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

      for (var i=0; i<=this.steps; i++){
        this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
      }
    },
    getCircumference : function(){
      return ((Math.PI*2) / this.valuesCount);
    },
    setScaleSize: function(){
      /*
       * Right, this is really confusing and there is a lot of maths going on here
       * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
       *
       * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
       *
       * Solution:
       *
       * We assume the radius of the polygon is half the size of the canvas at first
       * at each index we check if the text overlaps.
       *
       * Where it does, we store that angle and that index.
       *
       * After finding the largest index and angle we calculate how much we need to remove
       * from the shape radius to move the point inwards by that x.
       *
       * We average the left and right distances to get the maximum shape radius that can fit in the box
       * along with labels.
       *
       * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
       * on each side, removing that from the size, halving it and adding the left x protrusion width.
       *
       * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
       * and position it in the most space efficient manner
       *
       * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
       */


      // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
      // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
      var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
        pointPosition,
        i,
        textWidth,
        halfTextWidth,
        furthestRight = this.width,
        furthestRightIndex,
        furthestRightAngle,
        furthestLeft = 0,
        furthestLeftIndex,
        furthestLeftAngle,
        xProtrusionLeft,
        xProtrusionRight,
        radiusReductionRight,
        radiusReductionLeft,
        maxWidthRadius;
      this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
      for (i=0;i<this.valuesCount;i++){
        // 5px to space the text slightly out - similar to what we do in the draw function.
        pointPosition = this.getPointPosition(i, largestPossibleRadius);
        textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
        if (i === 0 || i === this.valuesCount/2){
          // If we're at index zero, or exactly the middle, we're at exactly the top/bottom
          // of the radar chart, so text will be aligned centrally, so we'll half it and compare
          // w/left and right text sizes
          halfTextWidth = textWidth/2;
          if (pointPosition.x + halfTextWidth > furthestRight) {
            furthestRight = pointPosition.x + halfTextWidth;
            furthestRightIndex = i;
          }
          if (pointPosition.x - halfTextWidth < furthestLeft) {
            furthestLeft = pointPosition.x - halfTextWidth;
            furthestLeftIndex = i;
          }
        }
        else if (i < this.valuesCount/2) {
          // Less than half the values means we'll left align the text
          if (pointPosition.x + textWidth > furthestRight) {
            furthestRight = pointPosition.x + textWidth;
            furthestRightIndex = i;
          }
        }
        else if (i > this.valuesCount/2){
          // More than half the values means we'll right align the text
          if (pointPosition.x - textWidth < furthestLeft) {
            furthestLeft = pointPosition.x - textWidth;
            furthestLeftIndex = i;
          }
        }
      }

      xProtrusionLeft = furthestLeft;

      xProtrusionRight = Math.ceil(furthestRight - this.width);

      furthestRightAngle = this.getIndexAngle(furthestRightIndex);

      furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

      radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

      radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

      // Ensure we actually need to reduce the size of the chart
      radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
      radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

      this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

      //this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
      this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

    },
    setCenterPoint: function(leftMovement, rightMovement){

      var maxRight = this.width - rightMovement - this.drawingArea,
        maxLeft = leftMovement + this.drawingArea;

      this.xCenter = (maxLeft + maxRight)/2;
      // Always vertically in the centre as the text height doesn't change
      this.yCenter = (this.height/2);
    },

    getIndexAngle : function(index){
      var angleMultiplier = (Math.PI * 2) / this.valuesCount;
      // Start from the top instead of right, so remove a quarter of the circle

      return index * angleMultiplier - (Math.PI/2);
    },
    getPointPosition : function(index, distanceFromCenter){
      var thisAngle = this.getIndexAngle(index);
      return {
        x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
        y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
      };
    },
    draw: function(){
      if (this.display){
        var ctx = this.ctx;
        each(this.yLabels, function(label, index){
          // Don't draw a centre value
          if (index > 0){
            var yCenterOffset = index * (this.drawingArea/this.steps),
              yHeight = this.yCenter - yCenterOffset,
              pointPosition;

            // Draw circular lines around the scale
            if (this.lineWidth > 0){
              ctx.strokeStyle = this.lineColor;
              ctx.lineWidth = this.lineWidth;

              if(this.lineArc){
                ctx.beginPath();
                ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
                ctx.closePath();
                ctx.stroke();
              } else{
                ctx.beginPath();
                for (var i=0;i<this.valuesCount;i++)
                {
                  pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
                  if (i === 0){
                    ctx.moveTo(pointPosition.x, pointPosition.y);
                  } else {
                    ctx.lineTo(pointPosition.x, pointPosition.y);
                  }
                }
                ctx.closePath();
                ctx.stroke();
              }
            }
            if(this.showLabels){
              ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
              if (this.showLabelBackdrop){
                var labelWidth = ctx.measureText(label).width;
                ctx.fillStyle = this.backdropColor;
                ctx.fillRect(
                  this.xCenter - labelWidth/2 - this.backdropPaddingX,
                  yHeight - this.fontSize/2 - this.backdropPaddingY,
                  labelWidth + this.backdropPaddingX*2,
                  this.fontSize + this.backdropPaddingY*2
                );
              }
              ctx.textAlign = 'center';
              ctx.textBaseline = "middle";
              ctx.fillStyle = this.fontColor;
              ctx.fillText(label, this.xCenter, yHeight);
            }
          }
        }, this);

        if (!this.lineArc){
          ctx.lineWidth = this.angleLineWidth;
          ctx.strokeStyle = this.angleLineColor;
          for (var i = this.valuesCount - 1; i >= 0; i--) {
            if (this.angleLineWidth > 0){
              var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
              ctx.beginPath();
              ctx.moveTo(this.xCenter, this.yCenter);
              ctx.lineTo(outerPosition.x, outerPosition.y);
              ctx.stroke();
              ctx.closePath();
            }
            // Extra 3px out for some label spacing
            var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
            ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
            ctx.fillStyle = this.pointLabelFontColor;

            var labelsCount = this.labels.length,
              halfLabelsCount = this.labels.length/2,
              quarterLabelsCount = halfLabelsCount/2,
              upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
              exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
            if (i === 0){
              ctx.textAlign = 'center';
            } else if(i === halfLabelsCount){
              ctx.textAlign = 'center';
            } else if (i < halfLabelsCount){
              ctx.textAlign = 'left';
            } else {
              ctx.textAlign = 'right';
            }

            // Set the correct text baseline based on outer positioning
            if (exactQuarter){
              ctx.textBaseline = 'middle';
            } else if (upperHalf){
              ctx.textBaseline = 'bottom';
            } else {
              ctx.textBaseline = 'top';
            }

            ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
          }
        }
      }
    }
  });

  // Attach global event to resize each chart instance when the browser resizes
  helpers.addEvent(window, "resize", (function(){
    // Basic debounce of resize function so it doesn't hurt performance when resizing browser.
    var timeout;
    return function(){
      clearTimeout(timeout);
      timeout = setTimeout(function(){
        each(Chart.instances,function(instance){
          // If the responsive flag is set in the chart instance config
          // Cascade the resize event down to the chart.
          if (instance.options.responsive){
            instance.resize(instance.render, true);
          }
        });
      }, 50);
    };
  })());


  if (amd) {
    define('lib/chart',[],function(){
      return Chart;
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = Chart;
  }

  root.Chart = Chart;

  Chart.noConflict = function(){
    root.Chart = previous;
    return Chart;
  };

}).call(this);

(function(){
  

  var root = this,
    Chart = root.Chart,
    helpers = Chart.helpers;


  var defaultConfig = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

  };


  Chart.Type.extend({
    name: "Bar",
    defaults : defaultConfig,
    initialize:  function(data){

      //Expose options as a scope variable here so we can access it in the ScaleClass
      var options = this.options;

      this.ScaleClass = Chart.Scale.extend({
        offsetGridLines : true,
        calculateBarX : function(datasetCount, datasetIndex, barIndex){
          //Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
          var xWidth = this.calculateBaseWidth(),
            xAbsolute = this.calculateX(barIndex) - (xWidth/2),
            barWidth = this.calculateBarWidth(datasetCount);

          return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
        },
        calculateBaseWidth : function(){
          return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
        },
        calculateBarWidth : function(datasetCount){
          //The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
          var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

          return (baseWidth / datasetCount);
        }
      });

      this.datasets = [];

      //Set up tooltip events on the chart
      if (this.options.showTooltips){
        helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
          var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

          this.eachBars(function(bar){
            bar.restore(['fillColor', 'strokeColor']);
          });
          helpers.each(activeBars, function(activeBar){
            activeBar.fillColor = activeBar.highlightFill;
            activeBar.strokeColor = activeBar.highlightStroke;
          });
          this.showTooltip(activeBars);
        });
      }

      //Declare the extension of the default point, to cater for the options passed in to the constructor
      this.BarClass = Chart.Rectangle.extend({
        strokeWidth : this.options.barStrokeWidth,
        showStroke : this.options.barShowStroke,
        ctx : this.chart.ctx
      });

      //Iterate through each of the datasets, and build this into a property of the chart
      helpers.each(data.datasets,function(dataset,datasetIndex){

        var datasetObject = {
          label : dataset.label || null,
          fillColor : dataset.fillColor,
          strokeColor : dataset.strokeColor,
          bars : []
        };

        this.datasets.push(datasetObject);

        helpers.each(dataset.data,function(dataPoint,index){
          //Add a new point for each piece of data, passing any required data to draw.
          datasetObject.bars.push(new this.BarClass({
            value : dataPoint,
            label : data.labels[index],
            datasetLabel: dataset.label,
            strokeColor : dataset.strokeColor,
            fillColor : dataset.fillColor,
            highlightFill : dataset.highlightFill || dataset.fillColor,
            highlightStroke : dataset.highlightStroke || dataset.strokeColor
          }));
        },this);

      },this);

      this.buildScale(data.labels);

      this.BarClass.prototype.base = this.scale.endPoint;

      this.eachBars(function(bar, index, datasetIndex){
        helpers.extend(bar, {
          width : this.scale.calculateBarWidth(this.datasets.length),
          x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
          y: this.scale.endPoint
        });
        bar.save();
      }, this);

      this.render();
    },
    update : function(){
      this.scale.update();
      // Reset any highlight colours before updating.
      helpers.each(this.activeElements, function(activeElement){
        activeElement.restore(['fillColor', 'strokeColor']);
      });

      this.eachBars(function(bar){
        bar.save();
      });
      this.render();
    },
    eachBars : function(callback){
      helpers.each(this.datasets,function(dataset, datasetIndex){
        helpers.each(dataset.bars, callback, this, datasetIndex);
      },this);
    },
    getBarsAtEvent : function(e){
      var barsArray = [],
        eventPosition = helpers.getRelativePosition(e),
        datasetIterator = function(dataset){
          barsArray.push(dataset.bars[barIndex]);
        },
        barIndex;

      for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
        for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
          if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
            helpers.each(this.datasets, datasetIterator);
            return barsArray;
          }
        }
      }

      return barsArray;
    },
    buildScale : function(labels){
      var self = this;

      var dataTotal = function(){
        var values = [];
        self.eachBars(function(bar){
          values.push(bar.value);
        });
        return values;
      };

      var scaleOptions = {
        templateString : this.options.scaleLabel,
        height : this.chart.height,
        width : this.chart.width,
        ctx : this.chart.ctx,
        textColor : this.options.scaleFontColor,
        fontSize : this.options.scaleFontSize,
        fontStyle : this.options.scaleFontStyle,
        fontFamily : this.options.scaleFontFamily,
        valuesCount : labels.length,
        beginAtZero : this.options.scaleBeginAtZero,
        integersOnly : this.options.scaleIntegersOnly,
        calculateYRange: function(currentHeight){
          var updatedRanges = helpers.calculateScaleRange(
            dataTotal(),
            currentHeight,
            this.fontSize,
            this.beginAtZero,
            this.integersOnly
          );
          helpers.extend(this, updatedRanges);
        },
        xLabels : labels,
        font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
        lineWidth : this.options.scaleLineWidth,
        lineColor : this.options.scaleLineColor,
        showHorizontalLines : this.options.scaleShowHorizontalLines,
        showVerticalLines : this.options.scaleShowVerticalLines,
        gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
        gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
        padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
        showLabels : this.options.scaleShowLabels,
        display : this.options.showScale
      };

      if (this.options.scaleOverride){
        helpers.extend(scaleOptions, {
          calculateYRange: helpers.noop,
          steps: this.options.scaleSteps,
          stepValue: this.options.scaleStepWidth,
          min: this.options.scaleStartValue,
          max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
        });
      }

      this.scale = new this.ScaleClass(scaleOptions);
    },
    addData : function(valuesArray,label){
      //Map the values array for each of the datasets
      helpers.each(valuesArray,function(value,datasetIndex){
        //Add a new point for each piece of data, passing any required data to draw.
        this.datasets[datasetIndex].bars.push(new this.BarClass({
          value : value,
          label : label,
          x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
          y: this.scale.endPoint,
          width : this.scale.calculateBarWidth(this.datasets.length),
          base : this.scale.endPoint,
          strokeColor : this.datasets[datasetIndex].strokeColor,
          fillColor : this.datasets[datasetIndex].fillColor
        }));
      },this);

      this.scale.addXLabel(label);
      //Then re-render the chart.
      this.update();
    },
    removeData : function(){
      this.scale.removeXLabel();
      //Then re-render the chart.
      helpers.each(this.datasets,function(dataset){
        dataset.bars.shift();
      },this);
      this.update();
    },
    reflow : function(){
      helpers.extend(this.BarClass.prototype,{
        y: this.scale.endPoint,
        base : this.scale.endPoint
      });
      var newScaleProps = helpers.extend({
        height : this.chart.height,
        width : this.chart.width
      });
      this.scale.update(newScaleProps);
    },
    draw : function(ease){
      var easingDecimal = ease || 1;
      this.clear();

      var ctx = this.chart.ctx;

      this.scale.draw(easingDecimal);

      //Draw all the bars for each dataset
      helpers.each(this.datasets,function(dataset,datasetIndex){
        helpers.each(dataset.bars,function(bar,index){
          if (bar.hasValue()){
            bar.base = this.scale.endPoint;
            //Transition then draw
            bar.transition({
              x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
              y : this.scale.calculateY(bar.value),
              width : this.scale.calculateBarWidth(this.datasets.length)
            }, easingDecimal).draw();
          }
        },this);

      },this);
    }
  });


}).call(this);

(function(){
  

  var root = this,
    Chart = root.Chart,
  //Cache a local reference to Chart.helpers
    helpers = Chart.helpers;

  var defaultConfig = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout : 50,

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

  };


  Chart.Type.extend({
    //Passing in a name registers this chart in the Chart namespace
    name: "Doughnut",
    //Providing a defaults will also register the deafults in the chart namespace
    defaults : defaultConfig,
    //Initialize is fired when the chart is initialized - Data is passed in as a parameter
    //Config is automatically merged by the core of Chart.js, and is available at this.options
    initialize:  function(data){

      //Declare segments as a static property to prevent inheriting across the Chart type prototype
      this.segments = [];
      this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

      this.SegmentArc = Chart.Arc.extend({
        ctx : this.chart.ctx,
        x : this.chart.width/2,
        y : this.chart.height/2
      });

      //Set up tooltip events on the chart
      if (this.options.showTooltips){
        helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
          var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

          helpers.each(this.segments,function(segment){
            segment.restore(["fillColor"]);
          });
          helpers.each(activeSegments,function(activeSegment){
            activeSegment.fillColor = activeSegment.highlightColor;
          });
          this.showTooltip(activeSegments);
        });
      }
      this.calculateTotal(data);

      helpers.each(data,function(datapoint, index){
        this.addData(datapoint, index, true);
      },this);

      this.render();
    },
    getSegmentsAtEvent : function(e){
      var segmentsArray = [];

      var location = helpers.getRelativePosition(e);

      helpers.each(this.segments,function(segment){
        if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
      },this);
      return segmentsArray;
    },
    addData : function(segment, atIndex, silent){
      var index = atIndex || this.segments.length;
      this.segments.splice(index, 0, new this.SegmentArc({
        value : segment.value,
        outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
        innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
        fillColor : segment.color,
        highlightColor : segment.highlight || segment.color,
        showStroke : this.options.segmentShowStroke,
        strokeWidth : this.options.segmentStrokeWidth,
        strokeColor : this.options.segmentStrokeColor,
        startAngle : Math.PI * 1.5,
        circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
        label : segment.label
      }));
      if (!silent){
        this.reflow();
        this.update();
      }
    },
    calculateCircumference : function(value){
      return (Math.PI*2)*(Math.abs(value) / this.total);
    },
    calculateTotal : function(data){
      this.total = 0;
      helpers.each(data,function(segment){
        this.total += Math.abs(segment.value);
      },this);
    },
    update : function(){
      this.calculateTotal(this.segments);

      // Reset any highlight colours before updating.
      helpers.each(this.activeElements, function(activeElement){
        activeElement.restore(['fillColor']);
      });

      helpers.each(this.segments,function(segment){
        segment.save();
      });
      this.render();
    },

    removeData: function(atIndex){
      var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
      this.segments.splice(indexToDelete, 1);
      this.reflow();
      this.update();
    },

    reflow : function(){
      helpers.extend(this.SegmentArc.prototype,{
        x : this.chart.width/2,
        y : this.chart.height/2
      });
      this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
      helpers.each(this.segments, function(segment){
        segment.update({
          outerRadius : this.outerRadius,
          innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
        });
      }, this);
    },
    draw : function(easeDecimal){
      var animDecimal = (easeDecimal) ? easeDecimal : 1;
      this.clear();
      helpers.each(this.segments,function(segment,index){
        segment.transition({
          circumference : this.calculateCircumference(segment.value),
          outerRadius : this.outerRadius,
          innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
        },animDecimal);

        segment.endAngle = segment.startAngle + segment.circumference;

        segment.draw();
        if (index === 0){
          segment.startAngle = Math.PI * 1.5;
        }
        //Check to see if it's the last segment, if not get the next and update the start angle
        if (index < this.segments.length-1){
          this.segments[index+1].startAngle = segment.endAngle;
        }
      },this);

    }
  });

  Chart.types.Doughnut.extend({
    name : "Pie",
    defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
  });

}).call(this);
(function(){
  

  var root = this,
    Chart = root.Chart,
    helpers = Chart.helpers;

  var defaultConfig = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

  };


  Chart.Type.extend({
    name: "Line",
    defaults : defaultConfig,
    initialize:  function(data){
      //Declare the extension of the default point, to cater for the options passed in to the constructor
      this.PointClass = Chart.Point.extend({
        strokeWidth : this.options.pointDotStrokeWidth,
        radius : this.options.pointDotRadius,
        display: this.options.pointDot,
        hitDetectionRadius : this.options.pointHitDetectionRadius,
        ctx : this.chart.ctx,
        inRange : function(mouseX){
          return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
        }
      });

      this.datasets = [];

      //Set up tooltip events on the chart
      if (this.options.showTooltips){
        helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
          var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
          this.eachPoints(function(point){
            point.restore(['fillColor', 'strokeColor']);
          });
          helpers.each(activePoints, function(activePoint){
            activePoint.fillColor = activePoint.highlightFill;
            activePoint.strokeColor = activePoint.highlightStroke;
          });
          this.showTooltip(activePoints);
        });
      }

      //Iterate through each of the datasets, and build this into a property of the chart
      helpers.each(data.datasets,function(dataset){

        var datasetObject = {
          label : dataset.label || null,
          fillColor : dataset.fillColor,
          strokeColor : dataset.strokeColor,
          pointColor : dataset.pointColor,
          pointStrokeColor : dataset.pointStrokeColor,
          points : []
        };

        this.datasets.push(datasetObject);


        helpers.each(dataset.data,function(dataPoint,index){
          //Add a new point for each piece of data, passing any required data to draw.
          datasetObject.points.push(new this.PointClass({
            value : dataPoint,
            label : data.labels[index],
            datasetLabel: dataset.label,
            strokeColor : dataset.pointStrokeColor,
            fillColor : dataset.pointColor,
            highlightFill : dataset.pointHighlightFill || dataset.pointColor,
            highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
          }));
        },this);

        this.buildScale(data.labels);


        this.eachPoints(function(point, index){
          helpers.extend(point, {
            x: this.scale.calculateX(index),
            y: this.scale.endPoint
          });
          point.save();
        }, this);

      },this);


      this.render();
    },
    update : function(){
      this.scale.update();
      // Reset any highlight colours before updating.
      helpers.each(this.activeElements, function(activeElement){
        activeElement.restore(['fillColor', 'strokeColor']);
      });
      this.eachPoints(function(point){
        point.save();
      });
      this.render();
    },
    eachPoints : function(callback){
      helpers.each(this.datasets,function(dataset){
        helpers.each(dataset.points,callback,this);
      },this);
    },
    getPointsAtEvent : function(e){
      var pointsArray = [],
        eventPosition = helpers.getRelativePosition(e);
      helpers.each(this.datasets,function(dataset){
        helpers.each(dataset.points,function(point){
          if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
        });
      },this);
      return pointsArray;
    },
    buildScale : function(labels){
      var self = this;

      var dataTotal = function(){
        var values = [];
        self.eachPoints(function(point){
          values.push(point.value);
        });

        return values;
      };

      var scaleOptions = {
        templateString : this.options.scaleLabel,
        height : this.chart.height,
        width : this.chart.width,
        ctx : this.chart.ctx,
        textColor : this.options.scaleFontColor,
        fontSize : this.options.scaleFontSize,
        fontStyle : this.options.scaleFontStyle,
        fontFamily : this.options.scaleFontFamily,
        valuesCount : labels.length,
        beginAtZero : this.options.scaleBeginAtZero,
        integersOnly : this.options.scaleIntegersOnly,
        calculateYRange : function(currentHeight){
          var updatedRanges = helpers.calculateScaleRange(
            dataTotal(),
            currentHeight,
            this.fontSize,
            this.beginAtZero,
            this.integersOnly
          );
          helpers.extend(this, updatedRanges);
        },
        xLabels : labels,
        font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
        lineWidth : this.options.scaleLineWidth,
        lineColor : this.options.scaleLineColor,
        showHorizontalLines : this.options.scaleShowHorizontalLines,
        showVerticalLines : this.options.scaleShowVerticalLines,
        gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
        gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
        padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
        showLabels : this.options.scaleShowLabels,
        display : this.options.showScale
      };

      if (this.options.scaleOverride){
        helpers.extend(scaleOptions, {
          calculateYRange: helpers.noop,
          steps: this.options.scaleSteps,
          stepValue: this.options.scaleStepWidth,
          min: this.options.scaleStartValue,
          max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
        });
      }


      this.scale = new Chart.Scale(scaleOptions);
    },
    addData : function(valuesArray,label){
      //Map the values array for each of the datasets

      helpers.each(valuesArray,function(value,datasetIndex){
        //Add a new point for each piece of data, passing any required data to draw.
        this.datasets[datasetIndex].points.push(new this.PointClass({
          value : value,
          label : label,
          x: this.scale.calculateX(this.scale.valuesCount+1),
          y: this.scale.endPoint,
          strokeColor : this.datasets[datasetIndex].pointStrokeColor,
          fillColor : this.datasets[datasetIndex].pointColor
        }));
      },this);

      this.scale.addXLabel(label);
      //Then re-render the chart.
      this.update();
    },
    removeData : function(){
      this.scale.removeXLabel();
      //Then re-render the chart.
      helpers.each(this.datasets,function(dataset){
        dataset.points.shift();
      },this);
      this.update();
    },
    reflow : function(){
      var newScaleProps = helpers.extend({
        height : this.chart.height,
        width : this.chart.width
      });
      this.scale.update(newScaleProps);
    },
    draw : function(ease){
      var easingDecimal = ease || 1;
      this.clear();

      var ctx = this.chart.ctx;

      // Some helper methods for getting the next/prev points
      var hasValue = function(item){
          return item.value !== null;
        },
        nextPoint = function(point, collection, index){
          return helpers.findNextWhere(collection, hasValue, index) || point;
        },
        previousPoint = function(point, collection, index){
          return helpers.findPreviousWhere(collection, hasValue, index) || point;
        };

      this.scale.draw(easingDecimal);


      helpers.each(this.datasets,function(dataset){
        var pointsWithValues = helpers.where(dataset.points, hasValue);

        //Transition each point first so that the line and point drawing isn't out of sync
        //We can use this extra loop to calculate the control points of this dataset also in this loop

        helpers.each(dataset.points, function(point, index){
          if (point.hasValue()){
            point.transition({
              y : this.scale.calculateY(point.value),
              x : this.scale.calculateX(index)
            }, easingDecimal);
          }
        },this);


        // Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
        // This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
        if (this.options.bezierCurve){
          helpers.each(pointsWithValues, function(point, index){
            var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
            point.controlPoints = helpers.splineCurve(
              previousPoint(point, pointsWithValues, index),
              point,
              nextPoint(point, pointsWithValues, index),
              tension
            );

            // Prevent the bezier going outside of the bounds of the graph

            // Cap puter bezier handles to the upper/lower scale bounds
            if (point.controlPoints.outer.y > this.scale.endPoint){
              point.controlPoints.outer.y = this.scale.endPoint;
            }
            else if (point.controlPoints.outer.y < this.scale.startPoint){
              point.controlPoints.outer.y = this.scale.startPoint;
            }

            // Cap inner bezier handles to the upper/lower scale bounds
            if (point.controlPoints.inner.y > this.scale.endPoint){
              point.controlPoints.inner.y = this.scale.endPoint;
            }
            else if (point.controlPoints.inner.y < this.scale.startPoint){
              point.controlPoints.inner.y = this.scale.startPoint;
            }
          },this);
        }


        //Draw the line between all the points
        ctx.lineWidth = this.options.datasetStrokeWidth;
        ctx.strokeStyle = dataset.strokeColor;
        ctx.beginPath();

        helpers.each(pointsWithValues, function(point, index){
          if (index === 0){
            ctx.moveTo(point.x, point.y);
          }
          else{
            if(this.options.bezierCurve){
              var previous = previousPoint(point, pointsWithValues, index);

              ctx.bezierCurveTo(
                previous.controlPoints.outer.x,
                previous.controlPoints.outer.y,
                point.controlPoints.inner.x,
                point.controlPoints.inner.y,
                point.x,
                point.y
              );
            }
            else{
              ctx.lineTo(point.x,point.y);
            }
          }
        }, this);

        ctx.stroke();

        if (this.options.datasetFill && pointsWithValues.length > 0){
          //Round off the line by going to the base of the chart, back to the start, then fill.
          ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
          ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
          ctx.fillStyle = dataset.fillColor;
          ctx.closePath();
          ctx.fill();
        }

        //Now draw the points over the line
        //A little inefficient double looping, but better than the line
        //lagging behind the point positions
        helpers.each(pointsWithValues,function(point){
          point.draw();
        });
      },this);
    }
  });


}).call(this);

(function(){
  

  var root = this,
    Chart = root.Chart,
  //Cache a local reference to Chart.helpers
    helpers = Chart.helpers;

  var defaultConfig = {
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop : true,

    //String - The colour of the label backdrop
    scaleBackdropColor : "rgba(255,255,255,0.75)",

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY : 2,

    //Number - The backdrop padding to the side of the label in pixels
    scaleBackdropPaddingX : 2,

    //Boolean - Show line for each value in the scale
    scaleShowLine : true,

    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke : true,

    //String - The colour of the stroke on each segement.
    segmentStrokeColor : "#fff",

    //Number - The width of the stroke value in pixels
    segmentStrokeWidth : 2,

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect.
    animationEasing : "easeOutBounce",

    //Boolean - Whether to animate the rotation of the chart
    animateRotate : true,

    //Boolean - Whether to animate scaling the chart from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
  };


  Chart.Type.extend({
    //Passing in a name registers this chart in the Chart namespace
    name: "PolarArea",
    //Providing a defaults will also register the deafults in the chart namespace
    defaults : defaultConfig,
    //Initialize is fired when the chart is initialized - Data is passed in as a parameter
    //Config is automatically merged by the core of Chart.js, and is available at this.options
    initialize:  function(data){
      this.segments = [];
      //Declare segment class as a chart instance specific class, so it can share props for this instance
      this.SegmentArc = Chart.Arc.extend({
        showStroke : this.options.segmentShowStroke,
        strokeWidth : this.options.segmentStrokeWidth,
        strokeColor : this.options.segmentStrokeColor,
        ctx : this.chart.ctx,
        innerRadius : 0,
        x : this.chart.width/2,
        y : this.chart.height/2
      });
      this.scale = new Chart.RadialScale({
        display: this.options.showScale,
        fontStyle: this.options.scaleFontStyle,
        fontSize: this.options.scaleFontSize,
        fontFamily: this.options.scaleFontFamily,
        fontColor: this.options.scaleFontColor,
        showLabels: this.options.scaleShowLabels,
        showLabelBackdrop: this.options.scaleShowLabelBackdrop,
        backdropColor: this.options.scaleBackdropColor,
        backdropPaddingY : this.options.scaleBackdropPaddingY,
        backdropPaddingX: this.options.scaleBackdropPaddingX,
        lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
        lineColor: this.options.scaleLineColor,
        lineArc: true,
        width: this.chart.width,
        height: this.chart.height,
        xCenter: this.chart.width/2,
        yCenter: this.chart.height/2,
        ctx : this.chart.ctx,
        templateString: this.options.scaleLabel,
        valuesCount: data.length
      });

      this.updateScaleRange(data);

      this.scale.update();

      helpers.each(data,function(segment,index){
        this.addData(segment,index,true);
      },this);

      //Set up tooltip events on the chart
      if (this.options.showTooltips){
        helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
          var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
          helpers.each(this.segments,function(segment){
            segment.restore(["fillColor"]);
          });
          helpers.each(activeSegments,function(activeSegment){
            activeSegment.fillColor = activeSegment.highlightColor;
          });
          this.showTooltip(activeSegments);
        });
      }

      this.render();
    },
    getSegmentsAtEvent : function(e){
      var segmentsArray = [];

      var location = helpers.getRelativePosition(e);

      helpers.each(this.segments,function(segment){
        if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
      },this);
      return segmentsArray;
    },
    addData : function(segment, atIndex, silent){
      var index = atIndex || this.segments.length;

      this.segments.splice(index, 0, new this.SegmentArc({
        fillColor: segment.color,
        highlightColor: segment.highlight || segment.color,
        label: segment.label,
        value: segment.value,
        outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
        circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
        startAngle: Math.PI * 1.5
      }));
      if (!silent){
        this.reflow();
        this.update();
      }
    },
    removeData: function(atIndex){
      var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
      this.segments.splice(indexToDelete, 1);
      this.reflow();
      this.update();
    },
    calculateTotal: function(data){
      this.total = 0;
      helpers.each(data,function(segment){
        this.total += segment.value;
      },this);
      this.scale.valuesCount = this.segments.length;
    },
    updateScaleRange: function(datapoints){
      var valuesArray = [];
      helpers.each(datapoints,function(segment){
        valuesArray.push(segment.value);
      });

      var scaleSizes = (this.options.scaleOverride) ?
      {
        steps: this.options.scaleSteps,
        stepValue: this.options.scaleStepWidth,
        min: this.options.scaleStartValue,
        max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
      } :
        helpers.calculateScaleRange(
          valuesArray,
          helpers.min([this.chart.width, this.chart.height])/2,
          this.options.scaleFontSize,
          this.options.scaleBeginAtZero,
          this.options.scaleIntegersOnly
        );

      helpers.extend(
        this.scale,
        scaleSizes,
        {
          size: helpers.min([this.chart.width, this.chart.height]),
          xCenter: this.chart.width/2,
          yCenter: this.chart.height/2
        }
      );

    },
    update : function(){
      this.calculateTotal(this.segments);

      helpers.each(this.segments,function(segment){
        segment.save();
      });

      this.reflow();
      this.render();
    },
    reflow : function(){
      helpers.extend(this.SegmentArc.prototype,{
        x : this.chart.width/2,
        y : this.chart.height/2
      });
      this.updateScaleRange(this.segments);
      this.scale.update();

      helpers.extend(this.scale,{
        xCenter: this.chart.width/2,
        yCenter: this.chart.height/2
      });

      helpers.each(this.segments, function(segment){
        segment.update({
          outerRadius : this.scale.calculateCenterOffset(segment.value)
        });
      }, this);

    },
    draw : function(ease){
      var easingDecimal = ease || 1;
      //Clear & draw the canvas
      this.clear();
      helpers.each(this.segments,function(segment, index){
        segment.transition({
          circumference : this.scale.getCircumference(),
          outerRadius : this.scale.calculateCenterOffset(segment.value)
        },easingDecimal);

        segment.endAngle = segment.startAngle + segment.circumference;

        // If we've removed the first segment we need to set the first one to
        // start at the top.
        if (index === 0){
          segment.startAngle = Math.PI * 1.5;
        }

        //Check to see if it's the last segment, if not get the next and update the start angle
        if (index < this.segments.length - 1){
          this.segments[index+1].startAngle = segment.endAngle;
        }
        segment.draw();
      }, this);
      this.scale.draw();
    }
  });

}).call(this);
(function(){
  

  var root = this,
    Chart = root.Chart,
    helpers = Chart.helpers;



  Chart.Type.extend({
    name: "Radar",
    defaults:{
      //Boolean - Whether to show lines for each scale point
      scaleShowLine : true,

      //Boolean - Whether we show the angle lines out of the radar
      angleShowLineOut : true,

      //Boolean - Whether to show labels on the scale
      scaleShowLabels : false,

      // Boolean - Whether the scale should begin at zero
      scaleBeginAtZero : true,

      //String - Colour of the angle line
      angleLineColor : "rgba(0,0,0,.1)",

      //Number - Pixel width of the angle line
      angleLineWidth : 1,

      //String - Point label font declaration
      pointLabelFontFamily : "'Arial'",

      //String - Point label font weight
      pointLabelFontStyle : "normal",

      //Number - Point label font size in pixels
      pointLabelFontSize : 10,

      //String - Point label font colour
      pointLabelFontColor : "#666",

      //Boolean - Whether to show a dot for each point
      pointDot : true,

      //Number - Radius of each point dot in pixels
      pointDotRadius : 3,

      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth : 1,

      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius : 20,

      //Boolean - Whether to show a stroke for datasets
      datasetStroke : true,

      //Number - Pixel width of dataset stroke
      datasetStrokeWidth : 2,

      //Boolean - Whether to fill the dataset with a colour
      datasetFill : true,

      //String - A legend template
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    },

    initialize: function(data){
      this.PointClass = Chart.Point.extend({
        strokeWidth : this.options.pointDotStrokeWidth,
        radius : this.options.pointDotRadius,
        display: this.options.pointDot,
        hitDetectionRadius : this.options.pointHitDetectionRadius,
        ctx : this.chart.ctx
      });

      this.datasets = [];

      this.buildScale(data);

      //Set up tooltip events on the chart
      if (this.options.showTooltips){
        helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
          var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

          this.eachPoints(function(point){
            point.restore(['fillColor', 'strokeColor']);
          });
          helpers.each(activePointsCollection, function(activePoint){
            activePoint.fillColor = activePoint.highlightFill;
            activePoint.strokeColor = activePoint.highlightStroke;
          });

          this.showTooltip(activePointsCollection);
        });
      }

      //Iterate through each of the datasets, and build this into a property of the chart
      helpers.each(data.datasets,function(dataset){

        var datasetObject = {
          label: dataset.label || null,
          fillColor : dataset.fillColor,
          strokeColor : dataset.strokeColor,
          pointColor : dataset.pointColor,
          pointStrokeColor : dataset.pointStrokeColor,
          points : []
        };

        this.datasets.push(datasetObject);

        helpers.each(dataset.data,function(dataPoint,index){
          //Add a new point for each piece of data, passing any required data to draw.
          var pointPosition;
          if (!this.scale.animation){
            pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
          }
          datasetObject.points.push(new this.PointClass({
            value : dataPoint,
            label : data.labels[index],
            datasetLabel: dataset.label,
            x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
            y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
            strokeColor : dataset.pointStrokeColor,
            fillColor : dataset.pointColor,
            highlightFill : dataset.pointHighlightFill || dataset.pointColor,
            highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
          }));
        },this);

      },this);

      this.render();
    },
    eachPoints : function(callback){
      helpers.each(this.datasets,function(dataset){
        helpers.each(dataset.points,callback,this);
      },this);
    },

    getPointsAtEvent : function(evt){
      var mousePosition = helpers.getRelativePosition(evt),
        fromCenter = helpers.getAngleFromPoint({
          x: this.scale.xCenter,
          y: this.scale.yCenter
        }, mousePosition);

      var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
        pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
        activePointsCollection = [];

      // If we're at the top, make the pointIndex 0 to get the first of the array.
      if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
        pointIndex = 0;
      }

      if (fromCenter.distance <= this.scale.drawingArea){
        helpers.each(this.datasets, function(dataset){
          activePointsCollection.push(dataset.points[pointIndex]);
        });
      }

      return activePointsCollection;
    },

    buildScale : function(data){
      this.scale = new Chart.RadialScale({
        display: this.options.showScale,
        fontStyle: this.options.scaleFontStyle,
        fontSize: this.options.scaleFontSize,
        fontFamily: this.options.scaleFontFamily,
        fontColor: this.options.scaleFontColor,
        showLabels: this.options.scaleShowLabels,
        showLabelBackdrop: this.options.scaleShowLabelBackdrop,
        backdropColor: this.options.scaleBackdropColor,
        backdropPaddingY : this.options.scaleBackdropPaddingY,
        backdropPaddingX: this.options.scaleBackdropPaddingX,
        lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
        lineColor: this.options.scaleLineColor,
        angleLineColor : this.options.angleLineColor,
        angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
        // Point labels at the edge of each line
        pointLabelFontColor : this.options.pointLabelFontColor,
        pointLabelFontSize : this.options.pointLabelFontSize,
        pointLabelFontFamily : this.options.pointLabelFontFamily,
        pointLabelFontStyle : this.options.pointLabelFontStyle,
        height : this.chart.height,
        width: this.chart.width,
        xCenter: this.chart.width/2,
        yCenter: this.chart.height/2,
        ctx : this.chart.ctx,
        templateString: this.options.scaleLabel,
        labels: data.labels,
        valuesCount: data.datasets[0].data.length
      });

      this.scale.setScaleSize();
      this.updateScaleRange(data.datasets);
      this.scale.buildYLabels();
    },
    updateScaleRange: function(datasets){
      var valuesArray = (function(){
        var totalDataArray = [];
        helpers.each(datasets,function(dataset){
          if (dataset.data){
            totalDataArray = totalDataArray.concat(dataset.data);
          }
          else {
            helpers.each(dataset.points, function(point){
              totalDataArray.push(point.value);
            });
          }
        });
        return totalDataArray;
      })();


      var scaleSizes = (this.options.scaleOverride) ?
      {
        steps: this.options.scaleSteps,
        stepValue: this.options.scaleStepWidth,
        min: this.options.scaleStartValue,
        max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
      } :
        helpers.calculateScaleRange(
          valuesArray,
          helpers.min([this.chart.width, this.chart.height])/2,
          this.options.scaleFontSize,
          this.options.scaleBeginAtZero,
          this.options.scaleIntegersOnly
        );

      helpers.extend(
        this.scale,
        scaleSizes
      );

    },
    addData : function(valuesArray,label){
      //Map the values array for each of the datasets
      this.scale.valuesCount++;
      helpers.each(valuesArray,function(value,datasetIndex){
        var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
        this.datasets[datasetIndex].points.push(new this.PointClass({
          value : value,
          label : label,
          x: pointPosition.x,
          y: pointPosition.y,
          strokeColor : this.datasets[datasetIndex].pointStrokeColor,
          fillColor : this.datasets[datasetIndex].pointColor
        }));
      },this);

      this.scale.labels.push(label);

      this.reflow();

      this.update();
    },
    removeData : function(){
      this.scale.valuesCount--;
      this.scale.labels.shift();
      helpers.each(this.datasets,function(dataset){
        dataset.points.shift();
      },this);
      this.reflow();
      this.update();
    },
    update : function(){
      this.eachPoints(function(point){
        point.save();
      });
      this.reflow();
      this.render();
    },
    reflow: function(){
      helpers.extend(this.scale, {
        width : this.chart.width,
        height: this.chart.height,
        size : helpers.min([this.chart.width, this.chart.height]),
        xCenter: this.chart.width/2,
        yCenter: this.chart.height/2
      });
      this.updateScaleRange(this.datasets);
      this.scale.setScaleSize();
      this.scale.buildYLabels();
    },
    draw : function(ease){
      var easeDecimal = ease || 1,
        ctx = this.chart.ctx;
      this.clear();
      this.scale.draw();

      helpers.each(this.datasets,function(dataset){

        //Transition each point first so that the line and point drawing isn't out of sync
        helpers.each(dataset.points,function(point,index){
          if (point.hasValue()){
            point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
          }
        },this);



        //Draw the line between all the points
        ctx.lineWidth = this.options.datasetStrokeWidth;
        ctx.strokeStyle = dataset.strokeColor;
        ctx.beginPath();
        helpers.each(dataset.points,function(point,index){
          if (index === 0){
            ctx.moveTo(point.x,point.y);
          }
          else{
            ctx.lineTo(point.x,point.y);
          }
        },this);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = dataset.fillColor;
        ctx.fill();

        //Now draw the points over the line
        //A little inefficient double looping, but better than the line
        //lagging behind the point positions
        helpers.each(dataset.points,function(point){
          if (point.hasValue()){
            point.draw();
          }
        });

      },this);

    }

  });





}).call(this);
define('component/ViolationChartComponent',["./template/ViolationChartTpl", "lib/chart", "api/ApiRequest"], function(template, Chart, ApiRequest) {
  Chart.defaults.global.customTooltips = function(tooltip) {
    var canvas, horizonFix, left, tooltipEl, top, verticalFix;
    tooltipEl = $("#chartjs-tooltip");
    if (!tooltip) {
      tooltipEl.css({
        opacity: 0
      });
      return;
    }
    tooltipEl.removeClass("above below");
    tooltipEl.html(tooltip.text);
    top = 0;
    canvas = tooltip.chart.canvas;
    verticalFix = ((canvas.height - tooltip.y) * parseInt(getComputedStyle(canvas).paddingTop) - tooltip.y * parseInt(getComputedStyle(canvas).paddingBottom)) / canvas.height;
    horizonFix = ((canvas.width - tooltip.x) * parseInt(getComputedStyle(canvas).paddingLeft) - tooltip.x * parseInt(getComputedStyle(canvas).paddingRight)) / canvas.width;
    if (tooltip.yAlign === "above") {
      top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding + verticalFix;
    } else {
      top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding + verticalFix;
    }
    if (top < 100) {
      tooltip.yAlign = "below";
      top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding + verticalFix;
    }
    tooltipEl.addClass(tooltip.yAlign);
    left = horizonFix + tooltip.x;
    return tooltipEl.css({
      opacity: 1,
      left: canvas.offsetLeft + left + "px",
      top: canvas.offsetTop + top + "px",
      fontFamily: tooltip.fontFamily,
      fontSize: tooltip.fontSize,
      fontStyle: tooltip.fontStyle
    });
  };
  return Ember.Component.extend({
    classNames: ["violation-chart"],
    layout: template.index,
    didInsertElement: function() {
      var period, statType, timeRange;
      timeRange = this.get("timeRange");
      period = this.get("period");
      statType = this.get("statType");
      return this.send("renderChart", {
        timeRange: timeRange,
        period: period,
        statType: statType
      });
    },
    actions: {
      applyFilter: function() {
        var $elem, period, statType, timeRange;
        $elem = this.$();
        timeRange = $elem.find("[name='time_range']").val();
        period = $elem.find("[name='period']").val();
        statType = $elem.find("[name='stat_type']").val();
        return this.send("renderChart", {
          timeRange: timeRange,
          period: period,
          statType: statType
        });
      },
      jumpToLog: function(params) {
        var _ref;
        return (_ref = this.get('currentController')) != null ? _ref.transitionToRoute("scanLogPage", 1).then(function() {
          var controller;
          controller = App.__container__.lookup("controller:scanLogPage");
          return controller.setProperties(params);
        }) : void 0;
      },
      renderChart: function(filter) {
        var $canvasWrapper, self, timePeriodMap;
        self = this;
        $canvasWrapper = $(".canvas-wrapper");
        $canvasWrapper.addClass("loading").removeClass("empty");
        _.each(filter, function(v, k) {
          if (!v) {
            return delete filter[k];
          }
        });
        _.defaults(filter, {
          timeRange: "last_day",
          period: "1h",
          statType: "avg"
        });
        timePeriodMap = {
          "1h": "1",
          "4h": "4",
          "12h": "12",
          "1d": "24"
        };
        $("#chartjs-highlight").hide();
        return ApiRequest("log_stat_violation", {
          filter: filter
        }).then(function(result) {
          var ctx, data, scaleStepWidth, sortedResult;
          if (self.chartCanvas) {
            self.chartCanvas.destroy();
          }
          $("#chart-canvas").remove();
          $canvasWrapper.append("<canvas id='chart-canvas'></canvas>");
          ctx = document.getElementById("chart-canvas").getContext("2d");
          $canvasWrapper.removeClass("loading");
          window.hourRange = timePeriodMap[filter.period];
          if (result.length <= 0) {
            $canvasWrapper.addClass("empty");
            return;
          }
          sortedResult = _.sortBy(result, function(value) {
            var date;
            date = value._id;
            return new Date(date.year, date.month - 1, date.day, date.hour_index || 0, 0);
          });
          data = {
            labels: _.map(sortedResult, function(value) {
              var date, label, utcDate;
              date = value._id;
              utcDate = new Date(Date.UTC(date.year, date.month - 1, date.day, date.hour_index * hourRange || 0));
              label = "" + (utcDate.getFullYear()) + "-" + (utcDate.getMonth() + 1) + "-" + (utcDate.getDate()) + " " + (utcDate.getHours()) + ":00";
              return label;
            }),
            datasets: [
              {
                label: "Violation Charts",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                period: timePeriodMap[filter.period],
                data: _.map(sortedResult, function(value) {
                  return value[filter.statType];
                })
              }
            ]
          };
          Chart.defaults.global.onAnimationProgress = function() {
            var canvas, highlightElement, horizonFix, label, left, targetPoint, top, verticalFix;
            highlightElement = $("#chartjs-highlight");
            if (self.get("highlight")) {
              label = self.get("highlight");
              targetPoint = _.findWhere(self.chartCanvas.datasets[0].points, {
                label: label
              });
              if (!targetPoint) {
                highlightElement.hide();
                return false;
              }
              canvas = self.chartCanvas.chart.canvas;
              horizonFix = ((canvas.width - targetPoint.x) * parseInt(getComputedStyle(canvas).paddingLeft) - targetPoint.x * parseInt(getComputedStyle(canvas).paddingRight)) / canvas.width;
              verticalFix = ((canvas.height - targetPoint.y) * parseInt(getComputedStyle(canvas).paddingTop) - targetPoint.y * parseInt(getComputedStyle(canvas).paddingBottom)) / canvas.height;
              left = horizonFix + targetPoint.x - 10 + canvas.offsetLeft;
              top = targetPoint.y + verticalFix - 10 - canvas.offsetTop;
              return highlightElement.css({
                left: left,
                top: top
              });
            } else {
              return highlightElement.hide();
            }
          };
          scaleStepWidth = (Math.floor(_.max(data.datasets[0].data) * 1.1 / 10 / 5) + 1) * 5 || 5;
          self.chartCanvas = new Chart(ctx).Line(data, {
            bezierCurve: false,
            responsive: true,
            scaleBeginAtZero: true,
            scaleGridLineColor: "rgba(255,255,255,.075)",
            scaleOverride: true,
            scaleSteps: 10,
            scaleStepWidth: scaleStepWidth,
            scaleStartValue: 0,
            tooltipTemplate: "<% var maxDate = new Date(+new Date(label) + hourRange * 1000 * 3600);\nvar year = maxDate.getFullYear();\nvar month = maxDate.getMonth() + 1;\nvar day = maxDate.getDate();\nvar hour = maxDate.getHours(); %>\n<span class=\"violation-chart-count\"><span><%= Math.round(value*10)/10 %></span>violations</span>\n<span class=\"violation-chart-range\">\n  <code>Form:</code> <span><%= label %></span> <br/>\n  <code>To&nbsp;&nbsp;:</code> <span><%=year + \"-\" + month + \"-\" + day + \" \" + hour + \":00\" %></span>\n</span>"
          });
          if (self.get('highlight')) {
            $("#chartjs-highlight").show();
          } else {
            $("#chartjs-highlight").hide();
          }
          $("#chart-canvas").on("mousemove", function(evt) {
            var activePoint, hasPoint;
            activePoint = self.chartCanvas.getPointsAtEvent(evt)[0];
            hasPoint = !!activePoint;
            return $(this).toggleClass("pointer", hasPoint);
          });
          return document.getElementById("chart-canvas").onclick = function(evt) {
            var activePoints, currentPoint, endTime, highlight, period, startTime, statType, timeRange;
            activePoints = self.chartCanvas.getPointsAtEvent(evt);
            currentPoint = activePoints[0];
            highlight = currentPoint.label;
            if (!currentPoint) {
              return false;
            }
            startTime = +new Date(currentPoint.label) / 1000;
            endTime = +new Date(+startTime * 1000 + window.hourRange * 1000 * 3600) / 1000;
            period = filter.period;
            statType = filter.statType;
            timeRange = filter.timeRange;
            return self.send("jumpToLog", {
              startTime: startTime,
              endTime: endTime,
              period: period,
              statType: statType,
              timeRange: timeRange,
              highlight: highlight
            });
          };
        });
      }
    }
  });
});

define('ui/UI.notification',[], function() {
  var NOTIFICATION_TYPES, notification, timeout_close;
  NOTIFICATION_TYPES = {
    "error": true,
    "warning": true,
    "info": true
  };
  timeout_close = function(target_dom, is_error, text_length) {
    var stay_time, to;
    stay_time = text_length * 80;
    if (is_error) {
      stay_time = stay_time + 2000;
    }
    to = setTimeout(function() {
      return target_dom.trigger('CLOSE_ITEM');
    }, stay_time);
    target_dom.data("close_to", to);
    return false;
  };
  notification = function(type, template, auto_close) {
    var close, closeTpl, i, item, item_count, item_dom, items, notification_wrap, notifyTpl, to, _results;
    if (!NOTIFICATION_TYPES[type] || !template) {
      return;
    }
    notification_wrap = $('#notification_wrap');
    if (notification_wrap.length === 0) {
      close = function() {
        return $(this).closest(".notification_item").addClass("closing").slideUp('fast', function() {
          return $(this).remove();
        });
      };
      notification_wrap = $('<div id="notification_wrap"></div>').appendTo($(document.body)).on('click', ".notification_close", close).on('CLOSE_ITEM', ".notification_item", close);
    }
    if (auto_close) {
      closeTpl = '<i class="notification_close">&times;</i>';
    }
    notifyTpl = '<div class="notification_item ' + type + '_item">' + '<span>' + $('<div>').text(template).html() + '</span>' + (closeTpl || '') + '</div>';
    item_dom = $(notifyTpl).appendTo(notification_wrap);
    if (!auto_close) {
      timeout_close(item_dom, type === "error", template.length);
    }
    items = notification_wrap.children(":not(.closing)");
    item_count = items.length - 1;
    if (item_count >= 3) {
      i = 0;
      _results = [];
      while (i < item_count) {
        item = items.eq(i);
        if (item.children("span").text() === template) {
          to = item.trigger("CLOSE_ITEM").data("close_to");
          if (to) {
            clearTimeout(to);
          }
          break;
        }
        _results.push(++i);
      }
      return _results;
    }
  };
  return notification;
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
  Ember.Handlebars.helper('interval', function(value, noFromNow) {
    var date, dateInterval, dateIntervalStr, dateObj, dateStr;
    date = Number(value);
    dateObj = new Date(date * 1000);
    dateStr = dateFormat(dateObj, "yyyy-MM-dd hh:mm:ss");
    dateInterval = intervalDate(date);
    dateIntervalStr = ' <span class="date-interval">(' + dateInterval + ')</span>';
    if (noFromNow) {
      dateIntervalStr = '';
    }
    return new Ember.Handlebars.SafeString('<span data-tooltip="' + dateObj + '">' + dateStr + dateIntervalStr + '</span>');
  });
  Ember.Handlebars.helper('dateFromNow', function(value) {
    var date, dateInterval;
    date = Number(value);
    dateInterval = intervalDate(date);
    return new Ember.Handlebars.SafeString(dateInterval);
  });
  Ember.Handlebars.helper('gravatar', function(email) {
    return new Ember.Handlebars.SafeString('https://www.gravatar.com/avatar/' + md5(email));
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
      if (e.target.tagName === 'A') {
        e.stopPropagation();
        return;
      }
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
define('core/Application',["view/ApplicationView", "controller/ApplicationController", "core/Router", "core/Store", "route/ApplicationRoute", "route/DashboardRoute", "route/LogRoute", "route/RuleManagerRoute", "route/InvalidSessionRoute", "route/SettingsRoute", "view/SettingsView", "controller/SettingsController", "view/DashboardView", "controller/DashboardController", "model/SessionModel", "model/UserModel", "model/RuleModel", "view/RuleView", "controller/RuleManagerC", "model/DashboardModel", "model/LogModel", "controller/LogController", "view/LogView", "component/ViolationDetailComponent", "component/RuleEditorComponent", "component/PaginationComponent", "component/ViolationComponent", "component/ViolationChartComponent", "ui/UI.notification", "./Helper"], function(ApplicationView, ApplicationController, Router, Store, ApplicationRoute, DashboardRoute, LogRoute, RuleManagerRoute, InvalidSessionRoute, SettingsRoute, SettingsView, SettingsController, DashboardView, DashboardController, SessionModel, UserModel, RuleModel, RuleView, RuleController, DashboardModel, LogModel, LogController, LogView, ViolationDetailComponent, RuleEditorComponent, PaginationComponent, ViolationComponent, ViolationChartComponent, notification) {
  window.App = Ember.Application.extend({
    LOG_TRANSITIONS: true,
    rootElement: "body",
    logout: function() {
      App.session.destroyRecord().then(function() {
        return App.gotoLoginPage();
      });
    },
    gotoLoginPage: function() {
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
  }).create();
  App.notification = notification;
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
  App.ApplicationController = ApplicationController;
  Ember.mixin(App, ApplicationRoute);
  Ember.mixin(App, InvalidSessionRoute);
  App.DashboardIndexRoute = DashboardRoute;
  App.DashboardIndexView = DashboardView;
  App.DashboardIndexController = DashboardController;
  App.ViolationDetailComponent = ViolationDetailComponent;
  App.RuleEditorComponent = RuleEditorComponent;
  App.ViolationNodeComponent = ViolationComponent;
  App.ViolationChartComponent = ViolationChartComponent;
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
