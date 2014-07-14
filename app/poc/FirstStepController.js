(function(){
	"use strict";
	var pocApp = angular.module('poc',[]);
	pocApp.controller('firstStepController', FirstStepController);
	
	function FirstStepController(){
		this.test = true;
		
		this.testFunction = function(){
			this.test = false;
		};
	}	

})();