import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BiSearch, BiRightArrowAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice.js";
import { useEffect } from "react";
import { SimpleMap } from "../components/Map/Map.jsx";
import {
  useGetCompanyCPMBarQuery,
  useGetFundingPlacesQuery,
  useGetFundingRegionBarQuery,
  useGetMentorsLocationQuery,
  useGetMonthWiseFundingPieQuery,
  useGetStageSectorMixPieQuery,
  useGetStateFundedCompanyCountPieQuery,
  useGetTop25FundedCompanyBarQuery,
} from "../features/list/listAPISlice.jsx";
import { VscLoading } from "react-icons/vsc";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import Header from "../components/Header/Header.js";
import Eligibility from "../components/Eligibility.js";
import alanBtn from "@alan-ai/alan-sdk-web";

// const Header = () => {
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);
//   console.log(token);

//   return (
//     <div className="px-24 py-4 flex justify-between border-b">
//       <Link className="font-bold text-3xl" to="/">
//         mentoree
//       </Link>
//       <div className={`flex gap-4 ${token && "hidden"} items-center`}>
//         <Link className="font-semibold text-xl" to="/registermentor">
//           Become a Mentor
//         </Link>
//         <Link className="font-semibold text-xl" to="/registermentor">
//           Find a Mentor
//         </Link>
//         <Link to="/registermentee">
//           <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-purple-gray-600 hover:text-white transition-all duration-150">
//             Sign Up
//           </button>
//         </Link>
//         <Link to="/login">
//           <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150">
//             Log in
//           </button>
//         </Link>
//       </div>
//       {token && (
//         <button
//           className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150"
//           onClick={() => dispatch(logout())}
//         >
//           Log out
//         </button>
//       )}
//     </div>
//   );
// };

// const Categories = () => {
//   return (
//     <div className="px-24 py-6 flex justify-center gap-8 border-b">
//       <h1 className="text-lg text-gray-700">All</h1>
//       <h1 className="text-lg text-gray-700">Entrepreneurship</h1>
//       <h1 className="text-lg text-gray-700">Education</h1>
//       <h1 className="text-lg text-gray-700">Art / Creative</h1>
//       <h1 className="text-lg text-gray-700">Media / Production</h1>
//       <h1 className="text-lg text-gray-700">Law</h1>
//       <h1 className="text-lg text-gray-700">Recreational</h1>
//     </div>
//   );
// };

const Section1 = () => {
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
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {/* {window.location.pathname === "/" && (
        <select value={lang} onChange={handleLanguage}>
          {languages.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      )} */}
      <div className="flex flex-col items-center w-[50vw]">
        <h1 className="text-6xl font-semibold text-gray-800">
          {t("evn1")}{" "}
          <span className="text-purple-gray-700">{t("Mentor")}</span>
        </h1>
        <h1 className="text-center text-xl text-gray-700 mt-6">
          {t("search")}
        </h1>
        <div className="flex items-center border rounded-full w-full bg-white text-gray-700 mt-12 box-content">
          <BiSearch className="mr-4 ml-6 text-3xl text-greha-1" />
          <input
            className="focus:outline-0 bg-inherit w-full"
            type="text"
            placeholder="Search Mentor"
          />
          <Link to="/login">
            <div className="h-full px-8 py-4 bg-purple-gray-600 rounded-r-full cursor-pointer">
              <h1 className="text-white text-lg font-bold uppercase">Search</h1>
            </div>
          </Link>
        </div>
        <h1 className="text-xs text-greha-1 mt-4">{t("tip")}</h1>
        <h1 className="flex items-center text-xl mt-20 text-greha-3 hover:text-purple-gray-700 transition-all duration-300 cursor-pointer">
          {t("browse")}
          <BiRightArrowAlt className="text-2xl" />
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
  const { data: fundingPlaces, isLoading: fundingPlacesLoading } =
    useGetFundingPlacesQuery();
  const { data: mentorLocation, isLoading: mentorLocationLoading } =
    useGetMentorsLocationQuery();
  const { data: fundingRegion, isLoading: fundingRegionLoading } =
    useGetFundingRegionBarQuery();
  const { data: top25FundedCompany, isLoading: top25FundedCompanyLoading } =
    useGetTop25FundedCompanyBarQuery();
  const { data: companyCmp, isLoading: companyCmpLoading } =
    useGetCompanyCPMBarQuery();
  const { data: monthWiseFunding, isLoading: monthWiseFundingLoading } =
    useGetMonthWiseFundingPieQuery();
  const { data: stageSector, isLoading: stageSectorLoading } =
    useGetStageSectorMixPieQuery();
  const { data: stateFundingCompany, isLoading: stateFundingCompanyLoading } =
    useGetStateFundedCompanyCountPieQuery();
  const [locations, setLocations] = useState(null);
  const [regions, setRegions] = useState(null);
  const [state, setState] = useState(null);
  const [topFunds, setTopFunds] = useState(null);
  const [companyCMP, setCompanyCMP] = useState(null);
  const [monthlyFunding, setMonthlyFunding] = useState(null);
  const [sector, setSector] = useState(null);
  useEffect(() => {
    if (fundingPlaces) {
      let array = [];
      Object.values(fundingPlaces)[0].forEach((item, i) => {
        array.push({
          latitude: fundingPlaces.Latitude[i],
          longitude: fundingPlaces.Longitude[i],
          name: fundingPlaces.city[i],
        });
      });
      setLocations(array);
    }
    console.log(locations);
  }, [fundingPlaces]);
  useEffect(() => {
    if (fundingRegion) {
      console.log(fundingRegion);
      let array = [];
      const data = Object.values(fundingRegion)[0];
      data.forEach((item, i) => {
        array.push({
          x: fundingRegion.x[i],
          name: fundingRegion.y[i],
        });
      });
      console.log(array);
      setRegions(array);
    }
  }, [fundingRegion]);
  useEffect(() => {
    if (top25FundedCompany) {
      let array = [];
      const data = Object.values(top25FundedCompany)[0];
      data.forEach((item, i) => {
        array.push({
          x: top25FundedCompany.y[i],
          name: top25FundedCompany.x[i],
        });
      });
      // console.log(array)
      setTopFunds(array);
    }
  }, [top25FundedCompany]);
  useEffect(() => {
    if (companyCmp) {
      let array = [];
      const data = Object.values(companyCmp)[0];
      data.forEach((item, i) => {
        array.push({
          x: companyCmp.y[i],
          name: companyCmp.x[i],
        });
      });
      setCompanyCMP(array);
    }
  }, [companyCmp]);
  useEffect(() => {
    if (monthWiseFunding) {
      let array = [];
      console.log(monthWiseFunding);
      const data = Object.values(monthWiseFunding)[0];
      data.forEach((item, i) => {
        array.push({
          x: monthWiseFunding.percent[i],
          name: monthWiseFunding.labels[i],
        });
      });
      console.log(array);
      setMonthlyFunding(array);
    }
  }, [monthWiseFunding]);
  useEffect(() => {
    if (monthWiseFunding) {
      let array = [];
      console.log(monthWiseFunding);
      const data = Object.values(monthWiseFunding)[0];
      data.forEach((item, i) => {
        array.push({
          x: monthWiseFunding.percent[i],
          name: monthWiseFunding.labels[i],
        });
      });
      console.log(array);
      setMonthlyFunding(array);
    }
  }, [monthWiseFunding]);
  useEffect(() => {
    if (stateFundingCompany) {
      let array = [];
      console.log(stateFundingCompany);
      const data = Object.values(stateFundingCompany)[0];
      data.forEach((item, i) => {
        array.push({
          x: stateFundingCompany.percent[i],
          name: stateFundingCompany.labels[i],
        });
      });
      console.log(array);
      setState(array);
    }
  }, [stateFundingCompany]);
  useEffect(() => {
    if (stageSector) {
      let array = [];
      console.log(stageSector);
      const data = Object.values(stageSector)[0];
      data.forEach((item, i) => {
        array.push({
          x: stageSector.percent_sector[i],
          name: stageSector.labels_sector[i],
        });
      });
      setSector({
        sector: array,
      });
      array = [];
      data.forEach((item, i) => {
        array.push({
          x: stageSector.percent_stage[i],
          name: stageSector.labels_stage[i],
        });
      });
      setSector((prevState) => ({
        ...prevState,
        stage: array,
      }));
      console.log(sector);
    }
  }, [stageSector]);

  useEffect(() => {
    alanBtn({
      key: "ecc5936429f8831a0a3f3bd73ff973822e956eca572e1d8b807a3e2338fdd0dc/stage",
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />
      <Section1 />
      <Eligibility />
      <div className="px-24 bg-white h-screen mt-4">
        <h1 className="text-center text-5xl font-bold pt-20">Activities</h1>
        <h1 className="text-xl text-gray-500 text-center mt-6 mb-12">
          Find investors & incubators in your region that can support your
          startup's growth...
        </h1>
        <div className="grid grid-cols-2 gap-16 my-6">
          <div className="h-full w-full flex flex-col justify-center">
            <h1 className="text-xl font-semibold mb-2">Top Funding Places</h1>
            {locations && (
              <SimpleMap location={locations} zoomLevel={3} h={"350px"} />
            )}
            {fundingPlacesLoading && (
              <div className="h-[350px] animate-pulse">
                <div className="h-full w-full bg-slate-500 rounded-xl">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
                    <h1 className="text-xl mt-2">Loading...</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-full w-full flex flex-col justify-center">
            <h1 className="text-xl font-semibold mb-2">Incubators Located</h1>
            {mentorLocationLoading && (
              <div className="h-[350px] animate-pulse">
                <div className="h-full w-full bg-slate-500 rounded-xl">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
                    <h1 className="text-xl mt-2">Loading...</h1>
                  </div>
                </div>
              </div>
            )}
            {mentorLocation && (
              <SimpleMap location={mentorLocation} zoomLevel={3} h={"350px"} />
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-24">
        <h1 className="text-center text-5xl font-bold py-16">Statistics</h1>
        <div className="grid grid-cols-3 gap-16 my-6">
          <div className="h-full w-full flex flex-col justify-center">
            <h1 className="text-xl font-semibold mb-2">Top Company Funds</h1>
            {topFunds && (
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={500} height={350} data={topFunds}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="x" fill="#7B1FA2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
            {!topFunds && (
              <div className="h-[350px] animate-pulse">
                <div className="h-full w-full bg-slate-500 rounded-xl">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
                    <h1 className="text-xl mt-2">Loading...</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-full w-full flex flex-col justify-center">
            <h1 className="text-xl font-semibold mb-2">Top Funding Regions</h1>
            {regions && (
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={500} height={350} data={regions}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="x" fill="#7B1FA2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
            {!regions && (
              <div className="h-[350px] animate-pulse">
                <div className="h-full w-full bg-slate-500 rounded-xl">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
                    <h1 className="text-xl mt-2">Loading...</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-full w-full flex flex-col justify-center">
            <h1 className="text-xl font-semibold mb-2">
              Company Counts per Month
            </h1>
            {companyCMP && (
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={500} height={350} data={companyCMP}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="x" fill="#7B1FA2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
            {!companyCMP && (
              <div className="h-[350px] animate-pulse">
                <div className="h-full w-full bg-slate-500 rounded-xl">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
                    <h1 className="text-xl mt-2">Loading...</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-full w-full flex flex-col justify-center">
            <h1 className="text-xl font-semibold mb-2">Monthwise Funding</h1>
            {monthlyFunding && (
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={500} height={350} data={monthlyFunding}>
                    <Pie
                      dataKey="x"
                      data={monthlyFunding}
                      outerRadius={120}
                      fill="#7B1FA2"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
            {!monthlyFunding && (
              <div className="h-[350px] animate-pulse">
                <div className="h-full w-full bg-slate-500 rounded-xl">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
                    <h1 className="text-xl mt-2">Loading...</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-full w-full flex flex-col justify-center">
            <h1 className="text-xl font-semibold mb-2">
              Funding in Sectors & Stage
            </h1>
            {sector?.sector && sector?.stage && (
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={500} height={350} data={monthlyFunding}>
                    <Pie
                      dataKey="x"
                      data={sector.sector}
                      outerRadius={80}
                      fill="#7B1FA2"
                    />
                    <Pie
                      dataKey="x"
                      data={sector.stage}
                      innerRadius={100}
                      outerRadius={120}
                      fill="#7B1FA2"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
            {(!sector?.sector || !sector?.stage) && (
              <div className="h-[350px] animate-pulse">
                <div className="h-full w-full bg-slate-500 rounded-xl">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
                    <h1 className="text-xl mt-2">Loading...</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-full w-full flex flex-col justify-center">
            <h1 className="text-xl font-semibold mb-2">
              Companies Funded Per State
            </h1>
            {state && (
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={500} height={350} data={state}>
                    <Pie
                      dataKey="x"
                      data={state}
                      outerRadius={120}
                      fill="#7B1FA2"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
            {!state && (
              <div className="h-[350px] animate-pulse">
                <div className="h-full w-full bg-slate-500 rounded-xl">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <VscLoading className="w-8 h-8 animate-spin text-center text-gray-600" />
                    <h1 className="text-xl mt-2">Loading...</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
