import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../page/provider/ContextProvider";
import Swal from "sweetalert2";
import logo from "../images/fixlogo.png";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        Swal.fire("Good job!", "LogOut Successfully", "success");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const item = (
    <div className="font-semibold">
      <ul className="menu md:menu-horizontal px-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/service">Services</NavLink>
        </li>
        {user ? (
          <>
            <li tabIndex={0} className="z-[1]">
                <details>
                  <summary> Dashboard </summary>
                 
                
                  <ul className="p-2 w-36 md:p-0 md:text-sm">
                    <li>
                      <NavLink to="/manage-service">Manage-Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/add-service">Add-Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-schedule">My-Schedule</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
  return (
    <div className="navbar bg-base-100 base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {item}
          </ul>
        </div>

        <div className="flex items-center">
          <img src={logo} alt="logo" className="md:h-12 md:w-12 h-8 w-8" />
          <a className="md:text-2xl font-bold font-rancho">
            Fix<span className="text-emerald-400">PRO</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">{item}</div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <h1 className="ml-2 font-semibold ">{user?.displayName}</h1>
            <NavLink
              className="font-semibold btn btn-neutral normal-case ml-2"
              onClick={handleLogOut}
            >
              LogOut
            </NavLink>
          </>
        ) : (
          <NavLink className="font-semibold btn ml-2" to="/login">
            LogIn
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
