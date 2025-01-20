import express from 'express'
import { imageController } from '../controllers/imageContoller'

const imageRouter = express.Router();

imageRouter.post('/generate-image', imageRouter);

export default imageRouter;