(function (window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList2(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }
  CheckList2.prototype.addClickHandler = function (fn) {
    this.$element.on("click", "input", function (event) {
      var name = event.target.value;
      this.removeRow(name);
      fn(name);
    }.bind(this));
  };

  CheckList2.prototype.addRow = function (coffeeOrder) {
    this.removeRow(coffeeOrder.title);

    var rowElement = new Row(coffeeOrder);

    this.$element.append(rowElement.$element);
  };

  CheckList2.prototype.removeRow = function (title) {
    this.$element
      .find("[value=\"" + title + "\"]")
      .closest("[data-coffee-order=\"checkbox\"]")
      .remove();
  };

  function Row(coffeeOrder) {
    var $div = $("<div></div>", {
      "data-coffee-order": "checkbox",
      "class": "checkbox"
    });

    var $label = $("<label></label>");

    var description = coffeeOrder.title + " ";
    description += coffeeOrder.username;


    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  App.CheckList2 = CheckList2;
  window.App = App;
})(window);
