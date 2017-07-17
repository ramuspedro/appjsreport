// $(document).ready(function() {
//     $('#execute-code').click(function(event) {
//         event.preventDefault();
//         console.log("TESTE", editor.getValue());
//         $.ajax({
//         	type: 'GET',
//         	url: "http://localhost:8000/reporting"
//         }).then(function(data, status) {
//             console.log("Data: ", data);
//             console.log("\nStatus: ", status);
//             window.open(data);
//         });
//     });
// });

var app = angular.module('jsReportingApp', []);

app.controller('myCtrl', function($scope, $http, $sce) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.content = "";

    $scope.executar = function() {
        console.log("TESTE");

        $http.get("http://localhost:8000/reporting", {responseType: 'arraybuffer'}).then(function(data, status) {
            console.log("Data: ", data);
            console.log("\nStatus: ", status);
            var file = new Blob([data.data], {type: 'application/pdf'});
            console.log("file", file);
            var fileURL = URL.createObjectURL(file);
            $scope.content = $sce.trustAsResourceUrl(fileURL);
            window.open($scope.content);
        });
    }
});
