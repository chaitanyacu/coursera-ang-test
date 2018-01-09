(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['dataMock','MenuService','UserInfoService'];
function SignUpController(dataMock,MenuService,UserInfoService) {
  var $ctrl = this;
  $ctrl.dataMock = dataMock;

  $ctrl.submit = function () {
    $ctrl.formsubmitted = false;
    console.log($ctrl.user);
    MenuService.getMenuItem($ctrl.user.shortname).then(function  success(result){
       console.log(result);
       $ctrl.invalidshortname = false;
       $ctrl.formsubmitted = true;
       UserInfoService.saveUser($ctrl.user);

    }, function error(){
      console.log("error function called");
      console.log("set invalid shortname");
      $ctrl.invalidshortname = true;
    });


  }


}


})();
