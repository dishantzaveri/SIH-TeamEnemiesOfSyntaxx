import React, { useContext, useEffect } from 'react';
// import NavBar from '../Navbar/Navbar';
// import Loader from '../Loader/Loader';
import SingleCampaign from '../AllCampaignsSingleCampaign/SingleCampaign';
import Navbar from '../Navbar';
import SideNavbar from '../SideNavbar/SideNavbar';
// import Footer from '../Footer/Footer';
// import { AllCampaignsContext } from '../../contexts/allCampaignsContext';
import { useGetFundsQuery } from '../../features/funding/fundingAPISlice';

const AllCampaigns = () => {
    // const { campaigns, loading, message } = useContext(AllCampaignsContext);
    const {data, isLoading} = useGetFundsQuery()
    console.log(data)
    
    return (
        <div className="">
            {/* {loading ? <Loader /> : null} */}
            {/* <NavBar /> */}
            {/* {message ? */}
             {/* <p className="text-center"> hi </p>  */}
             {/* : null} */}
            {/* {campaigns ? */}
                <div className="">
                    <Navbar />
                    <h1 className="text-center all-c_header "> ALL CAMPAIGNS </h1>
                    <br />
                    <div className="row all-c-r">
                        {isLoading ? 
                            <div> 
                                <h1 className="text-center p-4">  Fetching Campaigns... </h1> 
                            </div> : 
                            <div  className="grid grid-cols-3 gap-[10%]">
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
