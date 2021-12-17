import express from 'express';
import cors from 'cors';
import TodoRoute from './routes/TodoRoutes';
import dbConnection from './config/dbConnect';
import dotenv from 'dotenv'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
dotenv.config();
dbConnection();

// TOdo use the todo routes here

app.use('/api',TodoRoute);

app.get('/',(req, res) => {
    res.send('Hello My Dear Friends')
})


app.use((err, req, res,next) => {
    if(err) {
        console.log(err.message)
    }else{
        next()
    }
})

app.listen( process.env.PORT,()=> console.log("Server Running on port 5000"))