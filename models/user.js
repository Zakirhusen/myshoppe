import mongoose from "mongoose";
let { Schema, connect } = mongoose;
const connection = async () => {
  await connect("mongodb://localhost:27017/sampleInfo");
};
connection().catch((err) => console.log(err));
let usersSchema = new Schema({
  name: { type: String, required: true },
  email:{type:String,required:true},
  password:{type:String,required:true}
});
