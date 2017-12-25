(function () {

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsList.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}



function FoundItemsDirectiveController() {
  var list = this;

}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var narrow = this;
  narrow.searchTerm = "";
  narrow.found = [];

  narrow.narrowIt = function () {
     narrow.found =  MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
     console.log(narrow.found);
  }

  narrow.removeItem = function (itemIndex) {
   console.log("'this' is: ", this);
   narrow.found.splice(itemIndex,1);

 };



}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {

  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];
    $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      angular.forEach(response.data.menu_items, function(value, key) {
         if(value.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
           foundItems.push(value);
         }
      });

    });

   return foundItems;
  };



}





})();
