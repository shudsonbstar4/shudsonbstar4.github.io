angular.module("myApp")
.controller("MainCtrl", ['$scope', '$http', '$modal', 'MyFactory', function($scope, $http, $modal, MyFactory){
  
  //GET ITEMS
  MyFactory.getItems().then(function(data){
    $scope.items = data;
  });
  
  $scope.addItem = function(item){
    $scope.item = item;
    var newItem = angular.copy($scope.item);
    $scope.items.push(newItem);
  };

  $scope.deleteItem = function($index){
    $scope.items.splice($index, 1);
  };
  
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
	 
	 //Open Modal Window
	 $scope.editItem = function(item, $index){
	   var $modalInstance = $modal.open({
				templateUrl: 'edit-item.html',
				controller: 'EditItemModalInstanceCtrl',
				resolve: {
					item: function(){
						return item;
					}
				}
			});
  
      //CATCH EDITED RESULT AND SAVE ON SCOPE
			$modalInstance.result.then(function(data) {
				$scope.items[$index] = data;
			});
	 };
}])


.controller('EditItemModalInstanceCtrl', ['$scope', '$timeout', '$modalInstance', 'item', function($scope, $timeout, $modalInstance, item){
  
  $scope.itemCopy = angular.copy(item); //DEEP COPY ITEM SO ON CANCEL DOES NOT UPDATE
  
  $scope.updateItem = function(item){
    $scope.successMsg = true; //Show success msg
    
    var promise = $timeout(function(){ //Set timeout to promise so can cancel if user manually closes
      $modalInstance.close(item);
    }, 3000);
    
    $scope.$on('$destroy', function(){ //On scope destroy, cancel timeout
		    $timeout.cancel(promise);
		});
  };
  
  $scope.cancel = function(successMsg, item){
    if(successMsg === true){ //If successMsg and user manually exits, update the parent scope
      $modalInstance.close(item);
    } else { //otherwise just dismiss
      $modalInstance.dismiss('cancel');
    }
  };
  
}])