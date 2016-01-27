(function() {
    'use strict';

    angular
        .module('common.moment')
        .directive('scmTimeAgo', scmTimeAgo);

    scmTimeAgo.$inject = ['moment', 'MomentFactory', '$interval'];

    /* @ngInject */
    function scmTimeAgo(moment, MomentFactory, $interval) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, ctrl) {

            if (attrs.unixms) {
                // var timeAgo = moment(parseInt(attrs.unixms)).fromNow();
                var nowUnixms = MomentFactory.getUnixms();
                var timeAgo = moment(parseInt(attrs.unixms)).from(nowUnixms);


                setTimeAgoElement();
                var promiseInterval = $interval(setTimeAgoElement, 120000, 0, true);

                //cleaning
                scope.$on('$destroy', function() {
                    $interval.cancel(promiseInterval);
                });

            }

            function setTimeAgoElement() {
                element.text(ctrl.getTimeAgo(attrs.unixms));
            }



        }
    }

    /* @ngInject */
    function Controller(MomentFactory) {

        var vm = this;
        vm.test = true;

        vm.getTimeAgo = getTimeAgo;

        function getTimeAgo(timestamp) {
            var nowUnixms = MomentFactory.getUnixms();
            var timeAgo = moment(parseInt(timestamp)).from(nowUnixms);
            return timeAgo;
        }

    }
})();
