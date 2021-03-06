appl.service('DataService', function ($http) {
    this.read = function (src, callback) {
        $http({
            method: "POST",
            url: "/project2/data/" + src + ".json",
            headers: {
                "Content-type": "application/json"
            }
        }).then(function success(response) {
            callback(response);
        }, function error() {
            console.info("Error")
        });
    }
});

appl.factory('tickGenerator', function ($rootScope, $timeout) {
    var _tickTimeout;
    var _start = function () {
        _tick();
    };
    var _tick = function () {
        $rootScope.$broadcast("TICK", new Date());
        _tickTimeout = $timeout(_tick, 1000);
    };
    var _stop = function () {
        $timeout.cancel(_tickTimeout);
    };
    var _listenToStop = function () {
        $rootScope.$on("STOP_TICK", function (event, data) {
            _stop();
        });
    };
    _listenToStop();
    return{
        start: _start,
        stop: _stop
    };
});