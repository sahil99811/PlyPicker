const express=require('express');
const app=express();
const authRoutes=require('./routes/Auth');
const dotenv=require('dotenv');
const { errorResponse } = require('./utils/errorResponse');
const {dbConnect}=require('./config/dbConnect')
dotenv.config();
app.use(express.json());
app.use('/api/v1/auth',authRoutes);
app.use(errorResponse)

app.use('/',(req,res)=>{
    return res.json({message:"Server has been started"});
})
dbConnect().then(()=>{
    console.log("db connected successfully");
    app.listen(process.env.PORT,()=>{
        console.log(process.env.PORT);
        console.log("Server has been started..");
    })
}).catch((error)=>{
    console.log("some error while connecting db",error)
})
