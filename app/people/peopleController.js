
angular.module('populr2')
  .controller('peopleController', peopleController);

function peopleController($routeParams, $http) {
  var self = this;

  $http.get('http://api.populr.io/people/' + $routeParams.fullName)
    .then(function(response) {
      self.data = response.data
      console.log(self.data)
    });
}
