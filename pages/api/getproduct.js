import ConnectDb from "../../middleware/connectDb"
import Product from "../../models/product"

 async function handler(req, res) {
   if(req.method == "GET"){
     let data=await Product.find();
     
    //  below convert convert object _id field into string 
    // console.log('data',typeof data[0]._id);
    // console.log('data',data.length);

    data =JSON.parse(JSON.stringify(data))
     res.status(200).json(data)
   }
}
export default ConnectDb(handler)