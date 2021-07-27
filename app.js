let http = require('http');

let nStatic = require('node-static');

let fileServer = new nStatic.Server('./public');

http.createServer(function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    fileServer.serve(req, res);

}).listen(process.env.PORT);