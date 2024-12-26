import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app=express();
const port =process.env.PORT || 4000  // port number where our app is running 
connectDB()

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());//all the request pass to the json 
app.use(cookieParser())
app.use(cors({origin: allowedOrigins, credentials: true}))//so that we can send the cooki in the response from the express app


//API EndPoint
app.get('/',(req,res)=>res.send("API working"))
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)


app.listen(port,()=> console.log(`Server started on PORT:${port}`))//now when ever start the backend then this app will be started nd it will print the message in the terminal 
