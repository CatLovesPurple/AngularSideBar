var app = angular.module('sideBarApp', []);

app.run(function ($rootScope) {
    document.addEventListener("keyup", function (e) {
        if (e.keyCode == '27') {
            $rootScope.$broadcast("escapePressed", e.target);
        }
    });

    document.addEventListener("click", function (e) {
        $rootScope.$broadcast("documentClicked", e.target);
    })
});