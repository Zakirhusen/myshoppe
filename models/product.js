import mongoose from "mongoose"
const {Schema,connect}=mongoose;

console.log("connection",mongoose.connections);
try {
    if(mongoose.connections[0]){
        console.log('already connected ');
    }else{
        connect("mongodb://localhost:27017/myshoppe").then(()=>console.log('connection successful'))    
    }
} catch (err){
    console.log(err);
}
let productSchema=new Schema({
title:{type:String,required:true},
size:{type:String,required:true},
variant:{type:String,required:true},
slug:{type:String,required:true,unique:true},
})
// create collection
const Product=new mongoose.model("product",productSchema)
const createDocument=async()=>{
    const pList={
    title:"myshoppe tshirt1",
    size:"xl",
    variant:"red",
    slug:"this-is-my tshirt1",
    
}
// inserting document in product collection
// mongoose.model={}
await pList.save()
}
createDocument();