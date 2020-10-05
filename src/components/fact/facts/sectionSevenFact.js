import React, {Component} from "react";
import FactFormat from "../factFormat";

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Section 7 Fact No. 1',
                number: 'Fact 1 of 2',
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'Section 7 Fact No. 2',
                number: 'Fact 2 of 2',
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
