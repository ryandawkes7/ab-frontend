import React, {Component} from 'react';
import './factFormat.css';
import { Link } from 'react-router-dom';
import UserIcon from "../quiz/assets/user-icon.svg";

class FactComponent extends Component{
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.props.onNextButton(e.target.value);
    }

    render () {
        const fact = this.props.fact;

        return(
            <div className="container fact-screen-container">
                { fact.options.map(next => {
                    return(
                        <div className="inner-container fact-inner-container">
                            <h2>Did You Know?</h2>

                            { next.image !== '' &&
                                <div className="fact-image">
                                    <img src={ next.image } alt=""/>
                                </div>
                                || null
                            }

                            <div className="fact-description" value={next.text}>
                                <p>{next.text}</p>
                            </div>
                            <Link
                                to='/game-menu'
                                className="basic-btn fact-button"
                                onClick={this.handleChange}
                                name={fact.id}
                                value={next.id}
                            >
                                <h3>Next</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class Results extends Component {

    constructor (props) {
        super(props);
        this.state = {
            overallScore: 0
        }
    }

    overallScore = () => {
        this.setState((prevState, props) => ({
            overallScore: (prevState.overallScore + props.score)
        }))
    }

    handleSubmit = (e) => {
        const payload = {
            score: this.props.score
        }
    }

    render() {
        return (
            <div className="results-absolute">
                <div className="results-container">
                    <div className="results-cont results-img">
                        <img src={UserIcon} alt=""/>
                    </div>

                    <div className="results-cont results-text">
                        <h3>+{this.state.score} points!</h3>
                        <h4>Congratulations!</h4>
                    </div>

                    <div className="results-cont results-link">
                        <Link
                            to="/game-menu"
                            className="quiz-return-btn"
                        >
                            <h4>OK</h4>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default class FactFormat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            current: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState((prevState) => ({
            current: prevState.current + 1,
            score: prevState.score + 50
        }))
    }

    render () {
        const facts = this.props.facts;
        const randomFact = facts[Math.floor(Math.random() * facts.length )]

        return (
            <div className="container fact-container">

                {this.state.current <= facts.length &&
                    <FactComponent
                        fact={randomFact}
                        onNextButton={this.handleChange}
                    />
                }

                {this.state.current >= 2 &&
                    <Results
                        score={this.state.score}
                    />
                }
            </div>
        );
    }
}
