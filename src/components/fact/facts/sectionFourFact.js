import React, {Component} from "react";
import FactFormat from "../factFormat";

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Britain knew the war was coming and warned important industries. BAC started moving its workers to secret places across Bristol a month before the war officially began.',
                number: 'Fact 1 of 2',
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'Why are people designing planes in a swimming pool? During WWII Germany tried to bomb important factories around the UK. To protect their workers, companies like Bristol, sent lots of them to work in secret and unexpected places around the city instead of in the main factory.',
                number: 'Fact 2 of 2',
            },
        ]
    },
]

class SectionFourFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionFourFact;
