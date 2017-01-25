(() => {
  angular
    .module('populr')
    .factory('LS', LS);

  function LS($window) {
    const base = 'io.populr.';

    return {
      get,
      set,
      remove,
    };

    function get(key) {
      return $window.localStorage.getItem(`${base}${key}`);
    }

    function set(key, value) {
      return $window.localStorage.setItem(`${base}${key}`, value);
    }

    function remove(key) {
      return $window.localStorage.removeItem(`${base}${key}`);
    }
  }
})();
