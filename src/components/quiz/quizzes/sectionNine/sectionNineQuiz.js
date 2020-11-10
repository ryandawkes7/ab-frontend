import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";
import BulbImg from '../../assets/lightbulb.svg'; import FlagImg from './assets/flags-image.svg';

const Questions = [
    {
        id: 1,
        text: 'How many passengers can go on Concorde Alpha Foxtrot at once?',
        hint: {
            text: 'Stay downstairs and watch the projection show to find out',
            image: BulbImg,
        },
        choices:[
            {
                id: 'a',
                text: '300'
            },
            {
                id: 'b',
                text: '50'
            },
            {
                id: 'c',
                text: '150'
            },
            {
                id: 'd',
                text: '100'
            }
        ],
        correct: 'd'
    },
    {
        id: 2,
        text: 'How many Concordes were made?',
        hint: null,
        choices:[
            {
                id: 'a',
                text: '100'
            },
            {
                id: 'b',
                text: '5'
            },
            {
                id: 'c',
                text: '20'
            },
            {
                id: 'd',
                text: '40'
            }
        ],
        correct: 'c'
    },
    {
        id: 3,
        text: 'Which two countries worked together to make the Concorde?',
        hint : {
            text: 'The test pilots were Brian Trubshaw and Andre Turcat (one from either country)',
            image: FlagImg,
        },
        choices:[
            {
                id: 'a',
                text: 'UK & Germany'
            },
            {
                id: 'b',
                text: 'UK & USA'
            },
            {
                id: 'c',
                text: 'UK & Russia'
            },
            {
                id: 'd',
                text: 'UK & France'
            }
        ],
        correct: 'd'
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
