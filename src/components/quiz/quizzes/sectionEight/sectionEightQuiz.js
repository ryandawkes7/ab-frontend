import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'Question for the user?',
        choices:[
            {
                id: 'a',
                text: 'Correct'
            },
            {
                id: 'b',
                text: 'Incorrect'
            },
            {
                id: 'c',
                text: 'Incorrect'
            },
            {
                id: 'd',
                text: 'Incorrect'
            }
        ],
        correct: 'a'
    },
    {
        id: 2,
        text: 'Question for the user?',
        choices:[
            {
                id: 'a',
                text: 'Correct'
            },
            {
                id: 'b',
                text: 'Incorrect'
            },
            {
                id: 'c',
                text: 'Incorrect'
            },
            {
                id: 'd',
                text: 'Incorrect'
            }
        ],
        correct: 'a'
    },
]

class SectionEightQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionEightQuiz;
