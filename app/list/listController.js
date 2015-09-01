
angular.module('populr2')
  .controller('listController', listController);

function listController($http) {
  var self = this;

  $http.get('http://api.populr.io/top')
    .then(function(response) {
      self.top = response.data.a;
      console.log(self.top)
    });

}
