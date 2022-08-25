import React, { useContext, useEffect } from 'react';
// import NavBar from '../Navbar/Navbar';
// import Loader from '../Loader/Loader';
import SingleCampaign from '../AllCampaignsSingleCampaign/SingleCampaign';
import Navbar from '../Navbar';
import SideNavbar from '../SideNavbar/SideNavbar';
// import Footer from '../Footer/Footer';
// import { AllCampaignsContext } from '../../contexts/allCampaignsContext';
import { useGetFundsQuery } from '../../features/funding/fundingAPISlice';
import Location from "@material-ui/icons/LocationOnOutlined";
import GrainOutlined from "@material-ui/icons/GrainOutlined";
import Header from '../Header/Header';

const AllCampaigns = () => {
    // const { campaigns, loading, message } = useContext(AllCampaignsContext);
    const {data, isLoading} = useGetFundsQuery()
    console.log(data)
    
    return (
        <div className="">
          <Header />
            {/* {loading ? <Loader /> : null} */}
            {/* <NavBar /> */}
            {/* {message ? */}
             {/* <p className="text-center"> hi </p>  */}
             {/* : null} */}
            {/* {campaigns ? */}
                <div className="">
                    {/* <Navbar /> */}
                    <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative">
        <div className="py-[80px]">
          <h1 className="text-5xl">Funding Campaigns</h1>
          <h1 className="text-2xl mt-4 text-slate-700">Help the Entrepreneurs by Donating in their Startups</h1>
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
                    <div className="row all-c-r">
                        {isLoading ? 
                            <div> 
                                <h1 className="text-center p-4">  Fetching Campaigns... </h1> 
                            </div> : 
                            <div  className="grid grid-cols-3 gap-[5%]">
                                {data?.map((x) => <SingleCampaign data={x}/>)}
                            </div>
                        }
                    </div>
                </div>
                :
                
            {/* } */}
            {/* <Footer /> */}
        </div>
    );
}

export default AllCampaigns;
