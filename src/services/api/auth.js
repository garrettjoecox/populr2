(() => {
  angular
    .module('populr')
    .factory('AuthAPI', AuthAPI);

  function AuthAPI(API, LS) {
    return {
      login,
      isAuth,
      logout,
    };

    function login(data) {
      return API.post('/auth/login', data)
        .then(res => LS.set('jwt', res.token));
    }

    function isAuth() {
      return !!LS.get('jwt');
    }

    function logout() {
      return Promise.resolve()
        .then(() => LS.remove('jwt'));
    }
  }
})();
