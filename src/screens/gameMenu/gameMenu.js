import React, {Component} from 'react';
import './gameMenu.css';
import MapSection from '../../components/map/map.jsx'
import { Link } from 'react-router-dom'

import HeaderImg from './assets/char-stats-bg.svg';
import ProfilePic from './assets/user-icon.svg';
import SettingsIcon from './assets/settings-icon.svg';
import GuideBtn from './assets/guide-button.svg';
import CalibrateBtn from './assets/cabibrate-icon.svg'
import CloseIcon from './assets/16/close-icon.svg';
import {GoogleMap} from "react-google-maps";

class Popup extends Component {
    handleClick = () => {
        this.props.toggle();
    }

    render () {
        return(
            <div className="guide-popup-container">
                <div className="guide-inner-container">
                    <button onClick={this.handleClick}>
                        <img src={CloseIcon} alt=""/>
                    </button>
                    <h2>How To Play Guide?</h2>
                    <div className="guide-popup-btn-container">
                        <Link
                            className="guide-popup-btn guide-no-btn"
                            onClick={this.handleClick}
                        >
                            <h3>No</h3>
                        </Link>
                        <Link
                            className="guide-popup-btn"
                            to="/user-guide"
                        >
                            <h3>Yes</h3>
                        </Link>
                    </div>
                </div>
            </div>
        )

    }
}

class GameMenu extends Component {

    constructor (props) {
        super(props);
        this.state = {
            popupOpen: false
        }
    }

    togglePopup = () => {
        this.setState({
            popupOpen: !this.state.popupOpen
        })
    }

    render () {

        return (
            <div className="container game-menu-container">
                <MapSection className="map-section"/>

                {this.state.popupOpen ?
                    <Popup toggle={this.togglePopup} />
                    : null
                }

            </div>
        );
    }
}

export default GameMenu;
