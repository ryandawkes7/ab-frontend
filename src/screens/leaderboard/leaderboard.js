import React, {Component} from 'react'; import './leaderboard.css'; import { Link } from "react-router-dom";
import AlfieImg from './assets/alfie-finish.png'; import CloseButton from './assets/16/icon.png'; import QuizButton from './assets/quiz-image.png';
import GoldTrophy from './assets/gold-trophy.png'; import SilverTrophy from './assets/silver-trophy.png'; import BronzeTrophy from './assets/bronze-trophy.png'; import StarImage from './assets/star-image.png';

class Leaderboard extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isPopupActive: false,
            isRecapPopupActive: false,
            isCertificatePopupActive: false,
            isEmailConfirmationActive: false,
        }
    }

    toggleRecapPopup = () => {
        this.setState({
            isPopupActive: !this.state.isPopupActive,
            isRecapPopupActive: !this.state.isRecapPopupActive
        })
    }

    toggleCertificatePopup = () => {
        this.setState({
            isPopupActive: !this.state.isPopupActive,
            isCertificatePopupActive: !this.state.isCertificatePopupActive
        })
    }

    sendEmail = () => {
        this.setState({
            isCertificatePopupActive: !this.state.isCertificatePopupActive,
            isEmailConfirmationActive: !this.state.isEmailConfirmationActive
        })
    }

    handleCloseClick = () => {
        this.setState({
            isPopupActive: false,
            isRecapPopupActive: false,
            isCertificatePopupActive: false,
            isEmailConfirmationActive: false
        })
    }

    render () {

        const isPopupActive = this.state.isPopupActive;
        const isRecapPopupActive = this.state.isRecapPopupActive;
        const isCertificatePopupActive = this.state.isCertificatePopupActive;
        const isConfirmationActive = this.state.isEmailConfirmationActive;

        const RecapPopup = () => {
            return (
                isPopupActive === true && (
                    <div className="recap-popup-container">

                        <div className="rp-box-container">

                            {/* Close Button */}
                            <button className="rpb-button" onClick={this.handleCloseClick}>
                                <img src={CloseButton} alt="Close Popup"/>
                            </button>

                            { isRecapPopupActive === true && (
                                <div className="rpb-inner-container">

                                {/* Title */}
                                <div className="rpb-section rpb-title">
                                    POINTS BOOST
                                </div>

                                {/* Description */}
                                <div className="rpb-section rpb-description">
                                    Answer some quick fire questions from across your adventure for one last chance to boost your score.
                                </div>

                                {/* Subtitle */}
                                <div className="rpb-section rpb-subtitle">
                                    ONLY ONE CHANCE AND NO HINTS!
                                </div>

                                {/* Image */}
                                <div className="rpb-section rpb-image">
                                    <img src={QuizButton} alt="Quiz Button"/>
                                </div>

                                {/* Button Container */}
                                <div className="rpb-section rpb-button-container">
                                    <Link to="/recap" className="rpb-ok-button">
                                        OK
                                    </Link>
                                </div>


                            </div>
                            )}

                            { isCertificatePopupActive === true && (
                                <div className="rpb-inner-container">

                                    {/* Title */}
                                    <div className="rpb-section rpb-title">
                                        SCORE CERTIFICATE
                                    </div>

                                    {/* Description */}
                                    <div className="rpb-section rpb-description">
                                        If you would like to receive a personalised score certificate, please enter your email address below.
                                    </div>

                                    {/* Input Container */}
                                    <div className="rpb-section rpb-email-container">
                                        <label>Email</label>
                                        <div className="rpbe-input">
                                            <input
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    {/* Input Description */}
                                    <div className="rpb-section rpb-email-description">
                                        Enter your email address to stay in the loop with Aerospace Bristol, receive your final score certificate, and be in with a chance to win prizes
                                    </div>

                                    {/* Button Container */}
                                    <div className="rpb-section rpb-buttons-container">

                                        <button className="rpbb-button rpb-send-button" onClick={this.sendEmail}>
                                            SEND
                                        </button>

                                        <Link to="/outro" className="rpbb-button rpb-no-button">
                                            No thanks
                                        </Link>

                                    </div>

                                </div>
                            )}

                            { isConfirmationActive === true && (
                                <div className="rpbc-inner-container">

                                    {/* Title */}
                                    <div className="rpb-section rpbc-title">
                                        SCORE CERTIFICATE
                                    </div>

                                    {/* Description */}
                                    <div className="rpb-section rpbc-description">
                                        Keep an eye on your emails! We'll be sending your score certificate shortly.
                                    </div>

                                    {/* Finish */}
                                    <div className="rpb-section rpbc-button">
                                        <Link to="/outro">
                                            FINISH
                                        </Link>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                )
            )
        }

        return (
            <div className="container leaderboard-container">
                <RecapPopup/>
                <div className="leaderboard-inner-container">

                    {/* Character Image */}
                    <div className="l-image-container">
                        <img src={AlfieImg} alt="Character Image"/>
                    </div>

                    {/* Points Total */}
                    <div className="l-points-container">
                        1830 points!
                    </div>

                    {/* Leaderboard Table Section */}
                    <div className="l-table-container">
                        <div className="lt-inner-container">
                            <table className="l-table">
                            <tr className="l-table-row">
                                <td className="ltr-position">
                                    <div className="ltrp-inner-container">
                                        <div className="ltrp-text">1</div>
                                        <div className="ltrp-image">
                                            <img src={GoldTrophy} alt="First Place"/>
                                        </div>
                                    </div>
                                </td>
                                <td className="ltr-username">Jimmy</td>
                                <td className="ltr-score">2650p</td>
                            </tr>
                            <tr className="l-table-row">
                                <td className="ltr-position">
                                    <div className="ltrp-inner-container">
                                        <div className="ltrp-text">2</div>
                                        <div className="ltrp-image">
                                            <img src={SilverTrophy} alt="Second Place"/>
                                        </div>
                                    </div>
                                </td>
                                <td className="ltr-username">Becky</td>
                                <td className="ltr-score">2600p</td>
                            </tr>
                            <tr className="l-table-row">
                                <td className="ltr-position">
                                    <div className="ltrp-inner-container">
                                        <div className="ltrp-text">3</div>
                                        <div className="ltrp-image">
                                            <img src={BronzeTrophy} alt="Third Place"/>
                                        </div>
                                    </div>
                                </td>
                                <td className="ltr-username">Harry</td>
                                <td className="ltr-score">1830p</td>
                            </tr>
                            <tr className="l-table-row">
                                <td className="ltr-position">
                                    <div className="ltrp-inner-container">
                                        <div className="ltrp-text">58</div>
                                        <div className="ltrp-image">
                                            <img src={StarImage} alt="Your Position"/>
                                        </div>
                                    </div>
                                </td>
                                <td className="ltr-username">You</td>
                                <td className="ltr-score">1080p</td>
                            </tr>
                            <tr className="l-table-row">
                                <td className="ltr-position">937</td>
                                <td className="ltr-username">Tom</td>
                                <td className="ltr-score">70p</td>
                            </tr>
                        </table>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="l-button-container">

                        {/* Recap Button */}
                        <div className="lb-button lb-recap-button" onClick={this.toggleRecapPopup}>
                            RECAP - get more points
                        </div>

                        {/* Finish Button */}
                        <div className="lb-button lb-finish-button" onClick={this.toggleCertificatePopup}>
                            FINISH
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Leaderboard;
