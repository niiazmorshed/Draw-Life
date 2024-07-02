import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/ContextProvider";
import toast, { Toaster } from "react-hot-toast";
import "./Nav.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import DarkMode from "../Dark Mode/DarkMode";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    toast.success("Logout Successfully");
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <NavLink to="/">
        <li>
          <span className="text-base font-semibold">Home</span>
        </li>
      </NavLink>

      <NavLink to="/allarts">
        <li>
          <span className="text-base font-semibold">All Arts</span>
        </li>
      </NavLink>
        <NavLink to="/weare">
          <li>
            <span className="text-base font-semibold">We</span>
          </li>
        </NavLink>
        <NavLink to="/ourreview">
          <li>
            <span className="text-base font-semibold">Our Review</span>
          </li>
        </NavLink>

      {user && (
        <>
          <NavLink to="/addcraft">
            <li>
              <span className="text-base font-semibold">Add To Craft</span>
            </li>
          </NavLink>
          <NavLink to={`/myartlist/${user.email}`}>
            <li>
              <span className="text-base font-semibold">My Art List</span>
            </li>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar md:bg-base-100 md:mb-6 md:mt-6 sm: mb-28">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div
          className="sm: pl-10"
          data
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <a className=" btn btn-ghost text-4xl">
            Draw<span className="text-yellow-700">Life!</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <DarkMode></DarkMode>
        {user ? (
          <div className="align-middle dropdown dropdown-end">
            <div className="flex">
              <div>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      id="explore"
                      alt="Tailwind CSS Navbar component"
                      src="https://i.ibb.co/k4mkCVQ/photo-2023-02-28-19-26-32-2.jpg "
                    />
                    <ReactTooltip
                      anchorId="explore"
                      place="top"
                      content={`${user.displayName}`}
                    ></ReactTooltip>
                  </div>
                </div>
                &nbsp;
              </div>
              <div>
                <button onClick={handleLogOut} className="btn">
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn">Login</button>
            </NavLink>
            &nbsp;
            <NavLink to="/register">
              <button className="btn">Register</button>
            </NavLink>
          </>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Navbar;
