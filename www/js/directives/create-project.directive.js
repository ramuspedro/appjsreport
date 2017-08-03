(function() {
    'use strict';

    angular
        .module('jsReportingApp')
        .directive('createNewProject', ['ModalService', '$http', createNewProject]);

    function createNewProject(ModalService, $http) {

        /*
         * Parametros da diretiva
         */
        var directive = {
            restrict: 'A',
            link: createNewProject,
        };

        return directive;

        function createNewProject(scope, element, attrs) {
            element.on('click', function(event) {
                console.log("TESTE");
                ModalService.showModal({
                    templateUrl: './app/modals/create-project.modal.html',
                    controller: 'ModalController'
                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(result) {
                        //$scope.message = "You said " + result;
                        console.log("TESTE 2: ", result);
                        // if (result != "Cancel") {
                        //     $state.go("app", { projectId: result });
                        // }
                        $http.post("http://localhost:8000/create-project", {
                            name: result
                        }).then(function(result) {
                            console.log("RESULTADO: ", result);
                        });
                    });
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