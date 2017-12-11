(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckControllerDriver)


LunchCheckControllerDriver.$inject = ['$scope'];
function LunchCheckControllerDriver($scope) {
  $scope.items = "";
  $scope.fedState = "";
  $scope.checkIfTooMuch = function () {
    var itemsAsString = $scope.items;
    setFedState(itemsAsString);
  };

  function setFedState(itemsAsString) {
    if (itemsAsString=="") {
      $scope.fedState ="Please enter data first";
    }else{
      var itemsAsArray = itemsAsString.split(',');
      var uniqueItemsAsArray = itemsAsArray
                    .filter(function(value, index){ return itemsAsArray.indexOf(value) == index })
                    .filter(function(value, index){ return value.trim()!="" })
                    ;
      var noofItems = uniqueItemsAsArray.length;
      if (noofItems<=3) {
        $scope.fedState ="Enjoy!";
      } else {
        $scope.fedState ="Too much!";
      }

    }

  };
}


})();
