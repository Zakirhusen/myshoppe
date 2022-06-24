import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from 'next/router';

export default function Login(props) {
  // console.log('props',props);
  const [loginInputs, setLoginInputs] = useState({
    email:"",
    password:""
  })
  const router=useRouter()
  useEffect(() => {
    console.log('props.loginUser',props.loginUser);
    if(localStorage.getItem("token")){
    
      router.push('/')
    }
  if (props.loginUser) {
      }
  }, [])

  const inputHandler = (e)=>{
    setLoginInputs({...loginInputs,[e.target.name]:e.target.value})

  }

  const loginHandler = async(e)=>{
    e.preventDefault()
    let data={email:loginInputs.email,
    password:loginInputs.password}
      
    const result=await fetch("http://localhost:3000/api/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    let res=await result.json()
    console.log(res)
    console.log(result.ok)
    if (res.login) {
      props.login()
      // log()
      toast.success(res.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        localStorage.setItem("token",res.token)
        router.push('/')
      }, 1500);
    } else {
      toast.error(res.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <>
      <ToastContainer />
      <div className=" flex items-center min-h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-8 w-auto"
              src="logo1.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl active font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link href="/signup">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Signup
                </a>
              </Link>
            </p>
          </div>
          <form onSubmit={loginHandler} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  value={loginInputs.email}
                  onChange={inputHandler}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={loginInputs.password}
                  onChange={inputHandler}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href="/forgotPassword">
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
