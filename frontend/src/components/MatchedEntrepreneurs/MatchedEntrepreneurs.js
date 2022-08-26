import React, { useEffect } from "react";
import Header from "../Header/Header";
import { AiFillHeart } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
const MatchedEntrepreneurs = () => {
  return (
    <div>
      <Header />
      <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64">
        <h1 className="text-white pt-16 font-semibold text-4xl">
          Entrepreneur's Request
        </h1>
        <h1 className="text-gray-600 pt-2 font-medium text-2xl">
          {" "}
          You can accept or reject entrepreneurs after viewing their profile
        </h1>
      </div>
      <div className="px-8 flex flex-row ">
        <div className="mb-8 shadow-lg mr-8 bg-white max-w-[300px] bg-white mt-[-35px] z-40 items-center shadow-gray-300 p-8 flex flex-col rounded h-fit">
          <img
            className="w-[80px] h-[80px] rounded-full object-cover self-center"
            src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
          />
          <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
            Santoshi Nakamoto
          </h1>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center mt-2">
              <p className="ml-2">Match : 90%</p>
              <AiFillHeart color="red" size={25} />
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">Industry Type : Tech</p>
            </div>
            <div className="flex flex-row justify-between mt-4 items-center w-full">
              <MdOutlineCancel color="red" size={45} />
              <TiTick color="lightgreen" size={45} />
            </div>
          </div>
        </div>
        <div className="mb-8 shadow-lg mr-8 bg-white max-w-[300px] bg-white mt-[-35px] z-40 items-center shadow-gray-300 p-8 flex flex-col rounded h-fit">
          <img
            className="w-[80px] h-[80px] rounded-full object-cover self-center"
            src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
          />
          <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
            Santoshi Nakamoto
          </h1>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center mt-2">
              <p className="ml-2">Match : 90%</p>
              <AiFillHeart color="red" size={25} />
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">Industry Type : Tech</p>
            </div>
            <div className="flex flex-row justify-between mt-4 items-center w-full">
              <MdOutlineCancel color="red" size={45} />
              <TiTick color="lightgreen" size={45} />
            </div>
          </div>
        </div>
        <div className="mb-8 shadow-lg mr-8 bg-white max-w-[300px] bg-white mt-[-35px] z-40 items-center shadow-gray-300 p-8 flex flex-col rounded h-fit">
          <img
            className="w-[80px] h-[80px] rounded-full object-cover self-center"
            src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
          />
          <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
            Santoshi Nakamoto
          </h1>
          <div className="mt-4 flex flex-col items-center">
            <div className="flex items-center mt-2">
              <p className="ml-2">Match : 90%</p>
              <AiFillHeart color="red" size={25} />
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="ml-2">Industry Type : Tech</p>
            </div>
            <div className="flex flex-row justify-between mt-4 items-center w-full">
              <MdOutlineCancel color="red" size={45} />
              <TiTick color="lightgreen" size={45} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchedEntrepreneurs;

// export default MatchedEntrepreneurs;
