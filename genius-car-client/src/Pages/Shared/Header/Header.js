import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
    .then()
    .catch()
  }
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>

      {!user?.email ? (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="font-semibold">
            <button onClick={signOut}>Sign Out</button>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar h-20 bg-base-100 mb-12 pt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <Link>
            <img src={logo} alt="" />
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-warning btn-outline">
          Appointment {user?.displayName}
        </button>
      </div>
    </div>
  );
};

export default Header;
