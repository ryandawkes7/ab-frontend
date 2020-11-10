import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

import BulbImg from '../../assets/lightbulb.svg'; import TeamImg from './assets/Nakajima-team.png'; import ChileImg from './assets/chile-image.png'; import AltitudeImg from './assets/altitude-image.png';

const Questions = [
    {
        id: 1,
        text: 'What does the rudder on an aeroplane do?',
        hint: {
            text: 'Have a go on the plane steering simulator to find the answer!',
            image: BulbImg,
        },
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
        hint: {
            text: 'The answer is near the lorry!',
            image: BulbImg,
        },
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
        hint: {
            text: 'Find the photo of the Nakajima team',
            image: TeamImg,
        },
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
        hint: {
            text: 'Look for an answer at the models in the big wall display',
            image: ChileImg,
        },
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
        hint: {
            text: 'Look for an answer at the models in the big wall display',
            image: AltitudeImg,
        },
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
