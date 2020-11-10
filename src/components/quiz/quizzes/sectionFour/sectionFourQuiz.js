import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";
import BulbImg from  "../../assets/lightbulb.svg"; import FactoryImg from './assets/factory-image.svg'; import AirportImg from './assets/airport-image.svg'; import BadgeImg from './assets/badge-image.svg';

const Questions = [
    {
        id: 1,
        text: 'What were Bristol engines named after?',
        hint: {
            text: 'Engine names include Hercules, Pegassus, Thor and Odin',
            image: BulbImg,
        },
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
        id: 2,
        text: 'What was painted on the roof of the factory during WW2?',
        hint: null,
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
        id: 3,
        text: 'What was the nickname given to the Bristol Beaufighter by the Japanese?',
        hint: {
            text: 'The Beaufighter was a very quiet bomber',
            image: BulbImg,
        },
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
        id: 4,
        text: 'What were the secret factories created during WW2 called?',
        hint: null,
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
        id: 5,
        text: 'What was happening in Fry\'s Chocolate Factory during WW2?',
        hint: {
            text: 'Find the dispersal sites section and reveal the answer',
            image: FactoryImg,
        },
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
        id: 6,
        text: 'What was happening in Whitchurch Airport?',
        hint: {
            text: 'Find the dispersal sites sectio nand reveal the answer',
            image: AirportImg,
        },
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
        id: 7,
        text: 'What does 501 Squadron\'s motto "Nil Time" mean?',
        hint: {
            text: 'Find 501 Squadron\'s badge, the answer is nearby!',
            image: BadgeImg,
        },
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
]

class SectionFourQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionFourQuiz;
