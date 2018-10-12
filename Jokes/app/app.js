angular.module("JokesApp", [])
        .controller("JokesCtrl", ["$scope", "$http", function($scope, $http) {
            $scope.jokes = [];
            $scope.loading = false;

            $scope.getJokes = function() {
                $scope.jokes = [];
                $scope.loading = true;

                $http.get("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten/")
                        .then(function(response) {
                            $scope.jokes = response.data;
                            $scope.loading = false;
                        });
            }
        }]);