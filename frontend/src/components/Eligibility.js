import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import gstLogo from "../assets/gst.png";
import cinLogo from "../assets/cin.png";
import panLogo from "../assets/pan.png";
import patentLogo from "../assets/patent.png";
import proofLogo from "../assets/proof.png";
import eventsLogo from "../assets/events.png";
const Eligibility = () => {

  const languages = [
    { value: "", text: "Options" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "gu", text: "Gujarati" },
    { value: "mr", text: "Marathi" },
    { value: "ta", text: "Tamil" },
  ];
  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  // This function put query that helps to
  // change the language
  const handleLanguage = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };
  const constantData = [
    {
      id: 1,
      image: gstLogo,
      title: t("t1"),
      description:
      t("d1"),
    },
    {
      id: 2,
      image: cinLogo,
      title: t("t2"),
      description:
      t("d2"),
    },
    {
      id: 3,
      image: panLogo,
      title: t("t3"),
      description:
      t("d3"),
    },
    {
      id: 4,
      image: patentLogo,
      title: t("t4"),
      description:
      t("d4"),
    },
  ];

  return (
    <div className="px-24 bg-gray-100">
      {window.location.pathname === "/" && (
        <select value={lang} onChange={handleLanguage}>
          {languages.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      )}
      <h1 className="text-4xl font-bold pt-16 pb-8">
        Eligibility Criteria for a Startup{" "}
      </h1>
      <h1 className="text-2xl font-medium text-gray-500">
        User should provide any one of the following for verification of their
        company:
      </h1>
      <div className="mt-8 flex flex-row ml-8">
        {constantData.map((criteria) => (
          <div
            key={criteria.id}
            className="p-4 mr-4 bg-white flex flex-col items-center justify-center shadow-lg max-w-[23%]"
          >
            <img
              src={criteria.image}
              style={{
                width: "120px",
              }}
            />
            <h1 className="mt-8 text-xl font-semibold text-center">
              {criteria.title}
            </h1>
            <h1 className="mt-4 text-md text-gray-400">
              {criteria.description}
            </h1>
          </div>
        ))}
      </div>
      <h1 className="mt-8 text-center text-2xl font-medium ">Or</h1>
      <div className="flex flex-row mt-8 bg-white items-center shadow-lg">
        <img className="w-[200px]" src={proofLogo} />
        <div>
          <h1 className="text-md font-semibold text-gray-800">
            Submit your proof of work in any form{" "}
            <span className="text-md text-gray-400">{`(videos of product, proof of customers, turnover details, any recognition certificate/document)`}</span>{" "}
          </h1>
          <h1 className="text-md text-gray-800">
            We will evaluate it in 4-5 days and will get back to you!
          </h1>
        </div>
      </div>
      <h1 className="mt-8 text-center text-2xl font-medium ">
        Not Eligible? Don't worry!
      </h1>
      <div
        className="bg-white shadow-lg p-4 mt-8 max-w-[600px] flex flex-col items-center"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img src={eventsLogo} className="w-[300px] self-center" />
        <h1 className="mt-4 text-xl font-semibold text-center">
          Learn And grow
        </h1>
        <h1 className="mt-4 text-md text-gray-400">
          Attend Events held by some of the Famous Mentors from our Portal and
          gain valuable knowledge on how to start a business/startup.
        </h1>
      </div>
    </div>
  );
};

export default Eligibility;
