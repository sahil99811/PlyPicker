const express=require('express');
const app=express();
const authRoutes=require('./routes/Auth');
const { errorResponse } = require('./utils/errorResponse');
app.use(express.json());
app.use('/ap1/v1/auth',authRoutes);
app.use(errorResponse)


app.listen(process.env.PORT,()=>{
    console.log("Server has been started..");
})