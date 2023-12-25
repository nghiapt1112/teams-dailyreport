var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


var port = 9000;

app.post('/post/data', function(request, response) {
    console.log('receiving data...');
    console.log('body is ',request.body);



    const path = '/home/ubuntu/project/jira/hooks/teams-dailyreport/hookdata';
    // const path2 = '/Users/ptnghia1/data/sources/cmc/jira/jira-hook/';
    fs.writeFile (path + "input.json", JSON.stringify(request.body), function(err) {
            if (err) throw err;
            console.log('complete');
        }
    );

    //
    // let body = '';
    // const filePath = '/Users/ptnghia1/data/sources/cmc/jira/jira-hook/data.json';
    // request.on('data', function(data) {
    //     body += data;
    // });
    //
    // request.on('end', function (){
    //     fs.appendFile(filePath, body, function() {
    //         respond.end();
    //     });
    // });

    response.send(request.body);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);