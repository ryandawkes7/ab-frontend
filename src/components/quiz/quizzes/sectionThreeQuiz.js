import React, {Component} from 'react';
import QuizFormat from "../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'Which plane was intended to demonstrate Bristol’s new Jupiter engine?',
        choices:[
            {
                id: 'a',
                text: 'Bristol No. 72 Dasher'
            },
            {
                id: 'b',
                text: 'Bristol Type 72 Runner'
            },
            {
                id: 'c',
                text: 'Bristol Type 72 Racer'
            },
            {
                id: 'd',
                text: 'Bristol Type 62 Runner'
            }
        ],
        correct: 'c'
    },
    {
        id: 2,
        text: 'Which plane was used for training at Filton’s flying school?',
        choices:[
            {
                id: 'a',
                text: 'Bristol Type 89 Mars Trainer'
            },
            {
                id: 'b',
                text: 'Bristol Type 89 Earth Trainer'
            },
            {
                id: 'c',
                text: 'Bristol Type 89 Pluto Trainer'
            },
            {
                id: 'd',
                text: 'Bristol Type 89 Jupiter Trainer'
            }
        ],
        correct: 'd'
    },
]

class SectionThreeQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionThreeQuiz;
