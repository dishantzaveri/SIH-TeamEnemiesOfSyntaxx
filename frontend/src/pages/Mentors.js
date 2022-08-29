import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "../components/Navbar";
import MentorsList from "../components/MentorsList/MentorsList";
import SearchBar from "material-ui-search-bar";
import { Grid } from "@mui/material/node";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import { useGetMentorsListQuery } from "../features/list/listAPISlice";
import { VscLoading } from "react-icons/vsc";
import Header from "../components/Header/Header";
import axios from "axios";
import Location from "@material-ui/icons/LocationOnOutlined";
import GrainOutlined from "@material-ui/icons/GrainOutlined";
const Mentor = ({ mentor }) => {
  return (
    <div>
      <div className="bg-white flex flex-col items-center self-center max-w-[280px] bottom-[-40px] p-2 rounded-b-2xl shadow-lg">
        <img
          src={
            mentor?.profile_pic
              ? `http://vismayvora.pythonanywhere.com/${mentor.profile_pic}`
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
          }
          style={{
            objectFit: "contain",
            borderRadius: 100,
            width: 70,
            height: 70,
          }}
        />
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
            {mentor?.name}
          </h1>
          <h1 className="mt-[5px]">Expertise : {mentor?.expertise}</h1>
        </div>
        <Link to="/singleMentor" state={{ mentor: mentor }}>
          <button
            style={{
              backgroundColor: "white",
              borderColor: "#604E9E",
              borderWidth: 1,
              color: "#604E9E",
            }}
            className="text-white self-end p-2 px-4 rounded-2xl mt-4"
          >
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function Mentors() {
  const { data, isLoading } = useGetMentorsListQuery();
  const { token } = useSelector((state) => state.auth);
  const [mentors, setMentors] = useState([]);
  const [expertise, setExpertise] = useState("");
  useEffect(() => {
    if (expertise === "") getMentorsList();
  }, [expertise]);
  const getMentorsList = async () => {
    var config = {
      method: "get",
      url: "http://vismayvora.pythonanywhere.com/account/mentors_list/",
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
  const getSearchedMentors = async () => {
    let formData = new FormData();
    console.log(expertise);
    formData.append("expertise", expertise);
    var config = {
      method: "post",
      url: "http://vismayvora.pythonanywhere.com/account/search_mentors/",
      headers: {
        Authorization: `Token ${token}`,
      },
      data: formData,
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
            <h1 className="text-5xl">All the Mentors</h1>
            <h1 className="text-2xl mt-4 text-slate-700">
              Send connection request to your favorite mentor
            </h1>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center p-2 bg-white rounded-3xl shadow-lg mt-[-25px]">
            <input
              placeholder="Search Events.."
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
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
            <button
              onClick={() => {
                getSearchedMentors();
              }}
              className="text-white rounded-3xl bg-purple-gray-600 p-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 p-16">
        <h1 className="text-3xl">Mentor List</h1>
        <div
          className="ml-8 mt-4"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            rowGap: "50px",
          }}
        >
          {mentors && mentors.map((mentor) => <Mentor mentor={mentor} />)}
        </div>
      </div>
    </>
  );
}
