(function ()
{
    'use strict';

    angular
        .module('app.placas', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.placas', {
                url    : '/placas',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/placas/placas.html',
                        controller : 'PlacasController as vm'
                    }
                }/*,
                resolve: {
                    placasData: function (apiResolver)
                    {
                        return apiResolver.resolve('placas@get');
                    }
                }*/
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/placas');

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'Menu',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.placas', {
            title    : 'placas',
            icon     : 'icon-car',
            state    : 'app.placas',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'PLACAS.PLACAS_NAV',
            weight   : 1
        });
    }
})();