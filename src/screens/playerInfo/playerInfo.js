import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './playerInfo.css';

import Settings from '../../images/settings-icon.svg';
import Back from "../../components/backButton/back"; import NextButton from '../../images/next-button.svg';

class PlayerInfo extends Component {

    state = {
        userName: '',
        userEmail: '',
        accounts: []
    }

    componentDidMount () {
        this.getUserAccount();
    }

    getUserAccount = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({ accounts: data })
                console.log('Data has been received')
            })
            .catch(() => {
                alert('Error retrieving data from server')
            })
    }

    // Handles changes in input boxes & passes to state
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    // Submit Form
    handleSubmit = (event) => {

        const payload = {
            userName: this.state.userName,
            userEmail: this.state.userEmail
        }

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data sent to server')
            })
            .catch(() => {
                console.log('ISE: Error sending data to server')
            })
    }

    render () {

        console.log('State: ', this.state)
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

                    <form
                        className="p-i-form"
                        onSubmit={ this.handleSubmit }
                    >

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
                                value={ this.state.userName }
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
                                    value={ this.state.userEmail }
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

                    </form>

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
