(function() {
    'use strict';

    angular
        .module('jsReportingApp')
        .directive('createNewProject', ['ModalService', createNewProject]);

    function createNewProject(ModalService) {

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
                        if (result != "Cancel") {
                            $state.go("app", { projectId: result });
                        }
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