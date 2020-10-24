import React, {Component} from "react";
import FactFormat from "../../factFormat";

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Section Eight Fact No. 1',
                number: 'Fact 1 of 2',
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'Section Eight Fact No. 2',
                number: 'Fact 2 of 2',
            },
        ],
    },
]

class SectionEightFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionEightFact;
