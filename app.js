var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(process.env.PORT || 8000);
console.log('Server running...');
console.log('listening to port 8000 from new app');

app.use(express.static("shionhouse"));

app.get('/', async function(req, res) {

    res.render('index')

})