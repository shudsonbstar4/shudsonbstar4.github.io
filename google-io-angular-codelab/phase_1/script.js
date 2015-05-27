// Code goes here

angular.module("myApp", [])

.controller("MainCtrl", function($scope, $http){
  
  //1 -- GET ITEMS
  $http.get('items.json')
    .then(function(res){
      $scope.items = res.data;
  });
  
  //2 -- ADD ITEMS
  $scope.addItem = function(item){
    $scope.item = item;
    var newItem = angular.copy($scope.item);
    $scope.items.push(newItem);
  };
  
  //3 -- DELETE ITEMS
  $scope.deleteItem = function($index){
    $scope.items.splice($index, 1);
  };
  
})