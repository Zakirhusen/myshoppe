import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import LoadingBar from 'react-top-loading-bar'
import {useRouter} from 'next/router';


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [progress, setProgress] = useState(0)
  const [loginUser, setLoginUser] = useState(false)
  const [key, setKey] = useState('')
  const router=useRouter()
  // console.log('cart',cart);

  useEffect(() => {
    console.log('_app is runnig');
      router.events.on('routeChangeStart',()=>setProgress(30))
      router.events.on('routeChangeComplete',()=>setProgress(100))
      if(localStorage.getItem("token")){
        setKey(Math.random())
        setLoginUser(true)
      }else{
        setLoginUser(false)
      };
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse( localStorage.getItem("cart")))
      saveCart({...JSON.parse( localStorage.getItem("cart"))})
    }else{
      setCart({})
    }
    
  }, []);
  

  // save cart to local storage
  const saveCart=(myCart) => {
    localStorage.setItem("cart",JSON.stringify(myCart))
    let cartLength=Object.keys(myCart)
    let total=0
    cartLength.forEach(cartItemId => {
      total+= myCart[cartItemId].qty*myCart[cartItemId].price
    });
    setSubTotal(total)
    // console.log("subtotal in app",subTotal)
   }

  //  add item to the cart
  const addToCart = (itemId, qty, price, size, color, name) => {
    let newCart=cart;
      if (itemId in cart) {
        newCart[itemId].qty=parseInt(newCart[itemId]['qty']) + parseInt(qty)
      } else {
        newCart[itemId]={qty:1,price,size,color,name}
      }
      setCart({...newCart})
      saveCart(cart)
    }

  // decrease quantity by 1 in car
  const decByOne=(itemId) => {
   let newCart=cart;
   if (newCart[itemId].qty>0) {
     newCart[itemId].qty=parseInt(newCart[itemId]['qty']) - 1;
   }
   setCart({...newCart})
   saveCart(cart)
  }
 
   
  // Increase quantity by 1 in car
  const incByOne=(itemId) => {
   let newCart=cart;
   newCart[itemId].qty=parseInt(newCart[itemId]['qty']) + 1;
   setCart({...newCart})
   saveCart(cart)

  }

  // delete item from cart whateever the quantity is
   const deleteFromCart=(itemId) => {
    let newCart=cart;
      delete newCart[itemId];
    setCart({...newCart})
    
    saveCart(cart)
   }

   const clearCart=() => {
    //  console.log('clear cart');
    // setState cant immedialtely update the state so here use saveCart with empty object
    setCart({})
    //  console.log('clear cart' ,cart);
    saveCart({})
   }
   
   //  login function 
   const login=()=>{
    setLoginUser(true)
  }
   //  logout function 
   const logOut=() => {
    console.log('logut is clicked');
    localStorage.removeItem("token")
    // setKey(Math.random())
    setLoginUser(false)
    
   }
   

// color-#0049af
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar cart={cart} loginUser={loginUser} login={login} logOut={logOut} key={key} subTotal={subTotal} addToCart={addToCart} clearCart={clearCart} incByOne={incByOne} decByOne={decByOne}  deleteFromCart={deleteFromCart} />
      <Component  {...pageProps} cart={cart} loginUser={loginUser} login={login} addToCart={addToCart} subTotal={subTotal} incByOne={incByOne} decByOne={decByOne}  deleteFromCart={deleteFromCart} />
      <Footer />
    </>
  );
}

export default MyApp;
