(() => {
  angular
    .module('populr')
    .controller('homeC', homeC);

  function homeC(top) {
    this.top = top;
    if (this.top.a.length) this.lastUpdated = moment(this.top.a[0].updatedAt).fromNow();
  }
})();
