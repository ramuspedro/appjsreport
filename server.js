/*var jsreport = require('jsreport-core')({}),
        fs = require("fs"),
        http = require('http'),
        express = require('express'),
        app = express(),
        path = require('path'),
        router = express.Router();

var page = fs.readFileSync(path.join(__dirname, 'template', 'page.html'), 'utf8');
var header = fs.readFileSync(path.join(__dirname, 'template', 'header.html'), 'utf8');
var footer = fs.readFileSync(path.join(__dirname, 'template', 'footer.html'), 'utf8');
var data =  fs.readFileSync(path.join(__dirname, 'data', 'data.json'), 'utf8');
var helpers = fs.readFileSync(path.join(__dirname, 'helpers', 'helpers.js'), 'utf8');

var http = require('http').Server(app);

jsreport.use(require('jsreport-phantom-pdf')({ strategy: 'phantom-server' }))

//Diretorio root do projeto
app.use(express.static(path.join(__dirname, './www')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/execute-pdf', function(req, res) {
    console.log("TESTE");
    jsreport.init().then(function () {
        jsreport.render({
            template: {
                content: page,
                helpers: helpers,
                engine: 'handlebars',
                recipe: 'phantom-pdf',
                phantom: {
                    format: "A4",
                    width: "700px",
                    margin: "1cm",
                    numberOfWorkers: 1,
                    timeout: 180000,
                    allowLocalFilesAccess: false,
                    header: header,
                    headerHeight: "3cm",
                    footer: footer,
                    footerHeight: "21px"
                }
            },
            data: data

        }).then(function (resp) {
            const pdfData = resp.content;

            console.log("FIM: ", resp.content);

            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=Laudos2.pdf',
                'Content-Length': pdfData.length
            });

            //Retornando PDF
            res.send(pdfData);

        });

    }).catch(function (e) {
        console.log(e)
    });
});

var port = process.env.PORT || 8081;
//var port = process.env.PORT || 3000;

http.listen(port, function() {
    console.log('Running version H104M106. The magic happens on port ' + port);
});

*/
/*var jsreport = require('jsreport-core')({}),
    fs = require("fs"),
    http = require('http'),
    express = require('express'),
    app = express(),
    path = require('path'),
    router = express.Router();


//Setando a porta
app.set('port', process.env.PORT || 8000);

//Variaveis 
var page = fs.readFileSync(path.join(__dirname, 'template', 'page.html'), 'utf8');
var header = fs.readFileSync(path.join(__dirname, 'template', 'header.html'), 'utf8');
var footer = fs.readFileSync(path.join(__dirname, 'template', 'footer.html'), 'utf8');
var data = fs.readFileSync(path.join(__dirname, 'data', 'data.json'), 'utf8');
var helpers = fs.readFileSync(path.join(__dirname, 'helpers', 'helpers.js'), 'utf8');

function generatePDFjsReport(page, header, footer, data) {

}

var service = http.createServer(function(req, res) {
    console.log("TESTE");
    jsreport.init().then(function() {
        jsreport.render({
            template: {
                content: page,
                helpers: helpers,
                engine: 'handlebars',
                recipe: 'phantom-pdf',
                phantom: {
                    format: "A4",
                    width: "700px",
                    margin: "1cm",
                    numberOfWorkers: 1,
                    timeout: 180000,
                    allowLocalFilesAccess: false,
                    header: header,
                    headerHeight: "3cm",
                    footer: footer,
                    footerHeight: "21px"
                }
            },
            data: data

        }).then(function(resp) {
            const pdfData = resp.content;

            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=Laudo2.pdf',
                'Content-Length': pdfData.length
            });

            //Retornando PDF
            res.end(pdfData);

        });

    }).catch(function(e) {
        console.log(e)
    });
});

service.listen(
    app.get('port'),
    function() {
        console.log('Express server listening on port ' + app.get('port'));
    }
);
*/

//
////var jsreport = require('jsreport-core')({}),
//
var fs = require("fs"),
        http = require('http'),
        express = require('express'),
        app = express(),
        path = require('path'),
        router = express.Router();
//
//
//
//app.get('/', function(req,res){
//    res.send('Hello from the main application');
//});
//
//
//var reportingApp = express();
//app.use('/reporting', reportingApp);
//
//var server = app.listen(8000);
//
//var jsreport = require('jsreport-core')({
//  express: { app :reportingApp, server: server },
//  appPath: "/reporting"
//});
//
//jsreport.init().catch(function (e) {
//  console.error(e);
//});
//
//
////
////
//////Setando a porta
////app.set('port', process.env.PORT || 8000);
////
//////Variaveis 
var page = fs.readFileSync(path.join(__dirname, 'template', 'page.html'), 'utf8');
var header = fs.readFileSync(path.join(__dirname, 'template', 'header.html'), 'utf8');
var footer = fs.readFileSync(path.join(__dirname, 'template', 'footer.html'), 'utf8');
var data =  fs.readFileSync(path.join(__dirname, 'data', 'data.json'), 'utf8');
var helpers = fs.readFileSync(path.join(__dirname, 'helpers', 'helpers.js'), 'utf8');
////
////function generatePDFjsReport(page, header, footer, data){
////    
////}
////
////var service = http.createServer(function (req, res) {
////    jsreport.init().then(function () {
////        jsreport.render({
////            template: {
////                content: page,
////                helpers: helpers,
////                engine: 'handlebars',
////                recipe: 'phantom-pdf',
////                phantom: {
////                    format: "A4",
////                    width: "700px",
////                    margin: "1cm",
////                    numberOfWorkers: 1,
////                    timeout: 180000,
////                    allowLocalFilesAccess: false,
////                    header: header,
////                    headerHeight: "3cm",
////                    footer: footer,
////                    footerHeight: "21px"
////                }
////            },
////            data: data
////
////        }).then(function (resp) {
////            const pdfData = resp.content;
////
////            res.writeHead(200, {
////                'Content-Type': 'application/pdf',
////                'Content-Disposition': 'attachment; filename=Laudos.pdf',
////                'Content-Length': pdfData.length
////            });
////
////            //Retornando PDF
////            res.end(pdfData);
////
////        });
////
////    }).catch(function (e) {
////        console.log(e)
////    });
////});
////
////service.listen(
////        app.get('port'), function () {
////    console.log('Express server listening on port ' + app.get('port'));
////}
////);

var express = require('express');
var app = express();

var reportingApp = express();

app.use(express.static(path.join(__dirname, './www')));

app.use('/reporting', reportingApp);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/reporting', function (req, res) {
    jsreport.init().then(function () {
        jsreport.render({
            template: {
                content: page,
                helpers: helpers,
                engine: 'handlebars',
                recipe: 'phantom-pdf',
                phantom: {
                    format: "A4",
                    width: "700px",
                    margin: "1cm",
                    numberOfWorkers: 1,
                    timeout: 180000,
                    allowLocalFilesAccess: false,
                    header: header,
                    headerHeight: "3cm",
                    footer: footer,
                    footerHeight: "21px"
                }
            },
            data: data

        }).then(function (resp) {
            const pdfData = resp.content;

            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=Laudos.pdf',
                'Content-Length': pdfData.length
            });

            //Retornando PDF
            res.end(pdfData);
            //res.end(new Buffer(pdfData, 'binary'));

        });

    }).catch(function (e) {
        console.log(e);
    });
});

var server = app.listen(8000, function() {
    console.log('Express server listening on port ' + 8000);
});

var jsreport = require('jsreport-core')({
    express: {app: reportingApp, server: server},
    appPath: "/reporting"
});
//
//jsreport.init().catch(function (e) {
//    console.error(e);
//});