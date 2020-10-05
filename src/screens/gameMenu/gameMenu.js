import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './gameMenu.css';
import MapSection from '../../components/map/map.jsx'

import HeaderImg from './assets/char-stats-bg.svg';
import ProfilePic from './assets/user-icon.svg';
import SettingsIcon from './assets/settings-icon.svg';
import MapOverlay from './assets/MainBuidling.png';
import QuestionIcon from './assets/questionIcon.png';

class GameMenu extends Component {

    componentDidMount () {
        // Gets user's current position upon loading
        // navigator.geolocation.getCurrentPosition(
        //     function(position) {
        //         console.log(position)
        //     },
        //     function (error) {
        //         console.error("Error Code: " + error.code + " - " + error.message);
        //     }
        // );
        //
        // // Gets user's position when they are moving
        // if(navigator.geolocation) {
        //     navigator.geolocation.watchPosition(
        //         function(position) {
        //             console.log("Lat is: ", position.coords.latitude);
        //             console.log("Lon is: ", position.coords.longitude);
        //         }
        //     )
        // }
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
                            <h3>5 Points</h3>
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
            </div>
        );
    }
}


const location = {
    lat: 51.523,
    lng: -2.578499,
    text: "Aerospace Museum"
}

export default GameMenu;
