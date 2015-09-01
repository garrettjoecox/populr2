
angular.module('populr2', ['ngRoute'])
  .config(Config);

function Config($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'app/list/listView.html' })
    .when('/about', { templateUrl: 'app/about/aboutView.html' })
    .when('/people/:fullName', { templateUrl: 'app/people/peopleView.html' })
    .otherwise('/');
};
