const express        = require('express');
const app            = express();

const port = 8080;

app.use(express.static(__dirname + '/dist'));

app.listen(port);

console.log('Magic happens on port ' + port);
