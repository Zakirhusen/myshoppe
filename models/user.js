import mongoose from "mongoose";
let { Schema,model,models } = mongoose;
// const connection = async () => {
//   await connect("mongodb://localhost:27017/sampleInfo");
// };
// connection().catch((err) => console.log(err));

let userSchema = new Schema({
  name: { type: String, required: true },
  email:{type:String,required:true,unique:true},
  phone:{type:String,required:true,unique:true},
  password:{type:String,required:true}
});
// the || used prevent overwritten of model
export default models.user||model("user",userSchema)