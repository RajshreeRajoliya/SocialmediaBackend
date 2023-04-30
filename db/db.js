

import mongoose from 'mongoose';

const Connection = async()=>{
    const URL = "mongodb://admin:admin123@ac-etvhdld-shard-00-00.rqglw7f.mongodb.net:27017,ac-etvhdld-shard-00-01.rqglw7f.mongodb.net:27017,ac-etvhdld-shard-00-02.rqglw7f.mongodb.net:27017/?ssl=true&replicaSet=atlas-nvwz66-shard-0&authSource=admin&retryWrites=true&w=majority";
    try{
   await mongoose.connect(URL , {useNewUrlParser:true});
   console.log("Connected to Database")
    } catch(err) {
     console.log("Error connecting to database")
    }
}

export default Connection;
