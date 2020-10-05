import React, {Component} from 'react';
import QuizFormat from "../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'What is stored below the floor in commercial airplanes?',
        choices:[
            {
                id: 'a',
                text: 'Engine Parts'
            },
            {
                id: 'b',
                text: 'Passenger\'s Luggage'
            },
            {
                id: 'c',
                text: 'Cabin Crew'
            },
            {
                id: 'd',
                text: 'Passengers'
            }
        ],
        correct: 'b'
    },
    {
        id: 2,
        text: 'Which single-aisle aircraft family is the world’s best-selling one?',
        choices:[
            {
                id: 'a',
                text: 'The C320 Family'
            },
            {
                id: 'b',
                text: 'The B320 Group'
            },
            {
                id: 'c',
                text: 'The D320 Family'
            },
            {
                id: 'd',
                text: 'The A320 Family'
            }
        ],
        correct: 'd'
    },
]

class SectionSevenQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionSevenQuiz;
