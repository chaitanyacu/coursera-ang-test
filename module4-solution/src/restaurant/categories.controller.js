(function () {
'use strict';

angular.module('RestaurantApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuService', 'cats'];
function CategoriesController(MenuService, cats) {
  var categories = this;
  categories.items = cats;
}

})();
