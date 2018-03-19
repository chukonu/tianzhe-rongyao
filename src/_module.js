(function (angular) {
    'use strict'
    angular.module('app', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/start')
            $stateProvider.state({
                name: 'start',
                url: '/start',
                component: 'startingPage'
            })
                .state({
                    name: 'result',
                    url: '/result',
                    component: 'resultPage'
                })
                .state({
                    name: 'stage',
                    url: '/stage',
                    component: 'stage'
                })
        }])
})(angular)
