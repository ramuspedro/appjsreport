(function() {
    'use strict';

    angular.module('jsReportingApp').controller('ShowProjectsCtrl', ['$http', 'ModalService', '$state', '$scope', ShowProjectsCtrl]);

    function ShowProjectsCtrl($http, ModalService, $state, $scope) {
        //console.log("TESTEEEEEEE");
        var vm = this;

        vm.createNewProject = createNewProject;

        vm.projects = [{
                name: "projeto 1",
                url: "p1"
            },
            {
                name: "projeto 2",
                url: "p2"
            },
            {
                name: "projeto 3",
                url: "p3"
            },
            {
                name: "projeto 4",
                url: "p4"
            },
            {
                name: "projeto 5",
                url: "p5"
            },
            {
                name: "projeto 6",
                url: "p6"
            }
        ];

        // $http.post("http://localhost:8000/create-project", {
        //     info: "TESTEEEEEEE"
        // }).then(function(result) {
        //     console.log("RESULTADO: ", result);
        // });

        function createNewProject(size, parentSelector) {
            console.log("TESTE");
            ModalService.showModal({
                templateUrl: 'modal.html',
                controller: "ModalController"
            }).then(function(modal) {
                modal.element.modal();
                modal.close.then(function(result) {
                    //$scope.message = "You said " + result;
                    console.log("TESTE: ", result);
                    if (result != "Cancel") {
                        $state.go("app", {projectId: result});
                    }
                });
            });
        };
    };

    angular.module('jsReportingApp').controller('ModalController', ["$scope", "close", function($scope, close) {

        $scope.close = function(result) {
            console.log("PROJECT: ", result);
            close(result, 500); // close, but give 500ms for bootstrap to animate
        };

    }]);

})();