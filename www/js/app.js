$(document).ready(function() {
    $('#execute-code').click(function(event) {
        event.preventDefault();
        console.log("TESTE", editor.getValue());
        $.ajax({
        	type: 'GET',
        	url: "http://localhost:8082/execute-pdf"
        }).then(function(data, status) {
            console.log("Data: ", data);
            console.log("\nStatus: ", status);
        });
    });
});
