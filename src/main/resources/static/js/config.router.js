'use strict';
/**
 * Config for the router
 */
angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/app/main');
                $stateProvider
                    .state('app', {
                        url: '/app',
                        templateUrl: '/static/tpl/app.html?' + app_version
                    })
                    .state('app.main', {
                        url: '/main',
                        templateUrl: '/static/tpl/page/main.html?' + app_version
                    })
                    .state('app.image', {
                        url: '/image/',
                        templateUrl: '/static/tpl/page/image/image.html?' + app_version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['static/js/controllers/image/image.js?' + app_version]);
                                }
                            ]
                        }
                    })
                    .state('app.addImage', {
                        url: '/addImage/',
                        templateUrl: '/static/tpl/page/image/addImage.html?' + app_version,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['static/js/controllers/image/addImage.js?' + app_version]);
                                }
                            ]
                        }
                    })




            }
        ]
    );