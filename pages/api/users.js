import ConnectDb from "../../middleware/connectDb"
import Product from "../../models/product"

 function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
export default ConnectDb(handler)