(function() {
    'use strict';

    angular
        .module('jsReportingApp')
        .directive('createNewProject', ['ModalService', '$http', '$state', createNewProject]);

    function createNewProject(ModalService, $http, $state) {

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
                        var project = result;
                        var url = result.replace(/\s/g,'');
                        //console.log("URL: ", url);
                        $http.post("http://localhost:8000/create-project", {
                            name: project,
                            url: url
                        }).then(function(result) {
                            console.log("RESULTADO: ", result);
                            $state.go("app", {projectId: url})
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