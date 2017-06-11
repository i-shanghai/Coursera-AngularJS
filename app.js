(
  function () {
    'use strict';

    angular.module('myFirstApp',[])
    .controller('myFirstController',function ($scope) {
        $scope.name="LiYang";
        $scope.showMyAge=function () {
          return 18;
        }
    });
  }

)();
