(function() {
    'use strict';

    angular.module('jsReportingApp').controller('ShowProjectsCtrl', ['$http', '$uibModal', '$log', '$document', ShowProjectsCtrl]);

    function ShowProjectsCtrl($http, $uibModal, $log, $document) {
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
            vm.animationsEnabled = true;

            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ShowProjectsCtrl',
                controllerAs: 'vm',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function() {
                        return vm.items;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                vm.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    }
})();