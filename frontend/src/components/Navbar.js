import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../src/features/auth/authSlice.js";
import { Avatar } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from '@material-ui/icons/Person';
import { useSelector } from 'react-redux';

function HeaderOption({ avatar, Icon, title}) {
  return (
      <div className="headerOption">
          {Icon && <Icon className='headerOption__icon' /> }
          {avatar && (
              <Avatar className="headerOption__icon" src={avatar}/>
          )}
          <h3 className='headerOption__title'>{title}</h3>
      </div>
  )
}

export default function  Navbar  ()  {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  console.log(token);

  return (
    <div className="header px-24 py-4 flex justify-between border-b">
      <Link className="font-bold text-3xl" to="/">
        mentoree
      </Link>
{/* {token && ( */}
  <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search bar" />
        </div>
{/* )} */}
      

      <div className={`flex gap-4 ${token && "hidden"} items-center`}>
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
      </div>
      <div>
      {token && (
        <>
        <div className="header__right">
        <Link to="/feed">
        <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/mentors">
        <HeaderOption Icon={SupervisorAccountIcon} title="Mentors" />
        </Link>

        <Link to="/chat">
        <HeaderOption Icon={ChatIcon} title="Chat" />
        </Link>

        <Link to="/myProfile">
        <HeaderOption Icon={PersonIcon} title="Profile" />
        </Link>
        
        {/* <HeaderOption Icon={NotificationsIcon} title="Notifications" /> */}
        {/* <HeaderOption avatar={user.photoUrl} title="me" /> */}
        <button
          className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150"
          onClick={() => dispatch(logout())}
        >
          Log out
        </button>
      </div>
        
        </>
      )}
      </div>
    </div>
  );
};


