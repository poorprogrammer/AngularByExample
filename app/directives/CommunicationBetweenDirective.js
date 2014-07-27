var app = angular.module('App', []);

function AnimalController(){

  this.info = "";
  this.count = 1;
  this.walk4Legs = function() {
    this.info = "Walking by 4 legs"
  };

}


app.directive("animal",function(){
  return {
    controller: AnimalController,
    controllerAs : "animalController"   
  };
});

app.directive("dog", function () {
  return {
    restrict: "E",
    require:'^animal',
    template : '<input type="button" ng-click="walk()" name="buttonDog" value="DogDirective"/>',
    scope : {},
    link : function(scope, element, attrs, animalController){
      scope.walk = function(){
        animalController.count += 1;
        animalController.walk4Legs();
      }
    }
  };
});

app.directive("cat", function() {
  return {
    restrict: "E",
    require:'^animal',
    template : '<input type="button" ng-click="localFunctionForCat()" name="buttonCat" value="CatDirective"/>',
    scope : {},
    link : function(scope, element, attrs, animalController){
      scope.catchMouse = function(){
        animalController.walk4Legs();
      };

      scope.localFunctionForCat = function(){
        animalController.count += 1;
        animalController.info = "I will do whatever it take to study this directive";
      }
    }
  };
});