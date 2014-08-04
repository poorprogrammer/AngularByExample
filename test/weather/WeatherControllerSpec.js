describe('Weather Controller public api', function(){
	"use strict";
	var $scope, controller, WeatherService;

	beforeEach(module('Weather'));
	beforeEach(inject(function ($rootScope, $controller){
		var configuration;
		WeatherService = {
			getCurrentBangkokWeather : {}
		};
		
		configuration = {
			WeatherService : WeatherService
		};
		controller = $controller('WeatherController', configuration);

	}));

	it('WeatherController should not be null', function(){
		expect(controller).not.toEqual(undefined);
	});

	it('should call rest api service when call getBangkok function',function(){
		spyOn(WeatherService,'getCurrentBangkokWeather');

		controller.getBangkokWeather();

		expect(WeatherService.getCurrentBangkokWeather).toHaveBeenCalled();
	});
 
});

describe('Weather service',function(){
	"use strict";
	var service;
	beforeEach(module('Weather'));
	beforeEach(inject(function(WeatherService){
		service = WeatherService;
	}));

	it('service should be null',function(){
		expect(service).not.toEqual(undefined);
	});

	

});
