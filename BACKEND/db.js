const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Sachin_chauhan:Atlas_password@cluster0.xcejt8u.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);

const connectToMongo = () => {
  mongoose.connect(mongoURI,).then(()=>{
    console.log('successfully connected');
    }).catch((e)=>{
    console.log('not connected');
    });
};

module.exports = connectToMongo;
