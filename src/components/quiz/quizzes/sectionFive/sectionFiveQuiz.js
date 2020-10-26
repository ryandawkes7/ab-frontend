import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'When did the transition to gas turbine manufacturing happen?',
        choices:[
            {
                id: 'a',
                text: 'Late 1950s'
            },
            {
                id: 'b',
                text: 'Late 1960s'
            },
            {
                id: 'c',
                text: 'Late 1930s'
            },
            {
                id: 'd',
                text: 'Late 1940s'
            }
        ],
        correct: 'd'
    },
    {
        id: 2,
        text: 'WWhich brand\'s technology Cars Division acquired rights to in 1946?',
        choices:[
            {
                id: 'a',
                text: 'BMW'
            },
            {
                id: 'b',
                text: 'Mercedes'
            },
            {
                id: 'c',
                text: 'Ford'
            },
            {
                id: 'd',
                text: 'Volkswagen'
            }
        ],
        correct: 'a'
    },
    {
        id: 3,
        text: 'What was the top speed of the Bristol 403 Car?',
        choices:[
            {
                id: 'a',
                text: '84mph'
            },
            {
                id: 'b',
                text: '94mph'
            },
            {
                id: 'c',
                text: '104mph'
            },
            {
                id: 'd',
                text: '114mph'
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
