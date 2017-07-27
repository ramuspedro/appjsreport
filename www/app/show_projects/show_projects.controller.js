(function() {
    'use strict';

    angular.module('jsReportingApp').controller('ShowProjectsCtrl', ['$http', ShowProjectsCtrl]);

    function ShowProjectsCtrl($http) {
        console.log("TESTEEEEEEE");
        var vm = this;

        vm.projects = [
        	{
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

        $http.post("http://localhost:8000/create-project", {
        	info: "TESTEEEEEEE"
        }).then(function(result) {
        	console.log("RESULTADO: ", result);
        });
    }
})();