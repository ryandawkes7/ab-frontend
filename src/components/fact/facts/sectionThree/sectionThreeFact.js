import React, {Component} from "react";
import FactFormat from "../../factFormat";

import FactOne from './assets/factOne.svg';

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Why was an aeroplane company making lorries? After WWI, there were lots of aeroplanes left over from the war so not many people wanted a new one. Aeroplane companies had to do other jobs until enough people wanted new aeroplanes again.',
                number: 'Fact 1',
                image: FactOne
            },
        ],
    },
]

class SectionThreeFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionThreeFact;
