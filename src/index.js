(() => {
  angular
    .module('populr', [
      'ui.router',
    ])
    .config(Config);

  function Config($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/#');

    $stateProvider
      .state('home', {
        url: '/?list',
        templateUrl: 'views/home/homeV.html',
        controller: 'homeC as homeC',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about/aboutV.html',
        controller: 'aboutC as aboutC',
      })
      .state('user', {
        url: '/:displayName',
        templateUrl: 'views/user/userV.html',
        controller: 'userC as userC',
      });
  }
})();
