import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'How many Brabazon\'s were made?',
        choices:[
            {
                id: 'a',
                text: '100'
            },
            {
                id: 'b',
                text: '1'
            },
            {
                id: 'c',
                text: '20'
            },
            {
                id: 'd',
                text: '5'
            }
        ],
        correct: 'b'
    },
    {
        id: 2,
        text: 'Which Bristol enging powered Donald Campbell\'s Bluebird CN7 car when it broke the landspeed record in 1964?',
        choices:[
            {
                id: 'a',
                text: 'Hercules'
            },
            {
                id: 'b',
                text: 'Orpheus'
            },
            {
                id: 'c',
                text: 'Proteus'
            },
            {
                id: 'd',
                text: 'Olympus'
            }
        ],
        correct: 'c'
    },
]

class SectionFiveQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionFiveQuiz;
