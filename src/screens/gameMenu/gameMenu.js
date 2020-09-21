import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './gameMenu.css';
import Back from "../../components/backButton/back";

class GameMenu extends Component {
    render () {
        return (
            <div className="game-menu-container">
                <Back />
                <div className="gm-link-container">
                    {/* GenericQuiz Link Section */}
                    <Link
                        to="/quiz"
                        className="basic-btn quiz-btn"
                    >
                        <h3>Quiz</h3>
                    </Link>
                    <Link
                        to="/game"
                        className="basic-btn game-btn"
                    >
                        <h3>Game</h3>
                    </Link>
                    <Link
                        to="/fact"
                        className="basic-btn fact-btn"
                    >
                        <h3>Fact</h3>
                    </Link>
                    {/* End of GenericQuiz Link Section */}
                </div>

            </div>
        );
    }
}

export default GameMenu;
