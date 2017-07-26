(function() {
    'use strict';

    angular.module('jsReportingApp').controller('ShowProjectsCtrl', ['$http', ShowProjectsCtrl]);

    function ShowProjectsCtrl($http) {
        console.log("TESTEEEEEEE");

        $http.post("http://localhost:8000/create-project", {
        	info: "TESTEEEEEEE"
        }).then(function(result) {
        	console.log("RESULTADO: ", result);
        });
    }
})();