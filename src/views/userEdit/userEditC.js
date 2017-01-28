(() => {
  angular
    .module('populr')
    .controller('userEditC', userEditC);

  function userEditC(UsersAPI, $stateParams, $state) {
    UsersAPI.get($stateParams.id)
      .then((user) => {
        this.user = {
          displayName: user.displayName,
          id: user.id,
          info: {
            id: user.info.id,
            image: user.info.image,
            occupation: user.info.occupation,
            wikiUrl: user.info.wikiUrl,
          },
          twitter: {
            id: user.twitter.id,
            handle: user.twitter.handle,
          },
          news: {
            id: user.news.id,
            queries: user.news.queries,
          },
        };
      });

    this.destroy = () => {
      return UsersAPI.destroy($stateParams.id)
        .then(() => $state.go('admin'));
    };

    this.save = () => {
      return UsersAPI.update(this.user.id, this.user);
    };
  }
})();
