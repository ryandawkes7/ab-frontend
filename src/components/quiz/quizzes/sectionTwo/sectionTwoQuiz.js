import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

import CameraImg from './assets/camera.svg'; import CowImg from './assets/cow.svg';
import KiteImg from "../sectionOne/assets/kites.svg";

const Questions = [
    {
        id: 1,
        text: 'What were planes first used for in WWI?',
        hint: {
            text: null,
            image: CameraImg,
        },
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
        hint: null,
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
]

class SectionTwoQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionTwoQuiz;
