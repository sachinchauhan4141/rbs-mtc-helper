const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://cluster0.xcejt8u.mongodb.net/test"

mongoose.set('strictQuery', false);

const connectToMongo = () => {
  mongoose.connect(mongoURI,).then(()=>{
    console.log('successfully connected');
    }).catch((e)=>{
    console.log('not connected');
    });
};

module.exports = connectToMongo;
