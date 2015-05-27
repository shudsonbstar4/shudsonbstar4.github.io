angular.module("myApp")
.factory("MyFactory", function($http){
  return{
    getItems: function(){
      var promise = $http.get('items.json')
    .then(function(res){
      return res.data;
    })
    return promise;
    }
  }
})