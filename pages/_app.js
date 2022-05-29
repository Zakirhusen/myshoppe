import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  console.log('cart',cart);
  useEffect(() => {
    setCart(JSON.parse( localStorage.getItem("cart")))
    console.log("cart inside useeefect");
  }, []);

  const saveCart=() => {
    localStorage.setItem("cart",JSON.stringify(cart))
   }
  const addToCart = (itemId, qty, price, size, color, name) => {
    let newCart=cart;
      if (itemId in cart) {
        // cart["key"]=cart['key'] + 4 
        newCart[itemId].qty=parseInt(newCart[itemId]['qty']) + parseInt(qty)
      } else {
        newCart[itemId]={qty:1,price,size,color,name}

        // console.log("newCart is in else ",newCart)
      }
      setCart({...newCart})
      saveCart()
    }

    

  // decrease quantity by 1 in car
  const decByOne=(itemId) => {
   let newCart=cart;
   if (newCart[itemId].qty>0) {
     
     newCart[itemId].qty=parseInt(newCart[itemId]['qty']) - 1;
   }

   setCart({...newCart})
   saveCart()
  }

  // Increase quantity by 1 in car
  const incByOne=(itemId) => {
   let newCart=cart;
   newCart[itemId].qty=parseInt(newCart[itemId]['qty']) + 1;

   setCart({...newCart})
   saveCart()
  }

  // delete item from cart whateever the quantity is
   const deleteFromCart=(itemId) => {
    let newCart=cart;
      delete newCart[itemId];
    setCart({...newCart})
    saveCart()
   }

   const clearCart=() => {
     console.log('clear cart');
    setCart({})
    // saveCart()
   }

  return (
    <>
      <Navbar cart={cart} addToCart={addToCart} clearCart={clearCart} incByOne={incByOne} decByOne={decByOne}  deleteFromCart={deleteFromCart} />
      

      <Component {...pageProps} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default MyApp;
