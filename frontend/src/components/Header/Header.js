import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Dropdown } from "semantic-ui-react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Header = ({ event }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	console.log(token);

	const [activities, setActivities] = React.useState("");

	const handleChange = (event) => {
		setActivities(event.target.value);
	};
	const DropdownExampleDropdown = () => (
		<Dropdown text="File">
			<Dropdown.Menu>
				<Dropdown.Item text="New" />
				<Dropdown.Item text="Open..." description="ctrl + o" />
			</Dropdown.Menu>
		</Dropdown>
	);
	return (
		<div className="px-24 py-4 flex justify-between items-center border-b">
			<Link className="font-bold text-3xl" to="/">
				mentoree
			</Link>
			{/* {token && ( */}
			{/* <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search bar" />
        </div> */}
			{/* )} */}

			{/* <div className={`flex gap-4 ${token && "hidden"} items-center`}>
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
          <Link to="/login">
            <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150">
              Log in
            </button>
          </Link>
        </div> */}
			{token && (
				<div className="px-64 flex flex-row justify-between items-center  flex-1">
					{/* // <div className="flex flex-row justify-content items-center flex-1"> */}
					<Link to="/feed">
						<h1 className="font-medium text-lg">Home</h1>
					</Link>

					<Link to="/mentors">
						<h1 className="font-medium text-lg">Startups</h1>
					</Link>

					<Link to="/chat">
						<h1 className="font-medium text-lg">Chat</h1>
					</Link>

					<Link to="/myProfile">
						<h1 className="font-medium text-lg">Profile</h1>
					</Link>

					{/* <Link to="/myProfile"> */}
					{/* <h1 className="font-medium text-lg">Activities</h1> */}
					{/* <FormControl className="font-medium text-lg" variant="standard" sx={{ m: 1, minWidth: 120 , color:"black", fontSize:"25px"}}>
							<InputLabel className="font-medium text-lg" sx={{color:"black", fontSize:"20px"}} >
								Activities
							</InputLabel>
							<Select
								labelId="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								value={activities}
								onChange={handleChange}
								label="activities"
							><Link to="/events">
								<MenuItem value={10}>Events</MenuItem>
                                </Link>
                                <Link to="/campaigns">
								<MenuItem value={20}>Campaigns</MenuItem>
                                </Link>
							</Select>
						</FormControl> */}
					{/* <DropdownExampleDropdown /> */}
					{/* <Dropdown text="Activities">
						<Dropdown.Menu>
							<Dropdown.Item text="Events" />
							<Dropdown.Item text="Campaigns" />
							<Dropdown.Item text='Open...' description='ctrl + o' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
						</Dropdown.Menu>
					</Dropdown> */}
					{/* </Link> */}

					{/* <HeaderOption Icon={NotificationsIcon} title="Notifications" /> */}
					{/* <HeaderOption avatar={user.photoUrl} title="me" /> */}
					{/* </div> */}
                    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"black", fontWeight:550, fontSize:"16px", lineHeight:"28px"}}
      >
        Activities
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Events</MenuItem>
        <MenuItem onClick={handleClose}>Campaigns</MenuItem>
      </Menu>
    </div>
				</div>
			)}
			<button
				className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150"
				onClick={() => dispatch(logout())}
			>
				Log out
			</button>
		</div>
	);
};

export default Header;
