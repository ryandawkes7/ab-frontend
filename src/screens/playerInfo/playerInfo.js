import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import './playerInfo.css';

import EasyInactive from './assets/lavel-inactive-easy.svg'; import MediumInactive from './assets/lavel-inactive-medium.svg'; import HardInactive from './assets/level-inactive-hard.svg';
import EasyActive from './assets/level-active-easy.svg'; import MediumActive from './assets/level-active-medium.svg'; import HardActive from './assets/level-active-hard.svg';
import Settings from '../../images/settings-icon.svg';
import Back from "../../components/backButton/back"; import NextButton from '../../images/next-button.svg';

class PlayerInfo extends Component {

    state = {
        EasySelected: false,
        MediumSelected: false,
        HardSelected: false,
    }

    selectEasy() {
        this.setState({
            EasySelected: true,
            MediumSelected: false,
            HardSelected: false
        })
    }
    selectMedium() {
        this.setState({
            EasySelected: false,
            MediumSelected: true,
            HardSelected: false
        })
    }
    selectHard() {
        this.setState({
            EasySelected: false,
            MediumSelected: false,
            HardSelected: true
        })
    }

    render () {

        const { EasySelected } = this.state
        const { MediumSelected } = this.state
        const { HardSelected } = this.state

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
                            id="name-input"
                            placeholder="Type your name here"
                            required
                        />

                    </div>

                    {/* Difficulty Section*/}
                    <div className="p-i-difficulty-container">

                        {/* Difficulty Label */}
                        <label>
                            Select your difficulty level <span>*</span>
                        </label>

                        {/* Difficulty Settings Selection */}
                        { !EasySelected && !MediumSelected && !HardSelected &&
                            <div className="diff-btn-container">
                                <button
                                    className="diff-btn easy"
                                    onClick={() => this.selectEasy()}
                                >
                                    <img src={ EasyInactive }/>
                                </button>
                                <button
                                    className="diff-btn medium"
                                    onClick={() => this.selectMedium()}
                                >
                                    <img src={ MediumInactive }/>
                                </button>
                                <button
                                    className="diff-btn hard"
                                    onClick={() => this.selectHard()}
                                >
                                    <img src={ HardInactive }/>
                                </button>
                            </div>
                        }
                        { EasySelected && !MediumSelected && !HardSelected &&
                            <div className="diff-btn-container"> {/* Difficulty Buttons */ }
                                <button
                                    className="diff-btn easy"
                                    onClick={() => this.selectEasy()}
                                >
                                    <img src={ EasyActive }/>
                                </button>
                                <button
                                    className="diff-btn medium"
                                    onClick={() => this.selectMedium()}
                                >
                                    <img src={ MediumInactive }/>
                                </button>
                                <button
                                    className="diff-btn hard"
                                    onClick={() => this.selectHard()}
                                >
                                    <img src={ HardInactive }/>
                                </button>
                            </div>
                        }
                        { !EasySelected && MediumSelected && !HardSelected &&
                        <div className="diff-btn-container"> {/* Difficulty Buttons */ }
                            <button
                                className="diff-btn easy"
                                onClick={() => this.selectEasy()}
                            >
                                <img src={ EasyInactive }/>
                            </button>
                            <button
                                className="diff-btn medium"
                                onClick={() => this.selectMedium()}
                            >
                                <img src={ MediumActive }/>
                            </button>
                            <button
                                className="diff-btn hard"
                                onClick={() => this.selectHard()}
                            >
                                <img src={ HardInactive }/>
                            </button>
                        </div>
                        }
                        { !EasySelected && !MediumSelected && HardSelected &&
                        <div className="diff-btn-container"> {/* Difficulty Buttons */ }
                            <button
                                className="diff-btn easy"
                                onClick={() => this.selectEasy()}
                            >
                                <img src={ EasyInactive }/>
                            </button>
                            <button
                                className="diff-btn medium"
                                onClick={() => this.selectMedium()}
                            >
                                <img src={ MediumInactive }/>
                            </button>
                            <button
                                className="diff-btn hard"
                                onClick={() => this.selectHard()}
                            >
                                <img src={ HardActive }/>
                            </button>
                        </div>
                        }

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


                    {/*<p style={{fontSize: 14, width: '90%', textAlign: 'left'}}>Adjust font size, sound and turn on voiceover support in accessibility settings</p>*/}
                    {/*<div className="accessibility-container"> /!* Accessibility Button Section *!/*/}
                    {/*    <Link*/}
                    {/*        to="/accessibility"*/}
                    {/*        className="accessibility-btn"*/}
                    {/*    >*/}
                    {/*        <img src={Settings} alt="" />*/}
                    {/*        <h3>Accessibility Settings</h3>*/}
                    {/*    </Link>*/}
                    {/*</div> /!* End of Accessibility Button Section *!/*/}

                </div>

                {/* Next Button */}
                <div className="next-button-container">
                    <Link to="/character" className="next-button">
                        <img src={NextButton} alt=""/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default PlayerInfo;
