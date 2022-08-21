import React, { useContext } from 'react';
// import Navbar from '../Navbar/Navbar';
import './fullSingle.css';
import { NavLink, useLocation } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import Loader from '../Loader/Loader';
// import { AllCampaignsContext } from '../../contexts/allCampaignsContext';
// import NotFound from '../404/404';




const FullSingleCampaign = (props) => {
    const location = useLocation();
    const { data } = location.state;
    const pay = () => {
        let options = {
            "key": "rzp_test_631wMxKie5nOL2",
            "amount": "1000",
            "currency": "INR",
            "description": "Acme Corp",
            "prefill": {
                "email": "gaurav.kumar@example.com",
                "contact": +919900000000,
            },
            "method": {
                "upi": true,
                "netbanking": true,
                "card": true,
                "wallet": true,
                "nb": true,
            },
            "handler": (response) => {
                console.log(response);
            },
        };
        var rzp = new window.Razorpay(options);
        rzp.open();
    }
    // const { id } = props.match.params;
    // const { campaigns,share } = useContext(AllCampaignsContext);

    // if (campaigns) {
        // let x
        // for (x of campaigns) {
            // if (parseInt(x.id) === parseInt(id)) {
                return (
                    <div  >
                        <div className='' >
                            {/* <Navbar /> */}

                            <div className="container row p-3 inline-block">
                                <br />

                                <div className="col-md-6 ">
                                    <div className="fullSingleCard shadow animated fadeInLeft ">
                                        <div className="card " >
                                            <img src={data.images} className="card-img-top fullSingle-img" alt="..." />
                                            <div className="card-body">
                                                <span className="card-text pl-4"> <h3 className="font-weight" >{data.name} </h3>  </span>
                                                <h1 className='text-sm'>{data.subEvents}</h1>

                                                <p className="card-text pl-4"> <i className="fas fa-user"></i>  <b> Amusan Olumide </b> is raising this campaign </p>
                                            </div>
                                            <ul className="list-group list-group-flush pl-4">
                                                <li className="list-group-item">Created on {String(new Date(data.created_at).getDate()).padStart(2, '0') + '/' + String(new Date(data.created_at).getMonth() + 1).padStart(2, '0') + '/' + new Date(data.created_at).getFullYear()} </li>
                                                <li className=" list-group-item text-sm">
                                                   {data.description}
                                                </li>
                                                <li className="list-group-item"> <NavLink to="/" className="card-link ">Contact  Olumide </NavLink> </li>
                                            </ul>
                                            <div className="card-body ">
                                                <NavLink to="/" className="card-link pl-4">Report Campaign</NavLink>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="card details-full-sc animated fadeInRight">
                                        <div className="card-body">
                                        <span className="naira-n"></span><b>$ {data.collectedAmount} </b> <span className="grey raised--"> raised of </span> <span className="goal--"> <b>$ {data.targetAmount}</b></span>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">< progress max={data.targetAmount} value={data.collectedAmount}></progress> </li>
                                            <li className="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 5,000 </b> </span>  <span className="ml-4"> 1 hr ago</span> </li>
                                            <li className="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 1,000 </b> </span>  <span className="ml-4"> 5 days ago</span> </li>
                                            <li className="list-group-item"> <i className="fas fa-user"></i>  Anonymous  <span className="ml-4 " ><b> ₦ 45,000 </b> </span>  <span className="ml-4"> 7 days ago</span> </li>
                                            <button className='px-3 py-2 rounded bg-purplegray-900 text-purplegray-400' onClick={() => pay()}>Pay</button>
                                            {/* <li className="list-group-item text-center ">   <NavLink onClick={() => {share(x.id, x.description, "w")}} to={`/singleCampaign/${x.id}`} className="card-link btn btn-secondary donay-btn   pl-4"> <i className="fab fa-whatsapp "></i> SHARE   </NavLink></li>
                                            <li className="list-group-item text-center ">   <NavLink onClick={() => {share(x.id, x.description, "t")}} to={`/singleCampaign/${x.id}`} className="card-link btn btn-primary donay-btn   pl-4"><i className="fab fa-twitter "></i> TWEET  </NavLink></li>
                                            <li className="list-group-item text-center ">   <NavLink to={`/donate/${x.id}`} className="card-link btn btn-success donay-btn   pl-4"> <i className="fa fa-money" aria-hidden="true"></i> DONATE </NavLink></li> */}
                                        </ul>

                                    </div>


                                </div>
                            </div>

                        </div>
                        {/* <Footer /> */}
                    </div>
                );
            // }
        // }

        // for (x of campaigns) {
        //     // if (parseInt(x.id) !== parseInt(id)) {
        //     //     return <NotFound />
        //     // }
        // }
    // } 
    // else {
    //     return <Loader />
    // }


}

export default FullSingleCampaign;