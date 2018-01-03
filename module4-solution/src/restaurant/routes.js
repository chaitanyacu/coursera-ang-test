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
      cats: ['MenuService', function (MenuService) {
        return MenuService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categoryDetail', {
    url: '/category-detail/{itemId}',
    templateUrl: 'src/restaurant/templates/category-detail.template.html',
    controller: 'CategoryDetailController as categoryDetail',
    resolve: {
      catitems: ['$stateParams', 'MenuService',
            function ($stateParams, MenuService) {
              return MenuService.getItemsForCategory($stateParams.itemId);
            }]
    }

  });

}

})();
