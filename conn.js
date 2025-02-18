const mongoose = require('mongoose');

async function connectToMongoDb(url){
    mongoose.connect(url)
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch((err)=>{
        console.log("No Connection");
        console.log(err);
    })
}

module.exports = connectToMongoDb;