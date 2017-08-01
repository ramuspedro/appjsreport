(function() {
    'use strict';

    angular.module('jsReportingApp').controller('AppCtrl', ['$http', '$scope', AppCtrl]);

    function AppCtrl($http, $scope) {
        console.log("TESTEEEEEEE");
        var vm = this;

        $scope.chooseTab = 0;

        var javascript, html, json;

        /*var javascript = ace.edit("javascript");
        javascript.setTheme("ace/theme/twilight");
        javascript.session.setMode("ace/mode/javascript");
        javascript.renderer.setScrollMargin(10, 10);
        javascript.setOptions({
            // "scrollPastEnd": 0.8,
            autoScrollEditorIntoView: true
        });

        var json = ace.edit("json");
        json.setTheme("ace/theme/twilight");
        json.session.setMode("ace/mode/javascript");
        json.renderer.setScrollMargin(10, 10);
        json.setOptions({
            // "scrollPastEnd": 0.8,
            autoScrollEditorIntoView: true
        });*/

        var html = ace.edit("html");
        html.setTheme("ace/theme/twilight");
        html.session.setMode("ace/mode/html");
        html.renderer.setScrollMargin(10, 10);
        html.setOptions({
            // "scrollPastEnd": 0.8,
            autoScrollEditorIntoView: true
        });

        var url = "../projects/p1/";

        /*$http.get(url + "helpers.js").then(function(data) {
            javascript.setValue(data.data);
            console.log("js", data);
        });

        $http.get(url + "data.json").then(function(data2) {
            console.log("json", data2);
            json.setValue(JSON.stringify(data2.data, null, '\t'));
        });*/

        $http.get(url + "page.html").then(function(data3) {
            console.log("html", data3);
            html.setValue(data3.data);
        });

        vm.clickTab = function(index) {
            $scope.chooseTab = index;

            if (index == 0) {
                if (!html) {
                    html = ace.edit("html");
                    html.setTheme("ace/theme/twilight");
                    html.session.setMode("ace/mode/html");
                    html.renderer.setScrollMargin(10, 10);
                    html.setOptions({
                        // "scrollPastEnd": 0.8,
                        autoScrollEditorIntoView: true
                    });

                    $http.get(url + "page.html").then(function(data3) {
                        console.log("html", data3);
                        html.setValue(data3.data);
                    });
                }
            } else if (index == 1) {
                if (!javascript) {
                    javascript = ace.edit("javascript");
                    javascript.setTheme("ace/theme/twilight");
                    javascript.session.setMode("ace/mode/javascript");
                    javascript.renderer.setScrollMargin(10, 10);
                    javascript.setOptions({
                        // "scrollPastEnd": 0.8,
                        autoScrollEditorIntoView: true
                    });

                    $http.get(url + "helpers.js").then(function(data) {
                        javascript.setValue(data.data);
                        console.log("js", data);
                    });
                }
            } else if (index == 2) {
                if (!json) {
                    json = ace.edit("json");
                    json.setTheme("ace/theme/twilight");
                    json.session.setMode("ace/mode/javascript");
                    json.renderer.setScrollMargin(10, 10);
                    json.setOptions({
                        // "scrollPastEnd": 0.8,
                        autoScrollEditorIntoView: true
                    });

                    $http.get(url + "data.json").then(function(data2) {
                        console.log("json", data2);
                        json.setValue(JSON.stringify(data2.data, null, '\t'));
                    });
                }
            }
        }
    }
})();