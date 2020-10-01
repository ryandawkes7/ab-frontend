import React, {Component} from 'react';
import './fact.css';
import { Link } from 'react-router-dom';
import KiteImg from './assets/fact-image.svg';

export default class Fact extends Component {

    state = {
        facts: [
            {
                id: 1,
                text: "Bristol Boxkite worked by producing lift and drag forces with its wings. Just like the kites you can fly in the air!"
            }
        ]
    }

    render () {
        return (
            <div className="container fact-container">
                {/* Inner Container Section */}
                <div className="inner-container fact-inner-container">
                    <h2>Did you know?</h2> {/* Title Section */}

                    {/* Fact Image Section */}
                    <div className="fact-image">
                        <img src={KiteImg} alt="" />
                    </div>
                    {/* End of Fact Image Section */}

                    {/* Fact Description Section */}
                    <div className="fact-description">
                        <p>{this.state.facts[0].text}</p>
                    </div>
                    {/* End of Fact Description Section */}

                    {/* Confirmation Button */}
                    <Link to='/game-menu' className="basic-btn fact-button">
                        <h3>OK</h3>
                    </Link>
                    {/* End of Confirmation Button */}

                </div>
                {/* End of Inner Container Section */}
            </div>
        );
    }
}
