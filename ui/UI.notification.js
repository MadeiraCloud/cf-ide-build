define([], function() {
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
