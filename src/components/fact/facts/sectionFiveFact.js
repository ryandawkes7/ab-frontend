import React, {Component} from "react";
import FactFormat from "../factFormat";

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'This little model is a Rolls-Royce idea for a flying car from the 1950’s. The car was never built but today people are looking at similar ideas again. Maybe this time we will be able to buy one?',
                number: 'Fact 1',
            },
        ],
    },
]

class SectionFiveFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionFiveFact;
