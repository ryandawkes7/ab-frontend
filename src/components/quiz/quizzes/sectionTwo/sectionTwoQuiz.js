import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'In what order was the propeller designed?',
        choices:[
            {
                id: 'a',
                text: '5, 2, 4, 3, 6, 1'
            },
            {
                id: 'b',
                text: '5, 1, 3, 6, 2, 4'
            },
            {
                id: 'c',
                text: '4, 5, 2, 6, 3, 1'
            },
            {
                id: 'd',
                text: '5, 2, 3, 4, 6, 1'
            }
        ],
        correct: 'b'
    },
    {
        id: 2,
        text: 'How were propellers originally made?',
        choices:[
            {
                id: 'a',
                text: 'Designed with steel from factories'
            },
            {
                id: 'b',
                text: 'Manufacturing plastic'
            },
            {
                id: 'c',
                text: 'Attaching planks of wood'
            },
            {
                id: 'd',
                text: 'Hand carved from wood'
            }
        ],
        correct: 'd'
    },
    {
        id: 3,
        text: 'How were workers symptoms, who were ‘doping’ planes fabric, treated?',
        choices:[
            {
                id: 'a',
                text: 'Drinking milk'
            },
            {
                id: 'b',
                text: 'Medicine'
            },
            {
                id: 'c',
                text: 'Natural remedies'
            },
            {
                id: 'd',
                text: 'They were not treated'
            }
        ],
        correct: 'a'
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
