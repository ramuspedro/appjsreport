var fs = require("fs"),
    http = require('http'),
    express = require('express'),
    app = express(),
    path = require('path'),
    router = express.Router();
var bodyParser = require('body-parser');

var page = fs.readFileSync(path.join(__dirname, 'template', 'page.html'), 'utf8');
var header = fs.readFileSync(path.join(__dirname, 'template', 'header.html'), 'utf8');
var footer = fs.readFileSync(path.join(__dirname, 'template', 'footer.html'), 'utf8');
var data = fs.readFileSync(path.join(__dirname, 'data', 'data.json'), 'utf8');
var helpers = fs.readFileSync(path.join(__dirname, 'helpers', 'helpers.js'), 'utf8');


var reportingApp = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, './www')));

app.use('/reporting', reportingApp);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/reporting', function(req, res) {
    console.log("PAGE: ", page);
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
                'Content-Disposition': 'attachment; filename=Laudos.pdf',
                'Content-Length': pdfData.length
            });

            //Retornando PDF
            res.end(pdfData);
            //res.end(new Buffer(pdfData, 'binary'));

        });

    }).catch(function(e) {
        console.log(e);
    });
});

app.post('/create-project', function(req, res, next) {
    console.log("REQ", req.body);
    // res.json({msg:"ok"});
    var dir = "./www/projects/p1";

    // https://stackoverflow.com/questions/21194934/node-how-to-create-a-directory-if-doesnt-exist
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFile(dir + "/teste.js", "Hey there!", function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});

var server = app.listen(8000, function() {
    console.log('Express server listening on port ' + 8000);
});

var jsreport = require('jsreport-core')({
    express: { app: reportingApp, server: server },
    appPath: "/reporting"
});
//
//jsreport.init().catch(function (e) {
//    console.error(e);
//});