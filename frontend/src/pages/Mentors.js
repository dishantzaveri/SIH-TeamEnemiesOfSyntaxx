import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "../components/Navbar";
import MentorsList from "../components/MentorsList/MentorsList";
import SearchBar from 'material-ui-search-bar';
import { Grid } from "@mui/material/node";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import { useGetMentorsListQuery } from "../features/list/listAPISlice";
import { VscLoading } from "react-icons/vsc";


export default function Mentors() {
    const {data, isLoading} = useGetMentorsListQuery()

    return (
    <>
      <Navbar />
      <Grid container sm={12}>
      <Grid item sm={3.8}>
        <div style={{margin:"3%", height:"100%"}}>
<SideNavbar />
</div>
      </Grid>
      <Grid item sm={8}>
      {/* <div style={{margin:"1%"}}> */}
      
        {data && <MentorsList data={data} />}
        {
          isLoading && 
          <div className='w-full flex flex-col justify-center items-center my-8'>
            <VscLoading className='w-8 h-8 animate-spin text-center text-gray-600' />
            <h1 className='text-xl mt-2'>Loading...</h1>
          </div>
        }
        
      {/* </div> */}
      </Grid>
    </Grid>
    </>
  );
};

