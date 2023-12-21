import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createAccount,googleLogin, userPhotoAndNameUpdate } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navegate = useNavigate("");
  const location = useLocation();

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    setError("");

    if (password.length < 6) {
      return setError("Your password must be at least 6 characters");
    } else if (!/^(?=.*[A-Z]).*$/.test(password)) {
      return setError("Password must have at least one Uppercase Character.");
    } else if (
      !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
    ) {
      return setError("Password must contain at least one Special Symbol.");
    }

    // update User

    createAccount(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire(
          'Good Job',
          'Register Successfully',
          'success'
        )
        navegate(location?.state ? location.state : "/"); 
        userPhotoAndNameUpdate(name, photo)
          .then(() => {})
          .catch((error) => {
            console.log(error)
          });
        
         
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const handleSocalLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good Job", "Login SuccessFull", "success");
        navegate(location?.state ? location.state : "/dashboard");
      })
      .catch((error) => {
        Swal.fire(
          "Sorry!!",
          "Please Provide Valid email and password",
          "error"
        );
        console.error(error);
      });
  };

  return (
    <div className="flex flex-wrap w-full ">
      <Helmet>
        <title>Tech Globe Hub | Register</title>
      </Helmet>
      <div className="flex flex-col w-full md:w-1/2 m-auto md:mt-24">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24"></div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32 border ">
          <p className="text-3xl text-center mt-7">Register</p>

          <form
            onSubmit={handelRegister}
            className="flex flex-col pt-3 md:pt-8"
          >
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t  border-l border-b    shadow-sm text-sm">
                  <MdDriveFileRenameOutline></MdDriveFileRenameOutline>
                </span>
                <input
                  type="text"
                  name="name"
                  id="design-login-email"
                  className=" flex-1 appearance-none border w-full py-2 px-4 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name"
                />
              </div>
              <div className="flex relative mt-3">
                <span className=" inline-flex  items-center px-3 border-t  border-l border-b   shadow-sm text-sm">
                  <MdDriveFileRenameOutline></MdDriveFileRenameOutline>
                </span>
                <input
                  type="text"
                  name="photo"
                  id="design-login-email"
                  className="  flex-1 appearance-none border w-full py-2 px-4 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Photo URL"
                />
              </div>
              <div className="flex relative mt-3">
                <span className=" inline-flex  items-center px-3 border-t  border-l border-b    shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  id="design-login-email"
                  className="  flex-1 appearance-none border w-full py-2 px-4 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t  border-l border-b    shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  name="password"
                  id="design-login-password"
                  className="  flex-1 appearance-none border w-full py-2 px-4 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
            <p className="text-base -mt-5 mb-3  text-red-600">{error}</p>
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold border hover:bg-[#FFCF9D] rounded-md text-center  transition duration-200 ease-in  shadow-md hover:text-black hover: focus:outline-none focus:ring-2"
            >
              <span className="w-full">Register</span>
            </button>
          </form>
          <div  className="flex gap-4 item-center mt-5">
            <button onClick={handleSocalLogin} 
              type="button"
              className="py-2 px-4 flex justify-center items-center border   hover:bg-[#FFCF9D] focus:ring-blue-500 focus:ring-offset-blue-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 hover:text-black focus:ring-offset-2  rounded-lg "
            >
              <FcGoogle className="mr-3 text-3xl"></FcGoogle>
              Google
            </button>
          </div>
          <div className=" mt-3 pb-12 text-center">
            <p>
              You have an account?
              <Link to="/login" className="font-semibold underline">
                Login?
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 shadow-2xl md:my-28">
                <img className="hidden object-cover w-full h-screen md:block" src="/images/object/9.jpg"/>
            </div> */}
    </div>
  );
};

export default Register;