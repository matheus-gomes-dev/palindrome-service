myApp.controller('homeController', function($scope, $http) {
	console.log("Angular working!")

	$scope.isPalindrome = function(){
		console.log('teste')
		console.log($scope.userInput);
	}
})