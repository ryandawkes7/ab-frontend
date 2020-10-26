import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'How many seats are there on the Concorde?',
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
        text: 'How many Concordes were in use (not manufactured)?',
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
        id: 3,
        text: 'What was the top speed of Concorde?',
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

class SectionNineQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionNineQuiz;
