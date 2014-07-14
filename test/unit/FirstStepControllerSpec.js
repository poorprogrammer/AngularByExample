describe('FirstStepController', function(){
	var $scope,firstStepController;

	beforeEach(module('poc'));
	beforeEach(inject(function ($rootScope, $controller){
		var configuration;
		$scope = $rootScope.$new();
		configuration = {$scope : $scope};
		firstStepController = $controller('firstStepController', configuration);
	}));
 
	it('shoud be true',function(){
		expect(firstStepController.test).toEqual(true); 
	});

	it('should toggle test when call test function',function(){
		expect(firstStepController.test).toEqual(true); 
		firstStepController.testFunction();
		expect(firstStepController.test).toEqual(false); 
	});
});
