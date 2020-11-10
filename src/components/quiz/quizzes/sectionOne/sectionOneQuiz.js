import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

import BulbImg from '../../assets/lightbulb.svg'; import KiteImg from './assets/kites.svg'; import PyramidImg from './assets/pyramid.svg';

const Questions = [
    {
        id: 1,
        text: 'Who made the first flight in an aeroplane?',
        hint: {
            text: 'They are not wrong!',
            image: BulbImg,
        },
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
        id: 2,
        text: 'What was the name of the man who started the Bristol Aeroplane Company?',
        hint: {
            text: 'Look for his picture opposite the tram!',
            image: BulbImg,
        },
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
        id: 3,
        text: 'What was the first plane designed and built in Bristol?',
        hint: {
            text: null,
            image: KiteImg,
        },
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
        id: 4,
        text: 'What were the first planes made out of?',
        hint: {
            text: 'Look up at the model Boxkite',
            image: BulbImg,
        },
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
        id: 5,
        text: 'What was the fabric covering known as?',
        hint: {
            text: null,
            image: PyramidImg,
        },
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
]

class SectionOneQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat
                    questions={Questions}
                />
            </div>
        );
    }
}

export default SectionOneQuiz;
