(function(){
	"use strict";
	var weatherApp;
	weatherApp = angular.module('Weather', []);
	wireWeatherApplication(weatherApp);

	function wireWeatherApplication(app) {
	    app.service('WeatherService', WeatherService);
	    app.controller('WeatherController', ['WeatherService', WeatherController]);
	}
	
	function WeatherController(weatherService){
		this.getBangkokWeather = function(){
			weatherService.getCurrentBangkokWeather();
		};
	}

	function WeatherService(){
		this.getCurrentBangkokWeather = function(){
			console.log('call service');
		};
	}

})();