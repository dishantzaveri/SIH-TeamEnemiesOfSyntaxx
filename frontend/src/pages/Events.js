import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Location from "@material-ui/icons/LocationOnOutlined";
import GrainOutlined from "@material-ui/icons/GrainOutlined";
import { logout } from "../features/auth/authSlice";
import "./Events.css";
import axios from "axios";
import { useGetEventsQuery } from "../features/events/eventsAPISlice";
import { VscLoading } from "react-icons/vsc";
import CreateEvents from "../components/CreateEvents/CreateEvents";
import Header from "../components/Header/Header";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Event = ({ event }) => {
  useEffect(() => {
    console.log(event.image);
  }, []);
  return (
    <div>
      <img
        src={
          event.image
            ? event.image
            : "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
        }
        className="rounded-t-2xl max-w-[280px] max-h-[150px]"
      />
      <div className="bg-white flex justify-between self-center max-w-[280px] bottom-[-40px] p-2 rounded-b-2xl shadow-lg">
        <div className="">
          <h1
            className="text-lg font-bold mt-2"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            {event.name}
          </h1>
          <h1 className="mt-[5px]">Price : {event.price}</h1>
          <h1 className="mt-[5px]">Organized By: {event.organiser}</h1>
          <div className="flex mt-[5px]">
            <Location />
            <h1>{event.venue}</h1>
          </div>
        </div>
        <button className="bg-purple-gray-600 text-white self-end p-2 px-4 rounded-2xl">
          Buy
        </button>
      </div>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const Events = () => {
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   getEvents();
  // }, []);

  // const getEvents = async () => {
  //   const res = await axios.get(
  //     "https://vismayvora.pythonanywhere.com/api/session/"
  //   );

  //   console.log(res.data);
  //   setEvents(res.data);
  // };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data, isLoading, error } = useGetEventsQuery();
  // const Header = () => {
  //   const dispatch = useDispatch();
  //   const { token } = useSelector((state) => state.auth);
  //   console.log(token);

  // return (
  //   <div className="px-24 py-4 flex justify-between items-center border-b">
  //     <Link className="font-bold text-3xl" to="/">
  //       mentoree
  //     </Link>
  {
    /* {token && ( */
  }
  {
    /* <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search bar" />
        </div> */
  }
  {
    /* )} */
  }

  {
    /* <div className={`flex gap-4 ${token && "hidden"} items-center`}>
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
        </div> */
  }
  // {token && (
  //   <div className="px-64 flex flex-row justify-between items-center  flex-1">
  //     {/* // <div className="flex flex-row justify-content items-center flex-1"> */}
  //     <Link to="/feed">
  //       <h1 className="font-medium text-lg">Home</h1>
  //     </Link>

  //     <h1 className="font-medium text-lg">Mentors</h1>

  //     <Link to="/chat">
  //       <h1 className="font-medium text-lg">Chat</h1>
  //     </Link>

  //     <Link to="/myProfile">
  //       <h1 className="font-medium text-lg">Profile</h1>
  //     </Link>

  {
    /* <HeaderOption Icon={NotificationsIcon} title="Notifications" /> */
  }
  {
    /* <HeaderOption avatar={user.photoUrl} title="me" /> */
  }
  {
    /* </div> */
  }
  //         </div>
  //       )}
  //       <button
  //         className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150"
  //         onClick={() => dispatch(logout())}
  //       >
  //         Log out
  //       </button>
  //     </div>
  //   );
  // };
  return (
    <div>
      <Header />
      <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative ">
        <div className="py-[80px] flex">
          <div className="content ">
            <h1 className="text-5xl">Events by Top Mentors</h1>
            <h1 className="text-2xl mt-4 text-slate-700">
              Book Your Seats Now!
            </h1>
          </div>
          <button
            onClick={handleOpen}
            className="create-button bg-gradient-to-r from-[#c0edf5] via-blue-300  to-[#2eb6b8] text-white self-end p-2 px-4 rounded-2xl ml-[37%] "
          >
            <AddCircleIcon /> Create Event
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflow: "scroll" }}
          >
            <Box sx={style}>
              <CreateEvents />
            </Box>
          </Modal>
        </div>
        <div>
          <div className="flex justify-between items-center p-2 bg-white rounded-3xl shadow-lg mt-[-25px]">
            <input placeholder="Search Events.." />
            <input type="date" />
            <div>
              <Location />
              <select>
                <option>Location</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Assam</option>
                <option>Chennai</option>
              </select>
            </div>
            <div>
              <GrainOutlined />
              <select>
                <option>Industry</option>
                <option>Tech</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Sports</option>
                <option>Entertainment</option>
              </select>
            </div>
            <button className="text-white rounded-3xl bg-purple-gray-600 p-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 p-16">
        <h1 className="text-3xl">Major Events</h1>
        <div
          className="ml-8 mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            rowGap: "50px",
          }}
        >
          {data && data.map((event) => <Event event={event} />)}
        </div>
        {isLoading && (
          <div className="w-full flex flex-col justify-center items-center my-8">
            <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
            <h1 className="text-xl mt-2">Loading...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
