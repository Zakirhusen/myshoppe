import ConnectDb from "../../middleware/connectDb";
import user from "../../models/user";
var jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;
      console.log("login crediantials", email, "  ", password);

      let loginUser = await user.findOne({ email: email });
      if (loginUser) {
        loginUser = JSON.parse(JSON.stringify(loginUser));
        let decryptPassword = CryptoJS.AES.decrypt(loginUser.password,"sKey").toString(CryptoJS.enc.Utf8);
        if (loginUser && password == decryptPassword) {
          const token = jwt.sign({ name: loginUser.name,email: loginUser.email }, 'secretkeymyshoppe');
          // console.log('token',token);
          res.status(200).json({login: true,msg:"Login Successfully",token });

        } else {
          console.log("respose error");
          res.status(400).json({ login:false,msg: "Password is invalid" });
          //   console.log('respose',res);
        }
      }else{
        res.status(200).json({ login: false, 
        msg:"Invalid email id" });
        
      }
    }
  } catch (error) {
    console.log("error is", error);
    res.status(400).json(error);
  }
};

export default ConnectDb(handler);
