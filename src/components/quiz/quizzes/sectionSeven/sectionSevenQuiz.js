import React, {Component} from 'react';
import QuizFormat from "../../quizStructure/quizStructure";
import BulbImg from "../../assets/lightbulb.svg";

const Questions = [
    {
        id: 1,
        text: 'Where does the luggage go when you are on a plane?',
        hint: {
            text: 'We have cut open an aeroplane so you can see. Can you find it?',
            image: BulbImg,
        },
        choices:[
            {
                id: 'a',
                text: 'In the roof'
            },
            {
                id: 'b',
                text: 'In the wings'
            },
            {
                id: 'c',
                text: 'Underneath the floor'
            },
            {
                id: 'd',
                text: 'In the tail'
            }
        ],
        correct: 'c'
    },
    {
        id: 2,
        text: 'Find the A320 cockpit. Spot the difference between the real cockpit and the picture below',
        hint: null,
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
