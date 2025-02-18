const express = require('express');
const path = require('path');
const app = express();

const connectToMongoDb = require('./conn');
connectToMongoDb('mongodb://localhost:27017/shortenerUrl');

const urlRoutes = require('./routes/url');
const staticRoutes = require('./routes/staticRoute');

const port =3000;

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.use(express.static('public'));

app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use('/url',urlRoutes);
app.use('/',staticRoutes);

app.listen(port,function(){
    console.log(`App is listening on the port ${port}.`);
})