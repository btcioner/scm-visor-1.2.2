(function() {
    'use strict';

    angular
        .module('app.common', [
           'blocks.exception','common.toastr','common.firebase','common.moment'
        ]);
})();