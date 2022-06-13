import express from 'express'
const router=express.Router();
import controller from '../controllers/UserController.js'
//use this router to make request liike get ,post request 
// router.get('/',(req,res)=>{
//    //we will make request to controller 
//    //res.send('user:srishti') 
// })
router.get("/",controller.get)
module.exports=router 
// export {router}