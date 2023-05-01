import Connection from "./db/db.js";
import express from 'express';
import router from "./routes/user-router.js";
import postRouter from "./routes/post-router.js";

const app = express();
app.use(express.json());

app.use("/api" , router);
app.use("/api" , postRouter);
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("Listen on port " + PORT) 
})
Connection();