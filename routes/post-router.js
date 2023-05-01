import express from 'express';
import {getAllposts} from '../controller/post-controller.js';


const postRouter = express.Router();

postRouter.get("/posts", getAllposts);

export default postRouter;