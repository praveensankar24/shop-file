const mongoose=require('mongoose');
const Schema=mongoose.Schema();
var registration=mongoose.Schema({
     username:"String",
     password:"string",
     email:"string"
    
});
var product=mongoose.Schema({
        productname:"string",
        price:"string",
        date:"String",
        quantity:"string",
        id:"String",	
        name:"String",
        email:"String",
        number:"String",
       
});
var orderdata=mongoose.Schema({
    orderid:"String",
    username:"String",
    productname:"String",
    price:"String",

    date:"String",
    quantity:"String",
    status:"string",
   
})

const model1= mongoose.model("registrationdetails",registration);
const model2= mongoose.model("productdetails",product);
const model3= mongoose.model("orderdetails",orderdata);
const saveData=async(data)=>{
    try{
        const user= new model1(data);
        const savedata=await user.save();
        return savedata}
        catch(err){
            return false;
        }
}   
const id=async(data)=>{
    var register=await model1.aggregate([{$match:{"username":data}}]);
    return register;
}
var productsave=async(data)=>{
    try{
        var user1= new model2(data);
        var ask=await user1.save();
        return ask }
        catch(err){
            return false;
    }
}

const takeorder1=async(data,data1,data2,data3,data4,data5,data6)=>{
    const to=await model2.aggregate([{$match:{"productname":data1}}]);
    const match=await model1.aggregate([{$match:{"username":data}}])
    if(to.length>0){
        if(match.length>0){
       
            try{const user2=new model3({"username":data,"productname":data1,"date":data2,"price":data3,"quantity":data4,"orderid":data5,"status":data6});
            const save2= await user2.save();
                                                                                                                                                
      return save2 }
      catch(err){
          return false;
      }
    }
      }
      else{
          return"NO stock or username not found"
      }
}
const update1=async(data)=>{
   
    const value=await model3.aggregate([{$match:{"orderid":data.orderid}}]);
    if(value.length>0){
     
        const d= await model3.findOneAndUpdate({"orderid":data.orderid},{$set:{"username":data.username,"productname":data.productname,"quantity":data.quantity,"date":data.date,"price":data.price,"status":data.status}}, {returnDocument: "after"});
        
        return d
    }
    else{
        return "Not update";
    }
}
const orderremove=async(data,data1,data2,data3,data4,data5,data6)=>{
     
       try{ 
     var value=await model3.deleteMany({"orderid":data,
     "username" : data1, 
     "productname":data2,
     "date":data3, 
     "price":data4,
     "quantity":data5,
     "status":data6})
     return value;
    }
     catch(err){
        return "order not removed";
     }
}
const orderlist1=async()=>{

     const value=await model3.find({})
   
     return value;
        
   
   }



  
    


module.exports={saveData,id,productsave,takeorder1,update1,orderremove,orderlist1}