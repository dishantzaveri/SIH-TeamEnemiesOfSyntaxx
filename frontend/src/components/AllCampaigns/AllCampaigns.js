import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SingleCampaign from '../AllCampaignsSingleCampaign/SingleCampaign';
import Navbar from '../Navbar';
import SideNavbar from '../SideNavbar/SideNavbar';
import { useGetFundsQuery } from '../../features/funding/fundingAPISlice';
import Location from "@material-ui/icons/LocationOnOutlined";
import GrainOutlined from "@material-ui/icons/GrainOutlined";
import Header from '../Header/Header';
import CreateCampaigns from '../../CreateCampaigns/CreateCampaigns';
import { MdAddCircle, MdKeyboardArrowDown } from 'react-icons/md';
import { useGetStartupsQuery } from '../../features/gst/gstAPISlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  // overflow:"scroll"
};

const AllCampaigns = () => {
    const {data: startups} = useGetStartupsQuery()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {data, isLoading} = useGetFundsQuery()
    
    return (
        <div className="">
          <Header />
        <div className="">
          <div className="px-32 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative">
        <div className="py-[80px] flex">
        <div className="content">
          <h1 className="text-5xl">Funding Campaigns</h1>
          <h1 className="text-2xl mt-4 text-slate-700">Help the Entrepreneurs by Donating in their Startups</h1>
          </div>
          <button onClick={handleOpen} className="ml-auto bg-gradient-to-r from-[#c0edf5] via-blue-300 to-[#2eb6b8] text-white self-end p-2 px-4 rounded-2xl flex items-center"><MdAddCircle /> Create Campaign</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={{overflow:"scroll"}}
      >
        <Box sx={style}>
          <CreateCampaigns data={startups} />
        </Box>
      </Modal>
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
