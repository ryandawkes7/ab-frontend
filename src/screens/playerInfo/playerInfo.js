import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './playerInfo.css';

import BackImg from '../../images/left-close.svg';

import Easy from './assets/lavel-inactive-easy.svg';
import Medium from './assets/lavel-inactive-medium.svg';
import Hard from './assets/level-inactive-hard.svg';
import Settings from '../../images/settings-icon.svg';
import Back from "../../components/backButton/back";

class PlayerInfo extends Component {
    render () {
        return (
            <div className="container p-info-container"> {/* Page Container */}
                <Back className="back-button"/>

                <div className="inner-container player-inner-container">
                    <h2>Player Settings</h2>
                    <div className="name-input-container"> {/* Name Input Section */}
                        <label for="name-input" className="name-label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name-input"
                            placeholder="Type your name here"
                        />
                    </div> {/* End of Name Input Section */}

                    <div className="difficulty-container"> {/* Difficulty Options Section */}
                        <h3>Select your difficulty level</h3>
                        <div className="diff-btn-container"> {/* Difficulty Buttons */}
                            <button className="diff-btn easy">
                                <img src={Easy}/>
                            </button>
                            <button className="diff-btn medium">
                                <img src={Medium}/>
                            </button>
                            <button className="diff-btn hard">
                                <img src={Hard}/>
                            </button>
                        </div> {/* End of Difficulty Buttons */}
                    </div> {/* End of Difficulty Options Section */}

                    <div className="accessibility-container"> {/* Accessibility Button Section */}
                        <Link
                            to="/accessibility"
                            className="accessibility-btn"
                        >
                            <img src={Settings} alt="" />
                            <h3>Accessibility Settings</h3>
                        </Link>
                    </div> {/* End of Accessibility Button Section */}

                </div>

                <div className="next-button-container">
                    <Link to="/character" className="next-button">
                        <h3>Next</h3>
                    </Link>
                </div>
            </div>
        );
    }
}

export default PlayerInfo;
