const express=require('express');
const routes=express.Router();
var controll=require('./controllar');
const authorisation1=require('./authorisation');
var router=async(app)=>{
    routes.get('/orderlist',controll.orderlist);
    routes.post('/orderdelete',controll.orderdelete);
    routes.put('/orderupdate',controll.orderupdate);
    routes.post('/takeorder',authorisation1,controll.takeorder);
    routes.post('/productenter',controll.productenter);
    routes.post('/login',controll.login);
    routes.post('/register',controll.register);
   
    app.use('/apk',routes)
}    
module.exports=router;