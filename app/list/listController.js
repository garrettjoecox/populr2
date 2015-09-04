
angular.module('populr2')
  .controller('listController', listController)
  .filter('listify', listify)

function listController($http) {
  var self = this;
  self.top = {};

  $http.get('http://api.populr.io/top')
    .then(function(response) {
      self.top = response.data
      self.timestamp = self.top.updatedAt;
      delete self.top.updatedAt;
      console.log(self.top)
    });
}

function listify() {
  return function(input) {
    return input.toUpperCase() + '-LIST';
  }
}
