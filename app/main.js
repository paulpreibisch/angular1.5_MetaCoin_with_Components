(function () {
    'use strict';
    angular.module('metaCoinApp', [
        'ui.router',
        'metaCoinApp.config',
        'metaCoinApp.components.home',
        'metaCoinApp.components.transactions'
    ]).controller('AppController', AppController);

   // AppController.$inject = ['$rootRouter'];
    function AppController($scope) {

    }

})();