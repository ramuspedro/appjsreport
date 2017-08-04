var fs = require("fs"),
    http = require('http'),
    express = require('express'),
    app = express(),
    path = require('path'),
    router = express.Router();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
// ES6 promises
mongoose.Promise = Promise;

// mongodb connection
mongoose.connect("mongodb://localhost:27017/appreport", {
    useMongoClient: true,
    promiseLibrary: global.Promise
});

var db = mongoose.connection;

// mongodb error
db.on('error', console.error.bind(console, 'connection error:'));

// mongodb connection open
db.once('open', () => {
    console.log(`Connected to Mongo at: ${new Date()}`)
});

var reportSchema = mongoose.Schema({
    projectName: {
        type: String,
        unique: true
    },
    url: {
        type: String,
        unique: true
    }
});

// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

var AppReport = mongoose.model('Projects', reportSchema);

//var fluffy = new Kitten({ name: 'fluffy' });

/*fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});*/

/*var page = fs.readFileSync(path.join(__dirname, 'template', 'page.html'), 'utf8');
var header = fs.readFileSync(path.join(__dirname, 'template', 'header.html'), 'utf8');
var footer = fs.readFileSync(path.join(__dirname, 'template', 'footer.html'), 'utf8');
var data = fs.readFileSync(path.join(__dirname, 'data', 'data.json'), 'utf8');
var helpers = fs.readFileSync(path.join(__dirname, 'helpers', 'helpers.js'), 'utf8');*/


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

app.get('/reporting/:url', function(req, res) {
    console.log("PAGE: ", path.join(__dirname, '/www/projects/' + req.params.url, 'page.html'));
    console.log("HEREEEEEEEEEEEEEEEEEEEEEEEEEE");

    var page = fs.readFileSync(path.join(__dirname, '/www/projects/' + req.params.url, 'page.html'), 'utf8');
    var data = fs.readFileSync(path.join(__dirname, '/www/projects/' + req.params.url, 'data.json'), 'utf8');
    var helpers = fs.readFileSync(path.join(__dirname, '/www/projects/' + req.params.url, 'helpers.js'), 'utf8');
    // var header = fs.readFileSync(path.join(__dirname, '/www/projects/' + req.params.url, 'header.html'), 'utf8');
    // var footer = fs.readFileSync(path.join(__dirname, '/www/projects/' + req.params.url, 'footer.html'), 'utf8');

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
                    // header: header,
                    headerHeight: "3cm",
                    // footer: footer,
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

function createProject(url, name, callback) {
    console.log("CRIANDO", url)
    var dir = "./www/projects/" + url;
    // https://stackoverflow.com/questions/21194934/node-how-to-create-a-directory-if-doesnt-exist
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    //https://stackoverflow.com/questions/2496710/writing-files-in-node-js
    fs.writeFile(dir + "/helpers.js", "// Project: " + name, function(err) {
        if (err) {
            console.log("JS error: ", err);
            return console.log(err);
        }
        console.log("js created!");
        fs.writeFile(dir + "/data.json", "", function(err) {
            if (err) {
                console.log("json error: ", err);
                return console.log(err);
            }
            console.log("json created!");
            fs.writeFile(dir + "/page.html", "<--! Project: " + name + " -->", function(err) {
                if (err) {
                    console.log("json error: ", err);
                    return console.log(err);
                }
                console.log("html created!");
                callback();
            });
        });
    });
};

app.post('/create-project', function(req, res, next) {
    console.log("REQ", req.body);

    var newProject = new AppReport({ projectName: req.body.name, url: req.body.url });

    newProject.save(function(err, project) {
        if (err) {
            res.json({
                data: null,
                err: err
            });
        } else {
            createProject(req.body.url, req.body.name, function() {
                res.json({
                    data: project,
                    err: err
                });
            });
        }
    });

    // res.json({msg:"ok"});
    //var dir = "./www/projects/" + req.body.url;
});

app.get('/all-projects', function(req, res, next) {
    console.log("Get projets");
    AppReport.find().exec(function(err, data) {
        console.log("DATA: ", data);
        if (err) {
            return res.json({
                data: null,
                err: err
            });
        }
        return res.json({
            data: data,
            err: err
        });
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