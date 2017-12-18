(function () {

'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItems();

  toBuy.moveToAlreadyBoughtItems = function (index) {
    console.log("move to already bought items");
    var itemToMove = toBuy.items[index];
    ShoppingListCheckOffService.removeItem(index);
    ShoppingListCheckOffService.addToAlreadyBoughtItems(itemToMove);
  };


}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "cookies", quantity: 4 },
                { name: "brownies", quantity: 10 },
                { name: "chips", quantity: 5 },
                { name: "salsa", quantity: 10 },
                { name: "coke", quantity: 10 }

              ];
  var alreadyBoughtItems = [];

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.addToAlreadyBoughtItems = function (item) {
    console.log(item);
    alreadyBoughtItems.push(item);
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}





})();
