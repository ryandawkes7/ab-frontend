import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './ready.css';

import PlaneVector from './assets/plane-vector.svg';
import Back from "../../components/backButton/back";

class Ready extends Component {
    render () {
        return (
        <div className="container ready-container">

            {/* Back Button */}
            <div className="back-button">
                <Back className="back-button"/>
            </div>

            <div className="ready-inner-container">

                {/* Title Container */}
                <div className="r-title-container">
                    Clear For Take-Off!
                </div>

                {/* Description Container */}
                <div className="r-description-container">
                    Get ready to start your adventure and collect as many points as you can
                </div>

                {/* Image Container */}
                <div className="r-image-container">
                    <img src={PlaneVector} alt=""/>
                </div>

                {/* Continue button*/}
                <div className="r-continue-container">
                    <Link to="/game-menu" className="basic-btn r-continue">
                        <h3>Start your Adventure</h3>
                    </Link>
                </div>

            </div>
        </div>
        );
    }
}

export default Ready;
