const mongoose=require('mongoose');
var url='mongodb://127.0.0.1:27017/store';

mongoose.connect(url,{useNewUrlParser:true
});
mongoose.connection.on("connected",()=>console.log('mongoose is connected'));
mongoose.connection.on('disconnected',()=>console.log('mongoose is disconnected'));
mongoose.connection.on('error',(err)=>console.log('mongoose is error'));