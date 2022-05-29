import Link from "next/link";
import {
  AiOutlineDelete,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useState,useRef, useEffect } from "react";

const Navbar = ({addToCart,clearCart,cart,decByOne,incByOne, deleteFromCart}) => {

  // console.log("cart in nav.js",cart);
  let refMenu = useRef("");
  let refLogo = useRef("");
  let refCart = useRef("");

  const toggleMenu = () => {
    // console.log("onlic");
    // refMenu.current.style.backgroundColor="red";
    if (refMenu.current.classList.contains("hidden")) {
      refMenu.current.classList.add("flex");
      refMenu.current.classList.remove("hidden");
      refLogo.current.classList.add("-translate-y-[200%]");
      refLogo.current.classList.remove("translate-y-[0%]");
      // for cart can't open when menu open vice versa
      refCart.current.classList.remove("translate-x-0");
      refCart.current.classList.add("translate-x-full");
    } else {
      refMenu.current.classList.add("hidden");
      refMenu.current.classList.remove("flex");
      refLogo.current.classList.add("translate-y-[0%]");
      refLogo.current.classList.remove("-translate-y-[200%]");
    }
  };
  const toggleCart = () => {
    if (refCart.current.classList.contains("translate-x-full")) {
      refCart.current.classList.add("translate-x-0");
      refCart.current.classList.remove("translate-x-full");

      // for cart can't open when menu open vice versa
      refMenu.current.classList.add("hidden");
      refMenu.current.classList.remove("flex");
    } else {
      refCart.current.classList.remove("translate-x-0");
      refCart.current.classList.add("translate-x-full");
    }
  };
  let numOfItems=0
  if(Object.keys(cart)){
  Object.keys(cart).forEach(itemId => {
    numOfItems+= cart[itemId].qty
  });
}

  return (
    <>
      <nav className="py-6 bg-blue-100 fixed z-1000 w-full top-0 mb-7 z-40">
        <div className="navmain  border-red-8 flex border- bg-blue-100 ">
          <div className="flex flex-row sm:flex-col lg:flex-row w-2/3 justify-between sm:justify-center items-center ">
            {/* mobile menu */}
            <div
              onClick={toggleMenu}
              className="px-5 mobile-menu text-2xl font-bold sm:hidden text-[#0049af]"
            >
              <AiOutlineMenu className="" />
            </div>
            <div className="w-9/12 md:w-1/3  border-red- text-center  border- ">
              <div
                ref={refLogo}
                className="flex-shrink-0 sm:translate-y-0 justify-center flex items-center"
              >
                <img
                  className="block h-7 sm:h-8 w-auto"
                  src="/logo1.png"
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="items lg:w-1/3 sm:flex hidden border-red- border- m-0  text-lg text-[#0049af] capitalize font-semibold">
              <ul className="flex space-x-5  items-start border-red- border-">
                <li>
                  <Link href="/tshirts">
                    <a>tshirts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shoes">
                    <a>shoes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/watches">
                    <a>watches</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mugs">
                    <a>mugs</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* cart and signin */}
          <div className="cart  signin text-[#0049af] w-1/3 border-red-8  items-center justify-end pr-4  sm:space-x-6 space-x-3 flex border- text-2xl">
            <div className="cart">
              <FaUserCircle />
            </div>
            <div onClick={toggleCart} className="cart relative z-0 ">
              {numOfItems>0 && <span className="w-5 h-5 rounded-full absolute -top-2.5 -right-3 text-white text-xs flex items-center justify-center font-bold z-10 bg-rose-600">
                {numOfItems}
              </span>}

              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div
          ref={refMenu}
          className="items hidden sm:hidden  px-5 mt-3 border-red- border- m-0  text-lg text-[#0049af] capitalize font-semibold"
        >
          <ul className="flex-col space-y-5  items-start border-red- border-">
            <li>
              <Link href="/tshirts">
                <a>tshirts</a>
              </Link>
            </li>
            <li>
              <Link href="/shoes">
                <a>shoes</a>
              </Link>
            </li>
            <li>
              <Link href="/watches">
                <a>watches</a>
              </Link>
            </li>
            <li>
              <Link href="/mugs">
                <a>mugs</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* designing Cart */}
      <div
        ref={refCart}
        className="cart transition-transform z-50 bg-blue-100 overflow-y-scroll fixed top-0 translate-x-full right-0 sm:w-2/5 w-4/5 border-2 borer-red-800 h-screen"
      >
        <div className="text-right flex  justify-end m-3">
          <AiOutlineClose
            onClick={toggleCart}
            className="text-2xl top-0 right-0 font-bold text-[#0049af]"
          />
        </div>
        <h1 className="text-xl capitalize text-center font-bold text-[#0049af]">
          my cart
        </h1>
        <div className="cart-items  mt-2 -2 p-8 px-0 ml-5 text-[#0049af] font-semibold sm:text-xl text-base ">
          <ol className="list-decimal space-y-3 sm:pl-5 lg:pl-10 w-full">
           {Object.keys(cart).length==0 && <p className="my-5 p-0 capitalize">please Add some items to checkout</p>}
          {
            Object.keys(cart).map((itemId)=>{
              {/* console.log("itemId is ",itemId)
              console.log("Object.itemIds(cart)",Object.itemIds(cart)) */}
              return(<li key={itemId}>
              <div className="flex items-center">
                <div className="item-name capitalize md:w-3/5 w-1/2">{`${cart[itemId].name} (${cart[itemId].size}/${cart[itemId].color})`}</div>
                <div className="item-name flex border-2 w-1/2 lg:w-2/5 lg:px-5">
                  <div onClick={()=>{deleteFromCart(itemId)}}  className="flex hover:text-red-600 items-center justify-center lg:text-2xl sm:text-xl text-lg cursor-pointer bg-gren-500 w-1/4">
                    <AiOutlineDelete />
                  </div>
                  <div  className="text-center border-2 rounded-l-xl bg-blue-50 h-8 flex items-center justify-center font-bold text-xs w-1/3">
                    {cart[itemId].qty>1 && <AiOutlineMinus onClick={()=>decByOne(itemId)} className="text-base top-0 right-0 fo-bold" />}
                    {cart[itemId].qty<=1 && <AiOutlineDelete onClick={()=>{deleteFromCart(itemId)}} className="text-xl hover:text-red-600 top-0 right-0 fo-bold" /> }
                  </div>
                  <div  className="text-center border-2 bg-blue-50 h-8 flex items-center justify-center font-bold text-base  w-1/3">
                    {cart[itemId].qty
                    }
                  </div>
                  <div className="text-center border-2 bg-blue-50 rounded-r-xl h-8 flex items-center justify-center font-bold text-base w-1/3">
                    <AiOutlinePlus onClick={()=>{incByOne(itemId)}} />
                  </div>
                </div>
              </div>
            </li>
            
            )
            })
            }
          </ol>

          {/* checkout and clear cart button */}
          <div className="my-10 px-5 flex space-x-3">
            <button
              type="submit"
              className="group capitalize relative w-40 flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
            >
              checkout
            </button>
            <button
              type="button" onClick={clearCart}
              className="group capitalize relative w-40 flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  "
            >
              clear
            </button>
          </div>
        </div>
      </div>
      {/* below div is manage space for navbar */}
      <div className="h-16  py-10"></div>
    </>
  );
};

export default Navbar;
