const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
//hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');





app.get('/', (req, res) => {

    res.render('home');

});

app.get('/about', (req, res) => {

    res.render('about');

});


app.listen(port);