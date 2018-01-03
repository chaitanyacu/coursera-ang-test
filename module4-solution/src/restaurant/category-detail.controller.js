(function () {
'use strict';

angular.module('RestaurantApp')
.controller('CategoryDetailController', CategoryDetailController);

// 'item' is injected through state's resolve
CategoryDetailController.$inject = ['catitems']
function CategoryDetailController(catitems) {
  var categoryDetail = this;
  categoryDetail.catitems = catitems;
  console.log(categoryDetail.catitems);
}

})();
