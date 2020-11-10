import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";
import BulbImg from '../../assets/lightbulb.svg';

const Questions = [
    {
        id: 1,
        text: 'How many Brabazon\'s were made?',
        hint: {
            text: 'How many can you see hanging from the ceiling?',
            image: BulbImg,
        },
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
        text: 'Which Bristol engine powered Donald Campbell\'s Bluebird CN7 car when it broke the land speed record in 1964?',
        hint: null,
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
