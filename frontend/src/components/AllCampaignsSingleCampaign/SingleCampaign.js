import React from 'react';
import './singleCard.css';
import { NavLink } from 'react-router-dom';

const SingleCampaign = ({ image, title, ...otherProps }) => {
    return (

        <NavLink  to={`/singleCampaign/${otherProps.id}`}>
            <div className="card single-campaign-card shadow animated wow slideInLeft" >
                <img src="https://th.bing.com/th/id/OIP.otIPf0nD6Sxy3HcAhQJnGAHaE8?w=259&h=180&c=7&r=0&o=5&dpr=3&pid=1.7" className="card-img-top c-img" alt="title" />
                <div className="card-body">
                    <h5 className="card-title description-st"> Company Name</h5>
                    <p className="card-text story-p">Story</p>
                    <p className="last-donay"> Last Donation was 4 hours ago </p>
                    <progress className='progress' max="100" value="89"></progress>
                    <br />
                    <span className="naira-n"> ₦</span><b>213.00 </b> <span className="grey raised--"> raised of </span> <span className="goal--"> ₦ <b>900.00</b></span>
                </div>
            </div>
        </NavLink>
    );
}

export default SingleCampaign;