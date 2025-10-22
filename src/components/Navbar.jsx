import React, { use } from "react";
import logo from "../assets/image.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import Spinner from "../pages/Spinner";
const Navbar = () => {
  const { user, signoutUserFunc ,setUser} = use(AuthContext);
  console.log(user);
  // console.log(user.displayName)
  // console.log(photoURL)
  // console.log(user.displayName);
  // console.log(user.photoURL)
  // // console.log(user.photoURL);
  // console.log(user.reloadUserInfo.photoUrl);
  // console.log(user.displayName, user.photoURL)

  const handleLogout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  console.log(user);
  return (
    
    <div className="navbar bg-base-300 shadow-sm">
      <div><img src="" alt="" /></div>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">
              <li>
                Home
              </li>
            </NavLink>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>My Profile</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img className="w-[70px]" src={logo} alt="" /> Pet Care
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1">
          <NavLink to="/">
            <li>
              Home
            </li>
          </NavLink>
          <NavLink to="">
            <li>
              Services
            </li>
          </NavLink>
          <NavLink to="/">
            <li>
              Profile
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {  user ? (
          <div className="flex items-center justify-between gap-5">
            

            <button onClick={handleLogout} className="btn btn-sm">
              Logout
            </button>
          </div>
        ) : (
          <Link className="btn" to="/login">
             Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
