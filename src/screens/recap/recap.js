import React, {Component} from 'react'; import './recap.css';
import axios from "axios";
import UserIcon from "../../components/quiz/assets/user-icon.svg";
import {Link} from "react-router-dom";
import Back from "../../components/backButton/back";
import CowImg from "../../components/quiz/quizzes/sectionTwo/assets/cow.svg";

// Question Screen
class RecapQuestion extends Component {
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

    render(){
        const question = this.props.question; // Variable set to equal question from props

        return(
            <div>

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
                </div>
            </div>
        )
    }
}

// Results Screen
class RecapResults extends Component {
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
                            to="/leaderboard"
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

// Recap Section
class Recap extends Component {
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

                {/* Results */}
                {this.state.current > 3 &&
                    <RecapResults
                        total={questions.length}
                        score={this.state.score}
                        overallScore={this.state.overallScore}
                    />
                }

                {/* Question */}
                {this.state.current <= 3 &&
                    <RecapQuestion
                        question={randomQuestion}
                        onChoiceChange={this.handleChange}
                    />
                }

            </div>
        );
    }
}

// Questions (JSON)
const RecapQuestions = [
    {
        id: 1,
        text: 'What were planes first used for in WWI?',
        choices:[
            {
                id: 'a',
                text: 'Spying on enemy troops'
            },
            {
                id: 'b',
                text: 'Battling each other'
            },
            {
                id: 'c',
                text: 'Transporting equipment'
            },
            {
                id: 'd',
                text: 'Dropping bombs'
            }
        ],
        correct: 'a'
    },
    {
        id: 2,
        text: 'Who designed the Bristol Fighter?',
        choices:[
            {
                id: 'a',
                text: 'The Red Baron'
            },
            {
                id: 'b',
                text: 'Captain Frank Barnwell'
            },
            {
                id: 'c',
                text: 'Field Marshall Haig'
            },
            {
                id: 'd',
                text: 'Sir George White'
            }
        ],
        correct: 'b'
    },
    {
        id: 3,
        text: 'WW1 workers painted the plane\'s fabric with \'dope\', which made them ill. What did they drink to feel better?',
        hint: {
            text: null,
            image: CowImg,
        },
        choices:[
            {
                id: 'a',
                text: 'Water'
            },
            {
                id: 'b',
                text: 'Orange Juice'
            },
            {
                id: 'c',
                text: 'Coffee'
            },
            {
                id: 'd',
                text: 'Milk'
            }
        ],
        correct: 'd'
    },
    {
        id: 4,
        text: 'Who made the first flight in an aeroplane?',
        choices:[
            {
                id: 'a',
                text: 'The Cohen Bros.'
            },
            {
                id: 'b',
                text: 'Amelia Earhart'
            },
            {
                id: 'c',
                text: 'The Wright Bros.'
            },
            {
                id: 'd',
                text: 'The Montgolfier Bros.'
            }
        ],
        correct: 'c'
    },
    {
        id: 5,
        text: 'What was the name of the man who started the Bristol Aeroplane Company?',
        choices:[
            {
                id: 'a',
                text: 'Orville Wright'
            },
            {
                id: 'b',
                text: 'Neil Armstrong'
            },
            {
                id: 'c',
                text: 'Isambard Kingdom Brunel'
            },
            {
                id: 'd',
                text: 'Sir George White'
            }
        ],
        correct: 'd'
    },
    {
        id: 6,
        text: 'What was the first plane designed and built in Bristol?',
        choices:[
            {
                id: 'a',
                text: 'The Zodiac'
            },
            {
                id: 'b',
                text: 'The Boxkite'
            },
            {
                id: 'c',
                text: 'The Scout'
            },
            {
                id: 'd',
                text: 'The Wright Flyer'
            }
        ],
        correct: 'b'
    },
    {
        id: 7,
        text: 'What were the first planes made out of?',
        choices:[
            {
                id: 'a',
                text: 'Wooden frame and fabric cover'
            },
            {
                id: 'b',
                text: 'Aluminium frame and fabric cover'
            },
            {
                id: 'c',
                text: 'Plastic sheets'
            },
            {
                id: 'd',
                text: 'Iron frame and fabric cover'
            }
        ],
        correct: 'a'
    },
    {
        id: 8,
        text: 'What was the fabric covering known as?',
        choices:[
            {
                id: 'a',
                text: 'French Blanket'
            },
            {
                id: 'b',
                text: 'Australian Throw'
            },
            {
                id: 'c',
                text: 'Egyptian Cloth'
            },
            {
                id: 'd',
                text: 'British Quilt'
            }
        ],
        correct: 'c'
    },
    {
        id: 9,
        text: 'What does the rudder on an aeroplane do?',
        choices:[
            {
                id: 'a',
                text: 'Move it up and down'
            },
            {
                id: 'b',
                text: 'Move it left and right'
            },
            {
                id: 'c',
                text: 'Help it roll over'
            },
            {
                id: 'd',
                text: 'Keep the pilot cool'
            }
        ],
        correct: 'b'
    },
    {
        id: 10,
        text: 'Bristol Aeroplane Company bought Filton Airfield from the Air Ministry at the end of WW1. How much did it cost?',
        choices:[
            {
                id: 'a',
                text: '£625'
            },
            {
                id: 'b',
                text: '£6,250'
            },
            {
                id: 'c',
                text: '£62,500'
            },
            {
                id: 'd',
                text: '£625,000'
            }
        ],
        correct: 'c'
    },
    {
        id: 11,
        text: 'The Nakajima Company built Jupiter Engines with a licence and plans they bought from Bristol. What country were they from?',
        choices:[
            {
                id: 'a',
                text: 'Japan'
            },
            {
                id: 'b',
                text: 'Indonesia'
            },
            {
                id: 'c',
                text: 'Italy'
            },
            {
                id: 'd',
                text: 'Korea'
            }
        ],
        correct: 'a'
    },
    {
        id: 12,
        text: 'Which model is of a plane that was sold to Chile and Hungary?',
        choices:[
            {
                id: 'a',
                text: 'Bristol Type 89'
            },
            {
                id: 'b',
                text: 'Bristol Type 72'
            },
            {
                id: 'c',
                text: 'Bristol Type 138A'
            },
            {
                id: 'd',
                text: 'Bristol Type 83B'
            }
        ],
        correct: 'd'
    },
    {
        id: 13,
        text: 'Which model is of a plane that set an altitude record in 1936?',
        choices:[
            {
                id: 'a',
                text: 'Bristol Type 138A'
            },
            {
                id: 'b',
                text: 'Bristol Type 89'
            },
            {
                id: 'c',
                text: 'Bristol Type 83B'
            },
            {
                id: 'd',
                text: 'Bristol Type 72'
            }
        ],
        correct: 'a'
    },
    {
        id: 14,
        text: 'What were Bristol engines named after?',
        choices:[
            {
                id: 'a',
                text: 'Stars'
            },
            {
                id: 'b',
                text: 'Rivers'
            },
            {
                id: 'c',
                text: 'Characters from myths and legends'
            },
            {
                id: 'd',
                text: 'Famous people'
            }
        ],
        correct: 'c'
    },
    {
        id: 15,
        text: 'What was painted on the roof of the factory during WW2?',
        choices:[
            {
                id: 'a',
                text: 'Positive message for the workers'
            },
            {
                id: 'b',
                text: 'Camouflage'
            },
            {
                id: 'c',
                text: 'Blackout'
            },
            {
                id: 'd',
                text: 'Company logo'
            }
        ],
        correct: 'b'
    },
    {
        id: 16,
        text: 'What was the nickname given to the Bristol Beaufighter by the Japanese?',
        choices:[
            {
                id: 'a',
                text: 'Deadly wing'
            },
            {
                id: 'b',
                text: 'Whispering death'
            },
            {
                id: 'c',
                text: 'Silent wing'
            },
            {
                id: 'd',
                text: 'Whispering one'
            }
        ],
        correct: 'b'
    },
    {
        id: 17,
        text: 'What were the secret factories created during WW2 called?',
        choices:[
            {
                id: 'a',
                text: 'Shadow factories'
            },
            {
                id: 'b',
                text: 'Ghost factories'
            },
            {
                id: 'c',
                text: 'Underground factories'
            },
            {
                id: 'd',
                text: 'Mystery factories'
            }
        ],
        correct: 'a'
    },
    {
        id: 18,
        text: 'What was happening in Fry\'s Chocolate Factory during WW2?',
        choices:[
            {
                id: 'a',
                text: 'Aircraft assembly'
            },
            {
                id: 'b',
                text: 'Engine assembly'
            },
            {
                id: 'c',
                text: 'Engine testing'
            },
            {
                id: 'd',
                text: 'Engine design and component making'
            }
        ],
        correct: 'd'
    },
    {
        id: 19,
        text: 'What was happening in Whitchurch Airport?',
        choices:[
            {
                id: 'a',
                text: 'Aircraft assembly'
            },
            {
                id: 'b',
                text: 'Aircraft component making'
            },
            {
                id: 'c',
                text: 'Engine assembly'
            },
            {
                id: 'd',
                text: 'Gun turrets'
            }
        ],
        correct: 'a'
    },
    {
        id: 20,
        text: 'What does 501 Squadron\'s motto "Nil Time" mean?',
        choices:[
            {
                id: 'a',
                text: 'Nothing changes'
            },
            {
                id: 'b',
                text: 'Hurry up'
            },
            {
                id: 'c',
                text: 'Fear nothing'
            },
            {
                id: 'd',
                text: 'No time'
            }
        ],
        correct: 'c'
    },
    {
        id: 21,
        text: 'How many Brabazon\'s were made?',
        choices:[
            {
                id: 'a',
                text: '100'
            },
            {
                id: 'b',
                text: '1'
            },
            {
                id: 'c',
                text: '20'
            },
            {
                id: 'd',
                text: '5'
            }
        ],
        correct: 'b'
    },
    {
        id: 22,
        text: 'Which Bristol engine powered Donald Campbell\'s Bluebird CN7 car when it broke the land speed record in 1964?',
        choices:[
            {
                id: 'a',
                text: 'Hercules'
            },
            {
                id: 'b',
                text: 'Orpheus'
            },
            {
                id: 'c',
                text: 'Proteus'
            },
            {
                id: 'd',
                text: 'Olympus'
            }
        ],
        correct: 'c'
    },
    {
        id: 23,
        text: 'Who were the forty-niners?',
        choices:[
            {
                id: 'a',
                text: 'Bristol\'s Baseball team'
            },
            {
                id: 'b',
                text: 'Everyone who graduated from Bristol training school in 1949'
            },
            {
                id: 'c',
                text: 'Bristol\'s first jet engine design team'
            },
            {
                id: 'd',
                text: 'Bristol\'s first guided weapons development team'
            }
        ],
        correct: 'd'
    },
    {
        id: 24,
        text: 'What is the nickname of the Harrier Jet?',
        choices:[
            {
                id: 'a',
                text: 'Hop Jet'
            },
            {
                id: 'b',
                text: 'Jump Jet'
            },
            {
                id: 'c',
                text: 'Spring Jet'
            },
            {
                id: 'd',
                text: 'Bounce Jet'
            }
        ],
        correct: 'b'
    },
    {
        id: 25,
        text: 'What is the name of the space rocket you can see in our exhibition?',
        choices:[
            {
                id: 'a',
                text: 'Skylark'
            },
            {
                id: 'b',
                text: 'Cuckoo'
            },
            {
                id: 'c',
                text: 'Black Arrow'
            },
            {
                id: 'd',
                text: 'Blue Jay'
            }
        ],
        correct: 'a'
    },
    {
        id: 26,
        text: 'What was the name of the first missile designed at Filton?',
        choices:[
            {
                id: 'a',
                text: 'Thunderbird'
            },
            {
                id: 'b',
                text: 'Fireflash'
            },
            {
                id: 'c',
                text: 'Poodle'
            },
            {
                id: 'd',
                text: 'Bloodhound'
            }
        ],
        correct: 'd'
    },
    {
        id: 27,
        text: 'Where does the luggage go when you are on a plane?',
        choices:[
            {
                id: 'a',
                text: 'In the roof'
            },
            {
                id: 'b',
                text: 'In the wings'
            },
            {
                id: 'c',
                text: 'Underneath the floor'
            },
            {
                id: 'd',
                text: 'In the tail'
            }
        ],
        correct: 'c'
    },
    {
        id: 28,
        text: 'Find the A320 cockpit. Spot the difference between the real cockpit and the picture below',
        choices:[
            {
                id: 'a',
                text: 'The C320 Family'
            },
            {
                id: 'b',
                text: 'The B320 Group'
            },
            {
                id: 'c',
                text: 'The D320 Family'
            },
            {
                id: 'd',
                text: 'The A320 Family'
            }
        ],
        correct: 'd'
    },
    {
        id: 29,
        text: 'How many passengers can go on Concorde Alpha Foxtrot at once?',
        choices:[
            {
                id: 'a',
                text: '300'
            },
            {
                id: 'b',
                text: '50'
            },
            {
                id: 'c',
                text: '150'
            },
            {
                id: 'd',
                text: '100'
            }
        ],
        correct: 'd'
    },
    {
        id: 30,
        text: 'How many Concordes were made?',
        choices:[
            {
                id: 'a',
                text: '100'
            },
            {
                id: 'b',
                text: '5'
            },
            {
                id: 'c',
                text: '20'
            },
            {
                id: 'd',
                text: '40'
            }
        ],
        correct: 'c'
    },
    {
        id: 31,
        text: 'Which two countries worked together to make the Concorde?',
        choices:[
            {
                id: 'a',
                text: 'UK & Germany'
            },
            {
                id: 'b',
                text: 'UK & USA'
            },
            {
                id: 'c',
                text: 'UK & Russia'
            },
            {
                id: 'd',
                text: 'UK & France'
            }
        ],
        correct: 'd'
    },
]

export default class RecapQuiz extends Component {
    render() {
        return (
            <div>
                <Recap questions={RecapQuestions} />
            </div>
        )
    }
}
