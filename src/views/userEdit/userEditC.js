(() => {
  angular
    .module('populr')
    .controller('userEditC', userEditC);

  function userEditC(user, UsersAPI, $state, $scope) {
    this.user = {
      displayName: user.displayName,
      id: user.id,
      info: {
        id: user.info.id,
        image: user.info.image,
        occupation: user.info.occupation,
        wikiUrl: user.info.wikiUrl,
        bio: user.info.bio,
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

    $scope.$watch('userEditC.user', () => {
      if (!this.hasOwnProperty('dirty')) this.dirty = false;
      else this.dirty = true;
    }, true);

    this.destroy = () => {
      return UsersAPI.destroy(this.user.id)
        .then(() => $state.go('admin'));
    };

    this.save = () => {
      return UsersAPI.update(this.user.id, this.user)
        .then(() => this.dirty = false);
    };
  }
})();
