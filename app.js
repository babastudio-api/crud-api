const express = require('express');
const bodyparser = require('body-parser');
const babaRoutes = require('./routes/babastudio');
const path = require('path');
const mongoose = require('mongoose');
const uploadData = require('express-fileupload');
var back = require('express-back');
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(uploadData());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/babastudio', babaRoutes);

mongoose
.connect('mongodb+srv://babastudio:b4b4studio2019@cluster0-ffjji.mongodb.net/babastudio?retryWrites=true')
.then(result => {
    app.listen(8080);
})
.catch(err => console.log(err));