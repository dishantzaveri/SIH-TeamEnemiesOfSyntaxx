import React, { useContext } from 'react';
// import NavBar from '../Navbar/Navbar';
// import Loader from '../Loader/Loader';
import SingleCampaign from '../AllCampaignsSingleCampaign/SingleCampaign';
import Navbar from '../Navbar';
import SideNavbar from '../SideNavbar/SideNavbar';
// import Footer from '../Footer/Footer';
// import { AllCampaignsContext } from '../../contexts/allCampaignsContext';

const AllCampaigns = () => {
    // const { campaigns, loading, message } = useContext(AllCampaignsContext);

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
                        {/* {
                            campaigns.map((singleCampaign) => {
                                return ( */}
                                    <div  className="col-md-6">
                                        <SingleCampaign image="" title="Title" story="story"
                                            id="1" goal="1000" reached="200"
                                            percentage="20"             
                                        />
                                         <SingleCampaign image="" title="Title" story="story"
                                            id="2" goal="100" reached="20"
                                            percentage="10"             
                                        />
                                         {/* <SingleCampaign image="" title="Title" story="story"
                                            id="id" goal="1000" reached="200"
                                            percentage="20"             
                                        />
                                         <SingleCampaign image="" title="Title" story="story"
                                            id="id" goal="1000" reached="200"
                                            percentage="20"             
                                        />
                                         <SingleCampaign image="" title="Title" story="story"
                                            id="id" goal="1000" reached="200"
                                            percentage="20"             
                                        />
                                         <SingleCampaign image="" title="Title" story="story"
                                            id="id" goal="1000" reached="200"
                                            percentage="20"             
                                        />
                                         <SingleCampaign image="" title="Title" story="story"
                                            id="id" goal="1000" reached="200"
                                            percentage="20"             
                                        /> */}
                                    </div>
                                {/* )
                            })
                        } */}
                    </div>
                </div>
                :
                <div> <h1 className="text-center p-4">  Fetching Campaigns... </h1> </div>
            {/* } */}
            {/* <Footer /> */}
        </div>
    );
}

export default AllCampaigns;
