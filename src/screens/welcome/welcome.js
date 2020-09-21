import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./welcome.css";

import PlaneVector from './assets/plane-vector.svg';

class Welcome extends Component {
    render () {
        return (
            <div className="container welcome-container">
                <img src={PlaneVector} alt=""/>
                <div className="welcome-info-container">
                    <h1>AEROSPACE EXPLORE</h1>
                    <h3>Learn fun and interesting facts while competing against others</h3>
                    <label
                        for="email-input"
                        className="welcome-label"
                    >
                        E-mail</label>
                    <input
                        type="text"
                        id="email-input"
                        placeholder="Type your email here"
                    />
                    <p>Enter your email to be added to our marketing list and to participate in future events</p>
                </div>
                <div className="welcome-button-container">
                    <Link to="/info">
                        <button className="submit-btn">Take Me On Board!</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Welcome;
