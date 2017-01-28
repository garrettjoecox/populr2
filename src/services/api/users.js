(() => {
  angular
    .module('populr')
    .factory('UsersAPI', UsersAPI);

  function UsersAPI(API) {
    return {
      getAll,
      getTop,
      create,
      update,
      destroy,
      get,
    };

    function getAll() {
      return API.get('/users');
    }

    function getTop() {
      return API.get('/users/top');
    }

    function create(payload) {
      return API.post('/users', payload);
    }

    function update(id, payload) {
      return API.post(`/users/${id}`, payload);
    }

    function get(id) {
      return API.get(`/users/${id}`);
    }

    function destroy(id) {
      return API.destroy(`/users/${id}`);
    }
  }
})();
