import express from 'express';
import {getAllposts , postAllposts} from '../controller/post-controller.js';


const postRouter = express.Router();

postRouter.get("/posts", getAllposts);
postRouter.post("/posts", postAllposts);

export default postRouter;