var app = angular.module('App', []);

function AnimalController(){

  this.info = "";
  this.count = 1;
  
  this.walk4Legs = function() {
    this.count += 1;
    this.info = "Walking by 4 legs";    
    console.log(this.info + '=' + this.count);
    
  };

}

app.controller("AnimalController",[AnimalController]);
// app.directive("animal",function(){
//   return {
//     controller: AnimalController,
//     controllerAs : "animalController"   
//   };
// });

app.directive("dog", function () {
  return {
    restrict: "E",
    controller : 'AnimalController',
    controllerAs : 'animalController',
    template : '{{animalController.info}}<input type="button" ng-click="animalController.walk4Legs()" name="buttonDog" value="DogDirective"/>',
    scope : {}
  };
  
});

app.directive("cat", function() {
  return {
    restrict: "E",
    controller : 'AnimalController',
    controllerAs : 'animalController',
    template : '{{animalController.info}}<input type="button" ng-click="animalController.walk4Legs()" name="buttonCat" value="CatDirective"/>',
    scope : {}
    
  };
});