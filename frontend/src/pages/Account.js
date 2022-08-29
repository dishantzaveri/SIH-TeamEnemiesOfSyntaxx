import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "../features/profile/profileAPISlice";
import Header from "../components/Header/Header";
import { Box, Modal } from "@mui/material/node";
import CreateCampaigns from "../CreateCampaigns/CreateCampaigns";
import { useGetStartupsQuery } from "../features/gst/gstAPISlice";
import { Link } from "react-router-dom";
import { base64 } from "ethers/lib/utils";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  // overflow:"scroll"
};
const Startup = ({ startup }) => {
  const [idCardBase64, setIdCardBase64] = useState("");
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  const [ppt, setPpt] = useState(startup.pitch_deck);
  return (
    <div className="flex items-center border-b-2 border-solid border-gray-200 pb-4">
      <div className="ml-4">
        <h1 className="font-extrabold text-lg cursor-pointer mt-4 self-center">
          {startup.legalNameOfBusiness}
        </h1>
        <p>GST number - {startup.gstin}</p>
        <p className="font-semibold">{startup.dateOfRegistration} - Present</p>
        {idCardBase64 && (
          <a
            className="px-2 py-1 border border-purple-gray-600 rounded-full bg-purple-gray-700 text-gray-100"
            href={idCardBase64}
            download
          >
            View Ppt
          </a>
        )}
        <div className="mt-2">
          <Link to="/pitchdeck-form">
            <button className="bg-purple-gray-500 text-sm font-semibold py-2 px-4 mr-4 rounded-full">
              Generate Pitchdeck
            </button>
          </Link>
          <input
            id="upload-image"
            type="file"
            accept=".pps,
            .jpg,
            .txt,
            application/pdf,
            application/vnd.ms-powerpoint,
            application/vnd.openxmlformats-officedocument.presentationml.slideshow,
            application/vnd.openxmlformats-officedocument.presentationml.presentation"
            hidden
            onChange={(e) => {
              setPpt(
                getBase64(e.target.files[0], (result) => {
                  setIdCardBase64(result);
                })
              );
              console.log(getBase64(e.target.files[0]));
            }}
          />
          <label
            htmlFor="upload-image"
            className="bg-purple-gray-500 text-sm font-semibold py-2 px-4 rounded-full"
          >
            Upload Pitchdeck
          </label>
        </div>
      </div>
    </div>
  );
};
const EditStartup = ({ data }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Edit your Startups</h2>
      <div
        class="bg-purple-gray-100 px-6 mt-2 rounded shadow-md text-black w-full"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "",
        }}
        noValidate
        autoComplete="off"
      >
        {data?.map((startup) => (
          <Startup startup={startup} />
        ))}
      </div>
    </div>
  );
};
const Account = () => {
  const { is_entrepreneur, email } = useSelector((state) => state.auth);
  const { data, isLoading, error } = useGetProfileQuery(
    is_entrepreneur ? "entrepreneur" : "mentor"
  );
  const { data: startups } = useGetStartupsQuery();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    console.log(data, startups);
  }, [data, startups]);

  return (
    <div>
      <Header />
      <div className="px-64 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative">
        <div className="flex justify-between absolute  top-[100px] ">
          <div className="shadow bg-white shadow-gray-300 p-8 flex flex-col rounded h-fit">
            <img
              className="w-[80px] h-[80px] rounded-full object-cover self-center"
              src={
                data?.profile_pic
                  ? data?.profile_pic
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
              }
            />
            <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
              {data?.name}
            </h1>
            <div className="mt-4">
              <div className="flex items-center mt-2">
                <MdEmail />
                <p className="ml-2">{email}</p>
              </div>
              <div className="flex items-center mt-2">
                <FaBirthdayCake />
                <p className="ml-2">17/06/2002</p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="ml-8 mt-32 shadow bg-white shadow-gray-300  p-[20px] rounded min-w-[600px]">
              <div className="flex justify-between border-b-[1px] border-solid border-gray-300 pb-2 mb-2">
                <h1 className="font-semibold text-lg cursor-pointer self-center ">
                  About
                </h1>
                <AiFillEdit size={23} color="#2eb6b8" />
              </div>
              <div>
                <p className="font-semibold text-base">Experience : </p>
                {data?.experience?.map((exp) => (
                  <>
                    <p>
                      <span className="font-semibold">Company</span> :{" "}
                      {exp.company_name}
                    </p>
                    <p>
                      <span className="font-semibold">Role</span> :{" "}
                      {exp.job_title}
                    </p>
                    <p>
                      <span className="font-semibold">Period</span> :{" "}
                      {exp.start_date} - {exp.end_date}
                    </p>
                    <p>
                      <span className="font-semibold">Location</span> :{" "}
                      {exp.location}
                    </p>
                    <p>
                      <span className="font-semibold">Industry</span> :{" "}
                      {exp.industry}
                    </p>
                  </>
                ))}
              </div>
              <div className="mt-4">
                <p className="font-semibold text-base">Education : </p>
                {data?.education?.map((edu) => (
                  <>
                    <p>
                      <span className="font-semibold">College</span> :{" "}
                      {edu.institute}
                    </p>
                    <p>
                      <span className="font-semibold">Year</span> :{" "}
                      {edu.start_date.split("-")[0]} -{" "}
                      {edu.end_date.split("-")[0]}
                    </p>
                    <p>
                      <span className="font-semibold">Course</span> :{" "}
                      {edu.degree} in {edu.study_field}
                    </p>
                    <p>
                      <span className="font-semibold">Grade</span> : {edu.grade}{" "}
                      cgpa
                    </p>
                  </>
                ))}
              </div>
            </div>
            <div className="ml-8 mt-4 shadow bg-white shadow-gray-300  p-[20px] rounded min-w-[600px] max-w-[700px]">
              <div className="flex justify-between border-b-[1px] border-solid border-gray-300 pb-2 mb-2">
                <h1 className="font-extrabold text-lg cursor-pointer self-center ">
                  Startups
                </h1>
                <AiFillEdit onClick={setOpen} size={23} color="#2eb6b8" />
                <Modal
                  open={open}
                  onClose={handleClose}
                  // sx={{overflow:"scroll"}}
                >
                  <Box sx={style}>
                    <EditStartup data={startups} />
                  </Box>
                </Modal>
              </div>
              <div>
                {startups?.map((startup) => (
                  <div className="mt-2 flex items-center border-b-2 border-solid border-gray-200 pb-4">
                    <div className="ml-4">
                      <h1 className="font-extrabold text-lg cursor-pointer mt-4 self-center">
                        {startup.legalNameOfBusiness}
                      </h1>
                      <p>GST number - {startup.gstin}</p>
                      <p className="font-semibold">
                        {startup.dateOfRegistration} - Present
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
