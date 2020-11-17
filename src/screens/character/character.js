import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './character.css';

import Back from "../../components/backButton/back";
import NextButton from "../../images/next-button.svg";

import AlfieUnselected from './assets/alfie-unselected.png'; import SelectedAlfie from './assets/alfie-selected.png'
import AmeliaUnselected from './assets/amelia-unselected.png'; import SelectedAmelia from './assets/amelia-selected.png';

class Character extends Component {
    state = {
        AlfieSelected: false,
        AmeliaSelected: false
    }

    selectAlfie = () => {
        this.setState({
            AlfieSelected: true,
            AmeliaSelected: false
        })
    }

    selectAmelia = () => {
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

                {/* Back Button */}
                <div className="back-button">
                    <Back className="back-button"/>
                </div>

                <div className="c-p-inner-container">

                    {/* Title Section */}
                    <div className="c-p-title-container">
                        Choose Character
                    </div>

                    {/* Character Section */}
                    <div className="c-p-character-container">

                        {/* Alfie */}
                        <div className="c-p-c-character" onClick={this.selectAlfie}>
                            { AlfieSelected === true &&
                                <div className="cpcc-character-image">
                                    <img src={ SelectedAlfie } alt="Alfie is Selected!" className="cpcc-selected" style={{opacity: '100%'}}/>
                                    <img src={ AlfieUnselected } alt="Select Alfie!" className="cpcc-unselected" style={{opacity: '0%'}}/>
                                </div>
                            }
                            { AlfieSelected === false &&
                                <div className="cpcc-character-image">
                                    <img src={ SelectedAlfie } alt="Alfie is Selected!" className="cpcc-selected" style={{opacity: '0%'}}/>
                                    <img src={ AlfieUnselected } alt='Select Alfie!' className="cpcc-unselected" style={{opacity: '100%'}} />
                                </div>
                            }
                        </div>

                        {/* Amelia */}
                        <div className="c-p-c-character" onClick={this.selectAmelia}>
                            { AmeliaSelected === true &&
                            <div className="cpcc-character-image">
                                <img src={ SelectedAmelia } alt="Amelia is Selected!" className="cpcc-selected" style={{opacity: '100%'}}/>
                                <img src={ AmeliaUnselected } alt="Select Amelia!" className="cpcc-unselected" style={{opacity: '0%'}}/>
                            </div>
                            }
                            { AmeliaSelected === false &&
                            <div className="cpcc-character-image">
                                <img src={ SelectedAmelia } alt="Amelia is Selected!" className="cpcc-selected" style={{opacity: '0%'}}/>
                                <img src={ AmeliaUnselected } alt='Select Amelia!' className="cpcc-unselected" style={{opacity: '100%'}} />
                            </div>
                            }
                        </div>


                    </div>

                    {/* Characters Container */}
                    {/*{ !AlfieSelected && !AmeliaSelected &&*/}
                    {/*    <div className="character-container">*/}
                    {/*        <button*/}
                    {/*            className="character-btn"*/}
                    {/*            onClick={() => this.selectAlfie()}*/}
                    {/*        >*/}
                    {/*            <img src={ AlfieUnselected } alt=""/>*/}
                    {/*        </button>*/}
                    {/*        <button*/}
                    {/*            className="character-btn"*/}
                    {/*            onClick={() => this.selectAmelia()}*/}
                    {/*        >*/}
                    {/*            <img src={ AmeliaUnselected } alt=""/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*}*/}

                    {/*{ AlfieSelected && !AmeliaSelected &&*/}
                    {/*    <div className="character-container">*/}
                    {/*        <button className="character-btn">*/}
                    {/*            <img src={ AlfieSelected } alt=""/>*/}
                    {/*        </button>*/}
                    {/*        <button*/}
                    {/*            className="character-btn"*/}
                    {/*            onClick={() => this.selectAmelia()}*/}
                    {/*        >*/}
                    {/*            <img src={ AmeliaUnselected } alt=""/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*}*/}

                    {/*{ !AlfieSelected && AmeliaSelected &&*/}
                    {/*    <div className="character-container">*/}
                    {/*        <button*/}
                    {/*            className="character-btn"*/}
                    {/*            onClick={() => this.selectAlfie()}*/}
                    {/*        >*/}
                    {/*            <img src={ AlfieUnselected } alt=""/>*/}
                    {/*        </button>*/}
                    {/*        <button className="character-btn">*/}
                    {/*            <img src={ AmeliaSelected } alt=""/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*}*/}

                </div>
                {/* End of Inner Container */}

                {/* Next Button */}
                <div className="next-button-container">
                    <Link to="/ready" className="next-button">
                        <img src={NextButton} alt=""/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Character;
