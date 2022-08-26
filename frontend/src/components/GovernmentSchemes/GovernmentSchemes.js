import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Location from "@material-ui/icons/LocationOnOutlined";
import GrainOutlined from "@material-ui/icons/GrainOutlined";
// import { logout } from "../features/auth/authSlice";
import axios from "axios";
// import { useGetEventsQuery } from "../features/events/eventsAPISlice";
import { VscLoading } from "react-icons/vsc";
// import CreateEvents from "../components/CreateEvents/CreateEvents";
import Header from "../../components/Header/Header";
import {useGetSchemesQuery} from "../../features/schemes/schemesApiSlice" 
// import AddCircleIcon from '@mui/icons-material/AddCircle';

const Scheme = ({ scheme }) => {
  console.log(scheme);

  return (
    <div>
      {/* <img
        src={scheme.image}
        className="rounded-t-2xl max-w-[280px] max-h-[150px]"
      /> */}
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
            {scheme.title}
          </h1>
          {/* <h1 className="mt-[5px]">Price : {scheme.price}</h1>
          <h1 className="mt-[5px]">Organized By: {scheme.organiser}</h1>
          <div className="flex mt-[5px]">
            <Location />
            <h1>{scheme.venue}</h1>
          </div> */}
        </div>
        <button className="bg-purple-gray-600 text-white self-end p-2 px-4 rounded-2xl">
          Buy
        </button>
      </div>
    </div>
  );
};

const style = {
  position: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:"scroll"
};



const Schemes = (scheme) => {
    
    // var config = {
    //     method: 'get',
    //     url: 'https://vismayvora.pythonanywhere.com/news/scheme/',
    //     headers: { 
    //       'Authorization': 'Token 8ee14cbf8c09c0baeae939b60041b703ed240e82'
    //     }
    //   };
      
    //   axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data, isLoading, error } = useGetSchemesQuery();
  useEffect(() => {
    console.log(data);
  }, [data])
  
  return (
    <div>
      <Header />
      <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative ">
        <div className="py-[80px] flex">
          <div className="content ">
          <h1 className="text-5xl">Government Schemes</h1>
          <h1 className="text-2xl mt-4 text-slate-700">Book Your Seats Now!</h1>
          </div>
        
        {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{overflow:"scroll"}}
      >
        <Box sx={style}>
          <CreateEvents />
        </Box>
      </Modal> */}
        </div>
        <div>
          <div className="flex justify-between items-center p-2 bg-white rounded-3xl shadow-lg mt-[-25px]">
            <input placeholder="Search Schemes.." />
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
        <h1 className="text-3xl">Major Government Schemes</h1>
        <div
          className="ml-8 mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            rowGap: "50px",
          }}
        >
          {data && data.map((scheme) => (
            <Scheme scheme={scheme} />
          ))}
        </div>
        {
          isLoading && 
          <div className='w-full flex flex-col justify-center items-center my-8'>
            <VscLoading className='w-8 h-8 animate-spin text-center text-gray-600' />
            <h1 className='text-xl mt-2'>Loading...</h1>
          </div>
         } 
      </div>
    </div>
  );
};

export default Schemes;
