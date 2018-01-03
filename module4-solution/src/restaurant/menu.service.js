(function () {
'use strict';

angular.module('RestaurantApp')
.service('MenuService', MenuService);


MenuService.$inject = ['$q','ApiBasePath','$http']
function MenuService($q,ApiBasePath,$http) {
  var service = this;

  service.getAllCategories = function () {
    var deferred = $q.defer();

    $http({
     method: "GET",
     url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
     //response.data.menu_items
      console.log(response.data);
      deferred.resolve(response.data);
    });

    console.log(deferred);

    return deferred.promise;
  };


  service.getItemsForCategory = function (shortName) {
    var deferred = $q.defer();

    console.log("getItemsForCategory API Base Path:"+ApiBasePath);
    $http({
     method: "GET",
     url: (ApiBasePath + "/menu_items.json?category="+shortName)
    }).then(function (response) {
     //response.data.menu_items
      console.log(response.data.menu_items);
      deferred.resolve(response.data.menu_items);
    });

    console.log(deferred);

    return deferred.promise;
  };
}

})();
