import React, { useContext } from "react";
// import Navbar from '../Navbar/Navbar';
import "./fullSingle.css";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Header/Header";
// import Footer from '../Footer/Footer';
// import Loader from '../Loader/Loader';
// import { AllCampaignsContext } from '../../contexts/allCampaignsContext';
// import NotFound from '../404/404';

const FullSingleCampaign = (props) => {
	const location = useLocation();
	const { data } = location.state;
	const pay = () => {
		let options = {
			key: "rzp_test_631wMxKie5nOL2",
			amount: "1000",
			currency: "INR",
			description: "Acme Corp",
			prefill: {
				email: "gaurav.kumar@example.com",
				contact: +919900000000,
			},
			method: {
				upi: true,
				netbanking: true,
				card: true,
				wallet: true,
				nb: true,
			},
			handler: (response) => {
				console.log(response);
			},
		};
		var rzp = new window.Razorpay(options);
		rzp.open();
	};
	// const { id } = props.match.params;
	// const { campaigns,share } = useContext(AllCampaignsContext);

	// if (campaigns) {
	// let x
	// for (x of campaigns) {
	// if (parseInt(x.id) === parseInt(id)) {
	return (
		<div>
			{/* <Navbar /> */}
			<Header />
			<div className="profileWrapper">
				<div className="heading">
					<div className="policyName">
						<div className="name">
							{/* <div></div> */}
							<div>
								<h2>{data.name}</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="sparkline">
					<div className="sparklineData">
						<div>
							<img
								src={data.images}
								className="card-img-top fullSingle-img"
								alt="..."
							/>
						</div>
					</div>
					<div className="policyDetails">
						<p>
							{data.description}
							<p className="text-sm">{data.subEvents}</p>
						</p>
					</div>
				</div>

				<div className="container row p-3 inline-block">
					<p className="raising pl-4">
						<b> {data.name} </b> is raising this campaign which was created on -
						{String(new Date(data.created_at).getDate()).padStart(2, "0") +
							"/" +
							String(new Date(data.created_at).getMonth() + 1).padStart(
								2,
								"0"
							) +
							"/" +
							new Date(data.created_at).getFullYear()}
					</p>
					<div className="card-body p-3">
						<b>$ {data.collectedAmount} </b>
						<span className=" raised--"> raised of </span>
						{/* <span className="goal--"> */}

						<b>$ {data.targetAmount}</b>
						{/* </span> */}
					</div>
					<progress
						className="progress "
						max={data.targetAmount}
						value={data.collectedAmount}
						color="white"
					></progress>

					<div className="col-md-4">
						{/* <button
							className="px-3 py-2 rounded bg-purplegray-900 text-purplegray-400"
							onClick={() => pay()}
						>
							Pay
						</button> */}
						<button
							className="uppercase rounded-full border w-[8vw] py-2 hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-150"
							onClick={() => pay()}
						>
							Donate
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullSingleCampaign;
