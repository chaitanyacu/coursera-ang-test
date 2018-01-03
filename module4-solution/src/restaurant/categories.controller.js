(function () {
'use strict';

angular.module('RestaurantApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = [ 'cats'];
function CategoriesController(cats) {
  var categories = this;
  categories.items = cats;
}

})();
