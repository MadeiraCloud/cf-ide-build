define(["../template/Panel"], function(template) {
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
