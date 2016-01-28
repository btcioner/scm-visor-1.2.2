var vmF;
(function() {
    'use strict';

    angular
        .module('app.fotos')
        .controller('FotosCtrl', FotosCtrl);

    FotosCtrl.$inject = ['FotosService', '$stateParams', '$mdSidenav'];

    /* @ngInject */
    function FotosCtrl(FotosService, $stateParams, $mdSidenav) {

        var vm = this;
        var _idInspeccion = $stateParams.idInspeccion;
        var _placa = $stateParams.placa;
        vm.placa = _placa;
        vm.fotos = [];
        vm.card = {
            "title": "Nature",
            "text": "Look deep into nature, then you will understand everything better. Look deep into nature, then you will understand everything better.",
            "media": {
                "image": {
                    "src": "assets/images/etc/avenue.jpg",
                    "alt": "Avenue"
                }
            }
        };

        vm.openSidenav=openSidenav;

        activate();

        ////////////////

        function activate() {

            getFotos();

        }

        function openSidenav (argument) {
            debugger;
            $mdSidenav('scmr').toggle();
        }

        function getFotos() {
            FotosService.getFotos(_idInspeccion)
                .then(onGetFotos);

            function onGetFotos(fotos) {
                vm.fotos = fotos;
                return vm.fotos;
            }
        }

    }
})();
