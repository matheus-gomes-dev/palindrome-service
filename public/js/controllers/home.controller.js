const API_URL='http://localhost:3000'

myApp.controller('homeController', ($scope, $http, toastr) => {
	console.log("Angular working!")

	$scope.isPalindrome = () => {
		console.log('teste')
		console.log($scope.userInput);
		$http.get(`${API_URL}/palindrome?sentence=${$scope.userInput}`)
			.then(response => {
				toastr.success($scope.userInput, response.data)
			})
			.catch(error => {
				if(error.status==400)
					toastr.warning($scope.userInput, error.data)
				else
					toastr.error("Server error")
			})
	}
})