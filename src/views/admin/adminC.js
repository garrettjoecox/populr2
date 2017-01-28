(() => {
  angular
    .module('populr')
    .controller('adminC', adminC);

  function adminC(UsersAPI) {
    UsersAPI.getAll()
      .then(res => this.users = res);
  }
})();
