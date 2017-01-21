(() => {
  angular
    .module('populr')
    .directive('uiSidebar', uiSidebar)
    .controller('uiSidebarC', uiSidebarC);

  function uiSidebar() {
    return {
      templateUrl: 'components/ui-sidebar/ui-sidebarV.html',
    };
  }

  function uiSidebarC($state, $stateParams) {
    this.state = $state;
    this.stateParams = $stateParams;
  }
})();
