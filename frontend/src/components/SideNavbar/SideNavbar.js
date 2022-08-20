import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ReactDOM from "react-dom";
import Sidebar from "react-sidebar";
import Menu, { SubMenu, MenuItem } from "rc-menu";
import "rc-menu/assets/index.css";
import SearchBar from "material-ui-search-bar";

// import "./styles.css";

export default function SideNavbar() {
	return (
		<div style={{ height: "100%" }}>
			<Menu mode="inline" style={{ height: "100%" }}>
                <p style={{fontSize:"25px", textAlign:"center",color:"black", fontWeight:"bold"}}><u>Filters </u></p>
				<SubMenu key="1" title="Industries" style={{ fontSize: "20px" }}>
					<div className="searchbar" class="px-3 m-2">
						<SearchBar placeholder="Search Industries" autoFocus />
					</div>
					<MenuItem key="1-1" color="black">
						<FormControlLabel control={<Checkbox />} label="Agriculture" />
					</MenuItem>
					<MenuItem key="1-2">
						<FormControlLabel control={<Checkbox />} label="Advertising" />
					</MenuItem>
					<MenuItem key="1-3">
						<FormControlLabel control={<Checkbox />} label="Business" />
					</MenuItem>
					<MenuItem key="1-4">
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Education"
						/>
					</MenuItem>
				</SubMenu>
				<SubMenu key="2" title="Expertise" style={{ fontSize: "20px" }}>
					<div className="searchbar" class="px-3 m-2">
						<SearchBar placeholder="Search Expertise" autoFocus />
					</div>
					<MenuItem key="1-1" color="black">
						<FormControlLabel control={<Checkbox />} label="Agriculture" />
					</MenuItem>
					<MenuItem key="1-2" color="black">
						<FormControlLabel control={<Checkbox />} label="Coding" />
					</MenuItem>
					{/* <MenuItem key="2-2">item2-2</MenuItem> */}
					{/* <SubMenu key="2-3" title="submenu2-3">
						<MenuItem key="2-3-1">item2-3-1</MenuItem>
						<MenuItem key="2-3-2">item2-3-2</MenuItem>
					</SubMenu> */}
				</SubMenu>
			</Menu>
		</div>
	);
}
