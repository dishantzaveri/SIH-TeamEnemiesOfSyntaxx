import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Dropdown } from "semantic-ui-react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import logo from "../../assets/logo2.png";

const Header = ({ event }) => {
  const languages = [
    { value: "", text: "Options" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "gu", text: "Gujarati" },
    { value: "mr", text: "Marathi" },
    { value: "ta", text: "Tamil" },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const { is_mentor } = useSelector((state) => state.auth);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  console.log(token);

  const [activities, setActivities] = React.useState("");

  const handleChange = (event) => {
    setActivities(event.target.value);
  };

  const { t } = useTranslation();

  const [lang, setLang] = useState("");

  // This function put query that helps to
  // change the language
  const handleLanguage = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };
  const disabled = localStorage.getItem("disabled");
  return (
    <div className="px-12 py-2 flex justify-between items-center border-b">
      {/* <h1>{t('welcome')}</h1> */}
      <Link className="font-bold " to="/">
        <img src={logo} style={{ width: "100px" }} />
      </Link>
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

      {/* <label>{t('choose')}</label> */}
      {/* {token && (
				<div className="px-64 flex flex-row justify-between items-center flex-1">
                   
					<Link to="/feed">
						<h1 className="font-medium text-lg"><label>{t('home')}</label></h1>
					</Link>

					<Link to="/mentors">
						<h1 className="font-medium text-lg"><label>{t('startups')}</label></h1>
					</Link>

					<Link to="/chat">
						<h1 className="font-medium text-lg"><label>{t('chat')}</label></h1>
					</Link>

					<Link to="/myProfile">
						<h1 className="font-medium text-lg"><label>{t('profile')}</label></h1>
					</Link>

					
                    <div>
      <button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"black", fontWeight:500, fontSize:"1.125rem", lineHeight:"1.75rem"}}
      >
        <label>{t('activities')}</label>
      </button>
      <Menu
        id="fade-menu"
        fullwidth
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{margin:"10px", padding:"10px"}}
      >
        <Link to="/events">
        <MenuItem   sx={{margin:"10px", padding:"10px", width:"120px"}}>Events</MenuItem>
        </Link>
        <Link to="/campaigns">
        <MenuItem  sx={{margin:"10px", padding:"10px", width:"120px"}}>Campaigns</MenuItem>
        </Link>
      </Menu>
    </div>
				</div>
			)} */}

      {/* <Link className="font-bold " to="/">
				<img src={logo} style={{height:"80px", width:"100px"}} />
			</Link> */}

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

      {token ? (
        <div className="flex flex-row justify-end items-center flex-1 gap-8">
          <Link to="/feed">
            <h1 className="font-medium text-lg">{t("home")}</h1>
          </Link>
          {is_mentor ? (
            <Link to="/startups">
              <h1 className="font-medium text-lg">{t("startups")}</h1>
            </Link>
          ) : (
            <Link to="/mentors">
              <h1 className="font-medium text-lg">{t("mentors")}</h1>
            </Link>
          )}

          <Link to="/chat">
            <h1 className="font-medium text-lg">{t("chat")}</h1>
          </Link>

          <div>
            <button
              id="fade-button"
              aria-controls={open1 ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}
              style={{
                color: "black",
                fontWeight: 500,
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              {t("activities")}
            </button>
            <Menu
              id="fade-menu"
              fullwidth
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
              TransitionComponent={Fade}
              sx={{ margin: "10px", padding: "10px" }}
            >
              <Link to="/events">
                <MenuItem
                  sx={{ margin: "10px", padding: "10px", width: "140px" }}
                >
                  {t("events")}
                </MenuItem>
              </Link>
              <Link to="/campaigns">
                <MenuItem
                  sx={{ margin: "10px", padding: "10px", width: "140px" }}
                >
                  {t("campaigns")}
                </MenuItem>
              </Link>
              <Link to="/matchedmentors">
                <MenuItem
                  sx={{ margin: "10px", padding: "10px", width: "140px" }}
                >
                  {t("match")}
                </MenuItem>
              </Link>
              <Link to="/schemes">
                <MenuItem
                  sx={{ margin: "10px", padding: "10px", width: "140px" }}
                >
                  {t("schemes")}
                </MenuItem>
              </Link>
              <Link to="/object-detection">
                <MenuItem
                  sx={{ margin: "10px", padding: "10px", width: "140px" }}
                >
                  Object Detection
                </MenuItem>
              </Link>
              <Link to="/sign-detection">
                <MenuItem
                  sx={{ margin: "10px", padding: "10px", width: "120px" }}
                >
                  Sign Detection
                </MenuItem>
              </Link>
            </Menu>
          </div>

          <div>
            <button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{
                color: "black",
                fontWeight: 500,
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              {t("profile")}
            </button>
            <Menu
              id="fade-menu"
              fullwidth
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              sx={{ margin: "10px", padding: "10px" }}
            >
              <Link to="/myProfile">
                <MenuItem
                  sx={{ margin: "10px", padding: "10px", width: "120px" }}
                >
                  {t("myProfile")}
                </MenuItem>
              </Link>
              {/* <Link to="/campaigns"> */}
              <MenuItem
                onClick={() => dispatch(logout())}
                sx={{ margin: "10px", padding: "10px", width: "120px" }}
              >
                {t("logout")}
              </MenuItem>
              {/* </Link> */}
            </Menu>
          </div>

          {/* <button
            className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150"
            onClick={() => dispatch(logout())}
          >
            Log out
          </button> */}
        </div>
      ) : (
        <div className={`flex gap-4 ${token && "hidden"} items-center`}>
          <Link className="font-semibold text-xl" to="/signup">
            {t("becomeMentor")}
          </Link>
          <Link className="font-semibold text-xl" to="/registermentor">
            {t("findMentor")}
          </Link>
          <Link to="/signup">
            <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-purple-gray-600 hover:text-white transition-all duration-150">
              {t("signup")}
            </button>
          </Link>
          <Link to="/login">
            <button className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150">
              {t("login")}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
