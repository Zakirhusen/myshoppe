import Link from "next/link";
import {
  AiOutlineDelete,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
const Checkout = ({ cart, decByOne, incByOne,subTotal, deleteFromCart }) => {
  const initiatePayment=()=>{
  }
  return (
    <>
      <section className="text-gray-600 body-font relative">
      {/* <Script type="application/javascript" id="stripe-js" src="https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/BluSMU01785622758672.js" </Script> */}
        <div className=" sm:px-5 p-1 w-full py-24 mx-auto">
          {/* address details */}
          <div className="lg:w-1/2  md:w-2/3 mx-auto">
            <div className="flex flex-col text-left w-full mb-2">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Delivery Details
              </h1>
            </div>
            <div className="flex flex-wrap justify-center -m-2">
              <div className="p-2 w-4/5 sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-4/5 sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-4/5 sm:w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Address
                  </label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-4/5 sm:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-4/5 sm:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    State
                  </label>
                  <input onBlur={(e)=>{console.log(e)}}  type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-4/5 sm:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    City
                  </label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-4/5 sm:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Pincode
                  </label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>

            </div>

            {/* Payment details */}
            <div className="flex flex-col my-2 text-left w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Price Details
              </h1>
            </div>
            <div className="cart bg-blue-100 overflow-y-scroll my-5 w-full border-2 borer-red-800 h-auto">
                <div className="div flex justiy-between border-2 py-5 w-full">
                  <div className=" text-center capitalize italic w-1/3">item</div>
                  <div className=" text-center capitalize italic w-1/3 pl-5">price</div>
                  <div className=" text-center capitalize italic w-1/3 pl-5" >qty</div>
                </div>
              <div className="cart-items p-8 pt-0 px-0 ml-5 text-[#0049af] font-semibold sm:text-xl text-base ">
                <ol className="list-decimal space-y-3 sm:pl-5 lg:pl-10 w-full">
                  {Object.keys(cart).length == 0 && (
                    <p className="my-5 text-base md:text-lg p-0 capitalize">
                      your cart is empty please Add some items to checkout
                    </p>
                  )}
                  {Object.keys(cart).map((itemId) => {
                    {
                      /* console.log("itemId is ",itemId)
              console.log("Object.itemIds(cart)",Object.itemIds(cart)) */
                    }
                    return (
                      <li key={itemId}>
                        <div className="flex items-center">
                          <div className="item-name capitalize text-base  w-1/3">{`${cart[itemId].name} (${cart[itemId].size}/${cart[itemId].color})`}</div>
                          <div className="price w-1/3 text-center">
                          &#x20B9; {cart[itemId]["price"]}
                          </div>
                          <div className="item-name flex  w-1/3 lg:w-2/5 lg:px-5">
                          {cart[itemId].qty > 1 && <div
                              onClick={() => {deleteFromCart(itemId);}} className="flex hover:text-red-600 items-center justify-center lg:text-2xl sm:text-xl text-lg cursor-pointer bg-gren-500 w-1/4">
                              <AiOutlineDelete />
                            </div>}
                            <div className="text-center border-2 rounded-l-xl bg-blue-50 h-8 flex items-center justify-center font-bold text-xs w-1/3">
                              {cart[itemId].qty > 1 && (
                                <AiOutlineMinus onClick={() => decByOne(itemId)} className="text-base top-0 right-0 fo-bold"/>
                              )}
                              {cart[itemId].qty <= 1 && (
                                <AiOutlineDelete onClick={() => {deleteFromCart(itemId);}} className="text-xl hover:text-red-600 top-0 right-0 fo-bold"/>
                              )}
                            </div>
                            <div className="text-center border-2 bg-blue-50 h-8 flex items-center justify-center font-bold text-base  w-1/3">
                              {cart[itemId].qty}
                            </div>
                            <div className="text-center border-2 bg-blue-50 rounded-r-xl h-8 flex items-center justify-center font-bold text-base w-1/3">
                              <AiOutlinePlus onClick={() => {incByOne(itemId);}}/>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>

                {/* checkout and clear cart button */}
                <div className="my-10 px-5 flex space-x-3"></div>
              <div className="lg:mx-3 sm:px-3 capitalize text-xl ">subtotal: &#x20B9; {subTotal}</div>
              </div>
            </div>
            {/* <Link href="/payment" onClick={initiatePayment}> */}
            <Link href="/payment">
              <div className="py-2 w-full">
                <button className="flex mx-right text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Pay  &#x20B9; {subTotal}
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Checkout;
