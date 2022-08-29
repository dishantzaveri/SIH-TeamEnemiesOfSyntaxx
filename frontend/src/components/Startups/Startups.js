import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";

import axios from "axios";
import Location from "@material-ui/icons/LocationOnOutlined";
import GrainOutlined from "@material-ui/icons/GrainOutlined";
import Header from "../Header/Header";
const Startup = ({ startup }) => {
  return (
    <div>
      <div className="bg-white flex flex-col items-center self-center max-w-[280px] bottom-[-40px] p-2 rounded-b-2xl shadow-lg">
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
            {startup?.legalNameOfBusiness}
          </h1>
          <h1 className="mt-[5px]">Date : {startup?.dateOfRegistration}</h1>
          <h1 className="mt-[5px]">Location : {startup?.stateJurisdiction}</h1>
          <h1 className="mt-[5px]">Location : {startup?.stateJurisdiction}</h1>
        </div>
        <Link to="/singleMentor" state={{ startup: startup }}>
          <button
            style={{
              backgroundColor: "white",
              borderColor: "#604E9E",
              borderWidth: 1,
              color: "#604E9E",
            }}
            className="text-white self-end p-2 px-4 rounded-2xl mt-4"
          >
            View Startup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function Startups() {
  const { token } = useSelector((state) => state.auth);
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    console.log("Hello");
    getMentorsList();
  }, []);
  const getMentorsList = async () => {
    var config = {
      method: "get",
      url: "http://vismayvora.pythonanywhere.com/account/startups_list/",
      headers: {
        Authorization: `Token ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setMentors(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative ">
        <div className="py-[80px] flex">
          <div className="content ">
            <h1 className="text-5xl">All the Startups</h1>
            <h1 className="text-2xl mt-4 text-slate-700">
              Fund/Mentor a startup you like!
            </h1>
          </div>
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
        <h1 className="text-3xl">Startups List</h1>
        <div
          className="ml-8 mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            rowGap: "50px",
          }}
        >
          {mentors && mentors.map((mentor) => <Startup startup={mentor} />)}
        </div>
      </div>
    </>
  );
}
