import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './character.css';
import BackImg from "../../images/left-close.svg";
import SmallText from "../../images/small-text.svg";
import MediumText from "../../images/medium-text.svg";
import LargeText from "../../images/large-text.svg";
import AlfieIcon from "../../images/alfie.svg";
import AmeliaIcon from "../../images/amelia.svg";
import Back from "../../components/backButton/back";

class Character extends Component {
    render () {
        return (
            <div className="container char-page-container"> {/* Page Container */}
                <Back /> {/* Back Button */}

                {/* Inner Container */}
                <div className="inner-container">
                    <h2>Choose Character</h2> {/* Title */}
                    {/* Characters Container */}
                    <div className="character-container">
                        <button className="character-btn alfie">
                            <img src={AlfieIcon} alt="" />
                        </button>
                        <button className="character-btn amelia">
                            <img src={AmeliaIcon} alt="" />
                        </button>
                    </div>
                    {/* End of Characters Section */ }



                </div>
                {/* End of Inner Container */}

                {/* Next Button Container */}
                <div className="next-button-container">
                    <Link
                        to="/ready"
                        className="next-button"
                    >
                        <h3>Next</h3>
                    </Link>
                </div>
                {/* Next Button Container */}
            </div>
        );
    }
}

export default Character;
