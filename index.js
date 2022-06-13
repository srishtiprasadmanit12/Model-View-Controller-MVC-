import express from 'express'
const app=express();
import userRoute from './routes/User.js'
//creating user route
app.use(userRoute,'/user')
app.listen(3005,()=>{
    console.log('server is runnning on port 3005')
})