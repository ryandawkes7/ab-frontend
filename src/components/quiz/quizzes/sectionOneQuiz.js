import React, {Component} from 'react';
import QuizFormat from "../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'How fast could the Boxkite go?',
        choices:[
            {
                id: 'a',
                text: 'Up to 30 miles per hour'
            },
            {
                id: 'b',
                text: 'Up to 40 miles per hour'
            },
            {
                id: 'c',
                text: 'Up to 50 miles per hour'
            },
            {
                id: 'd',
                text: 'Up to 60 miles per hour'
            }
        ],
        correct: 'c'
    },
    {
        id: 2,
        text: 'What were early planes made from?',
        choices:[
            {
                id: 'a',
                text: 'A wooden frame with a fabric covering'
            },
            {
                id: 'b',
                text: 'A metal frame with a fabric covering'
            },
            {
                id: 'c',
                text: 'A plastic frame with a fabric covering'
            },
            {
                id: 'd',
                text: 'A wooden frame with a plastic covering'
            }
        ],
        correct: 'a'
    },
    {
        id: 3,
        text: 'What made the Boxkite more successful than the Zodiac?',
        choices:[
            {
                id: 'a',
                text: 'Larger size so it could carry more people'
            },
            {
                id: 'b',
                text: 'More comfortable seating'
            },
            {
                id: 'c',
                text: 'Kites were attached to the top of the plane'
            },
            {
                id: 'd',
                text: '20% lighter structure'
            }
        ],
        correct: 'd'
    },
    {
        id: 4,
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
        correct: 'd'
    },
]

class SectionOneQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionOneQuiz;
