import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';
const app = express();
const userRouter = express.Router();

// POST method to create API for both signup & signIn
userRouter.post('/signup', registerUser );
userRouter.post('/signin', loginUser);

//export the router
export default userRouter;