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

    state = {
        popupOpen: false
    }

    togglePopup = () => {
        this.setState({
            popupOpen: !this.state.popupOpen
        })
    }

    render () {

        return (
            <div className="container game-menu-container">
                {/* Player Statistics Header Section */}
                <div className="stat-header-container">
                    {/* Background */}
                    <img src={HeaderImg} alt="" className="stat-header-background"/>

                    {/* Header Inner Container */}
                    <div className="stat-header-inner-container">
                        <img src={ProfilePic} alt="" /> {/* Profile Picture */}

                        {/* XP & Score Section */}
                        <div className="user-stats-container">
                            <h3>0</h3>
                            <div className="xp-bar" />
                        </div>
                        {/* End of XP & Score Section */}

                        <img src={SettingsIcon} alt="" /> {/* Settings Icon */}
                    </div>
                    {/* End of Header Inner Container */}

                </div>
                {/* End of Player Statistics Header Section */}

                <MapSection
                    className="map-section"
                />

                <div className="map-btn-container">
                    <div className="map-btn-inner-container">
                        <button onClick={this.togglePopup}>
                            <img src={GuideBtn} alt=""/>
                        </button>
                        <Link className="basic-btn">
                            <h3>Finished?</h3>
                        </Link>
                        <button>
                            <img src={CalibrateBtn} alt=""/>
                        </button>
                    </div>
                </div>
                {this.state.popupOpen ? <Popup toggle={this.togglePopup} /> : null}
            </div>
        );
    }
}

export default GameMenu;
