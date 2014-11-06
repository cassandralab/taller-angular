angular.module('MainCtrl', ['MessageService']).controller('MainController', function($scope, Message){
	//$scope.message = "Hello mundo!";
	$scope.newMessage = '';
	Message.getAll().success(function(data){
		$scope.messages = data;
	});

	$scope.new = function(){
		if($scope.newMessage){
			Message.add($scope.newMessage).success(function(data){
				$scope.messages.push(data);
			});
			$scope.newMessage = '';
		}
	};
});