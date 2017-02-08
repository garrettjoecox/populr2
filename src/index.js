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
        sidebar: 'about',
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin/adminV.html',
        controller: 'adminC as adminC',
        sidebar: 'admin',
      })
      .state('userCreate', {
        url: '/admin/create',
        templateUrl: 'views/userCreate/userCreateV.html',
        controller: 'userCreateC as userCreateC',
        sidebar: 'admin',
      })
      .state('userEdit', {
        url: '/admin/:id',
        templateUrl: 'views/userEdit/userEditV.html',
        controller: 'userEditC as userEditC',
        sidebar: 'admin',
      })
      .state('user', {
        url: '/:id',
        templateUrl: 'views/user/userV.html',
        controller: 'userC as userC',
      });
  }
})();
