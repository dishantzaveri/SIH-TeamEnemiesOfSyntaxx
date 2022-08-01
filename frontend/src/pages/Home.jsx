import React from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiRightArrowAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="px-24 py-4 flex justify-between border-b">
      <Link className="font-bold text-3xl" to="/">
        mentoree
      </Link>
      <div className="flex gap-4 items-center">
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
        <Link to="/loginmentee">
          <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="px-24 py-6 flex justify-center gap-8 border-b">
      <h1 className="text-lg text-gray-700">All</h1>
      <h1 className="text-lg text-gray-700">Entrepreneurship</h1>
      <h1 className="text-lg text-gray-700">Education</h1>
      <h1 className="text-lg text-gray-700">Art / Creative</h1>
      <h1 className="text-lg text-gray-700">Media / Production</h1>
      <h1 className="text-lg text-gray-700">Law</h1>
      <h1 className="text-lg text-gray-700">Recreational</h1>
    </div>
  );
};

const Section1 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center w-[50vw]">
        <h1 className="text-6xl font-semibold text-gray-800">
          Everyone needs a <span className="text-purple-gray-700">Mentor</span>
        </h1>
        <h1 className="text-center text-xl text-gray-700 mt-6">
          Search amazing individuals around the globe, find a mentor, expand
          your network, and learn from incredible people!
        </h1>
        <div className="flex items-center border rounded-full w-full bg-white text-gray-700 mt-12 box-content">
          <BiSearch className="mr-4 ml-6 text-3xl text-greha-1" />
          <input
            className="focus:outline-0 bg-inherit w-full"
            type="text"
            placeholder="Search Mentor"
          />
          <div className="h-full px-8 py-4 bg-purple-gray-600 rounded-r-full cursor-pointer">
            <h1 className="text-white text-lg font-bold uppercase">Search</h1>
          </div>
        </div>
        <h1 className="text-xs text-greha-1 mt-4">
          Tip: Search by skills, interest, location, name etc
        </h1>
        <h1 className="flex items-center text-xl mt-20 text-greha-3 hover:text-purple-gray-700 transition-all duration-300 cursor-pointer">
          Browse all Mentors <BiRightArrowAlt className="text-2xl" />
        </h1>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="px-24 py-8 border-t">
      <h1>Copyrights © 2022 All Rights Reserved</h1>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Categories />
      <Section1 />
      <Footer />
    </div>
  );
};

export default Home;
