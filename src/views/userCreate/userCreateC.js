(() => {
  angular
    .module('populr')
    .controller('userCreateC', userCreateC);

  function userCreateC(UsersAPI, $state) {
    this.create = () => {
      return UsersAPI.create({ displayName: this.displayName })
        .then(user => $state.go('userEdit', { id: user.id }));
    };
  }
})();
