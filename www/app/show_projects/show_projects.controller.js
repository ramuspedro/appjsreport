(function() {
    'use strict';

    angular.module('jsReportingApp').controller('ShowProjectsCtrl', ['$http', 'ModalService', ShowProjectsCtrl]);

    function ShowProjectsCtrl($http, ModalService) {
        //console.log("TESTEEEEEEE");
        var vm = this;

        vm.createNewProject = createNewProject;

        vm.projects = [{
                name: "projeto 1",
                url: "/projects/p1"
            },
            {
                name: "projeto 2",
                url: "/projects/p2"
            },
            {
                name: "projeto 3",
                url: "/projects/p3"
            },
            {
                name: "projeto 4",
                url: "/projects/p4"
            },
            {
                name: "projeto 5",
                url: "/projects/p5"
            },
            {
                name: "projeto 6",
                url: "/projects/p6"
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
                });
            });
        };
    };

    angular.module('jsReportingApp').controller('ModalController', function($scope, close) {

        $scope.close = function(result) {
            close(result, 500); // close, but give 500ms for bootstrap to animate
        };

    });

})();