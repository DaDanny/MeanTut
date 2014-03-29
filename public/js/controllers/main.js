angular.module('todoController', [])
	.controller('mainController', function($scope, $http, Todos){
		$scope.formData = {};
		//$scope.todo = Todo;
		Todos.get()
			.success(function(data){
				$scope.todos = data;
			});

		$scope.createTodo = function(){
			if(!$.isEmptyObject($scope.formData)){
				Todos.create($scope.formData)
					.success(function(data){
						$scope.formData = {};
						$scope.todos= data;
					});
			}
		};

		$scope.deleteTodo = function(id){
			Todos.delete(id)
				.success(function(data){
					$scope.todos= data;
				});
		};
		console.log(myService);
	});