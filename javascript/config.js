appl.config(function ($stateProvider, $urlRouterProvider) {
    /* Error 404 */
    $urlRouterProvider.otherwise("/");
    console.info("Config");
    /* Routers */
    $stateProvider
            .state('Started', {
                url: '/',
                views: {
                    'content': {
                        controller: 'Started',
                        templateUrl: 'partials/start.html'
                    }

                }
            }).state('Files', {
        url: '/Files',
        views: {
            'content': {
                controller: 'File',
                templateUrl: 'partials/file.html'
            }

        }
    }).state('Photos', {
        url: '/Photos',
        views: {
            'content': {
                controller: 'Photos',
                templateUrl: 'partials/photos.html'
            }

        }
    }).state('Sharing', {
        url: '/Sharing',
        views: {
            'content': {
                controller: 'Sharing',
                templateUrl: 'partials/sharing.html'
            }

        }
    }).state('Links', {
        url: '/Links',
        views: {
            'content': {
                controller: 'Links',
                templateUrl: 'partials/links.html'
            }
        }
    }).state('Events', {
        url: '/Events',
        views: {
            'content': {
                controller: 'Events',
                templateUrl: 'partials/events.html'
            }
        }
    });
});