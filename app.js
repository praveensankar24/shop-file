const app=require('express')();
const bodyparser=require('body-parser');
const cors=require('cors');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
require('./mongoose');

app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authentication-token,app");
  next();
});

require('dotenv').config();
require('./router')(app);

const port=5000;

app.listen(port,()=>console.log("the server 5000 is connected "))
