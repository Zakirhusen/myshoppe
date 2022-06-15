const mongoose = require("mongoose");
// import ConnectDb from "../middleware/connectDb"
let productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    availQty: { type: Number, required: true },
    slug: { type: String,required: true,unique:true},
    date:{type:Date ,default:Date.now}
  },{
    versionKey:false
  });

  // create collection
  const Product = mongoose.models.product || mongoose.model("product", productSchema);
  // console.log('product',Product);
  // console.log('models',mongoose.models);
export default Product