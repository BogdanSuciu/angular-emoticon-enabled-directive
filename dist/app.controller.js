(function(){
  'use strict';
  angular.module("angularApp").controller("appController",appController);

  function appController($scope) {
    $scope.message = {value: "test me baby"};
  }
})();