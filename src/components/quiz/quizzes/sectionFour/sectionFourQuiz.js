import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";

const Questions = [
    {
        id: 1,
        text: 'What day was WWII declared on?',
        choices:[
            {
                id: 'a',
                text: '3 September 1939'
            },
            {
                id: 'b',
                text: '3 August 1939'
            },
            {
                id: 'c',
                text: '15 September 1940'
            },
            {
                id: 'd',
                text: '3 September 1940'
            }
        ],
        correct: 'a'
    },
    {
        id: 2,
        text: 'What were the secret factories created during WWII called?',
        choices:[
            {
                id: 'a',
                text: 'Silhouette Stations'
            },
            {
                id: 'b',
                text: 'Shadow Factories'
            },
            {
                id: 'c',
                text: 'Dark Labs'
            },
            {
                id: 'd',
                text: 'Bleak Stores'
            }
        ],
        correct: 'b'
    },
    {
        id: 3,
        text: 'What was happening in Fry’s Chocolate Factory?',
        choices:[
            {
                id: 'a',
                text: 'Flight school for pilots'
            },
            {
                id: 'b',
                text: 'Plane carcass design'
            },
            {
                id: 'c',
                text: 'Development of weapons'
            },
            {
                id: 'd',
                text: 'Engine design and component making'
            }
        ],
        correct: 'd'
    },
    {
        id: 4,
        text: 'What was happening in Whitchurch Airport?',
        choices:[
            {
                id: 'a',
                text: 'Painting planes'
            },
            {
                id: 'b',
                text: 'Navigation control design'
            },
            {
                id: 'c',
                text: 'Aircraft assembly'
            },
            {
                id: 'd',
                text: 'Flying lessons'
            }
        ],
        correct: 'c'
    },
    {
        id: 5,
        text: 'What did ‘Nil time’ 501 Squadron’s motto meant?',
        choices:[
            {
                id: 'a',
                text: '"0 Seconds Left"'
            },
            {
                id: 'b',
                text: '"Fear Nothing"'
            },
            {
                id: 'c',
                text: '"No More Time"'
            },
            {
                id: 'd',
                text: '"Do Nothing"'
            }
        ],
        correct: 'b'
    },
]

class SectionFourQuiz extends Component {
    render () {
        return (
            <div>
                <QuizFormat questions={Questions} />
            </div>
        );
    }
}

export default SectionFourQuiz;
