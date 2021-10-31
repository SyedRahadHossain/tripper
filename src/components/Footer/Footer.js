import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-success p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center align-content-center">
                                <h3 className="text-white text-start">
                                    Tripper
                                    <br />
                                    <span className="fs-6">
                                        Best travel agency   <br />
                                        Be a member <br />
                                        Get discount up to 50%
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="d-flex flex-column align-items-center">
                                <div className="">
                                    <h3 className="text-white me-2">
                                        <i className="fab fa-twitter-square"></i>
                                    </h3>
                                    <h3 className="text-white me-2">
                                        <i className="fab fa-facebook-square"></i>
                                    </h3>
                                    <h3 className="text-white me-2">
                                        <i className="fab fa-youtube-square"></i>
                                    </h3>
                                    <h3 className="text-white me-2">
                                        <i className="fab fa-instagram-square"></i>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center">
                                <NavLink className="fs-6 text-white" to="/home">
                                    Home
                                </NavLink>
                                <NavLink className="fs-6 text-white" to="/home">
                                    Packages
                                </NavLink>
                                <NavLink className="fs-6 text-white" to="/home">
                                    About us
                                </NavLink>
                            
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <small className="text-white ">© copyright to Tripper 2021</small>
            </div>
        </div>
    );
};

export default Footer;