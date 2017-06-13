(
  function () {
    'use strict';

    angular.module('myFirstApp',[])
    .controller('myFirstController',function ($scope) {
        $scope.name="LiYang";
        $scope.showMyAge=function () {
          return 18;
        }

        $scope.chartString="";
        $scope.totalValue=0;

        $scope.displayNumberic=function () {

            var  totalStringValue= calculateNumericForString($scope.chartString);

            $scope.totalValue= totalStringValue;
        }

            function calculateNumericForString(str) {
              var totalStringValue=0;
              for (var i = 0; i < str.length; i++) {
                totalStringValue+= str.charCodeAt(i);
              }
                return totalStringValue;
            }
    });

  }

)();
