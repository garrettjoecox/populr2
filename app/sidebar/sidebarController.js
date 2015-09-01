
angular.module('populr2')
  .directive('ngSidebar', ngSidebar)
  .controller('sidebarController', sidebarController);

function ngSidebar() {
  return {
    templateUrl: 'app/sidebar/sidebarView.html'
  }
}

function sidebarController() {

}
