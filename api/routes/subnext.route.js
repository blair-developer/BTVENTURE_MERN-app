import express from 'express';
import { subscribe } from '../controllers/subnext.controller.js';

const router = express.Router();

router.post("/subscribe", subscribe); 

export default router;