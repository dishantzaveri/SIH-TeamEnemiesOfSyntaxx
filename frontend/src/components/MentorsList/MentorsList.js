import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material/node";
import Paper from "@mui/material/Paper";
import SearchBar from 'material-ui-search-bar';
// import "./MentorsList.css";

const Item = styled(Paper)(({ theme }) => ({
	// backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	// padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function MentorsList({data}) {
	console.log(data)
	return (
        <>
        <div className="searchbar" class=" py-4" >
    <SearchBar
      placeholder="Search Mentors"
      autoFocus
    />
  </div>
		<Grid container spacing={3}>
            
			<Grid item xs={12} sm={4}>
				<Item>
					<Card sx={{ display: "flex", maxWidth: "minContent" }}>
						<Box sx={{ display: "flex", maxWidth: "minContent" }}>
							<CardMedia
								component="img"
								sx={{ width: 90, height: 80, borderRadius: "40%", margin: 3 }}
								image="https://www.bing.com/th?id=OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8&w=130&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
							/>

							<Box>
								<CardContent sx={{ padding: 3, textAlign: "left" }}>
									<Typography component="div" variant="h6">
                                    Unity Technology Pvt Limited
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component=""
									>
										Early Traction
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										component=""
									>
										Mumbai, Maharashtra
									</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
					<hr />
					<Card sx={{ padding: 1 }}>
						<Typography variant="subtitle1" color="text.secondary" component="">
							Advertising, DevOps, Technology
						</Typography>
					</Card>
				</Item>
			</Grid>

            <Grid item xs={12} sm={4}>
				<Item>
					<Card sx={{ display: "flex", maxWidth: "minContent" }}>
						<Box sx={{ display: "flex", maxWidth: "minContent" }}>
							<CardMedia
								component="img"
								sx={{ width: 90, height: 80, borderRadius: "40%", margin: 3 }}
								image="https://www.bing.com/th?id=OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8&w=130&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
							/>

							<Box>
								<CardContent sx={{ padding: 3, textAlign: "left" }}>
									<Typography component="div" variant="h6">
										Unity Technology Pvt Limited
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component=""
									>
										Early Traction
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										component=""
									>
										Mumbai, Maharashtra
									</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
					<hr />
					<Card sx={{ padding: 1 }}>
						<Typography variant="subtitle1" color="text.secondary" component="">
							Advertising, Technology
						</Typography>
					</Card>
				</Item>
			</Grid>

            <Grid item xs={12} sm={4}>
				<Item>
					<Card sx={{ display: "flex", maxWidth: "minContent" }}>
						<Box sx={{ display: "flex", maxWidth: "minContent" }}>
							<CardMedia
								component="img"
								sx={{ width: 90, height: 80, borderRadius: "40%", margin: 3 }}
								image="https://www.bing.com/th?id=OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8&w=130&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
							/>

							<Box>
								<CardContent sx={{ padding: 3, textAlign: "left" }}>
									<Typography component="div" variant="h6">
										Unity Technology Pvt Limited
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component=""
									>
										Early Traction
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										component=""
									>
										Mumbai, Maharashtra
									</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
					<hr />
					<Card sx={{ padding: 1 }}>
						<Typography variant="subtitle1" color="text.secondary" component="">
							Advertising, Technology
						</Typography>
					</Card>
				</Item>
			</Grid>

            <Grid item xs={12} sm={4}>
				<Item>
					<Card sx={{ display: "flex", maxWidth: "minContent" }}>
						<Box sx={{ display: "flex", maxWidth: "minContent" }}>
							<CardMedia
								component="img"
								sx={{ width: 90, height: 80, borderRadius: "50%", margin: 3 }}
								image="https://www.bing.com/th?id=OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8&w=130&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
							/>

							<Box>
								<CardContent sx={{ padding: 3, textAlign: "left" }}>
									<Typography component="div" variant="h6">
										Unity Technology Pvt Limited
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component=""
									>
										Early Traction
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										component=""
									>
										Mumbai, Maharashtra
									</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
					<hr />
					<Card sx={{ padding: 1 }}>
						<Typography variant="subtitle1" color="text.secondary" component="">
							Advertising, Technology
						</Typography>
					</Card>
				</Item>
			</Grid>

            <Grid item xs={12} sm={4}>
				<Item>
					<Card sx={{ display: "flex", maxWidth: "minContent" }}>
						<Box sx={{ display: "flex", maxWidth: "minContent" }}>
							<CardMedia
								component="img"
								sx={{ width: 90, height: 80, borderRadius: "50%", margin: 3 }}
								image="https://www.bing.com/th?id=OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8&w=130&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
							/>

							<Box>
								<CardContent sx={{ padding: 3, textAlign: "left" }}>
									<Typography component="div" variant="h6">
										Unity Technology Pvt Limited
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component=""
									>
										Early Traction
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										component=""
									>
										Mumbai, Maharashtra
									</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
					<hr />
					<Card sx={{ padding: 1 }}>
						<Typography variant="subtitle1" color="text.secondary" component="">
							Advertising, Technology
						</Typography>
					</Card>
				</Item>
			</Grid>

            <Grid item xs={12} sm={4}>
				<Item>
					<Card sx={{ display: "flex", maxWidth: "minContent" }}>
						<Box sx={{ display: "flex", maxWidth: "minContent" }}>
							<CardMedia
								component="img"
								sx={{ width: 90, height: 80, borderRadius: "50%", margin: 3 }}
								image="https://www.bing.com/th?id=OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8&w=130&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
							/>

							<Box>
								<CardContent sx={{ padding: 3, textAlign: "left" }}>
									<Typography component="div" variant="h6">
										Unity Technology Pvt Limited
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component=""
									>
										Early Traction
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										component=""
									>
										Mumbai, Maharashtra
									</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
					<hr />
					<Card sx={{ padding: 1 }}>
						<Typography variant="subtitle1" color="text.secondary" component="">
							Advertising, Technology
						</Typography>
					</Card>
				</Item>
			</Grid>

            <Grid item xs={12} sm={4}>
				<Item>
					<Card sx={{ display: "flex", maxWidth: "minContent" }}>
						<Box sx={{ display: "flex", maxWidth: "minContent" }}>
							<CardMedia
								component="img"
								sx={{ width: 90, height: 80, borderRadius: "50%", margin: 3 }}
								image="https://www.bing.com/th?id=OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8&w=130&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
							/>

							<Box>
								<CardContent sx={{ padding: 3, textAlign: "left" }}>
									<Typography component="div" variant="h6">
										Unity Technology Pvt Limited
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component=""
									>
										Early Traction
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										component=""
									>
										Mumbai, Maharashtra
									</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
					<hr />
					<Card sx={{ padding: 1 }}>
						<Typography variant="subtitle1" color="text.secondary" component="">
							Advertising, Technology
						</Typography>
					</Card>
				</Item>
			</Grid>

            <Grid item xs={12} sm={4}>
				<Item>
					<Card sx={{ display: "flex", maxWidth: "minContent" }}>
						<Box sx={{ display: "flex", maxWidth: "minContent" }}>
							<CardMedia
								component="img"
								sx={{ width: 90, height: 80, borderRadius: "50%", margin: 3 }}
								image="https://www.bing.com/th?id=OIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8&w=130&h=100&c=8&rs=1&qlt=90&o=6&dpr=3&pid=3.1&rm=2"
							/>

							<Box>
								<CardContent sx={{ padding: 3, textAlign: "left" }}>
									<Typography component="div" variant="h6">
										Unity Technology Pvt Limited
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component=""
									>
										Early Traction
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										component=""
									>
										Mumbai, Maharashtra
									</Typography>
								</CardContent>
							</Box>
						</Box>
					</Card>
					<hr />
					<Card sx={{ padding: 1 }}>
						<Typography variant="subtitle1" color="text.secondary" component="">
							Advertising, Technology
						</Typography>
					</Card>
				</Item>
			</Grid>


		</Grid>
        </>
	);
}
