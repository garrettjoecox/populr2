(() => {
  angular
    .module('populr')
    .controller('userEditC', userEditC);

  function userEditC() {
    this.user = {
      avatar: 'https://avatars3.githubusercontent.com/u/7316699?v=3&s=220',
      displayName: 'Garrett Cox',
      occupation: 'Software Engineer',
      id: 1,
    };
  }
})();
