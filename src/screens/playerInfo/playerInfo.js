import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './playerInfo.css';

import EasyInactive from './assets/lavel-inactive-easy.svg'; import MediumInactive from './assets/lavel-inactive-medium.svg'; import HardInactive from './assets/level-inactive-hard.svg';
import EasyActive from './assets/level-active-easy.svg'; import MediumActive from './assets/level-active-medium.svg'; import HardActive from './assets/level-active-hard.svg';
import Settings from '../../images/settings-icon.svg';
import Back from "../../components/backButton/back";

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
                <Back className="back-button"/>

                <div className="inner-container player-inner-container">
                    <h2>Player Settings</h2>
                    <div className="name-input-container"> {/* Name Input Section */}
                        <label for="name-input" className="name-label">
                            Name <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="name-input"
                            placeholder="Type your name here"
                            required
                        />
                    </div> {/* End of Name Input Section */}

                    <div className="difficulty-container"> {/* Difficulty Options Section */}
                        <label>Select your difficulty level <span>*</span></label>
                        { !EasySelected && !MediumSelected && !HardSelected &&
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

                    </div> {/* End of Difficulty Options Section */}

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
