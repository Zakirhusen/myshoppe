const mongoose = require("mongoose");

// main().catch(err => console.log(err));

// main().catch(err=>console.log(err));
// async function main() {
//    await mongoose.connect("mongodb://localhost:27017/myshoppe");
// }
//  console.log("connection",mongoose.connections);

if (mongoose.connections[0].isReady) {
  console.log("already connected ");
} else {
  mongoose
    .connect("mongodb://localhost:27017/myshoppe")
    .then(() => console.log("connection successful"));
}

let productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  img: { type: String, required: true },
  slug: { type: String,required: true,unique:true},
});
// create collection

const Product =  new mongoose.model("product", productSchema);
const createDocument = async() => {
    try {
        
    
        const prod =  new Product({
            title: "myshoppe tshirt1",
            size: "xl",
            color: "red",
            img: "img link",
            slug: "this-is-my tshirt51115",
          });
          // mongoose.model={}
          // inserting document in product collection
          let res = await prod.save();
          console.log("result is,", res);      
        } catch (error) {
            console.log(" error is ",error)
    }
  
};
createDocument();
