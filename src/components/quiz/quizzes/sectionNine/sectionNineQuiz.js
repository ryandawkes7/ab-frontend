import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'How many passengers can go on Concorde Alpha Foxtrot at once?',
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
