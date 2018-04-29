appl.controller('Started', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: Started");
        DataService.read('start', function (data) {
            //console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
            $scope.picts = data.data.picts;
        });
    }]);
appl.controller('File', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: File");
        DataService.read('files', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
        });

    }]);
appl.controller('Photos', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: Photos");
        DataService.read('photos', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
            $scope.picts = data.data.picts;
        });
    }]);
appl.controller('Sharing', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: Sharing");
        DataService.read('sharing', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
        });

    }]);
appl.controller('Links', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: Links");
        DataService.read('links', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
            $scope.links = data.data.links;
        });
    }]);
appl.controller('Events', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: Events");
        DataService.read('events', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
            $scope.events = data.data.events;
        });
    }]);

appl.controller('ctrlMenu', ['$scope', function ($scope) {
        var listenToTick = function () {
            $scope.$on("TICK", function (event, tick) {
                $scope.tick = tick;
            });

        };
        listenToTick();
    }]);