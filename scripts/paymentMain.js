(function (window) {
  "use strict";

  var FORM_SELECTOR = "[data-coffee-order=\"paymentForm\"]";
  var CHECKLIST_SELECTOR = "[data-coffee-order=\"checkList2\"]";
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList2 = App.CheckList2;
  var myTruck = new Truck("ncc-1701", new DataStore());
  window.myTruck = myTruck;
  var checkList2 = new CheckList2(CHECKLIST_SELECTOR);
  checkList2.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder(data);
    checkList2.addRow(data);
  });
  console.log(formHandler);
})(window);
