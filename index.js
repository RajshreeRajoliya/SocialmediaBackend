import Connection from "./db/db.js";
import express from 'express';

const app = express();
app.use(express.json());

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("Listen on port " + PORT) 
})
Connection();