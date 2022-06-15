import mongoose from "mongoose";
const {model,models,Schema}=mongoose;

const orderSchema=new Schema({
    orderId:{type:String,required:true},
    itemId:{type:String,required:true},
    amount:{type:Number,required:true},
})