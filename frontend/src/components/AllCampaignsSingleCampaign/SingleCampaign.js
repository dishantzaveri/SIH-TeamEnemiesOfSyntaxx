import React from 'react';
import './singleCard.css';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/node/Link';

const SingleCampaign = ({ data }) => {
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
    return (
        <NavLink className='w-[80%]' state={{'data': data}} to={`/singleCampaign/${data.id}`}>
            <div className="card single-campaign-card shadow animated wow slideInLeft w-full" >
                <img src={data.images} className="card-img-top c-img" alt="title" />
                <div className="card-body">
                    <h3 className="card-title description-st">{data.name}</h3>
                    <h1 className='text-sm'>{data.subEvents}</h1>
                    <p className="card-text story-p " style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              fontSize:"17px"
            }}>{data.description}</p>
                    {/* <p className="last-donay">{data.event_date}</p> */}
                    
                    {/* <p className="last-donay">{data.contributors}</p> */}
                    {/* <p className="last-donay">{data.registeredVolunteers} contributed</p> */}
                    <p className='numbers'>
                    <span className="naira-n"></span><b>$ {data.collectedAmount} </b> <span className="grey raised--"> raised of </span> <span className="goal--"> <b>$ {data.targetAmount}</b></span>
                    </p>
                    <progress className='bar' max={data.targetAmount} value={data.collectedAmount}></progress>
                    <div className="action">
                    <button
							className="donate rounded-full w-[7vw] hover:bg-inherit hover:text-inherit bg-purple-gray-600 text-white transition-all duration-190 "
							onClick={() => pay()}
						>
							Donate
						</button>
                                </div>
                </div>
            </div>
        </NavLink>
    );
}

export default SingleCampaign;