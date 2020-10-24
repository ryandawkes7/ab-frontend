import React, {Component} from "react";
import FactFormat from "../../factFormat";

import FactOne from './assets/factOne.svg'; import FactTwo from './assets/factTwo.svg'; import FactThree from './assets/factThree.svg';

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Did you know that a jumbo jet flying from London to New York burns about 4 litres of fuel per second? That is about 82,353 litres for the whole journey. That is enough fuel to fill up your family car over 1000 times!',
                number: 'Fact 1 of 3',
                image: FactOne
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'Did you know that most of an airliner\'s fuel is stored in its wings?',
                number: 'Fact 2 of 3',
                image: FactTwo
            },
        ],
    },
    {
        options: [
            {
                id: 3,
                text: 'Airliner wings can change shape just like the wings of birds. This helps them take off, cruise and land more easily.',
                number: 'Fact 3 of 3',
                image: FactThree
            },
        ],
    },
]

class SectionSevenFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionSevenFact;
