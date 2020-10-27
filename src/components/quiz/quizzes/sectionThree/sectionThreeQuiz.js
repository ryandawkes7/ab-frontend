import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
        text: 'How many air forces used Bristol Bulldogs?',
        choices:[
            {
                id: 'a',
                text: '2'
            },
            {
                id: 'b',
                text: '4'
            },
            {
                id: 'c',
                text: '6'
            },
            {
                id: 'd',
                text: '8'
            }
        ],
        correct: 'd'
    },
]

class SectionThreeQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionThreeQuiz;
