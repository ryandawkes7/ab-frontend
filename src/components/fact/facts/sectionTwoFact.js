import React, {Component} from "react";
import FactFormat from "../factFormat";

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Early aeroplanes were made from wood and fabric. This meant they caught fire easily so early pilots were as worried about fires as they were of crashing',
                number: 'Fact 1 of 2',
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'Pilots wore leather helmets like this to keep out the cold and the noise of their engine. Leather is warm, waterproof and also helps protect your head against fire.',
                number: 'Fact 2 of 2',
            },
        ]
    },
]

class SectionTwoFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionTwoFact;
