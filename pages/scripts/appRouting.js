angular.module('app.routingScript', ['ui.router'])

    // configure our routes
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                // route for the home page
                .state('/', {
                    abstract: true,
                    templateUrl: 'partials/home.html',
                    controller: 'homeController',
                    controllerAs: 'homeCtrl'
                })
                .state('/.home', {
                    url: '/',
                    views: {
                        'request': {
                            templateUrl: 'partials/requestForm.html',
                            controller: 'formController',
                            controllerAs: 'formCtrl'
                        },
                        'footer': {
                            templateUrl: 'partials/footer.html'
                        }
                    }
                })

                .state('login', {
                    url: '/login',
                    templateUrl: 'partials/login.html',
                    controller: 'loginController',
                    controllerAs: 'loginCtrl'
                })

                .state('appointments', {
                    url: '/appointments',
                    templateUrl: 'partials/appointments.html',
                    controller: 'appointmentController',
                    controllerAs: 'appointmentCtrl'
                });
            $locationProvider.html5Mode(true);
        }]);
