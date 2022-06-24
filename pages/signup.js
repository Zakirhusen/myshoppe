import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = ({loginUser}) => {
  const router = useRouter();
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [signupStatus, setsignupStatus] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push('/')
    }
    
  }, [])
  

  const inputHandler = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    // console.log('name->',inputName,'value->',inputValue);
    setFormInputs({ ...formInputs, [inputName]: inputValue });
  };

  let submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit is clicked");
    console.log("type-formInputs.confirmPassword", formInputs.confirmPassword);
    console.log("type-formInputs.Password", formInputs.password);
    if (
      formInputs.password === formInputs.confirmPassword &&
      formInputs.password.length > 3
    ) {
      let userData = {
        name: formInputs.name,
        phone: formInputs.phone,
        email: formInputs.email,
        password: formInputs.password,
      };

      let result = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      let res = await result.json();
      console.log("response",res);
      // if (res.success) {
      //   //   // router.push('/login')
      //   toast.success("Signup successflly login to continue", {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      // }
    // if (res.code == 11000) {
      // console.log("error occured");
      let toastToShow=res.success?toast.success:toast.error;
      let statusMessage=res.success?"Signup successflly login to continue":`${Object.keys(res.keyPattern)[0].charAt(0).toUpperCase()}${Object.keys(res.keyPattern)[0].substring(1)} ${Object.keys(res.keyPattern)[0]==='phone'?"No":"Id"} Already Exist !`
      
      toastToShow((res.success?statusMessage:statusMessage),{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    // }
    }else {
      console.log("invalid password");
      setsignupStatus(true);
      console.log("sign up status", signupStatus);
      toast.error("Password don't match or password must be 4 chars", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
       <ToastContainer />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-8 w-auto"
              src="logo1.png"
            />
            <h2 className="mt-6 text-center text-3xl active font-extrabold text-gray-900">
              Create Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link href="/login">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login
                </a>
              </Link>
            </p>
          </div>
          <form
            onSubmit={submitHandler}
            className="mt-8 space-y-6"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  onChange={inputHandler}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={inputHandler}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={inputHandler}
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={inputHandler}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Password
                </label>
                <input
                  onChange={inputHandler}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-confirmpPassword"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
