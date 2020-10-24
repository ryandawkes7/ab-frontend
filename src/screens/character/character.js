import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './character.css';

import AlfieUnselected from './assets/alfie-unselected.svg'; import AlfieSelectedIcon from './assets/alfie-selected.svg';
import AmeliaUnselected from './assets/amelia-unselected.svg'; import AmeliaSelectedIcon from './assets/amelia-selected.svg';
import Back from "../../components/backButton/back";

class Character extends Component {
    state = {
        AlfieSelected: false,
        AmeliaSelected: false
    }

    selectAlfie() {
        this.setState({
            AlfieSelected: true,
            AmeliaSelected: false
        })
    }
    selectAmelia() {
        this.setState({
            AlfieSelected: false,
            AmeliaSelected: true
        })
    }

    render () {

        const { AlfieSelected } = this.state;
        const { AmeliaSelected } = this.state;

        return (
            <div className="container char-page-container"> {/* Page Container */}
                <Back /> {/* Back Button */}

                {/* Inner Container */}
                <div className="inner-container">
                    <h2>Choose Character</h2> {/* Title */}
                    {/* Characters Container */}

                    { !AlfieSelected && !AmeliaSelected &&
                        <div className="character-container">
                            <button
                                className="character-btn alfie"
                                onClick={() => this.selectAlfie()}
                            >
                                <img src={ AlfieUnselected } alt=""/>
                            </button>
                            <button
                                className="character-btn amelia"
                                onClick={() => this.selectAmelia()}
                            >
                                <img src={ AmeliaUnselected } alt=""/>
                            </button>
                        </div>
                    }

                    { AlfieSelected && !AmeliaSelected &&
                        <div className="character-container">
                            <button className="character-btn alfie">
                                <img src={ AlfieSelectedIcon } alt=""/>
                            </button>
                            <button
                                className="character-btn amelia"
                                onClick={() => this.selectAmelia()}
                            >
                                <img src={ AmeliaUnselected } alt=""/>
                            </button>
                        </div>
                    }

                    { !AlfieSelected && AmeliaSelected &&
                        <div className="character-container">
                            <button
                                className="character-btn alfie"
                                onClick={() => this.selectAlfie()}
                            >
                                <img src={ AlfieUnselected } alt=""/>
                            </button>
                            <button className="character-btn amelia">
                                <img src={ AmeliaSelectedIcon } alt=""/>
                            </button>
                        </div>
                    }

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
