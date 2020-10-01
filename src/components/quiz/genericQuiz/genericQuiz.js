import React, {Component} from 'react';
import './genericQuiz.css';
import { Link } from 'react-router-dom';
import Back from "../../backButton/back";
import HintButton from '../assets/hint-button.svg';
import UserIcon from '../assets/user-icon.svg';

// Question Text/Answer Button Component
class Question extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault(); //Prevents full refresh
        this.props.onChoiceChange(e.target.value);
    }

    render(){
        const question = this.props.question; // Variable set to equal question from props

        return(
            <div>
                <div className="question-component">
                    <h3>{question.text}</h3>
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
                    <img
                        src={HintButton}
                        alt=""
                        className="hint-btn"
                    />
                </div>
            </div>
        )
    }
}
// End of Question Text/Answer Button Component


// Results Component
class Scorebox extends Component {
    render(){
        return(
            <div className="well">
                Question {this.props.current} out of {this.props.total}
                <span className="pull-right"><strong>Score: {this.props.score}</strong></span>
            </div>
        )
    }
}

class Results extends Component {
    render(){
        const score = this.props.score;
        const total = this.props.total;
        const percent = score/total*100;
        var message = 'You passed the quiz!';
        var link = <Link to="/game-menu">Back to Menu</Link>

        return(
            <div className="results-absolute">
                <div className="results-container">
                    <div className="results-cont results-img">
                        <img src={UserIcon} alt=""/>
                    </div>

                    <div className="results-cont results-text">
                        <h3>+{score} points!</h3>
                        <h4>Congratulations!</h4>
                    </div>

                    <div className="results-cont results-link">
                        <Link to="/game-menu" className="quiz-return-btn">
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
class QuizFormat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            current: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(choice){
        this.setState((prevState, props) => ({
            current: prevState.current + 1,
            score: choice === props.questions[prevState.current - 1].correct ? prevState.score + 1 : prevState.score
        }));
    }

    render () {
        const questions = this.props.questions;

        return (
            <div className="quiz-container">
                <Back id="backButton"/>
                {this.state.current > questions.length &&
                    <Results total={questions.length} score={this.state.score}/>
                }

                {this.state.current <= questions.length &&
                    <Scorebox total={questions.length} current={this.state.current} score={this.state.score}/>
                }

                {this.state.current <= questions.length &&
                    <Question
                        question={questions[this.state.current - 1]}
                        onChoiceChange={this.handleChange}
                    />
                }

            </div>
        );
    }
}
// End of Final Quiz Format Section


var QUESTIONS= [
    {
        id: 1,
        text: 'What is my name?',
        choices:[
            {
                id: 'a',
                text: 'Ryan'
            },
            {
                id: 'b',
                text: 'Michael'
            },
            {
                id: 'c',
                text: 'James'
            },
            {
                id: 'd',
                text: 'Reece'
            }
        ],
        correct: 'a'
    },
    {
        id: 2,
        text: 'What is this museum called?',
        choices:[
            {
                id: 'a',
                text: 'Bristol Museum'
            },
            {
                id: 'b',
                text: 'Bristol Aerospace Museum'
            },
            {
                id: 'c',
                text: 'Aviation Museum'
            },
            {
                id: 'd',
                text: 'Bristol'
            }
        ],
        correct: 'b'
    },
]

export default class GenericQuiz extends Component {
    render() {
        return(
            <QuizFormat questions={QUESTIONS}/>
        )
    }
}
