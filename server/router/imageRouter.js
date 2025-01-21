import express from 'express'
import { imageController } from '../controllers/imageContoller'
import userAuth from '../middleware/auth';

const imageRouter = express.Router();

imageRouter.post('/generate-image', userAuth ,imageRouter);

export default imageRouter;