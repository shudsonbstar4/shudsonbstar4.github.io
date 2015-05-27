angular.module("myApp")
.controller("MainCtrl", function($scope, $http, MyFactory){
  
  //1 -- FACTORY
  MyFactory.myVariable().then(function(data){
    $scope.items = data;
  })
  
  $scope.addItem = function(item){
    $scope.item = item;
    var newItem = angular.copy($scope.item);
    $scope.items.push(newItem);
  };

  $scope.deleteItem = function($index){
    $scope.items.splice($index, 1);
  };
  
  //Last - Move up and down
  $scope.moveUp = function($index){
    var oldItem = angular.copy($scope.items[$index-1]);
    var currentItem = angular.copy($scope.items[$index]);
    
    $scope.items[$index] = oldItem; 
    $scope.items[$index-1] = currentItem;
  };
  
  $scope.moveDown = function($index){
    var oldItem = angular.copy($scope.items[$index+1]);
    var currentItem = angular.copy($scope.items[$index]);
    
    $scope.items[$index] = oldItem; 
    $scope.items[$index+1] = currentItem;
	 };
  
})