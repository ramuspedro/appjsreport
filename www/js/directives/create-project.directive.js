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
                ModalService.showModal({
                    templateUrl: './app/modals/create-project.modal.html',
                    controller: 'ModalController'
                }).then(function(modal) {
                    modal.element.modal();
                    modal.close.then(function(result) {
                        //$scope.message = "You said " + result;
                        // if (result != "Cancel") {
                        //     $state.go("app", { projectId: result });
                        // }
                        var project = result;
                        if(project.name) {
                            console.log("OK");
                            return;
                        }
                        var url = result.replace(/\s/g,'');
                        //console.log("URL: ", url);
                        $http.post("http://localhost:8000/create-project", {
                            name: project,
                            url: url
                        }).then(function(result) {
                            
                            $state.go("app", {projectId: url});
                        });
                    });
                });
            });
        };

    };

    angular.module('jsReportingApp').controller('ModalController', ["$scope", "close", function($scope, close) {

        $scope.close = function(result) {
            close(result, 500); // close, but give 500ms for bootstrap to animate
        };

    }]);
})();