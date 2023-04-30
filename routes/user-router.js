import express from 'express';
import { getAllUsers , registerUsers } from '../controller/user-controller.js';
const router = express.Router();

router.get("/users" , getAllUsers);
router.post("/register" , registerUsers);

export default router;