
import express from 'express';
import mongoose from 'mongoose';

const Connection = async()=>{
    const URL = "mongodb+srv://admin:admin123@social-media.rqglw7f.mongodb.net/test";
    try{
   await mongoose.connect(URL , {useNewUrlParser:true});
   console.log("Connected to Database")
    } catch(err) {
     console.log("Error connecting to database")
    }
}

export default Connection;
