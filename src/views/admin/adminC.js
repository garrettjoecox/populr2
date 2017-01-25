(() => {
  angular
    .module('populr')
    .controller('adminC', adminC);

  function adminC() {
    const user = {
      avatar: 'https://avatars3.githubusercontent.com/u/7316699?v=3&s=60',
      displayName: 'Garrett Cox',
      id: 1,
    };

    this.users = [];

    for (let i = 0; i < 10; i += 1) this.users.push(user);
  }
})();
