import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

import RocketImg from './assets/rocket-image.svg'; import BulbImg from '../../assets/lightbulb.svg';

const Questions = [
    {
        id: 1,
        text: 'Who were the forty-niners?',
        hint: {
            text: null,
            image: RocketImg,
        },
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
        id: 2,
        text: 'What is the nickname of the Harrier Jet?',
        hint: null,
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
        id: 3,
        text: 'What is the name of the space rocket you can see in our exhibition?',
        hint: null,
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
        id: 4,
        text: 'What was the name of the first missile designed at Filton?',
        hint: {
            text: 'The new supersonic car is named after it',
            image: BulbImg,
        },
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
]

class SectionSixQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionSixQuiz;
