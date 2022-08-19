import React from "react";
import  Navbar  from "../components/Navbar";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
const Account = () => {
  return (
    <div>
      <Navbar />
      <div className="px-64 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative">
        <div className="flex justify-between absolute  top-[100px] ">
          <div className="shadow bg-white shadow-gray-300 p-8 flex flex-col rounded h-fit">
            <img
              className="w-[80px] h-[80px] rounded-full object-cover self-center"
              src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
            />

            <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
              Angelina
            </h1>
            <div className="mt-4">
              <div className="flex items-center mt-2">
                <MdEmail />
                <p className="ml-2">manan@gmail.com</p>
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
                <p>
                  <span className="font-semibold">Company</span> : Google
                </p>
                <p>
                  <span className="font-semibold">Role</span> : Software
                  Engineer
                </p>
                <p>
                  <span className="font-semibold">Period</span> : 2020 June -
                  2021 July
                </p>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-base">Education : </p>
                <p>
                  <span className="font-semibold">College</span> : DJ Sanghvi
                </p>
                <p>
                  <span className="font-semibold">Year</span> : 2018-2022
                </p>
                <p>
                  <span className="font-semibold">Course</span> : Computer
                  Engineering
                </p>
              </div>
            </div>
            <div className="ml-8 mt-4 shadow bg-white shadow-gray-300  p-[20px] rounded min-w-[600px] max-w-[700px]">
              <div className="flex justify-between border-b-[1px] border-solid border-gray-300 pb-2 mb-2">
                <h1 className="font-extrabold text-lg cursor-pointer self-center ">
                  Startups
                </h1>
                <AiFillEdit size={23} color="#2eb6b8" />
              </div>
              <div>
                <div className="mt-2 flex items-center border-b-2 border-solid border-gray-200 pb-4">
                  <img
                    className="w-[60px] h-[60px] rounded-full object-cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
                  />
                  <div className="ml-4">
                    <h1 className="font-extrabold text-lg cursor-pointer mt-4 self-center">
                      Tesla
                    </h1>
                    <p>
                      <span className="font-semibold">Description: </span>{" "}
                      Tesla, Inc. is an American multinational automotive and
                      clean energy company headquartered in Austin, Texas. Tesla
                      designs and manufactures electric vehicles (electric cars
                      and trucks), battery energy storage from home to
                      grid-scale, solar panels and solar roof tiles, and related
                      products and services.
                    </p>
                    <p className="font-semibold">2020 June - Present</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center border-b-2 border-solid border-gray-200 pb-4">
                  <img
                    className="w-[60px] h-[60px] rounded-full object-cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
                  />
                  <div className="ml-4">
                    <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
                      Tesla
                    </h1>
                    <p>
                      <span className="font-semibold">Description: </span>{" "}
                      Tesla, Inc. is an American multinational automotive and
                      clean energy company headquartered in Austin, Texas. Tesla
                      designs and manufactures electric vehicles (electric cars
                      and trucks), battery energy storage from home to
                      grid-scale, solar panels and solar roof tiles, and related
                      products and services.
                    </p>
                    <p className="font-semibold">2020 June - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
