(() => {
  angular
    .module('populr')
    .controller('adminC', adminC);

  function adminC(users) {
    this.users = users;
  }
})();
