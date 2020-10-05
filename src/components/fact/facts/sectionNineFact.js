import React, {Component} from "react";
import FactFormat from "../factFormat";

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Have you noticed the cushion on display? The Queen travelled on Concorde lots of times and when she did, she had her own specially made cushion for her seat. This is one of the cushions she used.',
                number: 'Fact 1',
            },
        ],
    },
]

class SectionNineFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionNineFact;
