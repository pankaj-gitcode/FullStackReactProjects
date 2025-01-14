import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import dbConnect from './config/db.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: 'Looks good!...'
    })
})

app.listen(PORT, ()=>{console.log("SERVER LISTENING ON PORT: ", PORT)});

dbConnect();