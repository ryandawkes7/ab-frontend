import React, {Component} from 'react';
import QuizFormat from "../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'When was Aerospace Bristol established?',
        choices:[
            {
                id: 'a',
                text: '2016'
            },
            {
                id: 'b',
                text: '2015'
            },
            {
                id: 'c',
                text: '2017'
            },
            {
                id: 'd',
                text: '2018'
            }
        ],
        correct: 'c'
    },
    {
        id: 2,
        text: 'When did the first World War begin?',
        choices:[
            {
                id: 'a',
                text: '1910'
            },
            {
                id: 'b',
                text: '1914'
            },
            {
                id: 'c',
                text: '1916'
            },
            {
                id: 'd',
                text: '1912'
            }
        ],
        correct: 'b'
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
