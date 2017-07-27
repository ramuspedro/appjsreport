(function() {
    'use strict';

    angular.module('jsReportingApp').controller('AppCtrl', ['$http', AppCtrl]);

    function AppCtrl($http) {
        console.log("TESTEEEEEEE");
        var vm = this;

        var url = "../projects/p1/";

        $http.get(url + "helpers.js").then(function(data) {
            // javascript.setValue(data.data);
            console.log("js", data);

        });

        $http.get(url + "data.json").then(function(data2) {
            console.log("json", data2);
            // json.setValue(JSON.stringify(data2.data, null, '\t'));
        });

        $http.get(url + "page.html").then(function(data3) {
            console.log("html", data3);
            // html.setValue(data3.data);
        });
    }
})();