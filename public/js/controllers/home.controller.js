const API_URL='http://localhost:3000'

myApp.controller('homeController', ($scope, $http) => {
	console.log("Angular working!")

	$scope.isPalindrome = () => {
		console.log('teste')
		console.log($scope.userInput);
		$http.get(`${API_URL}/palindrome?sentence=${$scope.userInput}`)
			.then(response => {
				console.log(response.data)
			})
			.catch(error => {
				console.log(error.data)
			})
	}
})