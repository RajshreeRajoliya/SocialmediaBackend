import express from 'express';
import {getAllposts , postAllposts , updatePost , deletePost} from '../controller/post-controller.js';


const postRouter = express.Router();

postRouter.get("/posts", getAllposts);
postRouter.post("/posts", postAllposts);
postRouter.patch("/posts/:id", updatePost);
postRouter.delete("/posts/:id", deletePost);

export default postRouter;