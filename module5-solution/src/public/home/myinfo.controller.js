(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService','MenuService'];
function MyInfoController(UserInfoService,MenuService) {
  var $ctrl = this;




  if(UserInfoService.getUser() === undefined){
     console.log("undefined user");
     $ctrl.isRegisteredUser = false;
  }else{
     $ctrl.user = UserInfoService.getUser();
     $ctrl.isRegisteredUser = true;
     MenuService.getMenuItem($ctrl.user.shortname).then(function (result) {
       $ctrl.menuItem = result;
     })
  }






}


})();
