import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
        text: 'How fast could the Boxkite aeroplane go?',
        choices:[
            {
                id: 'a',
                text: 'up to 150 mph'
            },
            {
                id: 'b',
                text: 'up to 50 mph'
            },
            {
                id: 'c',
                text: 'up to 20 mph'
            },
            {
                id: 'd',
                text: 'up to 85 mph'
            }
        ],
        correct: 'b'
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
