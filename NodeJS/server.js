const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Initializing the app
const app = express();
app.use(express.json());

//Initialing the database
const dbURL = 'mongodb://192.168.99.101:27017/nodeapi';
mongoose.connect(dbURL, 
        { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
        },
        () => {console.log("connection established")}).
        catch(error => console.warn(error));

mongoose.connection.on('connected', function(){  
        console.log("Mongoose default connection is open to ", dbURL);
 });
mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" !");
});
mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3030);
