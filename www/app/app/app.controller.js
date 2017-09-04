(function() {
    'use strict';

    angular.module('jsReportingApp').controller('AppCtrl', ['$http', '$scope', '$state', '$sce', AppCtrl]);

    function AppCtrl($http, $scope, $state, $sce) {
        console.log("TESTEEEEEEE: ", $state.params.projectId);
        var vm = this;

        /* Funcion as vm */

        $scope.chooseTab = 0;

        var javascript, html, json, header;
        
        $('.dropdown-toggle').dropdown();

        /* COnfigure toastr */
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        /*
         * loading icons
         */

        vm.loading = {
            generate_pdf: false
        };

        /*
         * Função salvamento dos arquivos
         */
        vm.saveFiles = saveFiles;

        html = ace.edit("html");
        html.setTheme("ace/theme/twilight");
        html.session.setMode("ace/mode/html");
        html.renderer.setScrollMargin(10, 10);
        html.setOptions({
            // "scrollPastEnd": 0.8,
            autoScrollEditorIntoView: true,
            maxLines: 50
        });

        var url = "../projects/" + $state.params.projectId + "/";


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
                        autoScrollEditorIntoView: true,
                        maxLines: 50
                    });

                    $http.get(url + "page.html").then(function(data3) {
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
                        autoScrollEditorIntoView: true,
                        maxLines: 50
                    });

                    $http.get(url + "helpers.js").then(function(data) {
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
                        autoScrollEditorIntoView: true,
                        maxLines: 50
                    });

                    $http.get(url + "data.json").then(function(data2) {
                        json.setValue(data2.data);
                    });
                }
            }
            else if (index == 3) {
                if (!header) {
                    header = ace.edit("header");
                    header.setTheme("ace/theme/twilight");
                    header.session.setMode("ace/mode/javascript");
                    header.renderer.setScrollMargin(10, 10);
                    header.setOptions({
                        // "scrollPastEnd": 0.8,
                        autoScrollEditorIntoView: true,
                        maxLines: 50
                    });

                    $http.get(url + "header.html").then(function(data2) {
                        header.setValue(data2.data);
                    });
                }
            }
        };

        vm.executar = function() {
            vm.loading.generate_pdf = true;
            console.log("EXECUTAR: ", $state.params.projectId);
            $http.get("http://localhost:8000/reporting/" + $state.params.projectId, { responseType: 'arraybuffer' }).then(function(data, status) {
                console.log("Data: ", data);
                console.log("\nStatus: ", status);
                var file = new Blob([data.data], { type: 'application/pdf' });
                var fileURL = URL.createObjectURL(file);
                $scope.pdf = $sce.trustAsResourceUrl(fileURL);
                vm.loading.generate_pdf = false;
                //window.open($scope.pdf);
            });
        };

        function saveFiles() {

            var sendFiles = {
                url: $state.params.projectId
            };

            if (html) {
                sendFiles.html = html.getValue();
            }
            if (javascript) {
                sendFiles.javascript = javascript.getValue();
            }
            if (json) {
                sendFiles.json = json.getValue();
            }
            if (header) {
                sendFiles.header = header.getValue();
            }

            $http.post("http://localhost:8000/save-files", sendFiles).then(function(result) {
                toastr.success('salvamento realizado com sucesso.')
            });
        };
    }
})();