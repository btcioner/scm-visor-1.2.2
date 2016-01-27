var fbP;
(function() {
    'use strict';

    angular
        .module('app.placas')
        .factory('PlacasService', PlacasService);

    PlacasService.$inject = ['FBROOT', '$firebaseArray', 'exception'];

    /* @ngInject */
    function PlacasService(FBROOT, $firebaseArray, exception) {
        var _placasArray = null;
        var _placasRoot = FBROOT.child('inspecciones');
        var service = {
            getPlacas: getPlacas
        };
        return service;

        ////////////////

        function getPlacas() {

            if (_placasArray) {
                return $q.when(_placasArray);
            }
            var query = _placasRoot;

            return $firebaseArray(query).$loaded()
                .then(onLoadedOk)
                .catch(exception.catcher('cant get array of notifications'));

            function onLoadedOk(data) {
                _placasArray = data;
                fbP = _placasArray;
                return _placasArray;
            }
        }
    }
})();
