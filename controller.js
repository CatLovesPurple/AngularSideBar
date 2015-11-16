app.controller("sidebar", function ($scope, $rootScope) {
    $scope.leftVisible = false;
    $scope.rightVisible = false;

    $scope.close = function () {
        $scope.leftVisible = false;
        $scope.rightVisible = false;
        $scope.visible = false;

    };

    $scope.showLeft = function (e) {
        $scope.leftVisible = true;
        e.stopPropagation();
        $scope.visible = true;
    };

    $scope.showRight = function (e) {
        $scope.rightVisible = true;
        e.stopPropagation();
        $scope.visible = true;
    }

    $rootScope.$on("documentClicked", _close);
    $rootScope.$on("escapePressed", _close);

    function _close() {
        $scope.$apply(function () {
            $scope.close();
        });
    }
});