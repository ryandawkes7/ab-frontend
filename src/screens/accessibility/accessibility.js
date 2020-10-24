import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './accessibility.css';

import Back from "../../components/backButton/back";

import BackImg from "../../images/left-close.svg";
import SmallText from "../../images/small-text.svg";
import MediumText from "../../images/medium-text.svg";
import LargeText from "../../images/large-text.svg";
import VoiceOver from "../../images/voiceover-icon.svg";
import SoundIcon from "../../images/voulme-icon.svg";


class Accessibility extends Component {
    render () {
        return (
            <div className="container accessibility-container"> {/* Page Container */}
                <Back />

                <div className="inner-container accessibility-inner-container">
                    <div className="accessibility-title-container">
                        <h2>Accessibility Settings</h2>
                    </div>

                    <div className="a-font-size-container"> {/* Text Size Section */ }
                        <h3>Font Size</h3>
                        <div className="font-size-inner-container">
                            <button className="font-btn small">
                                <img src={SmallText} alt="" />
                            </button>
                            <button className="font-btn medium">
                                <img src={MediumText} alt="" />
                            </button>
                            <button className="font-btn large">
                                <img src={LargeText} alt="" />
                            </button>
                        </div>
                    </div>
                    {/* End of Text Size Section */ }

                    <div className="audio-container"> {/* Sound & Voiceover Section */ }
                        <div className="sound-container">
                            <h3>Sound</h3>
                            <img src={SoundIcon} alt="" />
                        </div>
                        <div className="voiceover-container">
                            <h3>Voiceover</h3>
                            <img src={VoiceOver} alt="" />
                        </div>
                    </div> {/* End of Sound & Voiceover Section */ }

                    {/* Save Settings Button */}
                    <Link
                        to="/info"
                        className="basic-btn a-save-btn"
                    >
                        <h3>Save</h3>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Accessibility;
