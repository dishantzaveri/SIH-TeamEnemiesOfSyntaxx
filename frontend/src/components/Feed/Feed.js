import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Posts/Post";
// import { db } from '../../../firebase';
// import firebase from 'firebase';
import { useSelector } from "react-redux";
// import { selectUser } from '../../../features/userSlice';
import FlipMove from "react-flip-move";
import CreatePosts from "../CreatePosts/CreatePosts";
import News from "../News/News";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice.js";
import { Avatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Navbar from "../Navbar";
import Header from "../Header/Header";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

// const Header = () => {
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);
//   console.log(token);

//   return (
//     <div className="header px-24 py-4 flex justify-between border-b">
//       <Link className="font-bold text-3xl" to="/">
//         mentoree
//       </Link>
//       {/* {token && ( */}
//       <div className="header__search">
//         <SearchIcon />
//         <input type="text" placeholder="Search bar" />
//       </div>
//       {/* )} */}

//       <div className={`flex gap-4 ${token && "hidden"} items-center`}>
//         <Link className="font-semibold text-xl" to="/registermentor">
//           Become a Mentor
//         </Link>
//         <Link className="font-semibold text-xl" to="/registermentor">
//           Find a Mentor
//         </Link>
//         <Link to="/registermentee">
//           <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-purple-gray-600 hover:text-white transition-all duration-150">
//             Sign Up
//           </button>
//         </Link>
//         <Link to="/login">
//           <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150">
//             Log in
//           </button>
//         </Link>
//       </div>
//       <div>
//         {token && (
//           <>
//             <div className="header__right">
//               <Link to="/feed">
//                 <HeaderOption Icon={HomeIcon} title="Home" />
//               </Link>

//               <HeaderOption Icon={SupervisorAccountIcon} title="Mentors" />

//               <Link to="/chat">
//                 <HeaderOption Icon={ChatIcon} title="Chat" />
//               </Link>

//               <Link to="/myProfile">
//                 <HeaderOption Icon={PersonIcon} title="Profile" />
//               </Link>

//               {/* <HeaderOption Icon={NotificationsIcon} title="Notifications" /> */}
//               {/* <HeaderOption avatar={user.photoUrl} title="me" /> */}
//               <button
//                 className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150"
//                 onClick={() => dispatch(logout())}
//               >
//                 Log out
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

function Feed() {
  //   const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
  //       setPosts(snapshot.docs.map(doc => (
  //         {
  //           id: doc.id,
  //           data: doc.data(),
  //         }
  //       )))
  //     ))
  //   }, [])

  //   const sendPost = e => {
  //     e.preventDefault();

  //     // db.collection("posts").add({
  //     //   name: user.displayName,
  //     //   description: user.email,
  //     //   message: input,
  //     //   photoUrl: user.photoUrl || '',
  //     //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     // });
  //     setInput("");
  //   };

  return (
    <div>
      <Header />
      <div className="">
          <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative">
        <div className="py-[80px] flex">
        <div className="content">
          <h1 className="text-5xl">Feed</h1>
          <h1 className="text-2xl mt-4 text-slate-700">Explore what others are doing</h1>
          </div>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-12 p-8 gap-8">
        <div className="col-span-1"></div>
        <div className="feed col-span-6">
          <div className="feed_inputContainer">
            <CreatePosts />
          </div>

          <FlipMove>
            {/* {posts.slice(0, 5).map(({ id, data: { name, description, message, photoUrl}}) => ( */}
            <Post
            // key="1"
            // name="Greha"
            // description="Here is my desc"
            // message="This is my message"
            // photoUrl={photoUrl}
            />
            {/* ))} */}
          </FlipMove>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <News />
        </div>
      </div>
    </div>
  );
}

export default Feed;
