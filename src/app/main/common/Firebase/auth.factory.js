(function() {
    'use strict';

    angular
        .module('common.firebase')
        .factory('Auth', Auth);

    Auth.$inject = ['$firebaseAuth', 'FBROOT'];

    /* @ngInject */
    function Auth($firebaseAuth, FBROOT) {
        return $firebaseAuth(FBROOT);
    }
})();
