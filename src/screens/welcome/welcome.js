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

                {/* Map Email Address from SQL list */}
                {/*{emailAddressList.map((val) => {*/}
                {/*    return <p>Email Address: {val.email_address}</p>*/}
                {/*})}*/}

                {isActive &&
                    <div className="welcome-popup-container">
                        <div className="welcome-popup-inner-container">
                            <button
                                className="welcome-popup-close-button"
                                onClick={() => this.toggleChange()}
                            >
                                <img src={CloseBtn} alt="Close Button" />
                            </button>
                            <p>
                                By entering your email address, you agree to receive emails from Aerospace Bristol. We will never share your data with third parties and you may unsubscribe at any time.
                            </p>
                            <button
                                className="basic-btn"
                                onClick={() => this.toggleChange()}
                            >
                                <h3>OK</h3>
                            </button>
                        </div>
                    </div>
                }

                <img src={PlaneVector} alt=""/>
                <div className="welcome-info-container">
                    <h1>AEROSPACE ADVENTURE</h1>
                    <h3>Help Alfie & Amelia complete their tasks. Discover Aerospace facts and compete for the highest score.</h3>
                    <p style={{fontSize: 12, textAlign: 'left'}}>Enter your email address to stay in the loop with Aerospace Bristol, receive your final score certificate, and be in with a chance to win prizes</p>
                    <div className="welcome-label-container">
                        <label
                            for="email-input"
                            className="welcome-label"
                        >
                            E-mail
                        </label>
                        <button onClick={() => this.toggleChange()}>
                            <h3>i</h3>
                        </button>
                    </div>
                    <input
                        type="email"
                        id="email-input"
                        placeholder="Type your email here"
                        onChange={(e) => {
                            this.setState({ emailAddress: e.target.value })
                        }}
                    />
                    <p style={{fontSize: 16, textAlign: 'left'}}>or just dive right in!</p>
                </div>
                <div className="welcome-button-container">
                    <Link to="/info">
                        <button
                            className="submit-btn"
                            onClick={submitEmail}
                        >
                            Take Me On Board!
                        </button>
                    </Link>
                </div>


            </div>
        );
    }
}

export default Welcome;
