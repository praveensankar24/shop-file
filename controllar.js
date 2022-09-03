const jsonwebtoken=require('jsonwebtoken');
var saveservice=require('./service');
//customer registration
var register=async(req,res)=>{
    let savedata=await saveservice.saveData(req.body);
    res.send(savedata);
    console.log(req.body);
}
//coutomer login
var login=async(req,res)=>{
    var username=req.body.username;
    var password=req.body.password;
    var data=await saveservice.id(username);
    if(data.length==0){
        console.log('the username not match');
    }
    else{
        if(password=data[0].password){
           
            const token=jsonwebtoken.sign({password},process.env.JWT_SECRET_KEY);
            
                res.send({message:"login sucess",accessToken:token})
        }
        else{
            
            res.send('password is wrong');
            console.log("password is wrong")
        }
    }
}
// 
const productenter=async(req,res)=>{
    var saved=await saveservice.productsave(req.body);
    res.send('product upload');
    console.log(req.body);
}

//customer order stored in database
const takeorder=async(req,res)=>{
    
    var orderid=req.body.orderid;
    var username=req.body.username;
    var productname=req.body.productname;
    var date=req.body.date;
    var price=req.body.price;
    var quantity=req.body.quantity;
    var status=req.body.status
 const value=await saveservice.takeorder1(username,productname,date,price,quantity,orderid,status);

   res.send (value);
}
// customer order update
const orderupdate=async(req,res)=>{
const update=await saveservice.update1(req.body);
console.log(update)
    res.send(update);
}
// customer order delete
const orderdelete=async(req,res)=>{
    console.log(req.body);
    var orderid=req.body.orderid;
    var username=req.body.username;
    var productname=req.body.productname;
    var date=req.body.date;
    var price=req.body.price;
    var quantity=req.body.quantity;
    var status=req.body.status
    const delete1=await saveservice.orderremove(orderid,username,productname,date,price,quantity,status);
    res.send(delete1);
}
 const orderlist=async(req,res)=>{
   
     let delete2=await saveservice.orderlist1();
   
     res.send(delete2);}
   
module.exports={register,login,productenter,takeorder,orderupdate,orderdelete,orderlist};

