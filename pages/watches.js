import Link from 'next/link';

  const Watches=({watches})=> {
    let products=watches
    console.log('products',products);
    return (
      //  border-2  border-red-400
      <div className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl min-h-screen lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Object.keys(products).map((product,index) => (
              <Link key={products[product].slug} href={`/product/${products[product].slug}`}>
              <a  className=" group">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={products[product].img}
                    alt={products[product].imageAlt}
                    className="w-full h-full object-top  object-cover "
                  />
                </div>
                <h3 className="my-4 text-sm capitalize text-gray-700">{products[product].category}</h3>
                <div className="flex ">
                  {products[product].size.includes("S") && <span className="border-2 uppercase border-black-500 w-8 font-semibold text-center">s</span>}
                  {products[product].size.includes("M") && <span className="border-2 uppercase border-black-500 w-8 font-semibold text-center">m</span>}
                  {products[product].size.includes("L") && <span className="border-2 uppercase border-black-500 w-8 font-semibold text-center">L</span>}
                  {products[product].size.includes("XL") && <span className="border-2 uppercase border-black-500 w-8 font-semibold text-center">XL</span>}
                  {products[product].size.includes("XXL") && <span className="border-2 uppercase border-black-500 w-8 font-semibold text-center">XXL</span>}
                  {products[product].size.includes("XXXL") && <span className="border-2 uppercase border-black-500 w-8 font-semibold text-center">XXXL</span>}
                </div>
                <div className="colors flex mt-2 space-x-1">
                  {products[product].color.includes("white") && <button className="border-2 border-gray-300 bg-white-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[product].color.includes("black") && <button className="border-2 border-gray-300 bg-black  
                   rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[product].color.includes("grey") && <button className="border-2 border-gray-300 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[product].color.includes("green") && <button className="border-2 border-gray-300 bg-green-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[product].color.includes("yellow") && <button className="border-2 border-gray-300 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[product].color.includes("silver") && <button className="border-2 border-gray-300 bg-slate-200 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[product].color.includes("blue") && <button className="border-2 border-gray-300 bg-blue-900 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[product].color.includes("red") && <button className="border-2 border-gray-300 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900">{products[product].title}</h3>
                <p className="mt-1 text-lg font text-gray-700">Rs. {products[product].price}</p>
              </a>
              </Link>

            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export const getServerSideProps = async (context) => {
  
  let products=await fetch("http://localhost:3000/api/getproduct")
  // console.log("context",context)
  let data=await products.json()
  // console.log("data",products)
  let watches={}
    data.forEach(item => {
      // console.log('watches[item.title]',watches[item.title])
      if (item.title in watches) {
        if (item.availQty>0 && item.category=="watches" && !watches[item.title]["color"].includes(item.color)) {
          // console.log('watches[item.title]["color"]',watches[item.title]["color"],item.color);
          watches[item.title]["color"].push(item.color)
        }
        if (item.availQty>0 && item.category=="watches" && !watches[item.title]["size"].includes(item.size)) {
          watches[item.title]["size"].push(item.size)
        }
      } else {
        if (item.category=="watches" && item.availQty>0 ) {
          watches[item.title]={...item};  
          watches[item.title]["color"]=[item.color];
          watches[item.title]["size"]=[item.size];
        }
        
      }
    });
    console.log('watches',watches)
    return {
      props:{
        watches
      }
    }
  }
  export default Watches