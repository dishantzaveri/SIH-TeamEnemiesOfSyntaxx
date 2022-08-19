import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { logout } from "../features/auth/authSlice";
import "./Events.css";
const Events = () => {
  const Header = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    console.log(token);

    return (
      <div className="px-24 py-4 flex justify-between items-center border-b">
        <Link className="font-bold text-3xl" to="/">
          mentoree
        </Link>
        {/* {token && ( */}
        {/* <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search bar" />
        </div> */}
        {/* )} */}

        {/* <div className={`flex gap-4 ${token && "hidden"} items-center`}>
          <Link className="font-semibold text-xl" to="/registermentor">
            Become a Mentor
          </Link>
          <Link className="font-semibold text-xl" to="/registermentor">
            Find a Mentor
          </Link>
          <Link to="/registermentee">
            <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-purple-gray-600 hover:text-white transition-all duration-150">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150">
              Log in
            </button>
          </Link>
        </div> */}
        {token && (
          <div className="px-64 flex flex-row justify-between items-center  flex-1">
            {/* // <div className="flex flex-row justify-content items-center flex-1"> */}
            <Link to="/feed">
              <h1 className="font-medium text-lg">Home</h1>
            </Link>

            <h1 className="font-medium text-lg">Mentors</h1>

            <Link to="/chat">
              <h1 className="font-medium text-lg">Chat</h1>
            </Link>

            <Link to="/myProfile">
              <h1 className="font-medium text-lg">Profile</h1>
            </Link>

            {/* <HeaderOption Icon={NotificationsIcon} title="Notifications" /> */}
            {/* <HeaderOption avatar={user.photoUrl} title="me" /> */}
            {/* </div> */}
          </div>
        )}
        <button
          className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150"
          onClick={() => dispatch(logout())}
        >
          Log out
        </button>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative">
        <div className="py-[80px]">
          <h1 className="text-5xl">Events by Top Entrepreneurs</h1>
          <h1 className="text-2xl mt-4 text-slate-700">Book Your Seats Now!</h1>
        </div>
        <div>
          <div className="">
            <input placeholder="Search Events.." />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
