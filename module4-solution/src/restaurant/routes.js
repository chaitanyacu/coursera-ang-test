(function () {
'use strict';

angular.module('RestaurantApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  console.log("I am in routes config");

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurant/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/restaurant/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      cats: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categoryDetail', {
    url: '/category-detail/{itemId}',
    templateUrl: 'src/restaurant/templates/category-detail.template.html',
    controller: 'CategoryDetailController as categoryDetail',
    resolve: {
      catitems: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemId);
            }]
    }

  });

}

})();
