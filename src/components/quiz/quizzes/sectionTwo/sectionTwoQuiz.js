import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'What were planes first used for in World War 1?',
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
    {
        id: 4,
        text: 'Look at the image below. What is the correct order to show how a wooden propeller is made?',
        choices:[
            {
                id: 'a',
                text: '1, 2, 5, 6, 3, 4'
            },
            {
                id: 'b',
                text: '1, 3, 6, 4, 2, 5'
            },
            {
                id: 'c',
                text: '5, 1, 3, 6, 2, 4'
            },
            {
                id: 'd',
                text: '4, 2, 1, 3, 5, 6'
            }
        ],
        correct: 'c'
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
