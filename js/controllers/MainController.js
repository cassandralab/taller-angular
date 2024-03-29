angular.module('MainCtrl', ['MessageService']).controller('MainController', function($scope, $timeout, Message){
	//$scope.message = "Hello mundo!";
	$scope.newMessage = '';
	getMessages();

	function refresh(){
		$timeout(getMessages, 5000);
	}	

	function getMessages(){
		Message.getAll().success(function(data){
			$scope.messages = data;
		});
		refresh();
	};

	$scope.new = function(){
		if($scope.newMessage){
			Message.add($scope.newMessage).success(function(data){
				$scope.messages.push(data);
			});
			$scope.newMessage = '';
		}
	};

	$scope.remove = function(id){
		Message.remove(id).success(function(deletedMessage){
			var filtered = $scope.messages.filter(function(msg){
				return msg._id === id;
			});

			if(filtered.length === 1){
				$scope.messages.splice([$scope.messages.indexOf(filtered[0])], 1); 
			}
		});
	}
});