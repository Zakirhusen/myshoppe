import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ConnectDb from "../../middleware/connectDb";
import Product from "../../models/product";
const mongoose=require("mongoose")

const ProductSlug = (props) => {
  let {addToCart,productData,variants}=props;
  console.log("productSlugData",productData)
  // console.log("variants as props",variants)
  const [pin, setPin] = useState('')
  const [pinService, setPinService] = useState(null)

  let color=productData.color
  let size=productData.size
  let router = useRouter();
  const { product } = router.query;
  // console.log("router", router);
  const checkService= async () => { 
    let data=await fetch("http://localhost:3000/api/pincode")
    let pincodes=await data.json()
    // console.log('pincodes',pincodes)
    pincodes.includes(parseInt(pin))?setPinService(true):setPinService(false);
    // console.log( typeof pin);
   }
   const inputHandler=(e)=>{
      setPin(e.target.value)
    //   console.log("e.target.value",e.target.value)
    //   console.log("pinService",pinService)
    //  console.log("pin",pin)
    //  console.log("pinlength",pin.length)
    
    // instantly setState cant update  so here we use e.target.value
     if ((e.target.value).length==0) {
       setPinService(null)
      }
    }
    const changeVariant =(e) => { 
      // console.log('value of change variant',e.target.value);
      // console.log('Object.keys(variants[e.target.value])',Object.keys(variants[e.target.value]));
      // setSize(Object.keys(variants[e.target.value])[0])
        console.log("color",e.target.value,'size is ii',size);
        // router.push(`/product/${variants[e.target.name=="btnColor"?e.target.value:color][size].slug}`)
        router.push(`/product/${variants[e.target.name=="btnColor"?e.target.value:color][e.target.name=="btnSize"?e.target.value:Object.keys(variants[e.target.value])[0]].slug}`)
        // window.location=(`/product/${variants[e.target.value][Object.keys(variants[e.target.value])[0]].slug}`)
     }
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto  object- object-top rounded"
              src={productData.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                MyShoppe
              </h2>
              <h1 className="text-gray-900 capitalize text-3xl title-font font-medium mb-1">
                {`${productData.title}(${productData.size}/${productData.color})`}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                {productData.desc}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes("white") &&  <button name="btnColor" value="white" onClick={changeVariant} className={`border-2 border-gray-300 shadow-xl rounded-full w-6 h-6 ${color==="white"?"outline-slate-500 outline outline-2":"none"}`}></button>}
                  {Object.keys(variants).includes("grey") &&  <button name="btnColor" value="grey" onClick={changeVariant} className={`border-2 border-gray-300 shadow-xl ml-1 bg-gray-700 rounded-full w-6 h-6 ${color==="grey"?"outline-slate-500 outline outline-2":"none"}`}></button>}
                  {Object.keys(variants).includes("blue") &&  <button name="btnColor" value="blue" onClick={changeVariant} className={`border-2 border-gray-300 shadow-xl ml-1 bg-blue-800 rounded-full w-6 h-6 ${color==="blue"?"outline-slate-500 outline outline-2":"none"}`}></button>}
                  {Object.keys(variants).includes("black") &&  <button name="btnColor" value="black" onClick={changeVariant} className={`border-2 border-gray-300 shadow-xl ml-1 bg-black rounded-full w-6 h-6 ${color==="black"?"outline-slate-500 outline outline-2":"none"}`}></button>}
                  {Object.keys(variants).includes("yellow") &&  <button name="btnColor" value="yellow" onClick={changeVariant} className={`border-2 border-gray-300 shadow-xl ml-1 bg-yellow-400 rounded-full w-6 h-6 ${color==="yellow"?"outline-slate-500 outline outline-2":"none"}`}></button>}
                  {Object.keys(variants).includes("red") &&  <button name="btnColor" value="red" onClick={changeVariant} className={`border-2 border-gray-300 shadow-xl ml-1 bg-red-800 rounded-full w-6 h-6 ${color==="red"?"outline-slate-500 outline outline-2":"none"}`}></button>}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select name="btnSize" onChange={changeVariant} defaulvalue={size} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {Object.keys(variants[color]).includes('S') && <option value="S">S</option>}
                      {Object.keys(variants[color]).includes('M') && <option value="M">M</option>}
                      {Object.keys(variants[color]).includes('L') && <option value="L">L</option>}
                      {Object.keys(variants[color]).includes('XL') && <option value="XL">XL</option>}
                      {Object.keys(variants[color]).includes('XXL') && <option value="XXL">XXL</option>}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="red"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  &#x20B9; {productData.price}
                </span>
                {/* <button type="button" onClick={()=>addToCart({}"myitem5",1,25,"sm","red","t-shirt")} className="flex mr-auto ml-12 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 uppercase rounded"> */}
                <button type="button" onClick={()=>addToCart(productData.slug,1,productData.price,productData.size,productData.color,productData.title)} className="flex mr-auto ml-12 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 uppercase rounded">
                  Add to cart
                </button>
              </div>
              <div className="">
                <div className=" flex items-center mt-5">
                  <input type="text" onChange={inputHandler} value={pin} className=" w-fit h-9 text-center  outline outline-2 outline-slate-300 rounded-sm  border-black "
                    placeholder="Enter Your Pincode"/>
                  <button onClick={checkService} className="flex h-10  ml-3 text-white bg-indigo-500 border-0 items-center px-3 focus:outline-none hover:bg-indigo-600 capitalize rounded">
                    Check
                  </button>
                </div>
                <div className="mt-1">
                  <span className={`text-green-600  ${pinService && pin?"inline":"hidden"}`}> 
                  Yay! We deliver to the location</span>
                  <span className={`text-rose-600  ${(!pinService && pinService!==null )?"inline":"hidden"} `}> 
                  Not deliverable to that location</span>
              </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const getServerSideProps=async(context)=>{
  // let product=await fetch(`http://localhost:3000/product/${context.req.query}`)
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  // console.log('query',context);
  const productSlug=await Product.findOne({slug:context.query.product})
  // console.log('quey slug ',context.query.product);
  
  // console.log('productSlug in backtitle end slug',productSlug);
  // console.log('productSlug in back ',productSlug.title);
  const variants=await Product.find({title:productSlug.title})
  // console.log('variants',variants);
  let colorSizeSlug={}
  for (const item of variants) {    
  if (item.color in colorSizeSlug && item.availQty>0) {
    colorSizeSlug[item.color][item.size]={slug:item.slug}
  } else {
    if(item.availQty>0){
      colorSizeSlug[item.color]= {}
      colorSizeSlug[item.color][item.size]= {slug:item.slug}
    }
  }
}

   console.log("colorSizeSlug",colorSizeSlug)
  return{
    props:{
      productData: JSON.parse(JSON.stringify(productSlug)),
      variants:JSON.parse(JSON.stringify(colorSizeSlug))
    }
  }
}
// export default getServerSideProps;

export default ProductSlug;
