import ConnectDb from "../../middleware/connectDb"
import user from "../../models/user"
var CryptoJS = require("crypto-js");


 const  handler =async(req,res)=> {
    try {
        if (req.method==="POST") {
            const {name,email,phone,password}=req.body
            const newUser=new user({
                name:name,
                email:email,
                phone:phone,
                password:CryptoJS.AES.encrypt(password,"sKey").toString()
            })
            let result=await newUser.save()
            // console.log('body',req.body);
            res.status(200).json({success:"Sinup successfully"})
        }
    } catch (error) {
        console.log('error is ',error);
        res.status(400).json(error)
    }
}
export default ConnectDb(handler)