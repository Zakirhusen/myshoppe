const mongoose = require("mongoose");
const MONGOURI = process.env.MONGO_URI;
function ConnectDb(handler) {
  return async function (req,res) {
    // console.log('return async fun',req,res);
    if (mongoose.connections[0].isReady) {
      console.log("already connected");
      return handler(req, res);
    } else {
      await mongoose.connect(MONGOURI);
      console.log("connection is successful");
    }
    return handler(req, res);
  };
}
export default ConnectDb;
