import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import "./welcome.css";

import PlaneVector from './assets/plane-vector.svg';
import EmailInfo from './assets/email-info.svg';
import CloseBtn from './assets/icon.svg';

class Welcome extends Component {
    state = {
        isActive: false,
        emailAddress: "",
        emailAddressList: []
    }

    toggleChange() {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    getUserEmail() {
        Axios.get('http://localhost:3001/api/get')
            .then((response) => {
                this.setState({
                    emailAddressList: response.data
                })
            })
    }

    render () {
        const { isActive, emailAddress, emailAddressList } = this.state;

        const printData = this.getUserEmail();

        const submitEmail = () => {
            Axios.post('http://localhost:3001/api/insert',
                { email_address: this.state.emailAddress })
                .then(() => {
                    alert("successful insert");
                })
        }

        return (
            <div className="container welcome-container">

                {/* Plane Image Section */}
                <div className="welcome-image-container">
                    <img src={PlaneVector} alt=""/>
                </div>

                {/* Information Section */}
                <div className="welcome-info-container">

                    {/* Title Section */}
                    <div className="w-i-title-container">
                        Aerospace Adventure
                    </div>

                    {/* Description Section */}
                    <div className="w-i-description-container">
                        Join Alfie Fox and his sister Amelia for fun quizzes and games. Discover aerospace facts and compete for the highest score.
                    </div>

                    {/* Email Section */}
                    <div className="welcome-email-container">

                        {/* Email Description */}
                        <div className="w-e-description-container">
                            Enter your email address to stay in the loop with Aerospace Bristol, receive your final score certificate, and be in with a chance to win prizes
                        </div>

                        {/* Welcome Label */}
                        <div className="w-e-label-container">
                            <label htmlFor="email-input">
                                E-mail
                            </label>
                        </div>

                        {/* Email Input Container */}
                        <div className="w-e-input-container">
                            <input
                                type="email"
                                id="email-input"
                                placeholder="Type your email here"
                                onChange={(e) => {
                                    this.setState({ emailAddress: e.target.value })
                                }}
                            />

                            {/* Info Button */}
                            <div className="w-e-i-button-container">
                                <button onClick={() => this.toggleChange()}>
                                    <h3>i</h3>
                                </button>
                            </div>
                        </div>

                        {/* Skip Info Section */}
                        <div className="w-e-skip-container">
                            or just dive right in!
                        </div>
                    </div>

                </div>

                {/* Button Section */}
                <div className="welcome-button-container">
                    <Link to="/info" onClick={submitEmail}>
                            Take Me On Board!
                    </Link>
                </div>

                {/* Map Email Address from SQL list */}
                {emailAddressList.map((val) => {
                    return <p>Email Address: {val.email_address}</p>
                })}

                {/* Popup Guide */}
                {isActive &&
                <div className="welcome-popup-container">
                    <div className="welcome-popup-inner-section">
                        <div className="w-p-inner-container">

                            {/* Close Button */}
                            <div className="w-p-close-button">
                                <button onClick={() => this.toggleChange()}>
                                    <img src={CloseBtn} alt="Close Button" />
                                </button>
                            </div>

                            {/* Info Section */}
                            <div className="w-p-info-container">
                                    By entering your email address, you agree to receive emails from Aerospace Bristol. We will never share your data with third parties and you may unsubscribe at any time.
                            </div>

                            {/* Exit Button */}
                            <div className="w-p-exit-button-container">
                                <button onClick={() => this.toggleChange()} >
                                    OK
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                }


            </div>
        );
    }
}

export default Welcome;
