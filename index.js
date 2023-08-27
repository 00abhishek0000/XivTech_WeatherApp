import express from 'express'
import cors from 'cors'
import weather from "./routes/postWeather.js"
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/getWeather", weather);

const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`server running on port  ${PORT}`);
})
