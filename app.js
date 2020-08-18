const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.json());

//Imports routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home page');
});

//conect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('DB connect successfully'));
    //console.log(mongoose.connection));

//how do we listining to the server
app.listen(3000);
