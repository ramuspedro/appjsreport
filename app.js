
var jsreport = require('jsreport-core')({}),
        fs = require("fs"),
        http = require('http'),
        express = require('express'),
        app = express(),
        path = require('path'),
        router = express.Router();

//Diretorio root do projeto
rootDirectory = path.join(__dirname, '/');

// Diretorio dos scripts: img, js, css
dataDirectory = path.join(rootDirectory, 'script');

//Setando a porta
app.set('port', process.env.PORT || 8000);

var service = http.createServer(function (req, res) {
    jsreport.init().then(function () {
        jsreport.render({
            template: {
                content: fs.readFileSync(path.join(__dirname, 'template', 'page.html'), 'utf8'),
                engine: 'handlebars',
                recipe: 'phantom-pdf',
                phantom: {
                    format: "A4",
                    numberOfWorkers: 1,
                    timeout: 180000,
                    allowLocalFilesAccess: false,
                    header: "<center><h3 style='color:rgba(105, 120, 130, 0.8)'>HF 990013</h3></center>",
                    footer: "<div style='text-align:center'>{#pageNum}/{#numPages}</div><script type='text/javascript'> var elem = document.getElementById('pageNumber'); console.log('elem : '+elem); if (parseInt(elem.innerHTML) <= 3) { //hide page numbers for first 3 pages elem.style.display = 'none'; }</script>"

                }
            },
            data: fs.readFileSync(path.join(__dirname, 'data', 'data.json'), 'utf8'),

        }).then(function (resp) {

            const pdfData = resp.content;


            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=Laudos.pdf',
                'Content-Length': pdfData.length
            });

            //Retornando PDF
            res.end(pdfData);

        });

    }).catch(function (e) {
        console.log(e)
    });
});

service.listen(
        app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
}
);
