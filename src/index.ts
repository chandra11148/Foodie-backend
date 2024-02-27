
import * as dotenv from "dotenv";
dotenv.config();
import express,{ Request, Response, Application} from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import { authenticate } from "./config";
import mongoose, { ConnectOptions } from "mongoose";
import { authRouter, recipeRouter } from "./routes";
import fileUpload from "express-fileupload";


const app:Application = express();
app.use(cors(
 ));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(helmet());

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    abortOnLimit: true,
}))
app.use(passport.initialize());

//passport config
authenticate(passport);

app.use("/auth",authRouter);
app.use("/recipe",recipeRouter);
app.get("/ping",(req:Request,res:Response)=>{
    res.send("pong");
})
app.all("*",(req:Request,res:Response)=>{
   res.status(404).json({message:"No route found!"});
})
const PORT = (process.env.PORT as unknown as Number) || 8082;
const MONGO_URI = (process.env.MONGO_URI as string);
mongoose.connect(MONGO_URI).then(()=>{
    console.log("Connected To DB");
}).catch((err)=>{
    console.log(err);
});
app.listen(PORT,()=>{
    console.log(`Listening... at ${PORT}`);
});

export default app;