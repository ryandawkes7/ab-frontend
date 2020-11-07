import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from "axios";
import './playerInfo.css';

import Settings from '../../images/settings-icon.svg';
import Back from "../../components/backButton/back"; import NextButton from '../../images/next-button.svg';

class PlayerInfo extends Component {

    state = {
        userName: '',
        userEmail: ''
    }

    // Handles changes in input boxes
    handleChange = event => {
        event.preventDefault();

        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        const { userName, userEmail } = this.state;

        console.log("Username: " + userName);
        console.log("Email: " + userEmail);
    }

    render () {

        const { userName, userEmail } = this.state;

        return (
            <div className="container p-info-container"> {/* Page Container */}
                {/* Back Button */}
                <div className="back-button">
                    <Back className="back-button"/>
                </div>

                {/* Body Container */}
                <div className="player-inner-container">

                    {/* Title Section  */}
                    <div className="p-i-title-container">
                        Player Settings
                    </div>

                    {/* Username Section */}
                    <div className="p-i-name-container">

                        {/* Name Label */}
                        <label htmlFor="name-input">
                            Name <span>*</span>
                        </label>

                        {/* Name Input */}
                        <input
                            type="text"
                            name="userName"
                            value={ userName }
                            onChange={this.handleChange}
                            placeholder="Type your name here"
                            required
                        />

                    </div>

                    {/* Email Section */}
                    <div className="p-i-email-container">

                        {/* Email Description */}
                        <div className="p-i-description-container">
                            Enter your email address to stay in the loop with Aerospace Bristol, receive your final score certificate, and be in with a chance to win prizes
                        </div>

                        {/* Welcome Label */}
                        <div className="p-i-label-container">
                            <label htmlFor="email-input">
                                E-mail
                            </label>
                        </div>

                        {/* Email Input Container */}
                        <div className="p-i-input-container">
                            <input
                                type="email"
                                name="userEmail"
                                value={ userEmail }
                                onChange={this.handleChange}
                                placeholder="Type your email here"
                            />

                            {/* Info Button */}
                            <div className="p-i-button-container">
                                <button onClick={() => this.toggleChange()}>
                                    <h3>i</h3>
                                </button>
                            </div>
                        </div>

                        {/* Skip Info Section */}
                        <div className="p-i-skip-container">
                            or just dive right in!
                        </div>
                    </div>

                    {/* Accessibility Settings */}
                    <div className="p-i-accessibility-container">

                        {/* Description Section */}
                        <div className="p-i-a-description">
                            Adjust font size, sound and turn on voiceover support in accessibility settings.
                        </div>

                        {/* Accessibility Button */}
                        <div className="p-i-a-button-container">
                            <Link to="/accessibility" className="p-i-a-button">
                                <div className="p-i-a-b-image">
                                    <img src={Settings} alt="Accessibility Settings"/>
                                </div>
                                <div className="p-i-a-b-title">
                                    Accessibility Settings
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>

                {/* Next Button */}
                <div className="next-button-container">
                    <Link to="/character" className="next-button" onClick={() => this.handleSubmit()}>
                        <img src={NextButton} alt=""/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default PlayerInfo;
