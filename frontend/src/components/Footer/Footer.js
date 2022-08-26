import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
return (
	<Box className="create-button bg-gradient-to-r from-[#c0edf5] via-blue-300  to-[#2eb6b8]">
	<h1 className="text-purple-gray-600" style={{ textAlign: "center", marginTop: "-50px", marginBottom:"20px", fontSize:"20px"}}>
		MentorDots : Learning from someone who wants you to grow
	</h1>
	<Container >
		<Row>
		<Column>
			<Heading>Important Links</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">FAQ's</FooterLink>
		</Column>
		<Column>
			<Heading>Activities</Heading>
			<FooterLink href="#">Events</FooterLink>
			<FooterLink href="#">Campaigns</FooterLink>
            <FooterLink href="#">Government Schemes</FooterLink>
		</Column>
		<Column style={{display:"inline-block", justifyContent:"center"}}>
        <Link className="font-bold " to="/">
        <img src={logo} style={{ width: "100px", marginBottom:"10px", justifyContent:"center", alignContent:"center" }} />
      </Link>
			{/* <Heading>Social Media</Heading> */}
            <div style={{marginTop:"50px"}}>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<GoogleIcon sx={{width:"35px", height:"35px"}} />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<GitHubIcon sx={{width:"35px", height:"35px"}} />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<YouTubeIcon sx={{width:"35px", height:"35px"}}/>
				</span>
			</i>
			</FooterLink>
			{/* <FooterLink href="#">
			<i className="fab fa-youtube">
				<span >
				<TwitterIcon />
				</span>
			</i>
			</FooterLink> */}
            </div>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
