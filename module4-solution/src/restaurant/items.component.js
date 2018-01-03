(function () {
'use strict';

angular.module('RestaurantApp')
.component('catItems', {
  templateUrl: 'src/restaurant/templates/categoryitems.template.html',
  bindings: {
    items: '<'
  }
});

})();
