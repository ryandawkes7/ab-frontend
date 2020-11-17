import React, {Component, useState} from 'react';
import axios from 'axios';
import './quizStructure.css';
import { Link } from 'react-router-dom';

import Back from "../../backButton/back"; import HintButton from '../assets/hint-button.png'; import UserIcon from '../assets/user-icon.svg';
import CloseButton from '../assets/16/icon.png'; import BackdropBubble from '../assets/backdrop-bubble.png';

// Question Text/Answer Button Component
class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            hintPopup: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault(); //Prevents full refresh
        this.props.onChoiceChange(e.target.value);
    }

    toggleHintPopup() {
        this.setState({
            hintPopup: !this.state.hintPopup
        })
        console.log(this.state.hintPopup)
    }

    render(){
        const question = this.props.question; // Variable set to equal question from props
        const isHintShown = this.state.hintPopup;

        const HintPopup = () => {
            return(
                <div className="hint-popup-container">
                    <div className="h-p-box-container">
                        <div className="hpb-inner-container">

                            {/* Close Button */}
                            <div className="hpb-close-button">
                                <button onClick={() => this.toggleHintPopup()}>
                                    <img src={CloseButton} alt="Close Menu"/>
                                </button>
                            </div>

                            {/* Body Section */}
                            <div className="hpb-body-container">

                                {/* Title */}
                                <div className="hpdb-inner-container hpdb-title-container">
                                    HINT TIME!
                                </div>

                                {/* Image */}
                                <div className="hpdb-inner-container hpdb-image-container">

                                    <div className="hpdbi-bubble">
                                        <img src={BackdropBubble} />
                                    </div>

                                    <div className="hpdbi-image">
                                        <img src={question.hint.image} />
                                    </div>

                                </div>

                                {/* Description */}
                                {
                                    question.hint.text !== null &&
                                    <div className="hpdb-inner-container hpdb-description-container">
                                        { question.hint.text }
                                    </div>
                                }


                                {/* Button */}
                                <div className="hpdb-inner-container hpdb-button-container">
                                    <button className="hpdb-button" onClick={() => this.toggleHintPopup()}>
                                        OK
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div>

                {/* Hint Popup*/}
                {
                    isHintShown === true &&
                    <HintPopup/>
                }

                {/* Question Layout */}
                <div className="question-component">
                    {question.text}
                </div>
                <div className="answer-container">
                    { question.choices.map(choice => {
                        return(
                                <button
                                    type="submit"
                                    onClick={this.handleChange}
                                    name={question.id}
                                    value={choice.id}
                                    className="answer-btn"
                                >
                                    {choice.text}
                                </button>
                        )
                    })}
                    {
                        question.hint !== null &&
                    <button className="hint-btn" onClick={() => this.toggleHintPopup()}>
                        <img src={HintButton} alt="Hint Button"/>
                    </button>
                    }
                </div>
            </div>
        )
    }
}


class Results extends Component {
    constructor (props) {
        super(props);
        this.state = {
            overallScore: 0,
            usersDetails: ''
        }
    }

    overallScore = () => {
        this.setState((prevState, props) => ({
            overallScore: (prevState.overallScore + props.score)
        }))
    }

    handleSubmit = (event) => {

        const payload = {
            score: this.props.score
        }

        axios({
            url: 'api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data sent to server')
            })
            .catch(() => {
                console.log('ISE: Error sending data to server')
            })
    }

    componentDidMount () {
        this.overallScore()

        axios.get('api/')
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error, 'Internal Server Error')
            })
    }

    render(){
        return(
            <div className="results-absolute">
                <div className="results-container">
                    <div className="results-cont results-img">
                        <img src={UserIcon} alt=""/>
                    </div>

                    <div className="results-cont results-text">
                        <h3>+{this.state.overallScore} points!</h3>
                        <h4>Congratulations!</h4>
                    </div>

                    <div className="results-cont results-link">
                        <Link
                            to="/game-menu"
                            className="quiz-return-btn"
                            onClick={this.handleSubmit}
                        >
                            <h4>OK</h4>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
// End of Results Component

// Final Quiz Format Section
export default class QuizFormat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            current: 1,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(choice){
        this.setState((prevState, props) => ({
            current: prevState.current + 1,
            score: choice === props.questions[prevState.current - 1].correct ? prevState.score + 50 : prevState.score,
        }));
    }

    render () {
        const questions = this.props.questions;
        const randomQuestion = questions[Math.floor(Math.random() * questions.length )]

        return (
            <div className="quiz-container">
                <Back id="backButton"/>
                {this.state.current >= 2 &&
                    <Results
                        total={questions.length}
                        score={this.state.score}
                        overallScore={this.state.overallScore}
                    />
                }


                {this.state.current <= 1 &&
                    <Question
                        question={randomQuestion}
                        onChoiceChange={this.handleChange}
                    />
                }

            </div>
        );
    }
}


// End of Final Quiz Format Section
