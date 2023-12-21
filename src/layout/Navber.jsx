import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navber = () => {

  const { user, logeOut } = useContext(AuthContext);
  const navigate = useNavigate()
  console.log(user);

  const handleLogout = () => {
    logeOut()
    .then(() => {
      navigate('/')
    })
  }
  
  return (
    <div className="bg-slate-900 text-white">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full navbar bg-base-500">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-xl font-bold">TaskSync Pro</div>
            <div className="flex-none hidden lg:block ">
              <ul className="menu menu-horizontal ">
                {/* Navbar menu content here */}
                { user ? <li>
                  <Link onClick={handleLogout} to="/login">Logout</Link>
                </li> : <li>
                  <Link to="/login">Login</Link>
                </li>}

              { user && <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>}
              </ul>
            </div>
          </div>
          {/* Page content here
          Content */}
        </div>
        <div className="drawer-side z-50 ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
          
          </label>
          
          <nav className="menu p-4 w-80 bg-base-200">
            {/* Sidebar content here */}
            <h1 className="flex-1 px-2 mx-2 text-center text-2xl text-black">TaskSync Pro</h1>
            <hr className="my-6" />
            <div className="min-h-screen">
            <li>
              <Link to='/'>Home</Link>
            </li>
            {user && <li>
              <Link to='dashboard'>Dashboard</Link>
            </li>}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navber;
