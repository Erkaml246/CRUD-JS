import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import SiswaRoute from "./routes/SiswaRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/fullstack_',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected....'));

app.use(cors());
app.use(express.json());
app.use(SiswaRoute);

app.listen(5000, ()=> console.log('server up and running....'));