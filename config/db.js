const mongoose = require('mongoose');
const colors = require('colors');


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`connected to MongoDb ${mongoose.connection.host}`.bgCyan.white)
    }catch(err){
        console.log(`MongoDb database error: ${err}`.bgRed.white);
        process.exit(1);
    }
}

module.exports =connectDB;
