import React, {Component} from 'react';
import QuizFormat from "../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'What is my name?',
        choices:[
            {
                id: 'a',
                text: 'Ryan'
            },
            {
                id: 'b',
                text: 'Michael'
            },
            {
                id: 'c',
                text: 'James'
            },
            {
                id: 'd',
                text: 'Reece'
            }
        ],
        correct: 'a'
    },
    {
        id: 2,
        text: 'What is this museum called?',
        choices:[
            {
                id: 'a',
                text: 'Bristol Museum'
            },
            {
                id: 'b',
                text: 'Bristol Aerospace Museum'
            },
            {
                id: 'c',
                text: 'Aviation Museum'
            },
            {
                id: 'd',
                text: 'Bristol'
            }
        ],
        correct: 'b'
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
