(function() {
    'use strict';

    angular
        .module('app.placas')
        .controller('PlacasController', PlacasController);

    /** @ngInject */
    function PlacasController(PlacasService, $state) /*SampleData*/ {
        var vm = this;

        // Data
        vm.helloText = 'placas'; //SampleData.data.helloText;
 vm.goFotos = goFotos;
        vm.table = {
            columns: [{
                title: 'ready'
            }, {
                title: 'Placa'
            }],

            dtOptions: {
                dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
                pagingType: 'simple',
                autoWidth: false,
                responsive: true,
                order: [2, 'asc'],
                columnDefs: [{
                    width: '40',
                    orderable: false,
                    targets: [0]
                }, {
                    width: '20%',
                    targets: [1, 2, 3, 4, 5]
                }]
            }
        };


        var mockPlacas = [{
            ready: false,
            placa: 'abcd'
        }, {
            ready: true,
            placa: 'EFGH'
        }];
        vm.placas = [];

        activate();

        function activate() {
            getPlacas();
        }

        function getPlacas() {
            PlacasService.getPlacas()
                .then(onGetPlacas);

            function onGetPlacas(placas) {
                vm.placas = placas;
            }
        }

        function goFotos(objPlaca) {
            $state.go("app.placas-detail", {
                idInspeccion: objPlaca.$id,
                placa: objPlaca.placa
            });
        }

        // Methods

        //////////
    }
})();
