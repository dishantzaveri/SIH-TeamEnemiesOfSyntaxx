import React from "react";

export const Navbar = () => {
  return (
    <div className="flex px-8 py-4 justify-between items-center border-b-2">
      <h1
        className="font-extrabold text-xl text-[#301896] cursor-pointer"
        style={{
          fontFamily: "IBM Plex Sans",
        }}
      >
        Growth Mentor
      </h1>
      <div className="flex justify-between flex-1 px-64">
        <h1
          className="font-extrabold text-lg cursor-pointer"
          style={{
            fontFamily: "IBM Plex Sans",
          }}
        >
          Home
        </h1>
        <h1
          className="font-extrabold text-lg cursor-pointer"
          style={{
            fontFamily: "IBM Plex Sans",
          }}
        >
          Mentors
        </h1>
        <h1
          className="font-extrabold text-lg cursor-pointer"
          style={{
            fontFamily: "IBM Plex Sans",
          }}
        >
          Contact Us
        </h1>
        <h1
          className="font-extrabold text-lg cursor-pointer"
          style={{
            fontFamily: "IBM Plex Sans",
          }}
        >
          FAQ
        </h1>
      </div>
      <div className="flex items-center">
        <img
          className="w-[45px] h-[45px] rounded-full object-cover"
          src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        />
        <p
          className="text-base ml-4"
          style={{
            fontFamily: "IBM Plex Sans",
          }}
        >
          Profile
        </p>
      </div>
    </div>
  );
};
