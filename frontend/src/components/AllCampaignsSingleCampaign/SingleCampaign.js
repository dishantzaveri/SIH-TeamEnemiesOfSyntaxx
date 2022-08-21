import React from 'react';
import './singleCard.css';
import { NavLink } from 'react-router-dom';

const SingleCampaign = ({ data }) => {
    return (
        <NavLink className='w-full' state={{'data': data}} to={`/singleCampaign/${data.id}`}>
            <div className="card single-campaign-card shadow animated wow slideInLeft w-full" >
                <img src={data.images} className="card-img-top c-img" alt="title" />
                <div className="card-body">
                    <h5 className="card-title description-st">{data.name}</h5>
                    <h1 className='text-sm'>{data.subEvents}</h1>
                    <p className="card-text story-p text-xs">{data.description}</p>
                    <p className="last-donay">{data.event_date}</p>
                    <progress className='progress' max={data.targetAmount} value={data.collectedAmount}></progress>
                    <p className="last-donay">{data.contributors}</p>
                    <p className="last-donay">{data.registeredVolunteers} contributed</p>
                    <span className="naira-n"></span><b>$ {data.collectedAmount} </b> <span className="grey raised--"> raised of </span> <span className="goal--"> <b>$ {data.targetAmount}</b></span>
                </div>
            </div>
        </NavLink>
    );
}

export default SingleCampaign;