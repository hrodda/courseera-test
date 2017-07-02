(
  function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);


    LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope) {
      $scope.lunchmenuitems="";

      $scope.countmenu = function() {


       if($scope.lunchmenuitems.trim()==""){
         $scope.output_message="Please enter data first";
         console.log("empty here");
      }
      else{
      var LunchItems = $scope.lunchmenuitems;
      var splitArray = LunchItems.split(",");
      var count=0;

      for (var i=0; i<splitArray.length; i++){
        if (splitArray[i].trim()!=""){
          count++;
        }
      }

      if(count <=3){
        $scope.output_message="Enjoy!";
      }
      else{
        $scope.output_message="Too Much!";
      }
    }
  }

}
})();
