import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './ready.css';

import PlaneVector from './assets/plane-vector.svg';
import Back from "../../components/backButton/back";

class Ready extends Component {
    render () {
        return (
        <div className="container ready-container">
                <Back />

                <div className="inner-container ready-inner-container">

                    <h2>All Set!</h2>
                    <h3>Get ready to start the adventure and collect as many points as you can</h3>


                    <img src={PlaneVector} alt=""/>

                    <Link to="game-menu" className="basic-btn start-adventure">
                        <h3>Start the Adventure</h3>
                    </Link>

                    <Link to="/ts-and-cs" className="text-btn terms-btn">
                        <h4>Terms & Conditions</h4>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Ready;
