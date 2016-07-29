(function () {
    'use strict';
    angular
        .module('metaCoinApp.config', [])
        .config(AppConfig);

    function AppConfig($locationProvider, $stateProvider, $urlRouterProvider) {
        /*
         # Hashbang Mode
         http://www.example.com/#/aaa/
         # HTML5 Mode
         http://www.example.com/aaa/
         */
        $locationProvider.html5Mode(true);


    }

    AppConfig.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider'];
    })();