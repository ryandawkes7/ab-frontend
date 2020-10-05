import React, {Component} from "react";
import FactFormat from "../factFormat";

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Did you know that a jumbo jet flying from London to New York burns about 4 litres of fuel per second? That is about 82,353 litres for the whole journey. That is enough fuel to fill up your family car over 1000 times!',
                number: 'Fact 1 of 2',
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'Did you know that most of an airliner’s fuel is stored in its wings?',
                number: 'Fact 2 of 2',
            },
        ],
    },
]

class SectionSixFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionSixFact;
