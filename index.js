var express = require('express');
var app = express();


app.use(express.static(__dirname + '/views'));



var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

app.set('view engine', 'ejs');
app.set('views', './views')
    //console.log(port);


app.get('/', async function(req, res) {
    let data = {
        url: req.url,
    }
    res.render('index', data);
});