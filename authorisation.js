const JWT = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
const token = req.headers['authorization'];
   console.log(token.split(" ")[1]);
   let newToken = token.split(" ")[1];
 JWT.verify(newToken, process.env.JWT_SECRET_KEY, function (err, decoded) {
  
        if (err) {
          console.log(err.message);
          res.send({
            code: 401,
            message: "access denied"
          });
          return;
        } else {
          console.log("token successfull")
         
          next();
        }
     
      });
 
};
module.exports = verifyToken;