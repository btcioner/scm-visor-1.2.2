var fbF;
(function() {
    'use strict';

    angular
        .module('app.fotos')
        .factory('FotosService', FotosService);

    FotosService.$inject = ['$q', 'FBROOT', 'exception', 'AtomicFB', 'logger', 'MomentFactory', '$firebaseArray'];

    /* @ngInject */
    function FotosService($q, FBROOT, exception, AtomicFB, logger, MomentFactory, $firebaseArray) {
        var _fotosArray = null;
        var _fotosRoot = FBROOT.child('fotosByInspeccion');

        var service = {
            getFotos: getFotos
        };
        return service;

        ////////////////

        function getFotos(idInspeccion) {
            if (_fotosArray) {
                return $q.when(_fotosArray);
            }
            var query = _fotosRoot.child(idInspeccion);

            return $firebaseArray(query).$loaded()
                .then(onLoadedOk)
                .catch(exception.catcher('cant get array of fotos'));

            function onLoadedOk(data) {
                _fotosArray = data;
                fbF = _fotosArray;
                return _fotosArray;
            }

        }

    }
})();
