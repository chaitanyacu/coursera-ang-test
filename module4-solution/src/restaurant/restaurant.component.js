(function () {
'use strict';

angular.module('RestaurantApp')
.component('restaurantCategories', {
  templateUrl: 'src/restaurant/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
