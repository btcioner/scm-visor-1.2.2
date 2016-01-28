(function() {
    'use strict';

    angular
        .module('app.fotos')
        .config(Config);

    Config.$inject = ['$stateProvider'];

    /* @ngInject */
    function Config($stateProvider) {



        $stateProvider

            .state('app.placas-detail', {
            url: '/placas/:idInspeccion/:placa',
            views: {
                'content@app': {
                    templateUrl: 'app/main/fotos/fotos.html',
                    controller: 'FotosCtrl as vm'
                }

            }
        });



    }
})();
