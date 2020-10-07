import React, {Component} from 'react';
import Back from "../../components/backButton/back";
import {Link} from "react-router-dom";
import './gameGuide.css';

import LockedIcon from '../../components/map/assets/quiz-locked.svg'
import IncompleteIcon from '../../components/map/assets/quiz-icon.svg'
import CompleteIcon from '../../components/map/assets/quiz-complete.svg'
import BackImg from "../../images/left-close.svg";
import HeaderImg from "./assets/guide-header.svg";
import AlfieImg from "./assets/alfie-character.svg";
import CalibrateImg from "./assets/cabibrate-icon.svg"

class GameGuide extends Component {
    state = {
        showFirstScreen: true,
        showSecondScreen: false,
        showThirdScreen: false
    }

    toggleFirstScreen() {
        this.setState({
            showFirstScreen: !this.state.showFirstScreen
        })
    }
    toggleSecondScreen() {
        this.setState({
            showSecondScreen: !this.state.showSecondScreen
        })
    }
    toggleThirdScreen() {
        this.setState({
            showThirdScreen: !this.state.showThirdScreen
        })
    }

    render () {

        const { showFirstScreen } = this.state;
        const { showSecondScreen } = this.state;
        const { showThirdScreen } = this.state;

        return (
            <div>
            { showFirstScreen && !showSecondScreen && !showThirdScreen &&
                <div className="container guide-container">
                    <Back />
                    <div className="inner-container">
                        <h2>How To Play</h2>
                        <div className="inner-guide-container">
                            <h4 className="guide-subtitle">Walk Around, Complete Activities & Collect Points</h4>

                            <div className="guide-interaction-container">
                                <img src={ LockedIcon } alt="Locked Icon"/>
                                <div>
                                    <h4><strong>LOCKED</strong></h4>
                                    <p>Move closer to this activity to unlock it</p>
                                </div>
                            </div>

                            <div className="guide-interaction-container">
                                <img src={ IncompleteIcon } alt="Incomplete Icon"/>
                                <div>
                                    <h4><strong>UNLOCKED</strong></h4>
                                    <p>Tap activity to complete it</p>
                                </div>
                            </div>

                            <div className="guide-interaction-container">
                                <img src={ CompleteIcon } alt="Complete Icon"/>
                                <div>
                                    <h4><strong>COMPLETED</strong></h4>
                                    <p>Task has already been completed</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="next-button-container">
                        <Link
                            className="next-button"
                            onClick={() => {
                                this.toggleFirstScreen();
                                this.toggleSecondScreen();
                            }}
                        >
                            <h3>Next</h3>
                        </Link>
                    </div>
                </div>
            }

            {
                showSecondScreen && !showFirstScreen && !showThirdScreen &&
                <div className="container guide-container">
                    <div className="back-btn"> {/* Back Button Container */}
                        <button
                            onClick={() => {
                                this.toggleFirstScreen();
                                this.toggleSecondScreen();
                            }}
                        >
                            <img src={BackImg} alt="" />
                        </button>
                    </div>
                    <div className="inner-container">
                        <h2>How To Play</h2>
                        <div className="inner-guide-container">
                            <h4 className="guide-subtitle">
                                Score points by completing activities.<br/>
                                More points means a higher position on the leaderboard!
                            </h4>
                            <img src={HeaderImg} alt="Header Image" />
                            <h4 className="guide-subtitle">
                                The progress bar shows how far through the adventure you are. <br/>
                                Each completed activity adds to the progress bar
                            </h4>

                        </div>
                    </div>
                    <div className="next-button-container">
                        <Link
                            className="next-button"
                            onClick={() => {
                                this.toggleSecondScreen();
                                this.toggleThirdScreen();
                            }}
                        >
                            <h3>Next</h3>
                        </Link>
                    </div>
                </div>
            }

                {
                    showThirdScreen && !showFirstScreen && !showSecondScreen &&
                    <div className="container guide-container">
                        <div className="back-btn"> {/* Back Button Container */}
                            <button
                                onClick={() => {
                                    this.toggleSecondScreen();
                                    this.toggleThirdScreen();
                                }}
                            >
                                <img src={BackImg} alt="" />
                            </button>
                        </div>
                        <div className="inner-container">
                            <h2>How To Play</h2>
                            <div className="inner-guide-container">
                                <h4 className="guide-subtitle">Ready for take-off!</h4>
                                <h4 className="guide-subtitle">Explore the museum to unlock activities and begin your adventure.</h4>
                                <h4 className="guide-subtitle">Click on the calibration button to refresh your position on the map if needed.</h4>
                                <div className="guide-image-container">
                                    <img src={CalibrateImg} alt="Calibration Button"
                                         className="guide-calibrate-img"
                                    />
                                    <img src={AlfieImg} alt="Alfie Waving" />
                                </div>
                            </div>
                        </div>
                        <div className="next-button-container">
                            <Link
                                className="next-button"
                                to="/game-menu"
                            >
                                <h3>Next</h3>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default GameGuide;
