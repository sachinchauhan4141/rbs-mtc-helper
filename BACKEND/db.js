const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/rbshelper"

mongoose.set('strictQuery', false);

const connectToMongo = () => {
  mongoose.connect(mongoURI,).then(()=>{
    console.log('successfully connected');
    }).catch((e)=>{
    console.log('not connected');
    });
};

module.exports = connectToMongo;
