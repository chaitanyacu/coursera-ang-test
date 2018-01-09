(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


UserInfoService.$inject = ['$http', 'ApiPath'];
function UserInfoService($http, ApiPath) {
  var service = this;
  var user;

  service.getUser = function () {
    return user;
  };

  service.saveUser = function (userin) {
       user = userin;
       console.log("saved user");
       console.log(userin);
  };

}



})();
