(function() {
    'use strict';

    angular
        .module('common.firebase')
        .factory('AtomicFB', AtomicFB);

    AtomicFB.$inject = ['$q', 'FBROOT', 'logger'];

    /* @ngInject */
    function AtomicFB($q, FBROOT, logger) {
        var service = {
            insert: insert,
            deleteInvalidProperties:deleteInvalidProperties
        };
        return service;

        ////////////////

        function insert(data) {
            return $q(function(resolve, reject) {
                FBROOT.update(data, function(error) {
                    if (error) {
                        logger.error("atomicInsert could not be saved." + error);
                        reject(error);
                    } else {
                        logger.info("atomicInsert saved successfully.");
                        resolve();
                    }
                });
            });

        }

        function deleteInvalidProperties(data) {


            if (data.$id) delete data.$id;

            if (data.$loki) delete data.$loki;

            /*


                        if (delete data.$id && delete data.$loki) {
                            logger.info('formated data ok to sync with firebase');
                            return true;

                        } else {
                            logger.error('cannor removeinvalid proprties', data);
                            return false;
                        }*/


        }

    }
})();
