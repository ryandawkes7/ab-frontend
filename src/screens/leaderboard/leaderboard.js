import React, {Component} from 'react'; import './leaderboard.css';
import AlfieImg from './assets/alfie-finish.png';
import GoldTrophy from './assets/gold-trophy.png'; import SilverTrophy from './assets/silver-trophy.png'; import BronzeTrophy from './assets/bronze-trophy.png'; import StarImage from './assets/star-image.png';

class Leaderboard extends Component {
    render () {
        return (
            <div className="container leaderboard-container">
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
                        <div className="lb-button lb-recap-button">
                            RECAP - get more points
                        </div>

                        {/* Finish Button */}
                        <div className="lb-button lb-finish-button">
                            FINISH
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Leaderboard;
