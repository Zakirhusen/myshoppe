import ConnectDb from "../../middleware/connectDb";
import Product from "../../models/product";

async function handler(req,res) {
  console.log('req.body',req.body);
  console.log('req.body',req.body[0].title);
  try {
    if (req.method == "POST") {

        for (const item of req.body) {
          
        console.log('title:req.body[item].title',item);

      const prod = new Product({
        title:item.title,
        desc:item.desc,
        size:item.size,
        color:item.color,
        img:item.img,
        category:item.category,
        price:item.price,
        availQty:item.availQty,
        slug:item.slug
      });
      // console.log(prod)
      let result =await prod.save();
      // console.log(result)
      res.status(200).json(result);
    };
    }
  } catch (error) {
    console.log('there is is error here',error);
    res.status(400).json(error);
  }
}
export default ConnectDb(handler);

// images array
//  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uOwZ2BQ9o-_6DV-CSdzHVHM3pmxig1TbxQ&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcd_r86rkRZ4fcWrkKYvs3LOyXIqRbf8i4w&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAPXJ4yG_mlAVRbWZdPQinDA7rwxT9BX9Ng&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uLPxS1oK06RULlm1jJ2KiBSsBmdpjFX94Q&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOzEn45I23HdJUgzLNqrhMFMOBqM4GYyLrw&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9qC2PN32vy2WwIjUD5ua-3Fs5KqNYUV5cw&usqp=CAU'
// ]